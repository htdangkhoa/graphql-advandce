import cluster from 'cluster'
import os from 'os'
import dotenv from 'dotenv'
import morgan from 'morgan'
import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import graphqlHTTP from 'express-graphql'
import view from 'consolidate'
import path from 'path'
import timeout from 'connect-timeout'
import compression from 'compression'
import helmet from 'helmet'
import schema from './graphql/schema'

dotenv.config()

const numCPUs = os.cpus().length
const app = express()

mongoose.connect(process.env.DB_URI, (error, db) => {
    if (error) return console.log(error)

    return console.log('Connect successful')
})

app.use(express.static(path.resolve(__dirname, '../build')))
app.use((req, res, next) => {
    res.render = (file, params) => {
        var filePath = path.resolve(__dirname, '../build', file)
        
        view.mustache(filePath, params || {}, (error, html) => {
            if (error) return next(error)

            res.set('Content-Type', 'text/html')
            res.status(200).send(html)
        })
    }

    next()
})

app.get('/', (req, res) => {
    return res.render('index.html')
})

app.use([
    morgan('dev'),
    bodyParser.urlencoded({ extended: true, defaultCharset: 'utf-8', parameterLimit: 1024 }),
    bodyParser.json(),
    bodyParser.raw(),
    bodyParser.text(),
    compression(),
    helmet(),
    timeout('5s')
])

// if (cluster.isMaster) {
//     console.log(`Server is running on port ${process.env.PORT}`)
//     console.log(`Master ${process.pid} is running`)

//     for (let i = 0; i < numCPUs; i++) {
//         cluster.fork()
//     }

//     cluster.on('exit', (worker, code, signal) => {
//         console.log(`worker %d died (%s). restarting...`, worker.process.pid, signal || code)

//         cluster.fork()
//     })
// } else {
//     app.use('/graphiql', graphqlHTTP((req, res) => {
//         var startTime = Date.now()
    
//         return {
//             schema,
//             graphiql: true,
//             extensions({ document, variables, operationName, result }) {
//                 return { runTime: `${Date.now() - startTime}ms` }
//             }
//         }
//     }))

//     app.use((req, res) => {
//         res.status(404).send(`${res.statusCode}: Not Found`)
//     })
    
//     app.listen(process.env.PORT, () => {
//         console.log(`Server is running on port ${process.env.PORT}`)
//     })
// }

app.use('/graphiql', graphqlHTTP((req, res) => {
    var startTime = Date.now()

    return {
        schema,
        graphiql: true,
        extensions({ document, variables, operationName, result }) {
            return { runTime: `${Date.now() - startTime}ms` }
        }
    }
}))

app.use((req, res) => {
    res.status(404).send(`${res.statusCode}: Not Found`)
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})
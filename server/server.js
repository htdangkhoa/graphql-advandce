import cluster from 'cluster'
import os from 'os'
import dotenv from 'dotenv'
import morgan from 'morgan'
import express from 'express'
import cors from 'cors'
import cookiesParser from 'cookie-parser'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import graphqlHTTP from 'express-graphql'
import view from 'consolidate'
import path from 'path'
import timeout from 'connect-timeout'
import compression from 'compression'
import helmet from 'helmet'
import apicache from 'apicache'
import schema from './graphql/schema'

/**
 * Passport
 */
import passport from './passport'
import session from 'client-sessions'
import { secret } from './utils'

dotenv.config()

const numCPUs = os.cpus().length
const app = express()
const cache = apicache.middleware

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
    cors(),
    cookiesParser(),
    bodyParser.urlencoded({ extended: true, defaultCharset: 'utf-8', parameterLimit: 1024 }),
    bodyParser.json(),
    bodyParser.raw(),
    bodyParser.text(),
    session({ cookieName: 'session', secret, duration: 1000 * 60 * 60 * 24 * 365 * 999 }),
    passport.initialize(),
    passport.session(),
    compression()
])

app.get('/session', (req, res) => {
    res.send(req.session)
})
app.get('/login', passport.authenticate('local'), (req, res) => {
    res.send('ok')
})
app.get('/logout', (req, res) => {
    req.logout()
    req.session.destroy();
    res.send(req.session)
})

const graphQLCallback = (req, res, isDev) => {
    var startTime = Date.now()
    
    return {
        schema,
        graphiql: isDev,
        extensions({ document, variables, operationName, result }) {
            return { runTime: `${Date.now() - startTime}ms` }
        },
        context: { 
            req,
            res
        }
    }
}

if (cluster.isMaster) {
    console.log(`Server is running on port ${process.env.PORT}`)
    console.log(`Master ${process.pid} is running`)

    for (let i = 0; i < numCPUs; i++) {
        cluster.fork()
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker %d died (%s). restarting...`, worker.process.pid, signal || code)

        cluster.fork()
    })
} else {
    app.use('/graphql', graphqlHTTP((req, res) => {
        return graphQLCallback(req, res, false)
    }))

    app.use('/graphiql', graphqlHTTP((req, res) => {
        return graphQLCallback(req, res, true)
    }))
    
    app.use((req, res) => {
        res.status(404).send(`${res.statusCode}: Not Found`)
    })
    
    app.listen(process.env.PORT, () => console.log(`Server is running on port ${process.env.PORT}`))
}


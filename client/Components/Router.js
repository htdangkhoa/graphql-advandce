import Routes from 'preact-router'
import {
    h,
    render,
    Component
} from 'preact'
import App from './App'
import Home from './Home'
import Error404 from './404'

export default class Router extends Component {
    render() {
        return(
            <Routes>
                <App path="/"></App>
                <Home path="/home"></Home>
                <Error404 type="404" default />
            </Routes>
        )
    }
}
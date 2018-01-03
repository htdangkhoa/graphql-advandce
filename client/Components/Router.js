import Routes from 'preact-router'
import {
    h,
    render,
    Component
} from 'preact'
import {
    Container
} from 'reactstrap'
import App from './App'
import Home from '../Pages/Home'
import Error404 from '../Pages/404'

export default class Router extends Component {
    render() {
        return(
            <Container>
                <Routes>
                    <App path="/"></App>
                    <Home path="/home"></Home>
                    <Error404 type="404" default />
                </Routes>
            </Container>
        )
    }
}
import 'bootstrap/dist/css/bootstrap.css';
import {
    h,
    render,
    Component
} from 'preact'
import Router from './Components/Router'
import Header from './Components/Header'

class Container extends Component {
    render() {
        return(
            <div>
                <Header/>
                <Router/>
            </div>
        )
    }
}

render(<Container/>, document.body)
import 'bootstrap/dist/css/bootstrap.css';
import {
    h,
    render,
    Component
} from 'preact'
import Wrapper from './Styles'
import Header from './Components/Header'
import Router from './Components/Router'
import Footer from './Components/Footer'

class Container extends Component {
    render() {
        return(
            <Wrapper>
                <Header />
                <Router />
                <Footer />
            </Wrapper>
        )
    }
}

render(<Container />, document.body)
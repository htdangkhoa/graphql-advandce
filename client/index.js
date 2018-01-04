import 'bootstrap/dist/css/bootstrap.css';
import {
    h,
    render,
    Component
} from 'preact'
import {
    Provider
} from 'react-redux'
import store from './Redux/example'
import Wrapper from './Styles'
import Header from './Components/Header'
import Router from './Components/Router'
import Footer from './Components/Footer'

class Container extends Component {
    render() {
        return(
            <Provider store={store}>
                <Wrapper>
                    <Header />
                    <Router />
                    <Footer />
                </Wrapper>
            </Provider>
        )
    }
}

render(<Container />, document.body)
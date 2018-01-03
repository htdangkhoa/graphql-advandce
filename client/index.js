import 'bootstrap/dist/css/bootstrap.css';
import {
    h,
    render,
    Component
} from 'preact'
import styledComponents from 'styled-components'
import Router from './Components/Router'
import Header from './Components/Header'

const Wrapper = styledComponents.div`
    @import url('https://fonts.googleapis.com/css?family=Montserrat:300,300i,400,400i,700,700i');

    $montserrat: 'Montserrat', sans-serif

    body, * {
        font-family: 'Montserrat', sans-serif;
        font-weight: 
    }
`

class Container extends Component {
    render() {
        return(
            <Wrapper>
                <Header/>
                <Router/>
            </Wrapper>
        )
    }
}

render(<Container/>, document.body)
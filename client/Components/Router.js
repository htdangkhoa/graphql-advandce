import Routes from 'preact-router'
import {
    h,
    render,
    Component
} from 'preact'
import Home from '../Pages/Home'
import Error404 from '../Pages/404'

import styledComponents from 'styled-components'

const Wrapper = styledComponents.div`
    margin-top: 60px;
    margin-bottom: 160px;
`

class Router extends Component {
    render() {
        return(
            <Wrapper className='container' >
                <Routes>
                    <Home path="/"></Home>
                    <Error404 type="404" default />
                </Routes>
            </Wrapper>
        )
    }
}

export default Router
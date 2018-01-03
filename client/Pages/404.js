import {
    h,
    render,
    Component
} from 'preact'
import {
    
} from 'reactstrap'
import styleComponents from 'styled-components'

const Wrapper = styleComponents.div`
    .center {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
`

export default class Error404 extends Component {
    render() {
        return(
            <Wrapper>
                <div className='center'>
                    <span>Error: 404</span>
                </div>
            </Wrapper>
        )
    }
}
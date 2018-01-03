import {
    h,
    render,
    Component
} from 'preact'
import {
    Button
} from 'reactstrap'
import styledComponents from 'styled-components'
import { 
    BorderRadius, 
    Padding 
} from '../Styles/Default'

const Wrapper = styledComponents.div`
    text-align: center;

    h1 {
        font-size: 12em;
        font-weight: 600;
        position: relative;
    }

    p {
        font-size: 40px;
    }

    button {
        background: transparent;
        border: 2px solid #000;
        border-radius: ${BorderRadius};
        padding: ${Padding};
        text-transform: uppercase;
        color: #000;
    }
`

export default class Error404 extends Component {
    render() {
        return(
            <Wrapper>
                <div className='center'>
                    <h1>404</h1>
                    <p>Oops, the page you're looking for doesn't exist.</p>
                    <a href="/"><Button>Go to homepage</Button></a>
                </div>
            </Wrapper>
        )
    }
}
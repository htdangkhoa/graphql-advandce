import {
    h,
    render,
    Component
} from 'preact'
import {
    Container
} from 'reactstrap'
import styledComponents from 'styled-components'
import { MainGray } from '../Styles/Colors';
import ScrollUpButton from '../Components/ScrollUpButton'

const Wrapper = styledComponents.footer`
    background: ${MainGray};
    position: absolute;
    width: 100%;
    height: 100px;
    bottom: 0;
`

export default class Footer extends Component {
    render() {
        return(
            <Wrapper>
                <ScrollUpButton />
            </Wrapper>
        )
    }
}
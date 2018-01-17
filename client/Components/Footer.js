import {
    h,
    render,
    Component
} from 'preact'
import { Container } from 'reactstrap'
import styledComponents from 'styled-components'
import { MainGray } from '../Styles/Colors';
import ScrollUpButton from '../Components/ScrollUpButton'

const Wrapper = styledComponents.footer`
    background: ${MainGray};
    position: fixed;
    width: 100%;
    height: 100px;
    bottom: 0;
`.withComponent('footer')

class Footer extends Component {
    render() {
        return(
            <Wrapper>
                <Container>Footer</Container>
                <ScrollUpButton />
            </Wrapper>
        )
    }
}

export default Footer
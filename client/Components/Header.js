import {
    h,
    render,
    Component
} from 'preact'
import {
    Navbar, 
    NavbarBrand, 
    Nav, 
    NavItem, 
    NavLink,
    ButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Input,
    Container
} from 'reactstrap'
import * as Typicons from 'react-icons/ti'
import Styled from 'styled-components'
import { MainGray } from '../Styles/Colors';

const Wrapper = Styled.div`
    background: ${ MainGray };
    position: fixed;
    top: 0px;
    width: 100%;
    z-index: 999999999999;

    .listLocation {
        height: 250px;
        overflow-y: scroll;
    }
`

class Header extends Component {
    constructor(props) {
        super(props)

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        }
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return(
            <Wrapper>
                <Container>
                    <Navbar color="faded" light expand="md">
                        <NavbarBrand href="/">Food Finder</NavbarBrand>
                        {/* <NavbarToggler onClick={this.toggle} /> */}
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/signin">Sign in</NavLink>
                            </NavItem>
                        </Nav>
                    </Navbar>
                </Container>
            </Wrapper>
        )
    }
}

export default Header
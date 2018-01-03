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

const Wrapper = Styled.div`
    .listLocation {
        height: 250px;
        overflow-y: scroll;
    }
`

export default class Header extends Component {
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
                                <Input placeholder='Search'/>
                            </NavItem>
                            <NavItem>
                                <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                    <DropdownToggle caret size="md">
                                        Location
                                    </DropdownToggle>
                                    <DropdownMenu className='listLocation'>
                                        <DropdownItem>Another Action</DropdownItem>
                                    </DropdownMenu>
                                </ButtonDropdown>
                            </NavItem>
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
import {
    h,
    render,
    Component
} from 'preact'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { TiChevronLeft, TiChevronRight } from 'react-icons/ti'
import styledComponents from 'styled-components'

const Wrapper = styledComponents.ul`
    margin-top: 15px;
    text-align: center;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
`.withComponent(Pagination)

class Paging extends Component {
    render() {
        return(
            <Wrapper right>
                <PaginationItem>
                    <PaginationLink href='#'>
                        <TiChevronLeft />
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href='#'>1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href='#'>2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href='#'>3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href='#'>4</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href='#'>5</PaginationLink>
                </PaginationItem>
                
                <PaginationItem>
                    <PaginationLink href='#'>
                        <TiChevronRight />
                    </PaginationLink>
                </PaginationItem>
            </Wrapper>
        )
    }
}

export default Paging
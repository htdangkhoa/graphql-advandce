import {
    h,
    render,
    Component
} from 'preact'
import { Input, Container, Col, Row } from 'reactstrap';
import styledComponents from 'styled-components'

const Wrapper = styledComponents.div`
    margin-left: -5px;
    margin-right: -5px;

    div[class*='col'] {
        padding-left: 5px;
        padding-right: 5px;
        margin-top: 5px;
        margin-bottom: 5px;
    }
`.withComponent(Row)

class Filter extends Component {
    render() {
        return(
            <div>
                <Wrapper>
                    <Col lg='8' md='6' sm='12' xs='12'>
                        <Input placeholder='Search...'/>
                    </Col>
                    <Col lg='2' md='3' sm='6' xs='6'>
                        <Input type='select'>
                            <option>Categories</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Input>
                    </Col>
                    <Col lg='2' md='3' sm='6' xs='6'>
                        <Input type='select'>
                            <option>City</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Input>
                    </Col>
                </Wrapper>
            </div>
        )
    }
}

export default Filter
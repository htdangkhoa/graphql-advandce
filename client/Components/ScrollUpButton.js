import {
    h,
    render,
    Component
} from 'preact'
import {
    Button
} from 'reactstrap'
import {
    TiArrowUpThick
} from 'react-icons/ti'
import styledComponents from 'styled-components'

const Wrapper = styledComponents.button`
    background: #fff;
    position: fixed;
    bottom: 115px;
    right: 15px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: none;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    box-shadow: 0 0 8px 0 rgba(0,0,0,0.12), 0 5px 15px 0 rgba(0,0,0,.25);
`.withComponent(Button)

export default class ScrollUpButton extends Component {
    render() {
        return(
            <Wrapper>
                <TiArrowUpThick color='#000' size={25} />
            </Wrapper>
        )
    }
}
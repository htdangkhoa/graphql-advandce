import {
    h,
    render,
    Component
} from 'preact'
import { connect } from 'react-redux'
import { Button } from 'reactstrap'
import { TiArrowUpThick } from 'react-icons/ti'
import styledComponents from 'styled-components'
import { MainPink } from '../Styles/Colors'
import polyfill from 'smoothscroll-polyfill'

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
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, .12), 0 5px 15px 0 rgba(0, 0, 0, .25);

    &:active, &:focus {
        border: none !important;
        box-shadow: 0 0 8px 0 rgba(0, 0, 0, .12), 0 5px 15px 0 rgba(0, 0, 0, .25) !important;
    }
`.withComponent(Button)

class ScrollUpButton extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isTop: true
        }
    }

    componentWillMount() {
        polyfill.polyfill()

        console.log(this.props)
    }

    componentDidMount() {
        window.addEventListener('scroll', this.checkIsScrollTop)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.checkIsScrollTop)
    }

    checkIsScrollTop = (event) => {
        if (event.currentTarget.scrollY === 0) {
            this.setState({isTop: true})
        } else {
            this.setState({isTop: false})
        }
    }

    scrollTop =  () => {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' })
        // var { dispatch } = this.props
        // this.props.dispatch({type: 'TOGGLE'})
    }

    render() {
        return(
            <Wrapper hidden={this.state.isTop} onClick={this.scrollTop.bind(this)} >
                <TiArrowUpThick color={MainPink} size={25} />
            </Wrapper>
        )
    }
}

export default connect(function(state) {
    var { mang, isAdding } = state
    return {
        mang, isAdding
    }
})(ScrollUpButton)
import {
    h,
    render,
    Component
} from 'preact'
import styleComponent from 'styled-components'

const Styles = styleComponent.div`
    .test {
        background: #f00;
    }
`

export default class App extends Component {
    render() {
        return(
            <Styles>
                <span className="test">Hello wolrd!!!</span>
                <br/>
                <a href="/home">Home</a>
            </Styles>
        )
    }
}
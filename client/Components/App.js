import {
    h,
    render,
    Component
} from 'preact'
import styleComponents from 'styled-components'

const Styles = styleComponents.div`
    $red: '#f00'

    .test {
        background: $red;
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
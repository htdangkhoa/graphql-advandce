import {
    h,
    render,
    Component
} from 'preact'

export default class Home extends Component {
    render() {
        return(
            <div>
                <span>This is home page.</span>
                <br/>
                <a href="/">Back</a>
            </div>
        )
    }
}
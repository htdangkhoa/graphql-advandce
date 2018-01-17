import {
    h,
    render,
    Component
} from 'preact'

const img = new Image();

class ImageLoad extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loaded: false
        }
    }

    componentDidMount() {
        img.addEventListener('load', this.checkLoadImage(this), false)
        img.src = this.props.src;
    }

    componentWillUnmount() {
        img.removeEventListener('load', this.checkLoadImage)
    }

    checkLoadImage(_this) {
        setTimeout(() => {
            _this.setState({ loaded: true })
        }, 500);
    }

    render() {
        if (this.state.loaded) {
            return(
                <img {...this.props} />
            )
        } else {
            /**
             * Return default image when waiting load image fetched from server.
             */
            return <img />
        }
    }
}

export default ImageLoad
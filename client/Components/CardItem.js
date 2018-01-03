import {
    h,
    render,
    Component
} from 'preact'
import {
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardText
} from 'reactstrap'
import styledComponents from 'styled-components'

const Wrapper = styledComponents.div`
    width: 100%;
    height: 100%;
    border-radius: 8px;

    a {
        text-decoration: none;

        h5 {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            color: #000;
        }
    }

    .card-descriptiom {
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
    }

    .image-container {
        max-height: 250px;
        position: relative;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
        }

        .opacity {
            background: linear-gradient(rgba(255, 255, 255, 0), rgba(0, 0, 0, .3));
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
        }
    }
`.withComponent(Card)

export default class CardItem extends Component {
    render() {
        return(
            <Wrapper width={this.props.width}>
                <div className='image-container'>
                    <CardImg top src={this.props.image} alt="Card image cap" />
                    <div className='opacity'/>
                </div>
                <CardBody>
                    <a href={'/' + this.props.id}>
                        <h5 data-toggle="tooltip" title={this.props.title} >{this.props.title}</h5>
                    </a>
                    <span className='card-descriptiom card-text'>{this.props.description}</span>
                </CardBody>
            </Wrapper>
        )
    }
}
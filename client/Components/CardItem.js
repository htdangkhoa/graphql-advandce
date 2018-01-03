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
    width: calc(${ props => props.width }% - 16px);
    margin: 5px;
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

    .cardDescriptiom {
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
    }

    img {
        width: 100%;
        max-height: 250px;
        object-fit: cover;
    }
`.withComponent(Card)

export default class CardItem extends Component {
    render() {
        return(
            <Wrapper width={this.props.width}>
                <CardImg top src={this.props.image} alt="Card image cap" />
                <CardBody>
                    <a href={'/' + this.props.id}>
                        <h5 data-toggle="tooltip" title={this.props.title} >{this.props.title}</h5>
                    </a>
                    <span className='cardDescriptiom card-text'>{this.props.description}</span>
                </CardBody>
            </Wrapper>
        )
    }
}
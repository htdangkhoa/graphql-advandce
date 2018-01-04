import {
    h,
    render,
    Component
} from 'preact'
import {
    connect
} from 'react-redux'
import {
    Row,
    Col
} from 'reactstrap'
import styledComponents from 'styled-components'
import CardItem from '../Components/CardItem'

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

export default class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: []
        }
    }

    componentDidMount() {
        fetch('http://latte.lozi.vn/v1.2/search/blocks?skip=0&q=gà&limit=24&t=popular&cityId=50')
            .then(result => {
                return result.json()
            })
            .then(response => {
                var { data } = response
                this.setState({ data: data })
                
                console.log(this.state.data)
            })

        // var { dispatch } = this.props
        // dispatch({type: 'TOGGLE'})
        // console.log(this.props)
    }

    render() {
        return(
            <div>
                <Wrapper className='row-eq-height'>{
                    this.state.data.map((data) => {
                        return(
                            <Col lg='2' md='3' sm='4' xs='6'>
                                <CardItem width={100} id={data._id} image={data.image} title={data.dish.eatery.name} description={data.caption}/>
                            </Col>
                        )
                    })
                }</Wrapper> 
            </div>
        )
    }
}

// export default connect(state => {
//     var { mang, isAdding } = state
//     return {
//         mang,
//         isAdding,
//         data: []
//     }
// })(Home)
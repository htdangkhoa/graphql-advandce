import {
    h,
    render,
    Component
} from 'preact'
import {
    Row
} from 'reactstrap'
import CardItem from '../Components/CardItem'

export default class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: []
        }
    }

    componentDidMount() {
        fetch('http://latte.lozi.vn/v1.2/search/blocks?skip=0&q=gà&limit=20&t=popular&cityId=50')
            .then(result => {
                return result.json()
            })
            .then(response => {
                var { data } = response
                
                var newArr = []
                while (data.length > 0) newArr.push(data.splice(0, 5))

                this.setState({ data: newArr })
                
                console.log(this.state.data)
                response.data.map((ele) => {
                    return(
                        <Row/>
                    )
                })
            })
    }

    render() {
        return(
            <div>{
                this.state.data.map((elelent) => {
                    return(
                        <Row>{
                            elelent.map((data) => {
                                return <CardItem width={100/5} id={data._id} image={data.image} title={data.dish.eatery.name} description={data.caption}/>
                            })
                        }</Row>
                    )
                })
            }</div>
        )
    }
}
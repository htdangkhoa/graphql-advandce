import {
    h,
    render,
    Component
} from 'preact'
import { connect } from 'react-redux'
import {
    Row,
    Col
} from 'reactstrap'
import styledComponents from 'styled-components'
import CardItem from '../Components/CardItem'
import CardLoading from '../Components/CardLoading'
import Filter from '../Components/Filter'
import Paging from '../Components/Paging'

/**
 * GraphQL client.
 */
import gql from 'graphql-tag'
import client from '../GraphQL/Client'

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

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: [{}, {}, {}, {}],
            loaded: false
        }
    }

    componentDidMount() {
        // var { dispatch } = this.props
        // dispatch({type: 'TOGGLE'})
        // console.log(this.props)

        var query = gql`
            query {
                SearchWithFilters(
                    filters: {
                        name: "gà"
                    }, limit: 20, skip: 20) {
                    id
                    name
                    categories
                    eatary
                    images
                    discription
                }
            }
        `

        client.query({
            query
        })
        .then(res => {
            console.log(res.data.SearchWithFilters)
            this.setState({data: res.data.SearchWithFilters, loaded: true})
        })
        .catch(error => console.log(error))
    }

    render() {
        return(
            <div>
                <Filter />
                <Wrapper className='row-eq-height'>{
                    this.state.data.map((data) => {
                        return(
                            <Col lg='3' md='3' sm='4' xs='6'>{
                                this.state.loaded !== true ? (
                                    <CardLoading />
                                ) : (
                                    <CardItem width={100} id={data.id} image={data.images[0]} title={data.eatary.name} description={data.discription}/>
                                )
                            }</Col>
                        )
                    })
                }</Wrapper>
                <Paging />
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

export default Home
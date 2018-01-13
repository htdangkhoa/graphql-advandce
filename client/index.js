import 'bootstrap/dist/css/bootstrap.css';
import {
    h,
    render,
    Component
} from 'preact'
import { Provider } from 'react-redux'
import { ApolloProvider } from 'react-apollo'
import GraphQLClient from './GraphQL/Client'
import store from './Redux/example'
import Wrapper from './Styles'
import Header from './Components/Header'
import Router from './Components/Router'
import Footer from './Components/Footer'

class Container extends Component {
    componentWillMount() {
        var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
        link.type = 'image/x-icon';
        link.rel = 'shortcut icon';
        link.href = './favicon.ico';
        document.getElementsByTagName('head')[0].appendChild(link);
        document.title = 'Food Finder'
    }

    render() {
        return(
            <Provider store={store}>
                <ApolloProvider client={GraphQLClient}>
                    <Wrapper>
                        <Header />
                        <Router />
                        <Footer />
                    </Wrapper>
                </ApolloProvider>
            </Provider>
        )
    }
}

render(<Container />, document.body)
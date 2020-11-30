import {ApolloClient, createHttpLink,  InMemoryCache} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';
import store from '..';
import { mappedEndPoints, mappedLinks } from '../../maps';

const httpLink = createHttpLink({
    uri: mappedEndPoints.graphql,
});

const authLink = setContext((_, {headers}) => {
    const auth = store.getState().auth;
    const token = auth.access_token || null;
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}`: "",
        }
    }

})

const graphClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
})


export default graphClient;
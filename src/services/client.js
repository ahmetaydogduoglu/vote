import {
    ApolloClient,
    InMemoryCache
} from "@apollo/client";


export const query = (queryString) => {
    const client = new ApolloClient({
        uri: 'http://localhost:9002/graphql',
        cache: new InMemoryCache()
    });

    return new Promise((resolve, reject) => {
        client.query({
            query: queryString
        })
            .then(result => { resolve(result); })
            .catch(err => { reject(err); });
    });
}
import React from 'react';
import {ApolloClient, InMemoryCache, gql, ApolloProvider} from '@apollo/client';


const client = new ApolloClient({
  uri: "http://apis.hapipie.com:3333/graphql",
  cache: new InMemoryCache(), 
});

client.query({
    query: gql`
        query {
            allClients {
            username
            id
          }
        }
    `
}).then(result => console.log(result)).catch(() => {
    console.log("There is an error");
})

export default function ApolloClientDemo(props){
    return (
      <ApolloProvider client={client}>
        <div>Test Apollo</div>
      </ApolloProvider>
    );
}
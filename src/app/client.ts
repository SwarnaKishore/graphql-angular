import { ApolloClient, createNetworkInterface } from 'apollo-client';

const clientConfig = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'https://api.github.com/graphql'
  })
});

export function client(): ApolloClient {
  return clientConfig;
}
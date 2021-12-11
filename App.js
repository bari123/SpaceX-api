
import React from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import GetData from "./home";


const klient = new ApolloClient({
  uri: 'http://api.spacex.land/graphql/',
  cache: new InMemoryCache()
});



const App = () => {
  return (

    <ApolloProvider client={klient}>

      <GetData />

    </ApolloProvider>

  );

}

export default App;

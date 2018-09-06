import * as React from "react";
import List from "./components/list";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

// apollo client setup
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

class App extends React.Component {
  public render() {
    return (
      <ApolloProvider client={client}>
        <div id="main">
          <h1>Pick Up Lines</h1>
          <List />
        </div>
      </ApolloProvider>
    );
  }
}
export default App;

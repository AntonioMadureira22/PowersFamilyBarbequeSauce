// import './App.css';
import * as React from "react";
import "./Nav.css";
import Nav from "./components/Nav";
import About from "./components/About";
import Store from "./components/Store";
import Login from "./components/Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
// import DemoCarousel from "./components/Carousel";

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

// const authLink = setContext((_, { headers }) => {
//   const token = localStorage.getItem('id_token');
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : '',
//     },
//   };
// });

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        
        <header className="App-header">
          <Nav />
          <Routes>
            
            <Route path="/about" element={<About />} />
            <Route path="/store" element={<Store />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <h2 className="Name"></h2>
          <br />
          <div className="slogan"></div>
        </header>
      </div>
     </ApolloProvider>
  );
}

export default App;

// import './App.css';
import * as React from "react";
import "./Nav.css";
import Nav from "./components/Nav";
import About from './components/About';
import Store from './components/Store';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from 'react-router-dom';
// import DemoCarousel from "./components/Carousel";
// import About from './components/About'

function App() {
  return (
    <div className="App">
      <header className="App-header">
         <Nav></Nav>
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
  );
}

export default App;

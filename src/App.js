// import './App.css';
import * as React from "react";
import "./Nav.css";
import Nav from "./components/Nav";
import About from './components/About';
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
          </Routes>
        <h2 className="Name"></h2>
        <br />
        <div className="slogan"></div>
      </header>
    </div>
  );
}

export default App;

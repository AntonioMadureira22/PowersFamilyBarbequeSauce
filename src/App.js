import './App.css';
import Nav from './components/Nav'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="outer-container">
        <Nav pageWrapId={ "page-wrap" } isOpen={ false }/>
        <main id="page-wrap">

        </main>
        </div>
      </header>
    </div>
  );
}

export default App;

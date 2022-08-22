import logo from './logo.svg';
import './App.css';
import {Scoreboard} from "./components/scoreboard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Scoreboard />
        <p>Test from Michel-Jean</p>
      </header>
    </div>
  );
}

export default App;

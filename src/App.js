import logo from "./logo.svg";
import "./App.css";
import { Solution } from "./components/Solution";
import { Score } from "./components/Score";
import { Letters } from "./components/Letters";

function App() {
  return (
    <div className="App">
      <Score />
      <Solution />

      <div>Available Letters</div>
      <Letters />
    </div>
  );
}

export default App;

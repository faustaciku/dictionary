import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary</h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer>
          This project was coded by Fausta Ciku and it is{" "}
          <a href="https://github.com/faustaciku/dictionary">open-sourced</a> on
          Github.
        </footer>
      </div>
    </div>
  );
}

export default App;

import React from "react";
import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">📚WORD-KHO📚</header>
      <main>
        <Dictionary />
      </main>
      <footer>
        This project was coded by <span> </span>
        <a
          href="https://github.com/Karabo-Khoza"
          target="_blank"
          rel="noreferrer"
        >
          Karabo Khoza
        </a>
        , is open-sourced on <span> </span>
        <a
          href="https://github.com/Karabo-Khoza/dictionary-project"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
        <span> </span>
        and hosted on <span> </span>
        <a
          href="https://dictionarykho.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;

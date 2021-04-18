import './App.css';
import Dictionary from "./Dictionary/Dictionary"

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <h1>
            Dictionary
          </h1>
          <br />
          <Dictionary defaultKeyword="hello" />
        </main>
        <footer className="App-footer">
          <small>
          <p className="CodedBy">
            <a
              href="https://github.com/SarahMussa/dictionary-project-react.git"
              target="_blank"
              rel="noreferrer"
            >
              Open-source code by Sarah Mussa
            </a>
          </p>
          </small>
        </footer>
      </div>
    </div>
  );
}


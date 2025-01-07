import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="Octocat.png" className="App-logo" alt="logo" />
        <p>
        Jogo da Velha <span className="heart">♥️</span> React | GitHub Codespaces
        </p>
        <p className="small">
          Para fazer o jogo, siga o tutorial link abaixo.
        </p>
        <p className="small">
          Altere o arquivo <code>src/App.jsx</code> e salve para recarregar.
        </p>
        <p>
          <a
            className="App-link"
            href="https://pt-br.react.dev/learn/tutorial-tic-tac-toe"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tutorial React: Jogo da Velha
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="" >
        <h1>Rick app</h1>  
      </header>
      <div>
        <h1 className="text-center">¿Qué buscamos?</h1>
        <div className="d-flex flex-column" >
        <button><a href="/characters">Personajes</a></button>
        <button><a href="/locations">Locaciones</a></button>
        <button><a href="/episodes">Episodios</a></button>
        </div>
      </div>
    </div>
  );
}

export default App;

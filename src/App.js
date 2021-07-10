import './App.css';
import PokeContainer from './components/PokeContainer';

function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid">
          <h4>Pokedex</h4>
        </div>
      </nav>
      <PokeContainer/>
    </div>
  );
}

export default App;

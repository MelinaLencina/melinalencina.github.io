import './App.css';

function Persona(){
  return(
    <div>
      <h3>Nombre: Melina</h3>
      <p>Fecha de nacimiento: 06/05</p>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <h1>Hola mundo</h1>
      <Persona />
    </div>
  );
}

export default App;

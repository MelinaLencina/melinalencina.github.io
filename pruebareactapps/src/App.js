import './App.css';

function Persona(props){
  return(
    <div className="persona"
        style={{backgroundColor: props.color}}
    >
      <h3>Nombre: {props.nombre} </h3>
      <p>Fecha de nacimiento: {props.nacimiento} </p>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <h1>Hola mundo</h1>
      <Persona nombre="Melina" nacimiento="06/05" color="violet" />
    </div>
  );
}

export default App;

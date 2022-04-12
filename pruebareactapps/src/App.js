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
      <Persona nombre="Melina" nacimiento="06/05" color="darkmagenta" />
      <Persona nombre="Fabiana" nacimiento="05/09" color="pink" />
      <Persona nombre="Gastón" nacimiento="02/05" color="firebrick" />
    </div>
  );
}

export default App;

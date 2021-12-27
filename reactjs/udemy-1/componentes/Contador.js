const Contador = () => {

    const [contador, setContador] = React.useState(0);
    
    const aumentar = () => setContador(contador + 1);
    const disminuir = () => setContador(contador - 1);


    return (
        <div>
            <h1 className={contador < 0 ? "menor" : "mayor"}>Contador: {contador}</h1>
            <hr />

            <button onClick={disminuir}> Disminuir </button>
            <button onClick={aumentar}>Aumentar</button>
        </div>)
        }
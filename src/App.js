import { useState, useEffect } from 'react'

/* USEEFFECT: ES UNA FUNCION QUE FUCIONA CON DOS ARGUMENTOS:
  Primer argumento Funcion con la logica que va a ejecutar
segundo elemento dependencias que se necesitan para funcionar */

const useContador = (inicial) => {
  const [contador, setContador] = useState(inicial)
  const incrementar = () => {
    setContador(contador + 1)
  }

  return [contador, incrementar]
}

const Interval = ({ contador }) => {
  useEffect (() => {
    const i = setInterval(() => console.log(contador), 1000)
    return () => clearInterval(i)
  }, [contador])
  return (
    <p>Intervalo</p>
  )
}

const App = () => {
  const [contador, incrementar] = useContador(0) 
  useEffect(() => {
    document.title = contador;
  }, [contador])
  return(
    <div>
      Contador: { contador }
      <button onClick={incrementar}>Increment</button>
      <Interval contador={contador} />
    </div>
  )

}


export default App;

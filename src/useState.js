import { useState } from 'react'

/* reglas de los hooks
-- No se llaman en loops, ni condiciones, ni while, ni nada
siempre en el nivel mas alto del componente
-- Solo se llaman en 2 partes:
** dentro del componente de React
** en un custom hooks
------Cuando creemos un CUSTOM HOOK "use*y el nombre que le 
querramos dar"  */

/* HOOK NORMAL
const App = () => {
  const [contador, setContador] = useState(0) 
  return(
    <div>
      Contador: { contador }
      <button onClick={() => setContador(contador + 1)}>Increment</button>
    </div>
  )

}
 CUSTOM HOOK */
const useContador = (inicial) => {
  const [contador, setContador] = useState(inicial)
  const incrementar = () => {
    setContador(contador + 1)
  }

  return [contador, incrementar]
}

const App = () => {
  const [contador, incrementar] = useContador(0) 
  return(
    <div>
      Contador: { contador }
      <button onClick={incrementar}>Increment</button>
    </div>
  )

}


export default App;
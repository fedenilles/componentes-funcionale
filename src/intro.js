/* Funcion Impura para devolver la fecha actual */

const impura = () => new Date().toLocaleString()

console.log(impura());

const MiComponente = ({miProp}) => {
  return (
    <div>
      Saludo: {miProp} 
    </div>
  )
}



const App = () => {
  return (
    <MiComponente miProp={'Hola Mundo'} />
  )
}



export default App;

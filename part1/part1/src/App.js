import './App.css';
import Mensaje from './Mensaje';

const Description = () => {
  return <div>Este es el curso de Desarrollo Fullstack</div>
}

const App = () => {
  return (
    <div className="App">
      <h1>Título de mi aplicación</h1>
      <p>Y este es un párrafo de ejemplo</p>
      <Mensaje message='Hola, estamos trabajando'/>
      <Mensaje message='Hola, seguimos trabajando'/>
      <Mensaje message='Y terminaremos después'/>
      <Description/>
    </div>
  );
}

export default App;

import React from "react"; //Importo React para utilizar JSX y definir componentes.
import TrafficLight from "./TrafficLight.jsx"; //importo el componente TrafficLight que acabo de crear.

//Utilizando las clases de Bootstrap, le pongo text-center para centrar el contenido y mt-5 para añadir un margen superior al contendor donde va a crearse el semáforo.
// SIEMPRE  incluir el componente (TrafficLight) dentro del Home.
const Home = () => {
  return (
    <div className="text-center mt-5"> 
      <h1>Seguriño</h1> 
      <TrafficLight /> 
    </div>
  );
};

export default Home;


import React, { useState } from 'react';
import '../../styles/index.css'; // Importa tus estilos CSS desde la carpeta 'styles'


const TrafficLight = () => {
  const [color, setColor] = useState('red'); //creo una variable de estado llamada color y una función para actualizarla llamada setColor. UseState, le doy el valor de luz roja, xque cuando se encienden estan en rojo y es su estado inicial.
  //const [color, setColor] = useState(''); el semáforo no tendría un color activo, osea que no mostraría ninguna luz encendida hasta que el usuario haga clic en una.

//creo la representación visual del semáforo, que posteriormente se RENDERIZA en el DOM.

  return (
    //carcasa negra.
    <div className="container d-flex justify-content-center align-items-center" style={{ height: '70vh' }}> {/* Ajusta la altura del contenedor principal */}
        <div className="traffic-light-container align-items-center"> {/* Carcasa */}
            <div className="d-flex flex-column align-items-center"> {/* Luces */}
                <div //Luces del Semáforo: rounded-circle para hacerla circular y bg-danger, bg-warning, bg-success para los colores rojo, amarillo y verde respectivamente.
                    className={`rounded-circle bg-danger light red ${color === 'red' ? 'active' : ''}`} // clases de Bootstrap: bg-danger = rojo, Bg-warning=amarillo, Bg-success=Verde
                    onClick={() => setColor('red')} //cuando se hace clic en una luz, cambiando el color activo del semáforo.
                    style={{ width: '100px', height: '100px', margin: '10px' }}
                ></div>
                <div 
                    className={`rounded-circle bg-warning light yellow ${color === 'yellow' ? 'active' : ''}`} // Si color es igual a 'amarillo', la clase active se aplicará al elemento.
                    onClick={() => setColor('yellow')} 
                    style={{ width: '100px', height: '100px', margin: '10px' }}
                ></div>
                <div 
                    className={`rounded-circle bg-success light green ${color === 'green' ? 'active' : ''}`}
                    onClick={() => setColor('green')}
                    style={{ width: '100px', height: '100px', margin: '10px' }}
                ></div>
            </div>
        </div>
    </div>
  );
};

export default TrafficLight;
 

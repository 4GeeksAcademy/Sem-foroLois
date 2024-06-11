
import React, { useState } from 'react';
import '../../styles/index.css'; // Importa tus estilos CSS desde la carpeta 'styles'


const TrafficLight = () => {
  const [color, setColor] = useState('red'); //creo una variable de estado llamada color y una función para actualizarla llamada setColor. UseState, le doy el valor de luz roja, xque cuando se encienden estan en rojo y es su estado inicial.
  //const [color, setColor] = useState(''); el semáforo no tendría un color activo, osea que no mostraría ninguna luz encendida hasta que el usuario haga clic en una.
  const [purple, setPurple] = useState(false); // Estado para controlar la visibilidad del color púrpura

  const AlternaColor = () => { //Esta función cambia el color del semáforo en un ciclo de rojo -> amarillo -> verde -> rojo.
    if (color === 'red') { // si el color actual es rojo, significa que el semáforo está en rojo y debe cambiar al siguiente color, que es amarillo, lo que cambia el estado color a 'yellow'.
      setColor('yellow');
    } else if (color === 'yellow') { //si el color actual es amarillo , y debe cambiar al siguiente color, que es verde.Por lo tanto, se llama a setColor('green'), lo que cambia el estado color a 'green'.
      setColor('green');
    } else if (color === 'green') { //Si ninguna de las condiciones anteriores se cumple, si el color actual es verde. Esto significa que el semáforo está en verde.
      setColor('red'); //En este caso, se debe volver al color rojo para reiniciar el ciclo del semáforo
    } else {
      setColor ('red'); // si ninguna se cumple, el color va a ser el rojo.
      setPurple (false)
    }
};

//ME CUESTA ENTENDER ESTO 😭
const Púrpura = () => {
  setPurple(!purple); //Si purple es true = lo convierte en false, y viceversa. Entonces, cada vez que haces clic en el botón, cambia entre activado y desactivado.
  if (!purple && color !== 'purple') { // Si el modo púrpura está desactivado (!purple) y el color actual no es púrpura (color !== 'purple'), Si ambas condiciones se cumplen, significa que el modo púrpura está desactivado y el color actual no es púrpura.
    setColor('purple'); // Si la condición del paso anterior se cumple, es decir, si el modo púrpura está desactivado y el color actual no es púrpura, entonces esta línea establece el color del semáforo en púrpura.

  }
};


//creo la representación visual del semáforo, que posteriormente se RENDERIZA en el DOM.

  return (
    //carcasa negra.
    <div className="container d-flex justify-content-center align-items-center" style={{ height: '70vh' }}> {/* Ajusta la altura del contenedor principal */}
        <div className="traffic-light-container align-items-center"> {/* Carcasa */}
            <div className="d-flex flex-column align-items-center"> {/* Luces */}
                <div //Luces del Semáforo: rounded-circle para hacerla circular y bg-danger, bg-warning, bg-success para los colores rojo, amarillo y verde respectivamente.
                    className={`rounded-circle bg-danger light red ${color === 'red' ? 'active' : ''}`} // clases de Bootstrap: bg-danger = rojo, Bg-warning=amarillo, Bg-success=Verde
                    onClick={() => setColor('red')} //cuando se hace clic en una luz, cambiando el color activo del semáforo.
                    style={{ width: '100px', height: '100px', margin: '10px' }}>
                </div>
                <div 
                    className={`rounded-circle bg-warning light yellow ${color === 'yellow' ? 'active' : ''}`} // Si color es igual a 'amarillo', la clase active se aplicará al elemento.
                    onClick={() => setColor('yellow')} 
                    style={{ width: '100px', height: '100px', margin: '10px' }}>
                </div>
                <div 
                    className={`rounded-circle bg-success light green ${color === 'green' ? 'active' : ''}`}
                    onClick={() => setColor('green')}
                    style={{ width: '100px', height: '100px', margin: '10px' }}>
                </div>
                 {purple?<div // si purple es verdader o falso? True o false
                    className={`rounded-circle light purple ${purple ? 'active' : ''}`}
                    onClick={() => setColor('purple')} // Se activa cuando se hace clic en el círculo púrpura
                    style={{ width: '100px', height: '100px', margin: '10px' }}
                ></div>:""}
            </div>
        </div>
      <button onClick={AlternaColor} className="btn btn-primary mt-3">Alternar Colores</button>
      <button onClick={Púrpura} className="btn btn-secondary mt-3">{purple ? false : true} Añadir Púrpura</button>
    </div>
  );
};

export default TrafficLight;
 

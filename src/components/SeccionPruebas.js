import { Component } from 'react';
import MiComponente from './MiComponente'
import Peliculas from './Peliculas'


class SeccionPruebas extends Component {

    HolaMundo(nombre, edad) {
        var presentacion = (
          <div>
            <h2>Hola, soy {nombre}</h2>
            <h3> y tengo {edad} años</h3>
          </div>
        )
      
        return presentacion;
      }

    render() {
        return (

            <section id="content">

            <h2 className="subheader">Últimos artículos</h2>
                <p>
                    HOLA BIENVENIDO AL CURSO DE VICTOR ROBLES
                </p>
                {this.HolaMundo('Jesús Jácome', 23)}

                <section className="componentes">
                    <MiComponente />
                    <Peliculas />
                </section>

            </section>
        );
    }
}



export default SeccionPruebas;
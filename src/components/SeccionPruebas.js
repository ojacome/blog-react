import { Component } from 'react';
import MiComponente from './MiComponente'
import Peliculas from './Peliculas'


class SeccionPruebas extends Component {

    contador = 0;

    state = {
        contador: 0
    };
    
    //Segunda forma de declarar el state
    // constructor(props){
    //     super(props);

    //     this.state = {
    //         contador: 0
    //     };
    // }


    sumar(){
        this.setState({
            contador: (this.state.contador + 1)
        });
    }

    restar(){
        this.setState({
            contador: (this.state.contador - 1)
        });
    }

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

                <h2>Estado</h2>
                <hr></hr>
                <p>Contador: { this.state.contador}</p>
                <input type="button" onClick={this.sumar.bind(this)} value="Sumar"/>
                <input type="button" onClick={this.restar.bind(this)} value="Restar"/>
            </section>
        );
    }
}



export default SeccionPruebas;
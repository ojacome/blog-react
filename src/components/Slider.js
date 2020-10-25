import { Component } from 'react';
import logo from '../assets/images/logo.svg'


class Slider extends Component {

    render() {
        return (
            <div id="slider" className="slider-big">
                <h1>Bienvenido al Curso de React con Víctor Robles</h1>
                <a href="#" className="btn-white">Ir al blog</a>
            </div>
        );
    }
}



export default Slider;
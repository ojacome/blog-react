import { Component } from 'react';



class Slider extends Component {

    render() {
        return (
            <div id="slider" className="slider-big">
                <h1>{this.props.titulo}</h1>
                <a href="#" className="btn-white">Ir al blog</a>
            </div>
        );
    }
}



export default Slider;
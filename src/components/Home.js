import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Slider from './Slider';



class Home extends Component {
    render() {
        return (
            <div id="home">

                <Slider 
                titulo="Bienvenido al Curso de React con Víctor Robles"
                btn="Ir al blog"
                />

                <div className="center"> 
                    <div id="content">
                        <h1 className="subheader">Últimos artículos</h1>      
                    </div>

                    <Sidebar/>
                </div>
            </div>
        );
    }
}

export default Home;

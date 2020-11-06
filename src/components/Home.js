import React, { Component } from 'react';
import Articles from './Articles';
import Sidebar from './Sidebar';
import Slider from './Slider';



class Home extends Component {
    render() {
        return (
            <div id="home">

                <Slider 
                titulo="Bienvenido a mi blog con React js"
                btn="Ir al blog"
                />

                <div className="center"> 
                    <div id="content">                        

                        <Articles
                        home="true">
                        </Articles>    
                    </div>

                    <Sidebar/>
                </div>
            </div>
        );
    }
}

export default Home;

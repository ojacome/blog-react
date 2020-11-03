
import React, { Component } from 'react';
import Articles from './Articles';
import Sidebar from './Sidebar';
import Slider from './Slider';



class Search extends Component {

    
    render() {
        var busqueda = this.props.match.params.search;

        return (
            <div id="blog">

                <Slider 
                titulo={'Resultados de: '+ busqueda}
                size="slider-small"
                />

                <div className="center"> 
                    <div id="content">

                        {/* Listado de items      */}
                        <Articles
                        search={ busqueda }>                            
                        </Articles>
                    </div>

                    <Sidebar
                        blog="true"
                    />
                </div>
            </div>
        );
    }
}

export default Search;

import Axios from 'axios';
import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Slider from './Slider';



class Blog extends Component {
    render() {

        

        return (
            <div id="blog">

                <Slider 
                titulo="BLOG"
                size="slider-small"
                />

                <div className="center"> 
                    <div id="content">
                        {/* Listado de items      */}
                    </div>

                    <Sidebar
                        blog="true"
                    />
                </div>
            </div>
        );
    }
}

export default Blog;

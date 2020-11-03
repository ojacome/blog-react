import React, { Component } from 'react';
import Axios from 'axios';
import Sidebar from './Sidebar';
import Global from '../Global';
import { Redirect } from 'react-router-dom';



class CreateArticle extends Component {

    url = Global.url;
    titleRef = React.createRef();
    contentRef = React.createRef();

    state = {
        article: {},
        status: null,        
    }
    
    saveArticle = (e) => {
        e.preventDefault();

        this.changeState();

        
        Axios.post(this.url+'/articles', this.state.article )
        .then( resp => {

            if( resp.data.article ){

                this.setState({
                    article: resp.data.article,
                    status: 'success'
                })
            }
            else{
                this.setState({
                    status: 'failed'
                })
            }
        })
    }

    //rellenar state 
    changeState = () => {
        this.setState({
            article: {
                title: this.titleRef.current.value,
                content: this.contentRef.current.value,
            }
        })
        // console.log(this.state)
    }



    render() {
        if( this.state.status === 'success'){
            return <Redirect to="/blog"></Redirect>
        }
        return (
            <div className="center">
                <section id="content">
                    <h1 className="subheader">Crear Artículo</h1>

                    <form className="mid-form" onSubmit={this.saveArticle}>
                        <div className="form-group">
                            <label htmlFor="title">Título</label>
                            <input type="text" name="title" ref={this.titleRef} onChange={this.changeState}></input>
                        </div>

                        <div className="form-group">
                            <label htmlFor="content">Contenido</label>
                            <textarea  name="content" ref={this.contentRef}  onChange={this.changeState}></textarea>
                        </div>

                        <div className="form-group">
                            <label htmlFor="file0">Imagen</label>
                            <input type="file" name="file0"></input>
                        </div>
                        <input type="submit" className="btn btn-success" value="Guardar"></input>
                    </form>
                </section>

                <Sidebar></Sidebar>
            </div>
        );
    }
}

export default CreateArticle;

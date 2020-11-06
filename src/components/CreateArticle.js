import React, { Component } from 'react';
import Axios from 'axios';
import Sidebar from './Sidebar';
import Global from '../Global';
import { Redirect } from 'react-router-dom';
import SimpleReactValidator from 'simple-react-validator';
import Swal from 'sweetalert';



class CreateArticle extends Component {

    url = Global.url;
    titleRef = React.createRef();
    contentRef = React.createRef();

    state = {
        article: {},
        status: null,
        selectedFile: null
    }

    componentWillMount() {
        this.validator = new SimpleReactValidator({
            messages: {
                required: 'Este campo es requerido.'
            }
        });
    }

    saveArticle = (e) => {
        e.preventDefault();

        this.changeState();

        if (this.validator.allValid()) {

            Axios.post(this.url + '/articles', this.state.article)
                .then(resp => {

                    if (resp.data.article) {

                        this.setState({
                            article: resp.data.article,
                            status: 'waiting'
                        })

                        //subir archivo
                        if (this.state.selectedFile !== null) {

                            var articleId = this.state.article._id;

                            const formData = new FormData();
                            formData.append(
                                'image',
                                this.state.selectedFile,
                                this.state.selectedFile.name
                            );

                            Axios.post(this.url + '/articles/upload-image/' + articleId, formData)
                                .then(resp => {

                                    console.log(resp.data);
                                    if (resp.data.article) {

                                        Swal(
                                            'Artículo creado',
                                            'El artículo ha sido creado correctamente',
                                            'success'
                                        )
                                        
                                        this.setState({
                                            article: resp.data.article,
                                            status: 'success'
                                        })
                                    }
                                    else {
                                        this.setState({
                                            article: resp.data.article,
                                            status: 'failed'
                                        })
                                    }
                                })
                        }
                        else {
                            this.setState({
                                status: 'success'
                            })
                        }
                    }
                    else {
                        this.setState({
                            status: 'failed'
                        })
                    }
                })
        }
        else {
            this.setState({
                status: 'failed'
            })

            this.validator.showMessages();
            this.forceUpdate()
        }
    }

    //rellenar state 
    changeState = () => {
        this.setState({
            article: {
                title: this.titleRef.current.value,
                content: this.contentRef.current.value,
            }
        })

        this.validator.showMessages();
        this.forceUpdate()
        // console.log(this.state)
    }

    fileChange = (event) => {

        this.setState({
            selectedFile: event.target.files[0]
        })
        // console.log(this.state);
    }


    render() {
        if (this.state.status === 'success') {
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
                            {this.validator.message('title', this.state.article.title, 'required')}
                        </div>

                        <div className="form-group">
                            <label htmlFor="content">Contenido</label>
                            <textarea name="content" ref={this.contentRef} onChange={this.changeState}></textarea>
                            {this.validator.message('content', this.state.article.content, 'required')}
                        </div>

                        <div className="form-group">
                            <label htmlFor="file0">Imagen</label>
                            <input type="file" name="file0" onChange={this.fileChange}></input>
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

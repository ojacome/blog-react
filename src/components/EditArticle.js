import Axios from 'axios';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import SimpleReactValidator from 'simple-react-validator';
import swal from 'sweetalert';
import Global from '../Global';
import Sidebar from './Sidebar';

class EditArticle extends Component {
    url = Global.url;
    titleRef = React.createRef();
    contentRef = React.createRef();
    articleId = null;

    state = {
        article: {},
        status: null,
        selectedFile: null
    }

    componentWillMount() {
        this.articleId = this.props.match.params.id;
        this.getArticle(this.articleId);
        this.validator = new SimpleReactValidator({
            messages: {
                required: 'Este campo es requerido.'
            }
        });
    }

    getArticle( id ) {
        Axios.get(this.url + '/articles/article/' + id )
        .then( res => {

            this.setState({
                article: res.data.article
            })
        })
        .catch( err => {
            swal(
                'Error',
                err.response.data.message,
                'error'
            )    
        })
    }

    saveArticle = (e) => {
        e.preventDefault();

        this.changeState();

        if (this.validator.allValid()) {

            Axios.put(this.url + '/articles/article/' + this.articleId, this.state.article)
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

                                    // console.log(resp.data);
                                    if (resp.data.article) {

                                        swal(
                                            'Artículo actualizado',
                                            'El artículo se ha actualizado correctamente',
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
                    <h1 className="subheader">Editar Artículo</h1>
                    {
                        this.state.article.title &&

                        <form className="mid-form" onSubmit={this.saveArticle}>
                            <div className="form-group">
                                <label htmlFor="title">Título</label>
                                <input defaultValue={this.state.article.title} type="text" name="title" ref={this.titleRef} onChange={this.changeState}></input>
                                {this.validator.message('title', this.state.article.title, 'required')}
                            </div>

                            <div className="form-group">
                                <label htmlFor="content">Contenido</label>
                                <textarea defaultValue={this.state.article.content} name="content" ref={this.contentRef} onChange={this.changeState}></textarea>
                                {this.validator.message('content', this.state.article.content, 'required')}
                            </div>

                            <div className="form-group">
                                <label htmlFor="file0">Imagen</label>
                                <input type="file" name="file0" onChange={this.fileChange}></input>
                            </div>
                            <input type="submit" className="btn btn-success" value="Guardar"></input>
                        </form>
                    }
                </section>

                <Sidebar></Sidebar>
            </div>
        );
    }
}

export default EditArticle;

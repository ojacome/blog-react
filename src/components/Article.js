import React, { Component } from 'react';
import Axios from 'axios';
import Sidebar from './Sidebar';
import Global from '../Global';
import Moment from 'react-moment';
import 'moment/locale/es';
import ImageDefault from '../assets/images/no-img.png';
import { Link, Redirect } from 'react-router-dom';
import swal from 'sweetalert';


class Article extends Component {

    url = Global.url;
    state = {
        article: false,
        status: null
    }

    getArticle = () => {
        var id = this.props.match.params.id;
        
        Axios.get(this.url + '/articles/article/' + id)
        .then( res => {
            console.log(res.data)
            this.setState({
                article: res.data.article,
                status: 'success'
            })
        })
        .catch(err => {
            console.log(err);
        })
    }

    componentWillMount(){
        this.getArticle();
    }

    deleteArticle = ( id ) => {

        swal({
            title: '¿Estás seguro de eliminar?',
            text: 'No podrás recuperar la información del artículo',
            icon: 'warning',
            buttons: true,
            dangerMode: true,            
        })
        .then( (willDelete) => {

            if(willDelete) {
                Axios.delete( this.url + '/articles/article/' + id )
                .then( resp => {

                    swal(
                        'Artículo eliminado',
                        '',
                        'success'
                    )

                    this.setState({
                        article: resp.data.article,
                        status: 'deleted'
                    })
                })
            }
        })        
        
    }



    render() {
        var article = this.state.article;

        if( this.state.status === 'deleted' ){
            return <Redirect to="/blog"></Redirect>
        }

        return (
            <div className="center">
                <section id="content">
                    {
                        article ? (
                        <article className="article-item article-detail">
                            <div className="image-wrap">
                            {
                                article.image !== null ? (
                                    <img src={this.url+'/articles/get-image/'+article.image} alt={article.title} />
                                ) : (
                                    <img src={ImageDefault} alt="imagen por defecto" />
                                )
                            }
                            </div>

                            <h1 className="subheader">{ article.title }</h1>
                            <span className="date">
                                <Moment fromNow>{ article.date }</Moment>                                
                            </span>
                            <p>
                                { article.content }
                            </p>

                            <button onClick={
                                () => {
                                    this.deleteArticle(article._id)
                                }
                            } className="btn btn-danger">Eliminar</button>
                            <Link to="/blog" className="btn btn-warning">Editar</Link>

                            <div className="clearfix"></div>
                        </article>
                        ) : (
                            <h2 className="subheader">Artículo no existe</h2>
                        )
                    }
                    
                </section>

                <Sidebar></Sidebar>
            </div>
        );
    }
}

export default Article;

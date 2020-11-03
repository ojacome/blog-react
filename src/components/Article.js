import React, { Component } from 'react';
import Axios from 'axios';
import Sidebar from './Sidebar';
import Global from '../Global';
import Moment from 'react-moment';
import 'moment/locale/es';
import ImageDefault from '../assets/images/no-img.png';


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



    render() {
        var article = this.state.article;

        return (
            <div className="center">
                <section id="content">
                    {
                        article ? (
                        <article className="article-item article-detail">
                            <div className="image-wrap">
                            {
                                article.image !== null ? (
                                    <img src={this.url+'/get-image/'+article.image} alt={article.title} />
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

                            <a href="#" className="btn btn-danger">Eliminar</a>
                            <a href="#" className="btn btn-warning">Editar</a>

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

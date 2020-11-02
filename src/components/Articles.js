import React, { Component } from 'react';
import Axios from 'axios';
import Global from '../Global';
import ImageDefault from '../assets/images/no-img.png'
import Moment from 'react-moment'
import 'moment/locale/es'



class Articles extends Component {

    url = Global.url;

    state = {
        articles : {},
        status: null
    }

    componentWillMount(){
        this.getArticles();
    }
    
    getArticles = () => {
        Axios.get(`${this.url}/articles`)
        .then( res => {
            this.setState({
                articles: res.data.articles,
                status: 'success'
            })
            console.log(this.state);
        })
    }


    render() {
        if(this.state.articles.length > 0 ){

            var listArticles = this.state.articles.map( (article) => {
                return(
                    <article class="article-item" id="article-template">
                        <div class="image-wrap">
                            {
                                article.image !== null ? (
                                    <img src={this.url+'/get-image/'+article.image} alt={article.title} />
                                ) : (
                                    <img src={ImageDefault} alt="imagen por defecto" />
                                )
                            }
                        </div>
    
                        <h2>{article.title}</h2>
                        <span class="date">
                            <Moment fromNow>{article.date}</Moment>
                        </span>
                        <a href="#">Leer más</a>

                        <div class="clearfix"></div>
                    </article>
                )
            })
            return (
                <div id="articles">
                    <h1>Listado de artículos</h1>
                    {listArticles}
                </div>
            );
        }
        else if(this.state.articles.length === 0 && this.state.status === 'success' ){
            return (
                <div id="articles">
                    <h1 className="subheader">No hay articulos registrados</h1>
                </div>
            );
        }
        else{
            return (
                <div id="articles">
                    <h1 className="subheader">Cargando articulos...</h1>
                </div>
            );
        }
    }
}

export default Articles;

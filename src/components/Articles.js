import React, { Component } from 'react';
import Axios from 'axios';
import Global from '../Global';
import ImageDefault from '../assets/images/no-img.png'
import Moment from 'react-moment'
import 'moment/locale/es'
import { Link } from 'react-router-dom'


class Articles extends Component {

    url = Global.url;

    state = {
        articles : {},
        status: null
    }

    componentWillMount(){
        var home = this.props.home;
        var search = this.props.search;

        if( home === 'true' ){

            this.getLastArticles();
        }
        else if( search && search != null && search != undefined ){
            this.getArticlesBySearch( search );
        }
        else{

            this.getArticles();
        }
    }

    getArticlesBySearch = ( searched ) => {
        Axios.get(`${this.url}/articles/search/${searched}`)
        .then( res => {
            
            this.setState({
                articles: res.data.articles,
                status: 'success'
            })
            
            console.log(this.state);
        })
        .catch( err => { 
            this.setState({
                articles: [],
                status: 'success'
            })
        })
    }

    getLastArticles = () => {
        Axios.get(`${this.url}/articles/last`)
        .then( res => {
            this.setState({
                articles: res.data.articles,
                status: 'success'
            })
            console.log(this.state);
        })
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
                    <article className="article-item" id="article-template">
                        <div className="image-wrap">
                            {
                                article.image !== null ? (
                                    <img src={this.url+'/get-image/'+article.image} alt={article.title} />
                                ) : (
                                    <img src={ImageDefault} alt="imagen por defecto" />
                                )
                            }
                        </div>
    
                        <h2>{article.title}</h2>
                        <span className="date">
                            <Moment fromNow>{article.date}</Moment>
                        </span>
                        <Link to={'/blog/articulo/'+article._id}>Leer más</Link>

                        <div className="clearfix"></div>
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
                    <h1 className="subheader">No hay artículos registrados</h1>
                </div>
            );
        }
        else{
            return (
                <div id="articles">
                    <h1 className="subheader">Cargando artículos...</h1>
                </div>
            );
        }
    }
}

export default Articles;

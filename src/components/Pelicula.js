import { Component } from 'react';
import { Link } from 'react-router-dom';



class Pelicula extends Component {

    marcar = () => {
        this.props.marcarFavorita(this.props.pelicula);
    }




    render(){        
        const { titulo, image } = this.props.pelicula;

        return (
            <article className="article-item" id="article-template">
                <div className="image-wrap">
                    <img src={ image } alt={ titulo } />
                </div>

                <h2>{ titulo }</h2>
                <span className="date">
                    Hace 5 minutos
                </span>
                <Link to="/blog">Leer más</Link>
                <button type="button" onClick={this.marcar}>
                    Marcar como fav
                </button>

                <div className="clearfix"></div>
            </article>
        )
    }
}



export default Pelicula;
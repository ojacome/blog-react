import { Component } from 'react';
import Pelicula from './Pelicula';
import Sidebar from './Sidebar';
import Slider from './Slider';



class Peliculas extends Component {

    state = {
        peliculas: [
            { titulo: 'Batman vs Superman', image: 'https://hipertextual.com/files/2016/03/batman-v-superman-8-scaled.jpg' },
            { titulo: 'Gran Torino', image: 'https://i.blogs.es/2646f8/gran_torino_-_h_-_2008/840_560.jpg' },
            { titulo: 'Looper', image: 'https://i.blogs.es/9dc0d5/looper-joseph-gordon-levitt-foto-1/1366_2000.jpg' },
        ],
        nombre: 'Jesús Olmedo',
        favorita: {}
    }

    cambiarTitulo = () => {

        var { peliculas } = this.state;
        peliculas[0].titulo = "batman returns";

        this.setState({
            peliculas: peliculas
        })
    }

    favorita = (pelicula) => {
        console.log('fav marcada', pelicula);
        this.setState({
            favorita: pelicula
        })
    }




    render() {
        var favorita;

        if(this.state.favorita.titulo){
            favorita = (
                <p>
                    <strong>La película preferida es: </strong>
                    <span>{ this.state.favorita.titulo }</span>
                </p>
            )
        }
        else{
            favorita = (
                <p>No hay película prefierida</p>
            )
        }



        return (
            <div >
                <Slider 
                    titulo="Películas"
                    size="slider-small"
                    />

                <div className="center"> 

                    <div id="content" className="peliculas">                        
                        <p>Películas favoritas de {this.state.nombre}</p>
                        <button onClick={this.cambiarTitulo}>Cambiar titulo pelicula 1</button>
                        
                        {/* condicional if else*/}
                        {/* {this.state.favorita.titulo ? (
                                <p>
                                    <strong>La película preferida es: </strong>
                                    <span>{ this.state.favorita.titulo }</span>
                                </p>
                            ) : (
                                <p>No hay película prefierida</p>
                            )
                        } */}

                        {/* SEGUNDA FORMA   condicional */}
                        {favorita}


                        
                        <div id="articles" className="peliculas">
                        {
                            this.state.peliculas.map((pelicula, i) => {
                                return (
                                    <Pelicula
                                    key={ i }
                                    pelicula={ pelicula }
                                    marcarFavorita= { this.favorita }
                                    />
                                )
                            })
                        }
                        </div>
                    </div>
                        <Sidebar
                            blog="false"
                        />
                </div>
            </div>
        );
    }
}



export default Peliculas;
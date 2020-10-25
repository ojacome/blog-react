import { Component } from 'react';
import Msg from './ComponenteEstatico'


class Peliculas extends Component {

    render(){
        return(
            <div>
                <h4>Soy el componente de Peliculas</h4>
                <Msg/>
            </div>
        );
    }
}



export default Peliculas;
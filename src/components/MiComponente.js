import {Component, Fragment} from 'react';



class MiComponente extends Component{

    render(){

        let receta = {
            nombre:         'Pizza',
            ingredientes:   ['Tomate', 'Queso', 'Jamón'],
            calorias:       400
        }

        return (
            // <Fragment> puede reemplazar al div
            <div className="ejercicio">
                <h1>Receta de {receta.nombre}</h1>
                <h3>Calorias: {receta.calorias}</h3>
                <h3>Ingrediente:</h3>
                <ol>
                    {
                        receta.ingredientes.map( (ingrediente, i) => {
                            return (
                                <li key={i} >
                                    { ingrediente }
                                </li>
                            );
                        })
                    }
                </ol>
            </div>
            // </Fragment>
        );
    }
}



export default MiComponente;
import { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MiComponente from './components/MiComponente';
import Peliculas from './components/Peliculas';
import NoPage from './components/NoPage';
import Header from './components/Header'
import Footer from './components/Footer';
import Home from './components/Home';
import Blog from './components/Blog';




class Router extends Component {

    render() {
        return(            
            <BrowserRouter>

                <Header/>                

                
                <Switch>
                    <Route exact path="/" component={ Home }/>
                    <Route exact path="/home" component={ Home }/>
                    <Route exact path="/blog" component={ Blog }/>
                    <Route exact path="/segunda-ruta" component={MiComponente}/>

                    {/* 
                    Ruta con parámetros 
                    nombre: obligatorio
                    apellido: opcional
                    */}
                    <Route exact path="/pruebas/:nombre/:apellido?" render={ (props) => {

                        var nombre = props.match.params.nombre    
                        var apellido = props.match.params.apellido    

                        return (
                        <div id="content">
                            <h1 className="subheader">Página de pruebas</h1>
                            <h3>{nombre+ ' ' +apellido}</h3>
                        </div>
                        )
                    }}/>

                    {/* Ruta con vista pero sin componentes */}
                    <Route exact path="/pagina1" render={ () => (
                        <h2>Hola desde pagina1</h2>
                    )}/>

                    {/* Ruta de error 404 */}
                    <Route  component={ NoPage }/>
                </Switch>
                
                <div className="clearfix"></div>
            
                <Footer/>

                
            </BrowserRouter>
        );
    }
}


export default Router;
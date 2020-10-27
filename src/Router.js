import { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SeccionPruebas from './components/SeccionPruebas';
import MiComponente from './components/MiComponente';
import Peliculas from './components/Peliculas';
import NoPage from './components/NoPage';


class Router extends Component {

    render() {
        return(            
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Peliculas}/>
                    <Route path="/ruta-prueba" component={SeccionPruebas}/>
                    <Route path="/segunda-ruta" component={MiComponente}/>
                    <Route  component={ NoPage }/>
                </Switch>
            </BrowserRouter>
        );
    }
}


export default Router;
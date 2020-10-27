import './assets/css/App.css';
import Header from './components/Header'
import Slider from './components/Slider'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import Peliculas from './components/Peliculas';






function App() {
  return (
    <div className="App">
      <Header />

      <Slider 
      titulo="Bienvenido al Curso de React con Víctor Robles"
      />

      <div className="center">        

        <Peliculas/>

        <Sidebar/>
        <div className="clearfix"></div>
      </div>

      <Footer/>
    </div>
    
  );
}

export default App;

import React, { Component } from 'react';
import Buscador from './components/Buscador';
import Resultado from './components/Resultado';

class App extends Component {

  state = { termino: "", imagenes: [], pagina: '' } 

  paginaAnterior = () => {

    let pagina = this.state.pagina; 
 
    if (pagina <= 1) return; 

    pagina--; 

    this.setState({pagina}, () => {
      this.consultarApi()  
      this.scroll(); 
    });

  }

  paginaSiguiente = () => {

    let pagina = this.state.pagina; 
 
    pagina++; 

    this.setState({pagina}, () => {
      this.consultarApi()  
      this.scroll(); 
    });
      
  }

  scroll() {

    let element = document.querySelector(".jumbotron");
    element.scrollIntoView({block: "start", behavior: "smooth"});

  }
  consultarApi = () => {
    let API_KEY = '17367416-8bb60f7a9a12375d32fd900dc';
    let pagina = this.state.pagina; 
    let URL = `https://pixabay.com/api/?key=${API_KEY}&q=${this.state.termino}&page=${pagina}`;
   

    fetch(URL)
      .then(resp => resp.json())
      .then(data => this.setState({imagenes: data.hits}))
   
  }

  datosBusqueda = (termino) => {

    this.setState({
      termino, 
      pagina: 1
    }, () =>{
      this.consultarApi();
    });
}
  render() { 
    return (
      <div className="container app">
          <div className="jumbotron">
            <p className="led text-center">
              Buscador de Imagenes
            </p>
            <Buscador 
            mensaje={this.datosBusqueda}
            />
          </div>
          <div className="row justify-content-center">
            <Resultado paginaAnterior={this.paginaAnterior} paginaSiguiente={this.paginaSiguiente} imagenes={this.state.imagenes} />
          </div>
      </div>
    );
  }
}

export default App;

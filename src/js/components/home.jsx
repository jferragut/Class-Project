import React from 'react';
var $carousel = $("#carousel");

import carousel1 from '../../images/carousel1.jpg';
import carousel2 from '../../images/carousel2.jpg';
import carousel3 from '../../images/carousel3.jpg';


export class Home extends React.Component{
    
    
    componentDidMount(){
      console.log('My component is about to mount');
      this.carouselSetup();
    
      
    }
    carouselSetup(){
    }
          
    render(){
      
      console.log('Home was rednered');
        return(
          
            
        <div className="container-fluid">
            
          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100 im" src={ 'public/'+carousel1 } alt="First slide"/>
                  <div className="carousel-caption">
                    <h1 className="h1-responsive">Title 1</h1>
                    <p>First text</p>
                  </div>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100 im" src={ 'public/'+carousel2 } alt="Second slide"/>
              <div className="carousel-caption">
                <h1 className="h1-responsive">Title 1</h1>
                  <p>First text</p>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100 im" src={ 'public/'+carousel3 } alt="Third slide"/>
              <div className="carousel-caption">
                <h1 className="h1-responsive">Title 1</h1>
                <p>First text</p>
              </div>
            </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
            </div>
          
          </div>
        
         <div className="jumbotron jumbotron-fluid" >
                <div className="container">
                    <h1 className="display-3">What is Crypto Currency?</h1>
                    <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                </div>
            </div>
            
            <div className="jumbotron-fluid">
                <h1 className="display-3">What We Do</h1>
                <p className="lead">nothing yet</p>
                <hr className="my-4" />
                <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
                <p className="lead">
                    <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                </p>
            </div>
      
        
         
      </div>
        
            );
    }
    
}
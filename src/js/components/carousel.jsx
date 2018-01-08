import React from 'react';

import carousel1 from '../../images/carousel1.jpg';
import carousel2 from '../../images/carousel2.jpg';
import carousel3 from '../../images/carousel3.jpg';

export class Carousel extends React.Component {


    componentDidMount() {
        console.log('My component is about to mount');
        this.carouselSetup();


    }
    carouselSetup() {}
    
    render() {

        console.log('Home was rendered');
        return (


            <div className="container-fluid">
            
          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item carousel-fade active">
                <img className="d-block w-100 im" src={ 'public/'+carousel1 } alt="First slide"/>
                  <div className="carousel-caption">
                    <h1 className="h1-responsive">THE NEXT BIG THING IS HERE </h1>
                    <p>Physical currency is old news</p>
                  </div>
              </div>
              <div className="carousel-item carousel-fade">
                <img className="d-block w-100 im" src={ 'public/'+carousel2 } alt="Second slide"/>
              <div className="carousel-caption">
                <h1 className="h1-responsive">THE FUTURE IS NOW</h1>
                  <p>DONT WAIT</p>
              </div>
              </div>
              
              <div className="carousel-item carousel-fade">
                <img className="d-block w-100 im" src={ 'public/'+carousel3 } alt="Third slide"/>
              <div className="carousel-caption">
                <h1 className="h1-responsive">INVESTING TIPS ON THE GO</h1>
                <p>ON YO SMARTPHONE</p>
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
        );
    }

}
    
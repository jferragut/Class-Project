import React from 'react';


import carousel1 from '../../images/carousel1.jpg';
import carousel2 from '../../images/carousel2.jpg';
import carousel3 from '../../images/carousel3.jpg';

export class Carousel extends React.Component {
    
    constructor(props) {
    super(props);
    
  }


    componentDidMount() {
        // console.log('My component is about to mount');
        this.carouselSetup();


    }
    carouselSetup() {}
    
    render() {

        // console.log('Home was rendered');
        return (


    <div className="container-fluid">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
        <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <img className="d-block img-fluid mainimg" src={ 'public/'+carousel1 } alt="First slide"/>
              <div className="carousel-caption">
                    <h3 className="cap" >PHYSICAL CURRENCY IS OLD NEWS</h3>
                    <p className="pcap" >THE TIME TO INVEST IS NOW</p>
                </div>
            </div>
            <div className="carousel-item">
              <img className="d-block img-fluid mainimg" src={ 'public/'+carousel2 } alt="Second slide"/>
              <div className="carousel-caption">
                    <h3 className="cap" >PROFESSIONAL SERVICE</h3>
                    <p className="pcap" >OUR MARKET SPECIALISTS HAVE CREATED A PREDICTION SYSTEM TO HELP YOU INVEST</p>
                </div>
            </div>
            <div className="carousel-item">
              <img className="d-block img-fluid mainimg" src={ 'public/'+carousel3 } alt="Third slide"/>
              <div className="carousel-caption">
                    <h3 className="cap" >PERSONALIZED NOTIFICATIONS</h3>
                    <p className="pcap" >DIRECTLY TO YOUR SMARTPHONE</p>
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

export default Carousel;
import React from 'react';


export class Home extends React.Component{
    
    render(){
        return(
            
        <div className="container-fluid">
            
        <div id="carousel" className="carousel slide carousel-fade" data-ride="carousel" data-interval="false">
          <ol className="carousel-indicators">
              <li data-target="#carousel" data-slide-to="0" className="active"></li>
              <li data-target="#carousel" data-slide-to="1"></li>
              <li data-target="#carousel" data-slide-to="2"></li>
              <li data-target="#carousel" data-slide-to="3"></li>
          </ol>
          
         
          <div className="carousel-inner">
            <div className="item active">
              <div className="slide-content">
                <video poster="http://192.241.175.50/videos/london.jpg" webkit-playsinline id="bgvid" loop>
                  <source src="http://192.241.175.50/videos/london.webm" type="video/webm"/>
                  <source src="http://192.241.175.50/videos/london.mp4" type="video/mp4" />
                </video>
                <div className="slide-overlay door">
                  <div className='title'>Banks suck</div>
                  <div className="description"> The First Description </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="slide-content">
                <video poster="http://192.241.175.50/videos/boston.jpg" webkit-playsinline id="bgvid" loop>
                  <source src="http://192.241.175.50/videos/boston.webm" type="video/webm"/>
                  <source src="http://192.241.175.50/videos/boston.mp4" type="video/mp4"/>
                </video>
                <div className="slide-overlay door">
                  <div className='title'> Go crypto</div>
                  <div className="description"> The Second Description </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="slide-content">
                <video poster="http://192.241.175.50/videos/split.jpg" webkit-playsinline id="bgvid" loop>
                  <source src="http://192.241.175.50/videos/split.webm" type="video/webm"/>
                  <source src="http://192.241.175.50/videos/split.mp4" type="video/mp4"/>
                </video>
                <div className="slide-overlay door">
                  <div className='title'>number 3</div>
                  <div className="description"> #AnotherOne #AndAnotherOne</div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="slide-content">
                <video poster="https://ak8.picdn.net/shutterstock/videos/3103138/preview/stock-footage-stock-market-charts-in-looped-animation-hd.jpg" webkit-playsinline id="bgvid" loop>
                  <source src="https://ak8.picdn.net/shutterstock/videos/3103138/preview/stock-footage-stock-market-charts-in-looped-animation-hd.webm" type="video/webm"/>
                  <source src="https://ak8.picdn.net/shutterstock/videos/3103138/preview/stock-footage-stock-market-charts-in-looped-animation-hd.mp4" type="video/mp4"/>
                </video>
                <div className="slide-overlay door">
                  <div className='title'>Taco </div>
                  <div className="description"> some description </div>
                </div>
              </div>
            </div>
          </div>
          
          <a className="carousel-control left" href="#carousel" data-slide="prev">
           <span className="glyphicon glyphicon-chevron-left"></span>
          </a>
          
          <a className="carousel-control right" href="#carousel" data-slide="next">
           <span className="glyphicon glyphicon-chevron-right"></span>
          </a>
          
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
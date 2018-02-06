import React from 'react';
import { Carousel } from './carousel.jsx';
import cryp from '../../images/cryp.jpg';
import matrix from '../../images/matrix.jpg';


export class Home extends React.Component{
    
    constructor(){
        
        super();
    }
    
    
          
    render(){
      
    //   console.log('Home was rendered');
        return(
          
            
        <div className="container-fluid">
            <Carousel />
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">What is Cryptocurrency?</h1>
                <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
            </div>
        </div>
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">What We Do</h1>
                <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
            </div>
        </div>
        <div className="jumbotron">
            <h1 className="display-4 text-center ">Hello, world!</h1>
            <p className="lead text-center">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr className="my-4"/>
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <p className="lead">
                <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
            </p>
        </div>
        
        


      
        
         
      </div>
        
            );
    }
    
}
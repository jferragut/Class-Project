import React from 'react';
import { Carousel } from './carousel.jsx';


export class Home extends React.Component{
    
    constructor(){
        
        super();
    }
    
    
          
    render(){
      
    //   console.log('Home was rendered');
        return(
          
            
        <div className="container-fluid">
            <Carousel />
        
         <div className="callout1 jumbotron jumbotron-fluid" >
                <div className="container">
                    <h1 className="display-3 jt">What is Crypto Currency?</h1>
                    <hr className="my-4" />
                    <p className="lead jst">Cryptocurrencies, sometimes called virtual currencies, digital money/cash, or tokens, are not really like U.S. dollars or British pounds. They live online and are not backed by a government. They’re backed by their respective networks. Technically speaking, cryptocurrencies are restricted entries in a database. Specific conditions must be met to change these entries. Created with cryptography, the entries are secured with math, not people.</p>
                </div>
            </div>
            
            <div className="callout2 jumbotron-fluid">
                <h1 className="display-3 jt">What We Do</h1>
                <p className="lead jst">nothing yet</p>
                <hr className="my-4" />
                <p className="lead">
                    <a className="btn btn-success btn-lg" href="#" role="button">Join Today</a>
                </p>
            </div>
      
        
         
      </div>
        
            );
    }
    
}
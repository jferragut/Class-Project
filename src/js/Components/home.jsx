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
        
         <section id="services" className="sect">
                <div>
                    <img className="img-circle img-responsive pull-left im" src={ 'public/'+cryp }/>
                    <h2 className="h" >What is Crypto Currency?
                    </h2>
                    <p className="lead">Cryptocurrencies, sometimes called virtual currencies, digital money/cash, or tokens, are not really like U.S. dollars or British pounds. They live online and are not backed by a government. They’re backed by their respective networks. Technically speaking, cryptocurrencies are restricted entries in a database. Specific conditions must be met to change these entries. Created with cryptography, the entries are secured with math, not people.</p>
                </div>
                <div>
                    <img className="img-circle img-responsive pull-right im" src={ 'public/'+matrix }/>
                    <h2 className="h" >What We Do
                        <span className="text-muted">Will Seal the Deal.</span>
                    </h2>
                    <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                </div>
            </section>
      
        
         
      </div>
        
            );
    }
    
}
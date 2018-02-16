import React from 'react';
import { Carousel } from '../Components/carousel.jsx';
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
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4 para">What is Cryptocurrency?</h1>
                <p className="lead">Cryptocurrencies, sometimes called virtual currencies, digital money/cash, or tokens, are not really like U.S. dollars or British pounds. They live online and are not backed by a government. They’re backed by their respective networks. Technically speaking, cryptocurrencies are restricted entries in a database. Specific conditions must be met to change these entries. Created with cryptography, the entries are secured with math, not people.</p>
            </div>
        </div>
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4 para">What We Do</h1>
                <p className="lead ">Our experts have perfected a system to predict future increases and decreases of cryptocurrencies. We make it easier for you to make money with cryptocurrency!</p>
            </div>
        </div>
        <div className="jumbotron">
            <h1 className="display-4 text-center par ">So what are you waiting for? Join Today!</h1>
            <p className="lead text-center">Choose between a free or paid account.</p>
            <hr className="my-4"/>
            <p className="lead joinbtn">
                <a className="btn btn-primary btn-lg" href="/register" role="button">REGISTER</a>
            </p>
        </div>
        
        


      
        
         
      </div>
        
            );
    }
    
}
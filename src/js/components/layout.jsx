import React from 'react';
import { Navbar } from './navbar.jsx';
import { Header } from './header.jsx';
import { Footer } from './footer.jsx';

export class Layout extends React.Component{
    
    render(){
        
        
        return(
            
            
            <div>
                <Navbar />
                <Header />
                <Footer />
            </div>
            
            
            );
    }
    
}
import React from 'react';
import { Header } from './header.jsx';
import { Main } from './main.jsx';
import { Footer } from './footer.jsx';

export class Layout extends React.Component{
    
    render(){
        
        
        return(
            
            
            <div>
                <Header />
                <Main />
                <Footer />
            </div>
            
            
            );
    }
    
}
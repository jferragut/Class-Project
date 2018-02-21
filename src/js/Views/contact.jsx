import React from 'react';
import MainStore from '../Stores/mainStore.js';
import * as MainActions from '../Actions/mainActions.js';
import { Link } from 'react-router-dom';

export class Contact extends React.Component {
    constructor() {
        super();
        this.state = {
            view: this.isItMobile(),
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.isItMobile = this.isItMobile.bind(this);
        
        
  }
       
        
        
        
    componentWillMount(){
      this.handleChange();
      window.addEventListener('resize', this.updateWindowDimensions.bind(this));
    }
    
    componentWillUnmount() {
        //unload listeners
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
    
    updateWindowDimensions() {
        this.setState({view:this.isItMobile()});
    }
        
   componentDidMount(){
    MainStore.on('change',this.handleChange.bind(this));
    
  }
  
  
  isItMobile(){
        if(window.innerWidth <= 880) return false; else return true;
    }
  
   handleChange(){
       var userInfo = MainStore.getUserProfile();
         this.setState({
            username:userInfo.username,
             password: userInfo.password,
             passwordRetry: userInfo.passwordRetry
            
         });
     }
    
    passwordResetConfirm(evt){
      evt.preventDefault();
       if(this.state.password != this.state.passwordRetry) alert('Your passwords do not match');
       else MainActions.PasswordResetConfirm(this.history, this.username, this.state.password);
   	  console.log("edit profile confirm  is sending " + this.username, this.state.password) ;
   }
    
    

  
  
  
  

    render() {
        return (
        <div>
            
            <section>
              <div>
                <div className="container bg">
                  <div className="col-sm-12 card card-container">
                    <div >
                      <div className="col-sm-8 col-sm-offset-2">
                        <div>
                          <h2 className="contact" >CONTACT US</h2>
                        </div>
                        <form method="post" className="cont" data-form-title="CONTACT US">
                          <input type="hidden" data-form-email="true"/>
                          <div className="form-group">
                            <input type="text" className="form-control" name="name" required="" placeholder="Name*" data-form-field="Name"/>
                          </div>
                          <div className="form-group">
                            <input type="email" className="form-control" name="email" required="" placeholder="Email*" data-form-field="Email"/>
                          </div>
                          
                          <div className="form-group">
                            <textarea className="form-control" name="message" placeholder="Message" rows="7" data-form-field="Message"></textarea>
                          </div>
                          <div>
                            <button type="submit" className="btn btn-lg btn-signin">CONTACT US</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
           
    
    
    
</div>
        );
    }
    
}

export default Contact;
import React from 'react';
import MainStore from '../Stores/mainStore.js';
import * as MainActions from '../Actions/mainActions.js';
import { Link } from 'react-router-dom';

export class CP extends React.Component {
    constructor() {
        super();
        
        this.state = {
        username:null,
        password: null,
        passwordRetry: null,
        
        
    };
    this.isLoggedIn = null;
    this.handleChange = this.handleChange.bind(this);
  }
       
        
        
        
   componentWillMount(){
      this.handleChange();
    }
        
   componentDidMount(){
    MainStore.on('change',this.handleChange.bind(this));
    
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
            
            
            <div className="container bg">
        <div className="card card-container">
            <h1 className="signin"> CHANGE YOUR PASSWORD </h1>
            <form className="form-signin" onSubmit={(evt) => this.passwordResetConfirm(evt)}>
                <span id="reauth-email" className="reauth-email"></span>
                <input type="text"  className="form-control" placeholder="New Password" onChange={(evt)=> this.setState({password: evt.target.value})} required autoFocus/>
                <input type="text"  className="form-control" placeholder="Confirm New Password" onChange={(evt)=> this.setState({passwordRetry: evt.target.value})} required />
                
                <Link to="/profile" className="btn btn-primary btn-block btn-signin btn-sm" >CHANGE PASSWORD  </Link>
            </form>
            
        </div>
    </div>
    
    
    
</div>
        );
    }
}

export default CP;
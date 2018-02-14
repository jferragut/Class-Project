import React from 'react';
import mainStore from '../Stores/mainStore.js';
import * as MainActions from '../Actions/mainActions.js';


export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: null
        };
        
    }
    
    userValidate(){
        MainActions.UserValidate(this.history, this.state.username, this.state.password);
        console.log('attempting to login');
    }
    
    /*login(e) {
    e.preventDefault();
    // Here, we call an external AuthService. We’ll create it in the next step
    Auth.login(this.state.username, this.state.password)
      .catch(function(err) {
        console.log( “Error”);
      });
  }*/

  
  
  
  

    render() {
        return (
        <div>
            
            
            <div className="container bg">
        <div className="card card-container">
            <h1 className="signin"> SIGN IN </h1>
            <form className="form-signin">
                <span id="reauth-email" className="reauth-email"></span>
                <input type="text" id="inputEmail" min= "4" max="15" className="form-control" placeholder="Username" onChange={(evt)=> this.setState({username: evt.target.value})} required autoFocus/>
                <input type="password" id="inputPassword" min= "8" max="15"  className="form-control" placeholder="Password" onChange={(evt)=> this.setState({password: evt.target.value})} required />
                
                <button className="btn btn-lg btn-primary btn-block btn-signin" onClick = {()=> this.userValidate() } type="submit"  >SIGN IN</button>
            </form>
            <a href="/rsp" className="forgot-password">
                Forgot password?
            </a>
        </div>
    </div>
    
    
    
</div>
        );
    }
}

export default Login;
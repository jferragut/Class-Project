import React from 'react';
import mainStore from '../Stores/mainStore.js';
import * as MainActions from '../Actions/mainActions.js';


export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        
    }
    
    loginConfirm(task){
        MainActions.LoginConfirm(task);
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
                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus/>
                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                <div id="remember" className="checkbox">
                    <label>
                        <input type="checkbox" value="remember-me"/> Remember me
                    </label>
                </div>
                <button className="btn btn-lg btn-primary btn-block btn-signin" onClick = {()=> this.loginConfirm() } type="submit"  >SIGN IN</button>
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
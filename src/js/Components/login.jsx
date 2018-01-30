import React from 'react';
import MainStore from '../Stores/mainStore.js';
import * as MainActions from '../Actions/mainActions.js';


export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        //this.user = MainStore.getUserInfo();
    }
    
    /*signIn(event){
  	if(   ) mainActions.signIn(this.username, this.password);
  	else mainActions.SendResult(this.username, this.password);
  	console.log("user sign in is working") ;
  }*/
  
  
  
  

    render() {
        return (
        <div>
            
            
            <div className="container">
        <div className="card card-container">
            <img id="profile-img" className="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />
            <p id="profile-name" className="profile-name-card"></p>
            <form className="form-signin">
                <span id="reauth-email" className="reauth-email"></span>
                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus/>
                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
                <div id="remember" className="checkbox">
                    <label>
                        <input type="checkbox" value="remember-me"/> Remember me
                    </label>
                </div>
                <button className="btn btn-lg btn-primary btn-block btn-signin" type="submit">Sign in</button>
            </form>
            <a href="#" className="forgot-password">
                Forgot the password?
            </a>
        </div>
    </div>
    
    
    
</div>
        );
    }
}

export default Login;
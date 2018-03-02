import React from 'react';
import MainStore from '../Stores/mainStore.js';
import * as mainActions from '../Actions/mainActions.js';
import { Link } from 'react-router-dom';

export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: null,
            client_id: "Vid2RpiaqWUtD8YQyUyaDxDxEl6Fyqo1ycY3mCvR",
            client_secret: "3NyQBkTUIL1iEiZ2W1sQ3OK9TsqjrtZ9J3XSJXZCKURSFarEHRv7Cs1wUSDzAC2U9zDih4VaXOvS3uTtALeYAOpIutONhd1CitkypmKhtSWOmeteerMgTr8G6u41gKki",
            view: this.isItMobile()
        };
        
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.isItMobile = this.isItMobile.bind(this);
        
    }
    
     componentWillMount(){
      window.addEventListener('resize', this.updateWindowDimensions.bind(this));
    }
    
    componentWillUnmount() {
        //unload listeners
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
    
    updateWindowDimensions() {
        this.setState({view:this.isItMobile()});
    }
        
   
    
    
    
    userLogin(evt){
        mainActions.UserLogin(this.props.history, this.state.username, this.state.password, this.state.client_id, this.state.client_secret);
        console.log('attempting to login');
    }
    
   

  
  
  
  

    render() {
        return (
        <div>
            
            
            <div className="container bg">
        <div className="card card-container">
            <h1 className="signin"> SIGN IN </h1>
            <form className="form-signin">
                <span id="reauth-email" className="reauth-email"></span>
                <input type="text" id="inputEmail" className="form-control" placeholder="Username" onChange={(evt)=> this.setState({username: evt.target.value})} required autoFocus/>
                <input type="password" id="inputPassword"  className="form-control" placeholder="Password" onChange={(evt)=> this.setState({password: evt.target.value})} required />
                
                <button className="btn btn-lg btn-primary btn-block btn-signin"  type="button" onClick={(evt) => this.userLogin(evt)} >SIGN IN</button>
            </form>
            <div> <Link className="btn btn-md" to="/cp" role="button">Forgot Password?</Link>
                </div>
        </div>
    </div>
    
    
    
</div>
        );
    }
    
    isItMobile(){
        if(window.innerWidth <= 880) return false; else return true;
    }
}

export default Login;
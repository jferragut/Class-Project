import React from 'react';
import MainStore from '../Stores/mainStore.js';
import * as MainActions from '../Actions/mainActions.js';
import { Link } from 'react-router-dom';

export class RSP extends React.Component {
    constructor() {
        super();
        
        this.state = {
        username:null,
        email: null,
        emailRetry: null,
        view: this.isItMobile(),
        
        
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.isItMobile = this.isItMobile.bind(this);
    this.isLoggedIn = null;
    //this.handleChange = this.handleChange.bind(this);
  }
       
        
        
        
  componentWillMount(){
      window.addEventListener('resize', this.updateWindowDimensions.bind(this));
//       this.handleChange();
    }
    componentWillUnmount() {
        //unload listeners
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
    updateWindowDimensions() {
        this.setState({view:this.isItMobile()});
    }
        
//   componentDidMount(){
//     MainStore.on('change',this.handleChange.bind(this));
    
//   }
  
//   handleChange(){
//       var userInfo = MainStore.getUserProfile();
//         this.setState({
//             username:userInfo.username,
//             password: userInfo.password,
//             passwordRetry: userInfo.passwordRetry
            
//         });
//     }
    
        //     passwordResetConfirm(evt){
        //       evt.preventDefault();
        //       if(this.state.email != this.state.emailRetry) alert('Your emails do not match');
        //       else MainActions.PasswordResetConfirm(this.history, this.username, this.state.password);
        //   	  console.log("edit profile confirm  is sending " + this.username, this.state.password) ;
        //   }
    
    
    isItMobile(){
        if(window.innerWidth <= 880) return false; else return true;
    }
  
  
  
  

    render() {
        return (
        <div>
            
            
            <div className="container bg">
        <div className="card card-container">
            <h1 className="signin"> Enter your Email</h1>
            <h2 className="second-title" > You will receive a link to change your password with the email you provide here</h2>
            <form className="form-signin" onSubmit={(evt) => this.passwordResetConfirm(evt)}>
                <span id="reauth-email" className="reauth-email"></span>
                <input type="text"  className="form-control" placeholder="Enter Email" onChange={(evt)=> this.setState({email: evt.target.value})} required autoFocus/>
                <input type="text"  className="form-control" placeholder="Re-Enter Email" onChange={(evt)=> this.setState({emailRetry: evt.target.value})} required />
                
                <Link to="/login" className="btn btn-primary btn-block btn-signin btn-sm" >SEND EMAIL </Link>
            </form>
            
        </div>
    </div>
    
    
    
</div>
        );
    }
}

export default RSP;
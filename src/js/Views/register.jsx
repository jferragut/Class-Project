import React from 'react';
import MainStore from '../Stores/mainStore.js';
import * as MainActions from '../Actions/mainActions.js';


export class Register extends React.Component {
    constructor(props) {
        super(props);
       this.state= {
           username:null,
           first_name:null,
           last_name:null,
           email:null,
           password:null,
           passwordRetry:null,
           is_active: true,
           email_contact:null,
           subscription_status:null,
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
        
   
  
  
    
    
  
  registerConfirm(evt){
  	  evt.preventDefault();
      if(this.state.password != this.state.passwordRetry) alert('Your passwords do not match');
      else MainActions.RegisterConfirm(this.props.history, this.state.username, this.state.first_name, this.state.last_name, this.state.email, this.state.password, this.state.is_active, this.isTrueEmail(), this.isTrueSub()) || MainActions.logUserIn;
  	  console.log("register confirm  is working " + this.state.username, this.state.first_name, this.state.last_name, this.state.email, this.state.password,this.state.is_active, this.state.passwordRetry, this.isTrueEmail(), this.isTrueSub()) ;
  	  return false;
  }
  
  isTrueEmail(){
      if(this.state.email_contact == 'true') return true;
      else return false;
  }
  
  isTrueSub(){
      if(this.state.subscription_status == 'false') return false;
      else return true;
      
  }
  
  

    render() {
        return (
        <div>
           
            
            <div className="container bg">
        <div className="card card-container">
            <h1 className="register"> REGISTER THINKCRYPTO ACCOUNT</h1>
            <form className="form-signin" onSubmit={(evt) => this.registerConfirm(evt)}>
                <span id="reauth-email" className="reauth-email"></span>
                <input className="place" type="username" id="username" className="form-control" min="4" max="15" placeholder="User Name" onChange={(evt)=> this.setState({username: evt.target.value})} required autoFocus/>
                <input className="place" type="firstname" id="firstname" className="form-control" min="4" max="15" placeholder="First Name" onChange={(evt)=> this.setState({first_name: evt.target.value})} required autoFocus/>
                <input className="place" type="lastname" id="lastname" className="form-control" min="4" max="15" placeholder="Last Name" onChange={(evt)=> this.setState({last_name: evt.target.value})} required/>
                <input className="place" type="email" id="email" className="form-control" min="4" max="20" placeholder="Email" onChange={(evt)=> this.setState({email: evt.target.value})} required/>
                <input type="password" id="pass" className="form-control" placeholder="Password" min="8" max="20" onChange={(evt)=> this.setState({password: evt.target.value})} required/>
                <input type="password" id="pass" className="form-control" placeholder="Re-enter Password" min="8" max="20" onChange={(evt)=> this.setState({passwordRetry: evt.target.value})}  required/>
            
                    <label className="mr-sm-2" htmlFor="emailcontactSelect">Email Contact ?</label>
                        <select className="custom-select mb-2 mr-sm-2 " onChange={(evt)=> this.setState({email_contact: evt.target.value})} id="inlineFormCustomSelect">
                            <option value="true" >Yes</option>
                            <option value="false"  >No</option>
                        </select>
                    <label className="mr-sm-2" htmlFor="subcriptionSelect">Account Type ? </label>
                        <select className="custom-select mb-2 mr-sm-2 "  onChange={(evt)=> this.setState({subscription_status: evt.target.value})} id="inlineFormCustomSelect">
                            <option value="false" >Free</option>
                            <option value="true"  >Paid</option>
                        </select>
                
                <button className="btn btn-lg btn-primary btn-block btn-signin" type="submit">SIGN UP</button>
            </form>
            
        </div>
    </div>
    
    
    
</div>
        );
    }
    
    isItMobile(){
        if(window.innerWidth <= 880) return false; else return true;
    }
}

export default Register;
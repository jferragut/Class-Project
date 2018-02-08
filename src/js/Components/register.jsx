import React from 'react';
import MainStore from '../Stores/mainStore.js';
import * as MainActions from '../Actions/mainActions.js';


export class Register extends React.Component {
    constructor(props) {
        super(props);
       this.state= {
           username: null,
           first_name: null,
           last_name: null,
           email:null,
           password:null,
           passwordRetry:null,
           email_contact:null,
           subscription_status:null
       };
    }
    
    /*signIn(event){
  	if(   ) mainActions.signIn(this.username, this.password);
  	else mainActions.SendResult(this.username, this.password);
  	console.log("user sign in is working") ;
  }*/
  
  registerConfirm(){
      if(this.state.password == this.state.passwordRetry) alert('they dont match');
      else MainActions.RegisterConfirm(this.history, this.state.first_name, this.state.last_name, this.state.email, this.state.password, this.state.passwordRetry, this.state.email_contact, this.state.subscription_status);
  	console.log("register confirm  is working " + this.state.first_name, this.state.last_name, this.state.email, this.state.password, this.state.passwordRetry, this.state.email_contact, this.state.subscription_status) ;
  }
  
  
  
  
  
  

    render() {
        return (
        <div>
           
            
            <div className="container bg">
        <div className="card card-container">
            <h1 className="register"> REGISTER THINKCRYPTO ACCOUNT</h1>
            <form className="form-signin">
                <span id="reauth-email" className="reauth-email"></span>
                <input className="place" type="username" id="username" className="form-control" placeholder="User Name" onChange={(evt)=> this.setstate.username = evt.target.value} required autoFocus/>
                <input className="place" type="firstname" id="firstname" className="form-control" placeholder="First Name" onChange={(evt)=> this.setState.first_name = evt.target.value} required autoFocus/>
                <input className="place" type="lastname" id="lastname" className="form-control" placeholder="Last Name" onChange={(evt)=> this.setState.last_name = evt.target.value} required/>
                <input className="place" type="email" id="email" className="form-control" placeholder="Email" onChange={(evt)=> this.setState.email = evt.target.value} required/>
                <input type="password" id="pass" className="form-control" placeholder="Password" onChange={(evt)=> this.setState.password = evt.target.value} required/>
                <input type="password" id="pass" className="form-control" placeholder="Re-enter Password" onChange={(evt)=> this.setState.passwordRetry = evt.target.value }  required/>
            
                    <label className="mr-sm-2" htmlFor="inlineFormCustomSelect">Email Contact ?</label>
                        <select className="custom-select mb-2 mr-sm-2 "onChange={()=> this.setState.email_contact} id="inlineFormCustomSelect">
                            <option defaultValue="true" >Yes</option>
                            <option defaultValue="false"  >No</option>
                        </select>
                    <label className="mr-sm-2" htmlFor="inlineFormCustomSelect">Account Type ? </label>
                        <select className="custom-select mb-2 mr-sm-2 "  onChange={(evt)=> this.setState.subscription_status = evt.target.value} id="inlineFormCustomSelect">
                            <option defaultValue="false" >Free</option>
                            <option defaultValue="true"  >Paid</option>
                        </select>

                    

  
           
                
                <button className="btn btn-lg btn-primary btn-block btn-signin" onClick = {()=> this.registerConfirm() } type="submit">SIGN UP</button>
            </form>
            
        </div>
    </div>
    
    
    
</div>
        );
    }
}

export default Register;
import React from 'react';
import MainStore from '../Stores/mainStore.js';
import * as MainActions from '../Actions/mainActions.js';


export class Register extends React.Component {
    constructor(props) {
        super(props);
       this.firstname= null;
       this.lastname= null;
       this.email=null;
       this.password=null;
       this.email_contact=null;
       this.subscription_status=null;
       
    }
    
    /*signIn(event){
  	if(   ) mainActions.signIn(this.username, this.password);
  	else mainActions.SendResult(this.username, this.password);
  	console.log("user sign in is working") ;
  }*/
  registerConfirm(task){
  	MainActions.RegisterConfirm(task, this.firstname, this.lastname, this.email, this.password, this.email_contact, this.subscription_status);
  	console.log("register confirm  is working " + this.firstname, this.lastname, this.email, this.password, this.email_contact, this.subscription_status) ;
  }
  
  
  

    render() {
        return (
        <div>
           
            
            <div className="container bg">
        <div className="card card-container">
            <h1 className="register"> REGISTER THINKCRYPTO ACCOUNT</h1>
            <form className="form-signin">
                <span id="reauth-email" className="reauth-email"></span>
                <input className="place" type="firstname" id="firstname" className="form-control" placeholder="First Name" onChange={(evt)=> this.firstname = evt.target.value} required autoFocus/>
                <input className="place" type="lastname" id="lastname" className="form-control" placeholder="Last Name" onChange={(evt)=> this.lastname = evt.target.value} required/>
                <input className="place" type="email" id="email" className="form-control" placeholder="Email" onChange={(evt)=> this.email = evt.target.value}required/>
                <input type="password" id="pass" className="form-control" placeholder="Password" onChange={(evt)=> this.password = evt.target.value}required/>
                <input type="password" id="pass" className="form-control" placeholder="Re-enter Password"  required/>
            
                    <label className="mr-sm-2" htmlFor="inlineFormCustomSelect">Email Contact ?</label>
                        <select className="custom-select mb-2 mr-sm-2 " id="inlineFormCustomSelect">
                            <option >Select</option>
                            <option defaultValue="true">Yes</option>
                            <option defaultValue="false">No</option>
                        </select>

                    <label className="custom-control custom-checkbox mb-2 mr-sm-2 ">
                        <input type="checkbox" className="custom-control-input"/>
                        <span className="custom-control-indicator"></span>
                        <span className="custom-control-description">Remember my preference</span>
                    </label>

  
           
                
                <button className="btn btn-lg btn-primary btn-block btn-signin" onClick = {()=> this.registerConfirm() || this.props.history.push('/profile')} type="submit">SIGN UP</button>
            </form>
            
        </div>
    </div>
    
    
    
</div>
        );
    }
}

export default Register;
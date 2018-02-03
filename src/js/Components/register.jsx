import React from 'react';
import MainStore from '../Stores/mainStore.js';
import * as MainActions from '../Actions/mainActions.js';


export class Register extends React.Component {
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
           
            
            <div className="container bg">
        <div className="card card-container">
            <h1 className="register"> REGISTER THINKCRYPTO ACCOUNT</h1>
            <form className="form-signin">
                <span id="reauth-email" className="reauth-email"></span>
                <input className="place" type="firstname" id="inputEmail" className="form-control" placeholder="First Name" required autoFocus/>
                <input className="place" type="lastname" id="inputEmail" className="form-control" placeholder="Last Name" required/>
                <input className="place" type="email" id="inputEmail" className="form-control" placeholder="Email" required/>
                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
                <input type="password" id="inputPassword" className="form-control" placeholder="Re-enter Password" required/>
            
                    <label className="mr-sm-2" htmlFor="inlineFormCustomSelect">Email Contact ?</label>
                        <select className="custom-select mb-2 mr-sm-2 " id="inlineFormCustomSelect">
                            <option defaultValue={MainActions.EmailContact()}  >Select</option>
                            <option defaultValue="true">Yes</option>
                            <option defaultValue="false">No</option>
                        </select>

                    <label className="custom-control custom-checkbox mb-2 mr-sm-2 ">
                        <input type="checkbox" className="custom-control-input"/>
                        <span className="custom-control-indicator"></span>
                        <span className="custom-control-description">Remember my preference</span>
                    </label>

  
           
                
                <button className="btn btn-lg btn-primary btn-block btn-signin" onClick = {()=> MainActions.RegisterConfirm() || this.props.history.push('/profile')} type="submit">SIGN UP</button>
            </form>
            
        </div>
    </div>
    
    
    
</div>
        );
    }
}

export default Register;
import React from 'react';
import MainStore from '../Stores/mainStore.jsx';
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
            <section className="form-elegant">
        
                <div className="card">
        
                    <div className="card-body mx-4">
        
                        <div className="text-center">
                            <h3 className="dark-grey-text mb-5"><strong>Sign in</strong></h3>
                        </div>
        
                        <div className="md-form">
                            <input type="text" id="Form-email1" className="form-control"/>
                            <label for="Form-email1" 
                            onChange = {(event,newValue) => this.setState({username:newValue})}>Username</label>
                        </div>
        
                        <div className="md-form pb-3">
                            <input type="password" id="Form-pass1" className="form-control"/>
                            <label for="Form-pass1"
                            onChange = {(event,newValue) => this.setState({password:newValue})}>Password</label>
                            <p className="font-small blue-text d-flex justify-content-end">Forgot <a href="#" className="blue-text ml-1"> Password?</a></p>
                        </div>
        
                        <div className="text-center mb-3">
                            <button type="button" className="btn blue-gradient btn-block btn-rounded z-depth-1a"
                            onClick={(event) => this.signIn(event)}>Sign in</button>
                            
                        </div>
                            <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2"> or Sign in with:</p>
        
                            <div className="row my-3 d-flex justify-content-center">
                            <button type="button" className="btn btn-white btn-rounded mr-md-3 z-depth-1a"><i className="fa fa-facebook blue-text text-center"></i></button>
                            <button type="button" className="btn btn-white btn-rounded mr-md-3 z-depth-1a"><i className="fa fa-twitter blue-text"></i></button>
                            <button type="button" className="btn btn-white btn-rounded z-depth-1a"><i className="fa fa-google-plus blue-text"></i></button>
                        </div>
        
                        </div>
        
                        <div className="modal-footer mx-5 pt-3 mb-1">
                            <p className="font-small grey-text d-flex justify-content-end">Not a member? <a href="#" className="blue-text ml-1"> Sign Up</a></p>
                    </div>
        
                </div>
        
            </section>
            
            <form>
                            <p className="h5 text-center mb-4">Sign up</p>
                        
                            <div className="md-form">
                                <i className="fa fa-user prefix grey-text"></i>
                                <input type="text" id="orangeForm-name" className="form-control"/>
                                <label for="orangeForm-name">Your name</label>
                            </div>
                            <div className="md-form">
                                <i className="fa fa-envelope prefix grey-text"></i>
                                <input type="text" id="orangeForm-email" className="form-control"/>
                                <label for="orangeForm-email">Your email</label>
                            </div>
                        
                            <div className="md-form">
                                <i className="fa fa-lock prefix grey-text"></i>
                                <input type="password" id="orangeForm-pass" className="form-control"/>
                                <label for="orangeForm-pass">Your password</label>
                            </div>
                        
                            <div className="text-center">
                                <button className="btn btn-deep-orange">Sign up</button>
                            </div>
            
            </form>
        </div>
        );
    }
}

export default Login;
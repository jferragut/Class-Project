import React from 'react';
import MainStore from '../Stores/mainStore.js';
import * as MainActions from '../Actions/mainActions.js';


export class editProfile extends React.Component {
    constructor() {
        super();
       
        }
        
    componentDidMount(){
    this.state = {
      data: MainStore.getUserProfile()
    };
    this.isLoggedIn = MainStore.isLoggedIn;
  }
    
    editProfileConfirm(evt){
      evt.preventDefault();
      if(this.state.password != this.state.passwordRetry) alert('Your passwords do not match');
      else MainActions.RegisterConfirm(this.history, this.state.username, this.state.first_name, this.state.last_name, this.state.email, this.state.password, this.state.passwordRetry, this.isTrueEmail(), this.isTrueSub());
  	  console.log("edit profile confirm  is sending " + this.state.username, this.state.first_name, this.state.last_name, this.state.email, this.state.password, this.state.passwordRetry, this.state.isTrueEmail(), this.isTrueSub()) ;
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
        <div className="container editp">
    <div className="row m-y-2 ">
        
        <div className="col-lg-4 text-lg-center">
            <h2 className="edit-title" > Edit Profile</h2>
        </div>
        
        <div className="col-lg-8 push-lg-4 personal-info">
             <form role="form" className="formcenter" onSubmit={(evt) => this.editProfileConfirm(evt)}>
                <div className="form-group row">
                    <label className="col-lg-3 col-form-label form-control-label">Username</label>
                    <div className="col-lg-9">
                        <input className="place" type="username" id="inputEmail" className="form-control" placeholder="Username"onChange={(evt)=> this.setState({username: evt.target.value})} required autoFocus/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-lg-3 col-form-label form-control-label">First name</label>
                    <div className="col-lg-9">
                        <input className="place" type="firstname" id="inputEmail" className="form-control" placeholder="First Name" onChange={(evt)=> this.setState({first_name: evt.target.value})}required autoFocus/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-lg-3 col-form-label form-control-label">Last name</label>
                    <div className="col-lg-9">
                        <input className="place" type="firstname" id="inputEmail" className="form-control" placeholder="Last Name" onChange={(evt)=> this.setState({last_name: evt.target.value})}required autoFocus/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-lg-3 col-form-label form-control-label">Email</label>
                    <div className="col-lg-9">
                        <input className="place" type="firstname" id="inputEmail" className="form-control" placeholder="Email"onChange={(evt)=> this.setState({email: evt.target.value})} required autoFocus/>
                    </div>
                </div>
                
                <div className="form-group row">
                    <label className="col-lg-3 col-form-label form-control-label">Password</label>
                    <div className="col-lg-9">
                        <input  type="password" id="pass" className="form-control" placeholder="Password"onChange={(evt)=> this.setState({password: evt.target.value})} required autoFocus/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-lg-3 col-form-label form-control-label">Confirm password</label>
                    <div className="col-lg-9">
                        <input  type="password" id="pass" className="form-control" placeholder="Confirm Password" onChange={(evt)=> this.setState({passwordRetry: evt.target.value})} required autoFocus/>
                    </div>
                </div>
                <label className="mr-sm-2" htmlFor="inlineFormCustomSelect">Email Contact ?</label>
                        <select className="custom-select mb-2 mr-sm-2 " onChange={(evt)=> this.setState({email_contact: evt.target.value})} id="inlineFormCustomSelect">
                            <option value="true" >Yes</option>
                            <option value="false"  >No</option>
                        </select>
                <label className="mr-sm-2" htmlFor="inlineFormCustomSelect">Account Type ? </label>
                        <select className="custom-select mb-2 mr-sm-2 "  onChange={(evt)=> this.setState({subscription_status: evt.target.value})} id="inlineFormCustomSelect">
                            <option value="false" >Free</option>
                            <option value="true"  >Paid</option>
                        </select>       
                <div className="form-group row">
                    <label className="col-lg-3 col-form-label form-control-label"></label>
                    <div className="col-lg-9">
                        <button className="btn btn-lg btn-secondary btn-block"  href="/profile" >CANCEL</button>
                        <button className="btn btn-lg btn-primary btn-block btn-signin" type="submit" >SAVE CHANGES</button>
                        
                    </div>
                </div>
            </form>
        </div>
        
    </div>
</div>
<hr />
            
            
            
 
    
    
</div>
        );
    }
}

export default editProfile;
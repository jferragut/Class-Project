import React from 'react';
import MainStore from '../Stores/mainStore.js';
import * as MainActions from '../Actions/mainActions.js';


export class editProfile extends React.Component {
    constructor() {
        super();
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
        <div className="container editp">
    <div className="row m-y-2">
        
        <div className="col-lg-4 text-lg-center">
            <h2 className="edit-title" > Edit Profile</h2>
        </div>
        <div className="col-lg-8">
            <div className="alert alert-info alert-dismissable"> <a className="panel-close close" data-dismiss="alert">×</a>
                This is an <strong>.alert</strong>. Use this to show important messages to the user.
            </div>
        </div>
        <div className="col-lg-8 push-lg-4 personal-info">
             <form role="form" className="formcenter">
                <div className="form-group row">
                    <label className="col-lg-3 col-form-label form-control-label">First name</label>
                    <div className="col-lg-9">
                        <input className="place" type="firstname" id="inputEmail" className="form-control" placeholder="First Name" required autoFocus/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-lg-3 col-form-label form-control-label">Last name</label>
                    <div className="col-lg-9">
                        <input className="place" type="firstname" id="inputEmail" className="form-control" placeholder="Last Name" required autoFocus/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-lg-3 col-form-label form-control-label">Email</label>
                    <div className="col-lg-9">
                        <input className="place" type="firstname" id="inputEmail" className="form-control" placeholder="Email" required autoFocus/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-lg-3 col-form-label form-control-label">Address</label>
                    <div className="col-lg-9">
                        <input className="form-control" type="text" value="" placeholder="Street" />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-lg-3 col-form-label form-control-label"></label>
                    <div className="col-lg-6">
                        <input className="form-control" type="text" value="" placeholder="City" />
                    </div>
                    <div className="col-lg-3">
                        <input className="form-control" type="text" value="" placeholder="State" />
                    </div>
                </div>
                
                <div className="form-group row">
                    <label className="col-lg-3 col-form-label form-control-label">Username</label>
                    <div className="col-lg-9">
                        <input className="place" type="firstname" id="inputEmail" className="form-control" placeholder="Username" required autoFocus/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-lg-3 col-form-label form-control-label">Password</label>
                    <div className="col-lg-9">
                        <input className="place" type="firstname" id="inputEmail" className="form-control" placeholder="Password" required autoFocus/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-lg-3 col-form-label form-control-label">Confirm password</label>
                    <div className="col-lg-9">
                        <input className="place" type="firstname" id="inputEmail" className="form-control" placeholder="Confirm Password" required autoFocus/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-lg-3 col-form-label form-control-label"></label>
                    <div className="col-lg-9">
                        <input type="reset" className="btn btn-secondary" value="Cancel" />
                        <input type="button" className="btn btnsave" value="Save Changes" />
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
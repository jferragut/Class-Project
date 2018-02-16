// ***********************
// * Import dependencies *
// *********************** 
 
import React from 'react';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';

// components
import { Error404 } from '../Components/error404.jsx';
import { Navbar } from '../Components/navbar.jsx';

// views
import { Home } from './home.jsx';
import { Dashboard } from './dashboard';
import { Login } from './login.jsx';
import { Register } from './register.jsx';
import { Profile } from './profile.jsx';
import { editProfile } from './editprofile.jsx';

// Stores
import mainStore from '../Stores/mainStore.js';
import watchlistStore from '../Stores/watchlistStore.js';

// Actions
import * as mainActions from '../Actions/mainActions.js';


export class Layout extends React.Component{
    
    constructor(){
        
        super();
        
        this.userInfo = mainStore.getUserProfile();
        if(this.userInfo.length===0){ 
            return( 
            <div className="loadingOverlay">
                <i className="fa fa-spinner fa-spin"></i>
            </div>);
        }else{
            mainActions.initalizeData();
        }
        
        this.state = {
            username: this.userInfo.username,
            isLoggedIn: false,
            path: window.location.pathname.substr(1)
        };   
        
        this.handleChange = this.handleChange.bind(this);
    }
    
    componentWillMount(){
        //Set a listener on change of the mainStore (emit) to update the state
        mainStore.on('change',this.handleChange.bind(this));
    }
    
    handleChange(){
        this.setState({
            username: this.userInfo.username,
            isLoggedIn: mainStore.getLoginStatus(),
        });
    }
    
    render(){
        
        return(
            <BrowserRouter>
                <div className="container-fluid no-gutters px-0">
                    <Navbar />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/dashboard' component={Dashboard} />
                        <Route exact path='/coin' component={Dashboard} />
                        <Route exact path='/login' component={Login} />
                        <Route exact path='/register' component={Register} />
                        <Route exact path='/profile' component={Profile} />
                        <Route exact path='/editprofile' component={editProfile} />
                        <Route component={Error404} />
                    </Switch>
                </div>
            </BrowserRouter>
            );
    }
    
}

export default withRouter(Layout);
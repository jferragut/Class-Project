// ***********************
// * Import dependencies *
// *********************** 
 
import React from 'react';
import { Redirect, BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';

// components
import { Error } from '../Components/error.jsx';
import { Navbar } from '../Components/navbar.jsx';

// views
import { Home } from './home.jsx';
import { Dashboard } from './dashboard';
import { DetailView } from '../Components/detailview.jsx';
import { TableData } from '../Components/tabledata.jsx';
import { Login } from './login.jsx';
import { Register } from './register.jsx';
import { Profile } from './profile.jsx';
import { editProfile } from './editprofile.jsx';
import { CP } from './cp.jsx';

// Stores
import mainStore from '../Stores/mainStore.js';
import watchlistStore from '../Stores/watchlistStore.js';

// Actions
import * as mainActions from '../Actions/mainActions.js';


export class Layout extends React.Component{
    
    constructor(){
        
        super();
        
        this.userInfo = mainStore.getUserProfile();
        if(this.userInfo.username===null||this.userInfo.username===undefined){ 
            this.props.history.push('/login');
        }else{
            mainActions.initalizeData(this.userInfo.username);
        }
        
        this.loginStatus = (function(){
        if(mainStore.getLoginStatus()===true){
            return true;
        } else {
            return false;
        }})();
        
        this.state = {
            username: '',
            isLoggedIn: this.loginStatus,
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
            isLoggedIn: this.loginStatus,
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
                        <Route exact path='/register' component={Register} props={this.state}/>
                        <Route exact path='/profile' component={Profile} props={this.state}/>
                        <Route exact path='/editprofile' component={editProfile} props={this.state}/>
                        <Route exact path='/CP' component={CP} props={this.state}/>
                        <Redirect to="/" />
                    </Switch>
                </div>
            </BrowserRouter>
            );
    }
    
}

export default withRouter(Layout);
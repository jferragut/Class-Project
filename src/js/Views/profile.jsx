import React from 'react';
import MainStore from '../Stores/mainStore.js';
import * as MainActions from '../Actions/mainActions.js';
import { Link } from 'react-router-dom';


export class Profile extends React.Component {
  constructor() {
    super();

    this.state = {
      username: 'test',
      first_name: null,
      last_name: null,
      email: null,
      is_active: null,
      last_login: null,
      date_joined: null,
      email_contact: null,
      subscription_status: null,
      currencyList: []
    };
    this.isLoggedIn = null;
    this.handleChange = this.handleChange.bind(this);
  }



  componentWillMount() {
    this.handleChange();
  }


  componentDidMount() {
    MainStore.on('change', this.handleChange.bind(this));

  }

  handleChange() {
    var userInfo = MainStore.getUserProfile();
    var currencyList = MainStore.getCurrencyList();

    this.setState({
      username: userInfo.username,
      first_name: userInfo.first_name,
      last_name: userInfo.last_name,
      email: userInfo.email,
      is_active: userInfo.is_active,
      email_contact: userInfo.email_contact,
      subscription_status: userInfo.subscription_status,
      isLoggedIn: userInfo.loginStatus,
      currencyList: currencyList
    });
  }

  renderWatchlistCard(){
    return this.state.currencyList.map((theCoin)=>{
      if(theCoin.beingWatched===true){
        return(
          <div className="card watchlistRow" key={theCoin.rank}>
            <div className="card-header" role="tab" id="headingTwo">
              <h5 className="mb-0">
                  {theCoin.name}<span>&nbsp;({theCoin.symbol})</span><span className="float-right">
                  <Link to="#" onClick={()=>MainActions.RemoveFromWatchlist(theCoin.symbol,this.state.username)}>Remove</Link></span>
              </h5>
            </div>
          </div>
        );
      }
    });
  }



  render() {
    return (
      <div>
        <div className="container">
          <div className="teacher-name">
            <div className="row profileRow">
              <div className="col-sm-9">
                <h2><strong>Hello {(this.state.first_name == null) ? "User!" : (this.state.first_name) +"!"}</strong></h2>
              </div>
              <div className="col-sm-3">
                <div className="button pull-right">
                  <Link to="/editprofile" className="btn btn-primary btn-block btn-signin btn-sm" >Edit Profile <i className="fa fa-pencil"></i> </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className = "container" >
          <div className="row">
            <div className="col-sm-12">
              <div className="card card-block text-xs-left">
                <h5 className="profileheaders"><i className="fa fa-user fa-fw"></i>Overview</h5>
                <p>Rick Sanchez C-137 is the father of Beth Smith, and the grandfather of Morty and Summer Smith. Aged 60 years old, he is said to have been away from the family for around fourteen years prior to the events of the show's first episode, "Pilot".
                  He frequently travels on adventures through space and other planets and dimensions with his grandson Morty.</p>
              </div>
            </div>
          </div>
          <div className = "row" >
            <div className="col-sm-12">
              <div className="card card-block">
                <h5 className="profileheaders" ><i className="fa fa-rocket fa-fw"></i>Watchlist</h5>
                <div id="accordion" role="tablist" aria-multiselectable="true">
                  {this.renderWatchlistCard()}
                </div>
              </div>
            </div> 
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;

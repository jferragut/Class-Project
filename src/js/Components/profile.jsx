import React from 'react';
import MainStore from '../Stores/mainStore.js';
import * as MainActions from '../Actions/mainActions.js';


export class Profile extends React.Component {
    constructor() {
        super();
        this.state = {
          data : MainStore.getUserProfile
          
        };
        this.isLoggedIn = MainStore.isLoggedIn;
        
        
    }
    
    
  
  
  
  

    render() {
        return (
        <div>
            
            
            
  <div className="container">
    <div className="teacher-name">
      <div className="row">
        <div className="col-sm-9">
          <h2><strong>Hello {this.state.data.first_name}</strong></h2>
        </div>
        <div className="col-sm-3">
          <div className="button pull-right">
            <a href="/editprofile" className="btn btn-primary btn-block btn-signin btn-sm" >Edit Profile <i className="fa fa-pencil"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>

<div className="container">

  <div className="row">
    <div className="col-sm-12">
      <div className="card card-block text-xs-left">
        <h5><i className="fa fa-user fa-fw"></i>Overview</h5>

        <p>Rick Sanchez C-137 is the father of Beth Smith, and the grandfather of Morty and Summer Smith. Aged 60 years old, he is said to have been away from the family for around fourteen years prior to the events of the show's first episode, "Pilot".
          He frequently travels on adventures through space and other planets and dimensions with his grandson Morty.</p>
      </div>
    </div>
  </div>
  <div className="row">
    <div className="col-sm-12">
      <div className="card card-block">
        <h5><i className="fa fa-rocket fa-fw"></i>Watchlist</h5>
        <div id="accordion" role="tablist" aria-multiselectable="true">
  <div className="card">
    <div className="card-header" role="tab" id="headingOne">
      <h5 className="mb-0">
        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Bitcoin - BTC
        </a>
      </h5>
    </div>

    <div id="collapseOne" className="collapse show" role="tabpanel" aria-labelledby="headingOne">
      <div className="card-block">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header" role="tab" id="headingTwo">
      <h5 className="mb-0">
        <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Ethereum - ETH
        </a>
      </h5>
    </div>
    <div id="collapseTwo" className="collapse" role="tabpanel" aria-labelledby="headingTwo">
      <div className="card-block">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header" role="tab" id="headingThree">
      <h5 className="mb-0">
        <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Litecoin - LTC
        </a>
      </h5>
    </div>
    <div id="collapseThree" className="collapse" role="tabpanel" aria-labelledby="headingThree">
      <div className="card-block">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
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
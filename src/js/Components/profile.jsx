import React from 'react';
import MainStore from '../Stores/mainStore.js';
import * as MainActions from '../Actions/mainActions.js';


export class Profile extends React.Component {
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
            
            
            
  <div className="container">
    <div className="teacher-name">
      <div className="row">
        <div className="col-sm-9">
          <h2><strong>Rick Sanchez</strong></h2>
        </div>
        <div className="col-sm-3">
          <div className="button pull-right">
            <a href="#" className="btn btn-outline-success btn-sm">Edit Profile <i className="fa fa-pencil"></i></a>
          </div>
        </div>
      </div>
    </div>

    <div className="row" >
      <div className="col-sm-3">
        <a href="#"> <img className="rounded-circle" src="//images.weserv.nl/?url=i.imgur.com/Md9jS0Ib.jpg" alt="Rick" /></a>
      </div>

      <div className="col-sm-6">
        <h5>Associate Professor Dept. of Alien Agriculture, Jaarvlar-3 University
          </h5>
          <p>PhD on Molecular Shwanky Physics</p>
          <p>Address: 123 Cuba str Tampa, Fl, Earth 137</p>
      </div>

      
    </div>
  </div>

<div className="container">

  <div className="row">
    <div className="col-sm-12">
      <div className="card card-block text-xs-left">
        <h5><i className="fa fa-user fa-fw"></i>Biography</h5>

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
  <div class="card">
    <div class="card-header" role="tab" id="headingOne">
      <h5 class="mb-0">
        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Bitcoin - BTC
        </a>
      </h5>
    </div>

    <div id="collapseOne" class="collapse show" role="tabpanel" aria-labelledby="headingOne">
      <div class="card-block">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" role="tab" id="headingTwo">
      <h5 class="mb-0">
        <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Ethereum - ETH
        </a>
      </h5>
    </div>
    <div id="collapseTwo" class="collapse" role="tabpanel" aria-labelledby="headingTwo">
      <div class="card-block">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" role="tab" id="headingThree">
      <h5 class="mb-0">
        <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Litecoin - LTC
        </a>
      </h5>
    </div>
    <div id="collapseThree" class="collapse" role="tabpanel" aria-labelledby="headingThree">
      <div class="card-block">
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
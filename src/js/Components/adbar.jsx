import React from 'react';


export class AdBarZone extends React.Component{
    
    constructor(){
        
        super();   //call the super constructor 

    }
    
    //Prototype of what an Ad is
    createAd(adImage, adURL, adPosition, imageWidth, imageHeight){
        return {
          image: adImage, 
          url: adURL,
          position: adPosition,
          width: imageWidth,
          height: imageHeight
        };
      }
        
    render(){
        var usedClasses = "adSideBar d-none col-md-2 d-md-inline-block";  //set initial value of usedClasses
        var theStyles = {
            width: this.createAd.width,
            height: this.createAd.height,
            background: this.createAd.image
        };  //set initial value of theStyles
        
        switch(this.props.position) {
            case "right":
                this.createAd.position == 'right';
                theClasses: { usedClasses += " order-2" }
            case "left":
                this.createAd.position == 'left';
                theClasses: { usedClasses += " order-1" }
            case "pop":
                this.createAd.position == 'pop';
                usedClasses == "adSideBar d-none d-md-inline-block";
                theStyles = {
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%,-50%)'
                };
                
        }
  
        return(
            <div id="adBarZone" style={theStyles} className={usedClasses}>
                {/*<div className="adSideBarMobile d-inline-block d-md-none">
                    <p>Mobile Adbar!</p>
                    {this.state.content}
                </div>*/}
            </div>  
            );
    }

}
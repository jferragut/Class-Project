import React from 'react';
import * as mainActions from '../Actions/mainActions.js';
import mainStore from '../Stores/mainStore.js';

export class Social extends React.Component{
    
    constructor(){
        super();
        
    }
    
    componentDidMount(){
        this.results = this.props.result;
    }
    
    
    renderTwitterSearch(){
        var linkData = "";
        var coin = this.coinName;
        if(typeof(coin)!="undefined") linkData="https://twitter.com/hashtag/" + {coin};
        else linkData = "https://twitter.com/hashtag/cryptocurrency";
        
        !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';
        if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";
        fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
        
        return <a className="twitter-timeline" data-dnt="true" href={linkData} data-widget-id="966155670453211137">#{this.coinName} Tweets</a>;
    }
    
    renderRedditSearch(){
        var imageStyles = {
            width: "auto",
            height: "100px"
        };
        
        var theResponse = this.results.data;
        return theResponse;
        // if(typeof(theResponse)!='undefined'){
        //     return theResponse.map((item,index)=>{
        //     var link= item.children[index].data.permalink;
        //     return(
        //         <div>
        //             <image href={link} src={item.children[index].data.preview.images.source} styles={imageStyles} /> &emsp; 
        //             <a href={link}>{item.children[index].title}</a>
        //         </div>
        //         );
        //     });
        // } else return <p>Loading...</p>;
    }
    
    
    render(){
        var theStyles = {
            height: "500px",
            width: "100%"
        };
        
        var twitterSearch = this.renderTwitterSearch();
        var redditSearch = this.renderRedditSearch();
        
        return(    
            <div className="row">
                <div className="col-12 col-sm-4 twitter">
                    {twitterSearch}
                </div>
                <div className="col-12 col-sm-4 reddit"  style={theStyles}>
                    {redditSearch}
                </div>
            </div>            
            );
    }
}
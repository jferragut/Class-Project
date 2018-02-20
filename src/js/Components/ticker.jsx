import React from 'react';

export class Ticker extends React.Component{
    createTickerItem(){
        var theClasses="";
        // return <div className="ticker__item" key={theCoin.rank}>test coin</div>;
        return this.props.coins.map((theCoin)=>{
            if(Number(theCoin.percent_change_1h) > 0) theClasses="green"; else theClasses="red";
            return(
                <div className="ticker__item" key={theCoin.rank}>
                    {theCoin.name} ({theCoin.symbol}) <span>&emsp;</span>
                    <span className={theClasses}>
                        {(Number(theCoin.percent_change_1h) >0) ? <i className="fa fa-arrow-up"/> : <i className="fa fa-arrow-down"/>}
                        <span>&nbsp;&nbsp;</span>{theCoin.percent_change_1h} <span className="percent">&#37;</span>
                    </span>
                </div>
            );
        });
    }
    
    render(){
        var tickerItems = this.createTickerItem();
        //Display of the div and data begins here
        return(    
            <div className="tickerData container-fluid d-block my-auto">
                <div className="ticker-wrap">
                    <div className="ticker">
                        {tickerItems}
                    </div>
                </div>
            </div>            
        );
    }
}
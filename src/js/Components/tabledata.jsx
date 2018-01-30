import React from 'react';
import mainStore from '../Stores/mainStore.js';
import * as mainActions from '../Actions/mainActions.js';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

export class TableData extends React.Component{
    
    constructor(){
        
        super();   //call the super constructor 
        
        this.state = {
            data: this.data,
            sampleData: [11046.70, 11320.20, 11858.70, 11657.20, 12032.00, 14369.10, 17899.70],
            width: window.innerWidth,
            height: window.innerHeight,
            table: this.updateWindowDimensions,
            currencyList: []
        };
        
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        mainActions.GetCurrencies();
    }
    
    componentDidMount() {
      this.updateWindowDimensions();
      window.addEventListener('resize', this.updateWindowDimensions);
      //Set a listener on the change of the store (emit) to set state of the currencyList in the state
      mainStore.on('change',this.setCurrencyList.bind(this));
    }
    
    componentWillUnmount() {
      window.removeEventListener('resize', this.updateWindowDimensions);
      mainStore.removeEventListener('change',this.setCurrencyList);
    }
    
    updateWindowDimensions() {
      this.setState({ width: window.innerWidth, height: window.innerHeight });
      {this.state.width <= 768 ? this.setState({table:false}) : this.setState({table:true})}
    }
    
    setCurrencyList(){
        this.setState({
            currencyList: mainStore.getCurrencyList() 
        }); 
    }
    
    RenderAsTable(){
        // debugger;
        var actiondata = this.state.currencyList;
        console.log("Rendering as table",mainStore.model.currencyList);
        return(
            <div>
                <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Market Cap</th>
                                <th>Price</th>
                                <th>Volume (24h)</th>
                                <th>Circulating Supply</th>
                                <th>Change (24h)</th>
                                <th>Price Graph (7d)</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {actiondata.map((itemData,index) => this.RenderRow(itemData,index))}
                        </tbody>
                    </table>
            </div>
        );
    }
    
    RenderRow(theData,index){
        // debugger;
        var position = 0;
        var actiondata = this.state.currencyList[index];
        return(
        <tr>
            <td>{++position}</td>
            <td>{actiondata.name}</td>
            <td>{actiondata.market_cap_usd}</td>
            <td>{actiondata.price_usd}</td>
            <td>{actiondata.volume_24h_usd}</td>
            <td>{actiondata.available_supply}</td>
            <td>{actiondata.percent_change_24h}</td>
            <td>
                <Sparklines data={actiondata.ticker_history.split(',')}>
                    <SparklinesLine />
                    <SparklinesReferenceLine type="mean" />
                </Sparklines>
            </td>
            <td><i className="fa fa-bell-o" aria-hidden="true" data-toggle="tooltip" title="Add to Watchlist"></i></td>
        </tr>    
        );
    }
    
    RenderAsCards(){
        var actiondata = this.state.currencyList;
        console.log("Rendering as a card");
        return(
                <div>
                    {actiondata.map((itemData,index) => this.renderCard(itemData,index))}
                </div>
            );
    }
    
    renderCard(theData,index){
        var actiondata = this.state.currencyList[index];
        return(
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{actiondata.name}</h5>
                    <p className="card-text">
                        <p>Price: {actiondata.price_usd}</p>
                        <p>Change 24 Hrs: {actiondata.percent_change_24h}</p>
                    </p>
                    <Sparklines data={actiondata.ticker_history.split(',')}>
                        <SparklinesLine />
                        <SparklinesReferenceLine type="mean" />
                    </Sparklines>
                </div>
            </div>
        );
    }
    
    render(){
        // debugger;
        return(
            <div>
                {this.state.table === true ? this.RenderAsTable() : this.RenderAsCards() }
            </div>
        );
    }
    
}






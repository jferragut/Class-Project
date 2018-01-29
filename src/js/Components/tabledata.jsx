import React from 'react';
import mainStore from '../Stores/mainStore.js';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

export class TableData extends React.Component{
    
    constructor(){
        
        super();   //call the super constructor 
        
        this.state = {
            data: this.data,
            sampleData: [11046.70, 11320.20, 11858.70, 11657.20, 12032.00, 14369.10, 17899.70],
            width: window.innerWidth,
            height: window.innerHeight,
            table: this.updateWindowDimensions
        };
        
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }
    
    componentDidMount() {
      this.updateWindowDimensions();
      window.addEventListener('resize', this.updateWindowDimensions);
    }
    
    componentWillUnmount() {
      window.removeEventListener('resize', this.updateWindowDimensions);
    }
    
    updateWindowDimensions() {
      this.setState({ width: window.innerWidth, height: window.innerHeight });
      {this.state.width <= 768 ? this.setState({table:false}) : this.setState({table:true})}
    }
    
    RenderAsTable(){
        console.log("Rendering as table");
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
                            {this.RenderRow.map(mainStore.getCurrencyList)}
                        </tbody>
                    </table>
            </div>
        );
    }
    
    RenderRow(theData){
        var position = 0;
        return(
        <tr>
            <td>{position++}</td>
            <td>{mainStore.currencyName}</td>
            <td>{mainStore.marketCap}</td>
            <td>{mainStore.currencyPrice}</td>
            <td>{mainStore.volume24h}</td>
            <td>{mainStore.circulatingSupply}</td>
            <td>{mainStore.change24h}</td>
            <td>
                <Sparklines data={mainStore.data7d}>
                    <SparklinesLine />
                    <SparklinesReferenceLine type="mean" />
                </Sparklines>
            </td>
            <td><i className="fa fa-heart-o" aria-hidden="true" data-toggle="tooltip" title="Add to Watchlist"></i></td>
        </tr>    
        );
    }
    
    RenderAsCards(){
        console.log("Rendering as a card");
        return(
                <div>
                    {this.renderCard.map(mainStore.getCurrencyList)}
                </div>
            );
    }
    
    renderCard(theData){
        return(
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{mainStore.currencyName}</h5>
                    <p className="card-text">
                        <p></p>
                        <p></p>
                    </p>
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






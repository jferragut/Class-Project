import React from 'react';

import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

export class TableData extends React.Component{
    
    constructor(){
        
        super();   //call the super constructor 
        
        
        
        this.state = {
            data: this.data,
            sampleData: [11046.70, 11320.20, 11858.70, 11657.20, 12032.00, 14369.10, 17899.70]
        };

    }
    
    render(){
        
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
                            <th><i className="fa fa-cog" aria-hidden="true"></i></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Bitcoin</td>
                            <td>$280,636,076,670</td>
                            <td>$16,775.60</td>
                            <td>$21,221,200,000</td>
                            <td>16,728,825 BTC</td>
                            <td>-6.52%</td>
                            <td>
                                <Sparklines data={this.state.sampleData}>
                                    <SparklinesLine />
                                    <SparklinesReferenceLine type="mean" />
                                </Sparklines>
                            </td>
                            <td><i className="fa fa-cog" aria-hidden="true"></i></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Ethereum</td>				
                            <td>$44,611,072,310</td>
                            <td>$463.63</td>
                            <td>$2,268,790,000</td>
                            <td>96,221,073 ETH</td>
                            <td>8.49%</td>
                            <td>
                                <Sparklines data={this.state.sampleData}>
                                    <SparklinesLine />
                                    <SparklinesReferenceLine type="mean" />
                                </Sparklines>
                            </td>
                            <td><i className="fa fa-cog" aria-hidden="true"></i></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Bitcoin Cash</td>					
                            <td>$24,751,405,934</td>
                            <td>$1,469.36</td>
                            <td>$2,473,190,000</td>
                            <td>16,845,025 BCH</td>
                            <td>13.71%</td>
                            <td>
                                <Sparklines data={this.state.sampleData}>
                                    <SparklinesLine />
                                    <SparklinesReferenceLine type="mean" />
                                </Sparklines>
                            </td>
                            <td><i className="fa fa-cog" aria-hidden="true"></i></td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>IOTA</td>						
                            <td>$13,744,110,162</td>
                            <td>$4.94</td>
                            <td>$958,455,000</td>
                            <td>2,779,530,283 MIOTA *</td>
                            <td>23.76%</td>
                            <td>
                                <Sparklines data={this.state.sampleData}>
                                    <SparklinesLine />
                                    <SparklinesReferenceLine type="mean" />
                                </Sparklines>
                            </td>
                            <td><i className="fa fa-cog" aria-hidden="true"></i></td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Ripple</td>					
                            <td>$9,774,854,724</td>
                            <td>$0.252325</td>
                            <td>$509,198,000</td>
                            <td>38,739,144,847 XRP *</td>
                            <td>1.34%</td>
                            <td>
                                <Sparklines data={this.state.sampleData}>
                                    <SparklinesLine />
                                    <SparklinesReferenceLine type="mean" />
                                </Sparklines>
                            </td>
                            <td><i className="fa fa-cog" aria-hidden="true"></i></td>
                        </tr>
                        <tr>
                            <td>6</td>					
                            <td>Litecoin</td>
                            <td>$7,450,462,795</td>
                            <td>$137.44</td>
                            <td>$1,697,180,000</td>
                            <td>54,209,233 LTC</td>
                            <td>41.35%</td>
                            <td>
                                <Sparklines data={this.state.sampleData}>
                                    <SparklinesLine />
                                    <SparklinesReferenceLine type="mean" />
                                </Sparklines>
                            </td>
                            <td><i className="fa fa-cog" aria-hidden="true"></i></td>
                        </tr>
                        <tr>
                            <td>7</td>					
                            <td>Dash</td>
                            <td>$5,629,481,018</td>
                            <td>$727.16</td>
                            <td>$278,544,000</td>
                            <td>7,741,736 DASH</td>
                            <td>7.53%</td>
                            <td>
                                <Sparklines data={this.state.sampleData}>
                                    <SparklinesLine />
                                    <SparklinesReferenceLine type="mean" />
                                </Sparklines>
                            </td>
                            <td><i className="fa fa-cog" aria-hidden="true"></i></td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>NEM</td>					
                            <td>$5,124,977,999</td>
                            <td>$0.569442</td>
                            <td>$300,121,000</td>
                            <td>8,999,999,999 XEM *</td>
                            <td>143.32%</td>
                            <td>
                                <Sparklines data={this.state.sampleData}>
                                    <SparklinesLine />
                                    <SparklinesReferenceLine type="mean" />
                                </Sparklines>
                            </td>
                            <td><i className="fa fa-cog" aria-hidden="true"></i></td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>Bitcoin Gold</td>						
                            <td>$4,328,626,990</td>
                            <td>$259.27</td>
                            <td>$170,930,000</td>
                            <td>16,695,699 BTG</td>
                            <td>1.90%</td>
                            <td>
                                <Sparklines data={this.state.sampleData}>
                                    <SparklinesLine />
                                    <SparklinesReferenceLine type="mean" />
                                </Sparklines>
                            </td>
                            <td><i className="fa fa-cog" aria-hidden="true"></i></td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>Monero</td>					
                            <td>$4,260,774,563</td>
                            <td>$275.79</td>
                            <td>$188,770,000</td>
                            <td>15,449,232 XMR</td>
                            <td>-0.97%</td>
                            <td>
                                <Sparklines data={this.state.sampleData}>
                                    <SparklinesLine />
                                    <SparklinesReferenceLine type="mean" />
                                </Sparklines>
                            </td>
                            <td><i className="fa fa-cog" aria-hidden="true"></i></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            );
    }
    
    
    
}
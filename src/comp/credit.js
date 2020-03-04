import React, { Component } from 'react'
import './credit.css'

class Crd extends Component {
    state = {
        name: 'xxxxx xxx',
        number: '0000 00000 0000 0000',
        month: 'xx',
        year: 'xx',
    }

    // name of card
   nameChange =n => {

        this.setState({ name: n.target.value.toUpperCase()});
    }
    // number of card
    numberChange = N => {

        this.setState({number: N.target.value.slice(0,4)+" "+N.target.value.slice(4,8)+" "+N.target.value.slice(8,12)+" "+N.target.value.slice(12,16)});
    }
    //year of expires
    yearChange = d=> {

        this.setState({year: d.target.value.slice(0,2)});
    }
    // year of expires
    monthChange = m => {
        m.target.value = m.target.value>12 || m.target.value<0 ?"" : m.target.value
        this.setState({month : m.target.value})

        // this.setState({month: m.target.value.slice(0,2).replace(/(0[^1-9]|1[^0-2])/g , "") });
    }
   
 
       
    

    render() {
        return (
                <div>
                <div className="credit" > 
                <h1> My Bank </h1> 
                <div className="card-number">{this.state.number} </div>
                <div className="flex">    
                    <div className="card-holder">
                        <div> Card Holder </div>
                        <div>{this.state.name} </div>

    
                    </div>
                      <div className="expiress">
                            <div>Expires </div>
                            <div>   {this.state.month} /{this.state.year} </div>

                      </div>
                    </div>
                </div>

                <div className="form">
                    <label> NAME 
                        <input type="text" maxLength="16" placeholder="enter your name" onChange={this.nameChange}/>
                     </label>
                     <label> NUMBER 
                         <input type="text" maxLength="16" placeholder="enter your number" onChange={this.numberChange}/>

                     </label>
                     <label> Expires
                     <input className="expires" type="text" maxLength="2" placeholder="Month" onChange={this.monthChange} />
                     /
                        <input className="expires" type="text" maxLength="2" placeholder="Year" onChange={this.yearChange} />
                     
                   
                    </label> 

                </div>
                </div>
        )
    }
}
export default Crd
import React, { Component } from "react";

export default class Cards extends Component {
    
  state = 
    { count: 1,price:0,name:"Shabana" };

  render() {
    //           function UpdateCount(){
    //     this.setState({
    //        count:this.state.count+1,
    //     })
    // }

        const UpdateCount=()=>{
            this.setState({
                count:this.state.count+1,//2*50 = 100
                price:this.state.count*50,
            })
        }

        const RemoveCount=()=>{
            this.setState({
                count:this.state.count>=1?this.state.count-1 : this.state.count,
            })
        }

    return (<>

        <div className="container">
    <h1>Welcome to the cards Component</h1>
    <button className="btn btn-danger" onClick={RemoveCount} >-</button>
    <span >{this.state.count}</span>

    <button className="btn btn-success" onClick={UpdateCount}>+</button>
    <br />
    <span >{this.state.price}</span>
    </div>
    </>)
  }
}

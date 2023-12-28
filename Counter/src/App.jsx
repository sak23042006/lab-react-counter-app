import React from "react"

class Counter extends React.Component{
  
  state = {
    count : 0
  }
  
  Inc = () =>{
    this.setState({count: this.state.count+1})
  }

  Dec = () =>{
    if(this.state.count>0){
      this.setState({count: this.state.count - 1})
    }
  }

  Reset = () => {
    this.setState({count: this.state.count - this.state.count })
  }
  
  render(){
    
    return(
      <>
      <h1>Counter App</h1>
      <h1>{this.state.count}</h1>
      <div>
        <button onClick={this.Inc} >+</button>
        <button onClick={this.Dec} >-</button>
        <button onClick={this.Reset} >Reset</button>
      </div>
      </>
    )
  }
}

export default Counter;
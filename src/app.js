import React, {Component} from 'react'
import {hot} from "react-hot-loader";

class App extends Component {
    state = {
        count: 0
    };

    render() {
        return (
            <div>
                <h1>Init</h1>
                <h2>Count: {this.state.count}</h2>
                <button onClick={()=> {this.setState({count:this.state.count + 1})}}>+</button>
                <button onClick={()=> {this.setState({count:this.state.count - 1})}}>-</button>
            </div>
        )
    }
}

export default hot(module)(App)
import React, { Component } from 'react';

class ClassComponent extends Component {
    constructor() {
        super();
        this.state = { 
        // count: 0,
        // name: '',
        }
    }

    // disp = () => {
    //     this.setState({
    //         name:'Janvi',
    //     })
    // }

    // dispDouble = () => {
    //     this.setState({
    //         name:'',
    //     })
    // }

    // incrementFn = () => {
    //     console.log('increment...');
    //     this.setState (
    //         {
    //         count: this.state.count + 1
    //         }
    //     )
    // }

    // decrementFn = () => {
    //     console.log('decrement...')
    //     this.setState ({
    //         count: this.state.count - 1
    //     }
    //     )
    // }

    // resetFn = () => {
    //     console.log('reset...')
    //     this.setState ( {
    //         count: 0
    //     }
    //     )
    // }


    render() {
        return(
            <>
                <h1>This is class component</h1>
                <h1>Created by Janvi</h1>
                <h1>{this.state.name}</h1> 


                {/* <button onClick= {this.disp} onDoubleClick={this.dispDouble}>Show</button>
                <h1>{this.state.name}</h1> */}

                {/* <h1>{this.state.count}</h1>
                <button onClick={this.incrementFn}>Increase</button>
                <button onClick={this.decrementFn}>Decrease</button>
                <button onClick={this.resetFn}>Reset</button> */}
            </>
        )
    }
}

export default ClassComponent;
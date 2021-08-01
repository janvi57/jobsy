import React, { Component } from 'react';

class Timer extends Component {
    constructor() {
        super();
        this.state = {
            time : 60,
        }
    }

    // setTime = (time) => {
    //     this.setState({
    //         this.setTime(
                
    //         )
    //         newTime : time--;
    //     })
    // }

    render() {
        return (
            <>
                <h1>Reverse Timer</h1>
                <h3>{this.time}</h3>
            </>
        )
    }
}

export default Timer;
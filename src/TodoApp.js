import React, { Component } from 'react'

class TodoApp extends Component{
    constructor(){
    super()
    this.state = {
        userInput:[]
    } 
    }


    add = () =>{
        let inp = this.inp 
        this.setState({userInput:this.state.userInput.concat(inp.target.value)})
    }

    remove = (i) => () =>{
        this.state.userInput.splice(i,1) 
        this.setState({userInput:this.state.userInput})
    }

    render(){
        return(
        <>
        <h1>TodoApp</h1>
        <input type="text" onChange={a => this.inp = a}></input>
        <button onClick={this.add}>Add task</button>    
        <ul>
            {this.state.userInput.map((e)=>(
                <li>
                    {e}     
                <>
                <button onClick={this.remove(this.state.userInput.indexOf(e))}>X</button>
                </>
                </li> 
            ))}
        </ul>    
        </>)
        
    }


}

export default TodoApp
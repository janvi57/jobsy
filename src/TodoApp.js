import React, { Component } from 'react';
import viewItems from './viewItems';

class TodoApp extends Component {
    constructor() {
        super();
        this.state = {
            list : [],
            userInput : {
                    text: '',
                    key: ''
                },
        }
    this.addItem = this.addItem.bind(this);
    this.updateInput = this.updateInput.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    }

    updateInput = (val) => {
        this.setState({
            userInput: {
                text: val.target.value,
                key: Math.random()
            }
        })
    }

    addItem = (e) => {
        e.preventDefault();
        const v=this.state.userInput;
        if(v.text!=='') {
            const list = [...this.state.list,v];
            // list.push(userInput);

            this.setState({
                list: list,
                userInput: {
                        text: '',
                        key: ''
                    }
            });
        }
    }

    deleteItem(key) {
       // const list = [...this.state.list];
        const updateList = this.state.list.filter(item => item.key!==key);
        this.setState({
            list: updateList,
        });
    }

    // ListItems = (e) => {
    //     const items = e.items;
    //     const LsItems = items.map(item => {
    //         return <div className='dig'>
    //             <p>
    //                 <input type='text' id={item.key} value={item.text}></input>
    //                 <span>
    //                     <button onClick={() => {
    //                         e.deleteItem(item.key)
    //                     }}>X</button>
    //                 </span>
    //             </p>
    //         </div>
    //     })
    //     return <div>
    //         {LsItems}
    //     </div>
    // }

    render() {
        return(
            <>
                <h3>Todos List</h3>
               
               <form onSubmit={this.addItem}>
                <input type='text' placeholder='Enter todos' value={this.state.userInput.text} onChange={this.updateInput}></input>
                <button type='submit'>Add</button>
                </form>
                <h5>{this.state.list.text}</h5>
                {/* <ListItems items={this.state.items} deleteItem={this.deleteItem}/> */}
                <viewItems items={this.state.items} deleteItem={this.deleteItem}  />
            </>
        );
    }
}

export default TodoApp;
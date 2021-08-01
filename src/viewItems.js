import React, {Component} from 'react';

class viewItems extends Component{
    createTask(item) {
        return <li key={item.key}>{item.text}</li>
    }

    render() {
        let todoEntries = this.props.entries;
        let ListItems = todoEntries.map(this.createTask);
    
    return <div className='theList'>
        {viewItems}
    </div>
    }
}
export default viewItems;
import { exportDefaultDeclaration } from '@babel/types';
import React, {Component, component} from 'react';

class ApiClass extends Component {
    constructor() {
        super();
        this.state = {
            apidata : [],
        }
    }

    callApi = () => {
        console.log('API Called..');
        fetch('https://api.nationalize.io/?name=nathaniel')
        .then((data) => {
            return data.json();
        }).then((json) => {
            console.log(json.country);
            this.setState ({
                apidata: json.country
            })
        })
    }

    render() {
        return(
            <>
                <button onClick={this.callApi}>Fetch Data</button>
                <h1>API Data List</h1>
                <input type='text' placeholder='Input'></input>
                {
                    this.state.apidata && this.state.apidata.map((item, index) => (
                        <>
                            {/* <span>{index}</span>
                            <span>{item.country_id}</span>
                            <br/> */}
                        </>
                    )
                    )}
            </>
        )
    }
}

export default ApiClass;
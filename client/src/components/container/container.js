import React, { Component } from 'react';

import axios from 'axios';
import Handler from './handler';

class Container extends Component{

    state = {
        data: []
    }

    componentDidMount(){
        axios.get(`http://localhost:3001/data`)
        .then( response => {
            this.setState({
                data: [...this.state.data, ...response.data]
            })
        } )
    }

    renderLists = (data) => (
        data ?
            data.map( list => 
                (
                    <Handler key={ list._id } list={ list }/>
            ) )
        : null
    )

    render() {

        console.log(this.state.data)

        return (
            <div>

                { this.renderLists(this.state.data) }

            </div>
        )
    }
}

export default Container;
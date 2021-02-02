import React, { Component } from 'react';

import axios from 'axios';

class Background extends Component {

    state = {
        text: '',
        date: "",
        time: ''
    }

    showText = (e) => {
        this.setState({text: e.target.value})
    }

    showTime = (e) => {
        this.setState({time: e.target.value})
        console.log(this.state.time)
    }

    showDate = (e) => {
        this.setState({date: e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault();

        const list = {
            done: false,
            subject: this.state.text,
            date: this.state.date,
            time: this.state.time,
        }

        console.log(list)

        this.setState({
            text: '',
            date: "",
            time: ''
        })

        axios.post(`http://localhost:3001/data`, list)
        .then( response => console.log(response.data) )
    }

    render() {

        return (
            <div className="background">
    
                <div className="close" onClick={ this.props.close }>Close</div>
    
                <div className="center">
                    
                    <h2>Data</h2>
    
                    <div>
                        <h4>Enter To-Do</h4>
                        <textarea cols="46" rows="12" value={ this.state.text } onChange={ this.showText }></textarea>
                    </div>
    
                    <div>
                        <h4>Enter Date</h4>
                        <input type="date" value={ this.state.date } onChange={ this.showDate }/>
                    </div>
    
                    <div>
                        <h4>Enter Time</h4>
                        <input type="time" value={ this.state.time } onChange={ this.showTime }/>
                    </div>
    
                    <button className="enter" onClick={ this.onSubmit }>Enter</button>
    
                </div>
            </div>
        )
    }
}

export default Background;
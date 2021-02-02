import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Layout from './components/Layouts/layout';
import Add from './footer';
import Container from './components/container/container';
import Background from './components/Background/background';

class App extends Component{

    state = {
        toggle: false
    }

    changeToggle = () => {
        this.setState({
            toggle: !this.state.toggle
        })
    }

    render(){

        // console.log(this.state)

        return (
            <Layout>
                {
                    this.state.toggle ? <Background close={ this.changeToggle }/> : null
                }
                <Container toggle={ this.changeToggle }/>
                <Add change={ this.changeToggle }/>
            </Layout>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
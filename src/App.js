import React, { Component } from 'react';
import Home from './home.js';
import Login from './login.js';
import fire from "./config/fire.js";



class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: null,
        }
        this.authListener = this.authListener.bind(this);
    }
    componentDidMount() {
        this.authListener();
    }
    authListener() {
        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ user });
            }
            else {
                    this.setState({ user: null });
                }
            
        })
    }
    render() {
        return (
            <div>
                {this.state.user ? (<Home/>) : (<Login/>)}
            </div>
        )
    }  
}
export default App;

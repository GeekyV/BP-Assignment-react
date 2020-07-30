import React from 'react';
import fire from "./config/fire.js";
import "./index.css";
import CardProfile from "./music.js"
class Home extends React.Component {

    logout() {
        fire.auth().signOut();
    }
    
    render() {
        return (
            < div >
                <div class="flex-container">
                    <div> <h1>you are logged in!!!</h1></div>
                    <div> <button onClick={this.logout}><h1>Logout</h1></button></div>
                </div>
                
                <div id="root"><CardProfile /></div>
                <a target="_blank" title="instagram/web__addict" href="https://www.instagram.com/web__addict/"><i class="fab fa-instagram"></i></a>
            </div>



            )
            }
}

export default Home; 
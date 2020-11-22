import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import Title from './Title';
import profile from '../assets/headshot.jpg';

class App extends Component {
    state = { displayBio: false };

    //Below is the equivalent of above
    // constructor() {
    //     super();
    //     this.state = {
    //         displayBio: false,
    //     };

    //     this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
    // }

    toggleDisplayBio = () => { 
        this.setState({ displayBio: !this.state.displayBio }); 
    };

    render() {
        return (
            <div>
                <br />
                <div className="container-fluid">
                    <img src={profile} alt="profile" className="col-6 col-md-4 col-lg-2 profile" />
                    <h1>Hello!!</h1>
                    <p>My name is Derek.</p>
                    <Title />
                    <p>I'm always looking forward to helping people and building solutions.</p>
                    {
                        this.state.displayBio ? (
                            <div>
                                <p>I live in Columbia, and code every day as well!!</p>
                                <p>My favorite languages are JavaScript and SQL. I think Knockout.JS is great, I am learning MongoDB, and loving React.JS so far!</p>
                                <p>I love my dog George, being active, cooking and sports!</p>
                                <button className="btn btn-link" onClick={this.toggleDisplayBio}>Show less...</button> 
                            </div>
                        ) : (
                            <div>
                                <button className="btn btn-link" onClick={this.toggleDisplayBio}>Read more...</button>        
                            </div>
                        )
                    }
                    <hr />
                    <Projects />
                    <hr />
                    <SocialProfiles />
                </div>
            </div>
        );
    };
};

export default App;

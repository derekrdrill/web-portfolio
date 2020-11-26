import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import Title from './Title';
import Table from './Table';
import bitmoji1 from '../assets/bitmoji1.png';

class App extends Component {
    state = { displayBio: 0 };

    //Below is the equivalent of above
    // constructor() {
    //     super();
    //     this.state = {
    //         displayBio: false,
    //     };

    //     this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
    // }

    toggleDisplayBio = () => { 
        setTimeout(() => { this.setState({ displayBio: !this.state.displayBio }) }, 100);
    }

    render() {
        return (
            <div>
                <br />
                <div className="container-fluid" style={{marginTop: '100px'}}>
                    <h2>Creative, analytical & passionate Web Developer</h2>
                    <p>Hi, I'm Derek.</p>
                    <Title />
                    <p>I'm always looking forward to helping people and building solutions.</p>
                    {
                        this.state.displayBio ? (
                            <div>
                                <hr />
                                <h4 className="mt-4">I code every day and take pride in challenging myself.</h4>
                                {/* <p>My favorite languages are JavaScript and SQL. I think Knockout.JS is great, I am learning MongoDB, and loving React.JS so far!</p>
                                <p>I love my dog George, being active, cooking and sports!</p> */}
                                <Table />
                                <button className="btn btn-link" onClick={this.toggleDisplayBio}>Show less...</button> 
                            </div>
                        ) : (
                            <div>
                                <button className="btn btn-link" onClick={this.toggleDisplayBio}>Learn more...</button>        
                            </div>
                        )
                    }
                    <img src={bitmoji1} alt="profile" className="col-6 col-md-4 col-lg-2 profile" />
                    {/* <hr style={{ marginTop: '45vh' }}/>
                    <Projects />
                    <hr />
                    <SocialProfiles /> */}
                </div>
            </div>
        );
    };
};

export default App;

import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import Title from './Title';
import profile from '../assets/headshot.jpg';
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

                                <table className="table mt-5" style={{border: '1px solid gainsboro', boxShadow: '0 0 3px navy'}}>
                                    <thead style={{backgroundColor: 'azure'}}>
                                        <tr>
                                            <th>Client-Side <i className="fa fa-desktop" aria-hidden="true"></i></th>
                                            <th>Server-Side <i className="fa fa-server" aria-hidden="true"></i></th>
                                            <th>Database <i className="fa fa-database" aria-hidden="true"></i></th>
                                            <th>Frameworks/Libraries <i class="fa fa-book" aria-hidden="true"></i></th>
                                            <th>Development Tools <i class="fa fa-tools" aria-hidden="true"></i></th>
                                        </tr>
                                    </thead>
                                    <tbody style={{backgroundColor: 'beige'}}>
                                        <tr>
                                            <td>HTML</td>
                                            <td>C#</td>
                                            <td>SQL Server</td>
                                            <td>Knockout.js</td>
                                            <td>SSMS</td>
                                        </tr>
                                        <tr>
                                            <td>CSS</td>
                                            <td>Node.js</td>
                                            <td>Oracle</td>
                                            <td>React JS</td>
                                            <td>VS Code</td>
                                        </tr>
                                        <tr>
                                            <td>Javascript</td>
                                            <td>VB.Net</td>
                                            <td>MongoDB</td>
                                            <td>Bootstrap</td>
                                            <td>Github</td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>jQuery</td>
                                            <td>Git Bash</td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>jQuery-UI</td>
                                            <td>npm</td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>Regex</td>
                                        </tr>
                                    </tbody>
                                </table>
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

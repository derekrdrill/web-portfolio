import React, { Component } from 'react';

class SideBySideNewsletter extends Component {
    render() {
        return (
            <div style={{ marginTop: '18px' }}>
                <div className="form-row" style={{backgroundColor: 'white'}}>
                    <div className="col-6" style={{ border: '1px solid black', paddingTop: '15%', paddingBottom: '22%', paddingLeft: '7%', paddingRight: '8%'}}>
                        <h1 className="text-left">Before you keep going!</h1>
                        <br />
                        <p className="text-left">Sign up for the <strong>free</strong> newsletter to keep up on all news and special offers.</p>
                        <input type="text" class="form-cpntrol col-12" placeholder="Enter your email" />
                        <br />
                        <br />
                        <button type="buttom" className="btn btn-dark btn-lg col-12">Join the Newsletter</button>
                    </div>
                    <div className="col-6" style={{border: '1px solid black'}}>
                        <form>
                            <h1>Right Half</h1>
                            <p>If your knees aren't green by the end of the day, you ought to seriously re-examine your life.</p>
                        </form>
                        
                    </div>
                </div>
            </div>
        );
    };
}

export default SideBySideNewsletter;
import React, { Component } from 'react';

class AdvancedApplication extends Component {
    state = { fileUpload: false };

    fileUploadFunction = () => { 
        this.setState({ fileUpload: !this.state.fileUpload ? $('#fileUpload3').val().replace('C:\\fakepath\\', '') : undefined });
    };

    render() {
        return(
            <div>
                <div className="jumbotron">
                    <div className="row">
                        <div className="col-12 col-sm-8 col-md-4">
                            <img src="./logo.png" alt="app-image" className="col-12" />
                        </div>
                        <div className="col-12 col-md-8">
                            <h2 className="text-left text-md-right">Application for Employment</h2>
                        </div>
                    </div>
                </div>
                <div className="container" id="appContainer">
                    <div className="row">
                        <div className="col-12">
                            <p>
                                Please carefully read and answer all questions below. You will not be able to submit this application until all questions are answered.
                            </p>
                        </div>
                    </div>
                </div>
                <form style={{padding:'3%'}}>
                    <hr />
                    <div className="form-group">
                        <div className="form-row">
                            <div className="col-12">
                                <h3>Personal Information</h3>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-3">
                                <label htmlFor="firstName">First Name</label>
                                <input type="text" className="form-control" id="firstName" />
                            </div>
                            <div className="col-12 col-sm-6 col-lg-3">
                                <label htmlFor="lastName">Last Name</label>
                                <input type="text" className="form-control" id="lastName" />
                            </div>
                            <div className="col-12 col-sm-6 col-lg-3">
                                <label htmlFor="email">Email</label>
                                <input type="text" className="form-control" id="email" />
                            </div>
                            <div className="col-12 col-sm-6 col-lg-3">
                                <label htmlFor="phone">Phone</label>
                                <input type="text" className="form-control phone-mask" id="phone" />
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="form-group">
                        <div className="form-row">
                            <div className="col-12">
                                <h3>Address Information</h3>
                            </div>
                            <div className="col-12">
                                <label htmlFor="street">Street</label>
                                <input type="text" className="form-control" id="street" />
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <label htmlFor="city">City</label>
                                <input type="text" className="form-control" id="city" />
                            </div>
                            <div className="col-6 col-sm-6 col-md-3">
                                <label htmlFor="state">State</label>
                                <input type="text" className="form-control" id="state" />
                            </div>
                            <div className="col-6 col-sm-6 col-md-3">
                                <label htmlFor="zip">Zip</label>
                                <input type="text" className="form-control" id="zip" />
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="form-group">
                        <div className="form-row">
                            <div className="col-12">
                                <h3>Position Information</h3>
                            </div>
                            <div className="col-sm-6 col-md-6">
                                <label htmlFor="position">What position are you applying for?</label>
                                <input type="text" className="form-control" id="position" />
                            </div>
                            <div className="col-sm-6 col-md-6">
                                <label htmlFor="startDate">When can you start?</label>
                                <input type="text" className="form-control datepicker" id="startDate" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-sm-6 col-md-6">
                                <label htmlFor="empType">Full or Part Time?</label>
                                <select id="empType" className="custom-select">
                                    <option value="hr"></option>
                                    <option value="yr">Full Time</option>
                                    <option value="hr">Part Time</option>
                                </select>
                            </div>
                            <div className="col-sm-6 col-md-6">
                                <label htmlFor="payRate">Expected pay rate</label>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">$</span>
                                    </div>
                                    <input type="text" id="payRate" className="form-control" />
                                </div>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-sm-6 col-md-6">
                                <label htmlFor="crime">Have you ever been convicted of a crime?</label>
                                <select id="crime" className="custom-select">
                                    <option value=""></option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </div> 
                            <div className="col-sm-6 col-md-6">
                                <label htmlFor="explainCrime">Please explain</label>
                                <textarea name="" id="explainCrime" className="form-control"></textarea>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="form-group">
                        <div className="form-row">
                            <div className="col-12">
                                <h3>Qualifications</h3>
                                <p>
                                    Please list any education or training you feel relates to the position you are applying for
                                    that would help you perform the work, such as, schools, colleges, degrees, vocational or technical programs,
                                    and military training.
                                </p>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-3">
                                <label htmlFor="institution">Institution</label>
                                <input type="text" id="institution" className="form-control" />
                            </div>
                            <div className="col-6 col-md-6 col-lg-3 col-xl-2">
                                <label htmlFor="from">From Year</label>
                                <input type="text" id="from" className="form-control" />
                            </div>
                            <div className="col-6 col-md-6 col-lg-3 col-xl-2">
                                <label htmlFor="to">To Year</label>
                                <input type="text" id="to" className="form-control" />
                            </div>
                            <div className="col-12 col-sm-6 col-xl-2">
                                <label htmlFor="degree">Degree Received</label>
                                <input type="text" id="degree" className="form-control" />
                            </div>
                            <div className="col-12 col-sm-6 col-xl-3">
                                <label htmlFor="area">Area of Specialization</label>
                                <input type="text" id="area" className="form-control" />
                            </div>
                            <div className="col-12 d-xl-none">
                                <hr />
                            </div>
                        </div>
                        <div className="row">
                            <hr />
                        </div>
                        <div className="form-row">
                            <div className="col-6 col-md-4 col-lg-3">
                                <button type="button" className="col-12 btn btn-outline-secondary">
                                    <span className="d-none d-md-inline">Add Qualifications </span> 
                                    <i className="fa fa-plus" aria-hidden="true"></i>
                                </button>
                            </div>
                            <div className="col-6 col-md-4 col-lg-3">
                                <button type="button" className="col-12 btn btn-outline-secondary">
                                    <span className="d-none d-md-inline">Remove Qualifications </span>
                                    <i className="fa fa-minus" aria-hidden="true"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="form-group">
                        <div className="form-row">
                            <div className="col-12">
                                <h3>Special Skills</h3>
                                <p>Please list any skills you feel would help you in the position you are applying for.</p>
                                <textarea id="specialSkills" className="form-control"></textarea>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="form-group">
                        <div className="form-row">
                            <div className="col-12">
                                <h3>References</h3>
                                <p>Please at least 3 professional or educational references.</p>
                            </div>
                            <div className="col-12 col-md-6 col-lg-3">
                                <label htmlFor="referenceName">Name</label>
                                <input type="text" id="referenceName" className="form-control" />
                            </div>
                            <div className="col-12 col-md-6 col-lg-3">
                                <label htmlFor="referenceEmail">Email</label>
                                <input type="text" id="referenceEmail" className="form-control" />
                            </div>
                            <div className="col-12 col-md-6 col-lg-3">
                                <label htmlFor="referencePhone">Phone</label>
                                <input type="text" id="referencePhone" className="form-control" />
                            </div>
                            <div className="col-12 col-md-6 col-lg-3">
                                <label htmlFor="referenceRlationship">Relationship</label>
                                <input type="text" id="referenceRlationship" className="form-control" />
                            </div>
                            <div className="col-12 d-xl-none">
                                <hr />
                            </div>
                        </div>
                        <div className="row">
                            <hr />
                        </div>
                        <div className="form-row">
                            <div className="col-6 col-md-4 col-lg-3">
                                <button type="button" className="col-12 btn btn-outline-secondary">
                                    <span className="d-none d-md-inline">Add Reference </span> 
                                    <i className="fa fa-plus" aria-hidden="true"></i>
                                </button>
                            </div>
                            <div className="col-6 col-md-4 col-lg-3">
                                <button type="button" className="col-12 btn btn-outline-secondary">
                                    <span className="d-none d-md-inline">Remove Reference </span>
                                    <i className="fa fa-minus" aria-hidden="true"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="form-group">
                        <div className="form-row">
                            <div className="col-12">
                                <h3>Supporting Documents</h3>
                                <p>These documents could include Resume CV, Cover Letter, Letter of Recomendation, Transcript, etc.</p>
                                <p><i>This is not required, but information in these documents could impact our decision.</i></p>
                            </div>
                            <div className="col-12">
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend" style={{display: this.state.fileUpload ? 'inline-block' : 'none'}}>
                                        <input type="button" className="btn btn-outline-danger" value="x" onClick={this.fileUploadFunction} />
                                    </div>
                                    <div className="custom-file">
                                        <input type="file" className="custom-file-input hover-hand" id="fileUpload3" onChange={this.fileUploadFunction} />
                                        <label className="custom-file-label" htmlFor="fileUpload3" style={{backgroundColor: this.state.fileUpload ? '#CFFED2' : 'whitesmoke'}}>
                                            {
                                                this.state.fileUpload ? this.state.fileUpload : 'Choose file...'
                                            }
                                        </label>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col-6 col-md-4 col-lg-3">
                                        <button type="button" className="col-12 btn btn-outline-secondary">
                                            <span className="d-none d-md-inline">Add Document </span> 
                                            <i className="fa fa-plus" aria-hidden="true"></i>
                                        </button>
                                    </div>
                                    <div className="col-6 col-md-4 col-lg-3">
                                        <button type="button" className="col-12 btn btn-outline-secondary">
                                            <span className="d-none d-md-inline">Remove Document </span>
                                            <i className="fa fa-minus" aria-hidden="true"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="row">
                            <div className="col-12 text-right">
                                <input type="submit" value="Submit" className="btn btn-lg btn-success" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    };
};

export default AdvancedApplication;
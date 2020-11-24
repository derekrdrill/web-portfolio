import React, { Component } from 'react';

class BasicApplication extends Component {
    state = { fileUpload: false };

    fileUploadFunction = () => { 
        this.setState({ fileUpload: !this.state.fileUpload ? $('#fileUpload2').val().replace('C:\\fakepath\\', '') : undefined });
    };
    
    render() {
        return (
            <div>
                <form className="text-center">
                    <h2>Application for Employment</h2>
                    <div className="basic-app-holder"> 
                        <div className="form-group">
                            <h4>Upload supporting documents</h4>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend" style={{display: this.state.fileUpload ? 'inline-block' : 'none'}}>
                                    <input type="button" className="btn btn-outline-danger" value="x" onClick={this.fileUploadFunction} />
                                </div>
                                <div className="custom-file">
                                    <input type="file" className="custom-file-input hover-hand" id="fileUpload2" onChange={this.fileUploadFunction} multiple />
                                    <label className="custom-file-label" htmlFor="fileUpload2" style={{backgroundColor: this.state.fileUpload ? '#CFFED2' : 'whitesmoke'}}>
                                        {
                                            this.state.fileUpload ? this.state.fileUpload : 'Choose file...'
                                        }
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                <form>
                    <div className="container">
                        <div className="form-row p-3">
                            <div className="col-12 col-sm-6 col-lg-3">
                                <label htmlFor="name">Name</label>
                                <input type="text" className="form-control form-control-sm" id="name" required/>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-3">
                                <label htmlFor="email2">Email</label>
                                <input type="text" className="form-control form-control-sm" id="email" required/>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-2">
                                <label htmlFor="phone2">Phone</label>
                                <input type="text" className="form-control form-control-sm phone-mask" id="phone" required/>
                            </div>
                            <div className="col col-sm-6 col-lg-4">
                                <label htmlFor="position">What position are you applying for?</label>
                                <input type="text" className="form-control form-control-sm" id="position" required/>
                            </div>
                        </div>
                        <div className="form-row p-3">
                            <div className="col">
                                <label htmlFor="summary">Write a short summary about yourself</label>
                                <textarea className="form-control" id="summary"></textarea>
                            </div>
                        </div>
                        <div className="form-row p-3">
                            <div className="col text-right">
                                <input type="submit" value="Submit" className="btn btn-outline-success btn-lg"/>
                            </div>
                        </div>
                    </div>
                </form> 
            </div>
        )
    };
};

export default BasicApplication;
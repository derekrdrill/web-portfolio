import React from 'react';

const PersonalInformation = () => (
    <div>
        <div className="form-row">
            <h2 className="pt-5 pb-1">Personal Information</h2>
        </div>
        <div className="form-row">
            <h4 className="pb-2">Please fill in all fields below</h4>
        </div>
        <div className="form-row">
            <div className="col-12 col-lg-6">
                <label htmlFor="firstName4">First Name</label>
                <input type="text" id="firstName4" className="form-control app-control" />
            </div>
            <div className="col-12 col-lg-6">
                <label htmlFor="lastName4">Last Name</label>
                <input type="text" id="lastName4" className="form-control app-control" />
            </div>
            <div className="col-12 col-lg-6">
                <label htmlFor="email4">Email</label>
                <input type="text" id="email4" className="form-control app-control" />
            </div>
            <div className="col-12 col-lg-6">
                <label htmlFor="phone4">Phone</label>
                <input type="text" id="phone4" className="form-control app-control" />
            </div>
        </div>
        <br />
    </div>
);

export default PersonalInformation;
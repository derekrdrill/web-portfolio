import React from 'react';

const AddressInformation = () => (
    <div>
        <div className="form-row">
            <h2 className="pt-5 pb-1">Address Information</h2>
        </div>
        <div className="form-row">
            <h4 className="pb-2">Please fill in all fields below</h4>
        </div>
        <div className="form-row">
            <div className="col-12">
                <label htmlFor="street4">Street</label>
                <input type="text" id="street4" className="form-control app-control" />
            </div>
            <div className="col-12 col-lg-5">
                <label htmlFor="city4">City</label>
                <input type="text" id="city4" className="form-control app-control" />
            </div>
            <div className="col-12 col-lg-3">
                <label htmlFor="state4">State</label>
                <input type="text" id="state4" className="form-control app-control" />
            </div>
            <div className="col-12 col-lg-4">
                <label htmlFor="zip4">Zip</label>
                <input type="text" id="zip4" className="form-control app-control" />
            </div>
        </div>
        <br />
    </div>
);

export default AddressInformation;
import React from 'react';

const Qualifications = () => (
    <div>
        <div className="form-row">
            <h2 className="pt-5 pb-1">Qualifications</h2>
        </div>
        <div className="form-row">
            <h4 className="pb-2">Please fill in all fields below</h4>
            <p>Please list any education or training you feel relates to the position you are applying for that would help you perform the work, such as, schools, colleges, degrees, vocational or technical programs, and military training.</p>
        </div>
        <div className="form-row">
            <div className="col-12">
                <label htmlFor="institution">Institution</label>
                <input type="text" id="institution" className="form-control app-control" />
            </div>
            <div className="col-12 col-md-6">
                <label htmlFor="from4">From Year</label>
                <input type="text" id="from4" className="form-control app-control" />
            </div>
            <div className="col-12 col-md-6">
                <label htmlFor="to4">To Year</label>
                <input type="text" id="to4" className="form-control app-control" />
            </div>
            <div className="col-12 col-md-6">
                <label htmlFor="degree4">Degree Received</label>
                <input type="text" id="degree4" className="form-control app-control" />
            </div>
            <div className="col-12 col-md-6">
                <label htmlFor="area4">Area of Specialization</label>
                <input type="text" id="area4" className="form-control app-control" />
            </div>
        </div>
        <br />
    </div>
);

export default Qualifications;
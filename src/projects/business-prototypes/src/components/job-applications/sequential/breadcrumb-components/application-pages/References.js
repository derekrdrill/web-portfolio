import React from 'react';

const References = () => (
    <div>
        <div className="form-row">
            <h2 className="pt-5 pb-1">References</h2>
        </div>
        <div className="form-row">
            <h4 className="pb-2">Please list at least 3 professional or educational references.</h4>
        </div>
        <div className="form-row">
            <div className="col-12 col-md-6 col-lg-3">
                <label htmlFor="referenceName4">Name</label>
                <input type="text" id="referenceName4" className="form-control app-control" />
            </div>
            <div className="col-12 col-md-6 col-lg-3">
                <label htmlFor="referenceEmail4">Email</label>
                <input type="text" id="referenceEmail4" className="form-control app-control" />
            </div>
            <div className="col-12 col-md-6 col-lg-3">
                <label htmlFor="referencePhone4">Phone</label>
                <input type="text" id="referencePhone4" className="form-control app-control" />
            </div>
            <div className="col-12 col-md-6 col-lg-3">
                <label htmlFor="referenceRlationship4">Relationship</label>
                <input type="text" id="referenceRlationship4" className="form-control app-control" />
            </div>
        </div>
        <br />
    </div>
);

export default References;
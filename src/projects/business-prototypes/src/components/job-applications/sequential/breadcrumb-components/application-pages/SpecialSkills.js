import React from 'react';

const SpecialSkills = () => (
    <div>
        <div className="form-row">
            <h2 className="pt-5 pb-1">Special Skills</h2>
        </div>
        <div className="form-row">
            <h4 className="pb-2">Please describe any skills you feel would help you in the position you are applying for.</h4>
        </div>
        <div className="form-row">
            <div className="col-12">
                <label htmlFor="specSkills4">Special Skills</label>
                <textarea className="form-control app-control" id="specSkills4"></textarea>
            </div>
        </div>
        <br />
    </div>
);

export default SpecialSkills;
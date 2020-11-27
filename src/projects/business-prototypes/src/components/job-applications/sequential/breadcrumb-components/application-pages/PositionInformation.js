import React from 'react';

const PositionInformation = () => (
    <div>
        <div className="form-row">
            <h2 className="pt-5 pb-1">Position Information</h2>
        </div>
        <div className="form-row">
            <h4 className="pb-2">Please fill in all fields below</h4>
        </div>
        <div className="form-row">
            <div className="col-12 col-lg-6">
                <label htmlFor="position4">What position are you applying for?</label>
                <input type="text" id="psoiton4" className="form-control app-control" />
            </div>
            <div className="col-12 col-lg-6">
                <label htmlFor="startDate4">When can you start?</label>
                <input type="text" id="startDate4" className="form-control app-control datepicker" />
            </div>
            <div className="col-12 col-lg-6">
                <label htmlFor="empType4">Part or Full Time?</label>
                <select id="empType4" className="custom-select app-control">
                    <option value=""></option>
                    <option value="pt">Part Time</option>
                    <option value="ft">Full Time</option>
                </select>
            </div>
            <div className="col-12 col-lg-6">
                <label htmlFor="expectedPay4">What is your expected pay?</label>
                <input type="text" id="expectedPay4" className="form-control app-control" />
            </div>
            <div className="col-12">
                <label htmlFor="felony4">Have you been convicted of a felony?</label>
                <select id="felony4" className="custom-select app-control">
                    <option value=""></option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>
            <div className="col-12" data-bind="visible: felony4() == 'yes' ">
                <label htmlFor="explain4">Please explain</label>
                <textarea id="explain4" className="form-control app-control"></textarea>
            </div>
        </div>
        <br />
    </div>
);

export default PositionInformation;
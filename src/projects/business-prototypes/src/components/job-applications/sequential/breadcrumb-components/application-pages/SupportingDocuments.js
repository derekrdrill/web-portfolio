import React from 'react';

const SupportingDocuments = () => (
    <div>
        <div className="form-row">
            <h1 className="pt-5 pb-1">Supporting Documents</h1>
        </div>
        <div className="form-row">
            <h4 className="pb-2">These documents could include Resume CV, Cover Letter, Letter of Recomendation, Transcript, etc.</h4>
            <p><i>This is not required, but information in these documents could impact our decision.</i></p>
        </div>
        <div> 
            <div className="form-group">
                <h4>Upload supporting documents</h4>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <button type="button" className="btn btn-outline-danger">x</button>
                    </div>
                    <div className="custom-file">
                        <input type="file" className="custom-file-input app-control hover-hand" id="fileUpload4" />
                        <label className="custom-file-label" htmlFor="fileUpload4"></label>
                    </div>
                </div>
            </div>
        </div>
        <br />
    </div>
);

export default SupportingDocuments;
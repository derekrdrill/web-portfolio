import React from 'react';

const Toolbar = ({children}) => (
    <nav id="prototypeToggle" className="navbar navbar-dark sticky">
        <a className="btn btn-sm btn-info" href="#">Close</a>
        <div className="">
            <div className="btn-group" role="group">
                <button className="btn btn-success"><i className="fa fa-thumbs-up"></i></button>
                <button className="btn btn-danger"><i className="fa fa-thumbs-down"></i></button>
            </div>
        </div>
        <div className="d-inline d-sm-inline d-md-none">
            <div className="dropdown">
                <a className="btn btn-sm btn-secondary dropdown-toggle" type="button" id="options" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#"><i className="fa fa-cog"></i> Options</a>
                <div className="dropdown-menu" aria-labelledby="options">
                    <a className="dropdown-item" href="#">Print</a>
                    <a className="dropdown-item" href="#">Download</a>
                    <a className="dropdown-item" href="#">Send</a>
                    <a className="dropdown-item" href="#">Share</a>
                </div>
            </div>
        </div>
        <div className="d-none d-sm-none d-md-inline">
            <div className="btn-group" role="group">
                <button className="btn btn-light" title="Print Prototype"><i className="fa fa-print"></i></button>
                <button className="btn btn-light btnGroupDivide" title="Download Prototype"><i className="fa fa-download"></i></button>
                <button className="btn btn-light btnGroupDivide" title="Share Prototype"><i className="fa fa-share-alt"></i></button>
            </div>
        </div>
    </nav>
);

export default Toolbar;
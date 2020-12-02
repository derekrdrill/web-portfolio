import React, { Component } from 'react';


class Toolbar extends Component {
    render() {
        return (
            <nav id="prototypeToggle" className="navbar navbar-dark sticky">
                <button 
                    type="button" 
                    className="btn btn-sm btn-info d-none d-lg-inline-block"
                    onClick={this.props.toggleSidebar}
                >
                    {this.props.sidebarShown === true ? <span>&#8920; Close Sidebar</span> : <span>Open Sidebar &#8921;</span>}
                </button>
                <div class="dropdown d-inline-block d-lg-none">
                    <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown button
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a id="ja1_2" class="dropdown-item dropdown-sidebar" href="#" onClick={this.props.selectSidebar}>Job Application (Single-Page Basic)</a>
                        <a id="ja2_2" class="dropdown-item dropdown-sidebar" href="#" onClick={this.props.selectSidebar}>Job Application (Single-Page Advanced)</a>
                        <a id="ja3_2" class="dropdown-item dropdown-sidebar" href="#" onClick={this.props.selectSidebar}>Job Application (Sequential Breadcrumb)</a>
                        <a id="news_2" class="dropdown-item dropdown-sidebar" href="#" onClick={this.props.selectSidebar}>Newsletter sign-up</a>
                    </div>
                </div>
                {/* <button type="button" className="btn btn-secondary">Select a prototype</button> */}
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
    };
};
// const Toolbar = ({children}) => (
    
// );

export default Toolbar;
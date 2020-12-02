import React, { Component } from 'react';

class Sidebar extends Component {
    // selectSidebar = sidebarOption => { this.props.selectSidebar(sidebarOption.target.id); };

    render() {
        return (
            <nav id="sidebar" className="d-none d-lg-inline-block">
                <div className="sidebar-header pb-2">
                <div className="col-12 pt-2">
                        <h3>Prototypes</h3>
                    </div>
                </div>
                
                <ul className="list-group list-group-flush components">
                    <li id="ja1" className="list-group-item list-group-item-secondary list-group-item-action active" onClick={this.props.selectSidebar}>Job Application (Single-Page Basic)</li>
                    <li id="ja2" className="list-group-item list-group-item-secondary list-group-item-action" onClick={this.props.selectSidebar}>Job Application (Single-Page Advanced)</li>
                    <li id="ja3" className="list-group-item list-group-item-secondary list-group-item-action" onClick={this.props.selectSidebar}>Job Application (Sequential Breadcrumb)</li>
                    {/* <li id="ja4" className="list-group-item list-group-item-secondary list-group-item-action" onClick={this.selectSidebar}>Job Application (Sequential Breadcrumb)</li> */}
                    <li id="news" className="list-group-item list-group-item-secondary list-group-item-action" onClick={this.props.selectSidebar}>Newsletter sign-up</li>
                    <li id="pos" className="list-group-item list-group-item-secondary list-group-item-action">Restaurant POS</li>
                    <li id="dshbd" className="list-group-item list-group-item-secondary list-group-item-action">Reporting Dashboards</li>
                </ul>
            </nav>
        );
    };
};

export default Sidebar;

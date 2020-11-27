import React, { Component } from 'react';

class ProgressBar extends Component {
    render() {
        $('.breadcrumb-item').removeClass('active');
        $('#brd'+this.props.breadcrumbSelect).addClass('active');

        return (
            <nav style={{ display: this.props.breadcrumbSelect === 9 ? 'none': 'block' }}>
                <div className="progress">
                    <div id="appProgress" 
                        className="progress-bar progress-bar-striped progress-bar-animated" 
                        role="progressbar" 
                        style={
                            { 
                                width: (
                                    this.props.breadcrumbSelect === 0 ? '0%'
                                    : this.props.breadcrumbSelect === 1 ? '12%'
                                    : this.props.breadcrumbSelect === 2 ? '25%'
                                    : this.props.breadcrumbSelect === 3 ? '38%'
                                    : this.props.breadcrumbSelect === 4 ? '50%'
                                    : this.props.breadcrumbSelect === 5 ? '63%'
                                    : this.props.breadcrumbSelect === 6 ? '75%'
                                    : this.props.breadcrumbSelect === 7 ? '88%'
                                    : '100%'
                                )
                                , backgroundColor: this.props.breadcrumbSelect < 8 ? '#4433A2' : 'limegreen'
                            }
                        }
                    >
                    </div>
                </div>
                <ol className="breadcrumb">
                    <li id="brd0" className="breadcrumb-item active hover-hand" onClick={this.props.updateBreadcrumbSelectFromBreadcrumb}>Application for Employment</li>
                    <li id="brd1" className="breadcrumb-item hover-hand" onClick={this.props.updateBreadcrumbSelectFromBreadcrumb} style={{ display: this.props.breadcrumbSelect > 0 ? 'inline' : 'none' }}>Personal Information</li>
                    <li id="brd2" className="breadcrumb-item hover-hand" onClick={this.props.updateBreadcrumbSelectFromBreadcrumb} style={{ display: this.props.breadcrumbSelect > 1 ? 'inline' : 'none' }}>Address Information</li>
                    <li id="brd3" className="breadcrumb-item hover-hand" onClick={this.props.updateBreadcrumbSelectFromBreadcrumb} style={{ display: this.props.breadcrumbSelect > 2 ? 'inline' : 'none' }}>Position  Information</li>
                    <li id="brd4" className="breadcrumb-item hover-hand" onClick={this.props.updateBreadcrumbSelectFromBreadcrumb} style={{ display: this.props.breadcrumbSelect > 3 ? 'inline' : 'none' }}>Qualifications</li>
                    <li id="brd5" className="breadcrumb-item hover-hand" onClick={this.props.updateBreadcrumbSelectFromBreadcrumb} style={{ display: this.props.breadcrumbSelect > 4 ? 'inline' : 'none' }}>Special Skills</li>
                    <li id="brd6" className="breadcrumb-item hover-hand" onClick={this.props.updateBreadcrumbSelectFromBreadcrumb} style={{ display: this.props.breadcrumbSelect > 5 ? 'inline' : 'none' }}>References</li>
                    <li id="brd7" className="breadcrumb-item hover-hand" onClick={this.props.updateBreadcrumbSelectFromBreadcrumb} style={{ display: this.props.breadcrumbSelect > 6 ? 'inline' : 'none' }}>Supporting Documents</li>
                    <li id="brd8" className="breadcrumb-item hover-hand" onClick={this.props.updateBreadcrumbSelectFromBreadcrumb} style={{ display: this.props.breadcrumbSelect > 7 ? 'inline' : 'none' }}>Review Application</li>
                </ol>
            </nav>
        );
    };
};

export default ProgressBar;


import React, { Component } from 'react';
import ProgressBar from './breadcrumb-components/ProgressBar';
import LandingPage from './breadcrumb-components/application-pages/LandingPage';
import PersonalInformation from './breadcrumb-components/application-pages/PersonalInformation';
import AddressInformation from './breadcrumb-components/application-pages/AddressInformation';
import PositionInformation from './breadcrumb-components/application-pages/PositionInformation';
import Qualifications from './breadcrumb-components/application-pages/Qualifications';
import SpecialSkills from './breadcrumb-components/application-pages/SpecialSkills';
import References from './breadcrumb-components/application-pages/References';
import SupportingDocuments from './breadcrumb-components/application-pages/SupportingDocuments';

class BreadcrumbApplication extends Component {
    state = { breadcrumbSelect: 0, fileUpload: false };

    fileUploadFunction = () => { 
        this.setState({ fileUpload: !this.state.fileUpload ? $('#fileUpload3').val().replace('C:\\fakepath\\', '') : undefined });
    };

    updateBreadcrumbSelectFromButton = () => this.setState({ breadcrumbSelect: (this.state.breadcrumbSelect + 1) });

    updateBreadcrumbSelectFromBreadcrumb = breadcrumb => {
        let breadcrumbID = breadcrumb.target.id;
        let breadcrumbCount = Number(breadcrumbID.replace('brd', ''));

        this.setState({ breadcrumbSelect: breadcrumbCount });
    };

    render() {
        return (
            <div>
                <ProgressBar breadcrumbSelect={this.state.breadcrumbSelect} updateBreadcrumbSelectFromBreadcrumb={this.updateBreadcrumbSelectFromBreadcrumb}/>
                <div className={this.state.breadcrumbSelect === 8 ? 'reviewApp': ''}>
                    <div style={{ display: this.state.breadcrumbSelect === 0 ? 'block' : 'none' }}>
                        <LandingPage />
                        <div className="col-12 col-lg-6 offset-lg-6 text-center text-lg-left">
                            <button type="button" className="btn btn-lg btn-success" onClick={this.updateBreadcrumbSelectFromButton}>Click here to begin the application</button>
                        </div>
                    </div>
                    <form style={{ paddingTop: this.state.breadcrumbSelect === 8 ? '9%' : '1%', paddingRight: this.state.breadcrumbSelect === 8 ? '10%' : '7%', paddingLeft: this.state.breadcrumbSelect === 8 ? '10%' : '7%' }}>
                        <div style={{ display: this.state.breadcrumbSelect === 8 ? 'inline' : 'none' }}>
                            <h1>Review</h1>
                            <p>Please review all fields, edit if necessary, then submit forward.</p>
                        </div>
                        <div style={{ display: this.state.breadcrumbSelect === 1 || this.state.breadcrumbSelect === 8 ? 'inline' : 'none' }}>
                            <PersonalInformation />
                        </div>
                        <div style={{ display: this.state.breadcrumbSelect === 2 || this.state.breadcrumbSelect === 8 ? 'inline' : 'none' }}>
                            <AddressInformation />
                        </div>
                        <div style={{ display: this.state.breadcrumbSelect === 3 || this.state.breadcrumbSelect === 8 ? 'inline' : 'none' }}>
                            <PositionInformation />
                        </div>
                        <div style={{ display: this.state.breadcrumbSelect === 4 || this.state.breadcrumbSelect === 8 ? 'inline' : 'none' }}>
                            <Qualifications />
                        </div>
                        <div style={{ display: this.state.breadcrumbSelect === 5 || this.state.breadcrumbSelect === 8 ? 'inline' : 'none' }}>
                            <SpecialSkills />
                        </div>
                        <div style={{ display: this.state.breadcrumbSelect === 6 || this.state.breadcrumbSelect === 8 ? 'inline' : 'none' }}>
                            <References />
                        </div>
                        <div style={{ display: this.state.breadcrumbSelect === 7 || this.state.breadcrumbSelect === 8 ? 'inline' : 'none' }}>
                            <SupportingDocuments />
                        </div>
                        <div style={{ display: this.state.breadcrumbSelect > 0 && this.state.breadcrumbSelect < 8 ? 'inline' : 'none' }}>
                            <div className="col-12 col-md-4 col-lg-2 offset-md-8 offset-lg-10">
                                <button 
                                    type="button" 
                                    className="btn btn-info col-12" 
                                    onClick={this.updateBreadcrumbSelectFromButton}
                                >
                                    {
                                        this.state.breadcrumbSelect === 1 ? 'Address Information'
                                        : this.state.breadcrumbSelect === 2 ? 'Position Information'
                                        : this.state.breadcrumbSelect === 3 ? 'Quailifications'
                                        : this.state.breadcrumbSelect === 4 ? 'Special Skills'
                                        : this.state.breadcrumbSelect === 5 ? 'References'
                                        : this.state.breadcrumbSelect === 6 ? 'Supporting Documents'
                                        : 'Review Application'
                                    }
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    };
};

export default BreadcrumbApplication;
import React, { Component } from 'react';
import Toolbar from './Toolbar';
import Sidebar from './Sidebar';
import BasicApplication from './job-applications/single-page/Basic';
import AdvancedApplication from './job-applications/single-page/Advanced';
import BreadcrumbApplication from './job-applications/sequential/Breadcrumb';
import SideBySideNewsletter from './newsletter-signup/full-page/SideBySideNewsletter';

class App extends Component {
    state = { sidebarSelected: 'ja1' };

    selectSidebar = sidebarOption => {
        this.setState({sidebarSelected: sidebarOption});
        
        $('.list-group-item').removeClass('active');
        $('#' + sidebarOption).addClass('active');
    };

    render() {
        return (
            <div style={{backgroundColor: 'whitesmoke', minHeight: '106vh' }}>
                <Toolbar />
                <div className="sidebar-wrapper">
                    <Sidebar selectSidebar={this.selectSidebar} />
                </div>
                <div className="application application-basic" style={{display: this.state.sidebarSelected === 'ja1' ? 'inline-block' : 'none' }}><BasicApplication /></div>
                <div className="application application-advanced" style={{display: this.state.sidebarSelected === 'ja2' ? 'inline-block' : 'none'}}><AdvancedApplication /></div>
                <div style={{display: this.state.sidebarSelected === 'ja3' ? 'block' : 'none', marginLeft:'200px'}}><BreadcrumbApplication /></div>
                <div style={{display: this.state.sidebarSelected === 'news' ? 'inline-block' : 'none', left: '235px', position: 'absolute', right: '30px', top: '165px',}}><SideBySideNewsletter /></div>
            </div>
        );
    };
};

export default App;
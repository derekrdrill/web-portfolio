import React, { Component } from 'react';
import Toolbar from './Toolbar';
import Sidebar from './Sidebar';
import BasicApplication from './job-applications/single-page/Basic';
import AdvancedApplication from './job-applications/single-page/Advanced';
import BreadcrumbApplication from './job-applications/sequential/Breadcrumb';
import SideBySideNewsletter from './newsletter-signup/full-page/SideBySideNewsletter';

class App extends Component {
    state = { sidebarSelected: 'ja1', sidebarShown: true };

    selectSidebar = sidebarOption => {
        this.setState({sidebarSelected: sidebarOption});
        
        $('.list-group-item').removeClass('active');
        $('#' + sidebarOption).addClass('active');
    };

    toggleSidebar = () => {
        this.setState({ sidebarShown: !this.state.sidebarShown });
    };

    render() {
        return (
            <div style={{backgroundColor: 'whitesmoke', minHeight: '70vh' }}>
                <Toolbar sidebarShown={this.state.sidebarShown} toggleSidebar={this.toggleSidebar} />
                <div className="sidebar-wrapper" style={{display: this.state.sidebarShown ? 'inline-block' : 'none'}}>
                    <Sidebar selectSidebar={this.selectSidebar} />
                </div>
                <div className="application application-basic" style={{display: this.state.sidebarSelected === 'ja1' ? 'inline-block' : 'none' }}><BasicApplication /></div>
                <div className="application application-advanced" style={{display: this.state.sidebarSelected === 'ja2' ? 'inline-block' : 'none'}}><AdvancedApplication /></div>
                <div style={{display: this.state.sidebarSelected === 'ja3' ? 'block' : 'none', marginLeft: this.state.sidebarShown ? '200px' : '0px'}}><BreadcrumbApplication /></div>
                <div style={{display: this.state.sidebarSelected === 'news' ? 'inline-block' : 'none', left: this.state.sidebarShown ? '235px' : '18px', position: 'absolute', right: '30px', top: '165px',}}><SideBySideNewsletter /></div>
            </div>
        );
    };
};

export default App;
import React, { Component } from 'react';
import Toolbar from './Toolbar';
import Sidebar from './Sidebar';
import BasicApplication from './job-applications/single-page/Basic';

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
                <div style={{display: this.state.sidebarSelected === 'ja1' ? 'inline-block' : 'none'}}><BasicApplication /></div>
                <div style={{display: this.state.sidebarSelected === 'ja2' ? 'inline-block' : 'none'}}>JA2!</div>
                <div style={{display: this.state.sidebarSelected === 'ja3' ? 'inline-block' : 'none'}}>JA3!</div>
                <div style={{display: this.state.sidebarSelected === 'ja4' ? 'inline-block' : 'none'}}>JA4!</div>
            </div>
            
        )
    };
};

export default App;
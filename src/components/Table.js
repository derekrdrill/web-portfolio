import React, { Component } from 'react';

const Table = () => (
    <div className="table-responsive">
        <table className="table mt-5">
            <thead className="tech-table-head">
                <tr>
                    <th>Client-Side <i className="fa fa-desktop" aria-hidden="true"></i></th>
                    <th>Server-Side <i className="fa fa-server" aria-hidden="true"></i></th>
                    <th>Database <i className="fa fa-database" aria-hidden="true"></i></th>
                    <th>Frameworks/Libraries <i class="fa fa-book" aria-hidden="true"></i></th>
                    <th>Development Tools <i class="fa fa-tools" aria-hidden="true"></i></th>
                </tr>
            </thead>
            <tbody className="tech-table-body">
                <tr>
                    <td>HTML</td>
                    <td>C#</td>
                    <td>SQL Server</td>
                    <td>Knockout.js</td>
                    <td>SSMS</td>
                </tr>
                <tr>
                    <td>CSS</td>
                    <td>Node.js</td>
                    <td>Oracle</td>
                    <td>React JS</td>
                    <td>VS Code</td>
                </tr>
                <tr>
                    <td>Javascript</td>
                    <td>VB.Net</td>
                    <td>MongoDB</td>
                    <td>Bootstrap</td>
                    <td>Github</td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>jQuery</td>
                    <td>Git Bash</td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>jQuery-UI</td>
                    <td>npm</td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>Regex</td>
                </tr>
            </tbody>
        </table>
    </div>
);

export default Table;
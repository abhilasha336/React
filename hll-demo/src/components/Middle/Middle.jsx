import React from 'react'
import './middle.css';
import './js/IEupdate.js'; // Assuming this is the path to your IEupdate JavaScript file
import './js/custom.js'; // Assuming this is the path to your custom JavaScript file
import { useEffect,useState,useRef } from 'react';
// import { updateBrowser } from './js/IEupdate.js';
import { initializeCustom } from '../Middle/js/custom.js';
import Counter from '../Counter/Counter.jsx';




function Middle() {






    useEffect(() => {
        // Call any initialization functions from your JavaScript files here
        // For example, if IEupdate.js contains a function called initializeIEUpdate(),
        // you can call it like this:
        // updateBrowser();
        // Call the initializeIEUpdate function
        initializeCustom(); // Call the initializeCustom function
    
        // Make sure to handle any errors that may occur during the integration
      }, []);
    
  return (
<div>
<div className="page_body">
            <div className="pgCenter">
                <div className="tab-content-wrapper ">
                    <div className="tab-wrapper flex">
                        <div className="tab-lists">
                            <ul>
                                <li rel="home"><a href="javascript:void(0);">
                                        Home
                                    </a></li>
                                <li rel="summary"><a
                                        href="javascript:void(0);">Summary</a></li>
                                <li rel="facility_status"><a
                                        href="javascript:void(0);">Facility
                                        Status</a></li>
                            </ul>
                        </div>
                        <div className="tab-details">
                            <div id="home" className="tab-content">

                                <div className="hdate-wrapper">
                                    <div className="hdate_form">
                                        <div className="hdate">
                                            <div className="hdate_fd input_d">
                                                <div className="input_text">
                                                    From date
                                                </div>
                                            </div>
                                            <div className="hdate_fd input_d">
                                                <div className="input_text">
                                                    To date
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hdate_fd input_d">
                                            <div className="input_text">
                                                Select District
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="ctservices">
                                    <div className="upmap-mobile">
                                        <img src="/up-map-mob.png"
                                        alt="up-map"/>
                                    </div>
                                    <div className="ctservices-wrapper">
                                        <div className="cts-circlesw">
                                       

                                            <div
                                                className="ctscirclenone cinfo0"></div>
                                            <div className="ctscircleinfo cinfo1">
                                                <figure>
                                                    <img src="/p-icon.png"
                                                        alt="services"/>
                                                </figure>
                                                <h4>
                                                    <span className="clients"
                                                        ><Counter/></span>
                                                </h4>
                                                <h6>benefecaries covered</h6>

                                            </div>

                                            <div className="ctscircleinfo cinfo2">
                                                <figure>
                                                    <img src="/p-icon.png"
                                                        alt="services"/>
                                                </figure>
                                                <h4>
                                                    <span className="clients1"
                                                       ><Counter/></span>
                                                </h4>
                                                <h6>benefecaries covered</h6>
                                            </div>
                                            <div className="ctscircleinfo cinfo3">
                                                <figure>
                                                    <img src="images/p-icon.png"
                                                        alt="services"/>
                                                </figure>
                                                <h4>
                                                    <span className="clients2"
                                                        ><Counter/></span>
                                                </h4>
                                                <h6>benefecaries covered</h6>
                                            </div>
                                            <h1>FREE CT SCAN SERVICES IN
                                                <span>UTTAR PRADESH</span>
                                            </h1>
                                            <div className="ctscircleinfo cinfo4">
                                                <figure>
                                                    <img src="/p-icon.png"
                                                        alt="services"/>
                                                </figure>
                                                <h4>
                                                    <span className="clients3"
                                                        ><Counter/></span>
                                                </h4>
                                                <h6>benefecaries covered</h6>
                                            </div>
                                            <div className="ctscircleinfo cinfo5">
                                                <figure>
                                                    <img src="/p-icon.png"
                                                        alt="services"/>
                                                </figure>
                                                <h4>
                                                    <span className="clients4"
                                                        ><Counter/></span>
                                                </h4>
                                                <h6>benefecaries covered</h6>
                                            </div>

                                            <div className="ctscircleinfo cinfo6">
                                                <figure>
                                                    <img src="/p-icon.png"
                                                        alt="services"/>
                                                </figure>
                                                <h4>
                                                    <span className="clients5"
                                                       ><Counter/></span>
                                                </h4>
                                                <h6>benefecaries covered</h6>
                                            </div>
                                            <div className="ctscircleinfo cinfo7">
                                                <figure>
                                                    <img src="/p-icon.png"
                                                        alt="services"/>
                                                </figure>
                                                <h4>
                                                    <span className="clients6"
                                                       ><Counter/></span>
                                                </h4>
                                                <h6>benefecaries covered</h6>
                                            </div>

                                            <div
                                                className="ctscirclenone cinfo9"></div>
                                        </div>

                                    </div>
                                </div>

                                <div className="tab-block" id="tab-block">

                                    <ul className="tab-mnu">
                                        <li className="active">Functional
                                            Districts</li>
                                        <li>Non - functional districts</li>

                                    </ul>

                                    <div className="tab-cont">
                                        <div className="tab-pane">
                                            <div className="tabTable">

                                                <div className="table-wrapper">

                                                    <div className="table-header">
                                                        <h3>Functional
                                                            Districts</h3>

                                                        <div
                                                            className="table-actions">
                                                            <div
                                                                className="export-btn">
                                                                <img
                                                                    src="/export-icon.png"
                                                                    alt="export" />
                                                                Export Districts
                                                            </div>
                                                            <div
                                                                className="search-btn">
                                                                search here
                                                                <img
                                                                    src="/search-icon.png"
                                                                    alt="search" />
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <table className="fl-table">
                                                        <thead>
                                                            <tr>

                                                                <th>Sl No</th>
                                                                <th>District</th>
                                                                <th>Type</th>
                                                                <th>Institute</th>
                                                                <th>Scans</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    1</td>
                                                                <td>Content
                                                                    1</td>
                                                                <td>Content
                                                                    1</td>
                                                                <td>Content
                                                                    1</td>
                                                                <td>Content
                                                                    1</td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    2</td>
                                                                <td>Content
                                                                    2</td>
                                                                <td>Content
                                                                    2</td>
                                                                <td>Content
                                                                    2</td>
                                                                <td>Content
                                                                    2</td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    3</td>
                                                                <td>Content
                                                                    3</td>
                                                                <td>Content
                                                                    3</td>
                                                                <td>Content
                                                                    3</td>
                                                                <td>Content
                                                                    3</td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    4</td>
                                                                <td>Content
                                                                    4</td>
                                                                <td>Content
                                                                    4</td>
                                                                <td>Content
                                                                    4</td>
                                                                <td>Content
                                                                    4</td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    5</td>
                                                                <td>Content
                                                                    5</td>
                                                                <td>Content
                                                                    5</td>
                                                                <td>Content
                                                                    5</td>
                                                                <td>Content
                                                                    5</td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    6</td>
                                                                <td>Content
                                                                    6</td>
                                                                <td>Content
                                                                    6</td>
                                                                <td>Content
                                                                    6</td>
                                                                <td>Content
                                                                    6</td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    7</td>
                                                                <td>Content
                                                                    7</td>
                                                                <td>Content
                                                                    7</td>
                                                                <td>Content
                                                                    7</td>
                                                                <td>Content
                                                                    7</td>
                                                            </tr>

                                                        </tbody>

                                                            </table>
                                                            <div
                                                                className="pagination">
                                                                <a href="#"
                                                                    className="arrow-pag">&#8249;</a>
                                                                <a
                                                                    href="#">1</a>
                                                                <a
                                                                    href="#">2</a>
                                                                <a
                                                                    href="#">3</a>
                                                                <a
                                                                    href="#">4</a>
                                                                <a
                                                                    href="#">5</a>
                                                                <a
                                                                    href="#">6</a>
                                                                <a
                                                                    href="#">7</a>
                                                                <span
                                                                    className="gap">
                                                                    … </span>
                                                                <a
                                                                    href="#">40</a>
                                                                <a href="#"
                                                                    className="arrow-pag">&#8250;</a>
                                                            </div>
                                                        </div>

                                                    </div>

                                                </div>

                                                <div className="tab-pane">
                                                    <p>Lorem
                                                        ipsum
                                                        dolor sit amet,
                                                        consectetur
                                                        adipisicing elit. Unde,
                                                        sit,
                                                        velit mollitia pariatur
                                                        laudantium officia,
                                                        fugit neque
                                                        eligendi saepe sint ea!
                                                        Debitis
                                                        aperiam nulla voluptatem
                                                        libero
                                                        fuga a, veniam
                                                        amet.</p>
                                                </div>

                                            </div>

                                        </div>

                                        <div className="districtsr-wrapper">
                                            <div className="tabTable">
                                                <div className="table-header">
                                                    <h3>District wise scan
                                                        count</h3>
                                                </div>
                                                <div className="districtsr-report">
                                                    <img
                                                        src="/districtscrt.jpg"
                                                        alt="export" />
                                                </div>
                                            </div>

                                            <div className="table-buttons">

                                                <div className="blue-btn">Detailed
                                                    Reports</div>
                                                <div className="blue-btn">Scanned
                                                    Reports </div>
                                                <div className="blue-btn">CT Down
                                                    time </div>
                                                <div className="blue-btn">RISPACS
                                                </div>

                                            </div>

                                        </div>

                                    </div>
                                    <div id="summary"
                                        className="tab-content summary_tab">

                                        <div className="tab-content-wrapper ">
                                            <div className="tab-wrapper flex">
                                                <div className="tab-summary">
                                                    <ul>
                                                        <li rel="summary1"><a
                                                                href="javascript:void(0);">
                                                                <span>Patients
                                                                    scanned</span>
                                                                    <em className="ps1"
                                                                    ><Counter/></em>                                                                    
                                                            </a></li>
                                                        <li rel="summary2"><a
                                                                href="javascript:void(0);">
                                                                <span>Patients
                                                                    scanned</span>
                                                                    <em className="ps2"
                                                                    ><Counter/></em>
                                                            </a></li>
                                                        <li rel="summary3"><a
                                                                href="javascript:void(0);">
                                                                <span>Patients
                                                                    scanned</span>
                                                                    <em className="ps3"
                                                                   ><Counter/></em>
                                                            </a></li>
                                                        <li rel="summary4"><a
                                                                href="javascript:void(0);">
                                                                <span>Patients
                                                                    scanned</span>
                                                                    <em className="ps4"
                                                                   ><Counter/></em>
                                                            </a></li>
                                                        <li rel="summary5"><a
                                                                href="javascript:void(0);">
                                                                <span>Patients
                                                                    scanned</span>
                                                                    <em className="ps5"
                                                                    ><Counter/></em>
                                                            </a></li>
                                                    </ul>
                                                </div>
                                                <div className="tab-details">
                                                    <div id="summary1"
                                                        className="tab-scontent">
                                                        chart 1
                                                    </div>

                                                    <div id="summary2"
                                                        className="tab-scontent">
                                                        chart 22
                                                    </div>

                                                    <div id="summary3"
                                                        className="tab-scontent">
                                                        chart 333
                                                    </div>
                                                    <div id="summary4"
                                                        className="tab-scontent">
                                                        chart 4444
                                                    </div>

                                                    <div id="summary5"
                                                        className="tab-scontent">
                                                        chart 55555
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="summary_info">

                                            <div className="s_info">
                                                <h2>166
                                                    <span>Scans Today</span>
                                                </h2>
                                            </div>

                                            <div className="s_info">
                                                <h2>Deoria
                                                    <span>Highest
                                                        District</span>
                                                </h2>
                                            </div>

                                            <div className="s_info">
                                                <h2>Banda
                                                    <span>Lowest District</span>
                                                </h2>
                                            </div>

                                        </div>

                                    </div>

                                    <div id="facility_status"
                                        className="tab-content">

                                        <div className="tab-content-wrapper ">
                                            <div className="tab-wrapper flex">
                                                <div className="tab-facility">
                                                    <ul>
                                                        <li rel="category1"><a
                                                                href="javascript:void(0);">
                                                                Category
                                                                1
                                                            </a></li>
                                                        <li rel="category2"><a
                                                                href="javascript:void(0);">Category
                                                                2</a></li>
                                                        <li rel="category3"><a
                                                                href="javascript:void(0);">
                                                                Category
                                                                3</a></li>
                                                    </ul>
                                                </div>
                                                <div className="tab-details">
                                                    <div id="category1"
                                                        className="tab-fcontent">
                                                        <div className="tabTable">

                                                            <div
                                                                className="table-wrapper">

                                                                <div
                                                                    className="table-header">
                                                                    <h4>Investment/
                                                                        Operations/
                                                                        Maintenance
                                                                        <span>
                                                                            Provide
                                                                            with
                                                                            CT
                                                                            Scans
                                                                            Machines
                                                                            by
                                                                            HLL
                                                                            Lifecare
                                                                            Limited
                                                                        </span>
                                                                        <span>
                                                                            Category
                                                                            1
                                                                        </span>
                                                                    </h4>

                                                                </div>
                                                                <table
                                                                    className="fl-table">
                                                                    <thead>
                                                                        <tr>

                                                                            <th>Sl
                                                                                No</th>
                                                                            <th>District</th>
                                                                            <th>Type</th>
                                                                            <th>Institute</th>
                                                                            <th>Scans</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>

                                                                        <tr>
                                                                            <td>
                                                                                2</td>
                                                                            <td>Content
                                                                                2</td>
                                                                            <td>Content
                                                                                2</td>
                                                                            <td>Content
                                                                                2</td>
                                                                            <td>Content
                                                                                2</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                3</td>
                                                                            <td>Content
                                                                                3</td>
                                                                            <td>Content
                                                                                3</td>
                                                                            <td>Content
                                                                                3</td>
                                                                            <td>Content
                                                                                3</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                4</td>
                                                                            <td>Content
                                                                                4</td>
                                                                            <td>Content
                                                                                4</td>
                                                                            <td>Content
                                                                                4</td>
                                                                            <td>Content
                                                                                4</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                5</td>
                                                                            <td>Content
                                                                                5</td>
                                                                            <td>Content
                                                                                5</td>
                                                                            <td>Content
                                                                                5</td>
                                                                            <td>Content
                                                                                5</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                6</td>
                                                                            <td>Content
                                                                                6</td>
                                                                            <td>Content
                                                                                6</td>
                                                                            <td>Content
                                                                                6</td>
                                                                            <td>Content
                                                                                6</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                7</td>
                                                                            <td>Content
                                                                                7</td>
                                                                            <td>Content
                                                                                7</td>
                                                                            <td>Content
                                                                                7</td>
                                                                            <td>Content
                                                                                7</td>
                                                                        </tr>

                                                                    </tbody>

                                                                        </table>

                                                                    </div>

                                                                </div>
                                                            </div>

                                                            <div id="category2"
                                                                className="tab-fcontent">
                                                                <div
                                                                    className="tabTable">

                                                                    <div
                                                                        className="table-wrapper">

                                                                        <div
                                                                            className="table-header">
                                                                            <h4>category
                                                                                2
                                                                            </h4>

                                                                        </div>
                                                                        <table
                                                                            className="fl-table">
                                                                            <thead>
                                                                                <tr>

                                                                                    <th>Sl
                                                                                        No</th>
                                                                                    <th>District</th>
                                                                                    <th>Type</th>
                                                                                    <th>Institute</th>
                                                                                    <th>Scans</th>
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody>

                                                                                <tr>
                                                                                    <td>
                                                                                        2</td>
                                                                                    <td>Content
                                                                                        2</td>
                                                                                    <td>Content
                                                                                        2</td>
                                                                                    <td>Content
                                                                                        2</td>
                                                                                    <td>Content
                                                                                        2</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>
                                                                                        3</td>
                                                                                    <td>Content
                                                                                        3</td>
                                                                                    <td>Content
                                                                                        3</td>
                                                                                    <td>Content
                                                                                        3</td>
                                                                                    <td>Content
                                                                                        3</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>
                                                                                        4</td>
                                                                                    <td>Content
                                                                                        4</td>
                                                                                    <td>Content
                                                                                        4</td>
                                                                                    <td>Content
                                                                                        4</td>
                                                                                    <td>Content
                                                                                        4</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>
                                                                                        5</td>
                                                                                    <td>Content
                                                                                        5</td>
                                                                                    <td>Content
                                                                                        5</td>
                                                                                    <td>Content
                                                                                        5</td>
                                                                                    <td>Content
                                                                                        5</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>
                                                                                        6</td>
                                                                                    <td>Content
                                                                                        6</td>
                                                                                    <td>Content
                                                                                        6</td>
                                                                                    <td>Content
                                                                                        6</td>
                                                                                    <td>Content
                                                                                        6</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>
                                                                                        7</td>
                                                                                    <td>Content
                                                                                        7</td>
                                                                                    <td>Content
                                                                                        7</td>
                                                                                    <td>Content
                                                                                        7</td>
                                                                                    <td>Content
                                                                                        7</td>
                                                                                </tr>

                                                                                </tbody>

                                                                                </table>

                                                                            </div>

                                                                        </div>
                                                                    </div>

                                                                    <div
                                                                        id="category3"
                                                                        className="tab-fcontent">
                                                                        <div
                                                                            className="tabTable">

                                                                            <div
                                                                                className="table-wrapper">

                                                                                <div
                                                                                    className="table-header">
                                                                                    <h4>category
                                                                                        3
                                                                                    </h4>

                                                                                </div>
                                                                                <table
                                                                                    className="fl-table">
                                                                                    <thead>
                                                                                        <tr>

                                                                                            <th>Sl
                                                                                                No</th>
                                                                                            <th>District</th>
                                                                                            <th>Type</th>
                                                                                            <th>Institute</th>
                                                                                            <th>Scans</th>
                                                                                        </tr>
                                                                                    </thead>
                                                                                    <tbody>

                                                                                        <tr>
                                                                                            <td>
                                                                                                2</td>
                                                                                            <td>Content
                                                                                                2</td>
                                                                                            <td>Content
                                                                                                2</td>
                                                                                            <td>Content
                                                                                                2</td>
                                                                                            <td>Content
                                                                                                2</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>
                                                                                                3</td>
                                                                                            <td>Content
                                                                                                3</td>
                                                                                            <td>Content
                                                                                                3</td>
                                                                                            <td>Content
                                                                                                3</td>
                                                                                            <td>Content
                                                                                                3</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>
                                                                                                4</td>
                                                                                            <td>Content
                                                                                                4</td>
                                                                                            <td>Content
                                                                                                4</td>
                                                                                            <td>Content
                                                                                                4</td>
                                                                                            <td>Content
                                                                                                4</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>
                                                                                                5</td>
                                                                                            <td>Content
                                                                                                5</td>
                                                                                            <td>Content
                                                                                                5</td>
                                                                                            <td>Content
                                                                                                5</td>
                                                                                            <td>Content
                                                                                                5</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>
                                                                                                6</td>
                                                                                            <td>Content
                                                                                                6</td>
                                                                                            <td>Content
                                                                                                6</td>
                                                                                            <td>Content
                                                                                                6</td>
                                                                                            <td>Content
                                                                                                6</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>
                                                                                                7</td>
                                                                                            <td>Content
                                                                                                7</td>
                                                                                            <td>Content
                                                                                                7</td>
                                                                                            <td>Content
                                                                                                7</td>
                                                                                            <td>Content
                                                                                                7</td>
                                                                                        </tr>

                                                                                    </tbody>

                                                                                        </table>

                                                                                    </div>

                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
</div>
  );
}

export default Middle
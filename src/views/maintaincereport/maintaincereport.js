/*!

=========================================================
* Now UI Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// bootstrap components
import 'bootstrap/dist/css/bootstrap.min.css';
// core components
import { Navbar, Nav, NavDropdown, Form,  FormControl, Button, Table} from 'react-bootstrap';
// drone image
import Drone from "assets/img/drone.png";
//  ChevronRightIcon
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
const nav = {
  margin: "5px",
  fontWeight: "300"
};
const drone = {
  background: "red",
  width: "30px",
  height: "30px"
};
const dronehead = {
  margin : "auto",
  width : "200px",
  height : "200px"

};
class Dashboard extends React.Component {
  render() {
    return (

      <div className="App" style = {{color:"black", margin: "0px"}}>
      <div class="container">
<div class="row">
  <div class="col-sm">
  <p style={nav}><img  src={Drone} style= {drone}/> Aircraft Down </p>

  </div>
  <div class="col-sm">
  <p style={nav}><img  src={Drone} style= {drone}/> Inception Due </p>
  </div>
  <div class="col-sm">
  <p style={nav}><img  src={Drone} style= {drone}/> Aircraft Up </p>
  </div>
</div>
</div>



      <header>

        <Navbar expand="lg" variant="dark" bg="dark">
          <Navbar.Brand href="#home">Ecosystem 1</Navbar.Brand>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">

              </Nav>
              <Form inline>
                <ChevronRightIcon style={{color:"white"}}></ChevronRightIcon>
              </Form>
          </Navbar.Collapse>


        </Navbar>
      </header>
      <div className="container" style={{margin: "0px"}}>
        <div className="row mt-5">
            <div className="col-lg-3 mb-3 grid-margin">
              <div className="card h-100">
                  <img  src={Drone} style= {dronehead}/>
                  <p style={{fontWeight: "500", fontSize: "20px", textAlign:"center",margin: "0px", padding: "0" }}>Aircraft #1</p>
                  <div className="card-body">
                    <p className="card-text" style={{fontWeight: "400", margin: "0", padding: "0" }}>Last Flown 6/17/17</p>
                    <p className="card-text" style={{fontWeight: "400" , margin: "0", padding: "0"}}>Inseption Type #1</p>
                    <p className="card-text" style={{fontWeight: "300" , margin: "0", padding: "0" ,fontSize: "15px"}}>0 Fligh Remaining</p>
                    <div style= {{background: "#f4eeff",height: "20px", width: "240"}}>
                      <div style= {{background: "red",height: "18px", width: "170px"}}>
                      </div>
                    </div>
                    <p className="card-text" style={{fontWeight: "300" , margin: "0", padding: "0" ,fontSize: "15px"}}>31.6 Time Remaning</p>
                    <div style= {{background: "#f4eeff",height: "20px", width: "240"}}>
                      <div style= {{background: "green",height: "18px", width: "80px"}}>
                      </div>
                    </div>
                    <p className="card-text" style={{fontWeight: "300" , margin: "0", padding: "0" ,fontSize: "15px"}}>45 Days Remaining</p>
                    <div style= {{background: "#f4eeff",height: "20px", width: "240"}}>
                      <div style= {{background: "green",height: "18px", width: "120px"}}>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            <div className="col-lg-3 mb-3 grid-margin">
              <div className="card h-100">
                  <img  src={Drone} style= {dronehead}/>
                  <p style={{fontWeight: "500", fontSize: "20px", textAlign:"center",margin: "0px", padding: "0" }}>Aircraft #1</p>
                  <div className="card-body">
                    <p className="card-text" style={{fontWeight: "400", margin: "0", padding: "0" }}>Last Flown 6/17/17</p>
                    <p className="card-text" style={{fontWeight: "400" , margin: "0", padding: "0"}}>Inseption Type #1</p>
                    <p className="card-text" style={{fontWeight: "300" , margin: "0", padding: "0" ,fontSize: "15px"}}>0 Fligh Remaining</p>
                    <div style= {{background: "#f4eeff",height: "20px", width: "240"}}>
                      <div style= {{background: "red",height: "18px", width: "0px"}}>
                      </div>
                    </div>
                    <p className="card-text" style={{fontWeight: "300" , margin: "0", padding: "0" ,fontSize: "15px"}}>31.6 Time Remaning</p>
                    <div style= {{background: "#f4eeff",height: "20px", width: "240"}}>
                      <div style= {{background: "green",height: "18px", width: "0px"}}>
                      </div>
                    </div>
                    <p className="card-text" style={{fontWeight: "300" , margin: "0", padding: "0" ,fontSize: "15px"}}>45 Days Remaining</p>
                    <div style= {{background: "#f4eeff",height: "20px", width: "240"}}>
                      <div style= {{background: "green",height: "18px", width: "120px"}}>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            <div className="col-lg-3 mb-3 grid-margin">
              <div className="card h-100">
                  <img  src={Drone} style= {dronehead}/>
                  <p style={{fontWeight: "500", fontSize: "20px", textAlign:"center",margin: "0px", padding: "0" }}>Aircraft #1</p>
                  <div className="card-body">
                    <p className="card-text" style={{fontWeight: "400", margin: "0", padding: "0" }}>Last Flown 6/17/17</p>
                    <p className="card-text" style={{fontWeight: "400" , margin: "0", padding: "0"}}>Inseption Type #1</p>
                    <p className="card-text" style={{fontWeight: "300" , margin: "0", padding: "0" ,fontSize: "15px"}}>0 Fligh Remaining</p>
                    <div style= {{background: "#f4eeff",height: "20px", width: "240"}}>
                      <div style= {{background: "red",height: "18px", width: "0px"}}>
                      </div>
                    </div>
                    <p className="card-text" style={{fontWeight: "300" , margin: "0", padding: "0" ,fontSize: "15px"}}>31.6 Time Remaning</p>
                    <div style= {{background: "#f4eeff",height: "20px", width: "240"}}>
                      <div style= {{background: "green",height: "18px", width: "0px"}}>
                      </div>
                    </div>
                    <p className="card-text" style={{fontWeight: "300" , margin: "0", padding: "0" ,fontSize: "15px"}}>45 Days Remaining</p>
                    <div style= {{background: "#f4eeff",height: "20px", width: "240"}}>
                      <div style= {{background: "green",height: "18px", width: "120px"}}>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            <div className="col-lg-3 mb-3 grid-margin">
              <div className="card h-100">
                  <img  src={Drone} style= {dronehead}/>
                  <p style={{fontWeight: "500", fontSize: "20px", textAlign:"center",margin: "0px", padding: "0" }}>Aircraft #1</p>
                  <div className="card-body">
                    <p className="card-text" style={{fontWeight: "400", margin: "0", padding: "0" }}>Last Flown 6/17/17</p>
                    <p className="card-text" style={{fontWeight: "400" , margin: "0", padding: "0"}}>Inseption Type #1</p>
                    <p className="card-text" style={{fontWeight: "300" , margin: "0", padding: "0" ,fontSize: "15px"}}>0 Fligh Remaining</p>
                    <div style= {{background: "#f4eeff",height: "20px", width: "240"}}>
                      <div style= {{background: "red",height: "18px", width: "170px"}}>
                      </div>
                    </div>
                    <p className="card-text" style={{fontWeight: "300" , margin: "0", padding: "0" ,fontSize: "15px"}}>31.6 Time Remaning</p>
                    <div style= {{background: "#f4eeff",height: "20px", width: "240"}}>
                      <div style= {{background: "green",height: "18px", width: "80px"}}>
                      </div>
                    </div>
                    <p className="card-text" style={{fontWeight: "300" , margin: "0", padding: "0" ,fontSize: "15px"}}>45 Days Remaining</p>
                    <div style= {{background: "#f4eeff",height: "20px", width: "240"}}>
                      <div style= {{background: "green",height: "18px", width: "120px"}}>
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
}

export default Dashboard;

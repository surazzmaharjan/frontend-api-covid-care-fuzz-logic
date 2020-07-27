import { Nav, Navbar, NavDropdown ,
  //  DropdownButton ,Dropdown
  } from "react-bootstrap";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
import "../../allchart.scss";
import logo from "../images/logo.png";


import AuthService from "../../services/auth.service";


class BurgerNavigation extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN")
      });
    }



  }

  logOut() {
    AuthService.logout();
  }

  render() {
    const { currentUser, showAdminBoard } = this.state;

    return (
        <header>
                <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="/">
                        
                        <img src={logo} alt="burger-one" width="50" height="30" className="d-inline-block align-top" />
                        
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav">
                      <Nav className="mr-auto">

                      
                        {/* {showAdminBoard && (
                            <li className="nav-item">
                              <Link to={"/test-add-district"} className="nav-link">
                                Test Add District
                              </Link>
                            </li>
                          )} */}

                          {showAdminBoard && (
                             <Nav.Link href="/districts">Districts </Nav.Link>

                        )} 


                        {showAdminBoard && (
                            
                        <Nav.Link href="/hospitals">Hospitals </Nav.Link>

                        )} 

                        {showAdminBoard && (
                        <Nav.Link href="/helpline">Helpline </Nav.Link>

                        )} 

                        {showAdminBoard && (
                        <Nav.Link href="/faq">FAQ </Nav.Link>
                        )} 

                        {showAdminBoard && (
                        <Nav.Link href="/safety">Safety Measures </Nav.Link>
                        )} 

                      {showAdminBoard && (
                        <Nav.Link href="/suspect">Suspect </Nav.Link>
                        )} 

                      {showAdminBoard && (
                        <Nav.Link href="/donation">Donation </Nav.Link>
                        )} 

                      {showAdminBoard && (
                        <Nav.Link href="/selfcheck">Self Check </Nav.Link>
                        )} 


                      {showAdminBoard && (

                        <NavDropdown title="Expenses" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="/expenses">Add Expenses</NavDropdown.Item>
                                 <NavDropdown.Divider />
                                <NavDropdown.Item href="/edit-expenses">
                                Edit Expenses
                                </NavDropdown.Item>
                            </NavDropdown>
                        )} 


                        <Nav.Link href="/newsfeed">News Feed </Nav.Link>


                        <Nav.Link href={"/charts"} >
                                    Charts
                        </Nav.Link>
                        {showAdminBoard ? "" :(
                        <Nav.Link href={"/list-of-hospitals"} >
                        Hospitals
                        </Nav.Link>
                        )}

                    {showAdminBoard ? "" :(
                       <Nav.Link href={"/safety-measures"} >
                            Safety Measures
                       </Nav.Link>
                        )} 
                      {showAdminBoard ? "" :(
                            
                            <NavDropdown style={{ display: showAdminBoard ? "none" : "" }} title="FAQ" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="/faqs">FAQ</NavDropdown.Item>
                                 <NavDropdown.Divider />
                                <NavDropdown.Item href="/faq-video">
                                      Video
                                </NavDropdown.Item>
                            </NavDropdown>
                             ) }
                    
                    

                      {currentUser && (
                            
                            <Nav.Link style={{ display: showAdminBoard ? "none" : "" }} href="/add-donation">
                              Donate                              
                            </Nav.Link >
                          ) }

                      {currentUser && (
                            
                            <Nav.Link style={{ display: showAdminBoard ? "none" : "" }} href="/view-expenses">
                              Expenses                              
                            </Nav.Link >
                          ) }

                      {currentUser && (
                            
                            <Nav.Link style={{ display: showAdminBoard ? "none" : "" }} href="/add-selfcheck">
                              Self Check                              
                            </Nav.Link >
                          ) }
                        
                     

                        {currentUser && (
                            
                        <NavDropdown style={{ display: showAdminBoard ? "none" : "" }} title={showAdminBoard ? "User Helpine":"Helpine"} id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/add-helpline">Add Helpline</NavDropdown.Item>
                             <NavDropdown.Divider />
                            <NavDropdown.Item href="/view-helpline">
                                  View Helpline
                            </NavDropdown.Item>
                        </NavDropdown>
                         ) }


                        {currentUser && (
                            
                            <NavDropdown style={{ display: showAdminBoard ? "none" : "" }} title={showAdminBoard ? "User Suspect":"Suspect"} id="collasible-nav-dropdown">
                                <NavDropdown.Item href="/add-suspect">Add Suspect</NavDropdown.Item>
                                 <NavDropdown.Divider />
                                <NavDropdown.Item href="/view-suspect">
                                View Suspect
                                </NavDropdown.Item>
                            </NavDropdown>
                             ) }



                        </Nav>

                        {currentUser ? (
                           <Nav>
                           {/* <Nav.Link href="/profile"> {currentUser.username}</Nav.Link>
                           <Nav.Link  href="/login" onClick={this.logOut}>
                               Log out
                           </Nav.Link> */}

                      {/* <DropdownButton
                        alignRight
                        title={currentUser.username}
                        id="dropdown-menu-align-right"
                        className="dropdown-buttoncolor"
                      >
                        <Dropdown.Item href="/profile">Profile</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="/login" onClick={this.logOut}>Logout</Dropdown.Item>
                      </DropdownButton> */}

                      <div className="btn-group dropleft">
                        <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {currentUser.username}
                        </button>
                        <div className="dropdown-menu">
                        <a className="dropdown-item"href="/profile">Profile</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="/login" onClick={this.logOut}>Logout</a>
                        </div>
                      </div>

                           {/* <NavDropdown title={currentUser.username} id="collasible-nav-dropdown">
                                <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                                 <NavDropdown.Divider />
                                <NavDropdown.Item href="/login" onClick={this.logOut}>
                                Logout
                                </NavDropdown.Item>
                            </NavDropdown> */}

                           </Nav>



                        ) : (
                            <Nav>
                            <Nav.Link href="/login"> Login</Nav.Link>
                            <Nav.Link  href="/register">
                            Sign Up
                            </Nav.Link>
                            </Nav>

                          
                        )}
                       
                    </Navbar.Collapse>
                    </Navbar>
                  
              </header>

          
    );
  }
}

export default BurgerNavigation;

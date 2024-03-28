import React from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar
        expand="lg"
        className="bg-white fixed-top "
        style={{
          boxShadow:
            "0 1px 6px 0 rgba(0, 0, 0, 0.1), 0 2px 10px 0 rgba(0, 0, 0, 0.15)",
        }}
      >
        <Container>
		<Image src="./Images/ELT-logo1.jpg" style={{ width: "10rem" }} />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="mx-5">
            <Nav className="ms-auto my-2 my-lg-0">
              <Nav.Link
                as={NavLink}
                activeClassName="active"
                to="/"
                className="fs-5 fw-medium mx-2 animate"
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                activeClassName="active"
                to="/about"
                className="fs-5 fw-medium mx-2"
              >
                About
              </Nav.Link>
              <NavDropdown title="Products" as={NavLink}   to="/products" id="basic-nav-dropdown" className="fs-5 fw-medium mx-2 text-decoration-none"><span className=" fs-4 card text-center">Our Products</span>
			  
               
				<NavDropdown.Item
				as={NavLink}
                  activeClassName="active"
                  to="/flmm"
                  className=" fw-medium bg-light text-black"
                >
                  Fiber Laser Marking Machine
                </NavDropdown.Item>
                <NavDropdown.Item
				as={NavLink}
                  activeClassName="active"
                  to="/flcm"
                  className=" fw-medium bg-white text-black"
                >
                  Fiber Laser Cutting Machine
                </NavDropdown.Item>

                <NavDropdown.Item
                  as={NavLink}
                  activeClassName="active"
                  to="/flwm"
                  className=" fw-medium bg-light text-black"
                >
                  Fiber Laser Welding Machine
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={NavLink}
                  activeClassName="active"
                  to="/olmm"
                  className="fw-medium bg-white text-black"
                >
                  Online Laser Marking Machine
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={NavLink}
                  activeClassName="active"
                  to="/co2lcem"
                  className="fw-medium bg-light text-black"
                >
                  Co2 Laser Cutting & Engraving Machine
                </NavDropdown.Item>

				<NavDropdown.Item
				as={NavLink}
				activeClassName="active"
				to="/co2lem"
				className="fw-medium bg-light text-black"
			  >
				Co2 Laser Engraving Machine
			  </NavDropdown.Item>

                <NavDropdown.Item
                  as={NavLink}
                  activeClassName="active"
                  to="/uvlmm"
                  className="fw-medium bg-white text-black"
                >
				UV Laser Marking Machine
                </NavDropdown.Item>

				
                <NavDropdown.Item
                  as={NavLink}
                  activeClassName="active"
                  to="/gtm"
                  className="fw-medium bg-light text-black"
                >
				Gold Testing Machine
                </NavDropdown.Item>

				
                <NavDropdown.Item
                  as={NavLink}
                  activeClassName="active"
                  to="/jcm"
                  className="fw-medium bg-white text-black"
                >
				Jewellery Cutting Machine
                </NavDropdown.Item>

				
                <NavDropdown.Item
                  as={NavLink}
                  activeClassName="active"
                  to="/jsm"
                  className="fw-medium bg-light text-black"
                >
				Jewellery Soldering Machine
                </NavDropdown.Item>

              </NavDropdown>

              <Nav.Link
                as={NavLink}
                activeClassName="active"
                to="/contact"
                className="fs-5 fw-medium mx-2"
              >
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
      <br />
      <br />
    </>
  );
};

export default Header;

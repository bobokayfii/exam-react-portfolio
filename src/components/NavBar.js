import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { TOKEN, USER } from "../const";
import { ROLE } from "../utils";
function NavBar() {
  const isAuthorized = localStorage.getItem(TOKEN) && ROLE !== "user";
  
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
 const logout = () => {
   localStorage.removeItem(TOKEN);
    localStorage.removeItem(USER);

   window.location.href = "/register";
 };
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Nav.Link as={Link} to="/" onClick={() => handleLinkClick("/")}>
          <img src={logo} alt="Logo" />
        </Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              as={Link}
              to="/"
              className={
                activeLink === "/" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => handleLinkClick("/")}
            >
              Home
            </Nav.Link>
            
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="#">
                <img src={navIcon1} alt=""></img>
              </a>
              <a href="#">
                <img src={navIcon2} alt=""></img>
              </a>
              <a href="https://www.instagram.com/bobow_06/">
                <img src={navIcon3} alt=""></img>
              </a>
            </div>
            {isAuthorized ? (
              <>
              <Link onClick={logout} className="nav-link">
                <span className="loginbtn">Log Out</span>
              </Link>
              <Link to="/dashboard" className="nav-link">
                  <span className="loginbtn">Dashboard</span>
                </Link>
              </>
            ) : (
              <>
                <Link to="/register" className="nav-link">
                  <span className="loginbtn">Register</span>
                </Link>
                <Link to="/login" className="nav-link">
                  <span className="registerbtn">Login</span>
                </Link>
              </>
            )}
            
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

import { useEffect, useState } from "react";
import { NavBar, Container, Nav } from "react-bootstrap";
import logo from '../assets/img/Logo.svg';
import logoInstagram from '../assets/img/instagram.png';
import logoTwitter from '../assets/img/signo-de-twitter.png';

export const NavBar = () =>{
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, seScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.screenY > 50) {
                seScrolled(true);
            } else{
                seScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return(
        <Navbar expand = "lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand hrf="#home">
                    <img src={logo} alt="Logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className ="me-auto">
                        <Nav.Link href="#home" className ={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.link href="#projects" className ={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>projects</Nav.link>
                        <NavDropDown title="Dropdown" id="basic-nav-dopdown">
                            <NavDropDown.Item href="#action/3.1">Action</NavDropDown.Item>
                            <NavDropDown.Item href="#action/3.2">Another action</NavDropDown.Item>
                            <NavDropDown.Item href="#action/3.3">Something</NavDropDown.Item>
                            <NavDropDown.Divider />
                            <NavDropDown.Item href="#action/3.4">Separated Links</NavDropDown.Item>
                        </NavDropDown>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icons">
                            <a href="#"> <img src={logoInstagram} alt="LogoInstagram" /> </a>
                            <a href="#"> <img src={logoTwitter} alt="LogoTwitter" /> </a>
                            <a href="#"> <img src={logoInstagram} alt="LogoInstagram" /> </a>
                        </div>
                        <button className="btnConnect" onClick={() => console.log('Connect')}><span>Let's Connect</span></button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    ) 
}
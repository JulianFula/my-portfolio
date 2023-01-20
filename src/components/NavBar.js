import { NavBar, Container } from "react-bootstrap";

export const NavBar = () =>{
    return(
        <NavBar bg = "ligth" expand = "lg">
            <container>
                <NavBar.Brand hrf="#home">React-Bootstrap</NavBar.Brand>
                <NavBar.Toggle aria-controls="basic-navbar-nav" />
                <NavBar.Collapse id="basic-navbar-nav">
                    
                </NavBar.Collapse>
            </container>
        </NavBar>
    ) 
}
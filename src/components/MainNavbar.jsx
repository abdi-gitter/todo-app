import { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const pages = [
  { title: 'Home', link: '/', display: true },
  { title: 'About', link: '/', display: true },
  { title: 'Login', link: '/', display: true },
  { title: 'Register', link: '/', display: true },
  { title: 'Logout', link: '/', display: false },
];

const MainNavbar = () => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);
  return (
    <div className="bg-secondary">
      <Navbar color="faded" className="container" light expand="md">
        <NavbarBrand className="me-auto fs-3 text text-white ">
          ToDo App
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-2 bg-white " />
        <Collapse isOpen={!collapsed} navbar>
          {pages
            .filter((item) => item.display)
            .map((item, index) => (
              <Nav key={index} className="ml-auto">
                <NavItem>
                  <NavLink className="text-white">{item.title}</NavLink>
                </NavItem>
              </Nav>
            ))}
        </Collapse>
      </Navbar>
    </div>
  );
};

export default MainNavbar;

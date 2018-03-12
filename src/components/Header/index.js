import React from 'react'
import Link from 'gatsby-link'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap'

const Header = () => (
  <div
    style={{
      borderBottom: '1px solid #ddd',
      boxShadow: '0 .25rem .75rem rgba(0, 0, 0, .05)',
    }}
  >
    <Navbar light>
      <Link to="/">
        <NavbarBrand>Rubberduck</NavbarBrand>
      </Link>

      <Nav className="ml-auto" navbar>
        <NavItem>
          <Link to="/page-2/">Components</Link>
        </NavItem>
      </Nav>
    </Navbar>
  </div>
)

export default Header

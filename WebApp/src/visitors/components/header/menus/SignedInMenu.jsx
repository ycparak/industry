import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import FontAwesome from 'react-fontawesome';

const SignedInMenu = ({user}) => {
  return (
    <Nav className="ml-auto" navbar>
      <NavItem>
        {user && <NavLink className="navlinkitem" href={`/${user.userType}`}>My Dashboard <FontAwesome name="long-arrow-right"></FontAwesome></NavLink>}
      </NavItem>
    </Nav>
  )
}

export default SignedInMenu
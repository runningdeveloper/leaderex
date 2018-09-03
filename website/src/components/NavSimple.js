
/* global tw */
import React from "react"
import styled from 'react-emotion';
import { Link } from 'gatsby'


const NavLink = styled(Link)`
  ${tw('mr-2 text-center block border border-blue rounded py-2 px-4 bg-blue hover:bg-blue-dark text-white no-underline')};
`;

const Navigation = styled('nav')`
  ${tw('flex my-2')};
`;

export default () =>
<Navigation>
  <NavLink to={'/'}>Home</NavLink>
  <NavLink to={'/about/'}>About</NavLink>
</Navigation>
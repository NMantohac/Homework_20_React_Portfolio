import React from 'react';
import PropTypes from 'prop-types';
import NavbarDesktop from '../../containers/NavbarDesktop';
import NavbarMobile from '../../containers/NavbarMobile';

const Navbar = () => {
  const NavbarResponsive = ({ children }) => {
    return (
      <div>
        <NavbarDesktop>{children}</NavbarDesktop>
        <NavbarMobile>{children}</NavbarMobile>
      </div>
    );
  };

  NavbarResponsive.propTypes = {
    children: PropTypes.node,
  };

  return (
    <NavbarResponsive />
  );
};

export default Navbar;

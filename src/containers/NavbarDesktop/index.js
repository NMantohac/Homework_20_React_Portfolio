import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import { Responsive, Menu, Segment, Header, Icon } from 'semantic-ui-react';

const getWidth = () => {
  const isSSR = typeof window === 'undefined';
  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

class NavbarDesktop extends Component {
  render() {
    const { children } = this.props;
    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Menu
          fixed="top"
          inverted
          pointing
          size="huge"
          activeclassname="active"
          style={{ height: '11vh' }}
        >
          <Menu.Item as={Link} to="/" style={{ marginLeft: '1em' }}>
            <Segment style={{ background: 'gray' }}>
              <Header style={{ marginTop: '-3px', fontSize: '24px' }}>Norberto Mantohac Jr</Header>
            </Segment>
          </Menu.Item>
          <Menu.Item as={NavLink} to="/about" position="right" activeclassname="active" style={{ fontSize: '20px' }}>
            <Icon name="user circle" />
            About
          </Menu.Item>
          <Menu.Item as={NavLink} to="/portfolio" activeclassname="active" style={{ fontSize: '20px' }}>
            <Icon name="browser" />
            Portfolio
          </Menu.Item>
        </Menu>
        { children }
      </Responsive>
    );
  }
}

NavbarDesktop.propTypes = {
  children: PropTypes.node,
};

export default NavbarDesktop;

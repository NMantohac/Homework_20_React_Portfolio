import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import { Responsive, Sidebar, Menu, Segment, Header, Icon } from 'semantic-ui-react';

const getWidth = () => {
  const isSSR = typeof window === 'undefined';
  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

class NavbarMobile extends Component {
  state = {
    sidebarOpened: false,
  }

  handleSidebarHide = () => this.setState({ sidebarOpened: false });

  handleToggle = () => this.setState({ sidebarOpened: true });

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;
    return (
      <Responsive as={Sidebar.Pushable} getWidth={getWidth} maxWidth={Responsive.onlyMobile.maxWidth}>
        <Sidebar
          as={Menu}
          animation="overlay"
          direction="right"
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          <Menu.Item as={NavLink} to="/about" position="right" activeclassname="active" style={{ fontSize: '20px' }}>
            <Icon name="user circle" />
            About
          </Menu.Item>
          <Menu.Item as={NavLink} to="/portfolio" position="right" activeclassname="active" style={{ fontSize: '20px' }}>
            <Icon name="browser" />
            Portfolio
          </Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened} className="sidebar-pusher">
          <Menu
            inverted
            pointing
            size="huge"
            activeclassname="active"
            style={{ height: '11vh' }}
          >
            <Menu.Item as={Link} to="/" header>
              <Segment style={{ background: 'gray' }}>
                <Header style={{ marginTop: '-3px', fontSize: '24px' }}>Norberto Mantohac</Header>
              </Segment>
            </Menu.Item>
            <Menu.Item onClick={this.handleToggle} position="right">
              <Icon name="sidebar" />
            </Menu.Item>
          </Menu>
          {children}
        </Sidebar.Pusher>
      </Responsive>
    );
  }
}

NavbarMobile.propTypes = {
  children: PropTypes.node,
};

export default NavbarMobile;

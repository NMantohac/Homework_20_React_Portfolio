import React from 'react';
import { Segment, Container, Icon } from 'semantic-ui-react';

const Footer = () => {
  return (
    <Segment inverted vertical>
      <Container>
        <Segment textAlign="center" inverted style={{ background: '#37373b' }}>
          <Icon name="copyright outline" style={{ marginLeft: '3px' }} />
          Copyright 2020. All rights reserved.
        </Segment>
      </Container>
    </Segment>
  );
};

export default Footer;

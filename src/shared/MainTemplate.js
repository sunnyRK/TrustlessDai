import React from 'react';
import {
  Container, List, Header,
  Grid, Segment,
} from 'semantic-ui-react';

const MainTemplate = ({ children }) => (
  <div className="main-template">
    <div className="main-header">
      <div className="app-name">Instcrypt</div>
    </div>
    <div className="main-content">
      {children}
    </div>
    <div className="main-footer">
      <Segment inverted vertical className="app-footer">
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={4}>
                <Header inverted as="h4" content="About Us" />
                <List link inverted>
                  <List.Item as="a"><a href="https://www.linkedin.com/in/sunnyradadiya/" target="_blank">Sunny Radadiya</a></List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={4}>
                <Header inverted as="h4" content="Contact Us" />
                <List link inverted>
                  <List.Item as="a" href="mailto:radadiyasunny970@gmail.com">radadiyasunny970@gmail.com</List.Item>
                </List>
              </Grid.Column>

              <Grid.Column width={5}>
                <Header as="h4" inverted>
                  Location
                </Header>
                <p>
                  Bengaluru, India
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </div>
  </div>
);

export default MainTemplate;

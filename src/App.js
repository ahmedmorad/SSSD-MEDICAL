import React, { Component } from 'react';
import { Menu, Container, Button, Checkbox, Form, Header, Segment, Icon, Divider, Grid } from 'semantic-ui-react';
import logo from './logo.svg';
import './style.css';
import CheckupList from './containers/checkup-list';
import CheckupDetail from './containers/checkup-details';
import AppMenu from './components/menu';
import Signin from './components/auth/signin';
import Signup from './components/auth/signup';

class App extends Component {

  render() {
    return (
      <div className="App">
        
        <AppMenu></AppMenu>
        <Container>

          <Grid columns={2} stackable={true} divided>
            <Grid.Row>
              <Grid.Column>
                  <Signin/>
              </Grid.Column>
              <Grid.Column>
                <Signup/>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={4}>
                <CheckupList/>
              </Grid.Column>
              <Grid.Column  width={12}>
                <CheckupDetail/>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>

      </div>
    );
  }
}

export default App;

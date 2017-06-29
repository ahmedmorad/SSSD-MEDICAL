import React, { Component } from 'react';
import { Menu, Container, Button, Checkbox, Form, Header, Segment, Icon, Divider, Grid, Select } from 'semantic-ui-react';
import logo from './logo.svg';
import './style.css';
import CheckupList from './containers/checkup-list';
import CheckupDetail from './containers/checkup-details';
import AppMenu from './components/menu';
import Signin from './components/auth/signin';
import Signup from './components/auth/signup';

class App extends Component {

  state = {
    countryOptions: [{ key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' }, { key: 'eg', value: 'eg', flag: 'eg', text: 'Egypt' }]
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

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
              <Grid.Column width={16} stretched={true}>
                <Segment>
                  <Header as='h2'><Icon name='signup' size='large' /> Sign up</Header>
                  <Divider />
                  <Form>
                    <Form.Field>
                      <label>country</label>
                      <Select placeholder='Select your country' options={this.state.countryOptions} />
                    </Form.Field>
                  </Form>
                </Segment>
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

import React, { Component } from 'react';
import { Menu, Container, Button, Checkbox, Form, Header, Segment, Icon, Divider, Grid, Select, Table } from 'semantic-ui-react';
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
              <Grid.Column width={16}>
                <Segment>


                  <Table celled striped>
                    <Table.Header>
                      <Table.Row>
                        <Table.HeaderCell>Header</Table.HeaderCell>
                        <Table.HeaderCell>Header</Table.HeaderCell>
                        <Table.HeaderCell>Header</Table.HeaderCell>
                      </Table.Row>
                    </Table.Header>

                    <Table.Body>
                      <Table.Row>
                        <Table.Cell>Ahmed Morad
                        </Table.Cell>
                        <Table.Cell>Cell</Table.Cell>
                        <Table.Cell>Cell</Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell>Cell</Table.Cell>
                        <Table.Cell>Cell</Table.Cell>
                        <Table.Cell>Cell</Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell>Cell</Table.Cell>
                        <Table.Cell>Cell</Table.Cell>
                        <Table.Cell>Cell</Table.Cell>
                      </Table.Row>
                    </Table.Body>

                    <Table.Footer>
                      <Table.Row>
                        <Table.HeaderCell colSpan='3'>
                          <Menu floated='right' pagination>
                            <Menu.Item as='a' icon>
                              <Icon name='left chevron' />
                            </Menu.Item>
                            <Menu.Item as='a'>1</Menu.Item>
                            <Menu.Item as='a'>2</Menu.Item>
                            <Menu.Item as='a'>3</Menu.Item>
                            <Menu.Item as='a'>4</Menu.Item>
                            <Menu.Item as='a' icon>
                              <Icon name='right chevron' />
                            </Menu.Item>
                          </Menu>
                        </Table.HeaderCell>
                      </Table.Row>
                    </Table.Footer>
                  </Table>

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

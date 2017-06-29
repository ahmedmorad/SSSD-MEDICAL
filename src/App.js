import React, { Component } from 'react';
import { Menu, Container, Button, Checkbox, Form, Header, Segment, Icon, Divider, Grid, Select, Table } from 'semantic-ui-react';
import logo from './logo.svg';
import './style.css';
import CheckupList from './containers/checkup-list';
import CheckupDetail from './containers/checkup-details';
import AppMenu from './components/menu';

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

                <Segment>
                  <Header as='h2'><Icon name='sign in' size='large' /> Sign In</Header>
                  <Divider />
                  <Form>
                    <Form.Field>
                      <label>First Name</label>
                      <input placeholder='First Name' />
                    </Form.Field>
                    <Form.Field>
                      <label>Last Name</label>
                      <input placeholder='Last Name' />
                    </Form.Field>
                    <Form.Field>
                      <Checkbox label='Remember Me' />
                    </Form.Field>
                    <Divider />
                    <Button type='button' primary>Submit</Button>
                    <Button.Group>
                      <Button>Cancel</Button>
                      <Button.Or />
                      <Button positive>Save</Button>
                    </Button.Group>
                  </Form>
                </Segment>

              </Grid.Column>
              <Grid.Column>

                <Segment>
                  <Header as='h2'><Icon name='signup' size='large' /> Sign up</Header>
                  <Divider />
                  <Form>
                    <Form.Field>
                      <label>First Name</label>
                      <input placeholder='First Name' />
                    </Form.Field>
                    <Form.Field>
                      <label>Last Name</label>
                      <input placeholder='Last Name' />
                    </Form.Field>
                    <Form.Field>
                      <label>Last Name</label>
                      <input placeholder='Email' />
                    </Form.Field>
                    <Form.Field>
                      <Checkbox label='I agree to the Terms and Conditions' />
                    </Form.Field>
                    <Divider />
                    <Button type='button' primary>Submit</Button>
                    <Button
                      color='red'
                      content='Like'
                      labelPosition='left'
                      icon='heart'
                      label={{ basic: true, color: 'red', pointing: 'right', content: '2,048' }}
                    />

                  </Form>
                </Segment>

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

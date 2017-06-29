import React, {Component} from 'react';
import {Segment, Icon, Divider, Form, Button, Header, Checkbox} from 'semantic-ui-react';

class Signin extends Component {
    render() {
        return (
            <Segment>
                <Header as='h2'><Icon name='sign in' size='large'/>
                    Sign In</Header>
                <Divider/>
                <Form>
                    <Form.Field>
                        <label>Email</label>
                        <input placeholder='Email'/>
                    </Form.Field>
                    <Form.Field>
                        <label>Password</label>
                        <input placeholder='Password' type='email'/>
                    </Form.Field>
                    <Form.Field>
                        <Checkbox label='Remember Me'/>
                    </Form.Field>
                    <Divider/>
                    <Button type='button' primary>Submit</Button>
                    <Button.Group>
                        <Button>Cancel</Button>
                        <Button.Or/>
                        <Button positive>Save</Button>
                    </Button.Group>
                </Form>
            </Segment>
        );
    }
}

export default Signin;
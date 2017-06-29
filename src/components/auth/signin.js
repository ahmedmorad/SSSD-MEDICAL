import React, {Component} from 'react';
import {Segment, Icon, Divider, Form, Button} from 'semantic-ui-react';
class Signin extends Component {
    render() {
        return (
            <Segment>
                <Header as='h2'><Icon name='sign in' size='large'/>
                    Sign In</Header>
                <Divider/>
                <Form>
                    <Form.Field>
                        <label>First Name</label>
                        <input placeholder='First Name'/>
                    </Form.Field>
                    <Form.Field>
                        <label>Last Name</label>
                        <input placeholder='Last Name'/>
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
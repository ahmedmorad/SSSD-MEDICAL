import React, {Component} from 'react';
import {
    Segment,
    Select,
    Icon,
    Divider,
    Form,
    Button,
    Checkbox,
    Header
} from 'semantic-ui-react';
class Signup extends Component {

    state = {
        countryOptions: [
            {
                key: 'af',
                value: 'af',
                flag: 'af',
                text: 'Afghanistan'
            }, {
                key: 'eg',
                value: 'eg',
                flag: 'eg',
                text: 'Egypt'
            }
        ]
    };

    render() {
        return (
            <Segment>
                <Header as='h2'><Icon name='signup' size='large'/>
                    Sign up</Header>
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
                        <label>Last Name</label>
                        <input placeholder='Email'/>
                    </Form.Field>
                    <Form.Field>
                        <label>country</label>
                        <Select placeholder='Select your country' options={this.state.countryOptions}/>
                    </Form.Field>
                    <Form.Field>
                        <Checkbox label='I agree to the Terms and Conditions'/>
                    </Form.Field>
                    <Divider/>
                    <Button type='button' primary>Submit</Button>
                    <Button
                        color='red'
                        content='Like'
                        labelPosition='left'
                        icon='heart'
                        label={{
                        basic: true,
                        color: 'red',
                        pointing: 'right',
                        content: '2,048'
                    }}/>

                </Form>
            </Segment>
        );
    }
}

export default Signup;
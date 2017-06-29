import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Checkbox, Form, Header, Segment, Icon, Divider, Input } from 'semantic-ui-react';

class CheckupDetail extends Component {

  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onChecked = this.onChecked.bind(this);
  }
  onChange(e) {
    //this.props.checkup[e.target.name] = e.target.value;
  }


  onChecked(e) {
    //this.props.checkup[e.target.name] = e.target.checked;
  }

  render() {
    return (
      <Segment>
        <Header as='h2'><Icon name='sign in' size='large' /> Checkup Data</Header>
        <Divider />
        <Form>
          <Form.Field>
            <label>Name </label>
            <Input placeholder='Name' name="name" value={this.props.checkup.name} onChange={this.onChange} />
          </Form.Field>
          <Form.Field>
            <label>Company</label>
            <Input placeholder='Company' name="company" value={this.props.checkup.company} onChange={this.onChange} />
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <Input placeholder='Email' name="email" value={this.props.checkup.email} onChange={this.onChange} />
          </Form.Field>
          <Form.Field>
            <Checkbox label='Is Active ?' name="isActive" checked={this.props.checkup.isActive} onChange={this.onChange} />
          </Form.Field>
          <Divider />
          <Button type='button' primary>Submit</Button>
        </Form>
      </Segment>
    );

  }
}

function mapStateToProps(state) {

  return {
    checkup: state.activeCheckup
  };
}


export default connect(mapStateToProps)(CheckupDetail);
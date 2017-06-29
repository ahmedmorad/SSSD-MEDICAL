import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {
  Button,
  Checkbox,
  Form,
  Header,
  Segment,
  Icon,
  Divider,
  Input
} from 'semantic-ui-react';

import LazyLoad from 'react-lazy-load';

class Patient extends Component {

  constructor(props) {
    super(props);

    this.onChange = this
      .onChange
      .bind(this);
    this.onChecked = this
      .onChecked
      .bind(this);
  }
  onChange(e) {
    //this.props.patient[e.target.name] = e.target.value;
  }

  onChecked(e) {
    //this.props.patient[e.target.name] = e.target.checked;
  }

  render() {
    console.log(this.props);
    return (
      <LazyLoad>
        <Segment>
          <Header as='h2'><Icon name='sign in' size='large'/>
            Patient Details</Header>
          <Divider/>
          <Form>
            <Form.Field>
              <label>Name
              </label>
              <Input
                placeholder='Name'
                name="name"
                value={this.props.patient.name}
                onChange={this.onChange}/>
            </Form.Field>
            <Form.Field>
              <label>Company</label>
              <Input
                placeholder='Company'
                name="company"
                value={this.props.patient.company}
                onChange={this.onChange}/>
            </Form.Field>
            <Form.Field>
              <label>Email</label>
              <Input
                placeholder='Email'
                name="email"
                value={this.props.patient.email}
                onChange={this.onChange}/>
            </Form.Field>
            <Form.Field>
              <Checkbox
                label='Is Active ?'
                name="isActive"
                checked={this.props.patient.isActive}
                onChange={this.onChange}/>
            </Form.Field>
            <Divider/>
            <Button type='button' primary as={Link} to="/patients">Submit</Button>
          </Form>
        </Segment>
      </LazyLoad>
    );

  }
}

function mapStateToProps(state) {

  return {patient: state.activePatient};
}

export default connect(mapStateToProps)(Patient);
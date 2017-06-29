import React, {Component} from 'react';
import {Menu} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {selectPatient} from '../actions';
import {bindActionCreators} from 'redux';
import {Table, Image, Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom';
import LazyLoad from 'react-lazy-load';

class PatientsList extends Component {
    renderList() {
        return this
            .props
            .patients
            .map((patient) => {
                return (
                    <Table.Row key={patient._id}>
                        <Table.Cell>
                            <Image
                                src={patient.picture}
                                onClick={() => this.props.selectPatient(patient)}
                                as={Link}
                                to="/patient"
                                fluid
                                bordered
                                centered/>
                        </Table.Cell>
                        <Table.Cell singleLine>{patient.name}</Table.Cell>
                        <Table.Cell>
                            {patient.about}
                        </Table.Cell>
                    </Table.Row>
                );
            });
    }

    render() {
        return (

            <LazyLoad>
                <Table
                    celled
                    padded
                    striped
                    color='teal'
                    style={{
                    marginBottom: '20px'
                }}>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Picture</Table.HeaderCell>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>About</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {this.props.patients && this.renderList()}
                    </Table.Body>

                    <Table.Footer>
                        <Table.Row>
                            <Table.HeaderCell colSpan='3'>
                                <Menu floated='right' pagination>
                                    <Menu.Item as='a' icon>
                                        <Icon name='left chevron'/>
                                    </Menu.Item>
                                    <Menu.Item as='a'>1</Menu.Item>
                                    <Menu.Item as='a'>2</Menu.Item>
                                    <Menu.Item as='a'>3</Menu.Item>
                                    <Menu.Item as='a'>4</Menu.Item>
                                    <Menu.Item as='a' icon>
                                        <Icon name='right chevron'/>
                                    </Menu.Item>
                                </Menu>
                            </Table.HeaderCell>
                        </Table.Row>
                    </Table.Footer>
                </Table>
            </LazyLoad>

        );
    }
}

function mapStateToProps(state) {
    return {patients: state.patients};
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        selectPatient: selectPatient
    }, dispatch);

}

export default connect(mapStateToProps, matchDispatchToProps)(PatientsList);
import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { selectCheckup } from '../actions';
import { bindActionCreators } from 'redux';

class CheckupList extends Component {
    renderList() {
        return this.props.checkups.map((checkup) => {
            return (

                <Menu.Item key={checkup._id} name={checkup.name} onClick={() => this.props.selectCheckup(checkup)} />
            );
        });
    }


    render() {
        return (
            <Menu pointing vertical>
                {this.renderList()}
            </Menu>
        );
    }
}

function mapStateToProps(state) {
    return {
        checkups: state.checkups
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ selectCheckup: selectCheckup }, dispatch);

}

export default connect(mapStateToProps, matchDispatchToProps)(CheckupList);
import React, { Component } from 'react';
import {Menu} from 'semantic-ui-react';
import logo from '../logo.svg';
import '../style.css';

class AppMenu extends Component {

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        return (
            <Menu>
                <Menu.Menu>
                    <Menu.Item name='logo' onClick={this.handleItemClick}>Logo <img src={logo} className="NavBar-logo" alt="logo" /></Menu.Item>
                    <Menu.Item name='patients' onClick={this.handleItemClick}>Patients</Menu.Item>
                </Menu.Menu>


                <Menu.Menu position='right'>
                    <Menu.Item name='signin' onClick={this.handleItemClick}>Sign In</Menu.Item>
                    <Menu.Item name='signup' onClick={this.handleItemClick}>Sign up</Menu.Item>
                </Menu.Menu>
            </Menu>
        );
    }
}


export default AppMenu;
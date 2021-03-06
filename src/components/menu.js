import React, {Component} from 'react';
import {Menu, Icon} from 'semantic-ui-react';
import logo from '../logo.svg';
import '../style.css';
import { Link} from 'react-router-dom';
class AppMenu extends Component {

    handleItemClick = (e, {name}) => this.setState({activeItem: name});

    render() {
        return (
            <Menu>
                <Menu.Menu>
                    <Menu.Item name='logo' as={Link} to='/'>
                        Logo
                        <img src={logo} className="NavBar-logo" alt="logo"/>
                    </Menu.Item>

                    <Menu.Item name='patients' as={Link} to='/patients'>Patients</Menu.Item>
                    <Menu.Item name='charts' as={Link} to='/charts'><Icon name='pie chart'/>Charts</Menu.Item>

                </Menu.Menu>

                <Menu.Menu position='right'>
                    <Menu.Item name='signin' as={Link} to='/signin'>Sign In</Menu.Item>
                    <Menu.Item name='signup' as={Link} to='/signup'>Sign up</Menu.Item>
                </Menu.Menu>
            </Menu>
        );
    }
}

export default AppMenu;
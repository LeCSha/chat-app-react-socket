import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand, 
    NavItem,
    NavLink,
    Nav
} from 'reactstrap';

class Header extends Component {

    state = {
        isOpen:false
    }
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    render(){
        return (
        <div>
            <Navbar expand="md">
                <NavbarBrand tag={Link} to="/">Chat App !</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink tag={Link} to="/chat">Room Chat</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/livevisitors">Live Visitors</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
        )
    }
}

export default Header;
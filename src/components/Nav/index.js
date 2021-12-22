import React from 'react';
import { stack as Menu } from 'react-burger-menu';

function Nav() {
class Example extends React.Component {
    showSettings (event) {
        event.preventDefault();
    }
    render () {
        return (
            <Menu>
                <a id="about" className="menu-item">About</a>
                <a id="store" className="menu-item">Store</a>
                <a id="contact" className="menu-item">Contact</a>
                <a id="events" className="menu-item">Events</a>
                <a onClick={ this.showSettings } className="menu-item--small" href=""></a>
            </Menu>
        );
    }
}
}

export default Nav;
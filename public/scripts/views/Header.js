import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		const rb = require('react-bootstrap'),
			Navbar = rb.Navbar,
			Nav = rb.Nav,
			NavItem = rb.NavItem;

		return (
			<Navbar>
				<Navbar.Header>
					<Navbar.Brand>
						<a href="#">ABTest</a>
					</Navbar.Brand>
				</Navbar.Header>
				<Nav>
					<NavItem eventKey={1} href="#/experiences">Experiências</NavItem>
				</Nav>
			</Navbar>
		);
		return <Navigationbar/>;
	}
}

module.exports = Header;

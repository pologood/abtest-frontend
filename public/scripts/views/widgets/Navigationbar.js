const React = require('react'),
	ReactDOM = require('react-dom'),
	rb = require('react-bootstrap');

class Navigationbar extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		const Navbar = rb.Navbar,
			Nav = rb.Nav,
			NavItem = rb.NavItem,
			NavDropdown = rb.NavDropdown,
			MenuItem = rb.MenuItem;

		return (
			<Navbar>
				<Navbar.Header>
					<Navbar.Brand>
						<a href="#">ABTest</a>
					</Navbar.Brand>
				</Navbar.Header>
				<Nav>
					<NavItem eventKey={1} href="#/features">Features</NavItem>
				</Nav>
			</Navbar>
		);
	}
}

module.exports = Navigationbar;

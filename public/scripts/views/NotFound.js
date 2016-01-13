import React from 'react';
import ReactDOM from 'react-dom';

class NotFound extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="jumbotron">
						<h1>Oops!</h1>
						<h2>404 Página não encontrada</h2>
						<div>
							Desculpe, aconteceu um erro, a página requerida não foi encontrada!
						</div>
						<div>
							<a className="btn btn-primary btn-sm">
								<span className="glyphicon glyphicon-home"></span>
								&nbsp; Me tire daqui
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

module.exports = NotFound;

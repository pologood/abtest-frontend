import React from 'react';
import ExperimentCreateActions from "../../actions/ExperimentCreate";

class CreateWhiteList extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		const WhiteItems = require('./ExperimentCreateWhiteListItems');

		return (
			<div className="form-group">
				<h5>Direcionamento</h5>
				<div className="form-inline">
					<select className="form-control input-sm" ref="type" defaultValue="domain">
						<option value="user">Usuário</option>
						<option value="group">Grupo</option>
						<option value="domain">Domínio</option>
					</select>
					<span className="glyphicon glyphicon-arrow-right"></span>
					<div className="input-group">
						<input type="text" ref="name" onKeyDown={this.add.bind(this)} className="form-control input-sm"/>
						<span className="input-group-btn">
							<button className="btn btn-success btn-sm" onClick={this.add.bind(this)} type="button">Incluir</button>
						</span>
					</div>
					<br/>
					<h5><small>Altere o direcionamento para adicionar <strong>domínio, usuário e host</strong></small></h5>
					<br/>
				</div>
				<WhiteItems items={this.props.items}/>
			</div>
		);
	}

	add(event) {
		if (event.keyCode == 13 || event.type == "click") {
			var name = this.refs.name.value,
				type = this.refs.type.value;

			event.preventDefault();
			ExperimentCreateActions.createWhiteItem(name, type);
		}
	}
}

module.exports = CreateWhiteList;
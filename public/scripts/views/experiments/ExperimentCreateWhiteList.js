import React from 'react';

class CreateWhiteList extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		const WhiteItems = require('./ExperimentCreateWhiteListItems');

		return (
			<div className="form-group">
				<label>Porcentagem de tráfego para o experimento</label>
				<div className="form-inline">
					<select className="form-control" ref="type" defaultValue="domain">
						<option value="user">Usuário</option>
						<option value="group">Grupo</option>
						<option value="domain">Domínio</option>
					</select>
					<span className="glyphicon glyphicon-arrow-right"></span>
					<input type="text" ref="name" onKeyDown={this.add.bind(this)} className="form-control"/>
					<h5><small>Altere o direcionamento para adicionar <strong>domínio, usuário e host</strong></small></h5>
				</div>
				<WhiteItems items={this.props.items} remove={this.props.remove}/>
			</div>
		);
	}

	add(event) {
		if (event.keyCode == 13) {
			var item = {
				name: this.refs.name.value,
				type: this.refs.type.value		
			};
			this.props.add(item);
		}
	}
}

module.exports = CreateWhiteList;
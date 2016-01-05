import React from 'react';
import ExperienceActions from "../../actions/Experience";
import ExperienceStore from "../../stores/Experience";
class Create extends React.Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const Variations = require('./ExperienceVariations');

		return (
			<div className="container">
				<div className="page-header">
					<h4><b>Cadastro de Experimento</b></h4>
				</div>

				<form onSubmit={this._createExperience.bind(this)}>
					<div className="form-group">
						<label>Título</label>
						<input className="form-control" type="text" ref="name"/>
					</div>

					<div className="form-group">
						<label>Porcentagem de tráfego para o experimento</label>
						<select className="form-control col-xs-2" ref="percentage" defaultValue="50">
							<option value="1">1%</option>
							<option value="5">5%</option>
							<option value="10">10%</option>
							<option value="15">15%</option>
							<option value="25">25%</option>
							<option value="50">50%</option>
							<option value="75">75%</option>
							<option value="100">100%</option>
						</select>
					</div>

					<div className="form-group">
						<label>Descrição</label>
						<textarea rows="8" cols="30" className="form-control txtarea-variation" ref="description">
						</textarea>
					</div>

					<Variations/>
					<button className="btn btn-primary btn-sm">
							SALVAR</button>
				</form>
			</div>
		);
	}

	_openListPage() {
		window.location.hash = "/experiences";
	}

	_createExperience(event) {
		event.preventDefault();
		
		var name = this.refs.name.value,
			description = this.refs.description.value,
			percentage = this.refs.percentage.value,
			domainList = null,
			groupList = null,
			userList = null;

		ExperienceActions.create(name, description, percentage, domainList, groupList, userList);
	}
}

module.exports = Create;
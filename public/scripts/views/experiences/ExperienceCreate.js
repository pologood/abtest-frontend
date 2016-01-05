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

				<form>
					<div className="form-group retreat-left">
						<spam>Título</spam>
						<input className="form-control" type="text" ref="name" 
							onChange={this._onNameChange.bind(this)} />
					</div>

					<div className="form-group retreat-left">
						<spam>Descrição</spam>
						<textarea rows="8" cols="50" className="form-control txtarea-variation" ref="description" onChange={this._onNameChange.bind(this)}
							></textarea>
					</div>
					<Variations/>
					<button className="btn btn-primary btn-sm"
						onClick={this._createExperience.bind(this)}>SALVAR</button>
				</form>
			</div>
		);
	}

	_openListPage() {
		window.location.hash = "/experiences";
	}

	_onNameChange(event) {
		this.state.name = event.target.value;
	}

	_onDescriptionChange(event) {
		this.state.description = event.target.value;
	}

	_createExperience() {
		var name = this.state.name,
			description = this.state.description,
			domainList = null,
			groupList = null,
			userList = null;

		ExperienceActions.create(name, description, domainList, groupList, userList);
	}
}

module.exports = Create;
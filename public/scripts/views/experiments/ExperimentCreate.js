import React from 'react';
import ExperimentActions from "../../actions/Experiment";
import ExperimentStore from "../../stores/Experiment";

class Create extends React.Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const Variations = require('./ExperimentVariations'),
			WhiteList = require('./ExperimentCreateWhiteList');

		return (
			<div className="container">
				<div className="page-header">
					<h4><b>Cadastro de Experimento</b></h4>
				</div>

				<form onSubmit={this._createExperiment.bind(this)}>
					<div className="form-group">
						<label>Título</label>
						<input className="form-control" type="text" ref="name"/>
					</div>

					<div className="form-group">
						<label>Porcentagem de tráfego para o experimento</label>
						<div className="form-inline">
							<select className="form-control" ref="percentage" defaultValue="50">
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
					</div>

					<WhiteList/>

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
		window.location.hash = "/experiments";
	}

	_createExperiment(event) {
		event.preventDefault();
		
		var name = this.refs.name.value,
			description = this.refs.description.value,
			percentage = this.refs.percentage.value,
			domainList = null,
			groupList = null,
			userList = null;

		ExperimentActions.create(name, description, percentage, domainList, groupList, userList);
	}
}

module.exports = Create;
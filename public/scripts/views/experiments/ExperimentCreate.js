import React from 'react';
import ExperimentCreateActions from "../../actions/ExperimentCreate";
import ExperimentCreateStore from "../../stores/ExperimentCreate";
import ExperimentActions from "../../actions/Experiment";

function getExperimentCreateState() {
	return {
		variations: ExperimentCreateStore.getVariations(),
		whiteItemsUser: ExperimentCreateStore.getWhiteItemsUser(),
		whiteItemsDomain: ExperimentCreateStore.getWhiteItemsDomain(),
		whiteItemsGroup: ExperimentCreateStore.getWhiteItemsGroup()
	} 
}

class Create extends React.Component {

	constructor(props) {
		super(props);

		this.state = getExperimentCreateState();
	}

	componentDidMount() {
		ExperimentCreateStore.addChangeListener(this._onChange.bind(this));
	}

	componentWillUnmount() {
		ExperimentCreateStore.removeChangeListener(this._onChange.bind(this));
	}

	render() {
		const Variations = require('./ExperimentVariations'),
			WhiteList = require('./ExperimentCreateWhiteList');
		
		var whiteItemsType = {
			users : this.state.whiteItemsUser,
			domains : this.state.whiteItemsDomain,
			groups : this.state.whiteItemsGroup
		}; 

		return (
			<div className="container">
				<div className="page-header">
					<h3><b>Cadastro de Experimento</b></h3>
				</div>

				<form onSubmit={this._createExperiment.bind(this)}>
					<div className="form-group">
						<h5>Título</h5>
						<input className="form-control input-sm" type="text" ref="name"/>
					</div>

					<div className="form-group">
						<h5>Porcentagem de tráfego para o experimento</h5>
						<div className="form-inline">
							<select className="form-control input-sm" ref="percentage" defaultValue="50">
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

					<WhiteList items={whiteItemsType}/>

					<div className="form-group">
						<h5>Hipótese</h5>
						<textarea rows="4" cols="20" className="form-control input-sm txtarea-variation" ref="description">
						</textarea>
					</div>

					<Variations items={this.state.variations}/>

					<div className="btn-toolbar">
						<button className="btn btn-primary btn-sm">
						SALVAR</button>
					</div>
				</form>
			</div>
		);
	}

	_onChange() {
		this.state = getExperimentCreateState();
		this.setState(this.state);
	}

	_createExperiment(event) {
		event.preventDefault();

		var name = this.refs.name.value,
			description = this.refs.description.value,
			percentage = this.refs.percentage.value,
			enabled = true,
			domains = null,
			groups = null,
			users = null,
			variations = this.state.variations;

		ExperimentActions.create(name, description, enabled, percentage, domains, groups, users, variations);
	}
}

module.exports = Create;
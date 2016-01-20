import React from 'react';
import ExperimentFormActions from "../../actions/ExperimentForm";
import ExperimentFormStore from "../../stores/ExperimentForm";
import ExperimentActions from "../../actions/Experiment";
import LoadingConstants from '../../constants/Loading';
import { History } from 'react-router';
import reactMixin from 'react-mixin';
import Loader from 'react-loader-advanced';

function getExperimentFormState() {
	return ExperimentFormStore.getFormItem();
}

class Form extends React.Component {

	constructor(props) {
		super(props);
		this.state = getExperimentFormState();
	}

	componentDidMount() {
		debugger;
		var id = this.props.routeParams.id;
		ExperimentFormActions.createForm(id);

		ExperimentFormStore.addChangeListener(this._onChange.bind(this));
	}

	componentWillUnmount() {
		ExperimentFormStore.removeChangeListener(this._onChange.bind(this));
	}

	render() {
		const Variations = require('./ExperimentVariations'),
			WhiteList = require('./ExperimentCreateWhiteList');
		debugger;
		var whiteItemsType = {
			users : this.state.users,
			domains : this.state.domains,
			groups : this.state.groups
		};

		var isLoading = this.state.creationState == LoadingConstants.LOADING;

		if(this.state.creationState == LoadingConstants.ERROR)
			return <h2>Vish, deu erro</h2>;

		return (
			<Loader show={isLoading}>
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
								<select className="form-control input-sm" defaultValue={50} ref="percentage">
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
							<textarea rows="4" cols="10" className="form-control input-sm txtarea-variation" ref="description">
							</textarea>
						</div>

						<Variations items={this.state.variations}/>

						<div className="btn-toolbar">
							<button className="btn btn-primary btn-sm">
							SALVAR</button>
						</div>
					</form>
				</div>
			</Loader>
		);
	}

	_onChange() {
		this.state = getExperimentFormState();

		if(this._isCreated())
			return this._openExperiments();

		this.setState(this.state);

//		if (!this.refs.name) return;
//		this.refs.name.value = this.state.name || "";
//		this.refs.description.value = this.state.description || "";
//		this.refs.percentage.value = this.state.percentage || 1;
	}

	_isCreated() {
		return this.state.creationState == LoadingConstants.LOADED
	}

	_openExperiments() {
		this.history.pushState(null, '/experiments');
	}

	_createExperiment(event) {
		event.preventDefault();

		var name = this.refs.name.value,
			description = this.refs.description.value,
			percentage = this.refs.percentage.value,
			enabled = true,
			domains = this.state.domains.toString(),
			groups = this.state.groups.toString(),
			users = this.state.users.toString(),
			variations = this.state.variations;

		ExperimentFormActions.create(name, description, enabled, percentage, domains, groups, users, variations);
	}
}

reactMixin.onClass(Form, History);

module.exports = Form;
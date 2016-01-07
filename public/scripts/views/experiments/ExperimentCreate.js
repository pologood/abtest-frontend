import React from 'react';
import ExperimentActions from "../../actions/Experiment";
import ExperimentStore from "../../stores/Experiment";
class Create extends React.Component {

	constructor(props) {
		super(props);
		this.state = {variations: []};
	}

	render() {
		const Variations = require('./ExperimentVariations');

		return (
			<div className="container">
				<div className="page-header">
					<h3><b>Cadastro de Experimento</b></h3>
				</div>

				<form onSubmit={this._createExperiment.bind(this)}>
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
						<textarea rows="6" cols="30" className="form-control txtarea-variation" ref="description">
						</textarea>
					</div>

					<Variations items={this.state.variations} add={this.addVariation.bind(this)} 
							remove={this.removeVariation.bind(this)} change={this.changeVariation.bind(this)}/>

					<div className="form-buttons">
						<button className="btn btn-primary btn-sm">
								SALVAR</button>
					</div>
				</form>
			</div>
		);
	}

	changeVariation(item) {
		var variations = this.state.variations;
		for (var i = 0; i < this.state.variations.length; i++)
			if(this.state.variations[i].hash == item.hash) {
				this.state.variations[i] = item;
				return this.setState({variations: variations});
			}
	}

	addVariation() {
		var item = {
			hash: new Date().getTime()
		};
		var variations = this.state.variations;
		variations.push(item);
		this.setState({variations: variations});
	}

	removeVariation(itemId) {
		var variations = this.state.variations;
		for (var i = 0; i < this.state.variations.length; i++) {
			if(this.state.variations[i].hash == itemId) {
				this.state.variations.splice(i, 1);
				return this.setState({variations: this.state.variations});
			}
		}
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
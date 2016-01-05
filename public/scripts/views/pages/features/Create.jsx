const React = require('react'),
	FeatureActions = require("actions/Feature"),
	FeatureStore = require("stores/Feature");

class Create extends React.Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="container">
				<div className="page-header">
					<h1>Criar Feature</h1>
				</div>

				<form>
					<div className="form-group">
						<label>Nome da feature</label>
						<input className="form-control" type="text" ref="name" 
							placeholder="Nova incrível feature" onChange={this._onNameChange.bind(this)} />
					</div>

					<div className="form-group">
						<label>Descrição</label>
						<textarea className="form-control" ref="description" placeholder="Descrição da nova incrível feature" 
							onChange={this._onNameChange.bind(this)}></textarea>
					</div>

					<button className="btn btn-primary btn-s pull-right"
						onClick={this._createFeature.bind(this)}>Salvar</button>
				</form>
			</div>
		);
	}

	_openListPage() {
		window.location.href = "#/features";
	}

	_onNameChange(event) {
		this.state.name = event.target.value;
	}

	_onDescriptionChange(event) {
		this.state.description = event.target.value;
	}

	_createFeature() {
		var name = this.state.name,
			description = this.state.description,
			domainList = null,
			groupList = null,
			userList = null;

		FeatureActions.create(name, description, domainList, groupList, userList);
	}
}

module.exports = Create;
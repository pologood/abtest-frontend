const React = require('react'),
	FeatureActions = require("actions/Feature"),
	FeatureStore = require("stores/Feature"),
	rb = require('react-bootstrap');

class Create extends React.Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const PageHeader = rb.PageHeader,
			Input = rb.Input,
			Button = rb.Button,
			Jumbotron = rb.Jumbotron;

		return (
			<div className="container">
				<PageHeader>
					Criar Feature
					<Button className="pull-right"
							bsSize="xs"
							bsStyle="primary"
							onClick={this._createFeature.bind(this)}>Salvar</Button>
				</PageHeader>
				<form>
					<Input type="text" label="Nome da feature" ref="name" 
							placeholder="Nova incrível feature" onChange={this._onNameChange.bind(this)}/>
					<Input type="textarea" label="Descrição" ref="description" onChange={this._onDescriptionChange.bind(this)}
							placeholder="Descrição da nova incrível feature" />
					<label>Variantes  </label>
					<Button bsStyle="success"
							bsSize="xs"
							className="pull-right"
							onClick={this._createFeature.bind(this)}>+</Button>
					<Jumbotron>
							  
					</Jumbotron> 
					
					<Button bsStyle="primary"
							onClick={this._createFeature.bind(this)}>Salvar</Button>
				</form>
			</div>
		);
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
import React from 'react';
import FeatureActions from "../../actions/Feature";
import FeatureStore from "../../stores/Feature";

class Create extends React.Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const rb = require('react-bootstrap'),
			PageHeader = rb.PageHeader,
			Input = rb.Input,
			ButtonGroup = rb.ButtonGroup,
			Button = rb.Button;

		return (
			<div className="container">
				<PageHeader>
					Cadastrar Feature
					<ButtonGroup className="pull-right">
						<Button bsSize="xs"
								bsStyle="primary"
								onClick={this._openListPage.bind(this)}>Voltar</Button>
						<Button bsSize="xs"
								bsStyle="info"
								onClick={this._createFeature.bind(this)}>Salvar</Button>
					</ButtonGroup>
				</PageHeader>
				<form>
					<Input type="text" label="Nome da feature" ref="name" 
							placeholder="Nova incrível feature" onChange={this._onNameChange.bind(this)}/>
					<Input type="textarea" label="Descrição" ref="description" onChange={this._onDescriptionChange.bind(this)}
							placeholder="Descrição da nova incrível feature" />

					<Button bsStyle="primary"
							onClick={this._createFeature.bind(this)}>Salvar</Button>
				</form>
			</div>
		);
	}

	_openListPage() {
		window.location.hash = "/features";
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
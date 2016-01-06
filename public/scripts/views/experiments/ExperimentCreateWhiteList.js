import React from 'react';

class CreateWhiteList extends React.Component {

	constructor(props) {
		super(props);
		var whiteItems = [{
				"name": "Joãozinho",
				"type": "user"
			},
			{
				"name": "softexpert.com.br",
				"type": "domain"
			},
			{
				"name": "TECH",
				"type": "group"
			},
			{
				"name": "José",
				"type": "user"
			}
		];
		this.state = {whiteItems: whiteItems};
	}

	render() {

		var whiteItems = this.state.whiteItems;
		var whiteItemsEls = [];

		var buttonColor, icon;

		for (var i = 0; i < whiteItems.length; i++) {
			var item = whiteItems[i];
			if (item.type == "user") {
				buttonColor = "btn btn-success btn-xs";
				icon = "glyphicon glyphicon-user";
			} else if (item.type == "group"){
				buttonColor = "btn btn-primary btn-xs";
				icon = "glyphicon glyphicon-hdd";
			} else {
				buttonColor = "btn btn-info btn-xs";
				icon = "glyphicon glyphicon-globe";
			}

			whiteItemsEls.push(
				<button key={i} className={buttonColor} type="button">
					<span className={icon}></span> {item.name} &nbsp;
					<span className="glyphicon glyphicon-remove" onClick={this.remove.bind(this, i)}></span>
				</button>
			)
		}

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
				<div className="btn-toolbar">
					{whiteItemsEls}
				</div>
			</div>
		);
	}

	add(event) {
		if (event.keyCode == 13) {
			this.state.whiteItems.push({
				name: this.refs.name.value,
				type: this.refs.type.value		
			});
			this.setState({whiteItems: this.state.whiteItems})
		}
	}

	remove(itemId) {
		this.state.whiteItems.splice(itemId, 1);
		this.setState({whiteItems: this.state.whiteItems});
	}
}

module.exports = CreateWhiteList;
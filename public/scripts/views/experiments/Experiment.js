import React from 'react';
import Modal from 'simple-react-modal';
import ExperimentStore from "../../stores/Experiment";
import { History } from 'react-router';
import reactMixin from 'react-mixin';

class Experiment extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			item: {}
		};
	}

	show(id) {
		ExperimentStore.getExperiment(id, function (item) {
			this.state.item = item;
			this.setState({
				show: true,
				item: this.state.item
			});
		}.bind(this));
	}

	close() {
		this.setState({show: false});
	}

	render() {
		const WhiteItems = require('./ExperimentCreateWhiteListItems.js');
		var variations = this.state.item.variations,
			variationsEls = [];

		if (variations)
			variations.forEach(variation => {
				variationsEls.push(
					<li key={variation.id} className="list-group-item">{variation.name}</li>
				);
			});

		return (
			<div>
				<Modal show={this.state.show} transitionSpeed={300} 
						onClose={this.close.bind(this)}>
					<div className="modal show">
						<div className="modal-dialog">
							<div className="modal-content">
								<div className="modal-header">
									<button type="button" className="close" onClick={this.close.bind(this)}
											aria-hidden="true">&times;</button>
									<h4 className="modal-title">{this.state.item.name}</h4>
								</div>
								<div className="modal-body">
									<div className="form-group">
										<label htmlFor="recipient-name" className="control-label">Hipótese</label>
										<p>{this.state.item.description}</p>
									</div>
									<div className="form-group">
										<label htmlFor="recipient-name" className="control-label">Amostragem</label>
										<h6>{this.state.item.percentage} %</h6>
									</div>
									<div className="form-group">
										<label htmlFor="recipient-name" className="control-label">Direcionamento</label>
										<WhiteItems items={this.state.item} hideRemoveBtn={true}/>
									</div>
									<div className="form-group">
										<label htmlFor="recipient-name" className="control-label">Variações</label>
										<ul className="list-group">
											{variationsEls}
										</ul>
									</div>
								</div>
								<div className="modal-footer">
									<button type="button" className="btn btn-default" 
											onClick={this.close.bind(this)}>Fechar</button>
									<button type="button" className="btn btn-primary"
											onClick={this._openCreationPage.bind(this)}>Editar</button>
								</div>
							</div>
						</div>
					</div>
				</Modal>
			</div>
		);
	}

	_openCreationPage() {
		this.history.pushState(null, '/experiments/create/' + this.state.item.id);
	}
}

reactMixin.onClass(Experiment, History);

module.exports = Experiment;

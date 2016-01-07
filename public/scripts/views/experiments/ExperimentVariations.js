import React from 'react';
import ExperimentCreateActions from "../../actions/ExperimentCreate";

class Variations extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		const VariationItem = require('./VariationItem.js');

		var variations = this.props.items;
		var variationsEls = [];

		for (var i = 0, len = variations.length; i < len; i++) {
			variationsEls.push(
				<VariationItem index={i} item={variations[i]} key={variations[i].hash}/>
			);
		}

		return (
			<div>
	      		<div className="variation-header">
					<h4 className="label-variation"><b>Variações</b></h4>
					<button className="btn btn-success btn-sm btn-add-variation" onClick={this._addVariation.bind(this)}>
						<span className="glyphicon glyphicon-plus" aria-hidden="true">&nbsp;</span>
						Adicionar
					</button>
				</div>

				{variationsEls}
			</div>
    	);
	}

	_addVariation(event) {
		event.preventDefault();
		ExperimentCreateActions.createVariation();
	}

}

module.exports = Variations;

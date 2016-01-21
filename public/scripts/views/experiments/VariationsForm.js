import React from 'react';
import ExperimentFormActions from "../../actions/ExperimentForm";

class Variations extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		const VariationItemForm = require('./VariationItemForm.js');
		var variations = this.props.items || [],
			variationsEls = [];

		for(let variation of variations)
			variationsEls.push(<VariationItemForm item={variation} key={variation.id}/>);

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
		ExperimentFormActions.createVariation();
	}

}

module.exports = Variations;

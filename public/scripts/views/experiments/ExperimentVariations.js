import React from 'react';

class Variations extends React.Component {

	constructor(props) {
		super(props);
		this.state = {};
		this.state.variations = [{hash: new Date().getTime()}];
	}

	render() {

		const VariationItem = require('./VariationItem.js');

		var variations = this.state.variations;
		var variationList = [];

		for (var i = 0, len = variations.length; i < len; i++) {
			variationList.push(
				<VariationItem index={i} remove={this._removeVariation.bind(this, i)} 
						key={variations[i].hash}/>
			);
		}

		return (
			<div>
	      		<div className="variation-header">
					<h4 className="label-variation"><b>Variações</b></h4>
					<button className="btn btn-success btn-sm btn-add-variation" onClick={this._addVariation.bind(this)}>
						<span className="glyphicon glyphicon-plus" aria-hidden="true">&nbsp;</span>
						Adicionar mais
					</button>
				</div>

				{variationList}
			</div>
    	);
	}

	_removeVariation(itemId) {
		this.state.variations.splice(itemId, 1);
		this.setState({variations: this.state.variations});
	}

	_addVariation(event) {
		event.preventDefault();
		this.state.variations.push({hash: new Date().getTime()});
		this.setState({variations: this.state.variations});
	}
}

module.exports = Variations;

import React from 'react';

class Variations extends React.Component {

	constructor(props) {
		super(props);
		this.state = {};
		this.state.variations = [{hash: new Date().getTime()}];
	}

	render() {

		var variations = this.state.variations;
		var variationItems = [];

		for (var i = 0, len = variations.length; i < len; i++) {
			variationItems.push(
			    <div key={variations[i].hash} className="form-group form-variations">
			        <div className="variations-title">
			            <input type="text" className="form-control" name="title" placeholder="Variação" />
			        </div>
			        <div className="variations-btn-remove">
		            	<span className="glyphicon glyphicon-trash variation-icon-remove" aria-hidden="true" onClick={this._removeVariation.bind(this, i)}></span>
			        </div>
			    </div>
			);
		}

		return (
			<div>
	      		<div className="page-header">
					<h4 className="label-variation"><b>Variações</b></h4>
					<button className="btn btn-success btn-sm btn-add-variation" onClick={this._addVariation.bind(this)}>
						<span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
						Adicionar mais
					</button>
				</div>

				{variationItems}
			</div>
    	);
	}

	_addVariation(event) {
		event.preventDefault();
		this.state.variations.push({hash: new Date().getTime()});
		this.setState({variations: this.state.variations});
	}

	_removeVariation(itemId) {
		this.state.variations.splice(itemId, 1);
		this.setState({variations: this.state.variations});
	}
}

module.exports = Variations;

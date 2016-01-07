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
			    <div key={variations[i].hash} className="form-group">
			        <div className="col-xs-11">
			            <input type="text" className="form-control" name="title" placeholder="Title" />
			        </div>
			        <div className="col-xs-1">
			            <button type="button" className="btn btn-default removeButton" onClick={this._removeVariation.bind(this, i)}>-</button>
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
						Adicionar
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
		debugger;
		this.state.variations.splice(itemId, 1);
		this.setState({variations: this.state.variations});
	}
}

module.exports = Variations;

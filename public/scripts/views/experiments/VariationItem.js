import React from 'react';
import ExperimentCreateActions from "../../actions/ExperimentCreate";

class VariationItem extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		var buttonClass = "glyphicon glyphicon-trash variation-icon-remove";
		
		if (!this.props.item.enabled)
			buttonClass += " disable-variations-btn-remove";

		return (
			<div className="form-group form-variations">
		        <div className="variations-title">
		            <input type="text" className="form-control input-sm" ref="name" defaultValue={this.props.item.name} placeholder="Nome da variação" 
		            		onChange={this._onChangeName.bind(this)}/>
		        </div>
		        <div className="variations-btn-remove">
	            	<span className={buttonClass} onClick={this._removeVariation.bind(null, this.props.item.hash)}></span>
		        </div>
		    </div>
    	);
	}

	_onChangeName(event) {
		event.preventDefault();

		var hash = this.props.item.hash,
			name = this.refs.name.value,
			enabled = (name && name.trim());

		ExperimentCreateActions.updateVariation(hash, name, enabled);
	}

	_removeVariation(hash) {
		ExperimentCreateActions.deleteVariation(hash);
	}
}

module.exports = VariationItem;

import React from 'react';
import ExperimentFormActions from "../../actions/ExperimentForm";

class VariationItem extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		var name = this.props.item.name,
			buttonClass = this._getDeleteButtonClass(name);

		return (
			<div className="form-group form-variations">
		        <div className="variations-title">
		            <input type="text" className="form-control input-sm" ref="name" 
		            		defaultValue={name} placeholder="Nome da variação" 
		            		onChange={this._onChangeName.bind(this)}/>
		        </div>
		        <div className="variations-btn-remove">
	            	<span className={buttonClass} onClick={this._removeVariation.bind(null, this.props.item.hash)}></span>
		        </div>
		    </div>
    	);
	}

	_getDeleteButtonClass(variationName) {
		var buttonClass = "glyphicon glyphicon-trash variation-icon-remove";

		if (!variationName || !variationName.trim())
			buttonClass += " disable-variations-btn-remove";

		return buttonClass;
	}

	_onChangeName(event) {
		event.preventDefault();

		var hash = this.props.item.hash,
			name = this.refs.name.value;

		ExperimentFormActions.updateVariation(hash, name);
	}

	_removeVariation(hash) {
		ExperimentFormActions.deleteVariation(hash);
	}
}

module.exports = VariationItem;

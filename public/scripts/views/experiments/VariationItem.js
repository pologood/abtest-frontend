import React from 'react';

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
		            <input type="text" className="form-control" ref="name" defaultValue={this.props.item.name} placeholder="Nome da variação" 
		            		onChange={this._onChangeName.bind(this)}/>
		        </div>
		        <div className="variations-btn-remove">
	            	<span className={buttonClass} onClick={this.props.remove.bind(null, this.props.item.hash)}></span>
		        </div>
		    </div>
    	);
	}

	_onChangeName() {
		var enabled = !(name && name.trim());
		var item = {
			hash: this.props.item.hash,
			name: this.refs.name.value,
			enabled: enabled			
		}

		this.props.change(item);
	}
}

module.exports = VariationItem;

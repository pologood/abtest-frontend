import React from 'react';

class VariationItem extends React.Component {

	constructor(props) {
		super(props);
		this.props = props;
		this.state = {index: props.index, hidden: true};
	}

	render() {
		var buttonClass = "glyphicon glyphicon-trash variation-icon-remove";
		if (this.state.hidden)
			buttonClass += " hide";

		return (
			<div className="form-group form-variations">
		        <div className="variations-title">
		            <input type="text" className="form-control" ref="name" placeholder="Nome da variação" 
		            		onChange={this._onChangeTitle.bind(this)}/>
		        </div>
		        <div className="variations-btn-remove">
	            	<span className={buttonClass} onClick={this.props.remove}></span>
		        </div>
		    </div>
    	);
	}

	_onChangeTitle() {
		var name = this.refs.name.value;
		var hidden = !(name && name.trim());
		this.setState({hidden: hidden})
	}
}

module.exports = VariationItem;

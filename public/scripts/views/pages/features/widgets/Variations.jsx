const React = require('react'),
	FeatureActions = require('actions/Feature'),
	FeatureStore = require("stores/Feature");

class Variations extends React.Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
	      		<div className="page-header">
					<h4 className="label-variation"><b>Variações</b></h4>
					<button className="btn btn-success btn-sm btn-add-variation">
						<span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
						Adicionar
					</button>
				</div>

				<div id="surveyForm" method="post" className="form-horizontal">
				    <div className="form-group">
				        <label className="col-xs-3 control-label">Question</label>
				        <div className="col-xs-5">
				            <input type="text" className="form-control" name="question" />
				        </div>
				    </div>

				    <div className="form-group">
				        <label className="col-xs-3 control-label">Options</label>
				        <div className="col-xs-5">
				            <input type="text" className="form-control" name="option[]" />
				        </div>
				        <div className="col-xs-4">
				            <button type="button" className="btn btn-default addButton"><i className="fa fa-plus"></i></button>
				        </div>
				    </div>

				    <div className="form-group hide" id="optionTemplate">
				        <div className="col-xs-offset-3 col-xs-5">
				            <input className="form-control" type="text" name="option[]" />
				        </div>
				        <div className="col-xs-4">
				            <button type="button" className="btn btn-default removeButton"><i className="fa fa-minus"></i></button>
				        </div>
				    </div>

				    <div className="form-group">
				        <div className="col-xs-5 col-xs-offset-3">
				            <button type="submit" className="btn btn-default">Validate</button>
				        </div>
				    </div>
				</div>
			</div>
    	);
	}
}

module.exports = Variations;

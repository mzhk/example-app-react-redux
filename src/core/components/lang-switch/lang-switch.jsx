import React, { Component } from 'react';
import * as coreActions from '../../../actions/coreActions';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class LangSwitch extends Component {

	updateLang(lang) {
		this.props.coreActions.updateLanguage(lang);
	};

	render() {
		return (
			<div>
				{this.props.coreState.lang}
				<button type="button" onClick={ () => this.updateLang('en') }>EN</button>
				<button type="button" onClick={ () => this.updateLang('de') }>DE</button>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		coreState: state.core
	};
}

function mapDispatchToProps(dispatch) {
	return {
		coreActions: bindActionCreators(coreActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(LangSwitch)

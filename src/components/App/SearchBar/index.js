import  React, { Component } from 'react';
import { browserHistory } from 'react-router';

import logo from './github-logo.png';

export default class SearchBar extends Component {
	constructor( props ) {
		super( props );
		this.onInputSubmit = this.onInputSubmit.bind( this );
	}

	onInputSubmit( event ) {
		browserHistory.push( `/search/${this.refs.user.value}` );
	}

	render () {
		return (
			<div className="header">
				<div className="container clearfix">
					<a href="/" className="header-logo">
						<img src={logo} alt="logo" />
					</a>
					<div className="header-search">
						<form className="js-site-search-form" onSubmit={this.onInputSubmit}>
							<label className="form-control header-search-wrapper">
								<input type="text"
									ref="user"
									className="form-control header-search-input"
								/>
							</label>
						</form>
					</div>
				</div>
			</div>
		);
	}
}


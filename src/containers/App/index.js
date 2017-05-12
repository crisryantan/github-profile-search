import _ from 'lodash';
import React, { Component } from 'react';

import SearchBar from '../../components/SearchBar';

import './index.css';

export default class App extends Component {
	render() {
		return (
			<div>
				<SearchBar />
				{ this.props.children }
			</div>
		);
	}
}

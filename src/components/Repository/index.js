import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Repository extends Component {
	render() {
		const { repo } = this.props;
		return (
			<li className="col-xs-12 card-details card-padding card-repository">
				<a href={repo.html_url}>
					{ repo.name }
				</a>
			</li>
		);
	}
}

Repository.propTypes = {
	repo : PropTypes.object
};

export default Repository;
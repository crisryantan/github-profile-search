import _ from 'lodash';
import  React, { Component } from 'react';
import PropTypes from 'prop-types';
import CircularProgress from 'material-ui/CircularProgress';

import Repository from './Repository';
import ProfileDetails from './ProfileDetails';

import { connect } from 'react-redux';
import * as actions from './actions';

import './index.css';

class SelectedUser extends Component {

	componentWillMount () {
		this.props.searchUser( this.props.params.id );
	}

	renderUser () {
		const { searching, succeeded } = this.props;
		let userDisplay = '';

		if ( searching ) {
			userDisplay = (
				<div className="center">
					<CircularProgress size={80} thickness={5} />
				</div>
			)
		}

		if ( succeeded ) {
			return this.fullUserView();
		}

		return userDisplay;
	}

	renderRepository ( repo ) {
		return (
			<Repository repo={repo} key={repo.id} />
		)
	}

	fullUserView () {
		const { user } = this.props;
		const hireable = user.hireable ? 'yes' : 'no';

		return (
			<div className="profile-container">
				<ProfileDetails user={user} />
				<div className="col-xs-9 float-left">
					<div className="user-profile-nav">
						<nav>
							<div className="nav-item">
								Repositories
								<span className="counter">
									{ user.public_repos }
								</span>
							</div>
							<div className="nav-item">
								Following
								<span className="counter">
									{ user.following }
								</span>
							</div>
							<div className="nav-item">
								Followers
								<span className="counter">
									{ user.followers }
								</span>
							</div>
							<div className="nav-item">
								Hireable
								<span className="counter">
									{ hireable }
								</span>
							</div>
						</nav>
					</div>
					<ul>
						{ _.map( user.repos, this.renderRepository ) }
					</ul>
				</div>
			</div>
		);
	}

	render () {
		return (
			<div className="user-list">
				{ this.renderUser() }
			</div>
		);
	}
}


function mapStateToProps ( state ) {
	const searchProfileReducer = state.get( 'searchProfileReducer' );
	return {
		user      : searchProfileReducer.get( 'user' ),
		searching : searchProfileReducer.get( 'searching' ),
		succeeded : searchProfileReducer.get( 'succeeded' )
	};
}

SelectedUser.propTypes = {
	user       : PropTypes.object,
	searching  : PropTypes.bool,
	succeeded  : PropTypes.bool,
	searchUser : PropTypes.func
};

export default connect( mapStateToProps, actions )( SelectedUser );
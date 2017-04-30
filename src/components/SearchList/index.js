import _ from 'lodash';
import  React, { Component } from 'react';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';

import CircularProgress from 'material-ui/CircularProgress';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import {Card, CardTitle, CardText} from 'material-ui/Card';

import { connect } from 'react-redux';
import * as actions from './actions';

import './index.css';

class SearchList extends Component {
	constructor ( props ) {
		super( props );
		this.renderUser  = this.renderUser.bind( this );
		this.renderUsers = this.renderUsers.bind( this );
	}

	componentWillMount () {
		this.props.searchUsers( this.props.routeParams.id );
	}

	goToUser ( username ) {
		browserHistory.push( `/${username}` )
	}

	renderUsers () {
		const { searching, succeeded, users } = this.props;
		let userList = '';

		if ( searching ) {
			userList = (
				<div className="center">
					<CircularProgress size={80} thickness={5} />
				</div>
			)
		}

		if ( succeeded ) {
			userList = (
				<Card className="col-xs-12">
					<CardTitle>Users List</CardTitle>
					<CardText>
						<List>
							{ _.map( users, this.renderUser ) }
						</List>
					</CardText>
				</Card>

			);
		}

		return userList;
	}

	renderUser ( user ) {
		return (
			<ListItem 
				className="list-group-item col-xs-3"
				key={user.login}
				onTouchTap={() => this.goToUser( user.login )}
				primaryText={user.login}
				leftAvatar={<Avatar src={user.avatar_url} />}
			/>
		)
	}

	render () {
		return (
			<div className="user-list">
				{ this.renderUsers() }
			</div>
		);
	}
}

function mapStateToProps ( state ) {
	const searchReducer = state.get( 'searchUsersReducer' );
	return {
		users     : searchReducer.get( 'users' ),
		searching : searchReducer.get( 'searching' ),
		succeeded : searchReducer.get( 'succeeded' )
	};
}

SearchList.propTypes = {
	users : PropTypes.oneOfType( [
		PropTypes.array,
		PropTypes.object
	] ),
	searching : PropTypes.bool,
	succeeded : PropTypes.bool
};

export default connect( mapStateToProps, actions )( SearchList );

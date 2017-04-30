import axios from 'axios';
import {
	SEARCHING_USERS,
	SEARCH_USERS_SUCCESS,
	SEARCH_USERS_FAIL
} from './constants';

const apiUrl = 'https://api.github.com/search/users?q=';

export function searchUsers ( user ) {
	return dispatch => {
		dispatch( searchingUsers() );
		return axios.get( apiUrl + user )
			.then( ( res ) => {
				dispatch( searchUsersSuccess( res.data.items ) )
			} )
			.catch( () => {
				dispatch( searchUsersFail( 'No results found.' ) );
			} );
	}
}

export function searchingUsers () {
	return {
		type : SEARCHING_USERS
	}
}

export function searchUsersSuccess ( users ) {
	return {
		type : SEARCH_USERS_SUCCESS,
		users
	}
}

export function searchUsersFail ( error ) {
	return {
		type : SEARCH_USERS_FAIL,
		error
	}
}


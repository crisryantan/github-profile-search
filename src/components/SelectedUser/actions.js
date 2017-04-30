import axios from 'axios';
import {
	SEARCHING_USER,
	SEARCH_USER_SUCCESS,
	SEARCH_USER_FAIL
} from './constants';

const apiUrl = 'https://api.github.com/users/';

export function searchUser ( user ) {
	return dispatch => {
		dispatch( searchingUser() );
		return axios.get( apiUrl + user )
			.then( ( res ) => {
				const fetchedUser = res.data;
				dispatch( getUserRepos( fetchedUser ) );
			} )
			.catch( () => {
				dispatch( searchUserFail( 'User not found.' ) );
			} );
	}
}

export function searchingUser () {
	return {
		type : SEARCHING_USER
	}
}

export function searchUserSuccess ( user ) {
	return {
		type : SEARCH_USER_SUCCESS,
		user
	}
}

export function searchUserFail ( error ) {
	return {
		type : SEARCH_USER_FAIL,
		error
	}
}


function getUserRepos ( user ) {
	return dispatch => {
		return axios.get( user.repos_url ).then( ( res ) => {
			user.repos = res.data;
			dispatch( searchUserSuccess( user ) )
		} );
	}
	
}
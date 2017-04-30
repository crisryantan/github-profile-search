import {
	searchingUsers,
	searchUsersSuccess,
	searchUsersFail
} from '../actions';

import {
	SEARCHING_USERS,
	SEARCH_USERS_SUCCESS,
	SEARCH_USERS_FAIL,
} from '../constants';

describe( 'SearchList Actions', () => {
	describe( 'searchingUsers', () => {
		it( 'has a type of SEARCHING_USERS', () => {
			const expected = {
				type : SEARCHING_USERS
			};

			expect( searchingUsers() ).toEqual( expected );
		} );
	} );

	describe( 'searchUsersSuccess', () => {
		it( 'has a type of SEARCH_USERS_SUCCESS', () => {
			const users = [ { id : 1 }, { id: 2 } ];
			const expected = {
				type : SEARCH_USERS_SUCCESS,
				users
			};

			expect( searchUsersSuccess( users ) ).toEqual( expected );
		} );
	} );

	describe( 'searchUsersFail', () => {
		it( 'has a type of SEARCH_USERS_FAIL', () => {
			const error = {
				error : 'something went wrong'
			};
			const expected = {
				type : SEARCH_USERS_FAIL,
				error
			};

			expect( searchUsersFail( error ) ).toEqual( expected );
		} );
	} );

} )
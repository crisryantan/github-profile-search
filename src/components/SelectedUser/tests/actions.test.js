import {
	searchingUser,
	searchUserSuccess,
	searchUserFail
} from '../actions';

import {
	SEARCHING_USER,
	SEARCH_USER_SUCCESS,
	SEARCH_USER_FAIL,
} from '../constants';

describe( 'SelectedUser Actions', () => {
	describe( 'searchingUser', () => {
		it( 'has a type of SEARCHING_USER', () => {
			const expected = {
				type : SEARCHING_USER
			};

			expect( searchingUser() ).toEqual( expected );
		} );
	} );

	describe( 'searchUserSuccess', () => {
		it( 'has a type of SEARCH_USER_SUCCESS', () => {
			const user = { id : 1 };
			const expected = {
				type : SEARCH_USER_SUCCESS,
				user
			};

			expect( searchUserSuccess( user ) ).toEqual( expected );
		} );
	} );

	describe( 'searchUserFail', () => {
		it( 'has a type of SEARCH_USER_FAIL', () => {
			const error = {
				error : 'something went wrong'
			};
			const expected = {
				type : SEARCH_USER_FAIL,
				error
			};

			expect( searchUserFail( error ) ).toEqual( expected );
		} );
	} );

} )
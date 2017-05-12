import { fromJS } from 'immutable';
import searchUsersReducer from '../reducer';
import {
	searchingUsers,
	searchUsersSuccess,
	searchUsersFail
} from '../actions';

describe( 'searchUsersReducer', () => {
	let state;

	beforeEach( () => {
		state = fromJS( {
			searching : false,
			succeeded : false,
			failed    : false,
			users     : []
		} );
	} );

	it( 'should return the initial state', () => {
		const expectedResult = state;
		expect( searchUsersReducer( undefined, {} ).toJS() ).toEqual( expectedResult.toJS() );
	} );

	it( 'should handle the searchingUsers action correctly', () => {
		const expectedResult = fromJS( {
			searching : true,
			succeeded : false,
			failed    : false,
			users     : []
		} );
		expect( searchUsersReducer( state, searchingUsers() ).toJS() ).toEqual( expectedResult.toJS() );
	} );

	it( 'should handle the searchUsersSuccess action correctly', () => {
		const users = [ { id : 1 }, { id: 2 } ];
		const expectedResult = fromJS( {
			searching : false,
			succeeded : true,
			failed    : false,
			users
		} );
		expect( searchUsersReducer( state, searchUsersSuccess( users ) ).toJS() ).toEqual( expectedResult.toJS() );
	} );

	it( 'should handle the searchUsersFail action correctly', () => {
		const expectedResult = fromJS( {
			searching : false,
			succeeded : false,
			failed    : true,
			users     : []
		} );
		expect( searchUsersReducer( state, searchUsersFail() ).toJS() ).toEqual( expectedResult.toJS() );
	} );

} );

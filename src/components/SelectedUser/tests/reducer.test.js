import { fromJS } from 'immutable';
import searchProfileReducer from '../reducer';
import {
	searchingUser,
	searchUserSuccess,
	searchUserFail
} from '../actions';

describe( 'searchProfileReducer', () => {
	let state;

	beforeEach( () => {
		state = fromJS( {
			searching : false,
			succeeded : false,
			failed    : false,
			user     : {}
		} );
	} );

	it( 'should return the initial state', () => {
		const expectedResult = state;
		expect( searchProfileReducer( undefined, {} ).toJS() ).toEqual( expectedResult.toJS() );
	} );

	it( 'should handle the searchingUser action correctly', () => {
		const expectedResult = fromJS( {
			searching : true,
			succeeded : false,
			failed    : false,
			user : {}
		} );
		expect( searchProfileReducer( state, searchingUser() ).toJS() ).toEqual( expectedResult.toJS() );
	} );

	it( 'should handle the searchUserSuccess action correctly', () => {
		const user = { id : 1 };
		const expectedResult = fromJS( {
			searching : false,
			succeeded : true,
			failed    : false,
			user
		} );
		expect( searchProfileReducer( state, searchUserSuccess( user ) ).toJS() ).toEqual( expectedResult.toJS() );
	} );

	it( 'should handle the searchUserFail action correctly', () => {
		const expectedResult = fromJS( {
			searching : false,
			succeeded : false,
			failed    : true,
			user     : {}
		} );
		expect( searchProfileReducer( state, searchUserFail() ).toJS() ).toEqual( expectedResult.toJS() );
	} );

} );

import { fromJS } from 'immutable';
import { 
	SEARCHING_USERS,
	SEARCH_USERS_SUCCESS,
	SEARCH_USERS_FAIL
} from './constants';

const initialState = fromJS( {
	searching : false,
	succeeded : false,
	failed    : false,
	users     : []
} );

function searchUsersReducer ( state = initialState, action ) {
	switch ( action.type ) {
		case SEARCHING_USERS :
			return state
				.set( 'searching', true )
				.set( 'succeeded', false )
				.set( 'failed', false)
				.set( 'users', [] );

		case SEARCH_USERS_SUCCESS :
			return state
				.set( 'searching', false )
				.set( 'succeeded', true )
				.set( 'failed', false)
				.set( 'users', action.users );
		case SEARCH_USERS_FAIL :
			return state
				.set( 'searching', false )
				.set( 'succeeded', false )
				.set( 'failed', true )
				.set( 'users', [] );
		default :
			return state;
	}
}

export default searchUsersReducer;
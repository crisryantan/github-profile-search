import { fromJS } from 'immutable';
import { 
	SEARCHING_USER,
	SEARCH_USER_SUCCESS,
	SEARCH_USER_FAIL
} from './constants';

const initialState = fromJS( {
	searching : false,
	succeeded : false,
	failed    : false,
	user      : {}
} );

function searchProfileReducer ( state = initialState, action ) {
	switch ( action.type ) {
		case SEARCHING_USER :
			return state
				.set( 'searching', true )
				.set( 'succeeded', false )
				.set( 'failed', false)
				.set( 'user', {} );

		case SEARCH_USER_SUCCESS :
			return state
				.set( 'searching', false )
				.set( 'succeeded', true )
				.set( 'failed', false)
				.set( 'user', action.user );
		case SEARCH_USER_FAIL :
			return state
				.set( 'searching', false )
				.set( 'succeeded', false )
				.set( 'failed', true )
				.set( 'user', {} );
		default :
			return state;
	}
}

export default searchProfileReducer;
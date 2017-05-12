import { combineReducers } from 'redux-immutable';
import searchUsersReducer from '../containers/SearchList/reducer';
import searchProfileReducer from '../containers/SelectedUser/reducer';

const rootReducer = combineReducers( {
	searchUsersReducer,
	searchProfileReducer
} );

export default rootReducer;
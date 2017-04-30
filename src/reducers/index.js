import { combineReducers } from 'redux-immutable';
import searchUsersReducer from '../components/SearchList/reducer';
import searchProfileReducer from '../components/SelectedUser/reducer';

const rootReducer = combineReducers( {
	searchUsersReducer,
	searchProfileReducer
} );

export default rootReducer;
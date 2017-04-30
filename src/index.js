import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, browserHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import SearchList from './components/SearchList';
import SelectedUser from './components/SelectedUser';

import reducers from './reducers/index';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const createStoreWithMiddleware = applyMiddleware( reduxThunk )( createStore );
const store                     = createStoreWithMiddleware( reducers );

ReactDOM.render(
	<Provider store={store}>
		<MuiThemeProvider>
			<Router history={browserHistory}>
				<Route path="/" component={App}>
					<Route path="search/:id" component={SearchList} />
					<Route path=":id" component={SelectedUser} />
				</Route>
			</Router>
		</MuiThemeProvider>
	</Provider>
	, document.querySelector( '#root' ) );

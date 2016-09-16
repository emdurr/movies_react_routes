import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Movies from './components/Movies';
import About from './components/About';
import Movie from './components/Movie';
import Edit from './components/Edit';
import NoMatch from './components/NoMatch';

export default (
  <Route>
    <Route path="/" component={App}>
    	<IndexRoute component={Movies} />
    	<Route path='/about' component={About} />
    	<Route path='/movies/:id' component={Movie} />
    	<Route path='/movies/:id/edit' component={Edit} /> 
	    <Route path="*" status={404} component={NoMatch}/>
	  </Route>
  </Route>
)


import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/header/index.js';
import Home from './pages/home';
import Detail from './pages/detail/loadable.js';
import Login from './pages/login';
import Writer from './pages/writer';
import store from './store';

class App extends Component {
  render() {
    return (
    	<Provider store={store}>
    		<Fragment>
    			<BrowserRouter>
    				<Fragment>
                        <Header/>
    					<Route path='/' exact component={Home} />
                        <Route path='/login' exact component={Login} />
                        <Route path='/writer' exact component={Writer} />
    				    <Route path='/detail/:id' exact component={Detail} />
    				</Fragment>
    			</BrowserRouter>
    		</Fragment>
    	</Provider>
    );
  }
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
// import Test from './pages/test';
import Home from './pages/home';
import About from './pages/about';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';

const NotFound = () => <h1>404 Not Found</h1>;

const App = () => (
	<Router>
		<div>
			<Switch>
				<Route path='/' exact component={Home} />
				<Route path='/aboutme' exact component={About} />
				<Route path='/portfolio' exact component={Portfolio} />
				<Route path='/contact' exact component={Contact} />
				<Route component={NotFound} />
			</Switch>
		</div>
	</Router>
);

export default App;

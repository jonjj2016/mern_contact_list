import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import NavBar from './components/layout/NavBar';
import './App.css';

const App = () => {
	return (
		<Router>
			<Fragment className="App">
				<NavBar />
				<div className="container">
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/about" exact component={About} />
					</Switch>
				</div>
			</Fragment>
		</Router>
	);
};

export default App;

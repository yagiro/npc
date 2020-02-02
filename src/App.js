import React, { Component } from 'react';
import './App.css';
import CategoryPage from './pages/category/categoryPage';
import { modelsAdapter } from './pages/category/categoryPageHelper';
import { mockData } from './config/mockData';

const models = modelsAdapter(mockData.categoryPage.models);

class App extends Component {

	render() {
		return (
			<div className="App">
				<CategoryPage models={ models } />
			</div>
		);
	}
}

export default App;


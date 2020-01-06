import React, { Component } from 'react';
import './App.css';
import CollapseWrapper from './common/CollapseWrapper';

class App extends Component {
	
	state = {
		
	};
	
	render() {
		return (
			<div className="App">
				<CollapseWrapper imgSource={'https://h50003.www5.hpe.com/digmedialib/prodimg/lowres/i00017951.png'} title="High End Enterprise">
					<h1>TEST</h1>
					<h1>TEST</h1>
					<h1>TEST</h1>
					<h1>TEST</h1>
					<h1>TEST</h1>
					<h1>TEST</h1>
					<h1>TEST</h1>
					<h1>TEST</h1>
				</CollapseWrapper>
			</div>
		);
	}
}

export default App;

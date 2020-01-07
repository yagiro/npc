import React, { Component } from 'react';
import './App.css';
import CollapseWrapper from './common/CollapseWrapper';
import ItemCardContainer from './common/itemCard/ItemCardContainer';

class App extends Component {
	
	state = {
		
	};
	
	render() {
		return (
			<div className="App">
				<CollapseWrapper imgSource={'https://h50003.www5.hpe.com/digmedialib/prodimg/lowres/i00017951.png'} title="High End Enterprise">
					<ItemCardContainer/>
					<ItemCardContainer/>
					<ItemCardContainer/>
				</CollapseWrapper>
				<CollapseWrapper imgSource={'https://h50003.www5.hpe.com/digmedialib/prodimg/lowres/i00017951.png'} title="High End Enterprise">
					<ItemCardContainer/>
					<ItemCardContainer/>
					<ItemCardContainer/>
				</CollapseWrapper>
			</div>
		);
	}
}

export default App;

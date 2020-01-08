import React, { Component } from 'react';
import './App.css';
import CollapseWrapper from './common/CollapseWrapper';
import ItemCard from './common/itemCard/ItemCard';
import { cardTypes } from './config/constants';

class App extends Component {
	
	state = {
		
	};
	
	render() {
		return (
			<div className="App">
				<CollapseWrapper imgSource={'https://h50003.www5.hpe.com/digmedialib/prodimg/lowres/i00017951.png'} title="High End Enterprise">
					<ItemCard cardType={cardTypes.mobileAndEndpoint}/>
					<ItemCard cardType={cardTypes.management}/>
					<ItemCard cardType={cardTypes.cloudGuard}/>
					<ItemCard cardType={cardTypes.smallBusinesses}/>
					<ItemCard cardType={cardTypes.network}/>
				</CollapseWrapper>
			</div>
		);
	}
}

export default App;

import React, { Component } from 'react';
import './App.css';
import CollapseWrapper from './common/CollapseWrapper';
import ItemCardContainer from './common/itemCard/ItemCardContainer';
import { cardTypes } from './config/constants';

class App extends Component {
	
	state = {
		
	};
	
	render() {
		return (
			<div className="App">
				<CollapseWrapper imgSource={'https://h50003.www5.hpe.com/digmedialib/prodimg/lowres/i00017951.png'} title="High End Enterprise">
					<ItemCardContainer cardType={cardTypes.mobileAndEndpoint}/>
					<ItemCardContainer cardType={cardTypes.management}/>
					<ItemCardContainer cardType={cardTypes.cloudGuard}/>
					<ItemCardContainer cardType={cardTypes.smallBusinesses}/>
					<ItemCardContainer cardType={cardTypes.network}/>
				</CollapseWrapper>
			</div>
		);
	}
}

export default App;

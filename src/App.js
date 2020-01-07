import React, { Component } from 'react';
import './App.css';
import CollapseWrapper from './common/CollapseWrapper';
import ItemCardContainer from './common/itemCard/ItemCardContainer';
import {
	CARD_ITEM_TYPE_CLOUD_GUARD, CARD_ITEM_TYPE_MANAGEMENT, CARD_ITEM_TYPE_MOBILE_AND_ENDPOINT,
	CARD_ITEM_TYPE_SMALL_BUSINESSES,
	CARD_ITEM_TYPE_NETWORK
} from './config/constants';

class App extends Component {
	
	state = {
		
	};
	
	render() {
		return (
			<div className="App">
				<CollapseWrapper imgSource={'https://h50003.www5.hpe.com/digmedialib/prodimg/lowres/i00017951.png'} title="High End Enterprise">
					<ItemCardContainer cardType={CARD_ITEM_TYPE_CLOUD_GUARD}/>
					<ItemCardContainer cardType={CARD_ITEM_TYPE_NETWORK}/>
					<ItemCardContainer cardType={CARD_ITEM_TYPE_SMALL_BUSINESSES}/>
					<ItemCardContainer cardType={CARD_ITEM_TYPE_MOBILE_AND_ENDPOINT}/>
					<ItemCardContainer cardType={CARD_ITEM_TYPE_MANAGEMENT}/>
				</CollapseWrapper>
			</div>
		);
	}
}

export default App;

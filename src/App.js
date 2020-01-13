import React, { Component } from 'react';
import './App.css';
import CollapseWrapper from './components/CollapseWrapper';
import ItemCard from './components/itemCard/ItemCard';
import { cardTypes } from './config/constants';
import ComparePanel from './components/comparePanel/ComparePanel';
import NumberSelector from './components/numberSelector/NumberSelector';
import { mockData } from './config/mockData';

// MOCK DATA FOR TESTING PROPS IN CARD ITEMS
class App extends Component {

	render() {
		return (
			<div className="App">
				<NumberSelector data={ mockData.paginationButtons } onChange={ (value) => console.log(value) }/>
				<CollapseWrapper imgSource={ 'https://h50003.www5.hpe.com/digmedialib/prodimg/lowres/i00017951.png' } title="High End Enterprise">
					<div className='max-width-850px'>
						<ItemCard cardType={cardTypes.smallBusinesses} data={{ ...mockData[cardTypes.smallBusinesses] }}/>
						<ItemCard cardType={cardTypes.mobileAndEndpoint} data={{ ...mockData[cardTypes.mobileAndEndpoint] }}/>
						<ItemCard cardType={cardTypes.management} data={{ ...mockData[cardTypes.management] }}/>
					</div>
					<div className='max-width-1050px'>
						<ItemCard cardType={cardTypes.cloudGuard} data={{ ...mockData[cardTypes.cloudGuard] }}/>
						<ItemCard cardType={cardTypes.network} data={{ ...mockData[cardTypes.network] }}/>
					</div>
				</CollapseWrapper>
				<ComparePanel cards={ mockData.compareList } />
			</div>
		);
	}
}

export default App;


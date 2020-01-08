import React, { Component } from 'react';
import './App.css';
import CollapseWrapper from './common/CollapseWrapper';
import ItemCard from './common/itemCard/ItemCard';
import { cardTypes } from './config/constants';

const mockDataForMobileAndEndpointCard = {
	title: 'Unified Endpoint Security',
	additionalLabel: 'Advanced',
	description: 'Check Point Unified Endpoint Security Advanced offers comprehensive, enterprise-grade endpoint and mobile device security that protects PCs, Mac, iOS and Android devices against known, unknown and Zero-day threats.',
	includedPackages: [
		{	id: 1, feature: 'SandBlast Agent Advanced.' },
		{	id: 2, feature: 'SandBlast Mobile Per Device' },
		{	id: 3, feature: 'Two 6500 gateways' },
		{	id: 4, feature: '450 Gbps using 52 gateways' },
	],
	price: 59,
	additionalText: '1 PC/YEAR & 1 Mobile/Year'
};

class App extends Component {

	
	render() {
		return (
			<div className="App">
				<CollapseWrapper imgSource={'https://h50003.www5.hpe.com/digmedialib/prodimg/lowres/i00017951.png'} title="High End Enterprise">
					<ItemCard cardType={cardTypes.mobileAndEndpoint} data={{ ...mockDataForMobileAndEndpointCard }}/>
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

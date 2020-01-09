import React, { Component } from 'react';
import './App.css';
import CollapseWrapper from './common/CollapseWrapper';
import ItemCard from './common/itemCard/ItemCard';
import { cardTypes } from './config/constants';

const mockData = {

	// MOCK FOR MOBILE AND ENDPOINT CARD
	[cardTypes.mobileAndEndpoint]: {
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
		additionalText: '1 PC/YEAR & 1 Mobile/Year' },

	// MOCK FOR MANAGEMENT CARD
	[cardTypes.management]: {
		numberOfDomainsOptions: [
			{ value: '100', label: '100 Domainas', price: '$200,000' },
			{ value: '50', label: '50 Domainas', price: '$185,000' },
			{ value: '25', label: '25 Domainas', price: '$155,000' },
			{ value: '10', label: '10 Domainas', price: '$121,000' }
		]
	},

	// MOCK FOR CLOUD GUARD CARD
	[cardTypes.cloudGuard]: {
		price: 1500,
		additionalText: '1 PC/YEAR & 1 Mobile/Year' },

	// MOCK FOR SMALL BUSINESSES CARD
	[cardTypes.smallBusinesses]: {
		price: 999,
		title: '910 Next Generation Threat Prevention',
		description: 'The Check Point 910 security gateway is an all-inclusive security appliance for medium size businesses. The 910 Appliance offers enterprise-class Check Point security, with double connection capacity in a rack mount form factor.',
		specificationsTitles: {
			ports: '18x1GbE',
			supportsExternal: '3G/4G/LTE',
			formFactor: 'Desktop',
			wireless: true
		}
	}
};

class App extends Component {

	render() {
		return (
			<div className="App">
				<CollapseWrapper imgSource={ 'https://h50003.www5.hpe.com/digmedialib/prodimg/lowres/i00017951.png' } title="High End Enterprise">
					<ItemCard cardType={ cardTypes.smallBusinesses } data={{ ...mockData[cardTypes.smallBusinesses] }}/>
					<ItemCard cardType={ cardTypes.mobileAndEndpoint } data={{ ...mockData[cardTypes.mobileAndEndpoint] }}/>
					<ItemCard cardType={ cardTypes.management } data={{ ...mockData[cardTypes.management] }}/>
					<ItemCard cardType={ cardTypes.cloudGuard } data={{ ...mockData[cardTypes.cloudGuard] }}/>
					<ItemCard cardType={ cardTypes.network }/>
				</CollapseWrapper>
			</div>
		);
	}
}

export default App;

import React, { Component } from 'react';
import './App.css';
import CollapseWrapper from './components/generic/CollapseWrapper';
import ItemCard from './components/common/itemCard/ItemCard';
import { cardTypes } from './config/constants';
import CompareModelsPanel from './components/common/comparePanel/CompareModelsPanel';
import NumberSelector from './components/common/numberSelector/NumberSelector';
import { mockData } from './config/mockData';
import MockFiltersContainer from './components/common/filtersPanel/MockFiltersContainer';
import DumbTabNavigation from './components/common/tabNavigation/DumbTabNavigation';
import ComparePanelCtrlTmp from './components/common/comparePanel/ComparePanetCtrlTmp';
import TabNavigation from './components/common/tabNavigation/TabNavigation';
import SolutionPackage from './components/common/solutionPackage/SolutionPackage';
import Homepage from './components/homepage/Homepage';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			showCompare: false,
			compareModels: [],
			selectedMenuItem: 1,
			showHomePage: false
		};
	}

	render() {
		const { showCompare, models, selectedMenuItem, showHomePage } = this.state;

		if(showHomePage) {
			return (
				<div className="App">
					<Homepage/>
				</div>
			);
		}

		return (
			<div className="App">
				<div style={{ display: 'flex' }}>
					{
						mockData.solutionPackage.map((item, i) =>
							<SolutionPackage
								key={ i }
								type={ item.type }
								subtitle={ item.subtitle }
								gbpsAmount={ item.gbpsAmount }
								price={ item.price }
								selected={ item.selected }
								onSelect={ () => console.log(i) }
								category={ item.category }
								attrs={ item.attributes }
								sku={ item.sku }
							/>
						)
					}<br/><br/>
				</div>

				<DumbTabNavigation
					options={ mockData.menuItems }
					activeTabId={ selectedMenuItem }
					onChange={ (value) => {
						console.log(value);
						this.setState({ selectedMenuItem: value });
					}}
				/>
				<br/>
				<TabNavigation
					options={ mockData.menuItems }
					defaultActiveTabId={ 2 }
					// activeTabId={ selectedMenuItem }
					onChange={(value) => {
						console.log(value);
						// this.setState({ selectedMenuItem: value })
					}}
				/>
				<ComparePanelCtrlTmp
					models={ models }
					show={ showCompare }
					onChange={ (models) => this.setState({ models: models })}
					onShow={ (show) => this.setState({ showCompare: show }) } />
				<NumberSelector data={ mockData.paginationButtons } onChange={ (value) => console.log(value) } value={ 1 }
				/>
				<MockFiltersContainer />
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
				<CompareModelsPanel
					isOpen={ showCompare }
					models={ models }
					onClose={ () => this.setState({ showCompare: false }) }
					onCompare={ (models) => console.log('Compare button clicked', models) }
					onModelRemove={ (model) => console.log('Model removing', model) }
					onChange={ (models) => this.setState({ models }) }
				/>
			</div>
		);
	}
}

export default App;


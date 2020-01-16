import React, { Component } from 'react';
import './App.css';
import CollapseWrapper from './components/CollapseWrapper';
import ItemCard from './components/itemCard/ItemCard';
import { cardTypes } from './config/constants';
import CompareModelsPanel from './components/comparePanel/CompareModelsPanel';
import NumberSelector from './components/numberSelector/NumberSelector';
import { mockData } from './config/mockData';
import Checkbox from './components/gereric/Checkbox';
import Menu from './components/Menu/Menu';
import ComparePanelCtrlTmp from './components/comparePanel/ComparePanetCtrlTmp';

// MOCK DATA FOR TESTING PROPS IN CARD ITEMS
class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			showCompare: false,
			compareModels: [],
			selectedMenuItem: 'product',
		};
	}

	render() {
		const { showCompare, models, selectedMenuItem } = this.state;

		return (
			<div className="App">

				<Menu
					options={ mockData.menuItems }
					value={ selectedMenuItem }
					onChange={ (value) => console.log(value) }
				/>
				<ComparePanelCtrlTmp
					models={ models }
					show={ showCompare }
					onChange={ (models) => this.setState({ models: models })}
					onShow={ (show) => this.setState({ showCompare: show }) }
				/>
				<NumberSelector
					data={ mockData.paginationButtons }
					onChange={ (value) => console.log(value) }
					value={ 1 }
				/>

				<Checkbox/>
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


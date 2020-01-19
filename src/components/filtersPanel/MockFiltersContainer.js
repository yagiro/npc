import React, { useState } from 'react';
import FiltersPanel from './FiltersPanel';
import { mockData } from '../../config/mockData';

const MockFiltersContainer = () => {

	const [ chosenFilters, setChosenFilters ] = useState({
		connectivity: {
			filterId: 'connectivity',
			value: new Set([
				{ value: '1gbe', label: '1 GbE', filterId: 'connectivity' } ,
				{ value: '10gbe', label: '10 GbE', filterId: 'connectivity' },
			]),
		},
		marketSegment: {
			filterId: 'marketSegment',
			value: new Set([
				{ value: 'branchOffice', label: 'Branch Office', filterId: 'marketSegment' } ,
				{ value: 'smallEnterprise', label: 'Small Enterprise', filterId: 'marketSegment'  },
			]),
		},
	});

	return (
		<div>
			<FiltersPanel
				title="Network Security"
				subTitle="Security Gateway Appliance & Solutions"
				subTitleBold="Displaying 400"
				filters={ mockData.networkSecurityFilters }
				chosenFilters={ chosenFilters }
				onChange={ setChosenFilters }/>
		</div>
	);
};

export default MockFiltersContainer;

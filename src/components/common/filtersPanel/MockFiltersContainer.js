import React, { useState } from 'react';
import FiltersPanel from './FiltersPanel';
import { mockData } from '../../../config/mockData';

const MockFiltersContainer = () => {

	const [ chosenFilters, setChosenFilters ] = useState({
		// marketSegment: {
		// 	filterId: 'marketSegment',
		// 	value: new Set([
		// 		'branchOffice', 'smallEnterprise'
		// 	]),
		// },
		// connectivity: {
		// 	filterId: 'connectivity',
		// 	value: new Set([
		// 		'1gbe', '10gbe'
		// 	]),
		// }
	});

	console.log(chosenFilters);

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

import React, { useState } from 'react';
import FiltersPanel from './FiltersPanel';
import { mockData } from '../../config/mockData';

const MockFiltersContainer = () => {

	const [ chosenFilters, setChosenFilters ] = useState([
		// { value: '15gbps', label: '1-5 Gbps' },
		// { value: '3u', label: '3 U' },
	]);
    
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

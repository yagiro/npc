import React, { useState } from 'react';
import { mockData } from '../../../config/mockData';
import PopperList from './PopperList';
import Image from '../Image';
import menu from '../../../assets/popperList/menu@2x.png';
import Span from '../Span';
import { colors } from '../../../config/constants';

const MockContainerPopperList = () => {

	const [ selectedValue, setSelectedValue ] = useState(null);
	
	return (
		<div>
			<PopperList 
				options={ mockData.popperListOptions } 
				value={ selectedValue } 
				onChange={ setSelectedValue }>
				<>
					<Image path={ menu } width="15px" height="15px"/>
					<Span size="14px" color={ colors.textLightGray }>Our Solutions</Span>
				</>
			</PopperList>
		</div>
	);
};

export default MockContainerPopperList;

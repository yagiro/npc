import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
const SelectTitle = styled.span`  
  text-align: center;
  color: #858991;
  font-size: 14px;
`;

const ManagementPriceSection = (props) => {

	const [value, setValue] = useState('200.000');
	const handleChange = useCallback((e) => {
		setValue(e.target.value);
	}, [setValue]);

	return (
		<div className="ManagementPriceSection-container">
			<div className='select-container'><SelectTitle>Number of Domain:</SelectTitle>
				<select value={value} onChange={handleChange}>
					<option value="200.000">100 Domaines 200.000$</option>
					<option value="300.000">300 Domaines 300.000$</option>
					<option value="400.000">400 Domaines 400.000$</option>
					<option value="500.000">500 Domaines 500.000$</option>
				</select></div>
			<div className="bottom-price-container">
				<span className="totalPrice-label">Total price: </span>
				<span className="price-text">{value}$</span>
			</div>
		</div>
	);
};

export default ManagementPriceSection;

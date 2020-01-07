import React, { useCallback, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;`;

const SelectContainer = styled.div`
  margin-top: 15px;`;

const BottomPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;`;

const SelectTitle = styled.span`  
  text-align: center;
  color: #858991;
  font-size: 14px;`;

const PriceText = styled.span`  
  font-size: 18px;`;

const PriceLabel = styled.span`  
  color: #6B6F81;
  font-size: 14px; `;

const ManagementPriceSection = (props) => {

	const [value, setValue] = useState('200.000');
	const handleChange = useCallback((e) => {
		setValue(e.target.value);
	}, [setValue]);

	return (
		<Container>
			<SelectContainer>
				<SelectTitle>Number of Domain:</SelectTitle>
				<select value={value} onChange={handleChange}>
					<option value="200.000">100 Domaines 200.000$</option>
					<option value="300.000">300 Domaines 300.000$</option>
					<option value="400.000">400 Domaines 400.000$</option>
					<option value="500.000">500 Domaines 500.000$</option>
				</select>
			</SelectContainer>
			<BottomPriceContainer>
				<PriceLabel>Total price: </PriceLabel>
				<PriceText>{value}$</PriceText>
			</BottomPriceContainer>
		</Container>
	);
};

export default ManagementPriceSection;

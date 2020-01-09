import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import Select from 'react-select';
import { colors } from '../../../config/constants';
import CommonPriceSection from './CommonPriceSection';
import PropTypes from 'prop-types';

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
  color: ${colors.textLightGray};
  font-size: 14px;`;

const PriceText = styled.span`  
  font-size: 18px;`;

const PriceLabel = styled.span`  
  color: #6B6F81;
  font-size: 14px; `;

//react-select option
const DomainWord = styled.span`  
  font-weight: bold;
 `;

const OptionContainer = styled.div`
  display: flex;
  font-size: 14px;
  align-items: center;
  justify-content: space-between;`;

const OptionPrice = styled.div`
  font-size: 12px;
  color: #999999;
  text-align: right;
  margin-left: 35px;`;


const ManagementPriceSection = ({ numberOfDomainsOptions }) => {

	const [ option, setOption ] = useState(numberOfDomainsOptions[0]);
	const handleChange = useCallback((option) => {
		setOption(option);
	}, [ setOption ]);


	//option render function for domain select
	const formatOptionLabel = ({ value, label, price }) => (
		<OptionContainer>
			<div>
				<span>{ value }</span>
				<DomainWord> Domains</DomainWord>
			</div>
			<OptionPrice>
				{ price }
			</OptionPrice>
		</OptionContainer>
	);

	return (
		<Container>
			<SelectContainer>
				<SelectTitle>Number of Domain:</SelectTitle>
				<Select
					defaultValue={ numberOfDomainsOptions[0] }
					formatOptionLabel={ formatOptionLabel }
					options={ numberOfDomainsOptions }
					value={ option }
					onChange={ handleChange }
					components={{
						IndicatorSeparator: () => null
					}}
					theme={ theme => ({
						...theme,
						borderRadius: 3,
						colors: {
							...theme.colors,
							primary25: '#E856851A',
							primary: 'rgba(236,64,122,0.5)',
						},
					}) }
				/>
			</SelectContainer>
			<BottomPriceContainer>
				<PriceLabel>Total price: </PriceLabel>
				<PriceText>{ option ? option.price : 0 }$</PriceText>
			</BottomPriceContainer>
		</Container>
	);
};

CommonPriceSection.propTypes = {
	numberOfDomainsOptions: PropTypes.array,
};

export default ManagementPriceSection;

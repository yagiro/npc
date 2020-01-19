import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import NumberOption from './NumberOption';

import { classes as numberOptionClasses } from './NumberOption';

const Container = styled.div`  
	display: inline-flex;
	padding: 4px 0;
	> .${ numberOptionClasses.container }:not(:first-child) {
		margin-left: 5px;
	}
`;

const NumberSelector = (props) => {
	const { data, onChange, value=null } = props;
	const [ currentValue, setCurrentValue ] = useState(value);

	const handleClick = (value) => {
		setCurrentValue(value);
		onChange(value);
	};

	return (
		<Container>
			{ data.map((value, index) =>
				<NumberOption
					key={ index }
					value={ value }
					selected={ value === currentValue }
					onClick={ handleClick }
				/>) }
		</Container>
	);
};

NumberSelector.propTypes = {
	data: PropTypes.arrayOf(PropTypes.number).isRequired,
	value: PropTypes.number,
	onChange: PropTypes.func.isRequired,
};

export default NumberSelector;

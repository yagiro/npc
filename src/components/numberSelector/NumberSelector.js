import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NumberOption from './NumberOption';

import { classes as numberOptionClasses } from './NumberOption';

const Container = styled.div`  
	display: inline-flex;
	padding: 4px 0;
	> .${ numberOptionClasses.container }:not(:first-child) {
		margin-left 5px;
	}
`;

const NumberSelector = (props) => {
	const { data, onChange } = props;
	const [ currentValue, setCurrentValue ] = useState(1);

	const handleClick = (value) => {
		setCurrentValue(value);
		onChange(value);
	};

	return (
		<Container>
			{ data.map((item, index) => <NumberOption key={ index }
				value={ item.value }
				selected={ item.value === currentValue }
				onClick={ (value) => handleClick(value, item.onChange) } />) }
		</Container>
	);
};

NumberSelector.propTypes = {
	data: PropTypes.arrayOf(PropTypes.shape({
		value: PropTypes.number.isRequired,
	})).isRequired,
	onChange: PropTypes.func.isRequired,
};

export default NumberSelector;

/*
NumberSelector
	+ rename Paginator to NumberSelector
	+ receive onChange prop: (newValue) => void

NumberOption
	+ create a component - NumberOption
	+ use div instead of a
	+ directly instead of renderButtons
	+ instead of className, pase it 'selected' prop
	+ rename 'text' prop to 'value'
	+ take the CSS into it's own Container element (in a separate file)
	+ add class name: 'cp-number-option'
	+ transition only background-color and color

	CSS:
		+ background: colors.white
		+ box-shadow:.... colors.boxShadowGrey
		+ todo: maybe change rem to px (width & height)

+ move mockData to separate file (regular js file)
 */

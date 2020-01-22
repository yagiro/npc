import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Checkbox from '../../generic/Checkbox';
import { colors } from '../../../config/constants';
import { classes as checkboxClasses } from '../../generic/Checkbox';

const Container = styled.div`
	width: 235px;
	margin: 10px 0;
	
	.${ checkboxClasses.container } {
		color: ${ colors.textGrey };
	}
`;

const renderFlags = (items, onChange) => {
	return items.map(item => {
		const { id, label, value } = item;

		return (
			<div key={ id }>
				<Checkbox
					label={ label }
					onChange={ () => onChange(id, !value) }
					isChecked={ value }
				/>
			</div>
		);
	});
};

const SolutionSummaryFlags = (props) => {
	const { items, onChange } = props;
	return (
		<Container>
			{ renderFlags(items, onChange) }
		</Container>
	);
};

SolutionSummaryFlags.propTypes = {
	items: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number,
		label: PropTypes.string,
	})),
	onChange: PropTypes.func,
};

export default SolutionSummaryFlags;
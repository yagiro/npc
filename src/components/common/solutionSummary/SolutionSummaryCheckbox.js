import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Checkbox from '../../generic/Checkbox';
import { colors } from '../../../config/constants';

const Container = styled.div`
	width: 235px;
	
`;

const useChecboxes = (items, onClick) => {
	const [ checked, setChecked ] = useState(false);
	const handleChange = useCallback((item) => {
		setChecked(item.value);
		onClick(item);
	}, [ onClick ]);

	return items.map(item => (
		<div key={ item.id }>
			<Checkbox
				label={ item.label }
				onChange={ handleChange }
				isChecked={ checked }
				color={ colors.textGrey }
			/>
		</div>
	));
};

const SolutionSummaryCheckbox = (props) => {
	const { items, onCheck } = props;
	return (
		<Container>
			{ useChecboxes(items, onCheck) }
		</Container>
	);
};

SolutionSummaryCheckbox.defaultProps = {

};

SolutionSummaryCheckbox.propTypes = {
	items: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number,
		label: PropTypes.string,
	})),
	onCheck: PropTypes.func,
};

export default SolutionSummaryCheckbox;
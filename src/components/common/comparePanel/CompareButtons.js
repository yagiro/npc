import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { createClassName } from '../../../lib/classNameHelper';
import Button from '../../generic/Button';
import { buttonStyleTypes } from '../../generic/Button';

const classPrefix = 'compare-buttons';
export const classes = {
	container: createClassName(classPrefix, 'container'),
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`;

const CompareButtons = (props) => {
	const { onClose, handleCompare, width, height } = props;

	return (
		<Container>
			<Button
				styleType={ buttonStyleTypes.fill }
				onClick={ handleCompare }
				width={ width }
				height={ height }
			>
                Compare
			</Button>
			<Button
				styleType={ buttonStyleTypes.empty }
				onClick={ onClose }
				width={ width }
				height={ height }
			>
                Close
			</Button>
		</Container>
	);
};

CompareButtons.propTypes = {
	onCompare: PropTypes.func,
	onClose: PropTypes.func,
	width: PropTypes.string,
	height: PropTypes.string,
};

export default CompareButtons;


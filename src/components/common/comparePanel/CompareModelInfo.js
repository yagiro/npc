import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { createClassName } from '../../../lib/classNameHelper';
import Paragraph, { paragraphColors } from '../../generic/Paragraph';
import { formatCurrency } from '../../../lib/formatters';

const classPrefix = 'compare-buttons';
export const classes = {
	container: createClassName(classPrefix, 'container'),
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-right: 11px;
`;

const CompareModelInfo = (props) => {
	const { title, price } = props;

	return (
		<Container>
			<Paragraph color={ paragraphColors.dark }>{ title }</Paragraph>
			<Paragraph color={ paragraphColors.black } weight="bold">
                ${ formatCurrency(price) }
			</Paragraph>
		</Container>
	);
};

CompareModelInfo.propTypes = {
	title: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
};

export default CompareModelInfo;

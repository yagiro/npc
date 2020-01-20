import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Paragraph from '../../generic/Paragraph';
import CompareHeader from './CompareHeader';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 11px 0;
`;

const CompareTitle = ({ maxCount }) => {
	return (
		<Container>
			<Paragraph>Select Up To { maxCount } Solutions</Paragraph>
			<CompareHeader>To Compare</CompareHeader>
		</Container>
	);
};

CompareTitle.defaultProps = {
	maxCount: 0
};

CompareTitle.propTypes = {
	maxCount: PropTypes.number
};

export default CompareTitle;

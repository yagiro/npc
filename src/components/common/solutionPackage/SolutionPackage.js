import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { colors } from '../../../config/constants';
import SolutionPackageHead from './SolutionPackageHead';
import SolutionPackageIncluded from './SolutionPackageIncluded';
import SolutionPackageCards from './SolutionPackageCards';
import SolutionPackageStorage from './SolutionPackageStorage';
import SolutionPackageInfo from './SolutionPackageInfo';
import SolutionPackagePrice from './SolutionPackagePrice';
import SolutionPackageSelect from './SolutionPackageSelect';

const Container = styled.div`
	margin: 5px;
	border: 1px solid red;
	width: 266px;
	min-height: 688px;
	box-shadow: 0 2px 4px #00000029;
	border-radius: 12px 12px 0 0;
	overflow: hidden;
	background-color: ${ colors.background };
	display: inline-block;
`;

const SolutionPackage = (props) => {
	const { type, gbpsAmount, subtitle } = props;
	return (
		<Container>
			<SolutionPackageHead
				type={ type }
				subtitle={ subtitle }
				gbpsAmount={ gbpsAmount }
			/>
			<SolutionPackageIncluded

			/>
			<SolutionPackageCards

			/>
			<SolutionPackageStorage

			/>
			<SolutionPackageInfo

			/>
			<SolutionPackagePrice

			/>
			<SolutionPackageSelect
			/>
		</Container>
	);
};

SolutionPackage.propTypes = {
	type: PropTypes.string.isRequired,
	subtitle: PropTypes.string,
	gbpsAmount: PropTypes.number,
};

export default SolutionPackage;

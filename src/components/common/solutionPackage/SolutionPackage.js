import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors, solutionPackageTypes } from '../../../config/constants';
import SolutionPackageHead from './SolutionPackageHead';
import SolutionPackageIncluded from './SolutionPackageIncluded';
import SolutionPackageCards from './SolutionPackageCards';
import SolutionPackageStorage from './SolutionPackageStorage';
import SolutionPackageInfo from './SolutionPackageInfo';
import SolutionPackagePrice from './SolutionPackagePrice';
import SolutionPackageSelect from './SolutionPackageSelect';
import { strObjToArray } from '../../../lib/utils';

const Container = styled.div`
	margin: 5px;
	border: 1px solid red;
	width: 266px;
	min-height: 688px;
	background: #FFFFFF 0% 0% no-repeat padding-box;
	box-shadow: 0px 2px 4px #00000029;
	border-radius: 12px 12px 0px 0px;
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
	type: PropTypes.oneOf(strObjToArray(solutionPackageTypes)).isRequired,
	subtitle: PropTypes.string,
	gbpsAmount: PropTypes.number,
};

export default SolutionPackage;

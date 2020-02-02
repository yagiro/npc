import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ReactSVG } from 'react-svg';

import SolutionPackageHeadContent from './SolutionPackageHeadContent';
import { buildAssetAbsolutePath } from '../../../lib/assetsHelper';
import { createClassName } from '../../../lib/classNameHelper';
import { solutionPackageSettings } from './SolutionPackageHelper';

const flashImage = buildAssetAbsolutePath('/images/flash.svg');
const classPrefix = 'solution-package-head';
export const classes = {
	images: createClassName(classPrefix, 'images'),
};

const Container = styled.div`
	height: 197px;
	background-image: linear-gradient(180deg, 
		${ props => solutionPackageSettings[props.type].gradientColors[0] } 0%,
		${ props => solutionPackageSettings[props.type].gradientColors[1] } 100%);
	position: relative;
		
	.${ classes.images } {
		display: flex;
		justify-content: flex-end;
		margin: 0 18px;
		
		> * {
			margin-left: 14px;
			
			svg {
				height: 65px;
				width: auto;
			}
		}
	}
`;

const renderFlashes = (type) => {
	const arr = Array(solutionPackageSettings[type].flashCount).fill(null);
	return arr.map((item, i) =>
		<ReactSVG
			key={ i }
			src={ flashImage }
		/>);
};

const SolutionPackageHead = (props) => {
	const { type, ...otherProps } = props;
	return (
		<Container type={ type }>
			<div className={ classes.images }>
				{ renderFlashes(type) }
			</div>
			<SolutionPackageHeadContent
				type={ type }
				title={ solutionPackageSettings[props.type].title }
				{ ...otherProps }
			/>
		</Container>
	);
};

SolutionPackageHead.propTypes = {
	type: PropTypes.string,
	subtitle: PropTypes.string,
	gbpsAmount: PropTypes.number,
};

export default SolutionPackageHead;

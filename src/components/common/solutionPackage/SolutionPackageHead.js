import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ReactSVG } from 'react-svg';

import { buildAssetAbsolutePath } from '../../../lib/assetsHelper';
import { createClassName } from '../../../lib/classNameHelper';
import SolutionPackageHeadContent from './SolutionPackageHeadContent';
import { solutionPackageData } from './SolutionPackageData';

const classPrefix = 'solution-package-head';
export const classes = {
	images: createClassName(classPrefix, 'images'),
};

const Container = styled.div`
	height: 197px;
	background-image: linear-gradient(180deg, ${ props => solutionPackageData[props.type].head.gradientColors[0] } 0%, 
		${ props => solutionPackageData[props.type].head.gradientColors[1] } 100%);
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
	const arr = Array(solutionPackageData[type].head.flashCount).fill(null);
	return arr.map((item, i) =>
		<ReactSVG
			key={ i }
			src={ buildAssetAbsolutePath('/images/flash.svg') }
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
				title={ solutionPackageData[props.type].head.title }
				{...otherProps}
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

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { createClassName } from '../../../lib/classNameHelper';
import Image from '../../generic/Image';
import { buildAssetAbsolutePath } from '../../../lib/assetsHelper';

const arrowImage = buildAssetAbsolutePath('/images/solution-package/right-arrow.png');
const classPrefix = 'solution-package-arrow';
export const classes = {
	container: createClassName(classPrefix, 'container'),
};

const Container = styled.div`
	transform: ${ ({ isOpen }) => isOpen ? 'rotate(180deg)' : 'rotate(0deg)' };
	transition: transform .3s;
`;

const SolutionPackageCardArrow = (props) => {
	const { isOpen } = props;
	return (
		<Container isOpen={ isOpen }>
			<div className={ classes.arrow }>
				<Image path={ arrowImage } />
			</div>
		</Container>
	);
};

SolutionPackageCardArrow.propTypes = {
	isOpen: PropTypes.bool
};

export default SolutionPackageCardArrow;

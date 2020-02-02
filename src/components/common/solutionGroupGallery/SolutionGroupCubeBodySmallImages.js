import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { buildAssetAbsolutePath } from '../../../lib/assetsHelper';
import { createClassName } from '../../../lib/classNameHelper';
import { colors } from '../../../config/constants';
import { zIndexMap } from './solutionGroupCubeHelper';

const classPrefix = 'solution-group-additional-images';
export const classes = { 
	smallImage: createClassName(classPrefix, 'small-image'),
};

const Container = styled.div`
  display: flex;

  & .${ classes.smallImage }:not(:first-child) {
    margin-left: 30px;
  }
`;

const ImageContainer = styled.div`
      width: 88px;
      height: 55px;
      border: 1px solid ${ colors.cubeImagesBorder };
      border-radius: 10px;
      position: relative;
      filter: grayscale(100%);
      transition: all .3s;
      z-index: ${ zIndexMap.smallImage };

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-size: 100% auto;
        background-image: url(${ props => buildAssetAbsolutePath(props.iconPath) });
        background-position: center;
      }
`;

const renderImages = (iconPaths) => {
	return iconPaths.map((iconPath, i) => {
		return (
			<ImageContainer
				key={ i }
				className={ classes.smallImage }
				iconPath={ iconPath }
			/>
		);
	});
};

const SolutionGroupCubeBodySmallImages = ({ iconPaths }) => {
	return (
		<Container>
			{ renderImages(iconPaths) }
		</Container>
	);
};

SolutionGroupCubeBodySmallImages.propTypes = {
	iconPaths: PropTypes.arrayOf(PropTypes.string),
};

export default SolutionGroupCubeBodySmallImages;

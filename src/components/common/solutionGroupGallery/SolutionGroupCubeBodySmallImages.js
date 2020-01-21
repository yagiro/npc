import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { buildAssetAbsolutePath } from '../../../lib/assetsHelper';
import { createClassName } from '../../../lib/classNameHelper';
import { colors } from '../../../config/constants';

const classPrefix = 'solution-group-additional-images';
export const classes = { 
	smallImages: createClassName(classPrefix, 'small-image'),
};

const Container = styled.div`
  display: flex;

  & .${ classes.smallImages }:not(:first-child) {
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
      z-index: 15;

      ::before {
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
				className={ classes.smallImages }
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

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { buildAssetAbsolutePath } from '../../../lib/assetsHelper';
import { createClassName } from '../../../lib/classNameHelper';

const classPrefix = 'solution-group-additional-images';
export const classes = {
    cubeImages: createClassName(classPrefix, 'cube'),
};

const Container = styled.div`  
  display: flex;
  
  & .${ classes.cubeImages }:not(:first-child) {
    margin-left: 30px;
  }
`;

const ImageContainer = styled.div`  
      width: 88px;
      height: 55px;
      border: 1px solid #E1E3E5;
      border-radius: 10px;
      position: relative;
      filter: grayscale(100%);
      transition: all .3s;
      
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
      }
`;

const renderImages = (iconPaths) => {
    return iconPaths.map((iconPath, i) => {
        return (
            <ImageContainer
                key={ i }
                className={ classes.cubeImages }
                iconPath={ iconPath }
            />
        )
    })
};

const SolutionGroupCubeBodyAddImages = ({ iconPaths }) => {
    return (
        <Container>
            { renderImages(iconPaths) }
        </Container>
    );
};

SolutionGroupCubeBodyAddImages.propTypes = {
    iconPaths: PropTypes.arrayOf(PropTypes.string),
};

export default SolutionGroupCubeBodyAddImages;

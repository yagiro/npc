import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SolutionGroupCubeBody from './SolutionGroupCubeBody';
import SolutionGroupCubeBodyFooter from './SolutionGroupCubeFooter';
import { colors } from '../../../config/constants';
import { classes as footerClasses } from './SolutionGroupCubeFooter';
import { classes as additionalImagesClasses } from './SolutionGroupCubeBodyAddImages';
import { hexToRgb } from '../../../lib/utils';

const Container = styled.div`  
	width: 300px;
	height: 305px;
    box-shadow: 0px 2px 6px #0000001A;
    background-color: ${ colors.solutionCubeBg };
    border-radius: 8px 8px 8px 8px;
    position: relative;
    cursor: pointer;
    
    :hover .${ footerClasses.container } {
      background-color: rgba(${ hexToRgb(colors.checkPointPink) }, .9);
      height: 66%;
      justify-content: start;
      
      > .${ footerClasses.title } {
        color: ${ colors.whitesmoke };
        margin-top: 20px;
      }
      
      .${ footerClasses.list } {
        display: block;
      }
    }
    
    :hover .${ additionalImagesClasses.cubeImages } {
      filter: none;
    }
`;

const SolutionGroupCube = (props) => {
    const { onClick, mainImagePath, iconPaths, label, features, id } = props;
    const onChoose = useCallback(() => onClick(id), [ onClick ]);

    return (
        <Container onClick={ onChoose }>
            <SolutionGroupCubeBody
                mainImagePath={ mainImagePath }
                iconPaths={ iconPaths }
            />
            <SolutionGroupCubeBodyFooter
                features={ features }
                label={ label }
            />
        </Container>
    );
};

SolutionGroupCube.propTypes = {
    id: PropTypes.number,
    mainImagePath: PropTypes.string,
    iconPaths: PropTypes.arrayOf(PropTypes.string),
    label: PropTypes.string,
    features: PropTypes.arrayOf(PropTypes.string),
    onClick: PropTypes.func
};

export default SolutionGroupCube;

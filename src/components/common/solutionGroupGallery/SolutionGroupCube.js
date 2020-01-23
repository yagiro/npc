import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SolutionGroupCubeBody from './SolutionGroupCubeBody';
import SolutionGroupCubeFooter from './SolutionGroupCubeFooter';
import { hexToRgb } from '../../../lib/utils';
import { colors } from '../../../config/constants';
import { classes as footerClasses } from './SolutionGroupCubeFooter';
import { classes as additionalImagesClasses } from './SolutionGroupCubeBodySmallImages';
import { zIndexMap } from './solutionGroupCubeHelper';

const CUBE_HEIGHT_PX = 305;

const Container = styled.div`
	width: 300px;
	height: ${ props => props.height }px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, .1);
    background-color: ${ colors.solutionCubeBg };
    border-radius: 8px;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    transition: box-shadow .3s;
    
    &:hover {
		box-shadow: 0 10px 20px rgba(0, 0, 0, .1);
      
		.${ additionalImagesClasses.smallImage } {
			filter: none;
		}
		
		.${ footerClasses.container } {
			z-index: ${ zIndexMap.footerContainer };
			background-color: rgba(${ hexToRgb(colors.checkPointPink) }, .95);
			height: ${ props => Math.round(props.height * 0.66) }px;
			justify-content: flex-start;
			  
			& > .${ footerClasses.label } {
			color: ${ colors.background };
			font-weight: bold;
			margin-top: 25px;
		}
		  
		.${ footerClasses.list } {
			display: block;
		}
    }
`;

const SolutionGroupCube = (props) => {
	const { onClick, mainImagePath, iconPaths, title, features, id, backgroundImage } = props;
	const handleClick = useCallback(() => onClick(id), [ onClick, id ]);

	return (
		<Container onClick={ handleClick } height={ CUBE_HEIGHT_PX }>
			<SolutionGroupCubeBody
				cubeHeight={ CUBE_HEIGHT_PX }
				mainImagePath={ mainImagePath }
				iconPaths={ iconPaths }
				backgroundImage={ backgroundImage }
			/>
			<SolutionGroupCubeFooter
				cubeHeight={ CUBE_HEIGHT_PX }
				features={ features }
				title={ title }
			/>
		</Container>
	);
};

SolutionGroupCube.defaultProps = {
	iconPaths: [],
	onClick: (id) => console.log(`${ id } is clicked`),
};

SolutionGroupCube.propTypes = {
	id: PropTypes.any.isRequired,
	mainImagePath: PropTypes.string.isRequired,
	iconPaths: PropTypes.arrayOf(PropTypes.string),
	title: PropTypes.string.isRequired,
	features: PropTypes.arrayOf(PropTypes.string),
	onClick: PropTypes.func,
	backgroundImage: PropTypes.string,
};

export default SolutionGroupCube;

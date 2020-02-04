import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SolutionGroupCubeBodySmallImages from './SolutionGroupCubeBodySmallImages';
import SolutionGroupCubeBodyImage from './SolutionGroupCubeBodyImage';
import { zIndexMap } from './solutionGroupCubeHelper';
import { cssAttrIf } from '../../../lib/utils';

const Container = styled.div.attrs(props => ({
	backgroundAttr: cssAttrIf('background', `url(${ props.backgroundImage })`, props.backgroundImage),
}))`  
	height: ${ props => Math.round(props.cubeHeight * 0.84) }px;
	padding: 30px;
	position: relative;
	
	&::before {
		content: "";
		${ ({ backgroundAttr }) => backgroundAttr };
		opacity: .7;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		position: absolute;
		z-index: ${ zIndexMap.bodyBackground };   
	}
`;

const SolutionGroupCubeBody = (props) => {
	const { mainImagePath, iconPaths, backgroundImage, cubeHeight } = props;
	return (
		<Container
			backgroundImage={ backgroundImage }
			cubeHeight={ cubeHeight }
		>
			<SolutionGroupCubeBodySmallImages iconPaths={ iconPaths }/>
			<SolutionGroupCubeBodyImage mainImagePath={ mainImagePath }/>
		</Container>
	);
};

SolutionGroupCubeBody.propTypes = {
	mainImagePath: PropTypes.string,
	iconPaths: PropTypes.arrayOf(PropTypes.string),
	backgroundImage: PropTypes.string,
	cubeHeight: PropTypes.number.isRequired,
};

export default SolutionGroupCubeBody;

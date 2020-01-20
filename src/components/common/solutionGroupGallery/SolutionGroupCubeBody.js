import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SolutionGroupCubeBodySmallImages from './SolutionGroupCubeBodySmallImages';
import SolutionGroupCubeBodyImage from './SolutionGroupCubeBodyImage';
import { buildAssetAbsolutePath } from '../../../lib/assetsHelper';

const Container = styled.div`  
	height: 257px;
	padding: 30px;
	position: relative;
	
	:before {
	  content: "";
      background: url(${ props => props.backGroundImage ? buildAssetAbsolutePath(props.backGroundImage) : null });
      opacity: 0.7;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      position: absolute;
      z-index: 10;   
	}
`;

const SolutionGroupCubeBody = (props) => {
	const { mainImagePath, iconPaths, backGroundImage } = props;
	return (
		<Container backGroundImage={ backGroundImage }>
			<SolutionGroupCubeBodySmallImages iconPaths={ iconPaths }/>
			<SolutionGroupCubeBodyImage mainImagePath={ mainImagePath }/>
		</Container>
	);
};

SolutionGroupCubeBody.propTypes = {
	mainImagePath: PropTypes.string,
	iconPaths: PropTypes.arrayOf(PropTypes.string),
	backGroundImage: PropTypes.string,
};

export default SolutionGroupCubeBody;

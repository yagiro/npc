import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Image from '../../generic/Image';
import { buildAssetAbsolutePath } from '../../../lib/assetsHelper';

const Container = styled.div`  
	width: 183px;
	height: auto;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, 0%);
	
	> img {
	  width: 100%;
	  height: auto;
	}
`;

const SolutionGroupCubeBodyImage = ({mainImagePath}) => {

    return (
        <Container>
            <img src={ buildAssetAbsolutePath(mainImagePath) }/>
        </Container>
    );
};

SolutionGroupCubeBodyImage.propTypes = {
    mainImagePath: PropTypes.string,
};

export default SolutionGroupCubeBodyImage;

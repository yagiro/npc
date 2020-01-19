import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../../../config/constants';
import SolutionGroupCubeBodyAddImages from './SolutionGroupCubeBodyAddImages';
import SolutionGroupCubeBodyImage from './SolutionGroupCubeBodyImage';
import { createClassName } from '../../../lib/classNameHelper';

const Container = styled.div`  
	height: 257px;
	//opacity: 0.3;
	padding: 30px;
	position: relative;
`;

const SolutionGroupCubeBody = (props) => {
    const { mainImagePath, iconPaths } = props;
    return (
        <Container>
            <SolutionGroupCubeBodyAddImages iconPaths={ iconPaths } />
            <SolutionGroupCubeBodyImage mainImagePath={ mainImagePath } />
        </Container>
    );
};

SolutionGroupCubeBody.propTypes = {
    mainImagePath: PropTypes.string,
    iconPaths: PropTypes.arrayOf(PropTypes.string),
};

export default SolutionGroupCubeBody;

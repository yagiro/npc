import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { createClassName } from '../../lib/classNameHelper';
import Image from '../generic/Image';
import CloseImage from '../../assets/compare/x.png';

const classPrefix = 'compare-buttons';
export const classes = {
    container: createClassName(classPrefix, 'container'),
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 12px;
	
	& img {
		cursor: pointer;
	}
`;

const CompareModelCloseButton = (props) => {
    const { onClick } = props;

    return (
        <Container>
            <Image
                onClick={ onClick }
                path={ CloseImage }
            />
        </Container>
    );
};

CompareModelCloseButton.propTypes = {
    onClick: PropTypes.func,
};

export default CompareModelCloseButton;

import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
	height: ${ props => props.isOpen ? props.innerDiv.current ? props.innerDiv.current.clientHeight : 0 : 0 }px;
	overflow: hidden;
	transition: height .2s;
	background-color: ${ ({ backgroundColor }) => backgroundColor };
`;

const SolutionPackageAccordeon = ({ children, isOpen, backgroundColor }) => {
	const innerDiv = useRef(null);

	return (
		<Container
			isOpen={ isOpen }
			innerDiv={ innerDiv }
			backgroundColor={ backgroundColor }
		>
			<div ref={ innerDiv }>
				{ children }
			</div>
		</Container>
	);
};

SolutionPackageAccordeon.propTypes = {
	isOpen: PropTypes.bool,
	children: PropTypes.node,
	backgroundColor: PropTypes.string,
};

export default SolutionPackageAccordeon;

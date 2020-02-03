import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
	height: ${ props => props.isOpen ? props.height : 0 }px;
	overflow: hidden;
	transition: height .2s;
	background-color: ${ ({ backgroundColor }) => backgroundColor };
`;

const SolutionPackageAccordion = ({ children, isOpen, backgroundColor }) => {
	const innerDiv = useRef(null);

	return (
		<Container
			isOpen={ isOpen }
			height={ innerDiv.current ? innerDiv.current.clientHeight : 0 }
			backgroundColor={ backgroundColor }
		>
			<div ref={ innerDiv }>
				{ children }
			</div>
		</Container>
	);
};

SolutionPackageAccordion.propTypes = {
	isOpen: PropTypes.bool,
	children: PropTypes.node,
	backgroundColor: PropTypes.string,
};

export default SolutionPackageAccordion;

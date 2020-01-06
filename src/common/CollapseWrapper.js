import React, { useCallback, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import Image from './Image';
import PropTypes from 'prop-types';

const Container = styled.div`
	  display: flex;
	  cursor: pointer;
	  align-items: center;
	  justify-content: space-around;
	  width: 300px;
`;

function CollapseWrapper({ children, imgSource, title }) {

	const [isCollapse, setIsCollapse] = useState(false);
	const handleClick = useCallback(() => {
		setIsCollapse(!isCollapse);
	}, [ isCollapse, setIsCollapse ]);

	return (
		<div onClick={ handleClick }>
			<Container>
				<Image path={ imgSource } alt="img" width="100"/>
				<span>{ title }</span>
				{ isCollapse && <FontAwesomeIcon icon={ faAngleUp } /> }
				{ !isCollapse && <FontAwesomeIcon icon={ faAngleDown } /> }
			</Container>
			{isCollapse && children}
		</div>
	);
}

CollapseWrapper.propTypes = {
	title: PropTypes.string,
	imgSource: PropTypes.string,
};

export default CollapseWrapper;

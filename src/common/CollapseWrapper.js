import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Image from './Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const ToggleArea = styled.div`
	  display: flex;
	  cursor: pointer;
	  align-items: center;
	  justify-content: space-around;
	  width: 300px;
`;

function CollapseWrapper({ children, imgSource, title }) {

	const [ isCollapse, setIsCollapse ] = useState(true);
	const handleClick = useCallback(() => {
		setIsCollapse(!isCollapse);
	}, [ isCollapse, setIsCollapse ]);

	return (
		<div>
			<ToggleArea  onClick={ handleClick }>
				<Image path={ imgSource } alt="img" width="100"/>
				<span>{ title }</span>
				{ isCollapse && <FontAwesomeIcon icon={ faAngleUp } /> }
				{ !isCollapse && <FontAwesomeIcon icon={ faAngleDown } /> }
			</ToggleArea>
			{ isCollapse && children }
		</div>
	);
}

CollapseWrapper.propTypes = {
	title: PropTypes.string,
	imgSource: PropTypes.string,
};

export default CollapseWrapper;

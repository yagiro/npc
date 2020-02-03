import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Collapse } from 'react-collapse';
import Image from './Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { createClassName } from '../../lib/classNameHelper';

const classPrefix = 'toggle-area';
export const classes = {
	container: createClassName(classPrefix, 'container'),
};

const ToggleArea = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: space-around;
  width: min-content;
  & > span {
	  margin-right: 8px;
  }
`;

function CollapseWrapper({ children, imagePath, title, isOpen }) {

	const [ isCollapse, setIsCollapse ] = useState(isOpen);
	const handleClick = useCallback(() => {
		setIsCollapse(!isCollapse);
	}, [ isCollapse, setIsCollapse ]);

	return (
		<>
			<ToggleArea  onClick={ handleClick } className={ classes.container }>
				<Image path={ imagePath } alt="img" width="100"/>
				<span>{ title }</span>
				{ isCollapse && <FontAwesomeIcon icon={ faAngleUp } /> }
				{ !isCollapse && <FontAwesomeIcon icon={ faAngleDown } /> }
			</ToggleArea>
			<Collapse isOpened={ isCollapse }>
				{ children }
			</Collapse>
		</>
	);
}

CollapseWrapper.propTypes = {
	title: PropTypes.string,
	imagePath: PropTypes.string,
	isOpen: PropTypes.bool,
};

export default CollapseWrapper;

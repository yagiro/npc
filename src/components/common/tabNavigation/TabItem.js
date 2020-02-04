import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import { colors, fonts } from '../../../app/consts/consts';
import { createClassName } from '../../../lib/classNameHelper';

const classPrefix = 'menu-item';
const MS_TRANSITION = 400;
export const classes = {
	container: createClassName(classPrefix, 'container'),
	content: createClassName(classPrefix, 'content'),
};

const Container = styled.div`  
	display: flex;
	flex-direction: column;
    height: 31px;
    position: relative;
    cursor: pointer;
    padding: 0 2px;
    
    > .${ classes.content } {
        display: flex;
        font-size: ${ fonts.paragraphNormal };
        line-height: 14px;
        color: ${ props => props.isActive ? colors.checkPointPink : colors.menuGray };
        transition: color ${ Math.round(MS_TRANSITION / 2) }ms;
    }
    
    &::after {
      content: '';
      width: ${ props => props.isActive ? '100%' : '0' };
      left: ${ props => props.isActive ? '0' : '50%' };
      height: 2px;
      position: absolute;
      bottom: 0;
      background-color: ${ colors.checkPointPink };
      transition: all ${ MS_TRANSITION }ms cubic-bezier(0,1.07,.56,.95);
    }
`;

const TabItem = (props) => {
	const { children, className, ...otherProps } = props;

	return (
		<Container
			className={ classNames(classes.container, className) }
			{ ...otherProps }
		>
			<div className={ classes.content }>
				{ children }
			</div>
		</Container>
	);
};

TabItem.defaultProps = {
	isActive: false,
};

TabItem.propTypes = {
	isActive: PropTypes.bool,
	onClick: PropTypes.func,
	children: PropTypes.node,
};

export default TabItem;

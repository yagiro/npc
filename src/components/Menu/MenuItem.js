import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import { colors, fonts } from '../../config/constants';
import { createClassName } from '../../lib/classNameHelper';

const classPrefix = 'menu-item';
export const classes = {
    container: createClassName(classPrefix, 'container'),
    content: createClassName(classPrefix, 'content'),
};

const Container = styled.div`  
	display: flex;
	flex-direction: column;
    //text-align: center;
    height: 31px;
    position: relative;
    cursor: pointer;
    padding: 0 2px;
    
    > .${ classes.content } {
        display: flex;
        font: ${ fonts.paragraph };
        line-height: 14px;
        //letter-spacing: 0;
        color: ${ props => props.isActive ? colors.checkPointPink : colors.menuGray };
        transition: color .2s;
        //text-transform: capitalize;
    }
    
    &::after {
      content: '';
      width: ${ props => props.isActive ? '100%' : '0' };
      left: ${ props => props.isActive ? '0' : '50%' };
      height: 2px;
      position: absolute;
      bottom: 0;
      background: ${ colors.checkPointPink };
      transition: all .4s cubic-bezier(0,1.07,.56,.95);
    }
`;

/*
    - TRANSITION: SPECIFIC things
    - rename: TabItem
 */

const MenuItem = (props) => {
    const { children, className, ...otherProps } = props;
    // const { onClick, children, isActive } = props;
    // const handleClick = useCallback(() => onClick(), [ onClick ]);

    return (
        <Container
            className={ classNames(classes.container, className) }
            { ...otherProps }
            // isActive={ isActive }
            // onClick={ onClick }
        >
            <div className={ classes.content }>
                { children }
            </div>
        </Container>
    );
};

MenuItem.defaultProps = {
    isActive: false,
};

MenuItem.propTypes = {
    isActive: PropTypes.bool,
    onClick: PropTypes.func,
    children: PropTypes.node,
};

export default MenuItem;
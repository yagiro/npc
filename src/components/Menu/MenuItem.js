import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors, fonts } from '../../config/constants';
import { createClassName } from '../../lib/classNameHelper';
import Image from '../gereric/Image';

const classPrefix = 'menu';
export const classes = {
    container: createClassName(classPrefix, 'item-container'),
};

const Container = styled.div`  
	display: flex;
	flex-direction: column;
    text-align: center;
    height: 31px;
    position: relative;
    cursor: pointer;
    padding: 0 2px;
    
    > div {
        display: flex;
        font: Regular 14px/21px DIN Pro;
        letter-spacing: 0;
        color: ${ props => props.isActive ? '#EC407A' : '#606060' };
    }
    
    &:after {
      content: '';
      width: ${ props => props.isActive ? '100%' : '0' };
      left: ${ props => props.isActive ? '0' : '50%' };
      height: 2px;
      position: absolute;
      bottom: 0;
      background: #EC407A;
      transition: all .2s;
    }
`;

const MenuItem = (props) => {
    const { icon, onClick, children, isActive, id } = props;
    const handleClick = useCallback((id) => onClick(id), [onClick]);

    return (
        <Container className={ classes.container } isActive={ isActive } onClick={ () => handleClick(id) }>
            <div>
                {/*<Image path={ icon } style={{ width: '15px', marginRight: '5px', fill: '#EC407A' }} fill='#EC407A'/>*/}
                { children }
            </div>
        </Container>
    );
};

MenuItem.defaultProps = {
    data: [],
    isActive: false,
    onClick: () => console.log('onClick is not defined'),
};

MenuItem.propTypes = {
    id: PropTypes.number.isRequired,
    icon: PropTypes.string,
    isActive: PropTypes.bool,
    onClick: PropTypes.func,
};

export default MenuItem;
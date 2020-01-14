import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors, fonts } from '../../config/constants';
import { createClassName } from '../../lib/classNameHelper';
import MenuItem from './MenuItem';
import { classes as menuItemClasses } from './MenuItem';
import balloonImg from '../../assets/menu/hot-air-balloon.svg';
import clockImg from '../../assets/menu/XMLID_806_.svg';
import sizeImg from '../../assets/menu/size.svg';

import { ReactComponent as Balloon } from '../../assets/menu/hot-air-balloon.svg';
import { ReactComponent as Clock } from '../../assets/menu/XMLID_806_.svg';
import { ReactComponent as Size } from '../../assets/menu/size.svg';

const Container = styled.div`  
	display: flex;
    border: 1px black solid;
    
    > .${ menuItemClasses.container }:not(:last-child) {
      margin-right: 35px;
    }
`;

// const images = [ balloonImg, clockImg, sizeImg ];

const Menu = (props) => {
    const { data, onChange } = props;
    const [ activeIndex, setActiveIndex ] = useState(0);
    const handleClick = useCallback(() => {
        onChange ? onChange() :console.log('onChange is not defined');
    }, [onChange]);

    const images = [ <Balloon fill='#EC407A' />, <Clock fill='#EC407A' />, <Size fill='#EC407A' /> ];

    return (
        <Container>
            { data.map((item, index) => {
                return <MenuItem key={ index }
                        id={ index }
                        isActive={ activeIndex === index }
                        onClick={ (index) => {
                            setActiveIndex(index)
                        } }
                        icon={ images[index] }>
                    <img src={ balloonImg } style={{ fill: '#EC407A' }} fill='#EC407A' />
                    {/*{ images[index] }*/}
                    { item.title }
                </MenuItem>
            }) }
        </Container>
    );
};

Menu.defaultProps = {
    data: []
};

Menu.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
    })),
    onChange: PropTypes.func,
};

export default Menu;

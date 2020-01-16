import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ReactSVG } from 'react-svg';

import { createClassName } from '../../lib/classNameHelper';
import MenuItem from './MenuItem';
import { colors } from '../../config/constants';
import { classes as menuItemClasses } from './MenuItem';

const classPrefix = 'menu';
export const classes = {
    icon: createClassName(classPrefix, 'icon'),
};

const Container = styled.div`  
	display: flex;
    
    > .${ menuItemClasses.container }:not(:last-child) {
      margin-right: 35px;
    }
    
    .${ classes.icon } {
      margin-right: 6px;
    } 
`;

const Menu = (props) => {
    const { options, onChange, value } = props;
    const [ activeValue, setActiveValue ] = useState(value);

    const handleClick = (value) => {
        setActiveValue(value);
        if (onChange) onChange(value);
    };

    return (
        <Container>
            { options.map((item, index) => {
                const { value, label, image } = item;

                return (
                    <MenuItem
                        key={ value }
                        isActive={ activeValue === value }
                        onClick={ () => handleClick(value) }
                    >
                        <ReactSVG
                            className={ classes.icon }
                            style={ { fill: activeValue === value ? colors.checkPointPink : colors.menuGray } }
                            src={ process.env.PUBLIC_URL + image }

                        />
                        { label }
                    </MenuItem>
                );
            }) }
        </Container>
    );
};

Menu.defaultProps = {
    options: [],
    value: null,
};

Menu.propTypes = {
    value: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.string,
        label: PropTypes.string,
        image: PropTypes.string,
    })),
    onChange: PropTypes.func.isRequired,
};

export default Menu;

/*
    - rename: Menu -> DumbTabNavigation
    - useCallback
    - use styled components instead of style object
    - process.env.PUBLIC_URL encapsulate
    - encapsulate into ImageTabItem
    - activeValue -> stateValue
    - create TabNavigation (useEffect)
        - props: value, defaultValue, onChange, options
        - will support both controlled and uncontrolled modes
 */
import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ReactSVG } from 'react-svg';
import classNames from 'classnames';

import { createClassName } from '../../lib/classNameHelper';
import TubItem from './TubItem';
import { colors } from '../../config/constants';
import { classes as menuItemClasses } from './TubItem';
import { buildPublicFolderUrl } from '../../lib/assetsHelper';
import ImageTabItem from './ImageTabItem';

const Container = styled.div`  
	display: flex;
    
    > .${ menuItemClasses.container }:not(:last-child) {
      margin-right: 35px;
    }
`;

const DumbTabNavigation = (props) => {
    const { options, onChange, value } = props;
    const [ stateValue, setStateValue ] = useState(value);

    const handleClick = (value) => {
        setStateValue(value);
        if (onChange) onChange(value);
    };

    return (
        <Container activeValue={ stateValue }>
            { options.map((item) => {
                const { value, label, image } = item;

                return (
                    <TubItem
                        key={ value }
                        isActive={ stateValue === value }
                        onClick={ () => handleClick(value) }
                    >
                        <ImageTabItem image={ image } isActive={ stateValue === value }/>
                        { label }
                    </TubItem>
                );
            }) }
        </Container>
    );
};

DumbTabNavigation.defaultProps = {
    options: [],
    value: null,
};

DumbTabNavigation.propTypes = {
    value: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.string,
        label: PropTypes.string,
        image: PropTypes.string,
    })),
    onChange: PropTypes.func.isRequired,
};

export default DumbTabNavigation;

/*
    + rename: Menu -> DumbTabNavigation
    - useCallback
    + use styled components instead of style object
    + process.env.PUBLIC_URL encapsulate
    + encapsulate into ImageTabItem
    + activeValue -> stateValue
    - create TabNavigation (useEffect)
        - props: value, defaultValue, onChange, options
        - will support both controlled and uncontrolled modes
 */
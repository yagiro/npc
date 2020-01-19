import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import { colors } from '../../../config/constants';
import { createClassName } from '../../../lib/classNameHelper';
import { buildAssetAbsolutePath } from '../../../lib/assetsHelper';
import { ReactSVG } from 'react-svg';

const classPrefix = 'menu-item';
export const classes = {
    icon: createClassName(classPrefix, 'icon'),
    activeIcon: createClassName(classPrefix, 'active-icon'),
};

const Container = styled.div`  
    .${ classes.icon } {
      margin-right: 6px;
      fill: ${ colors.menuGray };
      transition: fill .2s;
    }
        
    .${ classes.activeIcon } {
      fill: ${ colors.checkPointPink };
    }
`;

const ImageTabItem = (props) => {
    const { isActive, image } = props;

    return (
        <Container>
            <ReactSVG
                className={ classNames(classes.icon, { [classes.activeIcon]: isActive }) }
                src={ buildAssetAbsolutePath(image) }
            />
        </Container>
    );
};

ImageTabItem.defaultProps = {
    isActive: false,
};

ImageTabItem.propTypes = {
    isActive: PropTypes.bool,
    image: PropTypes.string.isRequired,
};

export default ImageTabItem;

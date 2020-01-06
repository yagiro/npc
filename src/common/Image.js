import React from 'react';
import PropTypes from 'prop-types';
import { buildImageUrl } from '../lib/assetsHelper';


const Image = ({ path, ...otherProps }) => <img src={ buildImageUrl(path) } { ...otherProps } alt='image'/>;

Image.defaultProps = {
	width: '100%',
};

Image.propTypes = {
	path: PropTypes.string,
	width: PropTypes.string,
};

export default Image;

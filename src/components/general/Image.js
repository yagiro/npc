import React from 'react';
import PropTypes from 'prop-types';
import { buildImageUrl } from '../../lib/assetsHelper';


const Image = ({ path, ...otherProps }) => <img src={ buildImageUrl(path) } { ...otherProps } alt='img'/>;

Image.defaultProps = {
	width: '100%',
};

Image.propTypes = {
	path: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	width: PropTypes.string,
};

export default Image;

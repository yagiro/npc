import React from 'react';
import styled from 'styled-components';
import Image from '../generic/Image';
import PropTypes from 'prop-types';


const MainImageContainer = styled.div`
	width: 100vw;

	> img {
		max-height: 200px;
	}
`;

const Banner = ({ imagePath }) => {
	return (
		<MainImageContainer>
			<Image path={ imagePath } />
		</MainImageContainer>
	);
};

Banner.propTypes = {
	imagePath: PropTypes.string.isRequired,
};

export default Banner;

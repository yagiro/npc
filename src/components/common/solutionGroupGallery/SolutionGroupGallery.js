import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SolutionGroupCube from './SolutionGroupCube';

const Container = styled.div`
	margin: 20px auto;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	max-width: 1000px;
	
	& > * {
		margin: 15px;
	}
`;

const renderCubes = (solutionGroups) => {
	return solutionGroups.map(cube => {
		const { id, mainImagePath, iconPaths, title, features, backgroundImage } = cube;
		return (
			<SolutionGroupCube
				id={ id }
				key={ id }
				mainImagePath={ mainImagePath }
				iconPaths={ iconPaths }
				title={ title }
				features={ features }
				backgroundImage={ backgroundImage }
			/>
		);
	});
};

const SolutionGroupGallery = (props) => {
	const { solutionGroups } = props;
	return (
		<Container>
			{ renderCubes(solutionGroups) }
		</Container>
	);
};

SolutionGroupGallery.defaultProps = {
	solutionGroups: [],
};

SolutionGroupGallery.propTypes = {
	solutionGroups: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.any,
		mainImagePath: PropTypes.string,
		iconPaths: PropTypes.arrayOf(PropTypes.string),
		title: PropTypes.string,
		features: PropTypes.arrayOf(PropTypes.string),
		backgroundImage: PropTypes.string,
	})),
};

export default SolutionGroupGallery;

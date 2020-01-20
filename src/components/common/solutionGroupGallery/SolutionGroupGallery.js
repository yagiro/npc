import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SolutionGroupCube from './SolutionGroupCube';

const Container = styled.div`
	margin: 50px auto;
    display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(auto-fill, 300px);
    justify-content: center;
    max-width: 1000px;
`;

const renderCubes = (cubes, onChoose) => {
	return cubes.map(cube => {
		const { id, mainImagePath, iconPaths, label, features, backGroundImage } = cube;
		return (
			<SolutionGroupCube
				id={ id }
				key={ id }
				mainImagePath={ mainImagePath }
				iconPaths={ iconPaths }
				label={ label }
				features={ features }
				onClick={ onChoose }
				backGroundImage={ backGroundImage }
			/>
		);
	});
};

const SolutionGroupGallery = (props) => {
	const { cubes, onChoose } = props;
	return (
		<Container>
			{ renderCubes(cubes, onChoose) }
		</Container>
	);
};

SolutionGroupGallery.propTypes = {
	cubes: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number,
		mainImagePath: PropTypes.string,
		iconPaths: PropTypes.arrayOf(PropTypes.string),
		label: PropTypes.string,
		features: PropTypes.arrayOf(PropTypes.string),
		backGroundImage: PropTypes.string,
	}).isRequired),
	onChoose: PropTypes.func,
};

export default SolutionGroupGallery;

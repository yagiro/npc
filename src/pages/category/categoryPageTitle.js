import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
	
`;

const CategoryPageTitle = (props) => {
	const { title, subTitle } = props;

	return (
		<Container>
			<h4>{ title }</h4>
			<div>{ subTitle }</div>
		</Container>
	);
};

CategoryPageTitle.propTypes = {
	title: PropTypes.string,
	subTitle: PropTypes.node
};

export default CategoryPageTitle;
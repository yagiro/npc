import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import TabItem from './TabItem';
import { classes as menuItemClasses } from './TabItem';
import ImageTabItem from './ImageTabItem';

const Container = styled.div`  
	display: flex;
    
    > .${ menuItemClasses.container }:not(:last-child) {
      margin-right: 35px;
    }
`;

const DumbTabNavigation = (props) => {
	const { options, onChange, activeTabId } = props;

	return (
		<Container activeValue={ activeTabId }>
			{ options.map((tab) => {
				const { id, label, imagePath } = tab;

				return (
					<TabItem
						key={ id }
						isActive={ activeTabId === id }
						onClick={ () => onChange(id) }
					>
						<ImageTabItem
							image={ imagePath }
							isActive={ activeTabId === id }
						/>
						{ label }
					</TabItem>
				);
			}) }
		</Container>
	);
};

DumbTabNavigation.defaultProps = {
	options: [],
	activeTabId: null,
};

DumbTabNavigation.propTypes = {
	activeTabId: PropTypes.any,
	options: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.any,
		label: PropTypes.string,
		imagePath: PropTypes.string,
	})),
	onChange: PropTypes.func.isRequired,
};

export default DumbTabNavigation;

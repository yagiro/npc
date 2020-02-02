import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';

import DumbTabNavigation from './DumbTabNavigation';

const TabNavigation = (props) => {
	const { options, onChange, activeTabId, defaultActiveTabId } = props;
	const [ stateActiveTabId, setStateActiveTabId ] = useState(activeTabId || defaultActiveTabId);

	const handleChange = useCallback((id) => {
		if (activeTabId === undefined) setStateActiveTabId(id);
		if (onChange) onChange(id);
	}, [ onChange, activeTabId ]);

	useEffect(() => {
		if (activeTabId && activeTabId !== stateActiveTabId) setStateActiveTabId(activeTabId);
	}, [ activeTabId, stateActiveTabId ]);

	return (
		<DumbTabNavigation
			activeTabId={ stateActiveTabId }
			onChange={ handleChange }
			options={ options }
		/>
	);
};

TabNavigation.defaultProps = {
	options: [],
};

TabNavigation.propTypes = {
	defaultActiveTabId: PropTypes.any,
	activeTabId: PropTypes.any,
	options: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.any,
		label: PropTypes.string,
		imagePath: PropTypes.string,
	})),
	onChange: PropTypes.func.isRequired,
};

export default TabNavigation;

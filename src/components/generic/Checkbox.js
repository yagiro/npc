import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({ label }) => {

	const [ isChecked, setIsChecked ] = useState(false);
	const handleClick = useCallback(() => {
		setIsChecked(!isChecked);
	}, [ isChecked, setIsChecked ]);

	return (
		<label className="checkbox-container" >{ label }
			<input type="checkbox" checked={ isChecked } onChange={ handleClick }/>
			<span className="checkbox-checkmark"> </span>
		</label>
	);
};

Checkbox.defaultProps = {
	label: 'no label',
};

Checkbox.propTypes = {
	label: PropTypes.string.isRequired,
};

export default Checkbox;

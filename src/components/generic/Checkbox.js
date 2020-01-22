import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({ label, isChecked, onChange }) => {

	return (
		<label className="checkbox-container" >{ label }
			<input type="checkbox" checked={ isChecked } readOnly onChange={ ()=> onChange(!isChecked) }/>
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

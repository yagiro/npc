import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { createClassName } from '../../lib/classNameHelper';
import { colors } from '../../config/constants';

const classPrefix = 'checkbox';
export const classes = {
	checkmark: createClassName(classPrefix, 'checkmark'),
	container: createClassName(classPrefix, 'container'),
};

const Container = styled.div`

	/* Customize the label (the container) */
	.${ classes.container } {
	  display: block;
	  position: relative;
	  padding-left: 25px;
	  margin-bottom: 12px;
	  cursor: pointer;
	  font-size: 14px;
	  color: ${ colors.textLightGray };
	  font-family: DIN, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
	  -webkit-user-select: none;
	  -moz-user-select: none;
	  -ms-user-select: none;
	  user-select: none;
	}

	/* Hide the browser's default checkbox */
	.${ classes.container } input {
	  position: absolute;
	  opacity: 0;
	  cursor: pointer;
	  height: 0;
	  width: 0;
	}
	
	/* Create a custom checkbox */
	.${ classes.checkmark } {
	  position: absolute;
	  top: 0;
	  left: 0;
	  height: 16px;
	  width: 16px;
	  background-color: #eee;
	  border-radius: 3px;
	}
	
	/* On mouse-over, add a grey background color */
	.${ classes.container }:hover input ~ .${ classes.checkmark } {
	  background-color: #ccc;
	}
	
	/* When the checkbox is checked, add a blue background */
	.${ classes.container } input:checked ~ .${ classes.checkmark } {
	  background-color: ${ colors.checkPointPink };
	}
	
	/* Create the checkmark/indicator (hidden when not checked) */
	.${ classes.checkmark }:after {
	  content: "";
	  position: absolute;
	  display: none;
	}
	
	/* Show the checkmark when checked */
	.${ classes.container } input:checked ~ .${ classes.checkmark }:after {
	  display: block;
	}
	
	/* Style the checkmark/indicator */
	.${ classes.container } .${ classes.checkmark }:after {
	  left: 5px;
	  top: 1px;
	  width: 4px;
	  height: 9px;
	  border: solid white;
	  border-width: 0 2px 2px 0;
	  -webkit-transform: rotate(45deg);
	  -ms-transform: rotate(45deg);
	  transform: rotate(45deg);
	}
`;


const Checkbox = ({ label, isChecked, onChange }) => {

	return (
		<Container>
			<label className={ classes.container } >{ label }
				<input type="checkbox" checked={ isChecked } readOnly onChange={ () => onChange(!isChecked) }/>
				<span className={ classes.checkmark }> </span>
			</label>
		</Container>
	);
};

Checkbox.defaultProps = {
	label: 'no label',
	onChange: () => {},
};

Checkbox.propTypes = {
	label: PropTypes.string.isRequired,
	isChecked: PropTypes.bool,
	color: PropTypes.string,
	onChange: PropTypes.func
};

export default Checkbox;

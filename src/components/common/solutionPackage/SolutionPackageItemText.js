import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';

import { fonts } from '../../../config/constants';
import { createClassName } from '../../../lib/classNameHelper';

const classPrefix = 'solution-package-item-text';
export const classes = {
	additional: createClassName(classPrefix, 'additional'),
	chips: createClassName(classPrefix, 'chips'),
};

const Container = styled.div`
	position: relative;
	display: inline-block;
	  
	& > div:first-child {
		font-size: ${ fonts.paragraphBig };
		font-weight: bold;
		color: #333333;
		line-height: 1em;
		
		.${ classes.additional } {
			color: #8F97A1;
		}
		
		& > .${ classes.chips } {
			position: relative;
			left: -7px;
			padding: 2px 7px 0 7px;
			background-color: #AEDAAA;
			border-radius: 21px;
		}
	}
	
	& > div:last-child {
		font-size: ${ fonts.paragraph };
		color: #8F97A1;
		line-height: 1em;
		position: relative;
		top: 3px;
	}
`;

const SolutionPackageItemText = (props) => {
	const { header, text, highlighted } = props;
	return (
		<Container>
			<div>
				<span className={ classNames({ [classes.chips]: highlighted }) }>
					{ header }
				</span>
			</div>
			<div>
				{ text }
			</div>
		</Container>
	);
};

SolutionPackageItemText.propTypes = {
	header: PropTypes.node,
	text: PropTypes.string,
	highlighted: PropTypes.bool,
};

export default SolutionPackageItemText;

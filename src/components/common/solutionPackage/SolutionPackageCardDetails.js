import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';

import { colors, fonts } from '../../../config/constants';
import { createClassName } from '../../../lib/classNameHelper';

const classPrefix = 'solution-package-cards-details';
export const classes = {
	slot: createClassName(classPrefix, 'slot'),
	arrow: createClassName(classPrefix, 'arrow'),
	filledSlot: createClassName(classPrefix, 'fill-slot'),
	emptySlot: createClassName(classPrefix, 'empty-slot'),
	brownBorder: createClassName(classPrefix, 'brown-border'),
};

const Container = styled.div`
 	.${ classes.slot } {
		display: flex;
		margin: 0 0 0 45px;
		height: 35px;
		align-items: center;
		background-color: inherit;
		
		& > div:first-child {
			font: ${ fonts.paragraph };
			line-height: 1em;
			color: ${ colors.textLightGray };
			margin-right: 15px;
		}
		
		.${ classes.filledSlot } {
		 	display: flex;
		 	justify-content: space-around;
		 	background-color: ${ colors.background };
		 	min-width: 150px;
		 	
		 	&::after {
				content: '';
				height: 25px;
				width: 5px;
				background-color: #006699;
			}

			&.${ classes.brownBorder }::after {
				background-color: #B87333;
			}
		 	
		 	& > div {
		 		margin: 5px 0;
		 		flex: 1;
		 		font: ${ fonts.paragraph };
		 		line-height: 1em;
		 		color: #333333;
		 		text-align: center;
		 	}
		 	
		 	& > div:not(:last-child) {
		 		border-right: 1px ${ colors.borderGrey } solid;
		 		flex: 1;
		 	}
		 	
		 	& > div:last-child {
				flex: 1.5;
			}
		}
	
		.${ classes.emptySlot } {
			font: ${ fonts.paragraphBig };
			line-height: 1em;
			color: #333333;
		}
	}
`;

const renderDetails = (details) => {
	return details.map((slot, i) => {
		return (
			<div key={ i } className={ classes.slot } >
				<div>Slot { i + 1 }</div>
				<div className={ classNames(
					{
						[classes.emptySlot]: !slot,
						[classes.filledSlot]: slot,
						[classes.brownBorder]: i === 0 && slot
					})}
				>
					{ slot ?
						<>
							<div>{ slot.amount }x</div>
							<div>{ slot.size }GB</div>
							<div>{ slot.material }</div>
						</>:
						<div className={ classes.emptySlot }>Open</div>
					}
				</div>
			</div>
		);
	});
};

const SolutionPackageCardDetails = ({ details }) => {

	return (
		<Container>
			{ renderDetails(details) }
		</Container>
	);
};

SolutionPackageCardDetails.propTypes = {
	details: PropTypes.arrayOf(PropTypes.shape({
        amount: PropTypes.number,
        size: PropTypes.number,
        material: PropTypes.string,
	})),
};

export default SolutionPackageCardDetails;

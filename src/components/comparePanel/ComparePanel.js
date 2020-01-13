import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../../config/constants';
import { createClassName } from '../../lib/classNameHelper';
import Paragraph from './Paragraph';
import CompareHeader from './CompareHeader';
import CompareCard from './CompareCard';
import CompareButton from './CompareButton';

const classPrefix = 'compare-panel';
export const classes = {
	label: createClassName(classPrefix, 'label'),
	cards: createClassName(classPrefix, 'cards'),
	buttons: createClassName(classPrefix, 'buttons'),
};


const Container = styled.div`  
	display: flex;
	padding: 10px 0;
	justify-content: center;
	height: 100px;
	box-sizing: border-box;
	background: ${ colors.background } 0% 0% no-repeat padding-box;
	box-shadow: 0px -2px 4px ${ colors.boxShadowGrey };
	
	> .${ classes.label } {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 11px 0;
	}
	
	> .${ classes.cards } {
		margin: 0 45px;
		display: flex;
		> div:not(:first-child) {
			margin-left: 30px;
		}
	}
	
	> .${ classes.buttons } {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}
`;

const ComparePanel = (props) => {
	const { cards } = props;

	if (cards.length < 2) {
		const emptyCards = 3 - (cards.length + 1);
		for(let i = 0; i < emptyCards; i++) {
			cards.push({});
		}
	}

	const [ cardList, setCardList ] = useState(cards);

	const handleClose = (index) => {
		const tmp = [...cardList];
		tmp.splice(index, 1);
		setCardList(tmp);
	};

	return (
		<Container>
			<div className={ classes.label }>
				<Paragraph>Select Up To 3 Solution</Paragraph>
				<CompareHeader>To Compare</CompareHeader>
			</div>
			<div className={ classes.cards }>
				{ cardList.map((card, index) => <CompareCard
					key={ index }
					index={ index }
					image={ card.image }
					title={ card.title }
					price={ card.price }
					onClose={ (index) =>  {
						handleClose(index);
						console.log('->', index);
					} }/>) }
				<CompareCard/>
			</div>
			<div className={ classes.buttons }>
				<CompareButton color="fill">Compare</CompareButton>
				<CompareButton color="empty">Close</CompareButton>
			</div>
		</Container>
	);
};

ComparePanel.defaultProps = {
	cards: []
};

ComparePanel.propTypes = {
	cards: PropTypes.arrayOf(PropTypes.shape({
		image: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
	})),
}

export default ComparePanel;

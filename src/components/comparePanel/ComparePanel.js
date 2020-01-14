import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../../config/constants';
import { createClassName } from '../../lib/classNameHelper';
import Paragraph from '../gereric/Paragraph';
import CompareHeader from './CompareHeader';
import CompareCard from './CompareCard';
import Button from '../gereric/Button';

const classPrefix = 'compare-panel';
export const classes = {
	label: createClassName(classPrefix, 'label'),
	cards: createClassName(classPrefix, 'cards'),
	buttons: createClassName(classPrefix, 'buttons'),
};

const Container = styled.div`
	display: ${ (props) => props.closed ? 'none' : 'flex' };
	padding: 10px 0;
	justify-content: center;
	height: 100px;
	box-sizing: border-box;
	background: ${ colors.background } 0% 0% no-repeat padding-box;
	box-shadow: 0px -2px 4px ${ colors.boxShadowGrey };
	opacity: ${ (props) => props.closing ? '0' : '1' };
	transition: opacity .3s;
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	
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

/*
- rename: cards > models

- make the component "dumb" (completely controlled by props - the parent will need to manage the props)
- props to receive:
	models, onClose,
	onModelRemove: (removedModel) => void
	onChange: (updatedModels) => void, // onChange will always provide the models that REMAIN in the comparison
	isOpen: bool
	onCompare: (modelsToCompare) => void

- make a const in this file: MAX_MODELS_COUNT = 3, and use it in the styling wherever is possible
- encapsulate the component into smaller components (for example, Title).
 */

const ComparePanel = ({ cards = [], onClose, onChange }) => {
	const [ cardList, setCardList ] = useState(cards);
	const [ closing, setClosing ] = useState(true);
	const [ closed, setClosed ] = useState(false);

	useEffect(() => setClosing(false), []);

	const handleCardClose = (index) => {
		const tmp = [...cardList];
		tmp.splice(index, 1);
		setCardList(tmp);
		if (onChange) {
			onChange(tmp.filter(val => val.title));
		}
	};

	const renderCards = () => {
		if (cardList.length < 3) {
			const emptyCards = 3 - cardList.length;
			for (let i = 0; i < emptyCards; i++) {
				cardList.push({});
			}
		}
		return cardList.map((card, index) => {
			return index < 3 ? <CompareCard
				key={ index }
				index={ index }
				image={ card.image }
				title={ card.title }
				price={ card.price }
				onClose={ (index) =>  {
					handleCardClose(index);
				}} /> : null;
		});
	};

	const handleClose = () => {
		setClosing(true);
		setTimeout(() => {
			setClosed(true);
			setClosing(false);
			if (onClose) {
				onClose();
			}
		}, 500);
	};

	return (
		<Container closing={ closing } closed={ closed }>
			<div className={ classes.label }>
				<Paragraph>Select Up To 3 Solution</Paragraph>
				<CompareHeader>To Compare</CompareHeader>
			</div>
			<div className={ classes.cards }>
				{ renderCards(cards) }
			</div>
			<div className={ classes.buttons }>
				<Button styleType="fill"
						onClick={ () => console.log('Compare button clicked') }
						width="103px"
						height="30px">
					Compare
				</Button>
				<Button styleType="empty"
						onClick={ () => handleClose() }
						width="103px"
						height="30px">
					Close
				</Button>
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
	onClose: PropTypes.func,
	onChange: PropTypes.func,
};

export default ComparePanel;


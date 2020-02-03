import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { colors } from '../../../config/constants';
import { createClassName } from '../../../lib/classNameHelper';
import CompareTitle from './CompareTitle';
import CompareModelWrapper from './CompareModelWrapper';
import CompareButtons from './CompareButtons';
import { useFadeAnimation } from '../../../lib/hooks';

const MAX_MODELS_COUNT = 3;
const MS_FADE_IN_ANIMATION = 300;
const classPrefix = 'compare-panel';
export const classes = {
	cards: createClassName(classPrefix, 'cards'),
	model: createClassName(classPrefix, 'model'),
};

const Container = styled.div`
	display: ${ props => props.display };
	padding: 10px 0;
	justify-content: center;
	height: 100px;
	background-color: ${ colors.background };
	box-shadow: 0px -2px 4px ${ colors.borderGrey };
	opacity: ${ props => props.opacity };
	transition: opacity ${ MS_FADE_IN_ANIMATION }ms;
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	
	> .${ classes.cards } {
		margin: 0 45px;
		display: flex;
		> div:not(:first-child) {
			margin-left: 30px;
		}
	}
    
    .model-content-leave {
      opacity: 1;
    }
    
    .model-content-leave.model-content-leave-active {
      opacity: 0;
      transition: opacity ${ MS_FADE_IN_ANIMATION }ms;
    }
`;

const renderModels = (models, handleCardClose) => {
	const emptyCards = Array(MAX_MODELS_COUNT).fill(null);
	return emptyCards.map((item, i) => {
		const currModel = models[i];
		return (
			<CompareModelWrapper
				key={ i }
				index={ i }
				isEmpty={ !currModel }
				model={ currModel }
				animationTimeMs={ MS_FADE_IN_ANIMATION }
				onClose={ handleCardClose }
			/>
		);
	});
};

const CompareModelsPanel = (props) => {
	const { isOpen, models, onChange, onClose, onCompare, onModelRemove } = props;

	const fade = useFadeAnimation(isOpen, MS_FADE_IN_ANIMATION);

	const handleCardClose = useCallback((model) => {
		if (onModelRemove) onModelRemove(model);
		if (onChange) {
			const newModels = models.filter(item => item.price !== model.price);
			onChange(newModels);
		}
	}, [ onChange, onModelRemove, models ]);

	const handleClose = useCallback(() => {
		if (onClose) onClose();
	}, [ onClose ]);

	const handleCompare = useCallback(() => {
		if (onCompare) onCompare(models);
	}, [ models, onCompare ]);

	return (
		<Container
			display={ fade.display }
			opacity={ fade.opacity }
		>
			<CompareTitle maxCount={ MAX_MODELS_COUNT }/>
			<div className={ classes.cards }>
				{ renderModels(models, handleCardClose) }
			</div>
			<CompareButtons
				onCompare={ handleCompare }
				onClose={ handleClose }
				height="30px"
				width="103px"
			/>
		</Container>
	);
};

CompareModelsPanel.defaultProps = {
	models: [],
	isOpen: false,
};

CompareModelsPanel.propTypes = {
	models: PropTypes.arrayOf(PropTypes.shape({
		image: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
	})),
	onClose: PropTypes.func,
	onChange: PropTypes.func,
	onModelRemove: PropTypes.func,
	isOpen: PropTypes.bool,
	onCompare: PropTypes.func,
};

export default CompareModelsPanel;

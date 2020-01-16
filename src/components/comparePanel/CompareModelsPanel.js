import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { colors } from '../../config/constants';
import { createClassName } from '../../lib/classNameHelper';
import CompareModel from './CompareModel';
import CompareTitle from './CompareTitle';
import CompareModelWrapper from './CompareModelWrapper';
import CompareButtons from './CompareButtons';

const MAX_MODELS_COUNT = 3;
const MS_FADE_IN_ANIMATION = 300;
const classPrefix = 'compare-panel';
export const classes = {
    cards: createClassName(classPrefix, 'cards'),
    model: createClassName(classPrefix, 'model'),
};

const Container = styled.div`
	display: ${ (props) => props.display };
	padding: 10px 0px;
	justify-content: center;
	height: 100px;
	background: ${ colors.background };
	box-shadow: 0px -2px 4px ${ colors.boxShadowGrey };
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
                isEmpty={ !currModel }
            >
                <ReactCSSTransitionGroup
                    transitionName="model-content"
                    transitionEnterTimeout={ MS_FADE_IN_ANIMATION }
                    transitionLeaveTimeout={ MS_FADE_IN_ANIMATION }
                >
                    {  currModel &&
                    <CompareModel
                        key={ i }
                        data={ currModel }
                        onClose={ () => handleCardClose(currModel) }
                    />
                    }
                </ReactCSSTransitionGroup>
            </CompareModelWrapper>
        )
    })
};

const CompareModelsPanel = (props) => {
    const { isOpen, models, onChange, onClose, onCompare, onModelRemove } = props;
    const [ display, setDisplay ] = useState('flex');
    const [ opacity, setOpacity ] = useState('0');

    useEffect(() => {
        if (isOpen) {
            setDisplay('flex');
            setTimeout(() => setOpacity('1'), 0);
        } else {
            setOpacity('0');
            setTimeout(() => setDisplay('none'), MS_FADE_IN_ANIMATION);
        }
    }, [ isOpen ]);

    const handleCardClose = (model) => {
        const newModels = [...models.filter(item => item.price !== model.price)];
        if (onModelRemove) onModelRemove(model);
        if (onChange) onChange(newModels);
    };

    const handleClose = () => {
        if (onClose) onClose();
    };

    const handleCompare = () => {
        if (onCompare) onCompare(models);
    };

    return (
        <Container
            display={ display }
            opacity={ opacity }
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

/*
 - create custom hook: useFadeAnimation (also include comments that will explain how to use it)
 + fade-in animation time constant
 + constant for 300ms animation time
 + const currModel = models[i];
 + place renderModels outside of render function
 */

/*
    + encapsulate Buttons
    + remove duplication of px in buttons
    + create buttonStyleTypes
 */

/*
+ rename: cards > models

+ make the component "dumb" (completely controlled by props - the parent will need to manage the props)
+ props to receive:
	models, onClose,
	onModelRemove: (removedModel) => void
	onChange: (updatedModels) => void, // onChange will always provide the models that REMAIN in the comparison
	isOpen: bool
	onCompare: (modelsToCompare) => void

+ make a const in this file: MAX_MODELS_COUNT = 3, and use it in the styling wherever is possible
+ encapsulate the component into smaller components (for example, Title).
 */
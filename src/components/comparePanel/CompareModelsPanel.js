import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { colors } from '../../config/constants';
import { createClassName } from '../../lib/classNameHelper';
import CompareModel from './CompareModel';
import Button from '../gereric/Button';
import CompareTitle from './CompareTitle';
import CompareModelWrapper from './CompareModelWrapper';
import { createArray } from '../../lib/utils';

const MAX_MODELS_COUNT = 3;
const classPrefix = 'compare-panel';
export const classes = {
    cards: createClassName(classPrefix, 'cards'),
    buttons: createClassName(classPrefix, 'buttons'),
    model: createClassName(classPrefix, 'model'),
};

const Container = styled.div`
	display: ${ (props) => props.display };
	padding: 10px 0px;
	justify-content: center;
	height: 100px;
	//box-sizing: border-box;
	background: ${ colors.background };
	box-shadow: 0px -2px 4px ${ colors.boxShadowGrey };
	opacity: ${ props => props.opacity };
	transition: opacity .3s;
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
	
	> .${ classes.buttons } {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}
    
    .model-content-leave {
      opacity: 1;
    }
    
    .model-content-leave.model-content-leave-active {
      opacity: 0;
      transition: opacity .3s;
    }
`;

/*
 - fade-in animation time constant
 - create custom hook: useFadeAnimation (also include comments that will explain how to use it)
 - constant for 300ms animation time
 - const currModel = models[i];
 - place renderModels outside of render function
 */

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
            setTimeout(() => setDisplay('none'), 300);
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

    const renderModels = () => {
        // const emptyCards = createArray(MAX_MODELS_COUNT, null);
        const emptyCards = Array(MAX_MODELS_COUNT).fill(null);
        return emptyCards.map((item, i) => {
            return (
                <CompareModelWrapper
                    key={ i }
                    isEmpty={ !models[i] }
                >
                    <ReactCSSTransitionGroup
                        transitionName="model-content"
                        transitionEnterTimeout={ 300 }
                        transitionLeaveTimeout={ 300 }
                    >
                        {  models[i] &&
                            <CompareModel
                                key={ i }
                                data={ models[i] }
                                onClose={ () => handleCardClose(models[i]) }
                            />
                        }
                    </ReactCSSTransitionGroup>
                </CompareModelWrapper>
            )
        })
    };

    return (
        <Container
            display={ display }
            opacity={ opacity }
        >
            <CompareTitle maxCount={ MAX_MODELS_COUNT }/>
            <div className={ classes.cards }>
                { renderModels() }
            </div>
            <div className={ classes.buttons }>
                <Button
                    styleType="fill"
                    onClick={ handleCompare }
                    width="103px"
                    height="30px"
                >
                        Compare
                </Button>
                <Button
                    styleType="empty"
                    onClick={ handleClose }
                    width="103px"
                    height="30px"
                >
                        Close
                </Button>
            </div>
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
    - encapsulate Buttons
    - remove duplication of px in buttons
    - create buttonStyleTypes
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
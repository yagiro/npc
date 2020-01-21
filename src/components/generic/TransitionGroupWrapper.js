import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const TransitionGroupWrapper = ({ animationName, animationDelayMs, children, classNameAnimationGroup }) => {
	return (
		<ReactCSSTransitionGroup
			transitionName={ animationName }
			transitionEnterTimeout={ animationDelayMs }
			transitionLeaveTimeout={ animationDelayMs }
			className={ classNameAnimationGroup }>

			{ children }

		</ReactCSSTransitionGroup>
	);
};

export default TransitionGroupWrapper;

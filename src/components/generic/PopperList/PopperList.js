import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Popper from '@material-ui/core/Popper';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import { colors } from '../../../config/constants';
import PopperItemList from './PopperItemList';

const ToggleButtonContainer = styled.div`
	width: 130px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	cursor: pointer;
	padding: 10px 5px;
	transition: background-color .2s;
	border-radius: 3px;
	
	&:hover {
		background-color: ${ colors.whitesmoke };
	}
`;

const PopperListContainer = styled.div`
	padding: 15px 0;
	min-width: 235px;
`;

const ArrowContainer = styled.div`
	width: 15px;
	height: 10px;
	background-color: white;
	top: -10px;
	position: absolute;
	clip-path: polygon(0 100%, 50% 0, 50% 0, 100% 100%);
`;

const PopperList = ({ value, onChange, options, children }) => {

	const [ anchorEl, setAnchorEl ] = React.useState(null);
	const [ open, setOpen ] = React.useState(false);
	const [ placement, setPlacement ] = React.useState();

	const [ arrowRef, setArrowRef ] = React.useState(null);

	//show and hide PopperList
	const handleToggleClick = newPlacement => event => {
		setAnchorEl(event.currentTarget);
		setOpen(prev => placement !== newPlacement || !prev);
		setPlacement(newPlacement);
	};

	const handleArrowRef = node => {
		setArrowRef(node);
	};

	const renderMenuItems = (options) => {
		return options.map((option)=> {
			return (
				<PopperItemList
					key={ option.value }
					option={ option }
					onChange={ onChange }
					selectedValue={ value }
					setOpen={ setOpen }
				/>
			);
		});	
	};

	return (
		<div>
			<Popper open={ open } anchorEl={ anchorEl } placement={ placement } transition
				modifiers={{
					flip: {
						enabled: true,
					},
					preventOverflow: {
						enabled: true,
						boundariesElement: 'scrollParent',
					},
					arrow: {
						enabled: !!arrowRef,
						element: arrowRef,
					},
				}}>
				{({ TransitionProps }) => (
					<Fade {...TransitionProps} timeout={ 350 }>
						<Paper>
							<PopperListContainer>
								{
									<ArrowContainer ref={ handleArrowRef }/>
								}
								{
									renderMenuItems(options)
								}
							</PopperListContainer>
						</Paper>
					</Fade>
				)}
			</Popper>
			<ToggleButtonContainer onClick={ handleToggleClick('bottom-start') }>
				{ children }
			</ToggleButtonContainer>
		</div>
	);
};

PopperList.propTypes = {
	options: PropTypes.arrayOf(
		PropTypes.shape({
			value: PropTypes.any.isRequired,
			label: PropTypes.string.isRequired,
			imagePath: PropTypes.string,
		})
	).isRequired,
	onChange: PropTypes.func,
	value: PropTypes.any,
	children: PropTypes.element.isRequired,
};

export default PopperList;




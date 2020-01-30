import React from 'react';
import Popper from '@material-ui/core/Popper';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';
import Image from './Image';
import menu from '../../assets/popperList/menu@2x.png';
import { colors } from '../../config/constants';
import Span from './Span';

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

const MenuItemContainer = styled.div`
	display: flex;
	padding: 5px 15px;
	cursor: pointer;
	transition: background-color, color .2s;
	line-height: 1;

	&:hover {
		background-color: ${ colors.whitesmoke };
		color: ${ colors.checkPointPink };

	}
`;

export default function PopperList() {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [open, setOpen] = React.useState(false);
	const [placement, setPlacement] = React.useState();

	const options = [
		{ value: 'infinity', label: 'Infinity', imagePath: '/images/Infinity-tag@2x.png' },
		{ value: 'networkSecurity', label: 'Network Security', imagePath: '/images/Infinity-tag@2x.png' },
		{ value: 'cloudSecurity', label: 'Cloud Security', imagePath: '/images/Infinity-tag@2x.png' },
		{ value: 'management', label: 'Management', imagePath: '/images/Infinity-tag@2x.png' },
		{ value: 'mobileAndEndpoint', label: 'Mobile & Endpoint', imagePath: '/images/Infinity-tag@2x.png' },
		{ value: 'smallBusinesses', label: 'Small Businesses', imagePath: '/images/Infinity-tag@2x.png' },
		{ value: 'supportAndServices', label: 'Support & Services', imagePath: '/images/Infinity-tag@2x.png' },
	];

	const handleClick = newPlacement => event => {
		setAnchorEl(event.currentTarget);
		setOpen(prev => placement !== newPlacement || !prev);
		setPlacement(newPlacement);
	};
	
	const renderMenuItems = (options) => {
		return options.map((option)=> {
			return (
				<MenuItemContainer key={ option.value }>
					<Image path={ option.imagePath } width="15px" height="15px"/>
					<Span size="14px" margin="0 0 0 15px">{ option.label } </Span>
				</MenuItemContainer>
			);
		});	
	};

	return (
		<div>
			<Popper open={open} anchorEl={anchorEl} placement={placement} transition
				modifiers={{
					flip: {
						enabled: true,
					},
					preventOverflow: {
						enabled: true,
						boundariesElement: 'scrollParent',
					},
				}}>
				{({ TransitionProps }) => (
					<Fade {...TransitionProps} timeout={350}>
						<Paper>
							<PopperListContainer>
								{
									renderMenuItems(options)
								}
							</PopperListContainer>
						</Paper>
					</Fade>
				)}
			</Popper>
			<ToggleButtonContainer onClick={ handleClick('bottom-start') }> <Image path={ menu } width="15px" height="15px"/> <Span size="14px" color={ colors.textLightGray }>Our Solutions</Span></ToggleButtonContainer>
		</div>
	);
}

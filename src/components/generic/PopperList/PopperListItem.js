import React, { useCallback } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Image from '../Image';
import Span from '../Span';
import { colors } from '../../../config/constants';
import { cssAttrIf } from '../../../lib/utils';

const Container = styled.div.attrs(props => ({
	backgroundColorAttr: cssAttrIf('background-color', colors.whitesmoke, props.selected),
	colorAttr: cssAttrIf('color', colors.checkPointPink, props.selected),
}))`
	display: flex;
	align-items: center;
	padding: 5px 15px;
	cursor: pointer;
	transition: background-color .4s, color .4s, filter .4s;
	line-height: 1;

 	${ ({ backgroundColorAttr }) => backgroundColorAttr };
 	${ ({ colorAttr }) => colorAttr };
 	filter:  ${ (props) => props.selected ? 'grayscale(0)' : 'grayscale(100%)' };

	&:hover {
		background-color: ${ colors.borderGrey };
		color: ${ colors.checkPointPink };
		filter: grayscale(0);
	}
`;


const IconContainer = styled.div`
	border-radius: 10px;
	width: 20px;
	height: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${ colors.background };
	box-shadow: 2px 2px 3px 0 rgba(0,0,0,0.08);
`;

const PopperListItem = ({ selected, option, setOpen, onClick  }) => {

	const handleItemClick = useCallback(() => {
		setOpen(false);
		onClick(option.value);
		console.log(option.value);
	}, [onClick, option.value, setOpen]);
    
	return (
		<Container
			selected={ selected }
			onClick={ handleItemClick }>
			<IconContainer>
				<Image
					path={ option.imagePath }
					width="15px"
					height="15px"
				/>
			</IconContainer>
			<Span
				size="14px"
				margin="0 0 0 20px">
				{ option.label }
			</Span>
		</Container>
	);
};

PopperListItem.propTypes = {
	option: PropTypes.shape({
		value: PropTypes.any.isRequired,
		label: PropTypes.string.isRequired,
		imagePath: PropTypes.string,
	}).isRequired,
	onClick: PropTypes.func,
	setOpen: PropTypes.func,
	selected: PropTypes.bool,
};

export default PopperListItem;

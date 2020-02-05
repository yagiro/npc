import styled from 'styled-components';
import { colors, fonts } from '../../app/consts/consts';
import PropTypes from 'prop-types';

const parColors = {
	default: colors.paragraphGrey,
	dark: colors.headerGrey,
	black: colors.paragraphBlack,
};

const Paragraph = styled.p`
	font-size: ${ fonts.paragraphNormal };
	color: ${ (props) => parColors[props.color] };
	letter-spacing: 0;
	text-transform: capitalize;
	margin: 0;
	line-height: 100%;
	font-weight: ${ props => props.weight };
	overflow: hidden;
`;

Paragraph.defaultProps = {
	color: 'default',
	weight: 'normal',
};

Paragraph.propTypes = {
	color: PropTypes.oneOf(['default', 'dark', 'black']),
	weight: PropTypes.oneOf(['normal', 'bold']),
};

export const paragraphColors = {
	default: 'default',
	dark: 'dark',
	black: 'black',
};
export default Paragraph;

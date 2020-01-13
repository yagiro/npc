import styled from 'styled-components';
import { colors, fonts } from '../../config/constants';
import PropTypes from 'prop-types';

const parColors = {
	default: colors.paragraphGrey,
	dark: colors.paragraphDarkGrey,
	black: colors.paragraphBlack,
}

const Paragraph = styled.p`
	font: ${ fonts.paragraph };
	color: ${ (props) => parColors[props.color] };
	letter-spacing: 0;
	text-transform: capitalize;
	margin: 0;
	line-height: 100%;
	font-weight: ${ props => props.weight }
`;

Paragraph.defaultProps = {
	color: 'default',
	weight: 'normal',
};

Paragraph.propTypes = {
	color: PropTypes.oneOf(['default', 'dark', 'black']),
	weight: PropTypes.oneOf(['normal', 'bold']),
}

export default Paragraph;

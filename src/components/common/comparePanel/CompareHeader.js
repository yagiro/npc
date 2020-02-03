import styled from 'styled-components';
import { colors, fonts } from '../../../config/constants';

const CompareHeader = styled.p`
	font-size: ${ fonts.headerBig };
	color: ${ colors.headerGrey };
	letter-spacing: 0;
	text-transform: capitalize;
	margin: 0;
	line-height: 100%;
`;

export default CompareHeader;

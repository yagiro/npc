import styled from 'styled-components';
import PropTypes from 'prop-types';

const Span = styled.span`
	margin: ${ ({ margin }) => margin } !important;
	font-size: ${ ({ size }) => size };
	font-weight: ${ ({ bold }) => bold ? 'bold' :'normal'};
	${ ({ color }) => !color ? '' : `color: ${ color };` };
	cursor: ${ ({ pointer }) => pointer ? 'pointer' : '' };
`;

Span.propTypes = {
	color: PropTypes.string,
	bold: PropTypes.bool,
	pointer: PropTypes.bool,
	size: PropTypes.string,
	margin: PropTypes.string,
};

Span.defaultProps = {
	margin: '0 5px 0 5px',
};

export default Span;

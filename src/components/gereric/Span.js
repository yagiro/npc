import styled from 'styled-components';
import PropTypes from 'prop-types';

const Span = styled.span`
	margin: ${ ({ margin }) => margin };
	font-size: ${ ({ size }) => size };
	font-weight: ${ ({ bold }) => bold ? 'bold' :'normal'};
	${ ({ color }) => !color ? '' : `color: ${ color };` }
`;

Span.propTypes = {
	color: PropTypes.string,
	bold: PropTypes.bool,
	size: PropTypes.string,
	margin: PropTypes.string,
};

Span.defaultProps = {
	margin: '0 5px 0 5px',
};

export default Span;

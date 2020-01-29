import styled from 'styled-components';
import PropTypes from 'prop-types';

const Title = styled.div`
	margin: ${ ({ margin }) => margin } !important;
	font-size: ${ ({ size }) => size };
	font-weight: ${ ({ bold }) => bold ? 'bold' :'normal'};
	${ ({ color }) => !color ? '' : `color: ${ color };` }
`;

Title.propTypes = {
	color: PropTypes.string,
	margin: PropTypes.string,
	bold: PropTypes.bool,
	size: PropTypes.string,
};

Title.defaultProps = {
	margin: '0 0 5px 0',
};

export default Title;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../../../config/constants';
import { createClassName } from '../../../lib/classNameHelper';

const classPrefix = 'solution-package-head';
export const classes = {
	title: createClassName(classPrefix, 'title'),
	subtitle: createClassName(classPrefix, 'subtitle'),
	gbps: createClassName(classPrefix, 'gbps'),
};

const Container = styled.div`  
	position: absolute;
	height: 100%;
	padding: 30px 0;
	top: 0;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	
	.${ classes.title } {
	
	}
	
	.${ classes.subtitle } {
	
	}
	
	.${ classes.gbps } {
	
	}
`;

const SolutionPackageHeadContent = (props) => {
	const { title, subtitle, gbpsAmount } = props;
	return (
		<Container>
			<div>
				<div className={ classes.title }>{ title }</div>
				<div className={ classes.subtitle }>{ subtitle }</div>
			</div>
			<div className={ classes.gbps }>{ gbpsAmount }</div>
		</Container>
	);
};

SolutionPackageHeadContent.propTypes = {
	title: PropTypes.string,
	subtitle: PropTypes.string,
	gbpsAmount: PropTypes.number,
};

export default SolutionPackageHeadContent;
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faLinkedin, faYoutubeSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { colors } from '../../config/constants';
import Paragraph from '../generic/Paragraph';
import Span from '../generic/Span';
import Title from '../generic/Title';
import { createClassName } from '../../lib/classNameHelper';

const classPrefix = 'footer';
export const classes = {
	social: createClassName(classPrefix, 'social'),
};

const Container = styled.div`
    height: 164px;
    background: ${ colors.background };
    width: 100%;
    display: flex;
    position: relative;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
    margin-top: 64px;
    padding-top: 25px;
`;

const Content = styled.div`
	display: flex;
	max-width: 1188px;
	justify-content: space-between;
	flex: 1;
`;

const LeftSection = styled.div`
	flex: 1;
`;

const LinksSection = styled.div`
	margin-top: 15px;
	display: flex;
	flex: 1;
	
	> a {
		text-decoration: none;
		transition: color 0.2s;
		color: ${colors.paragraphBlack};

		&:hover {
			color: ${colors.checkPointPink};	
		}
	}
    
	> .${classes.social} {
		margin-left: 30px;
		text-decoration: none;
		transition: color 0.2s;
	};
`;


const RightSection = styled.div`
	display: flex;
	justify-content: flex-end;
`;



const Footer = () => {
	return (
		<Container>
			<Content>
				<LeftSection>
					<Title size="22px" margin="0 0 30px 0">WELCOME TO THE FUTURE OF CYBER SECURITY</Title>
					<Paragraph color="black">© 1994 - { new Date().getFullYear() } Check Point Software Technologies Ltd. All rights reserved</Paragraph>
					<LinksSection>
						<a href="https://www.checkpoint.com/copyright/" target="_blank" rel="noopener noreferrer"><Span size="14px" margin="0 10px 0 0">Copyright</Span></a> |
						<a href="https://www.checkpoint.com/privacy/" rel="noopener noreferrer" target="_blank"><Span size="14px" margin="0 0 0 10px">Privacy Policy</Span></a>
					</LinksSection>
				</LeftSection>
				<RightSection>
					<Title size="20px" margin="18px 40px 0 0" bold>Follow Us</Title>
					<LinksSection>
						<a className={ classes.social } href="https://www.facebook.com/checkpointsoftware"> <FontAwesomeIcon icon={ faFacebookSquare } size="2x"/></a>
						<a className={ classes.social } href="https://twitter.com/checkpointsw"> <FontAwesomeIcon icon={ faTwitterSquare } size="2x"/></a>
						<a className={ classes.social } href="https://www.linkedin.com/company/check-point-software-technologies"> <FontAwesomeIcon icon={ faLinkedin } size="2x"/></a>
						<a className={ classes.social } href="https://goo.gl/nkMfP2"> <FontAwesomeIcon icon={ faYoutubeSquare } size="2x"/></a>
					</LinksSection>
				</RightSection>
			</Content>
		</Container>
	);
};

export default Footer;

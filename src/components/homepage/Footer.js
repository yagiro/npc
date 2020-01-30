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
		color: ${ colors.paragraphBlack };

		&:hover {
			color: ${ colors.checkPointPink };	
		}
	}
    
	> .${ classes.social } {
		margin-left: 30px;
	};
`;


const RightSection = styled.div`
	display: flex;
	justify-content: flex-end;
`;



const Footer = () => {

	const currentYear = new Date().getFullYear();

	const socialLinks = [
		{ href: 'https://www.facebook.com/checkpointsoftware', faIcon: faFacebookSquare },
		{ href: 'https://twitter.com/checkpointsw', faIcon: faTwitterSquare },
		{ href: 'https://www.linkedin.com/company/check-point-software-technologies', faIcon: faLinkedin },
		{ href: 'https://goo.gl/nkMfP2', faIcon: faYoutubeSquare },
	];
	
	const renderSocialLink = (socialLinks) => {
		return socialLinks.map(({ href, faIcon }) => {
			return <a key={ href } className={ classes.social } href={ href }> <FontAwesomeIcon icon={ faIcon } size="2x"/></a>;
		});
	};
	
	return (
		<Container>
			<Content>
				<LeftSection>
					<Title size="22px" margin="0 0 30px 0">WELCOME TO THE FUTURE OF CYBER SECURITY</Title>
					<Paragraph color="black">&copy; 1994 - { currentYear } Check Point Software Technologies Ltd. All rights reserved</Paragraph>
					<LinksSection>
						<a href="https://www.checkpoint.com/copyright/" target="_blank" rel="noopener noreferrer"><Span size="14px" margin="0 10px 0 0">Copyright</Span></a> |
						<a href="https://www.checkpoint.com/privacy/" rel="noopener noreferrer" target="_blank"><Span size="14px" margin="0 0 0 10px">Privacy Policy</Span></a>
					</LinksSection>
				</LeftSection>
				<RightSection>
					<Title size="20px" margin="18px 40px 0 0" bold>Follow Us</Title>
					<LinksSection>
						{
							renderSocialLink(socialLinks)
						}
					</LinksSection>
				</RightSection>
			</Content>
		</Container>
	);
};

export default Footer;

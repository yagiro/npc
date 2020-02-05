import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faLinkedin, faYoutubeSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { colors, socialUrls } from '../../app/consts/consts';
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
    background-color: ${ colors.background };
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

const currentYear = new Date().getFullYear();

const createSocialLink = (href, faIcon) => ({ href, faIcon });

// social Urls with icons
const socialUrlsAndIcons = [
	createSocialLink(socialUrls.facebook, faFacebookSquare),
	createSocialLink(socialUrls.twitter, faTwitterSquare),
	createSocialLink(socialUrls.linkedin, faLinkedin),
	createSocialLink(socialUrls.youtube, faYoutubeSquare),
];

const renderSocialLinks = (socialLinks) => {
	return socialLinks.map(({ href, faIcon }) => {
		return <a key={ href } className={ classes.social } href={ href }> <FontAwesomeIcon icon={ faIcon } size="2x"/></a>;
	});
};

const Footer = () => {
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
						{ renderSocialLinks(socialUrlsAndIcons) }
					</LinksSection>
				</RightSection>
			</Content>
		</Container>
	);
};

export default Footer;

import React from 'react';
import styled from 'styled-components';
import { colors } from '../../config/constants';
import { createClassName } from '../../lib/classNameHelper';
import Span from '../generic/Span';

const classPrefix = 'header';
export const classes = {
	logoTitle: createClassName(classPrefix, 'logo-title'),
};

const Container = styled.div`
    height: 97px;
    background: ${ colors.background };
    width: 100%;
    -webkit-box-shadow: 0 3px 10px 0 ${ colors.boxShadowGrey };
    -moz-box-shadow: 0 3px 10px 0 ${ colors.boxShadowGrey };
    box-shadow: 0 3px 10px 0 ${ colors.boxShadowGrey };  
    display: flex;
    position: relative;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
`;

const LogoSection = styled.div`
    position: absolute;
    line-height: 1;
    left: 40px;
    
    > a {
		text-decoration: none;
		transition: color 0.2s;
		color: ${colors.textBlack};
    }
    .${ classes.logoTitle } {
    	font-size: 20px;
    	font-weight: bold;
    	color: ${ colors.textBlack };
    }
`;

// const LinksSection = styled.div`
//     width: 100%;
//     justify-content: flex-end;
//     display: flex;
//     align-self: center;
//     padding-top: 20px !important;
//
//     > a {
//     	text-decoration: none;
//     	transition: color 0.2s;
//     	color: ${colors.textBlack};
//
//     	&:hover {
//     		color: ${ colors.checkPointPink };
//     	}
//     }
// `;
//
// const MenuSection = styled.div`
//     width: 100%;
//     display: flex;
//     align-self: flex-end;
//     justify-content: center;
//     position: relative;
// `;
//
// const IconsSection = styled.div`
//     position: absolute;
//     right: 0;
// `;

const Header = () => {
	return (
		<Container>
			<LogoSection>
				<a href="https://www.checkpoint.com/" target="_blank" rel="noopener noreferrer">
					<p className={ classes.logoTitle }>Check Point <Span size="15px">®</Span></p>
					<Span size="28px" margin="" color={colors.textLightGray}>PartnerMAP</Span>
				</a>
			</LogoSection>
			{/*<LinksSection>*/}
			{/*	<a href="tel:+1-866-488-6691"><Span bold margin="0 15px 0 0">+1-866-488-6691</Span></a>*/}
			{/*	<a href="" target="_blank"><Span size="14px" margin="0 15px 0 0">Contact Us</Span></a>*/}
			{/*	<a href="https://www.checkpoint.com/" target="_blank"><Span size="14px" margin="0 15px 0 0">checkpoint.com</Span></a>*/}
			{/*	<a href="https://www.checkpoint.com/" target="_blank"><Span size="14px" margin="0 15px 0 0">CheckMates</Span></a>*/}
			{/*	<a href="https://www.checkpoint.com/" target="_blank"><Span size="14px" margin="0 15px 0 0">FAQs</Span></a>*/}
			{/*	<a href="https://www.checkpoint.com/" target="_blank"><Span size="14px" margin="0 15px 0 0">Blog</Span></a>*/}
			{/*	<Span color={ colors.textBlack } margin="0 0 0 20px">Welcome: <Span pointer onClick={()=>console.log('username')} margin="" color={ colors.checkPointPink }>{ username }</Span></Span>*/}
			{/*	<Span color={ colors.textBlack } margin="0 5px 0 5px"> | </Span>*/}
			{/*	<a href="https://www.checkpoint.com/" target="_blank"><Span size="14px" margin="0 15px 0 0">Sign Out</Span></a>*/}
			{/*</LinksSection>*/}
			{/*<MenuSection>*/}
			{/*	<h3>menu</h3>*/}
			{/*	<h3>mebu </h3>*/}
			{/*	<h3>mebu</h3>*/}
			{/*	<h3>mure</h3>*/}
			{/*	<IconsSection>*/}
			{/*		<span>icon</span>*/}
			{/*		<span>ison</span>*/}
			{/*	</IconsSection>*/}
			{/*</MenuSection>*/}
		</Container>
	);
};

export default Header;

import React from 'react';
import styled from 'styled-components';
import ItemCardRightSection from './ItemCardRightSection';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 858px;
  height: 263px;
  border-radius: 3px;
  -webkit-box-shadow: 0px 2px 6px #0000001A;
  -moz-box-shadow: 0px 2px 6px #0000001A;
  box-shadow: 0px 2px 6px #0000001A;
  margin-bottom: 1rem;
  background: #FFFFFF;
`;

const ItemCardContainer = () => {
	return (
		<Container>
			<div className="main-section">

			</div>
			<ItemCardRightSection/>
		</Container>
	);
};

export default ItemCardContainer;

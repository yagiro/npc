import React from 'react';
import PdfIcon from './PdfIcon';

const ItemCardRightSection = () => {
	return (
		<div className="right-section">
			<label className="compare-label">
				<input type="checkbox" name="checkbox" value="value"/> Compare
			</label>
			<div className="price-section">
				<h1>PRICE SECTION!</h1>
			</div>
			<div className="button-section">
				<PdfIcon/>
				<button> Selection </button>
			</div>
		</div>
	);
};

export default ItemCardRightSection;

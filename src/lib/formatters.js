/**
 *
 * @param {number} num
 * @returns {string} formated string with ',' separator
 */
export const formatCurrency = (num) => {
	return num ? num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : null;
};
/**
 *
 * @param {string} hex color
 * @returns {string} rgb color, example - '13,26,165'
 */
export const hexToRgb = (hex) => {
	const bigint = parseInt(hex.substr(1), 16);
	const r = (bigint >> 16) & 255;
	const g = (bigint >> 8) & 255;
	const b = bigint & 255;
	const result = `${r},${g},${b}`;
	return result;
};

export const cssAttrIf = (attrKey, attrVal, condition) =>
	!condition ? '' : `${ attrKey }: ${ attrVal };`;

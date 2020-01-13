const globalClassPrefix = 'cp';
const sep = '-';

export const createClassName = (classPrefix, classSuffix) =>
	`${ globalClassPrefix }${ sep }${ classPrefix }${ sep }${ classSuffix }`;

/** cp-number-selector-option */

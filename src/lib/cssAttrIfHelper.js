export const cssAttrIf = (attrKey, attrVal, condition) =>
	!condition ? '' : `${ attrKey }: ${ attrVal };`;

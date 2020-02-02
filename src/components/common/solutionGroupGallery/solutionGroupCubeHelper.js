import { buildAssetAbsolutePath } from '../../../lib/assetsHelper';

export const zIndexMap = {
	footerContainer: 20,
	bodyBackground: 10,
	bodyImage: 15,
	smallImage: 15,
};

export const cssAttrIf = (attrKey, attrVal, condition) =>
	!condition ? '' : `${ attrKey }: ${ attrVal };`;

// need to add CDN URL
export const buildImageUrl = path => `${''}${path}`;

export const buildAssetAbsolutePath = relativePath => process.env.PUBLIC_URL + relativePath;

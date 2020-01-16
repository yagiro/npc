// need to add CDN URL
export const buildImageUrl = path => `${''}${path}`;

export const buildPublicFolderUrl = shortPath => process.env.PUBLIC_URL + shortPath;

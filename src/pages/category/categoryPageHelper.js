/**
 * @typedef {Object} SubModelSpec
 * @property {string} type
 * @property {string|{size: number, gbe: number, material: string}} value
 */

/**
 * @typedef {Object} SubModelAttr
 * @property {string} type
 * @property {string} value
 */

/**
 * @typedef {Object} SubModel
 * @property {string} id
 * @property {string} name
 * @property {string} description
 * @property {number} startingPrice
 * @property {string} dataSheetUrl
 * @property {Array<SubModelAttr>} attrs
 * @property {Array<SubModelSpec>} specs
 */

/**
 * @typedef {Object} Model
 * @property {string} id
 * @property {string} name
 * @property {string} groupId
 * @property {Array<SubModel>} subModels
 */

/**
 * @typedef {Object} specificationsTitles
 * @property {{size: number, gbe: number, material: string}} wanPort
 * @property {{size: number, gbe: number, material: string}} sfpDmzPort
 * @property {{size: number, gbe: number, material: string}} lanPort
 * @property {string} ports
 * @property {string} supportsExternal
 * @property {string} formFactor
 * @property {string} wireless
 */

/**
 * @typedef {Object} Model
 * @property {string} id
 * @property {string} name
 * @property {string} groupId
 * @property {Array<SubModel>} subModels
 */

/**
 * @typedef {Object} NormalizedSubModel
 * @property {string} title
 * @property {number} price
 * @property {string} description
 * @property {specificationsTitles} specificationsTitles
 */

/**
 * @typedef {Object} NormalizedModel
 * @property {string} id
 * @property {string} name
 * @property {string} groupId
 * @property {Array<NormalizesSubModel>} subModels
 */

/**
 *
 * @param {Array<SubModel>} subModels
 * @returns {Array<NormalizedModel>}
 */
export const modelsAdapter = (models) => {
	return models.map(model => {
		const result = { ...model };
		result.subModels = model.subModels.map(subModel => {
			const res = {
				title: subModel.name,
				price: subModel.startingPrice,
				description: subModel.description,
				specificationsTitles: {},
			};
			subModel.specs.forEach(spec => {
				res.specificationsTitles[spec.type] = spec.value;
			});
			subModel.attrs.forEach(attr => {
				res.specificationsTitles[attr.type] = attr.value;
			});
			return res;
		});
		return result;
	});
};

const createTabSetting = (id, label, imagePath, models) => ({ id, label, imagePath, models });

const filterModelsByTabId = (models, tabId) => models.filter(model => model.groupId === tabId);

export const tabIds = ['smbAppliances', 'smbManagment', 'smbZoneAlarm'];

export const buildModelsByTabs = (models) => {
	return {
		[ tabIds[0] ]: filterModelsByTabId(models, tabIds[0]),
		[ tabIds[1] ]: filterModelsByTabId(models, tabIds[1]),
		[ tabIds[2] ]: filterModelsByTabId(models, tabIds[2]),
	};
};

export const tabSettings = [
	createTabSetting(
		tabIds[0],
		'SMB Appliances',
		'/images/categorypage/tab1.svg',
	),
	createTabSetting(
		tabIds[1],
		'SMB Managment',
		'/images/categorypage/tab2.svg',
	),
	createTabSetting(
		tabIds[2],
		'SMB Zone Alarm',
		'/images/categorypage/tab3.svg',
	),
];

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
 * @typedef {Object} SlotData
 * @property {number} size
 * @property {number} gbe
 * @property {string} material
 */

/**
 * @typedef {Object} specificationsTitles
 * @property {SlotData} wanPort
 * @property {SlotData} sfpDmzPort
 * @property {SlotData} lanPort
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
		const adaptedModel = { ...model };
		adaptedModel.subModels = model.subModels.map(subModel => {
			const adaptedSubModel = {
				title: subModel.name,
				price: subModel.startingPrice,
				description: subModel.description,
				attrs: subModel.attrs,
				specs: subModel.specs,
				specificationsTitles: {},
			};
			subModel.specs.forEach(spec => {
				adaptedSubModel.specificationsTitles[spec.type] = spec.value;
			});
			return adaptedSubModel;
		});
		return adaptedModel;
	});
};

export const tabIds = [ 'smbAppliances', 'smbManagment', 'smbZoneAlarm' ];

const filterModelsByTabId = (models, tabId) => models.filter(model => model.groupId === tabId);
export const buildModelsGroupedByTabs = (models) => {
	return {
		[ tabIds[0] ]: filterModelsByTabId(models, tabIds[0]),
		[ tabIds[1] ]: filterModelsByTabId(models, tabIds[1]),
		[ tabIds[2] ]: filterModelsByTabId(models, tabIds[2]),
	};
};

const createTabSetting = (id, label, imagePath, models) => ({ id, label, imagePath, models });
export const tabOptions = [
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

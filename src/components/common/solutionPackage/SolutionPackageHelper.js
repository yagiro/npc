import { colors, solutionPackageTypes } from '../../../app/consts/consts';
import SolutionPackageCards from './SolutionPackageCards';
import SolutionPackageStorage from './SolutionPackageStorage';
import SolutionPackageRam from './SolutionPackageRam';
import SolutionPackageLom from './SolutionPackageLom';
import SolutionPackagePower from './SolutionPackagePower';

export const solutionPackageSettings = {
	[solutionPackageTypes.base]: {
		gradientColors: [ colors.grey_2, colors.menuGray ],
		flashCount: 1,
		title: 'Base package',
	},
	[solutionPackageTypes.plus]: {
		gradientColors: [ colors.pink_2, colors.pink_3 ],
		flashCount: 2,
		title: 'Base package',
	},
	[solutionPackageTypes.turbo]: {
		gradientColors: [ colors.pink_4, colors.pink_5 ],
		flashCount: 3,
		title: 'Base package',
	},
};

export const packageAttrTypes = {
	ioCards: 'ioCards',
	storage: 'storage',
	ram: 'ram',
	lom: 'lom',
	powerSupply: 'powerSupply',
};

export const attrComps = {
	[packageAttrTypes.ioCards]: SolutionPackageCards,
	[packageAttrTypes.storage]: SolutionPackageStorage,
	[packageAttrTypes.ram]: SolutionPackageRam,
	[packageAttrTypes.lom]: SolutionPackageLom,
	[packageAttrTypes.powerSupply]: SolutionPackagePower,
};

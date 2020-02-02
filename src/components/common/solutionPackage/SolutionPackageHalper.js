import { solutionPackageTypes } from '../../../config/constants';
import SolutionPackageCards from './SolutionPackageCards';
import SolutionPackageStorage from './SolutionPackageStorage';
import SolutionPackageRam from './SolutionPackageRam';
import SolutionPackageLom from './SolutionPackageLom';
import SolutionPackagePower from './SolutionPackagePower';

export const solutionPackageHalper = {
	[solutionPackageTypes.base]: {
		head: {
			gradientColors: [ '#7D7D7D', '#616161' ],
			flashCount: 1,
			title: 'Base package',
		},
	},
	[solutionPackageTypes.plus]: {
		head: {
			gradientColors: [ '#E95585', '#AA1E44 ' ],
			flashCount: 2,
			title: 'Base package',
		},
	},
	[solutionPackageTypes.turbo]: {
		head: {
			gradientColors: [ '#A13C71', '#752650' ],
			flashCount: 3,
			title: 'Base package',
		},
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

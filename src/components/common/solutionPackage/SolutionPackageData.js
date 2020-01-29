import React from 'react';

import { solutionPackageTypes } from '../../../config/constants';
import { classes as textItemClasses } from './SolutionPackageItemText';


export const solutionPackageData = {
	[solutionPackageTypes.base]: {
		head: {
			gradientColors: [ '#7D7D7D', '#616161' ],
			flashCount: 1,
			title: 'Base package',
		},
		card: {
			header: <>1 <span className={ textItemClasses.additional }>/8</span></>,
			chips: false,
			details: {
				slotsTotal: 8,
				slots: [['8x', '1GB', 'Cooper']]
			}
		},
		ram: {
			header: '48GB',
			chips: false,
		},
		storage: {
			header: <>1 <span className={ textItemClasses.additional }>/2</span> HDD</>,
			chips: false,
			details: [
				{
					icon: '/images/solution-package/hard-disk-drive.png',
					context: <><strong>1TB</strong></>
				},
				{
					icon: null,
					context: <><strong>HDD1</strong> Optional</>
				},
			]
		},
	},
	[solutionPackageTypes.plus]: {
		head: {
			gradientColors: [ '#E95585', '#AA1E44 ' ],
			flashCount: 2,
			title: 'Base package',
		},
		card: {
			header: <>4 <span className={ textItemClasses.additional }>/8</span></>,
			chips: false,
			details: {
				slotsTotal: 8,
				slots: [
					['8x', '1GB', 'Cooper'],
					['4x', '10GB', 'Fiber'],
					['4x', '10GB', 'Fiber'],
					['4x', '10GB', 'Fiber'],
				]
			}
		},
		ram: {
			header: '96GB',
			chips: true,
		},
		storage: {
			header: <>2 <span className={ textItemClasses.additional }>/2</span> SSD</>,
			chips: true,
			details: [
				{
					icon: '/images/solution-package/hard-disk-drive.png',
					context: <><strong>480GB</strong></>
				},
				{
					icon: '/images/solution-package/hard-disk-drive.png',
					context: <><strong>480GB</strong></>
				},
			]
		},
	},
	[solutionPackageTypes.turbo]: {
		head: {
			gradientColors: [ '#A13C71', '#752650' ],
			flashCount: 3,
			title: 'Base package',
		},
		card: {
			header: <>8 <span className={ textItemClasses.additional }>/8</span></>,
			chips: true,
			details: {
				slotsTotal: 8,
				slots: [
					['8x', '1GB', 'Cooper'],
					['4x', '10GB', 'Fiber'],
					['4x', '10GB', 'Fiber'],
					['4x', '10GB', 'Fiber'],
					['2x', '40GB', 'Fiber']
				]
			}
		},
		ram: {
			header: '96GB',
			chips: true,
		},
		storage: {
			header: <>2 <span className={ textItemClasses.additional }>/2</span> SSD</>,
			chips: true,
			details: [
				{
					icon: '/images/solution-package/hard-disk-drive.png',
					context: <><strong>480GB</strong></>
				},
				{
					icon: '/images/solution-package/hard-disk-drive.png',
					context: <><strong>480GB</strong></>
				},
			]
		},
	},
};

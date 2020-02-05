import colors from './colors';

const palette = {
	primary: {
		light: colors.pink.s020,
		main: colors.pink.s400,
		dark: colors.pink.s650,
	},
	secondary: {
		light: colors.grey.s550,
		main: colors.grey.s700,
		dark: colors.grey.s800,
	},
	background: {
		light: colors.basic.white,
		main: colors.grey.s010,
		dark: colors.grey.s250,
	},
	error: {
		light: colors.red.s050,
		main: colors.pink.s780,
		dark: colors.red.s950,
	},
	warning: {
		light: colors.purple.s030,
		main: colors.purple.s500,
		dark: colors.purple.s850,
	},
	success: {
		light: colors.green.s050,
		main: colors.green.s320,
		dark: colors.green.s850,
	},
	info: {
		light: colors.blue.s050,
		main: colors.blue.s300,
		dark: colors.blue.s850,
	},
};

export default palette;

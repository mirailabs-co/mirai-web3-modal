import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';

export default {
	plugins: [
		commonjs({ requireReturnsDefault: 'auto' }),
		// replace({
		// 	'crypto': `crypto-browserify`,
		// 	preventAssignment: true,
		// }),
	],
};

const tsconfig = require("./tsconfig.json");

/**
 *  @param {typeof tsconfig.compilerOptions} compilerOptions
 *  @returns
 */
const mapPaths = (compilerOptions) => {
	const { baseUrl, paths } = compilerOptions;
	const newPaths = {};

	const trimEnd = (str = "", length) => {
		return str.substr(0, str.length - length);
	};

	for (const key in paths) {
		if (paths.hasOwnProperty(key)) {
			newPaths[trimEnd(key, 2)] = `${baseUrl}/${trimEnd(
				paths[key].find((value) => value.endsWith("/*")),
				2,
			)}`;
		}
	}

	return newPaths;
};

module.exports = {
	presets: ["module:metro-react-native-babel-preset"],
	plugins: [
		[
			"module-resolver",
			{
				root: [tsconfig.compilerOptions.baseUrl],
				extensions: [".ios.ts", ".android.ts", ".ts", ".ios.tsx", ".android.tsx", ".jsx", ".js", ".json"],
				alias: mapPaths(tsconfig.compilerOptions),
			},
		],
	],
};

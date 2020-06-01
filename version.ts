/**
 * Created by user on 2020/6/2.
 */

// @ts-ignore
export const version: string;
export default version

Object.defineProperty(exports, "version", {
	get()
	{
		return require('./package.json').version
	}
});

Object.defineProperty(exports, "default", {
	get()
	{
		return version
	}
});


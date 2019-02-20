/**
 * Created by user on 2018/6/9/009.
 */

// @ts-ignore
import * as pkg from '../package.json';
import path = require('path');

try
{
	// @ts-ignore
	const dts = require('dts-bundle');

	dts.bundle({
		name: pkg.name,
		main: path.join(__dirname, '../index.d.ts')
	});
}
catch (e)
{
	if (e.code !== 'MODULE_NOT_FOUND')
	{
		console.error(e);
	}
	else
	{
		console.warn(`dts-bundle 不存在，忽略本次錯誤`);
	}
}

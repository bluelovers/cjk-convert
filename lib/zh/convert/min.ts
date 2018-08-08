/**
 * Created by user on 2018/7/29/029.
 */

import * as tableTw2CnDebug from '../../../build/zh/convert/table_tw2cn.debug.json';
import * as tableCn2TwDebug from '../../../build/zh/convert/table_cn2tw.debug.json';
import { defaultOptions, getOptions, getOptionsSkip, IOptions, ITable, SAFE_MODE_CHAR as _SAFE_MODE_CHAR } from './core';
import { tw2cn, cn2tw} from './index';

export { tableTw2CnDebug, tableCn2TwDebug }

export const SAFE_MODE_CHAR_MIN = _SAFE_MODE_CHAR
	.slice()
	.concat([
		//'忧',
		'脏',
		'划',
		'准',
		'发',
		'処',
		//'处',
		'處',
		//'憂',
		//'優',
	])
;

export { SAFE_MODE_CHAR_MIN as SAFE_MODE_CHAR }

/**
 * 以不造成歧異的字典表來取代
 */
export function tw2cn_min(text: string, options: IOptions = {}, ...argv)
{
	options = fixOptions(options, tableTw2CnDebug.safe);

	return tw2cn(text, options, ...argv);
}

/**
 * 以不造成歧異的字典表來取代
 */
export function cn2tw_min(text: string, options: IOptions = {}, ...argv)
{
	options = fixOptions(options, tableCn2TwDebug.safe);

	return cn2tw(text, options, ...argv);
}

export function fixOptions(options: IOptions = {}, table: ITable)
{
	options = Object.assign({}, options);
	options.table = options.table || Object.create(table);
	options.tableOnly = options.tableOnly !== false;

	options = getOptions(options, defaultOptions, SAFE_MODE_CHAR_MIN);

	return options;
}

/*
let msg = `并且之后在深海変異成亚种的半人鱼。顺便说一句，当时人鱼国的守护神《海之神》特里斯坦，发现在神代时代时被自己封印的宿敌复活了忧。`;

console.log(1, cn2tw(msg, {
	safe: false,
}));

console.log(2, cn2tw_min(msg, {
	//safe: false,
}));
*/

import * as zhConvertMin from './min';
export default zhConvertMin;

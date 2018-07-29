/**
 * Created by user on 2018/7/29/029.
 */

import * as tableTw2CnDebug from '../../../build/zh/convert/table_tw2cn.debug.json';
import * as tableCn2TwDebug from '../../../build/zh/convert/table_cn2tw.debug.json';
import { tw2cn, cn2tw, IOptions, defaultOptions, ITable } from './index';

export { tableTw2CnDebug, tableCn2TwDebug }

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

	return options;
}

/*
let msg = `并且之后在深海変異成亚种的半人鱼。顺便说一句，当时人鱼国的守护神《海之神》特里斯坦，发现在神代时代时被自己封印的宿敌复活了。`;

console.log(1, cn2tw(msg, {
	safe: false,
}));

console.log(2, cn2tw_min(msg, {
	safe: false,
}));
*/

import * as zhConvertMin from './min';
export default zhConvertMin;

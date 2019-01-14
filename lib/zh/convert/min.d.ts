/**
 * Created by user on 2018/7/29/029.
 */
import tableTw2CnDebug = require('../../../build/zh/convert/table_tw2cn.debug.json');
import tableCn2TwDebug = require('../../../build/zh/convert/table_cn2tw.debug.json');
import { IOptions, ITable } from './core';
export { tableTw2CnDebug, tableCn2TwDebug };
export declare const SAFE_MODE_CHAR_MIN: string[];
export { SAFE_MODE_CHAR_MIN as SAFE_MODE_CHAR };
/**
 * 以不造成歧異的字典表來取代
 */
export declare function tw2cn_min(text: string, options?: IOptions, ...argv: any[]): string;
/**
 * 以不造成歧異的字典表來取代
 */
export declare function cn2tw_min(text: string, options?: IOptions, ...argv: any[]): string;
export declare function fixOptions(options: IOptions, table: ITable): IOptions;
declare const _default: typeof import("./min.js");
export default _default;

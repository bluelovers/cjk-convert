/**
 * Created by user on 2018/2/15/015.
 *
 * same as chinese_convert, but a little bug fix
 */
import { _call, defaultOptions, getOptions, getOptionsSkip, IOptions, ITable, REGEXP_TEST, SAFE_MODE_CHAR } from './core';
export declare function cn2tw(text: string, options?: IOptions, ...argv: any[]): string;
export declare function tw2cn(text: string, options?: IOptions, ...argv: any[]): string;
export declare let table_cn2tw: ITable;
export declare let table_tw2cn: ITable;
export declare function _cn2tw(text: string): string;
export declare function _tw2cn(text: string): string;
export { _call, IOptions, ITable, getOptions, defaultOptions, REGEXP_TEST, getOptionsSkip, SAFE_MODE_CHAR, };
declare const _default: typeof import(".");
export default _default;

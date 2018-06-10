/**
 * Created by user on 2017/12/24/024.
 *
 * this module only do the char is exists in jp, zht, zhs
 * so don't use this module when u wanna fully zht <=> zhs
 *
 * 目前只支援 簡繁日漢字 並非全 cjk 漢字支援
 */
import ZHJP_TABLE, { TABLE_SAFE as ZHJP_TABLE_SAFE } from './table';
export { ZHJP_TABLE, ZHJP_TABLE_SAFE };
export declare const KEY_JP = "jp";
export declare const KEY_ZHT = "zht";
export declare const KEY_ZHS = "zhs";
export declare let TABLE: {
    jp: ITABLE;
    zht: ITABLE;
    zhs: ITABLE;
};
export declare let TABLE_SAFE: {
    jp: ITABLE;
    zht: ITABLE;
    zhs: ITABLE;
};
export interface ITABLE {
    [key: string]: ITABLESUB;
}
export interface ITABLESUB {
    jp: string;
    zht: string;
    zhs: string;
}
export interface IOptions {
    /**
     * 忽略的字 or 任何支援 indexOf 的 Object
     */
    skip?: any;
    /**
     * safe mode
     */
    safe?: boolean;
}
export declare const defaultOptions: IOptions;
/**
 * only 只將 日文漢字 => 轉為繁漢字
 * @type {IFrom2To}
 */
export declare const jp2zht: IFrom2To;
/**
 * only 只將 日文漢字 => 轉為簡漢字
 * @type {IFrom2To}
 */
export declare const jp2zhs: IFrom2To;
/**
 * only 簡漢字 => 轉為日漢字
 * @type {IFrom2To}
 */
export declare const zhs2jp: IFrom2To;
/**
 * only 只將 繁漢字 => 轉為日文漢字
 * @type {IFrom2To}
 */
export declare const zht2jp: IFrom2To;
/**
 * only 只將簡繁日 當中共通的 繁漢字 => 轉為簡漢字
 * 請勿作為簡繁轉換用
 * @type {IFrom2To}
 */
export declare const zht2zhs: IFrom2To;
/**
 * only 只將簡繁日 當中共通的 簡漢字 => 轉為繁漢字
 * 請勿作為簡繁轉換用
 * @type {IFrom2To}
 */
export declare const zhs2zht: IFrom2To;
/**
 * only 只將簡繁日 當中共通的 簡繁漢字 => 轉為日文漢字
 *
 * @alias cjk2jp
 *
 * @param str
 * @param {IOptions} options
 * @returns {string}
 */
export declare function zh2jp(str: any, options?: IOptions): string;
/**
 * only 只將簡繁日 當中共通的 簡繁漢字 => 轉為日文漢字
 *
 * @alias zh2jp
 *
 * @param str
 * @param {IOptions} options
 * @returns {string}
 */
export declare const cjk2jp: typeof zh2jp;
/**
 * only 只將簡繁日 當中共通的 漢字 => 轉為繁體漢字
 * 請勿作為簡繁轉換用
 *
 * @param str
 * @param {IOptions} options
 * @returns {string}
 */
export declare function cjk2zht(str: any, options?: IOptions): string;
/**
 * only 只將簡繁日 當中共通的 漢字 => 轉為簡體漢字
 * 請勿作為簡繁轉換用
 *
 * @param str
 * @param {IOptions} options
 * @returns {string}
 */
export declare function cjk2zhs(str: any, options?: IOptions): string;
export declare function init(overwrite?: boolean): {
    jp: ITABLE;
    zht: ITABLE;
    zhs: ITABLE;
};
export declare function _getdata(char: string, from: string, to: string, safe?: boolean): string;
export interface IFrom2To extends Function {
    (str: any, options?: IOptions): string;
}
import * as jpConvert from './core';
export default jpConvert;

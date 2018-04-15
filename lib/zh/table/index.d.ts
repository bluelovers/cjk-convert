import libTable from './table';
export { libTable };
export declare type IOptions = {
    safe?: boolean;
    skip?;
};
export declare function _get(a: any, value: any, ...values: any[]): any;
/**
 * 取出此漢字所對應的繁漢字
 * @type {(char: string, options?: IOptions) => string[]}
 */
export declare const tw: (char: string, options?: zhTable.IOptions) => string[];
/**
 * 取出此漢字所對應的簡漢字
 * @type {(char: string, options?: IOptions) => string[]}
 */
export declare const cn: (char: string, options?: zhTable.IOptions) => string[];
/**
 * 取出此漢字所對應的日漢字
 * @type {(char: string, options?: IOptions) => string[]}
 */
export declare const jp: (char: string, options?: zhTable.IOptions) => string[];
/**
 * 自動取出此漢字所對應的簡繁日漢字
 *
 * @param {string} char
 * @param {IOptions} options
 * @returns {string[]}
 */
export declare function auto(char: string, options?: IOptions): string[];
import * as zhTable from './index';
export default zhTable;

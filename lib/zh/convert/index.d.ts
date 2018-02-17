export interface IOptions {
    /**
     * 忽略的字 or 任何支援 indexOf 的 Object
     */
    skip?: any;
    table?: ITable | typeof _call;
}
export declare function cn2tw(text: string, options?: IOptions, ...argv: any[]): string;
export declare function tw2cn(text: string, options?: IOptions, ...argv: any[]): string;
export declare let table_cn2tw: ITable;
export declare let table_tw2cn: ITable;
export declare const REGEXP_TEST: RegExp;
export declare function _call(fn: any, text: string, options?: IOptions, ...argv: any[]): any;
export interface ITable {
    [key: string]: string;
}
import * as zhConvert from './index';
export default zhConvert;

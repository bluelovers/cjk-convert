/**
 * Created by user on 2018/8/2/002.
 */
export interface ITable {
    [key: string]: string;
}
export declare function charMap(s: string, table: ITable): string;
export declare function textMap1(text: string, table: ITable): string;
export declare function textMap2(text: string, table: ITable): string;
export declare function textMap3(text: string, table: ITable): string;
export declare function textMap4(text: string, table: ITable): string;
export { textMap4 as textMap };
declare const _default: typeof import("./core");
export default _default;
export declare function removeSame(table: ITable): ITable;
export interface IOptions {
    /**
     * 忽略的字 or 任何支援 indexOf 的 Object
     */
    skip?: any;
    table?: ITable | typeof _call;
    safe?: boolean;
    tableOnly?: boolean;
}
export declare const defaultOptions: Readonly<{
    safe: boolean;
}>;
export declare const REGEXP_TEST: RegExp;
export declare const SAFE_MODE_CHAR: string[];
export declare function getOptionsSkip(options: IOptions, skip?: string[]): IOptions;
export declare function getOptions(options?: IOptions, defaultOpts?: Readonly<{
    safe: boolean;
}>, skip?: string[]): IOptions;
export declare function _call(fn: any, text: string, options?: IOptions, ...argv: any[]): any;

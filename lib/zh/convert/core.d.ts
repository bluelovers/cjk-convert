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
export declare function _cn2tw(text: string): string;
export declare function _tw2cn(text: string): string;
import * as self from './core';
export default self;

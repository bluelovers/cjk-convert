export interface IcharCodeAtFn {
    (char: any, charCode: any, str: any): any;
}
export declare function array_unique(array: any[]): any[];
export declare function split(str: any): string[];
export declare function charCodeAt(str: any, cb?: IcharCodeAtFn): number[];
import * as self from './util';
export default self;

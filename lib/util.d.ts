/**
 * Created by user on 2017/12/9/009.
 */
export { array_unique, lazy_unique } from 'array-hyper-unique';
export interface IcharCodeAtFn {
    (char: any, charCode: any, str: any): any;
}
export declare function split(str: any): string[];
export declare function charCodeAt(str: any, cb?: IcharCodeAtFn): number[];
import * as self from './util';
export default self;

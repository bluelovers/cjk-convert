/**
 * Created by user on 2018/7/29/029.
 */
export interface IOptions {
    coreJs?: boolean;
    ignore?: boolean;
}
export declare function toStrTableArray(table: {
    [k: string]: string;
}, options?: IOptions): {
    from: any[];
    to: any[];
};
export declare function toStrTable(table: {
    [k: string]: string;
}, options?: IOptions): {
    from: string;
    to: string;
};
export declare function jsSplit(s: string): string[];
export declare function utf8Split(s: string): string[];
import * as self from './strtable';
export default self;

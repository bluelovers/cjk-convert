/**
 * Created by user on 2018/6/10/010.
 */
import { IOptions as IOptionsZhTable } from './index';
import { IOptions as IOptionsCjkConv } from '../convert';
export { default as jpConvert, zh2jp, jp2zht, jp2zhs, cjk2zht, cjk2zhs, cjk2jp } from '../../jp/index';
export declare type IOptions = {
    optionsZhTable?: IOptionsZhTable;
    skip?: any;
    lang?: 'zh' | 'cn' | 'jp' | 'auto' | string;
};
/**
 *
 * @example
 * ```
 * charTableList('司马')
 * // => [ [ '司' ], [ '馬', '马' ] ]
 * ```
 */
export declare function charTableList(text: string, options?: IOptions): string[][];
/**
 *
 * @example
 * textList('司马')
 * // => [ '司馬', '司马' ]
 */
export declare function textList(text: string, options?: IOptions): string[];
/**
 * @example
 * arrCjk(['司马', '上官', '欧阳', '夏侯'])
 * // => [ '司马', '上官', '欧阳', '夏侯', '司馬', '歐陽', '欧陽' ]
 */
export declare function arrCjk(arr: string[], options?: IOptionsCjkConv): string[];
declare const _default: typeof import("./list");
export default _default;

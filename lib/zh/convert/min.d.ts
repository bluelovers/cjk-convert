/**
 * Created by user on 2018/7/29/029.
 */
import * as tableTw2CnDebug from '../../../build/zh/convert/table_tw2cn.debug.json';
import * as tableCn2TwDebug from '../../../build/zh/convert/table_cn2tw.debug.json';
import { IOptions, ITable } from './index';
export { tableTw2CnDebug, tableCn2TwDebug };
/**
 * 以不造成歧異的字典表來取代
 */
export declare function tw2cn_min(text: string, options?: IOptions, ...argv: any[]): string;
/**
 * 以不造成歧異的字典表來取代
 */
export declare function cn2tw_min(text: string, options?: IOptions, ...argv: any[]): string;
export declare function fixOptions(options: IOptions, table: ITable): IOptions;
import * as zhConvertMin from './min';
export default zhConvertMin;

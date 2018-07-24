/**
 * Created by user on 2018/2/17/017.
 */
import { IOptions } from '../convert/index';
export declare let _table_tw: {
    '罗': string;
    '恶': string;
    '苏': string;
    '馆': string;
};
/**
 * 此表內只有符合 KEY 值時才會觸發
 */
export declare let table_jp: {
    'の': string[];
    'と': string[];
    '画': string[];
    '闘': string[];
    '鬥': string[];
    '鬭': string[];
    '鬪': string[];
    '闇': string[];
    '図': string[];
    '复': string[];
    '当': string[];
    '閤': string[];
    '阁': string[];
    '罗': string[];
    '乾': string[];
    '亁': string[];
    '乹': string[];
    '历': string[];
    '歴': string[];
    '歷': string[];
    '暦': string[];
    '曆': string[];
    '呻': string[];
    '覆': string[];
    '勉': string[];
    '勉': string[];
    '甦': string[];
    '忧': string[];
};
/**
 * 此表內符合以下任意值時會觸發
 */
export declare let table_plus: {
    '劍': string[];
    '砲': string[];
    '偽': string[];
    '內': string[];
    '鬥': string[];
    '鶏': string[];
    '兎': string[];
    '坏': string[];
    '殻': string[];
    '像': string[];
    '蘇': string[];
    '館': string[];
    '鳥': string[];
    '視': string[];
    '険': string[];
    '絶': string[];
    '鉄': string[];
    '諸': string[];
    '尋': string[];
    '裡': string[];
    '鑑': string[];
    '麵': string[];
    '歲': string[];
    '鐘': string[];
    '會': string[];
    '塗': string[];
    '髮': string[];
    '話': string[];
    '閤': string[];
    '蔘': string[];
    '労': string[];
    '国': string[];
    '罵': string[];
    '対': string[];
    '鏽': string[];
    '駄': string[];
    '薩': string[];
    '単': string[];
    '継': string[];
    '驗': string[];
    '歴': string[];
    '暦': string[];
    '団': string[];
    '麼': string[];
    '戰': string[];
    '乡': string[];
    '勉': string[];
    '餘': string[];
    '網': string[];
    '託': string[];
    '纖': string[];
    '鍊': string[];
    '擊': string[];
    '實': string[];
    '於': string[];
    '證': string[];
    '據': string[];
    '處': string[];
    '瞪': string[];
    '肢': string[];
    '肉': string[];
    '憂': string[];
    '繫': string[];
    '廻': string[];
    '録': string[];
    '鎗': string[];
    '悠': string[];
};
export interface ISimpleTable {
    [key: string]: string;
}
export declare let _table_cn: ISimpleTable;
export declare function _update(target: ISimpleTable, source: ISimpleTable): ISimpleTable;
export declare function _get(arr: string[], value: string | string[], ...values: Array<string | string[]>): string[];
export declare function jp(char: string, options?: IOptions): string[];
export declare function tw(char: string, options?: IOptions): string[];
export declare function cn(char: string, options?: IOptions): string[];
import * as self from './table';
export default self;

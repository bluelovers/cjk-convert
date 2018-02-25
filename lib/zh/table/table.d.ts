export declare let _table_tw: {
    '罗': string;
    '恶': string;
};
export declare let table_jp: {
    'の': string[];
    '画': string[];
    '闘': string[];
    '鬥': string[];
    '鬭': string[];
};
export declare let table_plus: {
    '劍': string[];
    '砲': string[];
    '偽': string[];
    '內': string[];
    '鬥': string[];
};
export interface ISimpleTable {
    [key: string]: string;
}
export declare let _table_cn: ISimpleTable;
export declare function _update(target: ISimpleTable, source: ISimpleTable): ISimpleTable;
export declare function _get(arr: string[], value: string | string[], ...values: Array<string | string[]>): string[];
export declare function jp(char: string): string[];
export declare function tw(char: string): string[];
export declare function cn(char: string): string[];
import * as self from './table';
export default self;

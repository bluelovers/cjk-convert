export declare let _table_tw: {
    '罗': string;
    '恶': string;
};
export declare let table_jp: {
    'の': string[];
    '劍': string[];
    '剣': string[];
    '画': string[];
    '砲': string[];
    '炮': string[];
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

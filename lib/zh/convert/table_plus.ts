/**
 * 此檔案內放置無視結果強制取代的表格
 * 主要用於在安全模式下依然可以多對一
 *
 */

import { ITable } from './core';

export let table_tw2cn_plus: ITable = {

};

export let table_cn2tw_plus: ITable = {
	'线': '線',
};

import * as self from './table_plus';
export default self;

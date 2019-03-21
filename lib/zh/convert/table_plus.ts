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
	'啮': '齧',
	'赃': '贓',
	'荡': '蕩',
};

export let table_tw2cn_min_plus: ITable = {
	'衝': '衝',
	'鹵': '卤',
};

export let table_cn2tw_min_plus: ITable = {

};

export default exports as typeof import('./table_plus');

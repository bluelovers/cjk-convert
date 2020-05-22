/**
 * Created by user on 2018/2/15/015.
 *
 * same as chinese_convert, but a little bug fix
 */

//import { cn2tw as _cn2tw, tw2cn as _tw2cn } from 'chinese_convert';

import {
	table_cn2tw as _table_cn2tw,
	table_tw2cn as _table_tw2cn,
} from './table';

import {
	_call,
	defaultOptions,
	getOptions,
	getOptionsSkip,
	IOptions,
	ITable,
	REGEXP_TEST,
	SAFE_MODE_CHAR,
	textMap,
} from './core';
import { table_cn2tw_plus, table_tw2cn_plus } from './table_plus';
import { wiki_s2t_v2, wiki_t2s_v2 } from './wikipedia';

export function cn2tw(text: string, options: IOptions = {}, ...argv): string
{
	return _call(_cn2tw, text, options, ...argv);
}

export function tw2cn(text: string, options: IOptions = {}, ...argv): string
{
	return _call(_tw2cn, text, options, ...argv);
}

export let table_cn2tw: ITable = Object.assign({}, _table_cn2tw, table_cn2tw_plus);

export let table_tw2cn: ITable = Object.assign({}, _table_tw2cn, table_tw2cn_plus);

export function _cn2tw(text: string): string
{
	// @ts-ignore
	return textMap(text, table_cn2tw);
}

export function _tw2cn(text: string): string
{
	// @ts-ignore
	return textMap(text, table_tw2cn);
}

export {
	_call,
	IOptions,
	ITable,
	getOptions,
	defaultOptions,
	REGEXP_TEST,
	getOptionsSkip,
	SAFE_MODE_CHAR,
}

export default exports as typeof import('./index');

//console.log(cn2tw('轉换最里后裡後轉换最后'));
//console.log(tw2cn('轉换最里后裡後轉换最后'));

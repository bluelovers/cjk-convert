/**
 * Created by user on 2018/2/15/015.
 */

import * as _table_cn2tw from 'chinese_convert/cn2tw';
import * as _table_tw2cn from 'chinese_convert/tw2cn';

import { cn2tw as _cn2tw, tw2cn as _tw2cn } from 'chinese_convert';

export interface ITable
{
	[key: string]: string,
}

export let table_cn2tw: ITable = Object.assign(_table_cn2tw, {
	'恶': '惡',
});

export let table_tw2cn: ITable = Object.assign(_table_tw2cn, {

});

export function cn2tw(text: string): string
{
	return _cn2tw(text);
}

export function tw2cn(text: string): string
{
	return _tw2cn(text);
}

import * as self from './index';
export default self;

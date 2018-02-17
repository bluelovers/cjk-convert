/**
 * Created by user on 2018/2/15/015.
 *
 * same as chinese_convert, but a little bug fix
 */

import * as _table_cn2tw from 'chinese_convert/cn2tw';
import * as _table_tw2cn from 'chinese_convert/tw2cn';

import { cn2tw as _cn2tw, tw2cn as _tw2cn } from 'chinese_convert';

export interface IOptions
{
	/**
	 * 忽略的字 or 任何支援 indexOf 的 Object
	 */
	skip?,

	table?: ITable | typeof _call,
}

export function cn2tw(text: string, options: IOptions = {}, ...argv): string
{
	return _call(_cn2tw, text, options, ...argv);
}

export function tw2cn(text: string, options: IOptions = {}, ...argv): string
{
	return _call(_tw2cn, text, options, ...argv);
}

export let table_cn2tw: ITable = Object.assign(_table_cn2tw, {
	'恶': '惡',
});

export let table_tw2cn: ITable = Object.assign(_table_tw2cn, {

});

export const REGEXP_TEST = /[\u4E00-\u9FFF]/g;

export function _call(fn, text: string, options: IOptions = {}, ...argv)
{
	if (options.skip || options.table)
	{
		return text.replace(REGEXP_TEST, function (text)
		{
			if (options.skip.indexOf(text) == -1)
			{
				return fn(text);
			}
			else if (options.table && typeof options.table == 'function')
			{
				let ret = options.table(fn, text, options, ...argv);

				if (ret !== null && typeof ret != 'undefined')
				{
					return ret;
				}
			}
			else if (options.table && options.table[text])
			{
				return options.table[text];
			}

			return text;
		});
	}

	return fn(text, options, ...argv);
}

export interface ITable
{
	[key: string]: string,
}

import * as zhConvert from './index';
export default zhConvert;

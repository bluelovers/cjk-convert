/**
 * Created by user on 2018/8/2/002.
 */

import { array_unique } from 'array-hyper-unique';
import * as _table_cn2tw from 'chinese_convert/cn2tw';
import * as _table_tw2cn from 'chinese_convert/tw2cn';
import UString = require('uni-string');
import { _re_cjk_conv } from 'regexp-helper/lib/cjk-conv';

export interface ITable
{
	[key: string]: string,
}

export function charMap(s: string, table: ITable)
{
	let t = table[s];
	return (typeof t === 'string') ? t : s
}

export function textMap1(text: string, table: ITable)
{
	let toText = [];
	let len = text.length;

	for (let i = 0; i < len; i++)
	{
		toText[i] = charMap(text[i], table);
	}

	//console.log(toText.length, toText);
	return toText.join('')
}

export function textMap2(text: string, table: ITable)
{
	let toText = UString.split(text, '');
	let len = toText.length;

	for (let i = 0; i < len; i++)
	{
		toText[i] = charMap(toText[i], table);
	}

	//console.log(toText.length, toText);
	return toText.join('');
}

export function textMap3(text: string, table: ITable)
{
	let toText = text.split(/(?:)/u);
	let len = toText.length;

	for (let i = 0; i < len; i++)
	{
		toText[i] = charMap(toText[i], table);
	}

	//console.log(toText.length, toText);
	return toText.join('');
}

export function textMap4(text: string, table: ITable)
{
	return text.replace(REGEXP_TEST, function (s)
	{
		return charMap(s, table);
	});
}

export { textMap4 as textMap }
const textMap = textMap4;

export default exports as typeof import('./core');

export function removeSame(table: ITable)
{
	return Object.entries(table)
		.reduce(function (a, b)
		{
			let [k, v] = b;

			if (k != v)
			{
				a[k] = v;
			}

			return a;
		}, {} as ITable)
	;
}

export interface IOptions
{
	/**
	 * 忽略的字 or 任何支援 indexOf 的 Object
	 */
	skip?,

	table?: ITable | typeof _call,

	safe?: boolean,

	tableOnly?: boolean,
}

export const defaultOptions = Object.freeze({
	safe: true,
});
export const REGEXP_TEST = _re_cjk_conv('ug');

export const SAFE_MODE_CHAR = array_unique([
	'后',
	'里',
	'餵',
	'志',
	'布',
	'佈',
	'系',
	'繫',
	'梁',
	'樑',
	'衝',
	'沖',
]);

export function getOptionsSkip(options: IOptions, skip = SAFE_MODE_CHAR)
{
	if (!options.skip)
	{
		options.skip = skip.slice();
	}
	else if (typeof options.skip == 'string')
	{
		options.skip += skip.join('');
	}
	else if (Array.isArray(options.skip))
	{
		options.skip = options.skip.slice().concat(skip);
	}
	else
	{
		options.table = skip.reduce(function (a, b)
		{
			a[b] = b;

			return a;
		}, Object.assign({}, options.table || {}));
	}

	return options;
}

export function getOptions(options: IOptions = {}, defaultOpts = defaultOptions, skip = SAFE_MODE_CHAR)
{
	options = Object.assign({}, defaultOpts, options);

	if (options.safe)
	{
		options = getOptionsSkip(options, skip);

		//console.log(options);
	}

	return options;
}

export function _call(fn, text: string, options: IOptions = {}, ...argv)
{
	options = getOptions(options);

	if (options.skip || options.table || options.tableOnly)
	{
		let { skip, table, tableOnly } = options;
		let not_tableOnly = !tableOnly;

		if (tableOnly && !table)
		{
			throw new Error(`table is ${table}`);
		}

		return text.replace(REGEXP_TEST, function (text)
		{
			if (skip && skip.indexOf(text) !== -1)
			{
				return text;
			}
			else if (table && typeof table == 'function')
			{
				let ret = table(fn, text, options, ...argv);

				if (ret !== null && typeof ret != 'undefined')
				{
					return ret;
				}
			}
			else if (table && table[text])
			{
				return table[text];
			}
			else if (not_tableOnly)
			{
				return fn(text);
			}

			return text;
		});
	}

	return fn(text, options, ...argv);
}

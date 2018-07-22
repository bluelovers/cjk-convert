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

	safe?: boolean,
}

export const defaultOptions = Object.freeze({
	safe: true,
});

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
	'苏': '蘇',
	'壳': '殻',
	'馆': '館',
	'里': '裡',
	'后': '後',
	'当': '當',
	'锺': '鍾',
	'钟': '鐘',
	'凃': '塗',
	'涂': '涂',
	'㑩': '儸',
	'罗': '羅',
	'啰': '囉',
	'国': '國',
	'验': '驗',
	'准': '準',

	//'历': '曆',
	'历': '歷',

	'刹': '剎',
	'讬': '託',

	'纤': '纖',

});

export let table_tw2cn: ITable = Object.assign(_table_tw2cn, {
	'殻': '壳',
	'殼': '壳',
	'館': '馆',
	'後': '后',
	'儅': '儅',
	'噹': '当',
	'鍾': '锺',
	'鐘': '钟',
	'㑹': '会',
	'塗': '凃',
	'涂': '涂',
	'儸': '㑩',
	'羅': '罗',
	'囉': '啰',
	'國': '国',

	'剎': '刹',
	'託': '讬',
});

export const REGEXP_TEST = /[\u4E00-\u9FFF]/g;

const SAFE_MODE_CHAR = [
	'后',
	'里',
];

export function _call(fn, text: string, options: IOptions = {}, ...argv)
{
	options = Object.assign({}, defaultOptions, options);

	if (options.safe)
	{
		if (!options.skip)
		{
			options.skip = SAFE_MODE_CHAR.slice();
		}
		else if (typeof options.skip == 'string')
		{
			options.skip += '后';
		}
		else if (Array.isArray(options.skip))
		{
			options.skip = options.skip.concat(SAFE_MODE_CHAR);
		}
		else
		{
			options.table = SAFE_MODE_CHAR.reduce(function (a, b)
			{
				a[b] = b;

				return a;
			}, options.table || {});
		}

		//console.log(options);
	}

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

//console.log(cn2tw('轉换最里后裡後轉换最后'));
//console.log(tw2cn('轉换最里后裡後轉换最后'));

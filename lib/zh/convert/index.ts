/**
 * Created by user on 2018/2/15/015.
 *
 * same as chinese_convert, but a little bug fix
 */

import * as _table_cn2tw from 'chinese_convert/cn2tw';
import * as _table_tw2cn from 'chinese_convert/tw2cn';

import { cn2tw as _cn2tw, tw2cn as _tw2cn } from 'chinese_convert';
import { CharacterRange } from 'regexp2/lib';

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

	'𫔀': '鍊',
	'炼': '煉',

	'恒': '恆',

	'畲': '畲',

	'处': '處',

	'复': '復',

	'钜': '鉅',

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

	'鍊': '炼',
	'錬': '炼',
	'煉': '炼',

	'壞': '坏',
	'壊': '坏',

	'佘': '佘',
	'畲': '畲',

	'處': '处',

	'丑': '丑',
	'么': '么',
	'几': '几',
	'后': '后',
	'斗': '斗',
	'艸': '艸',
	'干': '干',
	'虫': '虫',
	'岳': '岳',
	'卜': '卜',
	'于': '于',
	'里': '里',

	'鉅': '钜',

});

[
	// 不轉換的共用字
	'札',
].forEach(function (v)
{
	table_tw2cn[v] = v;
	table_cn2tw[v] = v;
});

[
	// 從轉換表中刪除的字
	'処',
	'佘',
	'畲',
	'氹',
	'凼',
].forEach(function (v)
{
	delete table_tw2cn[v];
	delete table_cn2tw[v];
});

[
	// 從 簡體轉換表內刪除的字
	'鉅',
].forEach(function (v)
{
	delete table_cn2tw[v];
});

[
	// 從繁體轉換表內刪除的字
	'钜',
].forEach(function (v)
{
	delete table_tw2cn[v];
});

export const REGEXP_TEST = /[\u4E00-\u9FFF]/g;

export const SAFE_MODE_CHAR = [
	'后',
	'里',
];

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

export interface ITable
{
	[key: string]: string,
}

import * as zhConvert from './index';
export default zhConvert;

//console.log(cn2tw('轉换最里后裡後轉换最后'));
//console.log(tw2cn('轉换最里后裡後轉换最后'));

/**
 * Created by user on 2018/6/21/021.
 */

import { array_unique } from 'array-hyper-unique';
import { _word_zh_core } from 'regexp-cjk/lib/conv';
import { jp2zhs, jp2zht, zh2jp } from '../lib/jp/core';
import { charTableList, textList, slugify } from '../lib/zh/table/list';
import { cn2tw, tw2cn } from '../lib/zh/convert';
import libTable from '../lib/zh/table';
import { cn2tw_min, tw2cn_min } from '../lib/zh/convert/min';
import { zhRegExp } from 'regexp-cjk';
import UString = require('uni-string');
import { console } from 'debug-color2';
import jsdiff = require('diff');
import NodeUtil = require('util');

console.enabledColor = true;
console.inspectOptions = {
	colors: true,
};

NodeUtil.inspect.defaultOptions.colors = true;

let word = `家傢`;

let ws = array_unique(UString.split(word, ''));

word = ws.join('');

print_log('word', NodeUtil.inspect(word), NodeUtil.inspect(ws.sort()), NodeUtil.inspect(ws.length));

print_obj(`zhRegExp\n`, new zhRegExp(word));
print_obj(`zhRegExp Unicode\n`, new zhRegExp(word, 'u'));

print_obj(`zhRegExp greedyTable\n`, new zhRegExp(word, 'u', {
	greedyTable: true,
}));

print_obj('charTableList\n', charTableList(word));
print_obj('textList\n', textList(word));

print_obj('libTable.auto\n', _table_each(word, libTable.auto));
print_obj('libTable.tw\n', _table_each(word, libTable.tw));
print_obj('libTable.cn\n', _table_each(word, libTable.cn));
print_obj('libTable.jp\n', _table_each(word, libTable.jp));

print_obj('libTable.auto greedyTable\n', _table_each(word, (s) => {
	return libTable.auto(s, {
		greedyTable: true,
	})
}));

print_diff('cn2tw', cn2tw(word), word);
print_diff('tw2cn', tw2cn(word), word);

print_diff('cn2tw_min', cn2tw_min(word), word);
print_diff('tw2cn_min', tw2cn_min(word), word);

print_diff('cn2tw false', cn2tw(word, {
	safe: false,
}), word);
print_diff('tw2cn false', tw2cn(word, {
	safe: false,
}), word);

print_diff('cn2tw_min false', cn2tw_min(word, {
	safe: false,
}), word);
print_diff('tw2cn_min false', tw2cn_min(word, {
	safe: false,
}), word);

print_diff('jp2zht', jp2zht(word), word);
print_diff('jp2zhs', jp2zhs(word), word);
print_diff('zh2jp', zh2jp(word), word);

print_diff('jp2zht false', jp2zht(word, {
	safe: false,
}), word);
print_diff('jp2zhs false', jp2zhs(word, {
	safe: false,
}), word);
print_diff('zh2jp false', zh2jp(word, {
	safe: false,
}), word);

print_diff('slugify', slugify(word), word);
print_diff('slugify true', slugify(word, true), word);

function _table_each(word: string, fn: (char: string) => string[])
{
	return array_unique(UString.split(word, '')
		.reduce(function (a, b)
		{
			a.push(...fn(b));

			return a;
		}, [] as string[]))
}

function print_diff(label: unknown | unknown[], new_text: string, src_text: string)
{
	print_log(label, diff_log(src_text, new_text));
}

function print_obj(label: unknown | unknown[], args: unknown)
{
	let inspect = NodeUtil.inspect(args, console.inspectOptions);

	if (Array.isArray(label))
	{
		console.log(...label);
	}
	else if (typeof label === 'string')
	{
		console.log(label.replace(/\n$/, ''));
	}
	else
	{
		console.log(label);
	}

	console.log(inspect);
}

function print_log(label: unknown | unknown[], ...args: unknown[])
{
	if (Array.isArray(label))
	{
		console.log(...label, ...args);
	}
	else
	{
		console.log(label, ...args);
	}
}

function diff_log(src_text: string, new_text: string): string
{
	let src_arr = UString.split(src_text, '');
	let new_arr = UString.split(new_text, '');

	let diff_arr = new_arr.reduce(function (a, s, i)
	{
		if (src_arr[i] != s)
		{
			let color = 'green';
			let t = console[color].chalk(s);
			a.push(t);
		}
		else
		{
			a.push(s);
		}

		return a
	}, []);

	/*
	let diff = jsdiff.diffChars(src_text, new_text);

	let diff_arr = diff
		.reduce(function (a, part)
		{
			if (part.added)
			{
				let color = part.added ? 'green' :
					part.removed ? 'red' : 'grey';

				let t = console[color].chalk(part.value);
				a.push(t);
			}
			else if (!part.removed)
			{
				a.push(part.value);
			}

			return a;
		}, [])
	;
	*/

	return diff_arr.join('');
}

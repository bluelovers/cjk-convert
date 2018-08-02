/**
 * Created by user on 2018/8/2/002.
 */

import * as _table_cn2tw from 'chinese_convert/cn2tw';
import * as _table_tw2cn from 'chinese_convert/tw2cn';
import UString = require('uni-string');

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
	return text.replace(/[\u4E00-\u9FFF\u{20000}-\u{2FA1F}]/u, function (s)
	{
		return charMap(s, table);
	});
}

export { textMap4 as textMap }
const textMap = textMap4;

export function _cn2tw(text: string): string
{
	// @ts-ignore
	return textMap(text, _table_cn2tw);
}

export function _tw2cn(text: string): string
{
	// @ts-ignore
	return textMap(text, _table_tw2cn);
}

import * as self from './core';

export default self;

/**
 * Created by user on 2018/7/29/029.
 */

import { table_tw2cn, table_cn2tw } from '../zh/convert/index';
import UString from 'uni-string';

export interface IOptions
{
	coreJs?: boolean,
	ignore?: boolean,
}

export function toStrTableArray(table: {
	[k: string]: string,
}, options: IOptions = {})
{
	if (typeof table !== 'object' || Array.isArray(table))
	{
		throw new TypeError(`table '${typeof table}' ${table}`);
	}

	let from = [];
	let to = [];

	const ks = Object.keys(table);
	ks.sort();

	let split = options.coreJs ? jsSplit : utf8Split;

	for (let k of ks)
	{
		let k2 = table[k];

		let s1 = split(k);
		let s2 = split(k2);

		if (s1.length !== 1 || s2.length !== 1)
		{
			let msg = `'${k}' s1: ${s1.length} ${s1} ; s2: ${s2.length} ${s2}`;

			if (options.ignore)
			{
				console.error(msg);
				continue;
			}
			else
			{
				throw new TypeError(msg);
				break;
			}
		}

		from.push(k);
		to.push(k2);
	}

	return {
		from,
		to,
	}
}

export function toStrTable(table: {
	[k: string]: string,
}, options?: IOptions)
{
	let { from, to, } = toStrTableArray(table, options);

	return {
		from: from.join(''),
		to: to.join(''),
	}
}

export function jsSplit(s: string)
{
	return s.split('');
}

export function utf8Split(s: string)
{
	return UString.split(s, '');
}

import * as self from './strtable';
export default self;

//console.log(__filename, require.extensions);

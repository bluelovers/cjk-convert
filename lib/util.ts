/**
 * Created by user on 2017/12/9/009.
 */

import { UString } from 'uni-string';

export interface IcharCodeAtFn
{
	(char, charCode, str)
}

/*
export function array_unique<T>(array: T): T
{
	return arrUniq(array);

	return (array).filter(function (el, index, arr)
	{
		return index == arr.indexOf(el);
	});

}
*/

export function split(str): string[]
{
	return UString.split(str, '');
	//return str.toString().split('');
}

export function charCodeAt(str, cb?: IcharCodeAtFn): number[]
{
	let ret = [];

	if (typeof cb !== 'function')
	{
		cb = void(0);
	}

	let _str = Array.isArray(str) ? str : str.toString();

	for (let char of _str)
	{
		let charCode = char.charCodeAt();
		let r;

		if (cb && (r = cb(char, charCode, str), typeof r != 'undefined'))
		{
			if (!r)
			{
				continue;
			}
			else if (Array.isArray(r))
			{
				ret = ret.concat(r);

				continue;
			}
		}

		ret.push(charCode);
	}

	return ret;
}

/**
 * Created by user on 2019/7/26.
 */

export const zeroWidthList = [
	'\udb40\udd00',
	'\u200c',
	'\u200d',
	'\u200b',
	'\ufeff',
	'\u200e',
	'\u200f',
] as const;

export const zeroWidthRe = new RegExp(zeroWidthList.join('|'), 'ug');

export function removeZeroWidth(input: string)
{
	return input.replace(zeroWidthRe, '')
}

export default removeZeroWidth
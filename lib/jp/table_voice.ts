import { array_unique } from 'array-hyper-unique';

const table_voice_core = {
	'か': [
		'か',
		'が',
	],
	'き': [
		'き',
		'ぎ',
	],
	'く': [
		'く',
		'ぐ',
	],
	'け': [
		'け',
		'げ',
	],
	'こ': [
		'こ',
		'ご',
	],
	'さ': [
		'さ',
		'ざ',
	],
	'し': [
		'し',
		'じ',
	],
	'す': [
		'す',
		'ず',
	],
	'せ': [
		'せ',
		'ぜ',
	],
	'そ': [
		'そ',
		'ぞ',
	],
	'た': [
		'た',
		'だ',
	],
	'ち': [
		'ち',
		'ぢ',
	],
	'つ': [
		'つ',
		'づ',
	],
	'て': [
		'て',
		'で',

	],
	'と': [
		'と',
		'ど',

	],
	'は': [
		'は',
		'ば',
		'ぱ',
	],
	'ひ': [
		'ひ',
		'び',
		'ぴ',
	],
	'ふ': [
		'ふ',
		'ぶ',
		'ぷ',
	],
	'へ': [
		'へ',
		'べ',
		'ぺ',
	],
	'ほ': [
		'ほ',
		'ぼ',
		'ぽ',
	],
	//------------------
	'カ': [
		'カ',
		'ガ',
	],
	'キ': [
		'キ',
		'ギ',
	],
	'ク': [
		'ク',
		'グ',
	],
	'ケ': [
		'ケ',
		'ゲ',
	],
	'コ': [
		'コ',
		'ゴ',
	],
	'サ': [
		'サ',
		'ザ',
	],
	'シ': [
		'シ',
		'ジ',
	],
	'ス': [
		'ス',
		'ズ',
	],
	'セ': [
		'セ',
		'ゼ',
	],
	'ソ': [
		'ソ',
		'ゾ',
	],
	'タ': [
		'タ',
		'ダ',
	],
	'チ': [
		'チ',
		'ヂ',
	],
	'ツ': [
		'ツ',
		'ヅ',
	],
	'テ': [
		'テ',
		'デ',
	],
	'ト': [
		'ト',
		'ド',
	],
	'ハ': [
		'ハ',
		'バ',
		'パ',
	],
	'ヒ': [
		'ヒ',
		'ビ',
		'ピ',
	],
	'フ': [
		'フ',
		'ブ',
		'プ',
	],
	'ヘ': [
		'ヘ',
		'ベ',
		'ペ',
	],
	'ホ': [
		'ホ',
		'ボ',
		'ポ',
	],
} as const;

/**
 * 清濁音
 * 'string' => [清音, 濁音, 半濁音]
 */
export const table_voice = Object.freeze(_buildTablePlus(table_voice_core));

export const enum EnumTableVoice
{
	/**
	 * 清音
	 */
	'01',
	/**
	 * 濁音
	 */
	'02',
	/**
	 * 半濁音
	 */
	'03',
}

/**
 * 所有清濁音 字元列表
 */
export type ITableVoiceKeys = keyof typeof table_voice;

/**
 * [清音, 濁音, 半濁音]
 */
export type ITableVoiceValues = readonly [string, string, string?];

export function hasVoiceTable(char: ITableVoiceKeys): EnumTableVoice | 0
{
	return (table_voice[char] && table_voice[char].length) || 0
}

export function _get(char: string | ITableVoiceKeys, idx: EnumTableVoice): string
{
	if (!char.length)
	{
		throw new TypeError(`char: '${char}', not valid`)
	}
	else if (idx !== EnumTableVoice['01'] && idx !== EnumTableVoice['02'] && idx !== EnumTableVoice['03'])
	{
		throw new TypeError(`char: '${char}', not valid`)
	}

	if (table_voice[char])
	{
		return table_voice[char][idx]
	}
}


/**
 * 清濁音
 * [清音, 濁音, 半濁音]
 */
export function getVoiceAll(char: string | ITableVoiceKeys): ITableVoiceValues
{
	return table_voice[char]
}

/**
 * 清音
 */
export function toVoice01(char: string | ITableVoiceKeys): string
{
	return _get(char, EnumTableVoice['01'])
}

/**
 * 濁音
 */
export function toVoice02(char: string | ITableVoiceKeys): string
{
	return _get(char, EnumTableVoice['02'])
}

/**
 * 半濁音
 */
export function toVoice03(char: string | ITableVoiceKeys): string
{
	return _get(char, EnumTableVoice['03'])
}

type IArrayOrReadonly<U> = U[] | readonly U[];

export function _buildTablePlus<T extends string, U extends string>(table_plus: Record<T, IArrayOrReadonly<U>>): Record<U | T, ITableVoiceValues>
{
	Object.keys(table_plus)
		.forEach(function (key)
		{
			table_plus[key] = Object.freeze(array_unique(table_plus[key]));

			table_plus[key].forEach(function (s)
			{
				table_plus[s] = table_plus[key];
			})
		})
	;

	// @ts-ignore
	return table_plus
}

export default getVoiceAll

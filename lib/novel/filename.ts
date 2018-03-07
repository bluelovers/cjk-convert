/**
 * Created by user on 2018/2/17/017.
 */

import { zh2jp } from '../jp';

export interface IOptions
{
	skip?: string,
}

export function filename(name: string, options: IOptions = {}): string
{
	return jp(name, options)
		.replace(/·/g, '・')
		;
}

export function word(name: string, options: IOptions = {}): string
{
	return jp(name, options);
}

export function jp(txt: string, options: IOptions = {}): string
{
	return zh(zh2jp(zh(txt), {
		// @ts-ignore
		skip: '龙竜龍制征里像拜冰澤涉丑兒娘志' + (options.skip || ''),
	}))
		.replace(/诅/g, '詛')
		.replace(/复仇/g, '復仇')
		.replace(/戦斗/g, '戦闘')
		.replace(/^プロローグ/, '序')
		.replace(/^エピローグ/, '終章')
		;
}

export function zh(txt: string, options: IOptions = {}): string
{
	return txt

		.replace(/[\u2000-\u200F]/g, '')
		.replace(/[\u2028-\u202F]/g, '')
		.replace(/[\u205F-\u2060]/g, '')

		//.replace(/儿/g, '兒')

		.replace(/与/g, '與')
		.replace(/[亜亚亞]/g, '亞')
		.replace(/価/, '價')
		.replace(/[觉覚覺]/g, '覺')
		.replace(/亏/g, '虧')
		.replace(/[·‧・···•]/g, '・')
		.replace(/泽/g, '澤')
		.replace(/^(?:后)(記|日)/, '後$1')
		.replace(/回复/g, '回復')
		.replace(/复(仇|讐)/g, '復$1')
		//.replace(/死后/g, '死後')
		//.replace(/当/g, '當')

		;
}

import * as novelFilename from './filename';
export default novelFilename;

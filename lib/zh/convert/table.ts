/**
 * Created by user on 2018/8/30/030.
 */

import * as _table_cn2tw from 'chinese_convert/cn2tw';
import * as _table_tw2cn from 'chinese_convert/tw2cn';

import { ITable } from './core';
import { wiki_s2t_v2, wiki_t2s_v2 } from './wikipedia';

export let table_cn2tw: ITable = Object.assign(_table_cn2tw, wiki_s2t_v2);

export let table_tw2cn: ITable = Object.assign(_table_tw2cn, wiki_t2s_v2);

if (1)
{
	/**
	 * 以下用來 reset 排序用
	 */

	[
		// 從轉換表中刪除的字
		'像',
		'象',
	].forEach(function (v)
	{
		delete table_tw2cn[v];
		delete table_cn2tw[v];
	});

	[
		// 從 簡體轉換表內刪除的字
	].forEach(function (v)
	{
		delete table_cn2tw[v];
	});

	[
		// 從繁體轉換表內刪除的字
	].forEach(function (v)
	{
		delete table_tw2cn[v];
	});
}

table_cn2tw = Object.assign(table_cn2tw, {
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

	'复': '復',

	'钜': '鉅',

	'谑': '謔',
	'谘': '諮',

	'干': '幹',

	'线': '線',
	'缐': '線',

	'尽': '盡',

	'处': '處',

	'面': '麵',

	'舍': '捨',

	'松': '鬆',

	'𫔮': '閒',

	//'象': '象',

});

table_tw2cn = Object.assign(table_tw2cn, {
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

	'禦': '御',

	'謔': '谑',

	'餘': '馀',

	'范': '范',
	'朴': '朴',
	'咨': '咨',
	'諮': '谘',

	'齣': '齣',

	'線': '线',
	'綫': '线',

	'儘': '尽',
	'盡': '尽',

	'划': '划',

	'凈': '净',

	'杰': '杰',

	'余': '余',
	'面': '面',

	'舍': '舍',

	'松': '松',

	//'像': '象',
	//'象': '象',

});

[
	// 從轉換表中刪除的字
	//'処',
	//'佘',
	'畲',
	'氹',
	'凼',
	'靣',

	'彪',
	'尨',
	'狵',
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
	// 加入 wikipedia.ts 後 產生的冷門字
	'党',
	'万',
	'与',
].forEach(function (v)
{
	delete table_tw2cn[v];
});

Object
	.entries({
		'餵': '𫗭',
		'餧': '𫗪',

		'淨': '净',

		'處': '处',

		'憂': '忧',
		'優': '优',

		'煙': '烟',

		'綫': '线',
		'線': '缐',

		'貳': '贰',

		// 以防萬一 因為 opencc 選用的字是 新字體 的 気
		'氣': '气',
	})
	.forEach(function (v)
	{
		let [t, s] = v;

		table_tw2cn[t] = s;
		table_cn2tw[s] = t;
	})
;

[
	// 不轉換的共用字
	'札',
	'谷',
	'污',
	'汙',
	'游',
	'遊',
	'伙',
	'夥',
	'御',
	'郁',
	'咔',
	'哢',
	'凌',
	'淩',
	'扎',
	'紮',
	'痴',
	'癡',
	'咸',
	//'准',
	'棲',
	'栖',
	'嚯',
	//'余',
	'薑',
	'姜',
	'扡',
	'扦',
	'捻',
	'撚',
	'遝',
	'沓',
	//'淨',
	'栗',
	'挽',
	'灶',
	'竈',
	'霉',
	'黴',
	'欲',
	'慾',
	'征',
	'讚',
	'菸',
	'拾',
	'十',
	'証',
	'捲',
	'卷',
].forEach(function (v)
{
	table_tw2cn[v] = v;
	table_cn2tw[v] = v;
});

import * as self from './table';
export default self;

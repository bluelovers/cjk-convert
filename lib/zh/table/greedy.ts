/**
 * Created by user on 2019/5/9.
 */

import UString from 'uni-string';
import { array_unique } from 'array-hyper-unique';
import { IOptions } from './list';

export const { _greedyTableCacheRegexp, _greedyTableCacheMap, _greedyTableCacheTest } = _greedyTableBuild([
	[/[噁悪惡]/g, '恶'],
	[/[繋繫係]/g, '系'],
	[/[糊鬍]/g, '胡'],
	[/[儅噹當]/g, '当'],
	[/[復複覆]/g, '复'],
	[/[囌蘇甦]/g, '苏'],
	[/[採彩睬踩埰綵䌽]/g, '采'],
	[/[囉啰羅㑩儸]/g, '罗'],
	[/[浏瀏劉]/g, '刘'],
	[/[劵卷巻捲]/g, '券'],
	[/[划劃畫]/g, '画'],
	[/[鬥闘鬭鬪]/g, '斗'],
	[/[乾亁乹幹]/g, '干'],
	[/[図图]/g, '圖'],
	[/[暦曆歴歷]/g, '历'],
	[/[麪麵麺]/g, '面'],
	[/[讃讚賛贊赞]/g, '赞'],
	[/[發髪髮]/g, '发'],
	[/[侭儘盡]/g, '尽'],
	[/[優忧憂]/g, '忧'],
	[/[俱倶]/g, '具'],
	[/[之的得]/g, 'の'],
	[/[與与]/g, 'と'],
	[/[她他牠祂佗]/g, '它'],
	[/[支隻枝]/g, '只'],
	[/[炮砲炰]/g, '泡'],
	[/[仲]/g, '中'],
	[/[原]/g, '元'],
	[/[迴廻]/g, '回'],
	[/[乾亁乹幹]/g, '干'],
	[/[避闢]/g, '辟'],
	[/[滷鹵卤鲁]/g, '魯'],
	[/[檯臺颱儓]/g, '台'],
	[/[宻祕秘]/g, '密'],
	[/[謎谜]/g, '迷'],
	[/[砂莎]/g, '沙'],
	[/[編篇编]/g, '篇'],
	[/[冶]/g, '治'],
	[/[炼煉錬鍊𫔀練练]/ug, '練'],
	[/[亞亚婭娅]/ug, '亚'],
	[/[塞賽]/ug, '赛'],
	[/[腾騰籐籘]/ug, '藤'],
	[/[妳祢禰]/ug, '你'],
	[/[喰飠⻞飧]/ug, '食'],
	[/[瑪馬玛马]/ug, '马'],
	[/[餸餚]/ug, '餚'],
	[/[裸]/ug, '果'],
	[/[凱凯鎧铠]/ug, '凱'],
	[/[帖贴]/ug, '貼'],
	[/[什甚]/ug, '什'],
	[/[聯联連连]/ug, '連'],
	[/[像]/ug, '象'],
	[/[藉]/ug, '借'],
	[/[蕾]/ug, '雷'],
	[/[訂订]/ug, '定'],
	[/[嚮]/ug, '向'],
	[/[糸糹丝]/ug, '絲'],
	[/[筒]/ug, '桶'],
	[/[兹玆滋]/ug, '茲'],
	[/[呐訥讷]/ug, '吶'],
	[/[穀糓]/ug, '谷'],
	[/[两兩倆俩]/ug, '両'],
	[/[帳賬账]/ug, '帐'],
	[/[版闆]/ug, '板'],
	[/[待]/ug, '呆'],
	[/[熔鎔镕融螎]/ug, '溶'],
	[/[匯汇]/ug, '彙'],
	[/[彿仏]/ug, '佛'],
	[/[阿]/ug, '啊'],
	[/[家]/ug, '傢'],
	[/[爆]/ug, '暴'],
	[/[網䋄䋞綱纲]/ug, '网'],
	[/[註]/ug, '注'],
	[/[灌贯潅]/ug, '貫'],
	[/[倒]/ug, '到'],
	[/[秤]/ug, '平'],
	[/[勋勛勲勳]/ug, '勋'],
	[/[麗丽莉]/ug, '利'],
	[/[已巳]/ug, '己'],
	[/[嗬]/ug, '呵'],
	[/[哊哟唷唹喲]/ug, '呦'],
	[/[杰潔洁]/ug, '傑'],
	[/[嘻]/ug, '嬉'],
	[/[痲痳麻]/ug, '嘛'],
]);

//console.log(_greedyTableCacheTest);

export function _greedyTableBuild(data: [RegExp, string][]): {
	_greedyTableCacheRegexp: readonly (readonly [RegExp, string])[];
	_greedyTableCacheMap: Map<string, readonly string[]>;
	_greedyTableCacheTest: RegExp;
}
{
	const _greedyTableCacheRegexp: [RegExp, string][] = data;

	let _greedyTableCacheMap: Map<string, string[]>;
	let _greedyTableCacheTest: RegExp;

	_greedyTableCacheMap = new Map<string, string[]>();

	let arr = _greedyTableCacheRegexp
		.reduce(function (arr, r)
		{
			let s = r[0].source.replace(/^.*\[|\].*$/ug, '');

			let a = UString.split(s, '').concat(r[1]);

			a.forEach(c =>
			{
				_greedyTableCacheMap.set(c, a)
			});

			arr.push(...a);

			return arr;
		}, [] as string[])
	;

	_greedyTableCacheTest = new RegExp(`[${array_unique(arr).join('')}]`, 'u');

	return {
		_greedyTableCacheRegexp,
		_greedyTableCacheMap,
		_greedyTableCacheTest,
	};
}

export function greedyTableTest(input: string)
{
	return _greedyTableCacheTest.test(input)
}

export function greedyTableCharArray(char: string)
{
	return _greedyTableCacheMap.get(char)
}

export function greedyTableReplace(input: string): string
{
	if (greedyTableTest(input))
	{
		return _greedyTableCacheRegexp
			.reduce(function (input, r)
			{
				return input.replace(r[0], r[1])
			}, input)
			;
	}

	return input
}

export default exports as typeof import('./greedy');

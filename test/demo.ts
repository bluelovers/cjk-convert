/**
 * Created by user on 2018/2/17/017.
 */

import cjkConv from '..';

let t = '魔物解説　ランク等話　蚀蝕蝕王で触王 冒険者ギルド解説 蚀|蝕战|戦马|馬亚|亞國預中日漢字對照表';

/**
 * zh2jp = cjk2jp
 */
[
	'zh2jp',
	'jp2zhs',
	'jp2zht',

	null,

	'cjk2jp',
	'cjk2zhs',
	'cjk2zht',
].forEach(function (fn)
{
	if (!fn)
	{
		console.log();
	}
	else
	{
		console.log(`[${fn.padEnd(7, ' ')}]`, cjkConv.jpConvert[fn](t));
	}
});

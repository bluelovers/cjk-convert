# cjk-conv

> convert chinese, japanese 簡繁日漢字轉換 ( merge/split submodule from node-novel, regexp-cjk, str-util )

`npm install cjk-conv`

## usage

```ts
import cjkConv from 'cjk-conv';
import { cjkConv } from 'cjk-conv';
import * as cjkConv from 'cjk-conv';
const cjkConv = require("cjk-conv");
```

### api

[see](lib/index.d.ts)

```ts
{ zhConvert, tw2cn, cn2tw }

{ zhTable }

{ jpConvert, zh2jp, jp2zht, jp2zhs, cjk2zht, cjk2zhs, cjk2jp }
```

### jpConvert

```ts
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
```

output
```
[zh2jp  ] 魔物解説　ランク等話　蝕蝕蝕王で触王 冒険者ギルド解説 蝕|蝕戦|戦馬|馬亜|亜国預中日漢字対照表
[jp2zhs ] 魔物解说　ランク等话　蚀蚀蚀王で触王 冒险者ギルド解说 蚀|蚀战|战马|马亚|亞國預中日汉字對照表
[jp2zht ] 魔物解說　ランク等話　蚀蝕蝕王で觸王 冒險者ギルド解說 蚀|蝕战|戰马|馬亚|亞國預中日漢字對照表

[cjk2jp ] 魔物解説　ランク等話　蝕蝕蝕王で触王 冒険者ギルド解説 蝕|蝕戦|戦馬|馬亜|亜国預中日漢字対照表
[cjk2zhs] 魔物解说　ランク等话　蚀蚀蚀王で触王 冒险者ギルド解说 蚀|蚀战|战马|马亚|亚国預中日汉字对照表
[cjk2zht] 魔物解說　ランク等話　蝕蝕蝕王で觸王 冒險者ギルド解說 蝕|蝕戰|戰馬|馬亞|亞國預中日漢字對照表
```

### zhConvert

* [see](lib/zh/convert/index.d.ts)

same as `chinese_convert`, but a little bug fix

```ts
let input = '简繁转换功能测试簡繁轉換功能測試';
let tw = cn2tw(input);
let cn2 = tw2cn(tw);

console.log('input=%s => tw =%s', input, tw);
console.log('input=%s => cn2=%s', tw, cn2);

tw = cn2tw(input, {
	skip: '转换轉換',
});
cn2 = tw2cn(tw, {
	skip: '转换轉換',
});

console.log('以下忽略特定字詞不轉換');

console.log('input=%s => tw =%s', input, tw);
console.log('input=%s => cn2=%s', tw, cn2);

```

### zhTable

提供給 [`regexp-cjk`](https://www.npmjs.com/package/regexp-cjk) 使用

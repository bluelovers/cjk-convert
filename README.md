# cjk-conv

> convert chinese, japanese 簡繁日漢字轉換 ( merge/split submodule from node-novel, regexp-cjk, str-util )

`npm install cjk-conv`

[LIVE DEMO](https://demonovel.netlify.com/tool/cjk-conv)

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

#### zhConvertMin

* [min.d.ts](lib/zh/convert/min.d.ts)

以最小的字典來進行繁簡轉換，減少錯誤轉換的狀況

```ts
import { tw2cn_min, cn2tw_min } from 'cjk-conv/lib/zh/convert/min';

let msg = `并且之后在深海変異成亚种的半人鱼。顺便说一句，当时人鱼国的守护神《海之神》特里斯坦，发现在神代时代时被自己封印的宿敌复活了。`;

console.log(1, cn2tw(msg, {
	safe: false,
}));

console.log(2, cn2tw_min(msg, {
	safe: false,
}));
```

```
1 '並且之後在深海変異成亞種的半人魚。順便說一句，當時人魚國的守護神《海之神》特裡斯坦，發現在神代時代時被自己封印的宿敵復活了。'
2 '並且之后在深海変異成亞種的半人魚。順便說一句，當時人魚國的守護神《海之神》特里斯坦，發現在神代時代時被自己封印的宿敵復活了。'
```

### zhTable

提供給 [`regexp-cjk`](https://www.npmjs.com/package/regexp-cjk) 使用

### zhTableList

[API](lib/zh/table/list.d.ts)

*port from [novel-segment](https://github.com/bluelovers/node-segment/blob/master/lib/util/cjk.ts)*

```ts
import zhTableList from 'cjk-conv/lib/zh/table/list';
```

```ts
zhTableList.charTableList('司马')
// => [ [ '司' ], [ '馬', '马' ] ]

zhTableList.textList('司马')
// => [ '司馬', '司马' ]

zhTableList.arrCjk(['司马', '上官', '欧阳', '夏侯'])
// => [ '司马', '上官', '欧阳', '夏侯', '司馬', '歐陽', '欧陽' ]
```

### slugify

> 可以用來作為檢查不同字串是否為相同的類似/異體漢字

```ts
import { slugify } from 'cjk-conv/lib/zh/table/list';
```

```ts
let word = `吶呐訥讷`;

print_diff('slugify', slugify(word), word);
// => slugify 吶吶訥訥
print_diff('slugify true', slugify(word, true), word);
// => slugify true 吶吶吶吶
```

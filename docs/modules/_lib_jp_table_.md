[cjk-conv](../README.md) > ["lib/jp/table"](../modules/_lib_jp_table_.md)



# External module: "lib/jp/table"


Created by user on 2017/12/24/024.
*__see__*: [https://www.jcinfo.net/tw/tools/kanji](https://www.jcinfo.net/tw/tools/kanji)

*__see__*: [http://dict.variants.moe.edu.tw/variants/rbt/japan_chinese_character_tiles.rbt?pageId=2981908](http://dict.variants.moe.edu.tw/variants/rbt/japan_chinese_character_tiles.rbt?pageId=2981908)

*__see__*: [https://en.wikipedia.org/wiki/List_of_j%C5%8Dy%C5%8D_kanji](https://en.wikipedia.org/wiki/List_of_j%C5%8Dy%C5%8D_kanji)

*__see__*: [https://hanzi.unihan.com.cn/CJKCompare](https://hanzi.unihan.com.cn/CJKCompare)

*__see__*: [http://www5b.biglobe.ne.jp/%7Eharigaya/variants.html](http://www5b.biglobe.ne.jp/%7Eharigaya/variants.html)


## Index

### Variables

* [TABLE](_lib_jp_table_.md#table)
* [TABLE_SAFE](_lib_jp_table_.md#table_safe)
* [cache](_lib_jp_table_.md#cache)
* [skip](_lib_jp_table_.md#skip)
* [teachKanjiComparison](_lib_jp_table_.md#teachkanjicomparison)


### Functions

* [addNew](_lib_jp_table_.md#addnew)



---
## Variables
<a id="table"></a>

### «Let» TABLE

**●  TABLE**:  *`string`[][]*  =  [] as string[][]

*Defined in [lib/jp/table.ts:17](https://github.com/bluelovers/cjk-convert/blob/7c2ab19/lib/jp/table.ts#L17)*





___

<a id="table_safe"></a>

### «Let» TABLE_SAFE

**●  TABLE_SAFE**:  *`string`[][]*  =  [] as string[][]

*Defined in [lib/jp/table.ts:61](https://github.com/bluelovers/cjk-convert/blob/7c2ab19/lib/jp/table.ts#L61)*





___

<a id="cache"></a>

### «Let» cache

**●  cache**:  *`any`[]*  =  []

*Defined in [lib/jp/table.ts:88](https://github.com/bluelovers/cjk-convert/blob/7c2ab19/lib/jp/table.ts#L88)*





___

<a id="skip"></a>

### «Let» skip

**●  skip**:  *`string`[]*  =  [
		'系',
		'欠',
		'凶',
		'后',
		'只',
		'隻',
		'无',
		'叶',
	]

*Defined in [lib/jp/table.ts:64](https://github.com/bluelovers/cjk-convert/blob/7c2ab19/lib/jp/table.ts#L64)*





___

<a id="teachkanjicomparison"></a>

### «Const» teachKanjiComparison

**●  teachKanjiComparison**:  *`string`[][]*  =  require('./teachKanjiComparison.json') as string[][]

*Defined in [lib/jp/table.ts:15](https://github.com/bluelovers/cjk-convert/blob/7c2ab19/lib/jp/table.ts#L15)*



資料來源 [https://www.jpmarumaru.com/tw/teachKanjiComparison.asp](https://www.jpmarumaru.com/tw/teachKanjiComparison.asp)
*__see__*: [https://www.jpmarumaru.com/tw/teachKanjiComparison.asp](https://www.jpmarumaru.com/tw/teachKanjiComparison.asp)





___


## Functions
<a id="addnew"></a>

###  addNew

► **addNew**(table: *`string`[][]*, jp: *`any`*, zht: *`any`*, zhs: *`any`*): `string`[][]



*Defined in [lib/jp/table.ts:19](https://github.com/bluelovers/cjk-convert/blob/7c2ab19/lib/jp/table.ts#L19)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| table | `string`[][]   |  - |
| jp | `any`   |  - |
| zht | `any`   |  - |
| zhs | `any`   |  - |





**Returns:** `string`[][]





___



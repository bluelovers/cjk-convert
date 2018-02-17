[cjk-conv](../README.md) > ["lib/zh/convert/index"](../modules/_lib_zh_convert_index_.md)



# External module: "lib/zh/convert/index"

## Index

### Interfaces

* [IOptions](../interfaces/_lib_zh_convert_index_.ioptions.md)
* [ITable](../interfaces/_lib_zh_convert_index_.itable.md)


### Variables

* [REGEXP_TEST](_lib_zh_convert_index_.md#regexp_test)
* [table_cn2tw](_lib_zh_convert_index_.md#table_cn2tw)
* [table_tw2cn](_lib_zh_convert_index_.md#table_tw2cn)


### Functions

* [_call](_lib_zh_convert_index_.md#_call)
* [cn2tw](_lib_zh_convert_index_.md#cn2tw)
* [tw2cn](_lib_zh_convert_index_.md#tw2cn)



---
## Variables
<a id="regexp_test"></a>

### «Const» REGEXP_TEST

**●  REGEXP_TEST**:  *`RegExp`*  =  /[\u4E00-\u9FFF]/g

*Defined in [lib/zh/convert/index.ts:40](https://github.com/bluelovers/cjk-convert/blob/7c2ab19/lib/zh/convert/index.ts#L40)*





___

<a id="table_cn2tw"></a>

### «Let» table_cn2tw

**●  table_cn2tw**:  *[ITable](../interfaces/_lib_zh_convert_index_.itable.md)*  =  Object.assign(_table_cn2tw, {
	'恶': '惡',
})

*Defined in [lib/zh/convert/index.ts:32](https://github.com/bluelovers/cjk-convert/blob/7c2ab19/lib/zh/convert/index.ts#L32)*





___

<a id="table_tw2cn"></a>

### «Let» table_tw2cn

**●  table_tw2cn**:  *[ITable](../interfaces/_lib_zh_convert_index_.itable.md)*  =  Object.assign(_table_tw2cn, {

})

*Defined in [lib/zh/convert/index.ts:36](https://github.com/bluelovers/cjk-convert/blob/7c2ab19/lib/zh/convert/index.ts#L36)*





___


## Functions
<a id="_call"></a>

###  _call

► **_call**(fn: *`any`*, text: *`string`*, options?: *[IOptions](../interfaces/_lib_zh_convert_index_.ioptions.md)*, ...argv: *`any`[]*): `any`



*Defined in [lib/zh/convert/index.ts:42](https://github.com/bluelovers/cjk-convert/blob/7c2ab19/lib/zh/convert/index.ts#L42)*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| fn | `any`  | - |   - |
| text | `string`  | - |   - |
| options | [IOptions](../interfaces/_lib_zh_convert_index_.ioptions.md)  |  {} |   - |
| argv | `any`[]  | - |   - |





**Returns:** `any`





___

<a id="cn2tw"></a>

###  cn2tw

► **cn2tw**(text: *`string`*, options?: *[IOptions](../interfaces/_lib_zh_convert_index_.ioptions.md)*, ...argv: *`any`[]*): `string`



*Defined in [lib/zh/convert/index.ts:22](https://github.com/bluelovers/cjk-convert/blob/7c2ab19/lib/zh/convert/index.ts#L22)*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| text | `string`  | - |   - |
| options | [IOptions](../interfaces/_lib_zh_convert_index_.ioptions.md)  |  {} |   - |
| argv | `any`[]  | - |   - |





**Returns:** `string`





___

<a id="tw2cn"></a>

###  tw2cn

► **tw2cn**(text: *`string`*, options?: *[IOptions](../interfaces/_lib_zh_convert_index_.ioptions.md)*, ...argv: *`any`[]*): `string`



*Defined in [lib/zh/convert/index.ts:27](https://github.com/bluelovers/cjk-convert/blob/7c2ab19/lib/zh/convert/index.ts#L27)*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| text | `string`  | - |   - |
| options | [IOptions](../interfaces/_lib_zh_convert_index_.ioptions.md)  |  {} |   - |
| argv | `any`[]  | - |   - |





**Returns:** `string`





___



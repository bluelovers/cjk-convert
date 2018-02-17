[cjk-conv](../README.md) > ["lib/zh/table/index"](../modules/_lib_zh_table_index_.md)



# External module: "lib/zh/table/index"

## Index

### Interfaces

* [IOptions](../interfaces/_lib_zh_table_index_.ioptions.md)


### Variables

* [cn](_lib_zh_table_index_.md#cn)
* [jp](_lib_zh_table_index_.md#jp)
* [tw](_lib_zh_table_index_.md#tw)


### Functions

* [_get](_lib_zh_table_index_.md#_get)
* [_wrapFn](_lib_zh_table_index_.md#_wrapfn)
* [auto](_lib_zh_table_index_.md#auto)



---
## Variables
<a id="cn"></a>

### «Const» cn

**●  cn**:  *`(Anonymous function)`*  =  _wrapFn('cn')

*Defined in [lib/zh/table/index.ts:57](https://github.com/bluelovers/cjk-convert/blob/7c2ab19/lib/zh/table/index.ts#L57)*



取出此漢字所對應的簡漢字
*__type__*: {(char: string, options?: IOptions) => string[]}





___

<a id="jp"></a>

### «Const» jp

**●  jp**:  *`(Anonymous function)`*  =  _wrapFn('jp')

*Defined in [lib/zh/table/index.ts:63](https://github.com/bluelovers/cjk-convert/blob/7c2ab19/lib/zh/table/index.ts#L63)*



取出此漢字所對應的日漢字
*__type__*: {(char: string, options?: IOptions) => string[]}





___

<a id="tw"></a>

### «Const» tw

**●  tw**:  *`(Anonymous function)`*  =  _wrapFn('tw')

*Defined in [lib/zh/table/index.ts:51](https://github.com/bluelovers/cjk-convert/blob/7c2ab19/lib/zh/table/index.ts#L51)*



取出此漢字所對應的繁漢字
*__type__*: {(char: string, options?: IOptions) => string[]}





___


## Functions
<a id="_get"></a>

###  _get

► **_get**(a: *`any`*, value: *`any`*, ...values: *`any`[]*): `any`



*Defined in [lib/zh/table/index.ts:14](https://github.com/bluelovers/cjk-convert/blob/7c2ab19/lib/zh/table/index.ts#L14)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| a | `any`   |  - |
| value | `any`   |  - |
| values | `any`[]   |  - |





**Returns:** `any`





___

<a id="_wrapfn"></a>

###  _wrapFn

► **_wrapFn**(fn: *`string`*): `(Anonymous function)`



*Defined in [lib/zh/table/index.ts:24](https://github.com/bluelovers/cjk-convert/blob/7c2ab19/lib/zh/table/index.ts#L24)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| fn | `string`   |  - |





**Returns:** `(Anonymous function)`





___

<a id="auto"></a>

###  auto

► **auto**(char: *`string`*, options?: *[IOptions](../interfaces/_lib_zh_table_index_.ioptions.md)*): `string`[]



*Defined in [lib/zh/table/index.ts:72](https://github.com/bluelovers/cjk-convert/blob/7c2ab19/lib/zh/table/index.ts#L72)*



自動取出此漢字所對應的簡繁日漢字


**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| char | `string`  | - |   - |
| options | [IOptions](../interfaces/_lib_zh_table_index_.ioptions.md)  |  {} |   - |





**Returns:** `string`[]







___



[cjk-conv](../README.md) > ["lib/jp/core"](../modules/_lib_jp_core_.md)



# External module: "lib/jp/core"

## Index

### Modules

* [_](_lib_jp_core_._.md)


### Interfaces

* [IFrom2To](../interfaces/_lib_jp_core_.ifrom2to.md)
* [IOptions](../interfaces/_lib_jp_core_.ioptions.md)
* [ITABLE](../interfaces/_lib_jp_core_.itable.md)
* [ITABLESUB](../interfaces/_lib_jp_core_.itablesub.md)


### Variables

* [KEY_JP](_lib_jp_core_.md#key_jp)
* [KEY_ZHS](_lib_jp_core_.md#key_zhs)
* [KEY_ZHT](_lib_jp_core_.md#key_zht)
* [TABLE](_lib_jp_core_.md#table)
* [TABLE_SAFE](_lib_jp_core_.md#table_safe)
* [cjk2jp](_lib_jp_core_.md#cjk2jp)
* [inited](_lib_jp_core_.md#inited)
* [jp2zhs](_lib_jp_core_.md#jp2zhs)
* [jp2zht](_lib_jp_core_.md#jp2zht)
* [zhs2jp](_lib_jp_core_.md#zhs2jp)
* [zhs2zht](_lib_jp_core_.md#zhs2zht)
* [zht2jp](_lib_jp_core_.md#zht2jp)
* [zht2zhs](_lib_jp_core_.md#zht2zhs)


### Functions

* [_getdata](_lib_jp_core_.md#_getdata)
* [cjk2zhs](_lib_jp_core_.md#cjk2zhs)
* [cjk2zht](_lib_jp_core_.md#cjk2zht)
* [init](_lib_jp_core_.md#init)
* [zh2jp](_lib_jp_core_.md#zh2jp)


### Object literals

* [defaultOptions](_lib_jp_core_.md#defaultoptions)



---
## Variables
<a id="key_jp"></a>

### «Const» KEY_JP

**●  KEY_JP**:  *"jp"*  = "jp"

*Defined in [lib/jp/core.ts:15](https://github.com/bluelovers/cjk-convert/blob/7c2ab19/lib/jp/core.ts#L15)*





___

<a id="key_zhs"></a>

### «Const» KEY_ZHS

**●  KEY_ZHS**:  *"zhs"*  = "zhs"

*Defined in [lib/jp/core.ts:17](https://github.com/bluelovers/cjk-convert/blob/7c2ab19/lib/jp/core.ts#L17)*





___

<a id="key_zht"></a>

### «Const» KEY_ZHT

**●  KEY_ZHT**:  *"zht"*  = "zht"

*Defined in [lib/jp/core.ts:16](https://github.com/bluelovers/cjk-convert/blob/7c2ab19/lib/jp/core.ts#L16)*





___

<a id="table"></a>

### «Let» TABLE

**●  TABLE**:  *`object`* 

*Defined in [lib/jp/core.ts:20](https://github.com/bluelovers/cjk-convert/blob/7c2ab19/lib/jp/core.ts#L20)*


#### Type declaration




 jp: [ITABLE](../interfaces/_lib_jp_core_.itable.md)






 zhs: [ITABLE](../interfaces/_lib_jp_core_.itable.md)






 zht: [ITABLE](../interfaces/_lib_jp_core_.itable.md)







___

<a id="table_safe"></a>

### «Let» TABLE_SAFE

**●  TABLE_SAFE**:  *`object`* 

*Defined in [lib/jp/core.ts:26](https://github.com/bluelovers/cjk-convert/blob/7c2ab19/lib/jp/core.ts#L26)*


#### Type declaration




 jp: [ITABLE](../interfaces/_lib_jp_core_.itable.md)






 zhs: [ITABLE](../interfaces/_lib_jp_core_.itable.md)






 zht: [ITABLE](../interfaces/_lib_jp_core_.itable.md)







___

<a id="cjk2jp"></a>

### «Const» cjk2jp

**●  cjk2jp**:  *[zh2jp](_lib_jp_core_.md#zh2jp)*  =  zh2jp

*Defined in [lib/jp/core.ts:199](https://github.com/bluelovers/cjk-convert/blob/7c2ab19/lib/jp/core.ts#L199)*



only 只將簡繁日 當中共通的 簡繁漢字 => 轉為日文漢字
*__alias__*: zh2jp

*__param__*: 

*__param__*: 

*__returns__*: 





___

<a id="inited"></a>

### «Let» inited

**●  inited**:  *`boolean`*  = false

*Defined in [lib/jp/core.ts:19](https://github.com/bluelovers/cjk-convert/blob/7c2ab19/lib/jp/core.ts#L19)*





___

<a id="jp2zhs"></a>

### «Const» jp2zhs

**●  jp2zhs**:  *[IFrom2To](../interfaces/_lib_jp_core_.ifrom2to.md)*  =  _.jp2zhs as IFrom2To

*Defined in [lib/jp/core.ts:120](https://github.com/bluelovers/cjk-convert/blob/7c2ab19/lib/jp/core.ts#L120)*



only 只將 日文漢字 => 轉為簡漢字
*__type__*: {IFrom2To}





___

<a id="jp2zht"></a>

### «Const» jp2zht

**●  jp2zht**:  *[IFrom2To](../interfaces/_lib_jp_core_.ifrom2to.md)*  =  _.jp2zht as IFrom2To

*Defined in [lib/jp/core.ts:115](https://github.com/bluelovers/cjk-convert/blob/7c2ab19/lib/jp/core.ts#L115)*



only 只將 日文漢字 => 轉為繁漢字
*__type__*: {IFrom2To}





___

<a id="zhs2jp"></a>

### «Const» zhs2jp

**●  zhs2jp**:  *[IFrom2To](../interfaces/_lib_jp_core_.ifrom2to.md)*  =  _.zhs2jp

*Defined in [lib/jp/core.ts:126](https://github.com/bluelovers/cjk-convert/blob/7c2ab19/lib/jp/core.ts#L126)*



only 簡漢字 => 轉為日漢字
*__type__*: {IFrom2To}





___

<a id="zhs2zht"></a>

### «Const» zhs2zht

**●  zhs2zht**:  *[IFrom2To](../interfaces/_lib_jp_core_.ifrom2to.md)*  =  _.zhs2zht

*Defined in [lib/jp/core.ts:146](https://github.com/bluelovers/cjk-convert/blob/7c2ab19/lib/jp/core.ts#L146)*



only 只將簡繁日 當中共通的 簡漢字 => 轉為繁漢字 請勿作為簡繁轉換用
*__type__*: {IFrom2To}





___

<a id="zht2jp"></a>

### «Const» zht2jp

**●  zht2jp**:  *[IFrom2To](../interfaces/_lib_jp_core_.ifrom2to.md)*  =  _.zht2jp

*Defined in [lib/jp/core.ts:132](https://github.com/bluelovers/cjk-convert/blob/7c2ab19/lib/jp/core.ts#L132)*



only 只將 繁漢字 => 轉為日文漢字
*__type__*: {IFrom2To}





___

<a id="zht2zhs"></a>

### «Const» zht2zhs

**●  zht2zhs**:  *[IFrom2To](../interfaces/_lib_jp_core_.ifrom2to.md)*  =  _.zht2zhs

*Defined in [lib/jp/core.ts:139](https://github.com/bluelovers/cjk-convert/blob/7c2ab19/lib/jp/core.ts#L139)*



only 只將簡繁日 當中共通的 繁漢字 => 轉為簡漢字 請勿作為簡繁轉換用
*__type__*: {IFrom2To}





___


## Functions
<a id="_getdata"></a>

###  _getdata

► **_getdata**(char: *`string`*, from: *`string`*, to: *`string`*, safe?: *`boolean`*): `string`



*Defined in [lib/jp/core.ts:382](https://github.com/bluelovers/cjk-convert/blob/7c2ab19/lib/jp/core.ts#L382)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| char | `string`   |  - |
| from | `string`   |  - |
| to | `string`   |  - |
| safe | `boolean`   |  - |





**Returns:** `string`





___

<a id="cjk2zhs"></a>

###  cjk2zhs

► **cjk2zhs**(str: *`any`*, options?: *[IOptions](../interfaces/_lib_jp_core_.ioptions.md)*): `string`



*Defined in [lib/jp/core.ts:250](https://github.com/bluelovers/cjk-convert/blob/7c2ab19/lib/jp/core.ts#L250)*



only 只將簡繁日 當中共通的 漢字 => 轉為簡體漢字 請勿作為簡繁轉換用


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| str | `any`   |  - |
| options | [IOptions](../interfaces/_lib_jp_core_.ioptions.md)   |  - |





**Returns:** `string`







___

<a id="cjk2zht"></a>

###  cjk2zht

► **cjk2zht**(str: *`any`*, options?: *[IOptions](../interfaces/_lib_jp_core_.ioptions.md)*): `string`



*Defined in [lib/jp/core.ts:209](https://github.com/bluelovers/cjk-convert/blob/7c2ab19/lib/jp/core.ts#L209)*



only 只將簡繁日 當中共通的 漢字 => 轉為繁體漢字 請勿作為簡繁轉換用


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| str | `any`   |  - |
| options | [IOptions](../interfaces/_lib_jp_core_.ioptions.md)   |  - |





**Returns:** `string`







___

<a id="init"></a>

###  init

► **init**(overwrite?: *`boolean`*): `object`



*Defined in [lib/jp/core.ts:302](https://github.com/bluelovers/cjk-convert/blob/7c2ab19/lib/jp/core.ts#L302)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| overwrite | `boolean`   |  - |





**Returns:** `object`





___

<a id="zh2jp"></a>

###  zh2jp

► **zh2jp**(str: *`any`*, options?: *[IOptions](../interfaces/_lib_jp_core_.ioptions.md)*): `string`



*Defined in [lib/jp/core.ts:157](https://github.com/bluelovers/cjk-convert/blob/7c2ab19/lib/jp/core.ts#L157)*



only 只將簡繁日 當中共通的 簡繁漢字 => 轉為日文漢字
*__alias__*: cjk2jp



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| str | `any`   |  - |
| options | [IOptions](../interfaces/_lib_jp_core_.ioptions.md)   |  - |





**Returns:** `string`







___


<a id="defaultoptions"></a>

## Object literal: defaultOptions


<a id="defaultoptions.safe"></a>

###  safe

**●  safe**:  *`boolean`*  = true

*Defined in [lib/jp/core.ts:57](https://github.com/bluelovers/cjk-convert/blob/7c2ab19/lib/jp/core.ts#L57)*





___



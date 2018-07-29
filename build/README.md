# README

> 目前此資料夾僅存在於 git 下，透過 npm 安裝的則不會有此資料夾下的檔案

## 繁簡轉換對應表

* BASE 代表 可以簡單透過 javascript split 進行字串分割
* UNICODE 代表需要透過支援 Unicode 進行字串分割(例如 [uni-string](https://www.npmjs.com/package/uni-string) )

可透過以下代碼取得相同資料

```ts
import { table_tw2cn, table_cn2tw } from 'cjk-conv/lib/zh/convert/index';
```

### 繁轉簡 table_tw2cn

- JSON: [table_tw2cn.json](zh/convert/table_tw2cn.json)
- BASE: [base.from](zh/convert/table_tw2cn.base.from.txt) / [base.to](zh/convert/table_tw2cn.base.to.txt)
- UNICODE: [unicode.from](zh/convert/table_tw2cn.unicode.from.txt) / [unicode.to](zh/convert/table_tw2cn.unicode.to.txt)

### 簡轉繁 table_cn2tw

- JSON: [table_cn2tw.json](zh/convert/table_cn2tw.json)
- BASE: [base.from](zh/convert/table_cn2tw.base.from.txt) / [base.to](zh/convert/table_cn2tw.base.to.txt)
- UNICODE: [unicode.from](zh/convert/table_cn2tw.unicode.from.txt) / [unicode.to](zh/convert/table_cn2tw.unicode.to.txt)


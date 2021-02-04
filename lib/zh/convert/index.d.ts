/**
 * Created by user on 2018/2/15/015.
 *
 * same as chinese_convert, but a little bug fix
 */
import { _call, getOptions, getOptionsSkip } from '@lazy-cjk/zh-convert/lib/util';
import { IOptions } from '@lazy-cjk/jp-table-convert/lib/types';
import { ITable } from '@lazy-cjk/zh-convert/lib/types';
import { defaultOptions, REGEXP_TEST, SAFE_MODE_CHAR } from '@lazy-cjk/zh-convert/lib/const';
import { cn2tw, tw2cn } from '@lazy-cjk/zh-convert';
import { _cn2tw, _tw2cn } from '@lazy-cjk/zh-convert/lib/core';
import { table_cn2tw, table_tw2cn } from '@lazy-cjk/zh-convert/lib/table';
export { cn2tw, tw2cn };
export { _cn2tw, _tw2cn };
export { table_cn2tw, table_tw2cn };
export { _call, IOptions, ITable, getOptions, defaultOptions, REGEXP_TEST, getOptionsSkip, SAFE_MODE_CHAR, };
declare const _default: typeof import("./index");
export default _default;

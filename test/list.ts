/**
 * Created by user on 2018/6/21/021.
 */

import { array_unique } from 'array-hyper-unique';
import { _word_zh_core } from 'regexp-cjk/lib/conv';
import { jp2zhs, jp2zht, zh2jp } from '../lib/jp/core';
import { charTableList, textList } from '../lib/zh/table/list';
import { cn2tw, tw2cn } from '../lib/zh/convert';
import libTable from '../lib/zh/table';
import { cn2tw_min, tw2cn_min } from '../lib/zh/convert/min';
import { zhRegExp } from 'regexp-cjk';

let word = `籲龥吁`;

word = array_unique(word.split('')).join('');

console.log(`zhRegExp\n`, new zhRegExp(word));

console.log('charTableList\n', charTableList(word));
console.log('textList\n', textList(word));

console.log('libTable.auto\n', libTable.auto(word));
console.log('libTable.tw\n', libTable.tw(word));
console.log('libTable.cn\n', libTable.cn(word));
console.log('libTable.jp\n', libTable.jp(word));

console.log('cn2tw', cn2tw(word));
console.log('tw2cn', tw2cn(word));

console.log('cn2tw_min', cn2tw_min(word));
console.log('tw2cn_min', tw2cn_min(word));

console.log('jp2zht', jp2zht(word));
console.log('jp2zhs', jp2zhs(word));
console.log('zh2jp', zh2jp(word));


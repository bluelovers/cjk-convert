/**
 * Created by user on 2018/6/21/021.
 */

import { array_unique } from 'array-hyper-unique';
import { jp2zhs, jp2zht, zh2jp } from '../lib/jp/core';
import { charTableList, textList } from '../lib/zh/table/list';
import { cn2tw, tw2cn } from '../lib/zh/convert';

let word = `㑹会`;

word = array_unique(word.split('')).join('');

console.log(charTableList(word));
console.log(textList(word));

console.log(cn2tw(word));
console.log(tw2cn(word));
console.log(jp2zht(word));
console.log(jp2zhs(word));
console.log(zh2jp(word));


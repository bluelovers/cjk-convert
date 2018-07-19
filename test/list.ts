/**
 * Created by user on 2018/6/21/021.
 */

import { array_unique } from 'array-hyper-unique';
import { charTableList, textList } from '../lib/zh/table/list';

let word = `历,曆 暦,歷 歴`;

word = array_unique(word.split('')).join('');

console.log(charTableList(word));
console.log(textList(word));

/**
 * Created by user on 2018/2/17/017.
 */

import cjkConv, { tw2cn, cn2tw } from '../../';

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

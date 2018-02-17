/**
 * Created by user on 2018/2/17/017.
 */

export { default as zhConvert, tw2cn, cn2tw } from './zh/convert/index';
export { default as zhTable } from './zh/table/index';
export { default as jpConvert, zh2jp, jp2zht, jp2zhs, cjk2zht, cjk2zhs, cjk2jp } from './jp/index';

import * as cjkConv from './index';
export default cjkConv;

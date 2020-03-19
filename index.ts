/**
 * Created by user on 2018/2/17/017.
 */

import cjkConv from './lib/index';

export const version = require("./package.json").version as string;

export { cjkConv }
export default cjkConv;
export * from './lib/index';

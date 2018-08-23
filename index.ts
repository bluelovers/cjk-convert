/**
 * Created by user on 2018/2/17/017.
 */

export * from './lib/index';

import cjkConv from './lib/index';

export const version = require("./package.json").version as string;

export { cjkConv }
export default cjkConv;

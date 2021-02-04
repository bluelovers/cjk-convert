/**
 * Created by user on 2018/2/17/017.
 */
export { default as zhConvert, tw2cn, cn2tw } from './zh/convert/index';
export { default as zhTable, IOptions as IOptionsZhTable } from './zh/table/index';
export { default as jpConvert, zh2jp, jp2zht, jp2zhs, cjk2zht, cjk2zhs, cjk2jp } from './jp/index';
export { default as novelFilename } from './novel/filename';
declare const _default: typeof import("./index");
export default _default;

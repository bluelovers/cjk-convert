"use strict";
/**
 * Created by user on 2018/2/17/017.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.auto = exports.jp = exports.cn = exports.tw = exports._get = exports.libTable = void 0;
const jp_1 = require("../../jp");
const table_1 = require("./table");
exports.libTable = table_1.default;
const array_hyper_unique_1 = require("array-hyper-unique");
const greedy_1 = require("./greedy");
const list_1 = require("../../jp/list");
function _get(a, value, ...values) {
    a = table_1.default._get(a, value, ...values);
    return array_hyper_unique_1.array_unique(a).sort();
}
exports._get = _get;
function _wrapFn(fn) {
    return function (char, options = {}) {
        if (!char) {
            return null;
        }
        if (options.skip && options.skip.indexOf(char) != -1) {
            return [char];
        }
        let a = table_1.default[fn](char, options);
        a = array_hyper_unique_1.array_unique(a);
        a.sort();
        return a;
    };
}
/**
 * 取出此漢字所對應的繁漢字
 * @type {(char: string, options?: IOptions) => string[]}
 */
exports.tw = _wrapFn('tw');
/**
 * 取出此漢字所對應的簡漢字
 * @type {(char: string, options?: IOptions) => string[]}
 */
exports.cn = _wrapFn('cn');
/**
 * 取出此漢字所對應的日漢字
 * @type {(char: string, options?: IOptions) => string[]}
 */
exports.jp = _wrapFn('jp');
/**
 * 自動取出此漢字所對應的簡繁日漢字
 *
 * @param {string} char
 * @param {IOptions} options
 * @returns {string[]}
 */
function auto(char, options = {}) {
    if (!char) {
        return null;
    }
    if (options.skip && options.skip.indexOf(char) != -1) {
        return [char];
    }
    let jt = jp_1.jp2zht(char);
    let js = jp_1.jp2zhs(char);
    let greedyTable = options.greedyTable | 0;
    let a = _get([], char, table_1.default.tw(char, options), table_1.default.cn(char, options), (!options.skip || options.skip.indexOf(jt) == -1) && table_1.default.cn(jt, options), (!options.skip || options.skip.indexOf(js) == -1) && table_1.default.tw(js, options), table_1.default.jp(char, options), (greedyTable && jp_1.cjk2jp(char)), (greedyTable && jp_1.cjk2zhs(char)), (greedyTable && jp_1.cjk2zht(char)), (greedyTable && list_1.default.zh2jp(char, {
        safe: greedyTable <= 1
    })), (greedyTable && list_1.default.jp2zh(char, {
        safe: greedyTable <= 1
    })), (greedyTable > 1 && greedy_1.greedyTableCharArray(char)));
    /*
    if (!skip || skip.indexOf(jt) == -1)
    {
        a = a.concat(...cn(jt));
    }
    if (!skip || skip.indexOf(js) == -1)
    {
        a = a.concat(...tw(js));
    }

    if (zhtw_convert.table_jp[char])
    {
        a = a.concat(jp(char));
    }

    a = array_unique(a);
    a.sort();
    */
    return a;
}
exports.auto = auto;
exports.default = exports;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7O0dBRUc7OztBQUVILGlDQUEyRTtBQUMzRSxtQ0FBK0I7QUFNdEIsbUJBTkYsZUFBUSxDQU1FO0FBTGpCLDJEQUFrRDtBQUVsRCxxQ0FBZ0Q7QUFDaEQsd0NBQW1DO0FBVW5DLFNBQWdCLElBQUksQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEdBQUcsTUFBTTtJQUV2QyxDQUFDLEdBQUcsZUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUM7SUFFdkMsT0FBTyxpQ0FBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0FBQy9CLENBQUM7QUFMRCxvQkFLQztBQUVELFNBQVMsT0FBTyxDQUFDLEVBQVU7SUFFMUIsT0FBTyxVQUFVLElBQVksRUFBRSxVQUFvQixFQUFFO1FBRXBELElBQUksQ0FBQyxJQUFJLEVBQ1Q7WUFDQyxPQUFPLElBQUksQ0FBQztTQUNaO1FBRUQsSUFBSSxPQUFPLENBQUMsSUFBSSxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUNwRDtZQUNDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNkO1FBRUQsSUFBSSxDQUFDLEdBQUcsZUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztRQUVwQyxDQUFDLEdBQUcsaUNBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwQixDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFVCxPQUFPLENBQUMsQ0FBQztJQUNWLENBQUMsQ0FBQTtBQUNGLENBQUM7QUFFRDs7O0dBR0c7QUFDVSxRQUFBLEVBQUUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFFaEM7OztHQUdHO0FBQ1UsUUFBQSxFQUFFLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRWhDOzs7R0FHRztBQUNVLFFBQUEsRUFBRSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUVoQzs7Ozs7O0dBTUc7QUFDSCxTQUFnQixJQUFJLENBQUMsSUFBWSxFQUFFLFVBQW9CLEVBQUU7SUFFeEQsSUFBSSxDQUFDLElBQUksRUFDVDtRQUNDLE9BQU8sSUFBSSxDQUFDO0tBQ1o7SUFFRCxJQUFJLE9BQU8sQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQ3BEO1FBQ0MsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Q7SUFFRCxJQUFJLEVBQUUsR0FBRyxXQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEIsSUFBSSxFQUFFLEdBQUcsV0FBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRXRCLElBQUksV0FBVyxHQUFZLE9BQU8sQ0FBQyxXQUFtQixHQUFHLENBQUMsQ0FBQztJQUUzRCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxFQUNkLElBQUksRUFDSixlQUFRLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsRUFDMUIsZUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEVBQzFCLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksZUFBUSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsT0FBTyxDQUFDLEVBQzdFLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksZUFBUSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsT0FBTyxDQUFDLEVBQzdFLGVBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxFQUUxQixDQUFDLFdBQVcsSUFBSSxXQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFDN0IsQ0FBQyxXQUFXLElBQUksWUFBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQzlCLENBQUMsV0FBVyxJQUFJLFlBQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUU5QixDQUFDLFdBQVcsSUFBSSxjQUFNLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRTtRQUNsQyxJQUFJLEVBQUUsV0FBVyxJQUFJLENBQUM7S0FDdEIsQ0FBQyxDQUFDLEVBQ0gsQ0FBQyxXQUFXLElBQUksY0FBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUU7UUFDbEMsSUFBSSxFQUFFLFdBQVcsSUFBSSxDQUFDO0tBQ3RCLENBQUMsQ0FBQyxFQUVILENBQUMsV0FBVyxHQUFHLENBQUMsSUFBSSw2QkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUM5QyxDQUFDO0lBRUg7Ozs7Ozs7Ozs7Ozs7Ozs7O01BaUJFO0lBRUYsT0FBTyxDQUFDLENBQUM7QUFDVixDQUFDO0FBM0RELG9CQTJEQztBQUVELGtCQUFlLE9BQW1DLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgdXNlciBvbiAyMDE4LzIvMTcvMDE3LlxuICovXG5cbmltcG9ydCB7IGpwMnpodCwganAyemhzLCB6aDJqcCwgY2prMnpodCwgY2prMnpocywgY2prMmpwIH0gZnJvbSAnLi4vLi4vanAnO1xuaW1wb3J0IGxpYlRhYmxlIGZyb20gJy4vdGFibGUnO1xuaW1wb3J0IHsgYXJyYXlfdW5pcXVlIH0gZnJvbSAnYXJyYXktaHlwZXItdW5pcXVlJztcbmltcG9ydCB7IHNsdWdpZnkgfSBmcm9tICcuL2xpc3QnO1xuaW1wb3J0IHsgZ3JlZWR5VGFibGVDaGFyQXJyYXkgfSBmcm9tICcuL2dyZWVkeSc7XG5pbXBvcnQganBMaXN0IGZyb20gJy4uLy4uL2pwL2xpc3QnO1xuXG5leHBvcnQgeyBsaWJUYWJsZSB9XG5cbmV4cG9ydCB0eXBlIElPcHRpb25zID0ge1xuXHRzYWZlPzogYm9vbGVhbixcblx0c2tpcD8sXG5cdGdyZWVkeVRhYmxlPzogYm9vbGVhbiB8IG51bWJlcixcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9nZXQoYSwgdmFsdWUsIC4uLnZhbHVlcylcbntcblx0YSA9IGxpYlRhYmxlLl9nZXQoYSwgdmFsdWUsIC4uLnZhbHVlcyk7XG5cblx0cmV0dXJuIGFycmF5X3VuaXF1ZShhKS5zb3J0KCk7XG59XG5cbmZ1bmN0aW9uIF93cmFwRm4oZm46IHN0cmluZylcbntcblx0cmV0dXJuIGZ1bmN0aW9uIChjaGFyOiBzdHJpbmcsIG9wdGlvbnM6IElPcHRpb25zID0ge30pOiBzdHJpbmdbXVxuXHR7XG5cdFx0aWYgKCFjaGFyKVxuXHRcdHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHRcdGlmIChvcHRpb25zLnNraXAgJiYgb3B0aW9ucy5za2lwLmluZGV4T2YoY2hhcikgIT0gLTEpXG5cdFx0e1xuXHRcdFx0cmV0dXJuIFtjaGFyXTtcblx0XHR9XG5cblx0XHRsZXQgYSA9IGxpYlRhYmxlW2ZuXShjaGFyLCBvcHRpb25zKTtcblxuXHRcdGEgPSBhcnJheV91bmlxdWUoYSk7XG5cdFx0YS5zb3J0KCk7XG5cblx0XHRyZXR1cm4gYTtcblx0fVxufVxuXG4vKipcbiAqIOWPluWHuuatpOa8ouWtl+aJgOWwjeaHieeahOe5gea8ouWtl1xuICogQHR5cGUgeyhjaGFyOiBzdHJpbmcsIG9wdGlvbnM/OiBJT3B0aW9ucykgPT4gc3RyaW5nW119XG4gKi9cbmV4cG9ydCBjb25zdCB0dyA9IF93cmFwRm4oJ3R3Jyk7XG5cbi8qKlxuICog5Y+W5Ye65q2k5ryi5a2X5omA5bCN5oeJ55qE57Ch5ryi5a2XXG4gKiBAdHlwZSB7KGNoYXI6IHN0cmluZywgb3B0aW9ucz86IElPcHRpb25zKSA9PiBzdHJpbmdbXX1cbiAqL1xuZXhwb3J0IGNvbnN0IGNuID0gX3dyYXBGbignY24nKTtcblxuLyoqXG4gKiDlj5blh7rmraTmvKLlrZfmiYDlsI3mh4nnmoTml6XmvKLlrZdcbiAqIEB0eXBlIHsoY2hhcjogc3RyaW5nLCBvcHRpb25zPzogSU9wdGlvbnMpID0+IHN0cmluZ1tdfVxuICovXG5leHBvcnQgY29uc3QganAgPSBfd3JhcEZuKCdqcCcpO1xuXG4vKipcbiAqIOiHquWLleWPluWHuuatpOa8ouWtl+aJgOWwjeaHieeahOewoee5geaXpea8ouWtl1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBjaGFyXG4gKiBAcGFyYW0ge0lPcHRpb25zfSBvcHRpb25zXG4gKiBAcmV0dXJucyB7c3RyaW5nW119XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhdXRvKGNoYXI6IHN0cmluZywgb3B0aW9uczogSU9wdGlvbnMgPSB7fSk6IHN0cmluZ1tdXG57XG5cdGlmICghY2hhcilcblx0e1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2tpcCAmJiBvcHRpb25zLnNraXAuaW5kZXhPZihjaGFyKSAhPSAtMSlcblx0e1xuXHRcdHJldHVybiBbY2hhcl07XG5cdH1cblxuXHRsZXQganQgPSBqcDJ6aHQoY2hhcik7XG5cdGxldCBqcyA9IGpwMnpocyhjaGFyKTtcblxuXHRsZXQgZ3JlZWR5VGFibGU6IG51bWJlciA9IChvcHRpb25zLmdyZWVkeVRhYmxlIGFzIGFueSkgfCAwO1xuXG5cdGxldCBhID0gX2dldChbXSxcblx0XHRjaGFyLFxuXHRcdGxpYlRhYmxlLnR3KGNoYXIsIG9wdGlvbnMpLFxuXHRcdGxpYlRhYmxlLmNuKGNoYXIsIG9wdGlvbnMpLFxuXHRcdCghb3B0aW9ucy5za2lwIHx8IG9wdGlvbnMuc2tpcC5pbmRleE9mKGp0KSA9PSAtMSkgJiYgbGliVGFibGUuY24oanQsIG9wdGlvbnMpLFxuXHRcdCghb3B0aW9ucy5za2lwIHx8IG9wdGlvbnMuc2tpcC5pbmRleE9mKGpzKSA9PSAtMSkgJiYgbGliVGFibGUudHcoanMsIG9wdGlvbnMpLFxuXHRcdGxpYlRhYmxlLmpwKGNoYXIsIG9wdGlvbnMpLFxuXG5cdFx0KGdyZWVkeVRhYmxlICYmIGNqazJqcChjaGFyKSksXG5cdFx0KGdyZWVkeVRhYmxlICYmIGNqazJ6aHMoY2hhcikpLFxuXHRcdChncmVlZHlUYWJsZSAmJiBjamsyemh0KGNoYXIpKSxcblxuXHRcdChncmVlZHlUYWJsZSAmJiBqcExpc3QuemgyanAoY2hhciwge1xuXHRcdFx0c2FmZTogZ3JlZWR5VGFibGUgPD0gMVxuXHRcdH0pKSxcblx0XHQoZ3JlZWR5VGFibGUgJiYganBMaXN0LmpwMnpoKGNoYXIsIHtcblx0XHRcdHNhZmU6IGdyZWVkeVRhYmxlIDw9IDFcblx0XHR9KSksXG5cblx0XHQoZ3JlZWR5VGFibGUgPiAxICYmIGdyZWVkeVRhYmxlQ2hhckFycmF5KGNoYXIpKSxcblx0XHQpO1xuXG5cdC8qXG5cdGlmICghc2tpcCB8fCBza2lwLmluZGV4T2YoanQpID09IC0xKVxuXHR7XG5cdFx0YSA9IGEuY29uY2F0KC4uLmNuKGp0KSk7XG5cdH1cblx0aWYgKCFza2lwIHx8IHNraXAuaW5kZXhPZihqcykgPT0gLTEpXG5cdHtcblx0XHRhID0gYS5jb25jYXQoLi4udHcoanMpKTtcblx0fVxuXG5cdGlmICh6aHR3X2NvbnZlcnQudGFibGVfanBbY2hhcl0pXG5cdHtcblx0XHRhID0gYS5jb25jYXQoanAoY2hhcikpO1xuXHR9XG5cblx0YSA9IGFycmF5X3VuaXF1ZShhKTtcblx0YS5zb3J0KCk7XG5cdCovXG5cblx0cmV0dXJuIGE7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGV4cG9ydHMgYXMgdHlwZW9mIGltcG9ydCgnLi9pbmRleCcpO1xuIl19
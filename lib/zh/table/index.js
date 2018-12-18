"use strict";
/**
 * Created by user on 2018/2/17/017.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const jp_1 = require("../../jp");
const table_1 = require("./table");
exports.libTable = table_1.default;
const util_1 = require("../../util");
function _get(a, value, ...values) {
    a = table_1.default._get(a, value, ...values);
    a = util_1.array_unique(a);
    a.sort();
    return a;
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
        a = util_1.array_unique(a);
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
    let a = _get([], char, table_1.default.tw(char, options), table_1.default.cn(char, options), (!options.skip || options.skip.indexOf(jt) == -1) && table_1.default.cn(jt, options), (!options.skip || options.skip.indexOf(js) == -1) && table_1.default.tw(js, options), table_1.default.jp(char, options));
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
const zhTable = require("./index");
exports.default = zhTable;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7O0dBRUc7O0FBRUgsaUNBQTBDO0FBQzFDLG1DQUErQjtBQUd0QixtQkFIRixlQUFRLENBR0U7QUFGakIscUNBQTBDO0FBUzFDLFNBQWdCLElBQUksQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEdBQUcsTUFBTTtJQUV2QyxDQUFDLEdBQUcsZUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUM7SUFFdkMsQ0FBQyxHQUFHLG1CQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEIsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0lBRVQsT0FBTyxDQUFDLENBQUM7QUFDVixDQUFDO0FBUkQsb0JBUUM7QUFFRCxTQUFTLE9BQU8sQ0FBQyxFQUFVO0lBRTFCLE9BQU8sVUFBVSxJQUFZLEVBQUUsVUFBb0IsRUFBRTtRQUVwRCxJQUFJLENBQUMsSUFBSSxFQUNUO1lBQ0MsT0FBTyxJQUFJLENBQUM7U0FDWjtRQUVELElBQUksT0FBTyxDQUFDLElBQUksSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFDcEQ7WUFDQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDZDtRQUVELElBQUksQ0FBQyxHQUFHLGVBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFcEMsQ0FBQyxHQUFHLG1CQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEIsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1FBRVQsT0FBTyxDQUFDLENBQUM7SUFDVixDQUFDLENBQUE7QUFDRixDQUFDO0FBRUQ7OztHQUdHO0FBQ1UsUUFBQSxFQUFFLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRWhDOzs7R0FHRztBQUNVLFFBQUEsRUFBRSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUVoQzs7O0dBR0c7QUFDVSxRQUFBLEVBQUUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFFaEM7Ozs7OztHQU1HO0FBQ0gsU0FBZ0IsSUFBSSxDQUFDLElBQVksRUFBRSxVQUFvQixFQUFFO0lBRXhELElBQUksQ0FBQyxJQUFJLEVBQ1Q7UUFDQyxPQUFPLElBQUksQ0FBQztLQUNaO0lBRUQsSUFBSSxPQUFPLENBQUMsSUFBSSxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUNwRDtRQUNDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNkO0lBRUQsSUFBSSxFQUFFLEdBQUcsV0FBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RCLElBQUksRUFBRSxHQUFHLFdBQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUV0QixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxFQUNkLElBQUksRUFDSixlQUFRLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsRUFDMUIsZUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEVBQzFCLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksZUFBUSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsT0FBTyxDQUFDLEVBQzdFLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksZUFBUSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsT0FBTyxDQUFDLEVBQzdFLGVBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUN6QixDQUFDO0lBRUg7Ozs7Ozs7Ozs7Ozs7Ozs7O01BaUJFO0lBRUYsT0FBTyxDQUFDLENBQUM7QUFDVixDQUFDO0FBNUNELG9CQTRDQztBQUVELG1DQUFtQztBQUNuQyxrQkFBZSxPQUFPLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgdXNlciBvbiAyMDE4LzIvMTcvMDE3LlxuICovXG5cbmltcG9ydCB7IGpwMnpodCwganAyemhzIH0gZnJvbSAnLi4vLi4vanAnO1xuaW1wb3J0IGxpYlRhYmxlIGZyb20gJy4vdGFibGUnO1xuaW1wb3J0IHsgYXJyYXlfdW5pcXVlIH0gZnJvbSAnLi4vLi4vdXRpbCc7XG5cbmV4cG9ydCB7IGxpYlRhYmxlIH1cblxuZXhwb3J0IHR5cGUgSU9wdGlvbnMgPSB7XG5cdHNhZmU/OiBib29sZWFuLFxuXHRza2lwPyxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9nZXQoYSwgdmFsdWUsIC4uLnZhbHVlcylcbntcblx0YSA9IGxpYlRhYmxlLl9nZXQoYSwgdmFsdWUsIC4uLnZhbHVlcyk7XG5cblx0YSA9IGFycmF5X3VuaXF1ZShhKTtcblx0YS5zb3J0KCk7XG5cblx0cmV0dXJuIGE7XG59XG5cbmZ1bmN0aW9uIF93cmFwRm4oZm46IHN0cmluZylcbntcblx0cmV0dXJuIGZ1bmN0aW9uIChjaGFyOiBzdHJpbmcsIG9wdGlvbnM6IElPcHRpb25zID0ge30pOiBzdHJpbmdbXVxuXHR7XG5cdFx0aWYgKCFjaGFyKVxuXHRcdHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHRcdGlmIChvcHRpb25zLnNraXAgJiYgb3B0aW9ucy5za2lwLmluZGV4T2YoY2hhcikgIT0gLTEpXG5cdFx0e1xuXHRcdFx0cmV0dXJuIFtjaGFyXTtcblx0XHR9XG5cblx0XHRsZXQgYSA9IGxpYlRhYmxlW2ZuXShjaGFyLCBvcHRpb25zKTtcblxuXHRcdGEgPSBhcnJheV91bmlxdWUoYSk7XG5cdFx0YS5zb3J0KCk7XG5cblx0XHRyZXR1cm4gYTtcblx0fVxufVxuXG4vKipcbiAqIOWPluWHuuatpOa8ouWtl+aJgOWwjeaHieeahOe5gea8ouWtl1xuICogQHR5cGUgeyhjaGFyOiBzdHJpbmcsIG9wdGlvbnM/OiBJT3B0aW9ucykgPT4gc3RyaW5nW119XG4gKi9cbmV4cG9ydCBjb25zdCB0dyA9IF93cmFwRm4oJ3R3Jyk7XG5cbi8qKlxuICog5Y+W5Ye65q2k5ryi5a2X5omA5bCN5oeJ55qE57Ch5ryi5a2XXG4gKiBAdHlwZSB7KGNoYXI6IHN0cmluZywgb3B0aW9ucz86IElPcHRpb25zKSA9PiBzdHJpbmdbXX1cbiAqL1xuZXhwb3J0IGNvbnN0IGNuID0gX3dyYXBGbignY24nKTtcblxuLyoqXG4gKiDlj5blh7rmraTmvKLlrZfmiYDlsI3mh4nnmoTml6XmvKLlrZdcbiAqIEB0eXBlIHsoY2hhcjogc3RyaW5nLCBvcHRpb25zPzogSU9wdGlvbnMpID0+IHN0cmluZ1tdfVxuICovXG5leHBvcnQgY29uc3QganAgPSBfd3JhcEZuKCdqcCcpO1xuXG4vKipcbiAqIOiHquWLleWPluWHuuatpOa8ouWtl+aJgOWwjeaHieeahOewoee5geaXpea8ouWtl1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBjaGFyXG4gKiBAcGFyYW0ge0lPcHRpb25zfSBvcHRpb25zXG4gKiBAcmV0dXJucyB7c3RyaW5nW119XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhdXRvKGNoYXI6IHN0cmluZywgb3B0aW9uczogSU9wdGlvbnMgPSB7fSk6IHN0cmluZ1tdXG57XG5cdGlmICghY2hhcilcblx0e1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2tpcCAmJiBvcHRpb25zLnNraXAuaW5kZXhPZihjaGFyKSAhPSAtMSlcblx0e1xuXHRcdHJldHVybiBbY2hhcl07XG5cdH1cblxuXHRsZXQganQgPSBqcDJ6aHQoY2hhcik7XG5cdGxldCBqcyA9IGpwMnpocyhjaGFyKTtcblxuXHRsZXQgYSA9IF9nZXQoW10sXG5cdFx0Y2hhcixcblx0XHRsaWJUYWJsZS50dyhjaGFyLCBvcHRpb25zKSxcblx0XHRsaWJUYWJsZS5jbihjaGFyLCBvcHRpb25zKSxcblx0XHQoIW9wdGlvbnMuc2tpcCB8fCBvcHRpb25zLnNraXAuaW5kZXhPZihqdCkgPT0gLTEpICYmIGxpYlRhYmxlLmNuKGp0LCBvcHRpb25zKSxcblx0XHQoIW9wdGlvbnMuc2tpcCB8fCBvcHRpb25zLnNraXAuaW5kZXhPZihqcykgPT0gLTEpICYmIGxpYlRhYmxlLnR3KGpzLCBvcHRpb25zKSxcblx0XHRsaWJUYWJsZS5qcChjaGFyLCBvcHRpb25zKSxcblx0XHQpO1xuXG5cdC8qXG5cdGlmICghc2tpcCB8fCBza2lwLmluZGV4T2YoanQpID09IC0xKVxuXHR7XG5cdFx0YSA9IGEuY29uY2F0KC4uLmNuKGp0KSk7XG5cdH1cblx0aWYgKCFza2lwIHx8IHNraXAuaW5kZXhPZihqcykgPT0gLTEpXG5cdHtcblx0XHRhID0gYS5jb25jYXQoLi4udHcoanMpKTtcblx0fVxuXG5cdGlmICh6aHR3X2NvbnZlcnQudGFibGVfanBbY2hhcl0pXG5cdHtcblx0XHRhID0gYS5jb25jYXQoanAoY2hhcikpO1xuXHR9XG5cblx0YSA9IGFycmF5X3VuaXF1ZShhKTtcblx0YS5zb3J0KCk7XG5cdCovXG5cblx0cmV0dXJuIGE7XG59XG5cbmltcG9ydCAqIGFzIHpoVGFibGUgZnJvbSAnLi9pbmRleCc7XG5leHBvcnQgZGVmYXVsdCB6aFRhYmxlO1xuIl19
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
    let a = _get([], char, table_1.default.tw(char, options), table_1.default.cn(char, options), (!options.skip || options.skip.indexOf(jt) == -1) && table_1.default.cn(jt, options), (!options.skip || options.skip.indexOf(js) == -1) && table_1.default.tw(js, options), table_1.default.jp(char, options), (options.greedyTable && jp_1.cjk2jp(char)), (options.greedyTable && jp_1.cjk2zhs(jt)), (options.greedyTable && jp_1.cjk2zht(js)));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7O0dBRUc7O0FBRUgsaUNBQTJFO0FBQzNFLG1DQUErQjtBQUd0QixtQkFIRixlQUFRLENBR0U7QUFGakIscUNBQTBDO0FBVTFDLFNBQWdCLElBQUksQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEdBQUcsTUFBTTtJQUV2QyxDQUFDLEdBQUcsZUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUM7SUFFdkMsQ0FBQyxHQUFHLG1CQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEIsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0lBRVQsT0FBTyxDQUFDLENBQUM7QUFDVixDQUFDO0FBUkQsb0JBUUM7QUFFRCxTQUFTLE9BQU8sQ0FBQyxFQUFVO0lBRTFCLE9BQU8sVUFBVSxJQUFZLEVBQUUsVUFBb0IsRUFBRTtRQUVwRCxJQUFJLENBQUMsSUFBSSxFQUNUO1lBQ0MsT0FBTyxJQUFJLENBQUM7U0FDWjtRQUVELElBQUksT0FBTyxDQUFDLElBQUksSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFDcEQ7WUFDQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDZDtRQUVELElBQUksQ0FBQyxHQUFHLGVBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFcEMsQ0FBQyxHQUFHLG1CQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEIsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1FBRVQsT0FBTyxDQUFDLENBQUM7SUFDVixDQUFDLENBQUE7QUFDRixDQUFDO0FBRUQ7OztHQUdHO0FBQ1UsUUFBQSxFQUFFLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRWhDOzs7R0FHRztBQUNVLFFBQUEsRUFBRSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUVoQzs7O0dBR0c7QUFDVSxRQUFBLEVBQUUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFFaEM7Ozs7OztHQU1HO0FBQ0gsU0FBZ0IsSUFBSSxDQUFDLElBQVksRUFBRSxVQUFvQixFQUFFO0lBRXhELElBQUksQ0FBQyxJQUFJLEVBQ1Q7UUFDQyxPQUFPLElBQUksQ0FBQztLQUNaO0lBRUQsSUFBSSxPQUFPLENBQUMsSUFBSSxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUNwRDtRQUNDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNkO0lBRUQsSUFBSSxFQUFFLEdBQUcsV0FBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RCLElBQUksRUFBRSxHQUFHLFdBQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUV0QixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxFQUNkLElBQUksRUFDSixlQUFRLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsRUFDMUIsZUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEVBQzFCLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksZUFBUSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsT0FBTyxDQUFDLEVBQzdFLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksZUFBUSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsT0FBTyxDQUFDLEVBQzdFLGVBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxFQUUxQixDQUFDLE9BQU8sQ0FBQyxXQUFXLElBQUksV0FBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQ3JDLENBQUMsT0FBTyxDQUFDLFdBQVcsSUFBSSxZQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDcEMsQ0FBQyxPQUFPLENBQUMsV0FBVyxJQUFJLFlBQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUVuQyxDQUFDO0lBRUg7Ozs7Ozs7Ozs7Ozs7Ozs7O01BaUJFO0lBRUYsT0FBTyxDQUFDLENBQUM7QUFDVixDQUFDO0FBakRELG9CQWlEQztBQUVELGtCQUFlLE9BQW1DLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgdXNlciBvbiAyMDE4LzIvMTcvMDE3LlxuICovXG5cbmltcG9ydCB7IGpwMnpodCwganAyemhzLCB6aDJqcCwgY2prMnpodCwgY2prMnpocywgY2prMmpwIH0gZnJvbSAnLi4vLi4vanAnO1xuaW1wb3J0IGxpYlRhYmxlIGZyb20gJy4vdGFibGUnO1xuaW1wb3J0IHsgYXJyYXlfdW5pcXVlIH0gZnJvbSAnLi4vLi4vdXRpbCc7XG5cbmV4cG9ydCB7IGxpYlRhYmxlIH1cblxuZXhwb3J0IHR5cGUgSU9wdGlvbnMgPSB7XG5cdHNhZmU/OiBib29sZWFuLFxuXHRza2lwPyxcblx0Z3JlZWR5VGFibGU/OiBib29sZWFuLFxufVxuXG5leHBvcnQgZnVuY3Rpb24gX2dldChhLCB2YWx1ZSwgLi4udmFsdWVzKVxue1xuXHRhID0gbGliVGFibGUuX2dldChhLCB2YWx1ZSwgLi4udmFsdWVzKTtcblxuXHRhID0gYXJyYXlfdW5pcXVlKGEpO1xuXHRhLnNvcnQoKTtcblxuXHRyZXR1cm4gYTtcbn1cblxuZnVuY3Rpb24gX3dyYXBGbihmbjogc3RyaW5nKVxue1xuXHRyZXR1cm4gZnVuY3Rpb24gKGNoYXI6IHN0cmluZywgb3B0aW9uczogSU9wdGlvbnMgPSB7fSk6IHN0cmluZ1tdXG5cdHtcblx0XHRpZiAoIWNoYXIpXG5cdFx0e1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdFx0aWYgKG9wdGlvbnMuc2tpcCAmJiBvcHRpb25zLnNraXAuaW5kZXhPZihjaGFyKSAhPSAtMSlcblx0XHR7XG5cdFx0XHRyZXR1cm4gW2NoYXJdO1xuXHRcdH1cblxuXHRcdGxldCBhID0gbGliVGFibGVbZm5dKGNoYXIsIG9wdGlvbnMpO1xuXG5cdFx0YSA9IGFycmF5X3VuaXF1ZShhKTtcblx0XHRhLnNvcnQoKTtcblxuXHRcdHJldHVybiBhO1xuXHR9XG59XG5cbi8qKlxuICog5Y+W5Ye65q2k5ryi5a2X5omA5bCN5oeJ55qE57mB5ryi5a2XXG4gKiBAdHlwZSB7KGNoYXI6IHN0cmluZywgb3B0aW9ucz86IElPcHRpb25zKSA9PiBzdHJpbmdbXX1cbiAqL1xuZXhwb3J0IGNvbnN0IHR3ID0gX3dyYXBGbigndHcnKTtcblxuLyoqXG4gKiDlj5blh7rmraTmvKLlrZfmiYDlsI3mh4nnmoTnsKHmvKLlrZdcbiAqIEB0eXBlIHsoY2hhcjogc3RyaW5nLCBvcHRpb25zPzogSU9wdGlvbnMpID0+IHN0cmluZ1tdfVxuICovXG5leHBvcnQgY29uc3QgY24gPSBfd3JhcEZuKCdjbicpO1xuXG4vKipcbiAqIOWPluWHuuatpOa8ouWtl+aJgOWwjeaHieeahOaXpea8ouWtl1xuICogQHR5cGUgeyhjaGFyOiBzdHJpbmcsIG9wdGlvbnM/OiBJT3B0aW9ucykgPT4gc3RyaW5nW119XG4gKi9cbmV4cG9ydCBjb25zdCBqcCA9IF93cmFwRm4oJ2pwJyk7XG5cbi8qKlxuICog6Ieq5YuV5Y+W5Ye65q2k5ryi5a2X5omA5bCN5oeJ55qE57Ch57mB5pel5ryi5a2XXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGNoYXJcbiAqIEBwYXJhbSB7SU9wdGlvbnN9IG9wdGlvbnNcbiAqIEByZXR1cm5zIHtzdHJpbmdbXX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGF1dG8oY2hhcjogc3RyaW5nLCBvcHRpb25zOiBJT3B0aW9ucyA9IHt9KTogc3RyaW5nW11cbntcblx0aWYgKCFjaGFyKVxuXHR7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRpZiAob3B0aW9ucy5za2lwICYmIG9wdGlvbnMuc2tpcC5pbmRleE9mKGNoYXIpICE9IC0xKVxuXHR7XG5cdFx0cmV0dXJuIFtjaGFyXTtcblx0fVxuXG5cdGxldCBqdCA9IGpwMnpodChjaGFyKTtcblx0bGV0IGpzID0ganAyemhzKGNoYXIpO1xuXG5cdGxldCBhID0gX2dldChbXSxcblx0XHRjaGFyLFxuXHRcdGxpYlRhYmxlLnR3KGNoYXIsIG9wdGlvbnMpLFxuXHRcdGxpYlRhYmxlLmNuKGNoYXIsIG9wdGlvbnMpLFxuXHRcdCghb3B0aW9ucy5za2lwIHx8IG9wdGlvbnMuc2tpcC5pbmRleE9mKGp0KSA9PSAtMSkgJiYgbGliVGFibGUuY24oanQsIG9wdGlvbnMpLFxuXHRcdCghb3B0aW9ucy5za2lwIHx8IG9wdGlvbnMuc2tpcC5pbmRleE9mKGpzKSA9PSAtMSkgJiYgbGliVGFibGUudHcoanMsIG9wdGlvbnMpLFxuXHRcdGxpYlRhYmxlLmpwKGNoYXIsIG9wdGlvbnMpLFxuXG5cdFx0KG9wdGlvbnMuZ3JlZWR5VGFibGUgJiYgY2prMmpwKGNoYXIpKSxcblx0XHQob3B0aW9ucy5ncmVlZHlUYWJsZSAmJiBjamsyemhzKGp0KSksXG5cdFx0KG9wdGlvbnMuZ3JlZWR5VGFibGUgJiYgY2prMnpodChqcykpLFxuXG5cdFx0KTtcblxuXHQvKlxuXHRpZiAoIXNraXAgfHwgc2tpcC5pbmRleE9mKGp0KSA9PSAtMSlcblx0e1xuXHRcdGEgPSBhLmNvbmNhdCguLi5jbihqdCkpO1xuXHR9XG5cdGlmICghc2tpcCB8fCBza2lwLmluZGV4T2YoanMpID09IC0xKVxuXHR7XG5cdFx0YSA9IGEuY29uY2F0KC4uLnR3KGpzKSk7XG5cdH1cblxuXHRpZiAoemh0d19jb252ZXJ0LnRhYmxlX2pwW2NoYXJdKVxuXHR7XG5cdFx0YSA9IGEuY29uY2F0KGpwKGNoYXIpKTtcblx0fVxuXG5cdGEgPSBhcnJheV91bmlxdWUoYSk7XG5cdGEuc29ydCgpO1xuXHQqL1xuXG5cdHJldHVybiBhO1xufVxuXG5leHBvcnQgZGVmYXVsdCBleHBvcnRzIGFzIHR5cGVvZiBpbXBvcnQoJy4vaW5kZXgnKTtcbiJdfQ==
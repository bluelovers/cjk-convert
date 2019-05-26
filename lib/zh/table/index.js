"use strict";
/**
 * Created by user on 2018/2/17/017.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const jp_1 = require("../../jp");
const table_1 = require("./table");
exports.libTable = table_1.default;
const array_hyper_unique_1 = require("array-hyper-unique");
const greedy_1 = require("./greedy");
function _get(a, value, ...values) {
    a = table_1.default._get(a, value, ...values);
    a = array_hyper_unique_1.array_unique(a);
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
    let a = _get([], char, table_1.default.tw(char, options), table_1.default.cn(char, options), (!options.skip || options.skip.indexOf(jt) == -1) && table_1.default.cn(jt, options), (!options.skip || options.skip.indexOf(js) == -1) && table_1.default.tw(js, options), table_1.default.jp(char, options), (greedyTable && jp_1.cjk2jp(char)), (greedyTable && jp_1.cjk2zhs(char)), (greedyTable && jp_1.cjk2zht(char)), (greedyTable > 1 && greedy_1.greedyTableCharArray(char)));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7O0dBRUc7O0FBRUgsaUNBQTJFO0FBQzNFLG1DQUErQjtBQUt0QixtQkFMRixlQUFRLENBS0U7QUFKakIsMkRBQWtEO0FBRWxELHFDQUFnRDtBQVVoRCxTQUFnQixJQUFJLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxHQUFHLE1BQU07SUFFdkMsQ0FBQyxHQUFHLGVBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxHQUFHLE1BQU0sQ0FBQyxDQUFDO0lBRXZDLENBQUMsR0FBRyxpQ0FBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BCLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUVULE9BQU8sQ0FBQyxDQUFDO0FBQ1YsQ0FBQztBQVJELG9CQVFDO0FBRUQsU0FBUyxPQUFPLENBQUMsRUFBVTtJQUUxQixPQUFPLFVBQVUsSUFBWSxFQUFFLFVBQW9CLEVBQUU7UUFFcEQsSUFBSSxDQUFDLElBQUksRUFDVDtZQUNDLE9BQU8sSUFBSSxDQUFDO1NBQ1o7UUFFRCxJQUFJLE9BQU8sQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQ3BEO1lBQ0MsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2Q7UUFFRCxJQUFJLENBQUMsR0FBRyxlQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRXBDLENBQUMsR0FBRyxpQ0FBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUVULE9BQU8sQ0FBQyxDQUFDO0lBQ1YsQ0FBQyxDQUFBO0FBQ0YsQ0FBQztBQUVEOzs7R0FHRztBQUNVLFFBQUEsRUFBRSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUVoQzs7O0dBR0c7QUFDVSxRQUFBLEVBQUUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFFaEM7OztHQUdHO0FBQ1UsUUFBQSxFQUFFLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRWhDOzs7Ozs7R0FNRztBQUNILFNBQWdCLElBQUksQ0FBQyxJQUFZLEVBQUUsVUFBb0IsRUFBRTtJQUV4RCxJQUFJLENBQUMsSUFBSSxFQUNUO1FBQ0MsT0FBTyxJQUFJLENBQUM7S0FDWjtJQUVELElBQUksT0FBTyxDQUFDLElBQUksSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFDcEQ7UUFDQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZDtJQUVELElBQUksRUFBRSxHQUFHLFdBQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QixJQUFJLEVBQUUsR0FBRyxXQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFdEIsSUFBSSxXQUFXLEdBQVksT0FBTyxDQUFDLFdBQW1CLEdBQUcsQ0FBQyxDQUFDO0lBRTNELElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLEVBQ2QsSUFBSSxFQUNKLGVBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxFQUMxQixlQUFRLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsRUFDMUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxlQUFRLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsRUFDN0UsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxlQUFRLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsRUFDN0UsZUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEVBRTFCLENBQUMsV0FBVyxJQUFJLFdBQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUM3QixDQUFDLFdBQVcsSUFBSSxZQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsRUFDOUIsQ0FBQyxXQUFXLElBQUksWUFBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBRTlCLENBQUMsV0FBVyxHQUFHLENBQUMsSUFBSSw2QkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUU5QyxDQUFDO0lBRUg7Ozs7Ozs7Ozs7Ozs7Ozs7O01BaUJFO0lBRUYsT0FBTyxDQUFDLENBQUM7QUFDVixDQUFDO0FBckRELG9CQXFEQztBQUVELGtCQUFlLE9BQW1DLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgdXNlciBvbiAyMDE4LzIvMTcvMDE3LlxuICovXG5cbmltcG9ydCB7IGpwMnpodCwganAyemhzLCB6aDJqcCwgY2prMnpodCwgY2prMnpocywgY2prMmpwIH0gZnJvbSAnLi4vLi4vanAnO1xuaW1wb3J0IGxpYlRhYmxlIGZyb20gJy4vdGFibGUnO1xuaW1wb3J0IHsgYXJyYXlfdW5pcXVlIH0gZnJvbSAnYXJyYXktaHlwZXItdW5pcXVlJztcbmltcG9ydCB7IHNsdWdpZnkgfSBmcm9tICcuL2xpc3QnO1xuaW1wb3J0IHsgZ3JlZWR5VGFibGVDaGFyQXJyYXkgfSBmcm9tICcuL2dyZWVkeSc7XG5cbmV4cG9ydCB7IGxpYlRhYmxlIH1cblxuZXhwb3J0IHR5cGUgSU9wdGlvbnMgPSB7XG5cdHNhZmU/OiBib29sZWFuLFxuXHRza2lwPyxcblx0Z3JlZWR5VGFibGU/OiBib29sZWFuIHwgbnVtYmVyLFxufVxuXG5leHBvcnQgZnVuY3Rpb24gX2dldChhLCB2YWx1ZSwgLi4udmFsdWVzKVxue1xuXHRhID0gbGliVGFibGUuX2dldChhLCB2YWx1ZSwgLi4udmFsdWVzKTtcblxuXHRhID0gYXJyYXlfdW5pcXVlKGEpO1xuXHRhLnNvcnQoKTtcblxuXHRyZXR1cm4gYTtcbn1cblxuZnVuY3Rpb24gX3dyYXBGbihmbjogc3RyaW5nKVxue1xuXHRyZXR1cm4gZnVuY3Rpb24gKGNoYXI6IHN0cmluZywgb3B0aW9uczogSU9wdGlvbnMgPSB7fSk6IHN0cmluZ1tdXG5cdHtcblx0XHRpZiAoIWNoYXIpXG5cdFx0e1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdFx0aWYgKG9wdGlvbnMuc2tpcCAmJiBvcHRpb25zLnNraXAuaW5kZXhPZihjaGFyKSAhPSAtMSlcblx0XHR7XG5cdFx0XHRyZXR1cm4gW2NoYXJdO1xuXHRcdH1cblxuXHRcdGxldCBhID0gbGliVGFibGVbZm5dKGNoYXIsIG9wdGlvbnMpO1xuXG5cdFx0YSA9IGFycmF5X3VuaXF1ZShhKTtcblx0XHRhLnNvcnQoKTtcblxuXHRcdHJldHVybiBhO1xuXHR9XG59XG5cbi8qKlxuICog5Y+W5Ye65q2k5ryi5a2X5omA5bCN5oeJ55qE57mB5ryi5a2XXG4gKiBAdHlwZSB7KGNoYXI6IHN0cmluZywgb3B0aW9ucz86IElPcHRpb25zKSA9PiBzdHJpbmdbXX1cbiAqL1xuZXhwb3J0IGNvbnN0IHR3ID0gX3dyYXBGbigndHcnKTtcblxuLyoqXG4gKiDlj5blh7rmraTmvKLlrZfmiYDlsI3mh4nnmoTnsKHmvKLlrZdcbiAqIEB0eXBlIHsoY2hhcjogc3RyaW5nLCBvcHRpb25zPzogSU9wdGlvbnMpID0+IHN0cmluZ1tdfVxuICovXG5leHBvcnQgY29uc3QgY24gPSBfd3JhcEZuKCdjbicpO1xuXG4vKipcbiAqIOWPluWHuuatpOa8ouWtl+aJgOWwjeaHieeahOaXpea8ouWtl1xuICogQHR5cGUgeyhjaGFyOiBzdHJpbmcsIG9wdGlvbnM/OiBJT3B0aW9ucykgPT4gc3RyaW5nW119XG4gKi9cbmV4cG9ydCBjb25zdCBqcCA9IF93cmFwRm4oJ2pwJyk7XG5cbi8qKlxuICog6Ieq5YuV5Y+W5Ye65q2k5ryi5a2X5omA5bCN5oeJ55qE57Ch57mB5pel5ryi5a2XXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGNoYXJcbiAqIEBwYXJhbSB7SU9wdGlvbnN9IG9wdGlvbnNcbiAqIEByZXR1cm5zIHtzdHJpbmdbXX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGF1dG8oY2hhcjogc3RyaW5nLCBvcHRpb25zOiBJT3B0aW9ucyA9IHt9KTogc3RyaW5nW11cbntcblx0aWYgKCFjaGFyKVxuXHR7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRpZiAob3B0aW9ucy5za2lwICYmIG9wdGlvbnMuc2tpcC5pbmRleE9mKGNoYXIpICE9IC0xKVxuXHR7XG5cdFx0cmV0dXJuIFtjaGFyXTtcblx0fVxuXG5cdGxldCBqdCA9IGpwMnpodChjaGFyKTtcblx0bGV0IGpzID0ganAyemhzKGNoYXIpO1xuXG5cdGxldCBncmVlZHlUYWJsZTogbnVtYmVyID0gKG9wdGlvbnMuZ3JlZWR5VGFibGUgYXMgYW55KSB8IDA7XG5cblx0bGV0IGEgPSBfZ2V0KFtdLFxuXHRcdGNoYXIsXG5cdFx0bGliVGFibGUudHcoY2hhciwgb3B0aW9ucyksXG5cdFx0bGliVGFibGUuY24oY2hhciwgb3B0aW9ucyksXG5cdFx0KCFvcHRpb25zLnNraXAgfHwgb3B0aW9ucy5za2lwLmluZGV4T2YoanQpID09IC0xKSAmJiBsaWJUYWJsZS5jbihqdCwgb3B0aW9ucyksXG5cdFx0KCFvcHRpb25zLnNraXAgfHwgb3B0aW9ucy5za2lwLmluZGV4T2YoanMpID09IC0xKSAmJiBsaWJUYWJsZS50dyhqcywgb3B0aW9ucyksXG5cdFx0bGliVGFibGUuanAoY2hhciwgb3B0aW9ucyksXG5cblx0XHQoZ3JlZWR5VGFibGUgJiYgY2prMmpwKGNoYXIpKSxcblx0XHQoZ3JlZWR5VGFibGUgJiYgY2prMnpocyhjaGFyKSksXG5cdFx0KGdyZWVkeVRhYmxlICYmIGNqazJ6aHQoY2hhcikpLFxuXG5cdFx0KGdyZWVkeVRhYmxlID4gMSAmJiBncmVlZHlUYWJsZUNoYXJBcnJheShjaGFyKSksXG5cblx0XHQpO1xuXG5cdC8qXG5cdGlmICghc2tpcCB8fCBza2lwLmluZGV4T2YoanQpID09IC0xKVxuXHR7XG5cdFx0YSA9IGEuY29uY2F0KC4uLmNuKGp0KSk7XG5cdH1cblx0aWYgKCFza2lwIHx8IHNraXAuaW5kZXhPZihqcykgPT0gLTEpXG5cdHtcblx0XHRhID0gYS5jb25jYXQoLi4udHcoanMpKTtcblx0fVxuXG5cdGlmICh6aHR3X2NvbnZlcnQudGFibGVfanBbY2hhcl0pXG5cdHtcblx0XHRhID0gYS5jb25jYXQoanAoY2hhcikpO1xuXHR9XG5cblx0YSA9IGFycmF5X3VuaXF1ZShhKTtcblx0YS5zb3J0KCk7XG5cdCovXG5cblx0cmV0dXJuIGE7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGV4cG9ydHMgYXMgdHlwZW9mIGltcG9ydCgnLi9pbmRleCcpO1xuIl19
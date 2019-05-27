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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7O0dBRUc7O0FBRUgsaUNBQTJFO0FBQzNFLG1DQUErQjtBQUt0QixtQkFMRixlQUFRLENBS0U7QUFKakIsMkRBQWtEO0FBRWxELHFDQUFnRDtBQVVoRCxTQUFnQixJQUFJLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxHQUFHLE1BQU07SUFFdkMsQ0FBQyxHQUFHLGVBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxHQUFHLE1BQU0sQ0FBQyxDQUFDO0lBRXZDLE9BQU8saUNBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUMvQixDQUFDO0FBTEQsb0JBS0M7QUFFRCxTQUFTLE9BQU8sQ0FBQyxFQUFVO0lBRTFCLE9BQU8sVUFBVSxJQUFZLEVBQUUsVUFBb0IsRUFBRTtRQUVwRCxJQUFJLENBQUMsSUFBSSxFQUNUO1lBQ0MsT0FBTyxJQUFJLENBQUM7U0FDWjtRQUVELElBQUksT0FBTyxDQUFDLElBQUksSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFDcEQ7WUFDQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDZDtRQUVELElBQUksQ0FBQyxHQUFHLGVBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFcEMsQ0FBQyxHQUFHLGlDQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEIsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1FBRVQsT0FBTyxDQUFDLENBQUM7SUFDVixDQUFDLENBQUE7QUFDRixDQUFDO0FBRUQ7OztHQUdHO0FBQ1UsUUFBQSxFQUFFLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRWhDOzs7R0FHRztBQUNVLFFBQUEsRUFBRSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUVoQzs7O0dBR0c7QUFDVSxRQUFBLEVBQUUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFFaEM7Ozs7OztHQU1HO0FBQ0gsU0FBZ0IsSUFBSSxDQUFDLElBQVksRUFBRSxVQUFvQixFQUFFO0lBRXhELElBQUksQ0FBQyxJQUFJLEVBQ1Q7UUFDQyxPQUFPLElBQUksQ0FBQztLQUNaO0lBRUQsSUFBSSxPQUFPLENBQUMsSUFBSSxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUNwRDtRQUNDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNkO0lBRUQsSUFBSSxFQUFFLEdBQUcsV0FBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RCLElBQUksRUFBRSxHQUFHLFdBQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUV0QixJQUFJLFdBQVcsR0FBWSxPQUFPLENBQUMsV0FBbUIsR0FBRyxDQUFDLENBQUM7SUFFM0QsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsRUFDZCxJQUFJLEVBQ0osZUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEVBQzFCLGVBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxFQUMxQixDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLGVBQVEsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxFQUM3RSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLGVBQVEsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxFQUM3RSxlQUFRLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsRUFFMUIsQ0FBQyxXQUFXLElBQUksV0FBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQzdCLENBQUMsV0FBVyxJQUFJLFlBQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUM5QixDQUFDLFdBQVcsSUFBSSxZQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsRUFFOUIsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxJQUFJLDZCQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDLENBRTlDLENBQUM7SUFFSDs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFpQkU7SUFFRixPQUFPLENBQUMsQ0FBQztBQUNWLENBQUM7QUFyREQsb0JBcURDO0FBRUQsa0JBQWUsT0FBbUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSB1c2VyIG9uIDIwMTgvMi8xNy8wMTcuXG4gKi9cblxuaW1wb3J0IHsganAyemh0LCBqcDJ6aHMsIHpoMmpwLCBjamsyemh0LCBjamsyemhzLCBjamsyanAgfSBmcm9tICcuLi8uLi9qcCc7XG5pbXBvcnQgbGliVGFibGUgZnJvbSAnLi90YWJsZSc7XG5pbXBvcnQgeyBhcnJheV91bmlxdWUgfSBmcm9tICdhcnJheS1oeXBlci11bmlxdWUnO1xuaW1wb3J0IHsgc2x1Z2lmeSB9IGZyb20gJy4vbGlzdCc7XG5pbXBvcnQgeyBncmVlZHlUYWJsZUNoYXJBcnJheSB9IGZyb20gJy4vZ3JlZWR5JztcblxuZXhwb3J0IHsgbGliVGFibGUgfVxuXG5leHBvcnQgdHlwZSBJT3B0aW9ucyA9IHtcblx0c2FmZT86IGJvb2xlYW4sXG5cdHNraXA/LFxuXHRncmVlZHlUYWJsZT86IGJvb2xlYW4gfCBudW1iZXIsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfZ2V0KGEsIHZhbHVlLCAuLi52YWx1ZXMpXG57XG5cdGEgPSBsaWJUYWJsZS5fZ2V0KGEsIHZhbHVlLCAuLi52YWx1ZXMpO1xuXG5cdHJldHVybiBhcnJheV91bmlxdWUoYSkuc29ydCgpO1xufVxuXG5mdW5jdGlvbiBfd3JhcEZuKGZuOiBzdHJpbmcpXG57XG5cdHJldHVybiBmdW5jdGlvbiAoY2hhcjogc3RyaW5nLCBvcHRpb25zOiBJT3B0aW9ucyA9IHt9KTogc3RyaW5nW11cblx0e1xuXHRcdGlmICghY2hhcilcblx0XHR7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cblx0XHRpZiAob3B0aW9ucy5za2lwICYmIG9wdGlvbnMuc2tpcC5pbmRleE9mKGNoYXIpICE9IC0xKVxuXHRcdHtcblx0XHRcdHJldHVybiBbY2hhcl07XG5cdFx0fVxuXG5cdFx0bGV0IGEgPSBsaWJUYWJsZVtmbl0oY2hhciwgb3B0aW9ucyk7XG5cblx0XHRhID0gYXJyYXlfdW5pcXVlKGEpO1xuXHRcdGEuc29ydCgpO1xuXG5cdFx0cmV0dXJuIGE7XG5cdH1cbn1cblxuLyoqXG4gKiDlj5blh7rmraTmvKLlrZfmiYDlsI3mh4nnmoTnuYHmvKLlrZdcbiAqIEB0eXBlIHsoY2hhcjogc3RyaW5nLCBvcHRpb25zPzogSU9wdGlvbnMpID0+IHN0cmluZ1tdfVxuICovXG5leHBvcnQgY29uc3QgdHcgPSBfd3JhcEZuKCd0dycpO1xuXG4vKipcbiAqIOWPluWHuuatpOa8ouWtl+aJgOWwjeaHieeahOewoea8ouWtl1xuICogQHR5cGUgeyhjaGFyOiBzdHJpbmcsIG9wdGlvbnM/OiBJT3B0aW9ucykgPT4gc3RyaW5nW119XG4gKi9cbmV4cG9ydCBjb25zdCBjbiA9IF93cmFwRm4oJ2NuJyk7XG5cbi8qKlxuICog5Y+W5Ye65q2k5ryi5a2X5omA5bCN5oeJ55qE5pel5ryi5a2XXG4gKiBAdHlwZSB7KGNoYXI6IHN0cmluZywgb3B0aW9ucz86IElPcHRpb25zKSA9PiBzdHJpbmdbXX1cbiAqL1xuZXhwb3J0IGNvbnN0IGpwID0gX3dyYXBGbignanAnKTtcblxuLyoqXG4gKiDoh6rli5Xlj5blh7rmraTmvKLlrZfmiYDlsI3mh4nnmoTnsKHnuYHml6XmvKLlrZdcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gY2hhclxuICogQHBhcmFtIHtJT3B0aW9uc30gb3B0aW9uc1xuICogQHJldHVybnMge3N0cmluZ1tdfVxuICovXG5leHBvcnQgZnVuY3Rpb24gYXV0byhjaGFyOiBzdHJpbmcsIG9wdGlvbnM6IElPcHRpb25zID0ge30pOiBzdHJpbmdbXVxue1xuXHRpZiAoIWNoYXIpXG5cdHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdGlmIChvcHRpb25zLnNraXAgJiYgb3B0aW9ucy5za2lwLmluZGV4T2YoY2hhcikgIT0gLTEpXG5cdHtcblx0XHRyZXR1cm4gW2NoYXJdO1xuXHR9XG5cblx0bGV0IGp0ID0ganAyemh0KGNoYXIpO1xuXHRsZXQganMgPSBqcDJ6aHMoY2hhcik7XG5cblx0bGV0IGdyZWVkeVRhYmxlOiBudW1iZXIgPSAob3B0aW9ucy5ncmVlZHlUYWJsZSBhcyBhbnkpIHwgMDtcblxuXHRsZXQgYSA9IF9nZXQoW10sXG5cdFx0Y2hhcixcblx0XHRsaWJUYWJsZS50dyhjaGFyLCBvcHRpb25zKSxcblx0XHRsaWJUYWJsZS5jbihjaGFyLCBvcHRpb25zKSxcblx0XHQoIW9wdGlvbnMuc2tpcCB8fCBvcHRpb25zLnNraXAuaW5kZXhPZihqdCkgPT0gLTEpICYmIGxpYlRhYmxlLmNuKGp0LCBvcHRpb25zKSxcblx0XHQoIW9wdGlvbnMuc2tpcCB8fCBvcHRpb25zLnNraXAuaW5kZXhPZihqcykgPT0gLTEpICYmIGxpYlRhYmxlLnR3KGpzLCBvcHRpb25zKSxcblx0XHRsaWJUYWJsZS5qcChjaGFyLCBvcHRpb25zKSxcblxuXHRcdChncmVlZHlUYWJsZSAmJiBjamsyanAoY2hhcikpLFxuXHRcdChncmVlZHlUYWJsZSAmJiBjamsyemhzKGNoYXIpKSxcblx0XHQoZ3JlZWR5VGFibGUgJiYgY2prMnpodChjaGFyKSksXG5cblx0XHQoZ3JlZWR5VGFibGUgPiAxICYmIGdyZWVkeVRhYmxlQ2hhckFycmF5KGNoYXIpKSxcblxuXHRcdCk7XG5cblx0Lypcblx0aWYgKCFza2lwIHx8IHNraXAuaW5kZXhPZihqdCkgPT0gLTEpXG5cdHtcblx0XHRhID0gYS5jb25jYXQoLi4uY24oanQpKTtcblx0fVxuXHRpZiAoIXNraXAgfHwgc2tpcC5pbmRleE9mKGpzKSA9PSAtMSlcblx0e1xuXHRcdGEgPSBhLmNvbmNhdCguLi50dyhqcykpO1xuXHR9XG5cblx0aWYgKHpodHdfY29udmVydC50YWJsZV9qcFtjaGFyXSlcblx0e1xuXHRcdGEgPSBhLmNvbmNhdChqcChjaGFyKSk7XG5cdH1cblxuXHRhID0gYXJyYXlfdW5pcXVlKGEpO1xuXHRhLnNvcnQoKTtcblx0Ki9cblxuXHRyZXR1cm4gYTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZXhwb3J0cyBhcyB0eXBlb2YgaW1wb3J0KCcuL2luZGV4Jyk7XG4iXX0=
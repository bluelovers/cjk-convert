"use strict";
/**
 * Created by user on 2018/6/10/010.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
var index_2 = require("../../jp/index");
exports.jpConvert = index_2.default;
exports.zh2jp = index_2.zh2jp;
exports.jp2zht = index_2.jp2zht;
exports.jp2zhs = index_2.jp2zhs;
exports.cjk2zht = index_2.cjk2zht;
exports.cjk2zhs = index_2.cjk2zhs;
exports.cjk2jp = index_2.cjk2jp;
const uni_string_1 = require("uni-string");
/**
 *
 * @example
 * ```
 * charTableList('司马')
 * // => [ [ '司' ], [ '馬', '马' ] ]
 * ```
 */
function charTableList(text, options = {}) {
    let a = uni_string_1.default.split(text, '');
    options = Object.assign({}, options);
    let optionsZhTable = Object.assign({
        safe: true,
        skip: options.skip,
    }, options.optionsZhTable);
    let fn = index_1.default[options.lang || 'auto'];
    return a
        .reduce(function (a, c) {
        // @ts-ignore
        a.push(fn(c, optionsZhTable));
        return a;
    }, []);
}
exports.charTableList = charTableList;
/**
 *
 * @example
 * textList('司马')
 * // => [ '司馬', '司马' ]
 */
function textList(text, options = {}) {
    let aa = [];
    let arr = charTableList(text, options);
    if (arr.length <= 1) {
        if (Array.isArray(arr[0])) {
            // @ts-ignore
            arr = arr[0];
        }
        // @ts-ignore
        return arr;
    }
    arr
        .forEach(function (v, index, arr) {
        f(v, '', index, arr);
    });
    function f(v, str = '', index, arr, depth = 0) {
        return v.reduce(function (a, c) {
            let s = str + c;
            let i = index + 1;
            if (i < arr.length) {
                let r = f(arr[i], s, i, arr, depth + 1);
            }
            else if ((depth + 1) == arr.length) {
                //console.log(777, s, [str, c], index, depth);
                aa.push(s);
            }
            return a;
        }, []);
    }
    aa.sort();
    return aa;
}
exports.textList = textList;
/**
 * @example
 * arrCjk(['司马', '上官', '欧阳', '夏侯'])
 * // => [ '司马', '上官', '欧阳', '夏侯', '司馬', '歐陽', '欧陽' ]
 */
function arrCjk(arr, options = {}) {
    return arr
        // @ts-ignore
        .concat(arr.map(w(cjk2zht)))
        // @ts-ignore
        .concat(arr.map(w(cn2tw)))
        // @ts-ignore
        .concat(arr.map(w(cjk2zhs)))
        // @ts-ignore
        .concat(arr.map(w(cjk2jp)))
        .filter(function (value, index, array) {
        return array.indexOf(value) == index;
    });
    function w(fn, ...argv) {
        return function (s) {
            return fn(s, options);
        };
    }
}
exports.arrCjk = arrCjk;
exports.default = exports;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOztHQUVHOztBQUVILG1DQUErRDtBQUcvRCx3Q0FBdUc7QUFBOUYsNEJBQUEsT0FBTyxDQUFhO0FBQUUsd0JBQUEsS0FBSyxDQUFBO0FBQUUseUJBQUEsTUFBTSxDQUFBO0FBQUUseUJBQUEsTUFBTSxDQUFBO0FBQUUsMEJBQUEsT0FBTyxDQUFBO0FBQUUsMEJBQUEsT0FBTyxDQUFBO0FBQUUseUJBQUEsTUFBTSxDQUFBO0FBRTlFLDJDQUFpQztBQVNqQzs7Ozs7OztHQU9HO0FBQ0gsU0FBZ0IsYUFBYSxDQUFDLElBQVksRUFBRSxVQUFvQixFQUFFO0lBRWpFLElBQUksQ0FBQyxHQUFHLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVoQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDckMsSUFBSSxjQUFjLEdBQW9CLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDbkQsSUFBSSxFQUFFLElBQUk7UUFDVixJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUk7S0FDbEIsRUFBRSxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7SUFFM0IsSUFBSSxFQUFFLEdBQUcsZUFBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUksTUFBTSxDQUFDLENBQUM7SUFFekMsT0FBTyxDQUFDO1NBQ04sTUFBTSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUM7UUFFckIsYUFBYTtRQUNiLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxjQUFjLENBQUMsQ0FBQyxDQUFDO1FBRTlCLE9BQU8sQ0FBQyxDQUFDO0lBQ1YsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUNMO0FBQ0gsQ0FBQztBQXJCRCxzQ0FxQkM7QUFFRDs7Ozs7R0FLRztBQUNILFNBQWdCLFFB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MDE4LzYvMTAvMDEwLlxuICovXG5cbmltcG9ydCB6aFRhYmxlLCB7IElPcHRpb25zIGFzIElPcHRpb25zWmhUYWJsZSB9IGZyb20gJy4vaW5kZXgnO1xuaW1wb3J0IHsgSU9wdGlvbnMgYXMgSU9wdGlvbnNDamtDb252IH0gZnJvbSAnLi4vY29udmVydCc7XG5pbXBvcnQgQ2prQ29udiBmcm9tICcuLi8uLic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGpwQ29udmVydCwgemgyanAsIGpwMnpodCwganAyemhzLCBjamsyemh0LCBjamsyemhzLCBjamsyanAgfSBmcm9tICcuLi8uLi9qcC9pbmRleCc7XG5cbmltcG9ydCBVU3RyaW5nIGZyb20gJ3VuaS1zdHJpbmcnO1xuXG5leHBvcnQgdHlwZSBJT3B0aW9ucyA9IHtcblx0b3B0aW9uc1poVGFibGU/OiBJT3B0aW9uc1poVGFibGUsXG5cdHNraXA/LFxuXG5cdGxhbmc/OiAnemgnIHwgJ2NuJyB8ICdqcCcgfCAnYXV0bycgfCBzdHJpbmcsXG59XG5cbi8qKlxuICpcbiAqIEBleGFtcGxlXG4gKiBgYGBcbiAqIGNoYXJUYWJsZUxpc3QoJ+WPuOmprCcpXG4gKiAvLyA9PiBbIFsgJ+WPuCcgXSwgWyAn6aasJywgJ+mprCcgXSBdXG4gKiBgYGBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNoYXJUYWJsZUxpc3QodGV4dDogc3RyaW5nLCBvcHRpb25zOiBJT3B0aW9ucyA9IHt9KTogc3RyaW5nW11bXVxue1xuXHRsZXQgYSA9IFVTdHJpbmcuc3BsaXQodGV4dCwgJycpO1xuXG5cdG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zKTtcblx0bGV0IG9wdGlvbnNaaFRhYmxlOiBJT3B0aW9uc1poVGFibGUgPSBPYmplY3QuYXNzaWduKHtcblx0XHRzYWZlOiB0cnVlLFxuXHRcdHNraXA6IG9wdGlvbnMuc2tpcCxcblx0fSwgb3B0aW9ucy5vcHRpb25zWmhUYWJsZSk7XG5cblx0bGV0IGZuID0gemhUYWJsZVtvcHRpb25zLmxhbmcgfHwgJ2F1dG8nXTtcblxuXHRyZXR1cm4gYVxuXHRcdC5yZWR1Y2UoZnVuY3Rpb24gKGEsIGMpXG5cdFx0e1xuXHRcdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdFx0YS5wdXNoKGZuKGMsIG9wdGlvbnNaaFRhYmxlKSk7XG5cblx0XHRcdHJldHVybiBhO1xuXHRcdH0sIFtdKVxuXHRcdDtcbn1cblxuLyoqXG4gKlxuICogQGV4YW1wbGVcbiAqIHRleHRMaXN0KCflj7jpqawnKVxuICogLy8gPT4gWyAn5Y+46aasJywgJ+WPuOmprCcgXVxuICovXG5leHBvcnQgZnVuY3Rpb24gdGV4dExpc3QodGV4dDogc3RyaW5nLCBvcHRpb25zOiBJT3B0aW9ucyA9IHt9KTogc3RyaW5nW11cbntcblx0bGV0IGFhID0gW107XG5cblx0bGV0IGFyciA9IGNoYXJUYWJsZUxpc3QodGV4dCwgb3B0aW9ucyk7XG5cblx0aWYgKGFyci5sZW5ndGggPD0gMSlcblx0e1xuXHRcdGlmIChBcnJheS5pc0FycmF5KGFyclswXSkpXG5cdFx0e1xuXHRcdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdFx0YXJyID0gYXJyWzBdO1xuXHRcdH1cblxuXHRcdC8vIEB0cy1pZ25vcmVcblx0XHRyZXR1cm4gYXJyO1xuXHR9XG5cblx0YXJyXG5cdFx0LmZvckVhY2goZnVuY3Rpb24gKHYsIGluZGV4LCBhcnIpXG5cdFx0e1xuXHRcdFx0Zih2LCAnJywgaW5kZXgsIGFycik7XG5cdFx0fSlcblx0O1xuXG5cdGZ1bmN0aW9uIGYodjogc3RyaW5nW10sIHN0ciA9ICcnLCBpbmRleCwgYXJyLCBkZXB0aCA9IDApXG5cdHtcblx0XHRyZXR1cm4gdi5yZWR1Y2UoZnVuY3Rpb24gKGEsIGMpXG5cdFx0e1xuXHRcdFx0bGV0IHMgPSBzdHIgKyBjO1xuXHRcdFx0bGV0IGkgPSBpbmRleCArIDE7XG5cblx0XHRcdGlmIChpIDwgYXJyLmxlbmd0aClcblx0XHRcdHtcblx0XHRcdFx0bGV0IHIgPSBmKGFycltpXSwgcywgaSwgYXJyLCBkZXB0aCArIDEpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZiAoKGRlcHRoICsgMSkgPT0gYXJyLmxlbmd0aClcblx0XHRcdHtcblx0XHRcdFx0Ly9jb25zb2xlLmxvZyg3NzcsIHMsIFtzdHIsIGNdLCBpbmRleCwgZGVwdGgpO1xuXG5cdFx0XHRcdGFhLnB1c2gocyk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBhXG5cdFx0fSwgW10pXG5cdH1cblxuXHRhYS5zb3J0KCk7XG5cblx0cmV0dXJuIGFhO1xufVxuXG4vKipcbiAqIEBleGFtcGxlXG4gKiBhcnJDamsoWyflj7jpqawnLCAn5LiK5a6YJywgJ+asp+mYsycsICflpI/kvq8nXSlcbiAqIC8vID0+IFsgJ+WPuOmprCcsICfkuIrlrpgnLCAn5qyn6ZizJywgJ+Wkj+S+rycsICflj7jppqwnLCAn5q2Q6Zm9JywgJ+asp+mZvScgXVxuICovXG5leHBvcnQgZnVuY3Rpb24gYXJyQ2prKGFycjogc3RyaW5nW10sIG9wdGlvbnM6IElPcHRpb25zQ2prQ29udiA9IHt9KTogc3RyaW5nW11cbntcblx0cmV0dXJuIGFyclxuXHQvLyBAdHMtaWdub3JlXG5cdFx0LmNvbmNhdChhcnIubWFwKHcoY2prMnpodCkpKVxuXHRcdC8vIEB0cy1pZ25vcmVcblx0XHQuY29uY2F0KGFyci5tYXAodyhjbjJ0dykpKVxuXHRcdC8vIEB0cy1pZ25vcmVcblx0XHQuY29uY2F0KGFyci5tYXAodyhjamsyemhzKSkpXG5cdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdC5jb25jYXQoYXJyLm1hcCh3KGNqazJqcCkpKVxuXHRcdC5maWx0ZXIoZnVuY3Rpb24gKHZhbHVlLCBpbmRleCwgYXJyYXkpXG5cdFx0e1xuXHRcdFx0cmV0dXJuIGFycmF5LmluZGV4T2YodmFsdWUpID09IGluZGV4O1xuXHRcdH0pXG5cdFx0O1xuXG5cdGZ1bmN0aW9uIHcoZm4sIC4uLmFyZ3YpXG5cdHtcblx0XHRyZXR1cm4gZnVuY3Rpb24gKHMpXG5cdFx0e1xuXHRcdFx0cmV0dXJuIGZuKHMsIG9wdGlvbnMpO1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBleHBvcnRzIGFzIHR5cGVvZiBpbXBvcnQoJy4vbGlzdCcpO1xuIl19
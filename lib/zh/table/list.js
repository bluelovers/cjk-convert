"use strict";
/**
 * Created by user on 2018/6/10/010.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const __1 = require("../..");
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
        .concat(arr.map(w(__1.default.cjk2zht)))
        // @ts-ignore
        .concat(arr.map(w(__1.default.cn2tw)))
        // @ts-ignore
        .concat(arr.map(w(__1.default.cjk2zhs)))
        // @ts-ignore
        .concat(arr.map(w(__1.default.cjk2jp)))
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
const zhTableList = require("./list");
exports.default = zhTableList;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOztHQUVHOztBQUVILG1DQUErRDtBQUUvRCw2QkFBNEI7QUFFNUIsMkNBQWlDO0FBU2pDOzs7Ozs7O0dBT0c7QUFDSCxTQUFnQixhQUFhLENBQUMsSUFBWSxFQUFFLFVBQW9CLEVBQUU7SUFFakUsSUFBSSxDQUFDLEdBQUcsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRWhDLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNyQyxJQUFJLGNBQWMsR0FBb0IsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUNuRCxJQUFJLEVBQUUsSUFBSTtRQUNWLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSTtLQUNsQixFQUFFLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUUzQixJQUFJLEVBQUUsR0FBRyxlQUFPLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxNQUFNLENBQUMsQ0FBQztJQUV6QyxPQUFPLENBQUM7U0FDTixNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQztRQUVyQixhQUFhO1FBQ2IsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLGNBQWMsQ0FBQyxDQUFDLENBQUM7UUFFOUIsT0FBTyxDQUFDLENBQUM7SUFDVixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQ0w7QUFDSCxDQUFDO0FBckJELHNDQXFCQztBQUVEOzs7OztHQUtHO0FBQ0gsU0FBZ0IsUUFBUSxDQUFDLElBQVksRUFBRSxVQUFvQixFQUFFO0lBRTVELElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUVaLElBQUksR0FBRyxHQUFHLGFBQWEsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFFdkMsSUFBSSxHQUFHLENBQUMsTUFBTSxJQUFJLENBQUMsRUFDbkI7UUFDQyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ3pCO1lBQ0MsYUFBYTtZQUNiLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDYjtRQUVELGFBQWE7UUFDYixPQUFPLEdBQUcsQ0FBQztLQUNYO0lBRUQsR0FBRztTQUNELE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRSxLQUFLLEVBQUUsR0FBRztRQUUvQixDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDdEIsQ0FBQyxDQUFDLENBQ0Y7SUFFRCxTQUFTLENBQUMsQ0FBQyxDQUFXLEVBQUUsR0FBRyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssR0FBRyxDQUFDO1FBRXRELE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDO1lBRTdCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDaEIsSUFBSSxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQztZQUVsQixJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUNsQjtnQkFDQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQzthQUN4QztpQkFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxNQUFNLEVBQ2xDO2dCQUNDLDhDQUE4QztnQkFFOUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNYO1lBRUQsT0FBTyxDQUFDLENBQUE7UUFDVCxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUE7SUFDUCxDQUFDO0lBRUQsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO0lBRVYsT0FBTyxFQUFFLENBQUM7QUFDWCxDQUFDO0FBbERELDRCQWtEQztBQUVEOzs7O0dBSUc7QUFDSCxTQUFnQixNQUFNLENBQUMsR0FBYSxFQUFFLFVBQTJCLEVBQUU7SUFFbEUsT0FBTyxHQUFHO1FBQ1YsYUFBYTtTQUNYLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxXQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNwQyxhQUFhO1NBQ1osTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFdBQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLGFBQWE7U0FDWixNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsV0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDcEMsYUFBYTtTQUNaLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxXQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUNsQyxNQUFNLENBQUMsVUFBVSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUs7UUFFcEMsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQztJQUN0QyxDQUFDLENBQUMsQ0FDRDtJQUVGLFNBQVMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxHQUFHLElBQUk7UUFFckIsT0FBTyxVQUFVLENBQUM7WUFFakIsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQTtJQUNGLENBQUM7QUFDRixDQUFDO0FBeEJELHdCQXdCQztBQUVELHNDQUFzQztBQUN0QyxrQkFBZSxXQUFXLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgdXNlciBvbiAyMDE4LzYvMTAvMDEwLlxuICovXG5cbmltcG9ydCB6aFRhYmxlLCB7IElPcHRpb25zIGFzIElPcHRpb25zWmhUYWJsZSB9IGZyb20gJy4vaW5kZXgnO1xuaW1wb3J0IHsgSU9wdGlvbnMgYXMgSU9wdGlvbnNDamtDb252IH0gZnJvbSAnLi4vY29udmVydCc7XG5pbXBvcnQgQ2prQ29udiBmcm9tICcuLi8uLic7XG5cbmltcG9ydCBVU3RyaW5nIGZyb20gJ3VuaS1zdHJpbmcnO1xuXG5leHBvcnQgdHlwZSBJT3B0aW9ucyA9IHtcblx0b3B0aW9uc1poVGFibGU/OiBJT3B0aW9uc1poVGFibGUsXG5cdHNraXA/LFxuXG5cdGxhbmc/OiAnemgnIHwgJ2NuJyB8ICdqcCcgfCAnYXV0bycgfCBzdHJpbmcsXG59XG5cbi8qKlxuICpcbiAqIEBleGFtcGxlXG4gKiBgYGBcbiAqIGNoYXJUYWJsZUxpc3QoJ+WPuOmprCcpXG4gKiAvLyA9PiBbIFsgJ+WPuCcgXSwgWyAn6aasJywgJ+mprCcgXSBdXG4gKiBgYGBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNoYXJUYWJsZUxpc3QodGV4dDogc3RyaW5nLCBvcHRpb25zOiBJT3B0aW9ucyA9IHt9KTogc3RyaW5nW11bXVxue1xuXHRsZXQgYSA9IFVTdHJpbmcuc3BsaXQodGV4dCwgJycpO1xuXG5cdG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zKTtcblx0bGV0IG9wdGlvbnNaaFRhYmxlOiBJT3B0aW9uc1poVGFibGUgPSBPYmplY3QuYXNzaWduKHtcblx0XHRzYWZlOiB0cnVlLFxuXHRcdHNraXA6IG9wdGlvbnMuc2tpcCxcblx0fSwgb3B0aW9ucy5vcHRpb25zWmhUYWJsZSk7XG5cblx0bGV0IGZuID0gemhUYWJsZVtvcHRpb25zLmxhbmcgfHwgJ2F1dG8nXTtcblxuXHRyZXR1cm4gYVxuXHRcdC5yZWR1Y2UoZnVuY3Rpb24gKGEsIGMpXG5cdFx0e1xuXHRcdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdFx0YS5wdXNoKGZuKGMsIG9wdGlvbnNaaFRhYmxlKSk7XG5cblx0XHRcdHJldHVybiBhO1xuXHRcdH0sIFtdKVxuXHRcdDtcbn1cblxuLyoqXG4gKlxuICogQGV4YW1wbGVcbiAqIHRleHRMaXN0KCflj7jpqawnKVxuICogLy8gPT4gWyAn5Y+46aasJywgJ+WPuOmprCcgXVxuICovXG5leHBvcnQgZnVuY3Rpb24gdGV4dExpc3QodGV4dDogc3RyaW5nLCBvcHRpb25zOiBJT3B0aW9ucyA9IHt9KTogc3RyaW5nW11cbntcblx0bGV0IGFhID0gW107XG5cblx0bGV0IGFyciA9IGNoYXJUYWJsZUxpc3QodGV4dCwgb3B0aW9ucyk7XG5cblx0aWYgKGFyci5sZW5ndGggPD0gMSlcblx0e1xuXHRcdGlmIChBcnJheS5pc0FycmF5KGFyclswXSkpXG5cdFx0e1xuXHRcdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdFx0YXJyID0gYXJyWzBdO1xuXHRcdH1cblxuXHRcdC8vIEB0cy1pZ25vcmVcblx0XHRyZXR1cm4gYXJyO1xuXHR9XG5cblx0YXJyXG5cdFx0LmZvckVhY2goZnVuY3Rpb24gKHYsIGluZGV4LCBhcnIpXG5cdFx0e1xuXHRcdFx0Zih2LCAnJywgaW5kZXgsIGFycik7XG5cdFx0fSlcblx0O1xuXG5cdGZ1bmN0aW9uIGYodjogc3RyaW5nW10sIHN0ciA9ICcnLCBpbmRleCwgYXJyLCBkZXB0aCA9IDApXG5cdHtcblx0XHRyZXR1cm4gdi5yZWR1Y2UoZnVuY3Rpb24gKGEsIGMpXG5cdFx0e1xuXHRcdFx0bGV0IHMgPSBzdHIgKyBjO1xuXHRcdFx0bGV0IGkgPSBpbmRleCArIDE7XG5cblx0XHRcdGlmIChpIDwgYXJyLmxlbmd0aClcblx0XHRcdHtcblx0XHRcdFx0bGV0IHIgPSBmKGFycltpXSwgcywgaSwgYXJyLCBkZXB0aCArIDEpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZiAoKGRlcHRoICsgMSkgPT0gYXJyLmxlbmd0aClcblx0XHRcdHtcblx0XHRcdFx0Ly9jb25zb2xlLmxvZyg3NzcsIHMsIFtzdHIsIGNdLCBpbmRleCwgZGVwdGgpO1xuXG5cdFx0XHRcdGFhLnB1c2gocyk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBhXG5cdFx0fSwgW10pXG5cdH1cblxuXHRhYS5zb3J0KCk7XG5cblx0cmV0dXJuIGFhO1xufVxuXG4vKipcbiAqIEBleGFtcGxlXG4gKiBhcnJDamsoWyflj7jpqawnLCAn5LiK5a6YJywgJ+asp+mYsycsICflpI/kvq8nXSlcbiAqIC8vID0+IFsgJ+WPuOmprCcsICfkuIrlrpgnLCAn5qyn6ZizJywgJ+Wkj+S+rycsICflj7jppqwnLCAn5q2Q6Zm9JywgJ+asp+mZvScgXVxuICovXG5leHBvcnQgZnVuY3Rpb24gYXJyQ2prKGFycjogc3RyaW5nW10sIG9wdGlvbnM6IElPcHRpb25zQ2prQ29udiA9IHt9KTogc3RyaW5nW11cbntcblx0cmV0dXJuIGFyclxuXHQvLyBAdHMtaWdub3JlXG5cdFx0LmNvbmNhdChhcnIubWFwKHcoQ2prQ29udi5jamsyemh0KSkpXG5cdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdC5jb25jYXQoYXJyLm1hcCh3KENqa0NvbnYuY24ydHcpKSlcblx0XHQvLyBAdHMtaWdub3JlXG5cdFx0LmNvbmNhdChhcnIubWFwKHcoQ2prQ29udi5jamsyemhzKSkpXG5cdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdC5jb25jYXQoYXJyLm1hcCh3KENqa0NvbnYuY2prMmpwKSkpXG5cdFx0LmZpbHRlcihmdW5jdGlvbiAodmFsdWUsIGluZGV4LCBhcnJheSlcblx0XHR7XG5cdFx0XHRyZXR1cm4gYXJyYXkuaW5kZXhPZih2YWx1ZSkgPT0gaW5kZXg7XG5cdFx0fSlcblx0XHQ7XG5cblx0ZnVuY3Rpb24gdyhmbiwgLi4uYXJndilcblx0e1xuXHRcdHJldHVybiBmdW5jdGlvbiAocylcblx0XHR7XG5cdFx0XHRyZXR1cm4gZm4ocywgb3B0aW9ucyk7XG5cdFx0fVxuXHR9XG59XG5cbmltcG9ydCAqIGFzIHpoVGFibGVMaXN0IGZyb20gJy4vbGlzdCc7XG5leHBvcnQgZGVmYXVsdCB6aFRhYmxlTGlzdDtcbiJdfQ==
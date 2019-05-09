"use strict";
/**
 * Created by user on 2018/6/10/010.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const index_2 = require("../../zh/convert/index");
const index_3 = require("../../jp/index");
const uni_string_1 = require("uni-string");
const greedy_1 = require("./greedy");
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
        .concat(arr.map(w(index_3.cjk2zht)))
        // @ts-ignore
        .concat(arr.map(w(index_2.cn2tw)))
        // @ts-ignore
        .concat(arr.map(w(index_3.cjk2zhs)))
        // @ts-ignore
        .concat(arr.map(w(index_3.cjk2jp)))
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
function slugify(input, options = {}, unsafe2) {
    if (typeof options === 'boolean') {
        [unsafe2, options] = [options, {}];
    }
    options = (options || {});
    options = {
        ...options,
        optionsZhTable: {
            safe: false,
            greedyTable: true,
            ...options.optionsZhTable,
        },
    };
    let k = unsafe2 ? greedy_1.greedyTableReplace(input) : input;
    let arr = charTableList(k, options);
    return arr
        .reduce(function (s, a) {
        s.push(a[0]);
        return s;
    }, [])
        .join('');
}
exports.slugify = slugify;
exports.default = exports;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOztHQUVHOztBQUVILG1DQUErRDtBQUUvRCxrREFBK0M7QUFDL0MsMENBQTBEO0FBRTFELDJDQUFpQztBQUNqQyxxQ0FBa0Y7QUFTbEY7Ozs7Ozs7R0FPRztBQUNILFNBQWdCLGFBQWEsQ0FBQyxJQUFZLEVBQUUsVUFBb0IsRUFBRTtJQUVqRSxJQUFJLENBQUMsR0FBRyxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFaEMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3JDLElBQUksY0FBYyxHQUFvQixNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ25ELElBQUksRUFBRSxJQUFJO1FBQ1YsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJO0tBQ2xCLEVBQUUsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBRTNCLElBQUksRUFBRSxHQUFHLGVBQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLE1BQU0sQ0FBQyxDQUFDO0lBRXpDLE9BQU8sQ0FBQztTQUNOLE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDO1FBRXJCLGFBQWE7UUFDYixDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsY0FBYyxDQUFDLENBQUMsQ0FBQztRQUU5QixPQUFPLENBQUMsQ0FBQztJQUNWLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FDTDtBQUNILENBQUM7QUFyQkQsc0NBcUJDO0FBRUQ7Ozs7O0dBS0c7QUFDSCxTQUFnQixRQUFRLENBQUMsSUFBWSxFQUFFLFVBQW9CLEVBQUU7SUFFNUQsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDO0lBRVosSUFBSSxHQUFHLEdBQUcsYUFBYSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztJQUV2QyxJ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QUFFLENBQWEsQ0FBQztJQUV0QyxPQUFPLEdBQUc7UUFDVCxHQUFHLE9BQU87UUFDVixjQUFjLEVBQUU7WUFDZixJQUFJLEVBQUUsS0FBSztZQUNYLFdBQVcsRUFBRSxJQUFJO1lBQ2pCLEdBQUcsT0FBTyxDQUFDLGNBQWM7U0FDekI7S0FDRCxDQUFDO0lBRUYsSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQywyQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQ3BELElBQUksR0FBRyxHQUFlLGFBQWEsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFFaEQsT0FBTyxHQUFHO1NBQ1IsTUFBTSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUM7UUFFckIsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNiLE9BQU8sQ0FBQyxDQUFBO0lBQ1QsQ0FBQyxFQUFFLEVBQUUsQ0FBQztTQUNMLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQTtBQUNYLENBQUM7QUE1QkQsMEJBNEJDO0FBRUQsa0JBQWUsT0FBa0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSB1c2VyIG9uIDIwMTgvNi8xMC8wMTAuXG4gKi9cblxuaW1wb3J0IHpoVGFibGUsIHsgSU9wdGlvbnMgYXMgSU9wdGlvbnNaaFRhYmxlIH0gZnJvbSAnLi9pbmRleCc7XG5pbXBvcnQgeyBJT3B0aW9ucyBhcyBJT3B0aW9uc0Nqa0NvbnYgfSBmcm9tICcuLi9jb252ZXJ0JztcbmltcG9ydCB7IGNuMnR3IH0gZnJvbSAnLi4vLi4vemgvY29udmVydC9pbmRleCc7XG5pbXBvcnQgeyBjamsyanAsIGNqazJ6aHMsIGNqazJ6aHQgfSBmcm9tICcuLi8uLi9qcC9pbmRleCc7XG5cbmltcG9ydCBVU3RyaW5nIGZyb20gJ3VuaS1zdHJpbmcnO1xuaW1wb3J0IHsgX2dyZWVkeVRhYmxlQnVpbGQsIGdyZWVkeVRhYmxlUmVwbGFjZSwgZ3JlZWR5VGFibGVUZXN0IH0gZnJvbSAnLi9ncmVlZHknO1xuXG5leHBvcnQgdHlwZSBJT3B0aW9ucyA9IHtcblx0b3B0aW9uc1poVGFibGU/OiBJT3B0aW9uc1poVGFibGUsXG5cdHNraXA/LFxuXG5cdGxhbmc/OiAnY24nIHwgJ2pwJyB8ICdhdXRvJyB8IHN0cmluZyxcbn1cblxuLyoqXG4gKlxuICogQGV4YW1wbGVcbiAqIGBgYFxuICogY2hhclRhYmxlTGlzdCgn5Y+46amsJylcbiAqIC8vID0+IFsgWyAn5Y+4JyBdLCBbICfppqwnLCAn6amsJyBdIF1cbiAqIGBgYFxuICovXG5leHBvcnQgZnVuY3Rpb24gY2hhclRhYmxlTGlzdCh0ZXh0OiBzdHJpbmcsIG9wdGlvbnM6IElPcHRpb25zID0ge30pOiBzdHJpbmdbXVtdXG57XG5cdGxldCBhID0gVVN0cmluZy5zcGxpdCh0ZXh0LCAnJyk7XG5cblx0b3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMpO1xuXHRsZXQgb3B0aW9uc1poVGFibGU6IElPcHRpb25zWmhUYWJsZSA9IE9iamVjdC5hc3NpZ24oe1xuXHRcdHNhZmU6IHRydWUsXG5cdFx0c2tpcDogb3B0aW9ucy5za2lwLFxuXHR9LCBvcHRpb25zLm9wdGlvbnNaaFRhYmxlKTtcblxuXHRsZXQgZm4gPSB6aFRhYmxlW29wdGlvbnMubGFuZyB8fCAnYXV0byddO1xuXG5cdHJldHVybiBhXG5cdFx0LnJlZHVjZShmdW5jdGlvbiAoYSwgYylcblx0XHR7XG5cdFx0XHQvLyBAdHMtaWdub3JlXG5cdFx0XHRhLnB1c2goZm4oYywgb3B0aW9uc1poVGFibGUpKTtcblxuXHRcdFx0cmV0dXJuIGE7XG5cdFx0fSwgW10pXG5cdFx0O1xufVxuXG4vKipcbiAqXG4gKiBAZXhhbXBsZVxuICogdGV4dExpc3QoJ+WPuOmprCcpXG4gKiAvLyA9PiBbICflj7jppqwnLCAn5Y+46amsJyBdXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0ZXh0TGlzdCh0ZXh0OiBzdHJpbmcsIG9wdGlvbnM6IElPcHRpb25zID0ge30pOiBzdHJpbmdbXVxue1xuXHRsZXQgYWEgPSBbXTtcblxuXHRsZXQgYXJyID0gY2hhclRhYmxlTGlzdCh0ZXh0LCBvcHRpb25zKTtcblxuXHRpZiAoYXJyLmxlbmd0aCA8PSAxKVxuXHR7XG5cdFx0aWYgKEFycmF5LmlzQXJyYXkoYXJyWzBdKSlcblx0XHR7XG5cdFx0XHQvLyBAdHMtaWdub3JlXG5cdFx0XHRhcnIgPSBhcnJbMF07XG5cdFx0fVxuXG5cdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdHJldHVybiBhcnI7XG5cdH1cblxuXHRhcnJcblx0XHQuZm9yRWFjaChmdW5jdGlvbiAodiwgaW5kZXgsIGFycilcblx0XHR7XG5cdFx0XHRmKHYsICcnLCBpbmRleCwgYXJyKTtcblx0XHR9KVxuXHQ7XG5cblx0ZnVuY3Rpb24gZih2OiBzdHJpbmdbXSwgc3RyID0gJycsIGluZGV4LCBhcnIsIGRlcHRoID0gMClcblx0e1xuXHRcdHJldHVybiB2LnJlZHVjZShmdW5jdGlvbiAoYSwgYylcblx0XHR7XG5cdFx0XHRsZXQgcyA9IHN0ciArIGM7XG5cdFx0XHRsZXQgaSA9IGluZGV4ICsgMTtcblxuXHRcdFx0aWYgKGkgPCBhcnIubGVuZ3RoKVxuXHRcdFx0e1xuXHRcdFx0XHRsZXQgciA9IGYoYXJyW2ldLCBzLCBpLCBhcnIsIGRlcHRoICsgMSk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIGlmICgoZGVwdGggKyAxKSA9PSBhcnIubGVuZ3RoKVxuXHRcdFx0e1xuXHRcdFx0XHQvL2NvbnNvbGUubG9nKDc3NywgcywgW3N0ciwgY10sIGluZGV4LCBkZXB0aCk7XG5cblx0XHRcdFx0YWEucHVzaChzKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGFcblx0XHR9LCBbXSlcblx0fVxuXG5cdGFhLnNvcnQoKTtcblxuXHRyZXR1cm4gYWE7XG59XG5cbi8qKlxuICogQGV4YW1wbGVcbiAqIGFyckNqayhbJ+WPuOmprCcsICfkuIrlrpgnLCAn5qyn6ZizJywgJ+Wkj+S+ryddKVxuICogLy8gPT4gWyAn5Y+46amsJywgJ+S4iuWumCcsICfmrKfpmLMnLCAn5aSP5L6vJywgJ+WPuOmmrCcsICfmrZDpmb0nLCAn5qyn6Zm9JyBdXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhcnJDamsoYXJyOiBzdHJpbmdbXSwgb3B0aW9uczogSU9wdGlvbnNDamtDb252ID0ge30pOiBzdHJpbmdbXVxue1xuXHRyZXR1cm4gYXJyXG5cdC8vIEB0cy1pZ25vcmVcblx0XHQuY29uY2F0KGFyci5tYXAodyhjamsyemh0KSkpXG5cdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdC5jb25jYXQoYXJyLm1hcCh3KGNuMnR3KSkpXG5cdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdC5jb25jYXQoYXJyLm1hcCh3KGNqazJ6aHMpKSlcblx0XHQvLyBAdHMtaWdub3JlXG5cdFx0LmNvbmNhdChhcnIubWFwKHcoY2prMmpwKSkpXG5cdFx0LmZpbHRlcihmdW5jdGlvbiAodmFsdWUsIGluZGV4LCBhcnJheSlcblx0XHR7XG5cdFx0XHRyZXR1cm4gYXJyYXkuaW5kZXhPZih2YWx1ZSkgPT0gaW5kZXg7XG5cdFx0fSlcblx0XHQ7XG5cblx0ZnVuY3Rpb24gdyhmbiwgLi4uYXJndilcblx0e1xuXHRcdHJldHVybiBmdW5jdGlvbiAocylcblx0XHR7XG5cdFx0XHRyZXR1cm4gZm4ocywgb3B0aW9ucyk7XG5cdFx0fVxuXHR9XG59XG5cbi8qKlxuICog55So5L6G5qiZ5rqW5YyW5a2X5LiyIOS9nOeCuuaOkuW6j+eUqFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2x1Z2lmeShpbnB1dDogc3RyaW5nLCBvcHRpb25zPzogSU9wdGlvbnMsIHVuc2FmZTI/OiBib29sZWFuKTogc3RyaW5nXG4vKipcbiAqIOeUqOS+huaomea6luWMluWtl+S4siDkvZzngrrmjpLluo/nlKhcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNsdWdpZnkoaW5wdXQ6IHN0cmluZywgdW5zYWZlMj86IGJvb2xlYW4pOiBzdHJpbmdcbmV4cG9ydCBmdW5jdGlvbiBzbHVnaWZ5KGlucHV0OiBzdHJpbmcsIG9wdGlvbnM6IElPcHRpb25zIHwgYm9vbGVhbiA9IHt9LCB1bnNhZmUyPzogYm9vbGVhbik6IHN0cmluZ1xue1xuXHRpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdib29sZWFuJylcblx0e1xuXHRcdFt1bnNhZmUyLCBvcHRpb25zXSA9IFtvcHRpb25zLCB7fV07XG5cdH1cblxuXHRvcHRpb25zID0gKG9wdGlvbnMgfHwge30pIGFzIElPcHRpb25zO1xuXG5cdG9wdGlvbnMgPSB7XG5cdFx0Li4ub3B0aW9ucyxcblx0XHRvcHRpb25zWmhUYWJsZToge1xuXHRcdFx0c2FmZTogZmFsc2UsXG5cdFx0XHRncmVlZHlUYWJsZTogdHJ1ZSxcblx0XHRcdC4uLm9wdGlvbnMub3B0aW9uc1poVGFibGUsXG5cdFx0fSxcblx0fTtcblxuXHRsZXQgayA9IHVuc2FmZTIgPyBncmVlZHlUYWJsZVJlcGxhY2UoaW5wdXQpIDogaW5wdXQ7XG5cdGxldCBhcnI6IHN0cmluZ1tdW10gPSBjaGFyVGFibGVMaXN0KGssIG9wdGlvbnMpO1xuXG5cdHJldHVybiBhcnJcblx0XHQucmVkdWNlKGZ1bmN0aW9uIChzLCBhKVxuXHRcdHtcblx0XHRcdHMucHVzaChhWzBdKTtcblx0XHRcdHJldHVybiBzXG5cdFx0fSwgW10pXG5cdFx0LmpvaW4oJycpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGV4cG9ydHMgYXMgdHlwZW9mIGltcG9ydCgnLi9saXN0Jyk7XG4iXX0=
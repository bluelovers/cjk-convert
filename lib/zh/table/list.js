"use strict";
/**
 * Created by user on 2018/6/10/010.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const index_2 = require("../../zh/convert/index");
const index_3 = require("../../jp/index");
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
        }
    };
    let arr;
    if (unsafe2) {
        let k = input
            .replace(/[噁悪惡]/g, '恶')
            .replace(/[繋繫係]/g, '系')
            .replace(/[糊鬍]/g, '胡')
            .replace(/[儅噹當]/g, '当')
            .replace(/[復複覆]/g, '复')
            .replace(/[囌蘇甦]/g, '苏')
            .replace(/[採彩睬]/g, '采')
            .replace(/[囉啰羅㑩儸]/g, '罗')
            .replace(/[浏瀏劉]/g, '刘')
            .replace(/[劵卷巻捲]/g, '券')
            .replace(/[划劃畫]/g, '画')
            .replace(/[鬥闘鬭鬪]/g, '斗')
            .replace(/[乾亁乹幹]/g, '干')
            .replace(/[図图]/g, '圖')
            .replace(/[暦曆歴歷]/g, '历')
            .replace(/[麪麵麺]/g, '面')
            .replace(/[讃讚賛贊赞]/g, '赞')
            .replace(/[發髪髮]/g, '发')
            .replace(/[侭儘盡]/g, '尽')
            .replace(/[優忧憂]/g, '忧')
            .replace(/[俱倶]/g, '具')
            .replace(/[之的得]/g, 'の')
            .replace(/[與与]/g, 'と')
            .replace(/[她他牠祂]/g, '它')
            .replace(/[支隻枝]/g, '只')
            .replace(/[炮砲炰]/g, '泡')
            .replace(/[仲]/g, '中')
            .replace(/[原]/g, '元')
            .replace(/[迴]/g, '回')
            .replace(/[乾亁乹幹]/g, '干')
            .replace(/[避闢]/g, '辟')
            .replace(/[滷鹵卤鲁]/g, '魯')
            .replace(/[檯臺颱儓]/g, '台');
        arr = charTableList(k, options);
    }
    else {
        arr = charTableList(input, options);
    }
    return arr
        .reduce(function (s, a) {
        s.push(a[0]);
        return s;
    }, [])
        .join('');
}
exports.slugify = slugify;
exports.default = exports;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOztHQUVHOztBQUVILG1DQUErRDtBQUcvRCxrREFBNEU7QUFDNUUsMENBQXVHO0FBRXZHLDJDQUFpQztBQVVqQzs7Ozs7OztHQU9HO0FBQ0gsU0FBZ0IsYUFBYSxDQUFDLElBQVksRUFBRSxVQUFvQixFQUFFO0lBRWpFLElBQUksQ0FBQyxHQUFHLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVoQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDckMsSUFBSSxjQUFjLEdBQW9CLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDbkQsSUFBSSxFQUFFLElBQUk7UUFDVixJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUk7S0FDbEIsRUFBRSxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7SUFFM0IsSUFBSSxFQUFFLEdBQUcsZUFBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUksTUFBTSxDQUFDLENBQUM7SUFFekMsT0FBTyxDQUFDO1NBQ04sTUFBTSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUM7UUFFckIsYUFBYTtRQUNiLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxjQUFjLENBQUMsQ0FBQyxDQUFDO1FBRTlCLE9BQU8sQ0FBQyxDQUFDO0lBQ1YsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUNMO0FBQ0gsQ0FBQztBQXJCRCxzQ0FxQkM7QUFFRDs7Ozs7R0FLRztBQUNILFNBQWdCLFFBQVEsQ0FBQyxJQUFZLEVBQUUsVUFBb0IsRUFBRTtJQUU1RCxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFFWixJQUFJLEdBQUcsR0FBRyxhQUFhLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBRXZDLElBQUksR0FBRyxDQUFD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QUFFLEdBQUcsQ0FBQzthQUN0QixPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQzthQUNyQixPQUFPLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQzthQUN0QixPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQzthQUNyQixPQUFPLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQzthQUN2QixPQUFPLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQzthQUN0QixPQUFPLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQzthQUN0QixPQUFPLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQzthQUNwQixPQUFPLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQzthQUNwQixPQUFPLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQzthQUNwQixPQUFPLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQzthQUN2QixPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQzthQUNyQixPQUFPLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQzthQUN2QixPQUFPLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxDQUN4QjtRQUVELEdBQUcsR0FBRyxhQUFhLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQ2hDO1NBRUQ7UUFDQyxHQUFHLEdBQUcsYUFBYSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQTtLQUNuQztJQUVELE9BQU8sR0FBRztTQUNSLE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDO1FBRXJCLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDYixPQUFPLENBQUMsQ0FBQTtJQUNULENBQUMsRUFBRSxFQUFFLENBQUM7U0FDTCxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUE7QUFDWCxDQUFDO0FBeEVELDBCQXdFQztBQUVELGtCQUFlLE9BQWtDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgdXNlciBvbiAyMDE4LzYvMTAvMDEwLlxuICovXG5cbmltcG9ydCB6aFRhYmxlLCB7IElPcHRpb25zIGFzIElPcHRpb25zWmhUYWJsZSB9IGZyb20gJy4vaW5kZXgnO1xuaW1wb3J0IHsgSU9wdGlvbnMgYXMgSU9wdGlvbnNDamtDb252IH0gZnJvbSAnLi4vY29udmVydCc7XG5pbXBvcnQgQ2prQ29udiBmcm9tICcuLi8uLic7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIHpoQ29udmVydCwgdHcyY24sIGNuMnR3IH0gZnJvbSAnLi4vLi4vemgvY29udmVydC9pbmRleCc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIGpwQ29udmVydCwgemgyanAsIGpwMnpodCwganAyemhzLCBjamsyemh0LCBjamsyemhzLCBjamsyanAgfSBmcm9tICcuLi8uLi9qcC9pbmRleCc7XG5cbmltcG9ydCBVU3RyaW5nIGZyb20gJ3VuaS1zdHJpbmcnO1xuaW1wb3J0IHsgYXJyYXlfdW5pcXVlIH0gZnJvbSAnYXJyYXktaHlwZXItdW5pcXVlJztcblxuZXhwb3J0IHR5cGUgSU9wdGlvbnMgPSB7XG5cdG9wdGlvbnNaaFRhYmxlPzogSU9wdGlvbnNaaFRhYmxlLFxuXHRza2lwPyxcblxuXHRsYW5nPzogJ2NuJyB8ICdqcCcgfCAnYXV0bycgfCBzdHJpbmcsXG59XG5cbi8qKlxuICpcbiAqIEBleGFtcGxlXG4gKiBgYGBcbiAqIGNoYXJUYWJsZUxpc3QoJ+WPuOmprCcpXG4gKiAvLyA9PiBbIFsgJ+WPuCcgXSwgWyAn6aasJywgJ+mprCcgXSBdXG4gKiBgYGBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNoYXJUYWJsZUxpc3QodGV4dDogc3RyaW5nLCBvcHRpb25zOiBJT3B0aW9ucyA9IHt9KTogc3RyaW5nW11bXVxue1xuXHRsZXQgYSA9IFVTdHJpbmcuc3BsaXQodGV4dCwgJycpO1xuXG5cdG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zKTtcblx0bGV0IG9wdGlvbnNaaFRhYmxlOiBJT3B0aW9uc1poVGFibGUgPSBPYmplY3QuYXNzaWduKHtcblx0XHRzYWZlOiB0cnVlLFxuXHRcdHNraXA6IG9wdGlvbnMuc2tpcCxcblx0fSwgb3B0aW9ucy5vcHRpb25zWmhUYWJsZSk7XG5cblx0bGV0IGZuID0gemhUYWJsZVtvcHRpb25zLmxhbmcgfHwgJ2F1dG8nXTtcblxuXHRyZXR1cm4gYVxuXHRcdC5yZWR1Y2UoZnVuY3Rpb24gKGEsIGMpXG5cdFx0e1xuXHRcdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdFx0YS5wdXNoKGZuKGMsIG9wdGlvbnNaaFRhYmxlKSk7XG5cblx0XHRcdHJldHVybiBhO1xuXHRcdH0sIFtdKVxuXHRcdDtcbn1cblxuLyoqXG4gKlxuICogQGV4YW1wbGVcbiAqIHRleHRMaXN0KCflj7jpqawnKVxuICogLy8gPT4gWyAn5Y+46aasJywgJ+WPuOmprCcgXVxuICovXG5leHBvcnQgZnVuY3Rpb24gdGV4dExpc3QodGV4dDogc3RyaW5nLCBvcHRpb25zOiBJT3B0aW9ucyA9IHt9KTogc3RyaW5nW11cbntcblx0bGV0IGFhID0gW107XG5cblx0bGV0IGFyciA9IGNoYXJUYWJsZUxpc3QodGV4dCwgb3B0aW9ucyk7XG5cblx0aWYgKGFyci5sZW5ndGggPD0gMSlcblx0e1xuXHRcdGlmIChBcnJheS5pc0FycmF5KGFyclswXSkpXG5cdFx0e1xuXHRcdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdFx0YXJyID0gYXJyWzBdO1xuXHRcdH1cblxuXHRcdC8vIEB0cy1pZ25vcmVcblx0XHRyZXR1cm4gYXJyO1xuXHR9XG5cblx0YXJyXG5cdFx0LmZvckVhY2goZnVuY3Rpb24gKHYsIGluZGV4LCBhcnIpXG5cdFx0e1xuXHRcdFx0Zih2LCAnJywgaW5kZXgsIGFycik7XG5cdFx0fSlcblx0O1xuXG5cdGZ1bmN0aW9uIGYodjogc3RyaW5nW10sIHN0ciA9ICcnLCBpbmRleCwgYXJyLCBkZXB0aCA9IDApXG5cdHtcblx0XHRyZXR1cm4gdi5yZWR1Y2UoZnVuY3Rpb24gKGEsIGMpXG5cdFx0e1xuXHRcdFx0bGV0IHMgPSBzdHIgKyBjO1xuXHRcdFx0bGV0IGkgPSBpbmRleCArIDE7XG5cblx0XHRcdGlmIChpIDwgYXJyLmxlbmd0aClcblx0XHRcdHtcblx0XHRcdFx0bGV0IHIgPSBmKGFycltpXSwgcywgaSwgYXJyLCBkZXB0aCArIDEpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZiAoKGRlcHRoICsgMSkgPT0gYXJyLmxlbmd0aClcblx0XHRcdHtcblx0XHRcdFx0Ly9jb25zb2xlLmxvZyg3NzcsIHMsIFtzdHIsIGNdLCBpbmRleCwgZGVwdGgpO1xuXG5cdFx0XHRcdGFhLnB1c2gocyk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBhXG5cdFx0fSwgW10pXG5cdH1cblxuXHRhYS5zb3J0KCk7XG5cblx0cmV0dXJuIGFhO1xufVxuXG4vKipcbiAqIEBleGFtcGxlXG4gKiBhcnJDamsoWyflj7jpqawnLCAn5LiK5a6YJywgJ+asp+mYsycsICflpI/kvq8nXSlcbiAqIC8vID0+IFsgJ+WPuOmprCcsICfkuIrlrpgnLCAn5qyn6ZizJywgJ+Wkj+S+rycsICflj7jppqwnLCAn5q2Q6Zm9JywgJ+asp+mZvScgXVxuICovXG5leHBvcnQgZnVuY3Rpb24gYXJyQ2prKGFycjogc3RyaW5nW10sIG9wdGlvbnM6IElPcHRpb25zQ2prQ29udiA9IHt9KTogc3RyaW5nW11cbntcblx0cmV0dXJuIGFyclxuXHQvLyBAdHMtaWdub3JlXG5cdFx0LmNvbmNhdChhcnIubWFwKHcoY2prMnpodCkpKVxuXHRcdC8vIEB0cy1pZ25vcmVcblx0XHQuY29uY2F0KGFyci5tYXAodyhjbjJ0dykpKVxuXHRcdC8vIEB0cy1pZ25vcmVcblx0XHQuY29uY2F0KGFyci5tYXAodyhjamsyemhzKSkpXG5cdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdC5jb25jYXQoYXJyLm1hcCh3KGNqazJqcCkpKVxuXHRcdC5maWx0ZXIoZnVuY3Rpb24gKHZhbHVlLCBpbmRleCwgYXJyYXkpXG5cdFx0e1xuXHRcdFx0cmV0dXJuIGFycmF5LmluZGV4T2YodmFsdWUpID09IGluZGV4O1xuXHRcdH0pXG5cdFx0O1xuXG5cdGZ1bmN0aW9uIHcoZm4sIC4uLmFyZ3YpXG5cdHtcblx0XHRyZXR1cm4gZnVuY3Rpb24gKHMpXG5cdFx0e1xuXHRcdFx0cmV0dXJuIGZuKHMsIG9wdGlvbnMpO1xuXHRcdH1cblx0fVxufVxuXG4vKipcbiAqIOeUqOS+huaomea6luWMluWtl+S4siDkvZzngrrmjpLluo/nlKhcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNsdWdpZnkoaW5wdXQ6IHN0cmluZywgb3B0aW9ucz86IElPcHRpb25zLCB1bnNhZmUyPzogYm9vbGVhbik6IHN0cmluZ1xuLyoqXG4gKiDnlKjkvobmqJnmupbljJblrZfkuLIg5L2c54K65o6S5bqP55SoXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzbHVnaWZ5KGlucHV0OiBzdHJpbmcsIHVuc2FmZTI/OiBib29sZWFuKTogc3RyaW5nXG5leHBvcnQgZnVuY3Rpb24gc2x1Z2lmeShpbnB1dDogc3RyaW5nLCBvcHRpb25zOiBJT3B0aW9ucyB8IGJvb2xlYW4gPSB7fSwgdW5zYWZlMj86IGJvb2xlYW4pOiBzdHJpbmdcbntcblx0aWYgKHR5cGVvZiBvcHRpb25zID09PSAnYm9vbGVhbicpXG5cdHtcblx0XHRbdW5zYWZlMiwgb3B0aW9uc10gPSBbb3B0aW9ucywge31dO1xuXHR9XG5cblx0b3B0aW9ucyA9IChvcHRpb25zIHx8IHt9KSBhcyBJT3B0aW9ucztcblxuXHRvcHRpb25zID0ge1xuXHRcdC4uLm9wdGlvbnMsXG5cdFx0b3B0aW9uc1poVGFibGU6IHtcblx0XHRcdHNhZmU6IGZhbHNlLFxuXHRcdFx0Z3JlZWR5VGFibGU6IHRydWUsXG5cdFx0XHQuLi5vcHRpb25zLm9wdGlvbnNaaFRhYmxlLFxuXHRcdH1cblx0fTtcblxuXHRsZXQgYXJyOiBzdHJpbmdbXVtdO1xuXG5cdGlmICh1bnNhZmUyKVxuXHR7XG5cdFx0bGV0IGsgPSBpbnB1dFxuXHRcdFx0LnJlcGxhY2UoL1vlmYHmgqrmg6FdL2csICfmgbYnKVxuXHRcdFx0LnJlcGxhY2UoL1vnuYvnuavkv4JdL2csICfns7snKVxuXHRcdFx0LnJlcGxhY2UoL1vns4rprI1dL2csICfog6EnKVxuXHRcdFx0LnJlcGxhY2UoL1vlhIXlmbnnlbZdL2csICflvZMnKVxuXHRcdFx0LnJlcGxhY2UoL1vlvqnopIfopoZdL2csICflpI0nKVxuXHRcdFx0LnJlcGxhY2UoL1vlm4zomIfnlKZdL2csICfoi48nKVxuXHRcdFx0LnJlcGxhY2UoL1vmjqHlvannnaxdL2csICfph4cnKVxuXHRcdFx0LnJlcGxhY2UoL1vlm4nllbDnvoXjkanlhLhdL2csICfnvZcnKVxuXHRcdFx0LnJlcGxhY2UoL1vmtY/ngI/lioldL2csICfliJgnKVxuXHRcdFx0LnJlcGxhY2UoL1vlirXljbflt7vmjbJdL2csICfliLgnKVxuXHRcdFx0LnJlcGxhY2UoL1vliJLlioPnlatdL2csICfnlLsnKVxuXHRcdFx0LnJlcGxhY2UoL1vprKXpl5jprK3prKpdL2csICfmlpcnKVxuXHRcdFx0LnJlcGxhY2UoL1vkub7kuoHkubnlubldL2csICflubInKVxuXHRcdFx0LnJlcGxhY2UoL1vlm7Plm75dL2csICflnJYnKVxuXHRcdFx0LnJlcGxhY2UoL1vmmqbmm4bmrbTmrbddL2csICfljoYnKVxuXHRcdFx0LnJlcGxhY2UoL1vpuqrpurXpurpdL2csICfpnaInKVxuXHRcdFx0LnJlcGxhY2UoL1voroPorpros5votIrotZ5dL2csICfotZ4nKVxuXHRcdFx0LnJlcGxhY2UoL1vnmbzpq6rpq65dL2csICflj5EnKVxuXHRcdFx0LnJlcGxhY2UoL1vkvq3lhJjnm6FdL2csICflsL0nKVxuXHRcdFx0LnJlcGxhY2UoL1vlhKrlv6fmhoJdL2csICflv6cnKVxuXHRcdFx0LnJlcGxhY2UoL1vkv7HlgLZdL2csICflhbcnKVxuXHRcdFx0LnJlcGxhY2UoL1vkuYvnmoTlvpddL2csICfjga4nKVxuXHRcdFx0LnJlcGxhY2UoL1voiIfkuI5dL2csICfjgagnKVxuXHRcdFx0LnJlcGxhY2UoL1vlpbnku5bniaDnpYJdL2csICflroMnKVxuXHRcdFx0LnJlcGxhY2UoL1vmlK/pmrvmnp1dL2csICflj6onKVxuXHRcdFx0LnJlcGxhY2UoL1vngq7noLLngrBdL2csICfms6EnKVxuXHRcdFx0LnJlcGxhY2UoL1vku7JdL2csICfkuK0nKVxuXHRcdFx0LnJlcGxhY2UoL1vljp9dL2csICflhYMnKVxuXHRcdFx0LnJlcGxhY2UoL1vov7RdL2csICflm54nKVxuXHRcdFx0LnJlcGxhY2UoL1vkub7kuoHkubnlubldL2csICflubInKVxuXHRcdFx0LnJlcGxhY2UoL1vpgb/pl6JdL2csICfovp8nKVxuXHRcdFx0LnJlcGxhY2UoL1vmu7fpubXljaTpsoFdL2csICfpra8nKVxuXHRcdFx0LnJlcGxhY2UoL1vmqq/oh7rporHlhJNdL2csICflj7AnKVxuXHRcdDtcblxuXHRcdGFyciA9IGNoYXJUYWJsZUxpc3Qoaywgb3B0aW9ucyk7XG5cdH1cblx0ZWxzZVxuXHR7XG5cdFx0YXJyID0gY2hhclRhYmxlTGlzdChpbnB1dCwgb3B0aW9ucylcblx0fVxuXG5cdHJldHVybiBhcnJcblx0XHQucmVkdWNlKGZ1bmN0aW9uIChzLCBhKVxuXHRcdHtcblx0XHRcdHMucHVzaChhWzBdKTtcblx0XHRcdHJldHVybiBzXG5cdFx0fSwgW10pXG5cdFx0LmpvaW4oJycpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGV4cG9ydHMgYXMgdHlwZW9mIGltcG9ydCgnLi9saXN0Jyk7XG4iXX0=
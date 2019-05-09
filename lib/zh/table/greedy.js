"use strict";
/**
 * Created by user on 2019/5/9.
 */
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const uni_string_1 = require("uni-string");
const array_hyper_unique_1 = require("array-hyper-unique");
_a = _greedyTableBuild([
    [/[噁悪惡]/g, '恶'],
    [/[繋繫係]/g, '系'],
    [/[糊鬍]/g, '胡'],
    [/[儅噹當]/g, '当'],
    [/[復複覆]/g, '复'],
    [/[囌蘇甦]/g, '苏'],
    [/[採彩睬踩埰綵䌽]/g, '采'],
    [/[囉啰羅㑩儸]/g, '罗'],
    [/[浏瀏劉]/g, '刘'],
    [/[劵卷巻捲]/g, '券'],
    [/[划劃畫]/g, '画'],
    [/[鬥闘鬭鬪]/g, '斗'],
    [/[乾亁乹幹]/g, '干'],
    [/[図图]/g, '圖'],
    [/[暦曆歴歷]/g, '历'],
    [/[麪麵麺]/g, '面'],
    [/[讃讚賛贊赞]/g, '赞'],
    [/[發髪髮]/g, '发'],
    [/[侭儘盡]/g, '尽'],
    [/[優忧憂]/g, '忧'],
    [/[俱倶]/g, '具'],
    [/[之的得]/g, 'の'],
    [/[與与]/g, 'と'],
    [/[她他牠祂佗]/g, '它'],
    [/[支隻枝]/g, '只'],
    [/[炮砲炰]/g, '泡'],
    [/[仲]/g, '中'],
    [/[原]/g, '元'],
    [/[迴廻]/g, '回'],
    [/[乾亁乹幹]/g, '干'],
    [/[避闢]/g, '辟'],
    [/[滷鹵卤鲁]/g, '魯'],
    [/[檯臺颱儓]/g, '台'],
    [/[宻祕秘]/g, '密'],
    [/[謎谜]/g, '迷'],
    [/[砂莎]/g, '沙'],
    [/[編篇编]/g, '篇'],
    [/[冶]/g, '治'],
    [/[炼煉錬鍊𫔀練练]/ug, '練'],
    [/[亞亚婭娅]/ug, '亚'],
    [/[塞賽]/ug, '赛'],
    [/[腾騰籐籘]/ug, '藤'],
    [/[妳祢禰]/ug, '你'],
    [/[喰飠⻞飧]/ug, '食'],
    [/[瑪馬玛马]/ug, '马'],
    [/[餸餚]/ug, '餚'],
    [/[裸]/ug, '果'],
    [/[凱凯鎧铠]/ug, '凱'],
    [/[帖贴]/ug, '貼'],
    [/[什甚]/ug, '什'],
    [/[聯联連连]/ug, '連'],
    [/[像]/ug, '象'],
    [/[藉]/ug, '借'],
    [/[蕾]/ug, '雷'],
    [/[訂订]/ug, '定'],
    [/[嚮]/ug, '向'],
    [/[糸糹丝]/ug, '絲'],
    [/[筒]/ug, '桶'],
    [/[兹玆滋]/ug, '茲'],
    [/[呐訥讷]/ug, '吶'],
    [/[穀糓]/ug, '谷'],
    [/[两兩倆俩]/ug, '両'],
    [/[帳賬账]/ug, '帐'],
    [/[版闆]/ug, '板'],
    [/[待]/ug, '呆'],
    [/[熔鎔镕融螎]/ug, '溶'],
    [/[匯汇]/ug, '彙'],
    [/[彿仏]/ug, '佛'],
    [/[阿]/ug, '啊'],
    [/[家]/ug, '傢'],
    [/[爆]/ug, '暴'],
]), exports._greedyTableCacheRegexp = _a._greedyTableCacheRegexp, exports._greedyTableCacheMap = _a._greedyTableCacheMap, exports._greedyTableCacheTest = _a._greedyTableCacheTest;
//console.log(_greedyTableCacheTest);
function _greedyTableBuild(data) {
    const _greedyTableCacheRegexp = data;
    let _greedyTableCacheMap;
    let _greedyTableCacheTest;
    _greedyTableCacheMap = new Map();
    let arr = _greedyTableCacheRegexp
        .reduce(function (arr, r) {
        let s = r[0].source.replace(/^.*\[|\].*$/ug, '');
        let a = uni_string_1.default.split(s, '').concat(r[1]);
        a.forEach(c => {
            _greedyTableCacheMap.set(c, a);
        });
        arr.push(...a);
        return arr;
    }, []);
    _greedyTableCacheTest = new RegExp(`[${array_hyper_unique_1.array_unique(arr).join('')}]`, 'u');
    return {
        _greedyTableCacheRegexp,
        _greedyTableCacheMap,
        _greedyTableCacheTest,
    };
}
exports._greedyTableBuild = _greedyTableBuild;
function greedyTableTest(input) {
    return exports._greedyTableCacheTest.test(input);
}
exports.greedyTableTest = greedyTableTest;
function greedyTableCharArray(char) {
    return exports._greedyTableCacheMap.get(char);
}
exports.greedyTableCharArray = greedyTableCharArray;
function greedyTableReplace(input) {
    if (greedyTableTest(input)) {
        return exports._greedyTableCacheRegexp
            .reduce(function (input, r) {
            return input.replace(r[0], r[1]);
        }, input);
    }
    return input;
}
exports.greedyTableReplace = greedyTableReplace;
exports.default = exports;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JlZWR5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ3JlZWR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7R0FFRzs7O0FBRUgsMkNBQWlDO0FBQ2pDLDJEQUFrRDtBQUdyQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBd0VYLGlMQUFDO0FBRUgscUNBQXFDO0FBRXJDLFNBQWdCLGlCQUFpQixDQUFDLElBQXdCO0lBTXpELE1BQU0sdUJBQXVCLEdBQXVCLElBQUksQ0FBQztJQUV6RCxJQUFJLG9CQUEyQyxDQUFDO0lBQ2hELElBQUkscUJBQTZCLENBQUM7SUFFbEMsb0JBQW9CLEdBQUcsSUFBSSxHQUFHLEVBQW9CLENBQUM7SUFFbkQsSUFBSSxHQUFHLEdBQUcsdUJBQXVCO1NBQy9CLE1BQU0sQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBRXZCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqRCxJQUFJLENBQUMsR0FBRyxvQkFBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFFYixvQkFBb0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQy9CLENBQUMsQ0FBQyxDQUFDO1FBRUgsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRWYsT0FBTyxHQUFHLENBQUM7SUFDWixDQUFDLEVBQUUsRUFBYyxDQUFDLENBQ2xCO0lBRUQscUJBQXFCLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxpQ0FBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBRTNFLE9BQU87UUFDTix1QkFBdUI7UUFDdkIsb0JBQW9CO1FBQ3BCLHFCQUFxQjtLQUNyQixDQUFDO0FBQ0gsQ0FBQztBQXRDRCw4Q0FzQ0M7QUFFRCxTQUFnQixlQUFlLENBQUMsS0FBYTtJQUU1QyxPQUFPLDZCQUFxQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtBQUN6QyxDQUFDO0FBSEQsMENBR0M7QUFFRCxTQUFnQixvQkFBb0IsQ0FBQyxJQUFZO0lBRWhELE9BQU8sNEJBQW9CLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO0FBQ3RDLENBQUM7QUFIRCxvREFHQztBQUVELFNBQWdCLGtCQUFrQixDQUFDLEtBQWE7SUFFL0MsSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDLEVBQzFCO1FBQ0MsT0FBTywrQkFBdUI7YUFDNUIsTUFBTSxDQUFDLFVBQVUsS0FBSyxFQUFFLENBQUM7WUFFekIsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNqQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQ1I7S0FDRjtJQUVELE9BQU8sS0FBSyxDQUFBO0FBQ2IsQ0FBQztBQWJELGdEQWFDO0FBRUQsa0JBQWUsT0FBb0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSB1c2VyIG9uIDIwMTkvNS85LlxuICovXG5cbmltcG9ydCBVU3RyaW5nIGZyb20gJ3VuaS1zdHJpbmcnO1xuaW1wb3J0IHsgYXJyYXlfdW5pcXVlIH0gZnJvbSAnYXJyYXktaHlwZXItdW5pcXVlJztcbmltcG9ydCB7IElPcHRpb25zIH0gZnJvbSAnLi9saXN0JztcblxuZXhwb3J0IGNvbnN0IHsgX2dyZWVkeVRhYmxlQ2FjaGVSZWdleHAsIF9ncmVlZHlUYWJsZUNhY2hlTWFwLCBfZ3JlZWR5VGFibGVDYWNoZVRlc3QgfSA9IF9ncmVlZHlUYWJsZUJ1aWxkKFtcblx0Wy9b5ZmB5oKq5oOhXS9nLCAn5oG2J10sXG5cdFsvW+e5i+e5q+S/gl0vZywgJ+ezuyddLFxuXHRbL1vns4rprI1dL2csICfog6EnXSxcblx0Wy9b5YSF5Zm555W2XS9nLCAn5b2TJ10sXG5cdFsvW+W+qeikh+imhl0vZywgJ+WkjSddLFxuXHRbL1vlm4zomIfnlKZdL2csICfoi48nXSxcblx0Wy9b5o6h5b2p552s6Lip5Z+w57a15Iy9XS9nLCAn6YeHJ10sXG5cdFsvW+WbieWVsOe+heORqeWEuF0vZywgJ+e9lyddLFxuXHRbL1vmtY/ngI/lioldL2csICfliJgnXSxcblx0Wy9b5Yq15Y235be75o2yXS9nLCAn5Yi4J10sXG5cdFsvW+WIkuWKg+eVq10vZywgJ+eUuyddLFxuXHRbL1vprKXpl5jprK3prKpdL2csICfmlpcnXSxcblx0Wy9b5Lm+5LqB5Lm55bm5XS9nLCAn5bmyJ10sXG5cdFsvW+Wbs+Wbvl0vZywgJ+WcliddLFxuXHRbL1vmmqbmm4bmrbTmrbddL2csICfljoYnXSxcblx0Wy9b6bqq6bq16bq6XS9nLCAn6Z2iJ10sXG5cdFsvW+iug+iumuizm+i0iui1nl0vZywgJ+i1niddLFxuXHRbL1vnmbzpq6rpq65dL2csICflj5EnXSxcblx0Wy9b5L6t5YSY55uhXS9nLCAn5bC9J10sXG5cdFsvW+WEquW/p+aGgl0vZywgJ+W/pyddLFxuXHRbL1vkv7HlgLZdL2csICflhbcnXSxcblx0Wy9b5LmL55qE5b6XXS9nLCAn44GuJ10sXG5cdFsvW+iIh+S4jl0vZywgJ+OBqCddLFxuXHRbL1vlpbnku5bniaDnpYLkvZddL2csICflroMnXSxcblx0Wy9b5pSv6Zq75p6dXS9nLCAn5Y+qJ10sXG5cdFsvW+eCruegsueCsF0vZywgJ+azoSddLFxuXHRbL1vku7JdL2csICfkuK0nXSxcblx0Wy9b5Y6fXS9nLCAn5YWDJ10sXG5cdFsvW+i/tOW7u10vZywgJ+WbniddLFxuXHRbL1vkub7kuoHkubnlubldL2csICflubInXSxcblx0Wy9b6YG/6ZeiXS9nLCAn6L6fJ10sXG5cdFsvW+a7t+m5teWNpOmygV0vZywgJ+mtryddLFxuXHRbL1vmqq/oh7rporHlhJNdL2csICflj7AnXSxcblx0Wy9b5a6756WV56eYXS9nLCAn5a+GJ10sXG5cdFsvW+isjuiwnF0vZywgJ+i/tyddLFxuXHRbL1vnoILojo5dL2csICfmspknXSxcblx0Wy9b57eo56+H57yWXS9nLCAn56+HJ10sXG5cdFsvW+WGtl0vZywgJ+ayuyddLFxuXHRbL1vngrznhYnpjKzpjYrwq5SA57e057uDXS91ZywgJ+e3tCddLFxuXHRbL1vkup7kuprlqa3lqIVdL3VnLCAn5LqaJ10sXG5cdFsvW+WhnuizvV0vdWcsICfotZsnXSxcblx0Wy9b6IW+6aiw57GQ57GYXS91ZywgJ+iXpCddLFxuXHRbL1vlprPnpaLnprBdL3VnLCAn5L2gJ10sXG5cdFsvW+WWsOmjoOK7numjp10vdWcsICfpo58nXSxcblx0Wy9b55Gq6aas546b6amsXS91ZywgJ+mprCddLFxuXHRbL1vppLjppJpdL3VnLCAn6aSaJ10sXG5cdFsvW+ijuF0vdWcsICfmnpwnXSxcblx0Wy9b5Yex5Yev6Y6n6ZOgXS91ZywgJ+WHsSddLFxuXHRbL1vluJbotLRdL3VnLCAn6LK8J10sXG5cdFsvW+S7gOeUml0vdWcsICfku4AnXSxcblx0Wy9b6IGv6IGU6YCj6L+eXS91ZywgJ+mAoyddLFxuXHRbL1vlg49dL3VnLCAn6LGhJ10sXG5cdFsvW+iXiV0vdWcsICflgJ8nXSxcblx0Wy9b6JW+XS91ZywgJ+mbtyddLFxuXHRbL1voqILorqJdL3VnLCAn5a6aJ10sXG5cdFsvW+Warl0vdWcsICflkJEnXSxcblx0Wy9b57O457O55LidXS91ZywgJ+e1siddLFxuXHRbL1vnrZJdL3VnLCAn5qG2J10sXG5cdFsvW+WFueeOhua7i10vdWcsICfojLInXSxcblx0Wy9b5ZGQ6Kil6K63XS91ZywgJ+WQtiddLFxuXHRbL1vnqYDns5NdL3VnLCAn6LC3J10sXG5cdFsvW+S4pOWFqeWAhuS/qV0vdWcsICfkuKEnXSxcblx0Wy9b5biz6LOs6LSmXS91ZywgJ+W4kCddLFxuXHRbL1vniYjpl4ZdL3VnLCAn5p2/J10sXG5cdFsvW+W+hV0vdWcsICflkYYnXSxcblx0Wy9b54aU6Y6U6ZWV6J6N6J6OXS91ZywgJ+a6tiddLFxuXHRbL1vljK/msYddL3VnLCAn5b2ZJ10sXG5cdFsvW+W9v+S7j10vdWcsICfkvZsnXSxcblx0Wy9b6Zi/XS91ZywgJ+WViiddLFxuXHRbL1vlrrZdL3VnLCAn5YKiJ10sXG5cdFsvW+eIhl0vdWcsICfmmrQnXSxcbl0pO1xuXG4vL2NvbnNvbGUubG9nKF9ncmVlZHlUYWJsZUNhY2hlVGVzdCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBfZ3JlZWR5VGFibGVCdWlsZChkYXRhOiBbUmVnRXhwLCBzdHJpbmddW10pOiB7XG5cdF9ncmVlZHlUYWJsZUNhY2hlUmVnZXhwOiByZWFkb25seSAocmVhZG9ubHkgW1JlZ0V4cCwgc3RyaW5nXSlbXTtcblx0X2dyZWVkeVRhYmxlQ2FjaGVNYXA6IE1hcDxzdHJpbmcsIHJlYWRvbmx5IHN0cmluZ1tdPjtcblx0X2dyZWVkeVRhYmxlQ2FjaGVUZXN0OiBSZWdFeHA7XG59XG57XG5cdGNvbnN0IF9ncmVlZHlUYWJsZUNhY2hlUmVnZXhwOiBbUmVnRXhwLCBzdHJpbmddW10gPSBkYXRhO1xuXG5cdGxldCBfZ3JlZWR5VGFibGVDYWNoZU1hcDogTWFwPHN0cmluZywgc3RyaW5nW10+O1xuXHRsZXQgX2dyZWVkeVRhYmxlQ2FjaGVUZXN0OiBSZWdFeHA7XG5cblx0X2dyZWVkeVRhYmxlQ2FjaGVNYXAgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nW10+KCk7XG5cblx0bGV0IGFyciA9IF9ncmVlZHlUYWJsZUNhY2hlUmVnZXhwXG5cdFx0LnJlZHVjZShmdW5jdGlvbiAoYXJyLCByKVxuXHRcdHtcblx0XHRcdGxldCBzID0gclswXS5zb3VyY2UucmVwbGFjZSgvXi4qXFxbfFxcXS4qJC91ZywgJycpO1xuXG5cdFx0XHRsZXQgYSA9IFVTdHJpbmcuc3BsaXQocywgJycpLmNvbmNhdChyWzFdKTtcblxuXHRcdFx0YS5mb3JFYWNoKGMgPT5cblx0XHRcdHtcblx0XHRcdFx0X2dyZWVkeVRhYmxlQ2FjaGVNYXAuc2V0KGMsIGEpXG5cdFx0XHR9KTtcblxuXHRcdFx0YXJyLnB1c2goLi4uYSk7XG5cblx0XHRcdHJldHVybiBhcnI7XG5cdFx0fSwgW10gYXMgc3RyaW5nW10pXG5cdDtcblxuXHRfZ3JlZWR5VGFibGVDYWNoZVRlc3QgPSBuZXcgUmVnRXhwKGBbJHthcnJheV91bmlxdWUoYXJyKS5qb2luKCcnKX1dYCwgJ3UnKTtcblxuXHRyZXR1cm4ge1xuXHRcdF9ncmVlZHlUYWJsZUNhY2hlUmVnZXhwLFxuXHRcdF9ncmVlZHlUYWJsZUNhY2hlTWFwLFxuXHRcdF9ncmVlZHlUYWJsZUNhY2hlVGVzdCxcblx0fTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdyZWVkeVRhYmxlVGVzdChpbnB1dDogc3RyaW5nKVxue1xuXHRyZXR1cm4gX2dyZWVkeVRhYmxlQ2FjaGVUZXN0LnRlc3QoaW5wdXQpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBncmVlZHlUYWJsZUNoYXJBcnJheShjaGFyOiBzdHJpbmcpXG57XG5cdHJldHVybiBfZ3JlZWR5VGFibGVDYWNoZU1hcC5nZXQoY2hhcilcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdyZWVkeVRhYmxlUmVwbGFjZShpbnB1dDogc3RyaW5nKTogc3RyaW5nXG57XG5cdGlmIChncmVlZHlUYWJsZVRlc3QoaW5wdXQpKVxuXHR7XG5cdFx0cmV0dXJuIF9ncmVlZHlUYWJsZUNhY2hlUmVnZXhwXG5cdFx0XHQucmVkdWNlKGZ1bmN0aW9uIChpbnB1dCwgcilcblx0XHRcdHtcblx0XHRcdFx0cmV0dXJuIGlucHV0LnJlcGxhY2UoclswXSwgclsxXSlcblx0XHRcdH0sIGlucHV0KVxuXHRcdFx0O1xuXHR9XG5cblx0cmV0dXJuIGlucHV0XG59XG5cbmV4cG9ydCBkZWZhdWx0IGV4cG9ydHMgYXMgdHlwZW9mIGltcG9ydCgnLi9ncmVlZHknKTtcbiJdfQ==
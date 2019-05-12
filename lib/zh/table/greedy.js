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
    [/[網䋄䋞綱纲]/ug, '网'],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JlZWR5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ3JlZWR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7R0FFRzs7O0FBRUgsMkNBQWlDO0FBQ2pDLDJEQUFrRDtBQUdyQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXlFWCxpTEFBQztBQUVILHFDQUFxQztBQUVyQyxTQUFnQixpQkFBaUIsQ0FBQyxJQUF3QjtJQU16RCxNQUFNLHVCQUF1QixHQUF1QixJQUFJLENBQUM7SUFFekQsSUFBSSxvQkFBMkMsQ0FBQztJQUNoRCxJQUFJLHFCQUE2QixDQUFDO0lBRWxDLG9CQUFvQixHQUFHLElBQUksR0FBRyxFQUFvQixDQUFDO0lBRW5ELElBQUksR0FBRyxHQUFHLHVCQUF1QjtTQUMvQixNQUFNLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUV2QixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFakQsSUFBSSxDQUFDLEdBQUcsb0JBQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUUxQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBRWIsb0JBQW9CLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUMvQixDQUFDLENBQUMsQ0FBQztRQUVILEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUVmLE9BQU8sR0FBRyxDQUFDO0lBQ1osQ0FBQyxFQUFFLEVBQWMsQ0FBQyxDQUNsQjtJQUVELHFCQUFxQixHQUFHLElBQUksTUFBTSxDQUFDLElBQUksaUNBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUUzRSxPQUFPO1FBQ04sdUJBQXVCO1FBQ3ZCLG9CQUFvQjtRQUNwQixxQkFBcUI7S0FDckIsQ0FBQztBQUNILENBQUM7QUF0Q0QsOENBc0NDO0FBRUQsU0FBZ0IsZUFBZSxDQUFDLEtBQWE7SUFFNUMsT0FBTyw2QkFBcUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7QUFDekMsQ0FBQztBQUhELDBDQUdDO0FBRUQsU0FBZ0Isb0JBQW9CLENBQUMsSUFBWTtJQUVoRCxPQUFPLDRCQUFvQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUN0QyxDQUFDO0FBSEQsb0RBR0M7QUFFRCxTQUFnQixrQkFBa0IsQ0FBQyxLQUFhO0lBRS9DLElBQUksZUFBZSxDQUFDLEtBQUssQ0FBQyxFQUMxQjtRQUNDLE9BQU8sK0JBQXVCO2FBQzVCLE1BQU0sQ0FBQyxVQUFVLEtBQUssRUFBRSxDQUFDO1lBRXpCLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDakMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUNSO0tBQ0Y7SUFFRCxPQUFPLEtBQUssQ0FBQTtBQUNiLENBQUM7QUFiRCxnREFhQztBQUVELGtCQUFlLE9BQW9DLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgdXNlciBvbiAyMDE5LzUvOS5cbiAqL1xuXG5pbXBvcnQgVVN0cmluZyBmcm9tICd1bmktc3RyaW5nJztcbmltcG9ydCB7IGFycmF5X3VuaXF1ZSB9IGZyb20gJ2FycmF5LWh5cGVyLXVuaXF1ZSc7XG5pbXBvcnQgeyBJT3B0aW9ucyB9IGZyb20gJy4vbGlzdCc7XG5cbmV4cG9ydCBjb25zdCB7IF9ncmVlZHlUYWJsZUNhY2hlUmVnZXhwLCBfZ3JlZWR5VGFibGVDYWNoZU1hcCwgX2dyZWVkeVRhYmxlQ2FjaGVUZXN0IH0gPSBfZ3JlZWR5VGFibGVCdWlsZChbXG5cdFsvW+WZgeaCquaDoV0vZywgJ+aBtiddLFxuXHRbL1vnuYvnuavkv4JdL2csICfns7snXSxcblx0Wy9b57OK6ayNXS9nLCAn6IOhJ10sXG5cdFsvW+WEheWZueeVtl0vZywgJ+W9kyddLFxuXHRbL1vlvqnopIfopoZdL2csICflpI0nXSxcblx0Wy9b5ZuM6JiH55SmXS9nLCAn6IuPJ10sXG5cdFsvW+aOoeW9qeedrOi4qeWfsOe2teSMvV0vZywgJ+mHhyddLFxuXHRbL1vlm4nllbDnvoXjkanlhLhdL2csICfnvZcnXSxcblx0Wy9b5rWP54CP5YqJXS9nLCAn5YiYJ10sXG5cdFsvW+WKteWNt+W3u+aNsl0vZywgJ+WIuCddLFxuXHRbL1vliJLlioPnlatdL2csICfnlLsnXSxcblx0Wy9b6ayl6ZeY6ayt6ayqXS9nLCAn5paXJ10sXG5cdFsvW+S5vuS6geS5ueW5uV0vZywgJ+W5siddLFxuXHRbL1vlm7Plm75dL2csICflnJYnXSxcblx0Wy9b5pqm5puG5q205q23XS9nLCAn5Y6GJ10sXG5cdFsvW+m6qum6tem6ul0vZywgJ+mdoiddLFxuXHRbL1voroPorpros5votIrotZ5dL2csICfotZ4nXSxcblx0Wy9b55m86auq6auuXS9nLCAn5Y+RJ10sXG5cdFsvW+S+reWEmOeboV0vZywgJ+WwvSddLFxuXHRbL1vlhKrlv6fmhoJdL2csICflv6cnXSxcblx0Wy9b5L+x5YC2XS9nLCAn5YW3J10sXG5cdFsvW+S5i+eahOW+l10vZywgJ+OBriddLFxuXHRbL1voiIfkuI5dL2csICfjgagnXSxcblx0Wy9b5aW55LuW54mg56WC5L2XXS9nLCAn5a6DJ10sXG5cdFsvW+aUr+mau+aenV0vZywgJ+WPqiddLFxuXHRbL1vngq7noLLngrBdL2csICfms6EnXSxcblx0Wy9b5LuyXS9nLCAn5LitJ10sXG5cdFsvW+WOn10vZywgJ+WFgyddLFxuXHRbL1vov7Tlu7tdL2csICflm54nXSxcblx0Wy9b5Lm+5LqB5Lm55bm5XS9nLCAn5bmyJ10sXG5cdFsvW+mBv+mXol0vZywgJ+i+nyddLFxuXHRbL1vmu7fpubXljaTpsoFdL2csICfpra8nXSxcblx0Wy9b5qqv6Ie66aKx5YSTXS9nLCAn5Y+wJ10sXG5cdFsvW+Wuu+elleenmF0vZywgJ+WvhiddLFxuXHRbL1vorI7osJxdL2csICfov7cnXSxcblx0Wy9b56CC6I6OXS9nLCAn5rKZJ10sXG5cdFsvW+e3qOevh+e8ll0vZywgJ+evhyddLFxuXHRbL1vlhrZdL2csICfmsrsnXSxcblx0Wy9b54K854WJ6Yys6Y2K8KuUgOe3tOe7g10vdWcsICfnt7QnXSxcblx0Wy9b5Lqe5Lqa5amt5aiFXS91ZywgJ+S6middLFxuXHRbL1vloZ7os71dL3VnLCAn6LWbJ10sXG5cdFsvW+iFvumosOexkOexmF0vdWcsICfol6QnXSxcblx0Wy9b5aaz56Wi56awXS91ZywgJ+S9oCddLFxuXHRbL1vllrDpo6Diu57po6ddL3VnLCAn6aOfJ10sXG5cdFsvW+eRqummrOeOm+mprF0vdWcsICfpqawnXSxcblx0Wy9b6aS46aSaXS91ZywgJ+mkmiddLFxuXHRbL1voo7hdL3VnLCAn5p6cJ10sXG5cdFsvW+WHseWHr+mOp+mToF0vdWcsICflh7EnXSxcblx0Wy9b5biW6LS0XS91ZywgJ+iyvCddLFxuXHRbL1vku4DnlJpdL3VnLCAn5LuAJ10sXG5cdFsvW+iBr+iBlOmAo+i/nl0vdWcsICfpgKMnXSxcblx0Wy9b5YOPXS91ZywgJ+ixoSddLFxuXHRbL1vol4ldL3VnLCAn5YCfJ10sXG5cdFsvW+iVvl0vdWcsICfpm7cnXSxcblx0Wy9b6KiC6K6iXS91ZywgJ+WumiddLFxuXHRbL1vlmq5dL3VnLCAn5ZCRJ10sXG5cdFsvW+ezuOezueS4nV0vdWcsICfntbInXSxcblx0Wy9b562SXS91ZywgJ+ahtiddLFxuXHRbL1vlhbnnjobmu4tdL3VnLCAn6IyyJ10sXG5cdFsvW+WRkOiopeiut10vdWcsICflkLYnXSxcblx0Wy9b56mA57OTXS91ZywgJ+iwtyddLFxuXHRbL1vkuKTlhanlgIbkv6ldL3VnLCAn5LihJ10sXG5cdFsvW+W4s+izrOi0pl0vdWcsICfluJAnXSxcblx0Wy9b54mI6ZeGXS91ZywgJ+advyddLFxuXHRbL1vlvoVdL3VnLCAn5ZGGJ10sXG5cdFsvW+eGlOmOlOmVleiejeiejl0vdWcsICfmurYnXSxcblx0Wy9b5Yyv5rGHXS91ZywgJ+W9mSddLFxuXHRbL1vlvb/ku49dL3VnLCAn5L2bJ10sXG5cdFsvW+mYv10vdWcsICfllYonXSxcblx0Wy9b5a62XS91ZywgJ+WCoiddLFxuXHRbL1vniIZdL3VnLCAn5pq0J10sXG5cdFsvW+e2suSLhOSLnue2see6sl0vdWcsICfnvZEnXSxcbl0pO1xuXG4vL2NvbnNvbGUubG9nKF9ncmVlZHlUYWJsZUNhY2hlVGVzdCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBfZ3JlZWR5VGFibGVCdWlsZChkYXRhOiBbUmVnRXhwLCBzdHJpbmddW10pOiB7XG5cdF9ncmVlZHlUYWJsZUNhY2hlUmVnZXhwOiByZWFkb25seSAocmVhZG9ubHkgW1JlZ0V4cCwgc3RyaW5nXSlbXTtcblx0X2dyZWVkeVRhYmxlQ2FjaGVNYXA6IE1hcDxzdHJpbmcsIHJlYWRvbmx5IHN0cmluZ1tdPjtcblx0X2dyZWVkeVRhYmxlQ2FjaGVUZXN0OiBSZWdFeHA7XG59XG57XG5cdGNvbnN0IF9ncmVlZHlUYWJsZUNhY2hlUmVnZXhwOiBbUmVnRXhwLCBzdHJpbmddW10gPSBkYXRhO1xuXG5cdGxldCBfZ3JlZWR5VGFibGVDYWNoZU1hcDogTWFwPHN0cmluZywgc3RyaW5nW10+O1xuXHRsZXQgX2dyZWVkeVRhYmxlQ2FjaGVUZXN0OiBSZWdFeHA7XG5cblx0X2dyZWVkeVRhYmxlQ2FjaGVNYXAgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nW10+KCk7XG5cblx0bGV0IGFyciA9IF9ncmVlZHlUYWJsZUNhY2hlUmVnZXhwXG5cdFx0LnJlZHVjZShmdW5jdGlvbiAoYXJyLCByKVxuXHRcdHtcblx0XHRcdGxldCBzID0gclswXS5zb3VyY2UucmVwbGFjZSgvXi4qXFxbfFxcXS4qJC91ZywgJycpO1xuXG5cdFx0XHRsZXQgYSA9IFVTdHJpbmcuc3BsaXQocywgJycpLmNvbmNhdChyWzFdKTtcblxuXHRcdFx0YS5mb3JFYWNoKGMgPT5cblx0XHRcdHtcblx0XHRcdFx0X2dyZWVkeVRhYmxlQ2FjaGVNYXAuc2V0KGMsIGEpXG5cdFx0XHR9KTtcblxuXHRcdFx0YXJyLnB1c2goLi4uYSk7XG5cblx0XHRcdHJldHVybiBhcnI7XG5cdFx0fSwgW10gYXMgc3RyaW5nW10pXG5cdDtcblxuXHRfZ3JlZWR5VGFibGVDYWNoZVRlc3QgPSBuZXcgUmVnRXhwKGBbJHthcnJheV91bmlxdWUoYXJyKS5qb2luKCcnKX1dYCwgJ3UnKTtcblxuXHRyZXR1cm4ge1xuXHRcdF9ncmVlZHlUYWJsZUNhY2hlUmVnZXhwLFxuXHRcdF9ncmVlZHlUYWJsZUNhY2hlTWFwLFxuXHRcdF9ncmVlZHlUYWJsZUNhY2hlVGVzdCxcblx0fTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdyZWVkeVRhYmxlVGVzdChpbnB1dDogc3RyaW5nKVxue1xuXHRyZXR1cm4gX2dyZWVkeVRhYmxlQ2FjaGVUZXN0LnRlc3QoaW5wdXQpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBncmVlZHlUYWJsZUNoYXJBcnJheShjaGFyOiBzdHJpbmcpXG57XG5cdHJldHVybiBfZ3JlZWR5VGFibGVDYWNoZU1hcC5nZXQoY2hhcilcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdyZWVkeVRhYmxlUmVwbGFjZShpbnB1dDogc3RyaW5nKTogc3RyaW5nXG57XG5cdGlmIChncmVlZHlUYWJsZVRlc3QoaW5wdXQpKVxuXHR7XG5cdFx0cmV0dXJuIF9ncmVlZHlUYWJsZUNhY2hlUmVnZXhwXG5cdFx0XHQucmVkdWNlKGZ1bmN0aW9uIChpbnB1dCwgcilcblx0XHRcdHtcblx0XHRcdFx0cmV0dXJuIGlucHV0LnJlcGxhY2UoclswXSwgclsxXSlcblx0XHRcdH0sIGlucHV0KVxuXHRcdFx0O1xuXHR9XG5cblx0cmV0dXJuIGlucHV0XG59XG5cbmV4cG9ydCBkZWZhdWx0IGV4cG9ydHMgYXMgdHlwZW9mIGltcG9ydCgnLi9ncmVlZHknKTtcbiJdfQ==
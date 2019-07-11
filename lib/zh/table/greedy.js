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
    [/[糊鬍葫衚楜]/g, '胡'],
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
    [/[砂莎紗纱]/g, '沙'],
    [/[編篇编]/g, '篇'],
    [/[冶]/g, '治'],
    [/[炼煉錬鍊𫔀練练]/ug, '練'],
    [/[亞亚婭娅椏桠亜]/ug, '亚'],
    [/[塞賽]/ug, '赛'],
    [/[腾騰籐籘]/ug, '藤'],
    [/[妳祢禰]/ug, '你'],
    [/[喰飠⻞飧]/ug, '食'],
    [/[瑪馬玛马]/ug, '马'],
    [/[餸餚]/ug, '餚'],
    [/[裸]/ug, '果'],
    [/[凱凯鎧铠]/ug, '凱'],
    [/[帖贴]/ug, '貼'],
    [/[甚]/ug, '什'],
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
    [/[註]/ug, '注'],
    [/[灌贯潅]/ug, '貫'],
    [/[倒]/ug, '到'],
    [/[秤]/ug, '平'],
    [/[勛勲勳]/ug, '勋'],
    [/[麗丽莉]/ug, '利'],
    [/[已巳]/ug, '己'],
    [/[嗬]/ug, '呵'],
    [/[哊哟唷唹喲]/ug, '呦'],
    [/[杰潔洁]/ug, '傑'],
    [/[嘻]/ug, '嬉'],
    [/[痲痳麻]/ug, '嘛'],
    [/[狗]/ug, '犬'],
    [/[彿拂]/ug, '佛'],
    [/[亙恆恒]/ug, '亘'],
    [/[附副]/ug, '付'],
    [/[伽枷珈迦]/ug, '加'],
    [/[褔]/ug, '福'],
    [/[捱]/ug, '挨'],
    [/[拼]/ug, '拚'],
    [/[飄飘飃]/ug, '漂'],
    [/[佔沾]/ug, '占'],
    [/[気氣汽滊炁]/ug, '气'],
    [/[撩遼]/ug, '辽'],
    [/[做]/ug, '作'],
    [/[搜捜]/ug, '蒐'],
    [/[叟傁]/ug, '叟'],
    [/[謝谢]/ug, '榭'],
    [/[形]/ug, '型'],
    [/[雇頋顧顾]/ug, '僱'],
    [/[廬芦蘆]/ug, '庐'],
    [/[耽躭]/ug, '眈'],
    [/[傹竟競竸誩𥪰𧡟𧫘𧫙𧮣𨐼]/ug, '竞'],
    [/[殖]/ug, '植'],
    [/[佬姥]/ug, '老'],
    [/[倖]/ug, '幸'],
    [/[㠪炬矩鉅]/ug, '巨'],
    [/[鏈链炼錬鍊𫔀䃛𧹯練练連连]/ug, '煉'],
    [/[刴剁剐剮劏]/ug, '㓥'],
    [/[枏楠]/ug, '南'],
    [/[璐𡽘𨱴]/ug, '路'],
    [/[侂拓杔託讬]/ug, '托'],
    [/[悕睎稀]/ug, '希'],
    [/[帼幗国國]/ug, '囯'],
    [/[返]/ug, '反'],
    [/[陽阳]/ug, '佯'],
    [/[来莱萊]/ug, '來'],
    [/[葆堡褓緥]/ug, '保'],
    [/[渡]/ug, '度'],
    [/[剳札箚紮]/ug, '扎'],
]), exports._greedyTableCacheRegexp = _a._greedyTableCacheRegexp, exports._greedyTableCacheMap = _a._greedyTableCacheMap, exports._greedyTableCacheTest = _a._greedyTableCacheTest;
//console.log(_greedyTableCacheTest);
function _greedyTableBuild(data) {
    const _greedyTableCacheRegexp = data;
    let _greedyTableCacheMap;
    let _greedyTableCacheTest;
    _greedyTableCacheMap = new Map();
    let arr = _greedyTableCacheRegexp
        .reduce(function (arr, r) {
        let s = r[0].source
            .replace(/^.*\[|\].*$/ug, '');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JlZWR5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ3JlZWR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7R0FFRzs7O0FBRUgsMkNBQWlDO0FBQ2pDLDJEQUFrRDtBQUdyQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBMkhYLGlMQUFDO0FBRUgscUNBQXFDO0FBRXJDLFNBQWdCLGlCQUFpQixDQUFDLElBQXdCO0lBTXpELE1BQU0sdUJBQXVCLEdBQXVCLElBQUksQ0FBQztJQUV6RCxJQUFJLG9CQUEyQyxDQUFDO0lBQ2hELElBQUkscUJBQTZCLENBQUM7SUFFbEMsb0JBQW9CLEdBQUcsSUFBSSxHQUFHLEVBQW9CLENBQUM7SUFFbkQsSUFBSSxHQUFHLEdBQUcsdUJBQXVCO1NBQy9CLE1BQU0sQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBRXZCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNO2FBQ2pCLE9BQU8sQ0FBQyxlQUFlLEVBQUUsRUFBRSxDQUFDLENBQzdCO1FBRUQsSUFBSSxDQUFDLEdBQUcsb0JBQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUUxQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBRWIsb0JBQW9CLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUMvQixDQUFDLENBQUMsQ0FBQztRQUVILEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUVmLE9BQU8sR0FBRyxDQUFDO0lBQ1osQ0FBQyxFQUFFLEVBQWMsQ0FBQyxDQUNsQjtJQUVELHFCQUFxQixHQUFHLElBQUksTUFBTSxDQUFDLElBQUksaUNBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUUzRSxPQUFPO1FBQ04sdUJBQXVCO1FBQ3ZCLG9CQUFvQjtRQUNwQixxQkFBcUI7S0FDckIsQ0FBQztBQUNILENBQUM7QUF4Q0QsOENBd0NDO0FBRUQsU0FBZ0IsZUFBZSxDQUFDLEtBQWE7SUFFNUMsT0FBTyw2QkFBcUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7QUFDekMsQ0FBQztBQUhELDBDQUdDO0FBRUQsU0FBZ0Isb0JBQW9CLENBQUMsSUFBWTtJQUVoRCxPQUFPLDRCQUFvQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUN0QyxDQUFDO0FBSEQsb0RBR0M7QUFFRCxTQUFnQixrQkFBa0IsQ0FBQyxLQUFhO0lBRS9DLElBQUksZUFBZSxDQUFDLEtBQUssQ0FBQyxFQUMxQjtRQUNDLE9BQU8sK0JBQXVCO2FBQzVCLE1BQU0sQ0FBQyxVQUFVLEtBQUssRUFBRSxDQUFDO1lBRXpCLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDakMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUNSO0tBQ0Y7SUFFRCxPQUFPLEtBQUssQ0FBQTtBQUNiLENBQUM7QUFiRCxnREFhQztBQUVELGtCQUFlLE9BQW9DLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgdXNlciBvbiAyMDE5LzUvOS5cbiAqL1xuXG5pbXBvcnQgVVN0cmluZyBmcm9tICd1bmktc3RyaW5nJztcbmltcG9ydCB7IGFycmF5X3VuaXF1ZSB9IGZyb20gJ2FycmF5LWh5cGVyLXVuaXF1ZSc7XG5pbXBvcnQgeyBJT3B0aW9ucyB9IGZyb20gJy4vbGlzdCc7XG5cbmV4cG9ydCBjb25zdCB7IF9ncmVlZHlUYWJsZUNhY2hlUmVnZXhwLCBfZ3JlZWR5VGFibGVDYWNoZU1hcCwgX2dyZWVkeVRhYmxlQ2FjaGVUZXN0IH0gPSBfZ3JlZWR5VGFibGVCdWlsZChbXG5cdFsvW+WZgeaCquaDoV0vZywgJ+aBtiddLFxuXHRbL1vnuYvnuavkv4JdL2csICfns7snXSxcblx0Wy9b57OK6ayN6JGr6KGa5qWcXS9nLCAn6IOhJ10sXG5cdFsvW+WEheWZueeVtl0vZywgJ+W9kyddLFxuXHRbL1vlvqnopIfopoZdL2csICflpI0nXSxcblx0Wy9b5ZuM6JiH55SmXS9nLCAn6IuPJ10sXG5cdFsvW+aOoeW9qeedrOi4qeWfsOe2teSMvV0vZywgJ+mHhyddLFxuXHRbL1vlm4nllbDnvoXjkanlhLhdL2csICfnvZcnXSxcblx0Wy9b5rWP54CP5YqJXS9nLCAn5YiYJ10sXG5cdFsvW+WKteWNt+W3u+aNsl0vZywgJ+WIuCddLFxuXHRbL1vliJLlioPnlatdL2csICfnlLsnXSxcblx0Wy9b6ayl6ZeY6ayt6ayqXS9nLCAn5paXJ10sXG5cdFsvW+S5vuS6geS5ueW5uV0vZywgJ+W5siddLFxuXHRbL1vlm7Plm75dL2csICflnJYnXSxcblx0Wy9b5pqm5puG5q205q23XS9nLCAn5Y6GJ10sXG5cdFsvW+m6qum6tem6ul0vZywgJ+mdoiddLFxuXHRbL1voroPorpros5votIrotZ5dL2csICfotZ4nXSxcblx0Wy9b55m86auq6auuXS9nLCAn5Y+RJ10sXG5cdFsvW+S+reWEmOeboV0vZywgJ+WwvSddLFxuXHRbL1vlhKrlv6fmhoJdL2csICflv6cnXSxcblx0Wy9b5L+x5YC2XS9nLCAn5YW3J10sXG5cdFsvW+S5i+eahOW+l10vZywgJ+OBriddLFxuXHRbL1voiIfkuI5dL2csICfjgagnXSxcblx0Wy9b5aW55LuW54mg56WC5L2XXS9nLCAn5a6DJ10sXG5cdFsvW+aUr+mau+aenV0vZywgJ+WPqiddLFxuXHRbL1vngq7noLLngrBdL2csICfms6EnXSxcblx0Wy9b5LuyXS9nLCAn5LitJ10sXG5cdFsvW+WOn10vZywgJ+WFgyddLFxuXHRbL1vov7Tlu7tdL2csICflm54nXSxcblx0Wy9b5Lm+5LqB5Lm55bm5XS9nLCAn5bmyJ10sXG5cdFsvW+mBv+mXol0vZywgJ+i+nyddLFxuXHRbL1vmu7fpubXljaTpsoFdL2csICfpra8nXSxcblx0Wy9b5qqv6Ie66aKx5YSTXS9nLCAn5Y+wJ10sXG5cdFsvW+Wuu+elleenmF0vZywgJ+WvhiddLFxuXHRbL1vorI7osJxdL2csICfov7cnXSxcblx0Wy9b56CC6I6O57SX57qxXS9nLCAn5rKZJ10sXG5cdFsvW+e3qOevh+e8ll0vZywgJ+evhyddLFxuXHRbL1vlhrZdL2csICfmsrsnXSxcblx0Wy9b54K854WJ6Yys6Y2K8KuUgOe3tOe7g10vdWcsICfnt7QnXSxcblx0Wy9b5Lqe5Lqa5amt5aiF5qSP5qGg5LqcXS91ZywgJ+S6middLFxuXHRbL1vloZ7os71dL3VnLCAn6LWbJ10sXG5cdFsvW+iFvumosOexkOexmF0vdWcsICfol6QnXSxcblx0Wy9b5aaz56Wi56awXS91ZywgJ+S9oCddLFxuXHRbL1vllrDpo6Diu57po6ddL3VnLCAn6aOfJ10sXG5cdFsvW+eRqummrOeOm+mprF0vdWcsICfpqawnXSxcblx0Wy9b6aS46aSaXS91ZywgJ+mkmiddLFxuXHRbL1voo7hdL3VnLCAn5p6cJ10sXG5cdFsvW+WHseWHr+mOp+mToF0vdWcsICflh7EnXSxcblx0Wy9b5biW6LS0XS91ZywgJ+iyvCddLFxuXHRbL1vnlJpdL3VnLCAn5LuAJ10sXG5cdFsvW+iBr+iBlOmAo+i/nl0vdWcsICfpgKMnXSxcblx0Wy9b5YOPXS91ZywgJ+ixoSddLFxuXHRbL1vol4ldL3VnLCAn5YCfJ10sXG5cdFsvW+iVvl0vdWcsICfpm7cnXSxcblx0Wy9b6KiC6K6iXS91ZywgJ+WumiddLFxuXHRbL1vlmq5dL3VnLCAn5ZCRJ10sXG5cdFsvW+ezuOezueS4nV0vdWcsICfntbInXSxcblx0Wy9b562SXS91ZywgJ+ahtiddLFxuXHRbL1vlhbnnjobmu4tdL3VnLCAn6IyyJ10sXG5cdFsvW+WRkOiopeiut10vdWcsICflkLYnXSxcblx0Wy9b56mA57OTXS91ZywgJ+iwtyddLFxuXHRbL1vkuKTlhanlgIbkv6ldL3VnLCAn5LihJ10sXG5cdFsvW+W4s+izrOi0pl0vdWcsICfluJAnXSxcblx0Wy9b54mI6ZeGXS91ZywgJ+advyddLFxuXHRbL1vlvoVdL3VnLCAn5ZGGJ10sXG5cdFsvW+eGlOmOlOmVleiejeiejl0vdWcsICfmurYnXSxcblx0Wy9b5Yyv5rGHXS91ZywgJ+W9mSddLFxuXHRbL1vlvb/ku49dL3VnLCAn5L2bJ10sXG5cdFsvW+mYv10vdWcsICfllYonXSxcblx0Wy9b5a62XS91ZywgJ+WCoiddLFxuXHRbL1vniIZdL3VnLCAn5pq0J10sXG5cdFsvW+e2suSLhOSLnue2see6sl0vdWcsICfnvZEnXSxcblx0Wy9b6Ki7XS91ZywgJ+azqCddLFxuXHRbL1vngYzotK/mvYVdL3VnLCAn6LKrJ10sXG5cdFsvW+WAkl0vdWcsICfliLAnXSxcblx0Wy9b56ekXS91ZywgJ+W5syddLFxuXHRbL1vli5vli7Lli7NdL3VnLCAn5YuLJ10sXG5cdFsvW+m6l+S4veiOiV0vdWcsICfliKknXSxcblx0Wy9b5bey5bezXS91ZywgJ+W3sSddLFxuXHRbL1vll6xdL3VnLCAn5ZG1J10sXG5cdFsvW+WTiuWTn+WUt+WUueWWsl0vdWcsICflkaYnXSxcblx0Wy9b5p2w5r2U5rSBXS91ZywgJ+WCkSddLFxuXHRbL1vlmLtdL3VnLCAn5ayJJ10sXG5cdFsvW+eXsueXs+m6u10vdWcsICflmJsnXSxcblx0Wy9b54uXXS91ZywgJ+eKrCddLFxuXHRbL1vlvb/mi4JdL3VnLCAn5L2bJ10sXG5cdFsvW+S6meaBhuaBkl0vdWcsICfkupgnXSxcblx0Wy9b6ZmE5YmvXS91ZywgJ+S7mCddLFxuXHRbL1vkvL3mnrfnj4jov6ZdL3VnLCAn5YqgJ10sXG5cdFsvW+iklF0vdWcsICfnpo8nXSxcblx0Wy9b5o2xXS91ZywgJ+aMqCddLFxuXHRbL1vmi7xdL3VnLCAn5ouaJ10sXG5cdFsvW+mjhOmjmOmjg10vdWcsICfmvIInXSxcblx0Wy9b5L2U5rK+XS91ZywgJ+WNoCddLFxuXHRbL1vmsJfmsKPmsb3mu4rngoFdL3VnLCAn5rCUJ10sXG5cdFsvW+aSqemBvF0vdWcsICfovr0nXSxcblx0Wy9b5YGaXS91ZywgJ+S9nCddLFxuXHRbL1vmkJzmjZxdL3VnLCAn6JKQJ10sXG5cdFsvW+WPn+WCgV0vdWcsICflj58nXSxcblx0Wy9b6Kyd6LCiXS91ZywgJ+amrSddLFxuXHRbL1vlvaJdL3VnLCAn5Z6LJ10sXG5cdFsvW+mbh+mgi+mhp+mhvl0vdWcsICflg7EnXSxcblx0Wy9b5bus6Iqm6JiGXS91ZywgJ+W6kCddLFxuXHRbL1vogL3ouq1dL3VnLCAn55yIJ10sXG5cdFsvW+WCueern+ertueruOiqqfClqrDwp6Gf8KermPCnq5nwp66j8KiQvF0vdWcsICfnq54nXSxcblx0Wy9b5q6WXS91ZywgJ+akjSddLFxuXHRbL1vkvazlp6VdL3VnLCAn6ICBJ10sXG5cdFsvW+WAll0vdWcsICflubgnXSxcblx0Wy9b46Cq54Ks55+p6YmFXS91ZywgJ+W3qCddLFxuXHRbL1vpj4jpk77ngrzpjKzpjYrwq5SA5IOb8Ke5r+e3tOe7g+mAo+i/nl0vdWcsICfnhYknXSxcblx0Wy9b5Yi05YmB5YmQ5Ymu5YqPXS91ZywgJ+OTpSddLFxuXHRbL1vmno/mpaBdL3VnLCAn5Y2XJ10sXG5cdFsvW+eSkPChvZjwqLG0XS91ZywgJ+i3ryddLFxuXHRbL1vkvoLmi5PmnZToqJforqxdL3VnLCAn5omYJ10sXG5cdFsvW+aCleedjueogF0vdWcsICfluIwnXSxcblx0Wy9b5bi85bmX5Zu95ZyLXS91ZywgJ+WbryddLFxuXHRbL1vov5RdL3VnLCAn5Y+NJ10sXG5cdFsvW+mZvemYs10vdWcsICfkva8nXSxcblx0Wy9b5p2l6I6x6JCKXS91ZywgJ+S+hiddLFxuXHRbL1vokYbloKHopJPnt6VdL3VnLCAn5L+dJ10sXG5cdFsvW+a4oV0vdWcsICfluqYnXSxcblx0Wy9b5Ymz5pyt566a57SuXS91ZywgJ+aJjiddLFxuXSk7XG5cbi8vY29uc29sZS5sb2coX2dyZWVkeVRhYmxlQ2FjaGVUZXN0KTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9ncmVlZHlUYWJsZUJ1aWxkKGRhdGE6IFtSZWdFeHAsIHN0cmluZ11bXSk6IHtcblx0X2dyZWVkeVRhYmxlQ2FjaGVSZWdleHA6IHJlYWRvbmx5IChyZWFkb25seSBbUmVnRXhwLCBzdHJpbmddKVtdO1xuXHRfZ3JlZWR5VGFibGVDYWNoZU1hcDogTWFwPHN0cmluZywgcmVhZG9ubHkgc3RyaW5nW10+O1xuXHRfZ3JlZWR5VGFibGVDYWNoZVRlc3Q6IFJlZ0V4cDtcbn1cbntcblx0Y29uc3QgX2dyZWVkeVRhYmxlQ2FjaGVSZWdleHA6IFtSZWdFeHAsIHN0cmluZ11bXSA9IGRhdGE7XG5cblx0bGV0IF9ncmVlZHlUYWJsZUNhY2hlTWFwOiBNYXA8c3RyaW5nLCBzdHJpbmdbXT47XG5cdGxldCBfZ3JlZWR5VGFibGVDYWNoZVRlc3Q6IFJlZ0V4cDtcblxuXHRfZ3JlZWR5VGFibGVDYWNoZU1hcCA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmdbXT4oKTtcblxuXHRsZXQgYXJyID0gX2dyZWVkeVRhYmxlQ2FjaGVSZWdleHBcblx0XHQucmVkdWNlKGZ1bmN0aW9uIChhcnIsIHIpXG5cdFx0e1xuXHRcdFx0bGV0IHMgPSByWzBdLnNvdXJjZVxuXHRcdFx0XHQucmVwbGFjZSgvXi4qXFxbfFxcXS4qJC91ZywgJycpXG5cdFx0XHQ7XG5cblx0XHRcdGxldCBhID0gVVN0cmluZy5zcGxpdChzLCAnJykuY29uY2F0KHJbMV0pO1xuXG5cdFx0XHRhLmZvckVhY2goYyA9PlxuXHRcdFx0e1xuXHRcdFx0XHRfZ3JlZWR5VGFibGVDYWNoZU1hcC5zZXQoYywgYSlcblx0XHRcdH0pO1xuXG5cdFx0XHRhcnIucHVzaCguLi5hKTtcblxuXHRcdFx0cmV0dXJuIGFycjtcblx0XHR9LCBbXSBhcyBzdHJpbmdbXSlcblx0O1xuXG5cdF9ncmVlZHlUYWJsZUNhY2hlVGVzdCA9IG5ldyBSZWdFeHAoYFske2FycmF5X3VuaXF1ZShhcnIpLmpvaW4oJycpfV1gLCAndScpO1xuXG5cdHJldHVybiB7XG5cdFx0X2dyZWVkeVRhYmxlQ2FjaGVSZWdleHAsXG5cdFx0X2dyZWVkeVRhYmxlQ2FjaGVNYXAsXG5cdFx0X2dyZWVkeVRhYmxlQ2FjaGVUZXN0LFxuXHR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ3JlZWR5VGFibGVUZXN0KGlucHV0OiBzdHJpbmcpXG57XG5cdHJldHVybiBfZ3JlZWR5VGFibGVDYWNoZVRlc3QudGVzdChpbnB1dClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdyZWVkeVRhYmxlQ2hhckFycmF5KGNoYXI6IHN0cmluZylcbntcblx0cmV0dXJuIF9ncmVlZHlUYWJsZUNhY2hlTWFwLmdldChjaGFyKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ3JlZWR5VGFibGVSZXBsYWNlKGlucHV0OiBzdHJpbmcpOiBzdHJpbmdcbntcblx0aWYgKGdyZWVkeVRhYmxlVGVzdChpbnB1dCkpXG5cdHtcblx0XHRyZXR1cm4gX2dyZWVkeVRhYmxlQ2FjaGVSZWdleHBcblx0XHRcdC5yZWR1Y2UoZnVuY3Rpb24gKGlucHV0LCByKVxuXHRcdFx0e1xuXHRcdFx0XHRyZXR1cm4gaW5wdXQucmVwbGFjZShyWzBdLCByWzFdKVxuXHRcdFx0fSwgaW5wdXQpXG5cdFx0XHQ7XG5cdH1cblxuXHRyZXR1cm4gaW5wdXRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZXhwb3J0cyBhcyB0eXBlb2YgaW1wb3J0KCcuL2dyZWVkeScpO1xuIl19
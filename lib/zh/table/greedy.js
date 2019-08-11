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
    [/[仲㊥]/g, '中'],
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
    [/[訂订釘钉]/ug, '定'],
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
    [/[儭秤称稱衬襯]/ug, '平'],
    [/[勛勲勳]/ug, '勋'],
    [/[麗丽莉]/ug, '利'],
    [/[已巳]/ug, '己'],
    [/[嗬]/ug, '呵'],
    [/[哊哟唷唹喲]/ug, '呦'],
    [/[婕杰洁潔絜]/ug, '傑'],
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
    [/[侂拓杔託讬拖拕]/ug, '托'],
    [/[悕睎稀]/ug, '希'],
    [/[帼幗国國]/ug, '囯'],
    [/[返]/ug, '反'],
    [/[陽阳]/ug, '佯'],
    [/[来莱萊]/ug, '來'],
    [/[葆堡褓緥]/ug, '保'],
    [/[渡]/ug, '度'],
    [/[剳札箚紮]/ug, '扎'],
    [/[媞提湜禔緹缇隄]/ug, '堤'],
    [/[臘蜡蠟]/ug, '腊'],
    [/[鬱𨚼𨟝]/ug, '郁'],
    [/[擀杆桿]/ug, '扞'],
    [/[脼郞𥇑]/ug, '郎'],
    [/[芭]/ug, '巴'],
    [/[涅湼]/ug, '捏'],
    [/[择擇沢泽澤]/ug, '択'],
    [/[幵開]/ug, '开'],
    [/[珮]/ug, '佩'],
    [/[喩籲龥吁]/ug, '喻'],
    [/[值]/ug, '値'],
    [/[臓臟贓赃髒]/ug, '脏'],
    [/[㊤]/ug, '上'],
    [/[㊦]/ug, '下'],
    [/[唿]/ug, '呼'],
    [/[詳详]/ug, '祥'],
    [/[妮泥]/ug, '尼'],
    [/[剋尅]/ug, '克'],
    [/[撥播]/ug, '拨'],
    [/[挿揷]/ug, '插'],
    [/[汀]/ug, '丁'],
    [/[那]/ug, '娜'],
    [/[菈]/ug, '拉'],
    [/[玲琳鈴铃淋]/ug, '林'],
    [/[銘铭]/ug, '名'],
    [/[齣]/ug, '出'],
    [/[欸誒诶]/ug, '唉'],
    [/[哞]/ug, '呣'],
    [/[㖿吔]/ug, '耶'],
    [/[魅]/ug, '媚'],
    [/[菲非]/ug, '斐'],
    [/[衩釵钗]/ug, '叉'],
    [/[淇琪祺]/ug, '其'],
    [/[壇談譚谈谭]/ug, '坛'],
    [/[材柴]/ug, '才'],
    [/[唸]/ug, '念'],
    [/[趾]/ug, '指'],
    [/[仕]/ug, '士'],
    [/[嬢孃]/ug, '娘'],
    [/[哑唖瘂痖]/ug, '啞'],
    [/[动働仂]/ug, '動'],
    [/[查査]/ug, '察'],
    [/[鉄銕鐡鐵铁𨫓]/ug, '鉃'],
    [/[归歸皈]/ug, '帰'],
    [/[瘡疮創]/ug, '创'],
    [/[拷烤]/ug, '考'],
    [/[込]/ug, '入'],
    [/[伦侖倫]/ug, '仑'],
    [/[仔]/ug, '子'],
    [/[彎湾灣]/ug, '弯'],
    [/[荧萤蛍螢]/ug, '熒'],
    [/[挣掙爭]/ug, '争'],
    [/[漲胀脹]/ug, '涨'],
    [/[無冇沒没]/ug, '无'],
    [/[噸訰]/ug, '吨'],
    [/[鈎鉤钩]/ug, '勾'],
    [/[沉]/ug, '沈'],
    [/[畳疊迭]/ug, '叠'],
    [/[繮缰韁僵]/ug, '殭'],
    [/[背]/ug, '揹'],
    [/[団團糰]/ug, '团'],
    [/[榚]/ug, '糕'],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JlZWR5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ3JlZWR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7R0FFRzs7O0FBRUgsMkNBQWlDO0FBQ2pDLDJEQUFrRDtBQUdyQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBNExYLGlMQUFDO0FBRUgscUNBQXFDO0FBRXJDLFNBQWdCLGlCQUFpQixDQUFDLElBQXdCO0lBTXpELE1BQU0sdUJBQXVCLEdBQXVCLElBQUksQ0FBQztJQUV6RCxJQUFJLG9CQUEyQyxDQUFDO0lBQ2hELElBQUkscUJBQTZCLENBQUM7SUFFbEMsb0JBQW9CLEdBQUcsSUFBSSxHQUFHLEVBQW9CLENBQUM7SUFFbkQsSUFBSSxHQUFHLEdBQUcsdUJBQXVCO1NBQy9CLE1BQU0sQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBRXZCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNO2FBQ2pCLE9BQU8sQ0FBQyxlQUFlLEVBQUUsRUFBRSxDQUFDLENBQzdCO1FBRUQsSUFBSSxDQUFDLEdBQUcsb0JBQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUUxQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBRWIsb0JBQW9CLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUMvQixDQUFDLENBQUMsQ0FBQztRQUVILEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUVmLE9BQU8sR0FBRyxDQUFDO0lBQ1osQ0FBQyxFQUFFLEVBQWMsQ0FBQyxDQUNsQjtJQUVELHFCQUFxQixHQUFHLElBQUksTUFBTSxDQUFDLElBQUksaUNBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUUzRSxPQUFPO1FBQ04sdUJBQXVCO1FBQ3ZCLG9CQUFvQjtRQUNwQixxQkFBcUI7S0FDckIsQ0FBQztBQUNILENBQUM7QUF4Q0QsOENBd0NDO0FBRUQsU0FBZ0IsZUFBZSxDQUFDLEtBQWE7SUFFNUMsT0FBTyw2QkFBcUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7QUFDekMsQ0FBQztBQUhELDBDQUdDO0FBRUQsU0FBZ0Isb0JBQW9CLENBQUMsSUFBWTtJQUVoRCxPQUFPLDRCQUFvQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUN0QyxDQUFDO0FBSEQsb0RBR0M7QUFFRCxTQUFnQixrQkFBa0IsQ0FBQyxLQUFhO0lBRS9DLElBQUksZUFBZSxDQUFDLEtBQUssQ0FBQyxFQUMxQjtRQUNDLE9BQU8sK0JBQXVCO2FBQzVCLE1BQU0sQ0FBQyxVQUFVLEtBQUssRUFBRSxDQUFDO1lBRXpCLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDakMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUNSO0tBQ0Y7SUFFRCxPQUFPLEtBQUssQ0FBQTtBQUNiLENBQUM7QUFiRCxnREFhQztBQUVELGtCQUFlLE9BQW9DLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgdXNlciBvbiAyMDE5LzUvOS5cbiAqL1xuXG5pbXBvcnQgVVN0cmluZyBmcm9tICd1bmktc3RyaW5nJztcbmltcG9ydCB7IGFycmF5X3VuaXF1ZSB9IGZyb20gJ2FycmF5LWh5cGVyLXVuaXF1ZSc7XG5pbXBvcnQgeyBJT3B0aW9ucyB9IGZyb20gJy4vbGlzdCc7XG5cbmV4cG9ydCBjb25zdCB7IF9ncmVlZHlUYWJsZUNhY2hlUmVnZXhwLCBfZ3JlZWR5VGFibGVDYWNoZU1hcCwgX2dyZWVkeVRhYmxlQ2FjaGVUZXN0IH0gPSBfZ3JlZWR5VGFibGVCdWlsZChbXG5cblx0Wy9b5ZmB5oKq5oOhXS9nLCAn5oG2J10sXG5cdFsvW+e5i+e5q+S/gl0vZywgJ+ezuyddLFxuXHRbL1vns4rprI3okavooZrmpZxdL2csICfog6EnXSxcblx0Wy9b5YSF5Zm555W2XS9nLCAn5b2TJ10sXG5cdFsvW+W+qeikh+imhl0vZywgJ+WkjSddLFxuXHRbL1vlm4zomIfnlKZdL2csICfoi48nXSxcblx0Wy9b5o6h5b2p552s6Lip5Z+w57a15Iy9XS9nLCAn6YeHJ10sXG5cdFsvW+WbieWVsOe+heORqeWEuF0vZywgJ+e9lyddLFxuXHRbL1vmtY/ngI/lioldL2csICfliJgnXSxcblx0Wy9b5Yq15Y235be75o2yXS9nLCAn5Yi4J10sXG5cdFsvW+WIkuWKg+eVq10vZywgJ+eUuyddLFxuXHRbL1vprKXpl5jprK3prKpdL2csICfmlpcnXSxcblx0Wy9b5Lm+5LqB5Lm55bm5XS9nLCAn5bmyJ10sXG5cdFsvW+Wbs+Wbvl0vZywgJ+WcliddLFxuXHRbL1vmmqbmm4bmrbTmrbddL2csICfljoYnXSxcblx0Wy9b6bqq6bq16bq6XS9nLCAn6Z2iJ10sXG5cdFsvW+iug+iumuizm+i0iui1nl0vZywgJ+i1niddLFxuXHRbL1vnmbzpq6rpq65dL2csICflj5EnXSxcblx0Wy9b5L6t5YSY55uhXS9nLCAn5bC9J10sXG5cdFsvW+WEquW/p+aGgl0vZywgJ+W/pyddLFxuXHRbL1vkv7HlgLZdL2csICflhbcnXSxcblx0Wy9b5LmL55qE5b6XXS9nLCAn44GuJ10sXG5cdFsvW+iIh+S4jl0vZywgJ+OBqCddLFxuXHRbL1vlpbnku5bniaDnpYLkvZddL2csICflroMnXSxcblx0Wy9b5pSv6Zq75p6dXS9nLCAn5Y+qJ10sXG5cdFsvW+eCruegsueCsF0vZywgJ+azoSddLFxuXHRbL1vku7LjiqVdL2csICfkuK0nXSxcblx0Wy9b5Y6fXS9nLCAn5YWDJ10sXG5cdFsvW+i/tOW7u10vZywgJ+WbniddLFxuXHRbL1vkub7kuoHkubnlubldL2csICflubInXSxcblx0Wy9b6YG/6ZeiXS9nLCAn6L6fJ10sXG5cdFsvW+a7t+m5teWNpOmygV0vZywgJ+mtryddLFxuXHRbL1vmqq/oh7rporHlhJNdL2csICflj7AnXSxcblx0Wy9b5a6756WV56eYXS9nLCAn5a+GJ10sXG5cdFsvW+isjuiwnF0vZywgJ+i/tyddLFxuXHRbL1vnoILojo7ntJfnurFdL2csICfmspknXSxcblx0Wy9b57eo56+H57yWXS9nLCAn56+HJ10sXG5cdFsvW+WGtl0vZywgJ+ayuyddLFxuXHRbL1vngrznhYnpjKzpjYrwq5SA57e057uDXS91ZywgJ+e3tCddLFxuXHRbL1vkup7kuprlqa3lqIXmpI/moaDkupxdL3VnLCAn5LqaJ10sXG5cdFsvW+WhnuizvV0vdWcsICfotZsnXSxcblx0Wy9b6IW+6aiw57GQ57GYXS91ZywgJ+iXpCddLFxuXHRbL1vlprPnpaLnprBdL3VnLCAn5L2gJ10sXG5cdFsvW+WWsOmjoOK7numjp10vdWcsICfpo58nXSxcblx0Wy9b55Gq6aas546b6amsXS91ZywgJ+mprCddLFxuXHRbL1vppLjppJpdL3VnLCAn6aSaJ10sXG5cdFsvW+ijuF0vdWcsICfmnpwnXSxcblx0Wy9b5Yex5Yev6Y6n6ZOgXS91ZywgJ+WHsSddLFxuXHRbL1vluJbotLRdL3VnLCAn6LK8J10sXG5cdFsvW+eUml0vdWcsICfku4AnXSxcblx0Wy9b6IGv6IGU6YCj6L+eXS91ZywgJ+mAoyddLFxuXHRbL1vlg49dL3VnLCAn6LGhJ10sXG5cdFsvW+iXiV0vdWcsICflgJ8nXSxcblx0Wy9b6JW+XS91ZywgJ+mbtyddLFxuXHRbL1voqILorqLph5jpkoldL3VnLCAn5a6aJ10sXG5cdFsvW+Warl0vdWcsICflkJEnXSxcblx0Wy9b57O457O55LidXS91ZywgJ+e1siddLFxuXHRbL1vnrZJdL3VnLCAn5qG2J10sXG5cdFsvW+WFueeOhua7i10vdWcsICfojLInXSxcblx0Wy9b5ZGQ6Kil6K63XS91ZywgJ+WQtiddLFxuXHRbL1vnqYDns5NdL3VnLCAn6LC3J10sXG5cdFsvW+S4pOWFqeWAhuS/qV0vdWcsICfkuKEnXSxcblx0Wy9b5biz6LOs6LSmXS91ZywgJ+W4kCddLFxuXHRbL1vniYjpl4ZdL3VnLCAn5p2/J10sXG5cdFsvW+W+hV0vdWcsICflkYYnXSxcblx0Wy9b54aU6Y6U6ZWV6J6N6J6OXS91ZywgJ+a6tiddLFxuXHRbL1vljK/msYddL3VnLCAn5b2ZJ10sXG5cdFsvW+W9v+S7j10vdWcsICfkvZsnXSxcblx0Wy9b6Zi/XS91ZywgJ+WViiddLFxuXHRbL1vlrrZdL3VnLCAn5YKiJ10sXG5cdFsvW+eIhl0vdWcsICfmmrQnXSxcblx0Wy9b57ay5IuE5Iue57ax57qyXS91ZywgJ+e9kSddLFxuXHRbL1voqLtdL3VnLCAn5rOoJ10sXG5cdFsvW+eBjOi0r+a9hV0vdWcsICfosqsnXSxcblx0Wy9b5YCSXS91ZywgJ+WIsCddLFxuXHRbL1vlhK3np6Tnp7DnqLHooazopa9dL3VnLCAn5bmzJ10sXG5cdFsvW+WLm+WLsuWLs10vdWcsICfli4snXSxcblx0Wy9b6bqX5Li96I6JXS91ZywgJ+WIqSddLFxuXHRbL1vlt7Llt7NdL3VnLCAn5bexJ10sXG5cdFsvW+WXrF0vdWcsICflkbUnXSxcblx0Wy9b5ZOK5ZOf5ZS35ZS55ZayXS91ZywgJ+WRpiddLFxuXHRbL1vlqZXmnbDmtIHmvZTntZxdL3VnLCAn5YKRJ10sXG5cdFsvW+WYu10vdWcsICflrIknXSxcblx0Wy9b55ey55ez6bq7XS91ZywgJ+WYmyddLFxuXHRbL1vni5ddL3VnLCAn54qsJ10sXG5cdFsvW+W9v+aLgl0vdWcsICfkvZsnXSxcblx0Wy9b5LqZ5oGG5oGSXS91ZywgJ+S6mCddLFxuXHRbL1vpmYTlia9dL3VnLCAn5LuYJ10sXG5cdFsvW+S8veaet+ePiOi/pl0vdWcsICfliqAnXSxcblx0Wy9b6KSUXS91ZywgJ+emjyddLFxuXHRbL1vmjbFdL3VnLCAn5oyoJ10sXG5cdFsvW+aLvF0vdWcsICfmi5onXSxcblx0Wy9b6aOE6aOY6aODXS91ZywgJ+a8giddLFxuXHRbL1vkvZTmsr5dL3VnLCAn5Y2gJ10sXG5cdFsvW+awl+awo+axvea7iueCgV0vdWcsICfmsJQnXSxcblx0Wy9b5pKp6YG8XS91ZywgJ+i+vSddLFxuXHRbL1vlgZpdL3VnLCAn5L2cJ10sXG5cdFsvW+aQnOaNnF0vdWcsICfokpAnXSxcblx0Wy9b5Y+f5YKBXS91ZywgJ+WPnyddLFxuXHRbL1vorJ3osKJdL3VnLCAn5qatJ10sXG5cdFsvW+W9ol0vdWcsICflnosnXSxcblx0Wy9b6ZuH6aCL6aGn6aG+XS91ZywgJ+WDsSddLFxuXHRbL1vlu6zoiqbomIZdL3VnLCAn5bqQJ10sXG5cdFsvW+iAvei6rV0vdWcsICfnnIgnXSxcblx0Wy9b5YK556uf56u256u46Kqp8KWqsPCnoZ/wp6uY8KermfCnrqPwqJC8XS91ZywgJ+erniddLFxuXHRbL1vmrpZdL3VnLCAn5qSNJ10sXG5cdFsvW+S9rOWnpV0vdWcsICfogIEnXSxcblx0Wy9b5YCWXS91ZywgJ+W5uCddLFxuXHRbL1vjoKrngqznn6npiYVdL3VnLCAn5beoJ10sXG5cdFsvW+mPiOmTvueCvOmMrOmNivCrlIDkg5vwp7mv57e057uD6YCj6L+eXS91ZywgJ+eFiSddLFxuXHRbL1vliLTliYHliZDlia7lio9dL3VnLCAn45OlJ10sXG5cdFsvW+aej+aloF0vdWcsICfljZcnXSxcblx0Wy9b55KQ8KG9mPCosbRdL3VnLCAn6LevJ10sXG5cdFsvW+S+guaLk+adlOiol+iurOaLluaLlV0vdWcsICfmiZgnXSxcblx0Wy9b5oKV552O56iAXS91ZywgJ+W4jCddLFxuXHRbL1vluLzluZflm73lnItdL3VnLCAn5ZuvJ10sXG5cdFsvW+i/lF0vdWcsICflj40nXSxcblx0Wy9b6Zm96ZizXS91ZywgJ+S9ryddLFxuXHRbL1vmnaXojrHokIpdL3VnLCAn5L6GJ10sXG5cdFsvW+iRhuWgoeikk+e3pV0vdWcsICfkv50nXSxcblx0Wy9b5rihXS91ZywgJ+W6piddLFxuXHRbL1vlibPmnK3nrprntK5dL3VnLCAn5omOJ10sXG5cdFsvW+WqnuaPkOa5nOemlOe3uee8h+mahF0vdWcsICfloKQnXSxcblx0Wy9b6IeY6Jyh6KCfXS91ZywgJ+iFiiddLFxuXHRbL1vprLHwqJq88KifnV0vdWcsICfpg4EnXSxcblx0Wy9b5pOA5p2G5qG/XS91ZywgJ+aJniddLFxuXHRbL1vohLzpg57wpYeRXS91ZywgJ+mDjiddLFxuXHRbL1voiq1dL3VnLCAn5be0J10sXG5cdFsvW+a2hea5vF0vdWcsICfmjY8nXSxcblx0Wy9b5oup5pOH5rKi5rO95r6kXS91ZywgJ+aKniddLFxuXHRbL1vlubXplotdL3VnLCAn5byAJ10sXG5cdFsvW+ePrl0vdWcsICfkvaknXSxcblx0Wy9b5Zap57Gy6b6l5ZCBXS91ZywgJ+WWuyddLFxuXHRbL1vlgLxdL3VnLCAn5YCkJ10sXG5cdFsvW+iHk+iHn+i0k+i1g+mrkl0vdWcsICfohI8nXSxcblx0Wy9b44qkXS91ZywgJ+S4iiddLFxuXHRbL1vjiqZdL3VnLCAn5LiLJ10sXG5cdFsvW+WUv10vdWcsICflkbwnXSxcblx0Wy9b6Kmz6K+mXS91ZywgJ+elpSddLFxuXHRbL1vlpq7ms6VdL3VnLCAn5bC8J10sXG5cdFsvW+WJi+WwhV0vdWcsICflhYsnXSxcblx0Wy9b5pKl5pKtXS91ZywgJ+aLqCddLFxuXHRbL1vmjL/mj7ddL3VnLCAn5o+SJ10sXG5cdFsvW+axgF0vdWcsICfkuIEnXSxcblx0Wy9b6YKjXS91ZywgJ+WonCddLFxuXHRbL1voj4hdL3VnLCAn5ouJJ10sXG5cdFsvW+eOsueQs+mItOmTg+a3i10vdWcsICfmnpcnXSxcblx0Wy9b6YqY6ZOtXS91ZywgJ+WQjSddLFxuXHRbL1vpvaNdL3VnLCAn5Ye6J10sXG5cdFsvW+asuOiqkuivtl0vdWcsICfllIknXSxcblx0Wy9b5ZOeXS91ZywgJ+WRoyddLFxuXHRbL1vjlr/lkJRdL3VnLCAn6IC2J10sXG5cdFsvW+mthV0vdWcsICflqponXSxcblx0Wy9b6I+y6Z2eXS91ZywgJ+aWkCddLFxuXHRbL1vooanph7XpkpddL3VnLCAn5Y+JJ10sXG5cdFsvW+a3h+eQquelul0vdWcsICflhbYnXSxcblx0Wy9b5aOH6KuH6K2a6LCI6LCtXS91ZywgJ+WdmyddLFxuXHRbL1vmnZDmn7RdL3VnLCAn5omNJ10sXG5cdFsvW+WUuF0vdWcsICflv7UnXSxcblx0Wy9b6La+XS91ZywgJ+aMhyddLFxuXHRbL1vku5VdL3VnLCAn5aOrJ10sXG5cdFsvW+WsouWtg10vdWcsICflqJgnXSxcblx0Wy9b5ZOR5ZSW55iC55eWXS91ZywgJ+WVniddLFxuXHRbL1vliqjlg43ku4JdL3VnLCAn5YuVJ10sXG5cdFsvW+afpeafu10vdWcsICflr58nXSxcblx0Wy9b6YmE6YqV6ZCh6ZC16ZOB8Kirk10vdWcsICfpiYMnXSxcblx0Wy9b5b2S5q2455qIXS91ZywgJ+W4sCddLFxuXHRbL1vnmKHnlq7libVdL3VnLCAn5YibJ10sXG5cdFsvW+aLt+eDpF0vdWcsICfogIMnXSxcblx0Wy9b6L68XS91ZywgJ+WFpSddLFxuXHRbL1vkvKbkvpblgKtdL3VnLCAn5LuRJ10sXG5cdFsvW+S7lF0vdWcsICflrZAnXSxcblx0Wy9b5b2O5rm+54GjXS91ZywgJ+W8ryddLFxuXHRbL1vojafokKTom43onqJdL3VnLCAn54aSJ10sXG5cdFsvW+aMo+aOmeeIrV0vdWcsICfkuoknXSxcblx0Wy9b5ryy6IOA6IS5XS91ZywgJ+a2qCddLFxuXHRbL1vnhKHlhofmspLmsqFdL3VnLCAn5pegJ10sXG5cdFsvW+WZuOiosF0vdWcsICflkKgnXSxcblx0Wy9b6YiO6Ymk6ZKpXS91ZywgJ+WLviddLFxuXHRbL1vmsoldL3VnLCAn5rKIJ10sXG5cdFsvW+eVs+eWiui/rV0vdWcsICflj6AnXSxcblx0Wy9b57mu57yw6Z+B5YO1XS91ZywgJ+aurSddLFxuXHRbL1vog4xdL3VnLCAn5o+5J10sXG5cdFsvW+Wbo+WcmOezsF0vdWcsICflm6InXSxcblx0Wy9b5qaaXS91ZywgJ+ezlSddLFxuXG5dKTtcblxuLy9jb25zb2xlLmxvZyhfZ3JlZWR5VGFibGVDYWNoZVRlc3QpO1xuXG5leHBvcnQgZnVuY3Rpb24gX2dyZWVkeVRhYmxlQnVpbGQoZGF0YTogW1JlZ0V4cCwgc3RyaW5nXVtdKToge1xuXHRfZ3JlZWR5VGFibGVDYWNoZVJlZ2V4cDogcmVhZG9ubHkgKHJlYWRvbmx5IFtSZWdFeHAsIHN0cmluZ10pW107XG5cdF9ncmVlZHlUYWJsZUNhY2hlTWFwOiBNYXA8c3RyaW5nLCByZWFkb25seSBzdHJpbmdbXT47XG5cdF9ncmVlZHlUYWJsZUNhY2hlVGVzdDogUmVnRXhwO1xufVxue1xuXHRjb25zdCBfZ3JlZWR5VGFibGVDYWNoZVJlZ2V4cDogW1JlZ0V4cCwgc3RyaW5nXVtdID0gZGF0YTtcblxuXHRsZXQgX2dyZWVkeVRhYmxlQ2FjaGVNYXA6IE1hcDxzdHJpbmcsIHN0cmluZ1tdPjtcblx0bGV0IF9ncmVlZHlUYWJsZUNhY2hlVGVzdDogUmVnRXhwO1xuXG5cdF9ncmVlZHlUYWJsZUNhY2hlTWFwID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZ1tdPigpO1xuXG5cdGxldCBhcnIgPSBfZ3JlZWR5VGFibGVDYWNoZVJlZ2V4cFxuXHRcdC5yZWR1Y2UoZnVuY3Rpb24gKGFyciwgcilcblx0XHR7XG5cdFx0XHRsZXQgcyA9IHJbMF0uc291cmNlXG5cdFx0XHRcdC5yZXBsYWNlKC9eLipcXFt8XFxdLiokL3VnLCAnJylcblx0XHRcdDtcblxuXHRcdFx0bGV0IGEgPSBVU3RyaW5nLnNwbGl0KHMsICcnKS5jb25jYXQoclsxXSk7XG5cblx0XHRcdGEuZm9yRWFjaChjID0+XG5cdFx0XHR7XG5cdFx0XHRcdF9ncmVlZHlUYWJsZUNhY2hlTWFwLnNldChjLCBhKVxuXHRcdFx0fSk7XG5cblx0XHRcdGFyci5wdXNoKC4uLmEpO1xuXG5cdFx0XHRyZXR1cm4gYXJyO1xuXHRcdH0sIFtdIGFzIHN0cmluZ1tdKVxuXHQ7XG5cblx0X2dyZWVkeVRhYmxlQ2FjaGVUZXN0ID0gbmV3IFJlZ0V4cChgWyR7YXJyYXlfdW5pcXVlKGFycikuam9pbignJyl9XWAsICd1Jyk7XG5cblx0cmV0dXJuIHtcblx0XHRfZ3JlZWR5VGFibGVDYWNoZVJlZ2V4cCxcblx0XHRfZ3JlZWR5VGFibGVDYWNoZU1hcCxcblx0XHRfZ3JlZWR5VGFibGVDYWNoZVRlc3QsXG5cdH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBncmVlZHlUYWJsZVRlc3QoaW5wdXQ6IHN0cmluZylcbntcblx0cmV0dXJuIF9ncmVlZHlUYWJsZUNhY2hlVGVzdC50ZXN0KGlucHV0KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ3JlZWR5VGFibGVDaGFyQXJyYXkoY2hhcjogc3RyaW5nKVxue1xuXHRyZXR1cm4gX2dyZWVkeVRhYmxlQ2FjaGVNYXAuZ2V0KGNoYXIpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBncmVlZHlUYWJsZVJlcGxhY2UoaW5wdXQ6IHN0cmluZyk6IHN0cmluZ1xue1xuXHRpZiAoZ3JlZWR5VGFibGVUZXN0KGlucHV0KSlcblx0e1xuXHRcdHJldHVybiBfZ3JlZWR5VGFibGVDYWNoZVJlZ2V4cFxuXHRcdFx0LnJlZHVjZShmdW5jdGlvbiAoaW5wdXQsIHIpXG5cdFx0XHR7XG5cdFx0XHRcdHJldHVybiBpbnB1dC5yZXBsYWNlKHJbMF0sIHJbMV0pXG5cdFx0XHR9LCBpbnB1dClcblx0XHRcdDtcblx0fVxuXG5cdHJldHVybiBpbnB1dFxufVxuXG5leHBvcnQgZGVmYXVsdCBleHBvcnRzIGFzIHR5cGVvZiBpbXBvcnQoJy4vZ3JlZWR5Jyk7XG4iXX0=
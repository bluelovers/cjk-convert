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
    [/[亞亚婭娅椏桠]/ug, '亚'],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JlZWR5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ3JlZWR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7R0FFRzs7O0FBRUgsMkNBQWlDO0FBQ2pDLDJEQUFrRDtBQUdyQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFvSFgsaUxBQUM7QUFFSCxxQ0FBcUM7QUFFckMsU0FBZ0IsaUJBQWlCLENBQUMsSUFBd0I7SUFNekQsTUFBTSx1QkFBdUIsR0FBdUIsSUFBSSxDQUFDO0lBRXpELElBQUksb0JBQTJDLENBQUM7SUFDaEQsSUFBSSxxQkFBNkIsQ0FBQztJQUVsQyxvQkFBb0IsR0FBRyxJQUFJLEdBQUcsRUFBb0IsQ0FBQztJQUVuRCxJQUFJLEdBQUcsR0FBRyx1QkFBdUI7U0FDL0IsTUFBTSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFFdkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU07YUFDakIsT0FBTyxDQUFDLGVBQWUsRUFBRSxFQUFFLENBQUMsQ0FDN0I7UUFFRCxJQUFJLENBQUMsR0FBRyxvQkFBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFFYixvQkFBb0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQy9CLENBQUMsQ0FBQyxDQUFDO1FBRUgsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRWYsT0FBTyxHQUFHLENBQUM7SUFDWixDQUFDLEVBQUUsRUFBYyxDQUFDLENBQ2xCO0lBRUQscUJBQXFCLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxpQ0FBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBRTNFLE9BQU87UUFDTix1QkFBdUI7UUFDdkIsb0JBQW9CO1FBQ3BCLHFCQUFxQjtLQUNyQixDQUFDO0FBQ0gsQ0FBQztBQXhDRCw4Q0F3Q0M7QUFFRCxTQUFnQixlQUFlLENBQUMsS0FBYTtJQUU1QyxPQUFPLDZCQUFxQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtBQUN6QyxDQUFDO0FBSEQsMENBR0M7QUFFRCxTQUFnQixvQkFBb0IsQ0FBQyxJQUFZO0lBRWhELE9BQU8sNEJBQW9CLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO0FBQ3RDLENBQUM7QUFIRCxvREFHQztBQUVELFNBQWdCLGtCQUFrQixDQUFDLEtBQWE7SUFFL0MsSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDLEVBQzFCO1FBQ0MsT0FBTywrQkFBdUI7YUFDNUIsTUFBTSxDQUFDLFVBQVUsS0FBSyxFQUFFLENBQUM7WUFFekIsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNqQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQ1I7S0FDRjtJQUVELE9BQU8sS0FBSyxDQUFBO0FBQ2IsQ0FBQztBQWJELGdEQWFDO0FBRUQsa0JBQWUsT0FBb0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSB1c2VyIG9uIDIwMTkvNS85LlxuICovXG5cbmltcG9ydCBVU3RyaW5nIGZyb20gJ3VuaS1zdHJpbmcnO1xuaW1wb3J0IHsgYXJyYXlfdW5pcXVlIH0gZnJvbSAnYXJyYXktaHlwZXItdW5pcXVlJztcbmltcG9ydCB7IElPcHRpb25zIH0gZnJvbSAnLi9saXN0JztcblxuZXhwb3J0IGNvbnN0IHsgX2dyZWVkeVRhYmxlQ2FjaGVSZWdleHAsIF9ncmVlZHlUYWJsZUNhY2hlTWFwLCBfZ3JlZWR5VGFibGVDYWNoZVRlc3QgfSA9IF9ncmVlZHlUYWJsZUJ1aWxkKFtcblx0Wy9b5ZmB5oKq5oOhXS9nLCAn5oG2J10sXG5cdFsvW+e5i+e5q+S/gl0vZywgJ+ezuyddLFxuXHRbL1vns4rprI3okavooZrmpZxdL2csICfog6EnXSxcblx0Wy9b5YSF5Zm555W2XS9nLCAn5b2TJ10sXG5cdFsvW+W+qeikh+imhl0vZywgJ+WkjSddLFxuXHRbL1vlm4zomIfnlKZdL2csICfoi48nXSxcblx0Wy9b5o6h5b2p552s6Lip5Z+w57a15Iy9XS9nLCAn6YeHJ10sXG5cdFsvW+WbieWVsOe+heORqeWEuF0vZywgJ+e9lyddLFxuXHRbL1vmtY/ngI/lioldL2csICfliJgnXSxcblx0Wy9b5Yq15Y235be75o2yXS9nLCAn5Yi4J10sXG5cdFsvW+WIkuWKg+eVq10vZywgJ+eUuyddLFxuXHRbL1vprKXpl5jprK3prKpdL2csICfmlpcnXSxcblx0Wy9b5Lm+5LqB5Lm55bm5XS9nLCAn5bmyJ10sXG5cdFsvW+Wbs+Wbvl0vZywgJ+WcliddLFxuXHRbL1vmmqbmm4bmrbTmrbddL2csICfljoYnXSxcblx0Wy9b6bqq6bq16bq6XS9nLCAn6Z2iJ10sXG5cdFsvW+iug+iumuizm+i0iui1nl0vZywgJ+i1niddLFxuXHRbL1vnmbzpq6rpq65dL2csICflj5EnXSxcblx0Wy9b5L6t5YSY55uhXS9nLCAn5bC9J10sXG5cdFsvW+WEquW/p+aGgl0vZywgJ+W/pyddLFxuXHRbL1vkv7HlgLZdL2csICflhbcnXSxcblx0Wy9b5LmL55qE5b6XXS9nLCAn44GuJ10sXG5cdFsvW+iIh+S4jl0vZywgJ+OBqCddLFxuXHRbL1vlpbnku5bniaDnpYLkvZddL2csICflroMnXSxcblx0Wy9b5pSv6Zq75p6dXS9nLCAn5Y+qJ10sXG5cdFsvW+eCruegsueCsF0vZywgJ+azoSddLFxuXHRbL1vku7JdL2csICfkuK0nXSxcblx0Wy9b5Y6fXS9nLCAn5YWDJ10sXG5cdFsvW+i/tOW7u10vZywgJ+WbniddLFxuXHRbL1vkub7kuoHkubnlubldL2csICflubInXSxcblx0Wy9b6YG/6ZeiXS9nLCAn6L6fJ10sXG5cdFsvW+a7t+m5teWNpOmygV0vZywgJ+mtryddLFxuXHRbL1vmqq/oh7rporHlhJNdL2csICflj7AnXSxcblx0Wy9b5a6756WV56eYXS9nLCAn5a+GJ10sXG5cdFsvW+isjuiwnF0vZywgJ+i/tyddLFxuXHRbL1vnoILojo7ntJfnurFdL2csICfmspknXSxcblx0Wy9b57eo56+H57yWXS9nLCAn56+HJ10sXG5cdFsvW+WGtl0vZywgJ+ayuyddLFxuXHRbL1vngrznhYnpjKzpjYrwq5SA57e057uDXS91ZywgJ+e3tCddLFxuXHRbL1vkup7kuprlqa3lqIXmpI/moaBdL3VnLCAn5LqaJ10sXG5cdFsvW+WhnuizvV0vdWcsICfotZsnXSxcblx0Wy9b6IW+6aiw57GQ57GYXS91ZywgJ+iXpCddLFxuXHRbL1vlprPnpaLnprBdL3VnLCAn5L2gJ10sXG5cdFsvW+WWsOmjoOK7numjp10vdWcsICfpo58nXSxcblx0Wy9b55Gq6aas546b6amsXS91ZywgJ+mprCddLFxuXHRbL1vppLjppJpdL3VnLCAn6aSaJ10sXG5cdFsvW+ijuF0vdWcsICfmnpwnXSxcblx0Wy9b5Yex5Yev6Y6n6ZOgXS91ZywgJ+WHsSddLFxuXHRbL1vluJbotLRdL3VnLCAn6LK8J10sXG5cdFsvW+eUml0vdWcsICfku4AnXSxcblx0Wy9b6IGv6IGU6YCj6L+eXS91ZywgJ+mAoyddLFxuXHRbL1vlg49dL3VnLCAn6LGhJ10sXG5cdFsvW+iXiV0vdWcsICflgJ8nXSxcblx0Wy9b6JW+XS91ZywgJ+mbtyddLFxuXHRbL1voqILorqJdL3VnLCAn5a6aJ10sXG5cdFsvW+Warl0vdWcsICflkJEnXSxcblx0Wy9b57O457O55LidXS91ZywgJ+e1siddLFxuXHRbL1vnrZJdL3VnLCAn5qG2J10sXG5cdFsvW+WFueeOhua7i10vdWcsICfojLInXSxcblx0Wy9b5ZGQ6Kil6K63XS91ZywgJ+WQtiddLFxuXHRbL1vnqYDns5NdL3VnLCAn6LC3J10sXG5cdFsvW+S4pOWFqeWAhuS/qV0vdWcsICfkuKEnXSxcblx0Wy9b5biz6LOs6LSmXS91ZywgJ+W4kCddLFxuXHRbL1vniYjpl4ZdL3VnLCAn5p2/J10sXG5cdFsvW+W+hV0vdWcsICflkYYnXSxcblx0Wy9b54aU6Y6U6ZWV6J6N6J6OXS91ZywgJ+a6tiddLFxuXHRbL1vljK/msYddL3VnLCAn5b2ZJ10sXG5cdFsvW+W9v+S7j10vdWcsICfkvZsnXSxcblx0Wy9b6Zi/XS91ZywgJ+WViiddLFxuXHRbL1vlrrZdL3VnLCAn5YKiJ10sXG5cdFsvW+eIhl0vdWcsICfmmrQnXSxcblx0Wy9b57ay5IuE5Iue57ax57qyXS91ZywgJ+e9kSddLFxuXHRbL1voqLtdL3VnLCAn5rOoJ10sXG5cdFsvW+eBjOi0r+a9hV0vdWcsICfosqsnXSxcblx0Wy9b5YCSXS91ZywgJ+WIsCddLFxuXHRbL1vnp6RdL3VnLCAn5bmzJ10sXG5cdFsvW+WLm+WLsuWLs10vdWcsICfli4snXSxcblx0Wy9b6bqX5Li96I6JXS91ZywgJ+WIqSddLFxuXHRbL1vlt7Llt7NdL3VnLCAn5bexJ10sXG5cdFsvW+WXrF0vdWcsICflkbUnXSxcblx0Wy9b5ZOK5ZOf5ZS35ZS55ZayXS91ZywgJ+WRpiddLFxuXHRbL1vmnbDmvZTmtIFdL3VnLCAn5YKRJ10sXG5cdFsvW+WYu10vdWcsICflrIknXSxcblx0Wy9b55ey55ez6bq7XS91ZywgJ+WYmyddLFxuXHRbL1vni5ddL3VnLCAn54qsJ10sXG5cdFsvW+W9v+aLgl0vdWcsICfkvZsnXSxcblx0Wy9b5LqZ5oGG5oGSXS91ZywgJ+S6mCddLFxuXHRbL1vpmYTlia9dL3VnLCAn5LuYJ10sXG5cdFsvW+S8veaet+ePiOi/pl0vdWcsICfliqAnXSxcblx0Wy9b6KSUXS91ZywgJ+emjyddLFxuXHRbL1vmjbFdL3VnLCAn5oyoJ10sXG5cdFsvW+aLvF0vdWcsICfmi5onXSxcblx0Wy9b6aOE6aOY6aODXS91ZywgJ+a8giddLFxuXHRbL1vkvZTmsr5dL3VnLCAn5Y2gJ10sXG5cdFsvW+awl+awo+axvea7iueCgV0vdWcsICfmsJQnXSxcblx0Wy9b5pKp6YG8XS91ZywgJ+i+vSddLFxuXHRbL1vlgZpdL3VnLCAn5L2cJ10sXG5cdFsvW+aQnOaNnF0vdWcsICfokpAnXSxcblx0Wy9b5Y+f5YKBXS91ZywgJ+WPnyddLFxuXHRbL1vorJ3osKJdL3VnLCAn5qatJ10sXG5cdFsvW+W9ol0vdWcsICflnosnXSxcblx0Wy9b6ZuH6aCL6aGn6aG+XS91ZywgJ+WDsSddLFxuXHRbL1vlu6zoiqbomIZdL3VnLCAn5bqQJ10sXG5cdFsvW+iAvei6rV0vdWcsICfnnIgnXSxcblx0Wy9b5YK556uf56u256u46Kqp8KWqsPCnoZ/wp6uY8KermfCnrqPwqJC8XS91ZywgJ+erniddLFxuXHRbL1vmrpZdL3VnLCAn5qSNJ10sXG5cdFsvW+S9rOWnpV0vdWcsICfogIEnXSxcblx0Wy9b5YCWXS91ZywgJ+W5uCddLFxuXHRbL1vjoKrngqznn6npiYVdL3VnLCAn5beoJ10sXG5cdFsvW+mPiOmTvueCvOmMrOmNivCrlIDkg5vwp7mv57e057uD6YCj6L+eXS91ZywgJ+eFiSddLFxuXHRbL1vliLTliYHliZDlia7lio9dL3VnLCAn45OlJ10sXG5cdFsvW+aej+aloF0vdWcsICfljZcnXSxcblx0Wy9b55KQ8KG9mPCosbRdL3VnLCAn6LevJ10sXG5cdFsvW+S+guaLk+adlOiol+iurF0vdWcsICfmiZgnXSxcblx0Wy9b5oKV552O56iAXS91ZywgJ+W4jCddLFxuXSk7XG5cbi8vY29uc29sZS5sb2coX2dyZWVkeVRhYmxlQ2FjaGVUZXN0KTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9ncmVlZHlUYWJsZUJ1aWxkKGRhdGE6IFtSZWdFeHAsIHN0cmluZ11bXSk6IHtcblx0X2dyZWVkeVRhYmxlQ2FjaGVSZWdleHA6IHJlYWRvbmx5IChyZWFkb25seSBbUmVnRXhwLCBzdHJpbmddKVtdO1xuXHRfZ3JlZWR5VGFibGVDYWNoZU1hcDogTWFwPHN0cmluZywgcmVhZG9ubHkgc3RyaW5nW10+O1xuXHRfZ3JlZWR5VGFibGVDYWNoZVRlc3Q6IFJlZ0V4cDtcbn1cbntcblx0Y29uc3QgX2dyZWVkeVRhYmxlQ2FjaGVSZWdleHA6IFtSZWdFeHAsIHN0cmluZ11bXSA9IGRhdGE7XG5cblx0bGV0IF9ncmVlZHlUYWJsZUNhY2hlTWFwOiBNYXA8c3RyaW5nLCBzdHJpbmdbXT47XG5cdGxldCBfZ3JlZWR5VGFibGVDYWNoZVRlc3Q6IFJlZ0V4cDtcblxuXHRfZ3JlZWR5VGFibGVDYWNoZU1hcCA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmdbXT4oKTtcblxuXHRsZXQgYXJyID0gX2dyZWVkeVRhYmxlQ2FjaGVSZWdleHBcblx0XHQucmVkdWNlKGZ1bmN0aW9uIChhcnIsIHIpXG5cdFx0e1xuXHRcdFx0bGV0IHMgPSByWzBdLnNvdXJjZVxuXHRcdFx0XHQucmVwbGFjZSgvXi4qXFxbfFxcXS4qJC91ZywgJycpXG5cdFx0XHQ7XG5cblx0XHRcdGxldCBhID0gVVN0cmluZy5zcGxpdChzLCAnJykuY29uY2F0KHJbMV0pO1xuXG5cdFx0XHRhLmZvckVhY2goYyA9PlxuXHRcdFx0e1xuXHRcdFx0XHRfZ3JlZWR5VGFibGVDYWNoZU1hcC5zZXQoYywgYSlcblx0XHRcdH0pO1xuXG5cdFx0XHRhcnIucHVzaCguLi5hKTtcblxuXHRcdFx0cmV0dXJuIGFycjtcblx0XHR9LCBbXSBhcyBzdHJpbmdbXSlcblx0O1xuXG5cdF9ncmVlZHlUYWJsZUNhY2hlVGVzdCA9IG5ldyBSZWdFeHAoYFske2FycmF5X3VuaXF1ZShhcnIpLmpvaW4oJycpfV1gLCAndScpO1xuXG5cdHJldHVybiB7XG5cdFx0X2dyZWVkeVRhYmxlQ2FjaGVSZWdleHAsXG5cdFx0X2dyZWVkeVRhYmxlQ2FjaGVNYXAsXG5cdFx0X2dyZWVkeVRhYmxlQ2FjaGVUZXN0LFxuXHR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ3JlZWR5VGFibGVUZXN0KGlucHV0OiBzdHJpbmcpXG57XG5cdHJldHVybiBfZ3JlZWR5VGFibGVDYWNoZVRlc3QudGVzdChpbnB1dClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdyZWVkeVRhYmxlQ2hhckFycmF5KGNoYXI6IHN0cmluZylcbntcblx0cmV0dXJuIF9ncmVlZHlUYWJsZUNhY2hlTWFwLmdldChjaGFyKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ3JlZWR5VGFibGVSZXBsYWNlKGlucHV0OiBzdHJpbmcpOiBzdHJpbmdcbntcblx0aWYgKGdyZWVkeVRhYmxlVGVzdChpbnB1dCkpXG5cdHtcblx0XHRyZXR1cm4gX2dyZWVkeVRhYmxlQ2FjaGVSZWdleHBcblx0XHRcdC5yZWR1Y2UoZnVuY3Rpb24gKGlucHV0LCByKVxuXHRcdFx0e1xuXHRcdFx0XHRyZXR1cm4gaW5wdXQucmVwbGFjZShyWzBdLCByWzFdKVxuXHRcdFx0fSwgaW5wdXQpXG5cdFx0XHQ7XG5cdH1cblxuXHRyZXR1cm4gaW5wdXRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZXhwb3J0cyBhcyB0eXBlb2YgaW1wb3J0KCcuL2dyZWVkeScpO1xuIl19
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
    [/[秤]/ug, '平'],
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
    [/[湜提隄]/ug, '堤'],
    [/[臘蜡蠟]/ug, '腊'],
    [/[鬱𨚼𨟝]/ug, '郁'],
    [/[擀杆桿]/ug, '扞'],
    [/[脼郞𥇑]/ug, '郎'],
    [/[芭]/ug, '巴'],
    [/[涅湼]/ug, '捏'],
    [/[择擇沢泽澤]/ug, '択'],
    [/[幵開]/ug, '开'],
    [/[珮]/ug, '佩'],
    [/[喩籲龥]/ug, '喻'],
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
    [/[玲琳鈴铃]/ug, '林'],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JlZWR5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ3JlZWR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7R0FFRzs7O0FBRUgsMkNBQWlDO0FBQ2pDLDJEQUFrRDtBQUdyQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQW9KWCxpTEFBQztBQUVILHFDQUFxQztBQUVyQyxTQUFnQixpQkFBaUIsQ0FBQyxJQUF3QjtJQU16RCxNQUFNLHVCQUF1QixHQUF1QixJQUFJLENBQUM7SUFFekQsSUFBSSxvQkFBMkMsQ0FBQztJQUNoRCxJQUFJLHFCQUE2QixDQUFDO0lBRWxDLG9CQUFvQixHQUFHLElBQUksR0FBRyxFQUFvQixDQUFDO0lBRW5ELElBQUksR0FBRyxHQUFHLHVCQUF1QjtTQUMvQixNQUFNLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUV2QixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTTthQUNqQixPQUFPLENBQUMsZUFBZSxFQUFFLEVBQUUsQ0FBQyxDQUM3QjtRQUVELElBQUksQ0FBQyxHQUFHLG9CQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFMUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUViLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDL0IsQ0FBQyxDQUFDLENBQUM7UUFFSCxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFZixPQUFPLEdBQUcsQ0FBQztJQUNaLENBQUMsRUFBRSxFQUFjLENBQUMsQ0FDbEI7SUFFRCxxQkFBcUIsR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLGlDQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFFM0UsT0FBTztRQUNOLHVCQUF1QjtRQUN2QixvQkFBb0I7UUFDcEIscUJBQXFCO0tBQ3JCLENBQUM7QUFDSCxDQUFDO0FBeENELDhDQXdDQztBQUVELFNBQWdCLGVBQWUsQ0FBQyxLQUFhO0lBRTVDLE9BQU8sNkJBQXFCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO0FBQ3pDLENBQUM7QUFIRCwwQ0FHQztBQUVELFNBQWdCLG9CQUFvQixDQUFDLElBQVk7SUFFaEQsT0FBTyw0QkFBb0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7QUFDdEMsQ0FBQztBQUhELG9EQUdDO0FBRUQsU0FBZ0Isa0JBQWtCLENBQUMsS0FBYTtJQUUvQyxJQUFJLGVBQWUsQ0FBQyxLQUFLLENBQUMsRUFDMUI7UUFDQyxPQUFPLCtCQUF1QjthQUM1QixNQUFNLENBQUMsVUFBVSxLQUFLLEVBQUUsQ0FBQztZQUV6QixPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ2pDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FDUjtLQUNGO0lBRUQsT0FBTyxLQUFLLENBQUE7QUFDYixDQUFDO0FBYkQsZ0RBYUM7QUFFRCxrQkFBZSxPQUFvQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IHVzZXIgb24gMjAxOS81LzkuXG4gKi9cblxuaW1wb3J0IFVTdHJpbmcgZnJvbSAndW5pLXN0cmluZyc7XG5pbXBvcnQgeyBhcnJheV91bmlxdWUgfSBmcm9tICdhcnJheS1oeXBlci11bmlxdWUnO1xuaW1wb3J0IHsgSU9wdGlvbnMgfSBmcm9tICcuL2xpc3QnO1xuXG5leHBvcnQgY29uc3QgeyBfZ3JlZWR5VGFibGVDYWNoZVJlZ2V4cCwgX2dyZWVkeVRhYmxlQ2FjaGVNYXAsIF9ncmVlZHlUYWJsZUNhY2hlVGVzdCB9ID0gX2dyZWVkeVRhYmxlQnVpbGQoW1xuXHRbL1vlmYHmgqrmg6FdL2csICfmgbYnXSxcblx0Wy9b57mL57mr5L+CXS9nLCAn57O7J10sXG5cdFsvW+eziumsjeiRq+ihmualnF0vZywgJ+iDoSddLFxuXHRbL1vlhIXlmbnnlbZdL2csICflvZMnXSxcblx0Wy9b5b6p6KSH6KaGXS9nLCAn5aSNJ10sXG5cdFsvW+WbjOiYh+eUpl0vZywgJ+iLjyddLFxuXHRbL1vmjqHlvannnazouKnln7DntrXkjL1dL2csICfph4cnXSxcblx0Wy9b5ZuJ5ZWw576F45Gp5YS4XS9nLCAn572XJ10sXG5cdFsvW+a1j+eAj+WKiV0vZywgJ+WImCddLFxuXHRbL1vlirXljbflt7vmjbJdL2csICfliLgnXSxcblx0Wy9b5YiS5YqD55WrXS9nLCAn55S7J10sXG5cdFsvW+mspemXmOmsremsql0vZywgJ+aWlyddLFxuXHRbL1vkub7kuoHkubnlubldL2csICflubInXSxcblx0Wy9b5Zuz5Zu+XS9nLCAn5ZyWJ10sXG5cdFsvW+aapuabhuattOatt10vZywgJ+WOhiddLFxuXHRbL1vpuqrpurXpurpdL2csICfpnaInXSxcblx0Wy9b6K6D6K6a6LOb6LSK6LWeXS9nLCAn6LWeJ10sXG5cdFsvW+eZvOmrqumrrl0vZywgJ+WPkSddLFxuXHRbL1vkvq3lhJjnm6FdL2csICflsL0nXSxcblx0Wy9b5YSq5b+n5oaCXS9nLCAn5b+nJ10sXG5cdFsvW+S/seWAtl0vZywgJ+WFtyddLFxuXHRbL1vkuYvnmoTlvpddL2csICfjga4nXSxcblx0Wy9b6IiH5LiOXS9nLCAn44GoJ10sXG5cdFsvW+WlueS7lueJoOelguS9l10vZywgJ+WugyddLFxuXHRbL1vmlK/pmrvmnp1dL2csICflj6onXSxcblx0Wy9b54Ku56Cy54KwXS9nLCAn5rOhJ10sXG5cdFsvW+S7suOKpV0vZywgJ+S4rSddLFxuXHRbL1vljp9dL2csICflhYMnXSxcblx0Wy9b6L+05bu7XS9nLCAn5ZueJ10sXG5cdFsvW+S5vuS6geS5ueW5uV0vZywgJ+W5siddLFxuXHRbL1vpgb/pl6JdL2csICfovp8nXSxcblx0Wy9b5ru36bm15Y2k6bKBXS9nLCAn6a2vJ10sXG5cdFsvW+aqr+iHuumiseWEk10vZywgJ+WPsCddLFxuXHRbL1vlrrvnpZXnp5hdL2csICflr4YnXSxcblx0Wy9b6KyO6LCcXS9nLCAn6L+3J10sXG5cdFsvW+egguiOjue0l+e6sV0vZywgJ+aymSddLFxuXHRbL1vnt6jnr4fnvJZdL2csICfnr4cnXSxcblx0Wy9b5Ya2XS9nLCAn5rK7J10sXG5cdFsvW+eCvOeFiemMrOmNivCrlIDnt7Tnu4NdL3VnLCAn57e0J10sXG5cdFsvW+S6nuS6muWpreWoheakj+ahoOS6nF0vdWcsICfkuponXSxcblx0Wy9b5aGe6LO9XS91ZywgJ+i1myddLFxuXHRbL1vohb7pqLDnsZDnsZhdL3VnLCAn6JekJ10sXG5cdFsvW+Wms+elouemsF0vdWcsICfkvaAnXSxcblx0Wy9b5Zaw6aOg4rue6aOnXS91ZywgJ+mjnyddLFxuXHRbL1vnkarppqznjpvpqaxdL3VnLCAn6amsJ10sXG5cdFsvW+mkuOmkml0vdWcsICfppJonXSxcblx0Wy9b6KO4XS91ZywgJ+aenCddLFxuXHRbL1vlh7Hlh6/pjqfpk6BdL3VnLCAn5YexJ10sXG5cdFsvW+W4lui0tF0vdWcsICfosrwnXSxcblx0Wy9b55SaXS91ZywgJ+S7gCddLFxuXHRbL1voga/ogZTpgKPov55dL3VnLCAn6YCjJ10sXG5cdFsvW+WDj10vdWcsICfosaEnXSxcblx0Wy9b6JeJXS91ZywgJ+WAnyddLFxuXHRbL1volb5dL3VnLCAn6Zu3J10sXG5cdFsvW+ioguiuoumHmOmSiV0vdWcsICflrponXSxcblx0Wy9b5ZquXS91ZywgJ+WQkSddLFxuXHRbL1vns7jns7nkuJ1dL3VnLCAn57WyJ10sXG5cdFsvW+etkl0vdWcsICfmobYnXSxcblx0Wy9b5YW5546G5ruLXS91ZywgJ+iMsiddLFxuXHRbL1vlkZDoqKXorrddL3VnLCAn5ZC2J10sXG5cdFsvW+epgOezk10vdWcsICfosLcnXSxcblx0Wy9b5Lik5YWp5YCG5L+pXS91ZywgJ+S4oSddLFxuXHRbL1vluLPos6zotKZdL3VnLCAn5biQJ10sXG5cdFsvW+eJiOmXhl0vdWcsICfmnb8nXSxcblx0Wy9b5b6FXS91ZywgJ+WRhiddLFxuXHRbL1vnhpTpjpTplZXono3ono5dL3VnLCAn5rq2J10sXG5cdFsvW+WMr+axh10vdWcsICflvZknXSxcblx0Wy9b5b2/5LuPXS91ZywgJ+S9myddLFxuXHRbL1vpmL9dL3VnLCAn5ZWKJ10sXG5cdFsvW+Wutl0vdWcsICflgqInXSxcblx0Wy9b54iGXS91ZywgJ+aatCddLFxuXHRbL1vntrLki4Tki57ntrHnurJdL3VnLCAn572RJ10sXG5cdFsvW+iou10vdWcsICfms6gnXSxcblx0Wy9b54GM6LSv5r2FXS91ZywgJ+iyqyddLFxuXHRbL1vlgJJdL3VnLCAn5YiwJ10sXG5cdFsvW+enpF0vdWcsICflubMnXSxcblx0Wy9b5Yub5Yuy5YuzXS91ZywgJ+WLiyddLFxuXHRbL1vpupfkuL3ojoldL3VnLCAn5YipJ10sXG5cdFsvW+W3suW3s10vdWcsICflt7EnXSxcblx0Wy9b5ZesXS91ZywgJ+WRtSddLFxuXHRbL1vlk4rlk5/llLfllLnllrJdL3VnLCAn5ZGmJ10sXG5cdFsvW+WpleadsOa0gea9lOe1nF0vdWcsICflgpEnXSxcblx0Wy9b5Zi7XS91ZywgJ+WsiSddLFxuXHRbL1vnl7Lnl7PpurtdL3VnLCAn5ZibJ10sXG5cdFsvW+eLl10vdWcsICfniqwnXSxcblx0Wy9b5b2/5ouCXS91ZywgJ+S9myddLFxuXHRbL1vkupnmgYbmgZJdL3VnLCAn5LqYJ10sXG5cdFsvW+mZhOWJr10vdWcsICfku5gnXSxcblx0Wy9b5Ly95p6354+I6L+mXS91ZywgJ+WKoCddLFxuXHRbL1vopJRdL3VnLCAn56aPJ10sXG5cdFsvW+aNsV0vdWcsICfmjKgnXSxcblx0Wy9b5ou8XS91ZywgJ+aLmiddLFxuXHRbL1vpo4Tpo5jpo4NdL3VnLCAn5ryCJ10sXG5cdFsvW+S9lOayvl0vdWcsICfljaAnXSxcblx0Wy9b5rCX5rCj5rG95ruK54KBXS91ZywgJ+awlCddLFxuXHRbL1vmkqnpgbxdL3VnLCAn6L69J10sXG5cdFsvW+WBml0vdWcsICfkvZwnXSxcblx0Wy9b5pCc5o2cXS91ZywgJ+iSkCddLFxuXHRbL1vlj5/lgoFdL3VnLCAn5Y+fJ10sXG5cdFsvW+isneiwol0vdWcsICfmpq0nXSxcblx0Wy9b5b2iXS91ZywgJ+WeiyddLFxuXHRbL1vpm4fpoIvpoafpob5dL3VnLCAn5YOxJ10sXG5cdFsvW+W7rOiKpuiYhl0vdWcsICflupAnXSxcblx0Wy9b6IC96LqtXS91ZywgJ+eciCddLFxuXHRbL1vlgrnnq5/nq7bnq7joqqnwpaqw8Kehn/Cnq5jwp6uZ8Keuo/CokLxdL3VnLCAn56ueJ10sXG5cdFsvW+aull0vdWcsICfmpI0nXSxcblx0Wy9b5L2s5aelXS91ZywgJ+iAgSddLFxuXHRbL1vlgJZdL3VnLCAn5bm4J10sXG5cdFsvW+OgqueCrOefqemJhV0vdWcsICflt6gnXSxcblx0Wy9b6Y+I6ZO+54K86Yys6Y2K8KuUgOSDm/Cnua/nt7Tnu4PpgKPov55dL3VnLCAn54WJJ10sXG5cdFsvW+WItOWJgeWJkOWJruWKj10vdWcsICfjk6UnXSxcblx0Wy9b5p6P5qWgXS91ZywgJ+WNlyddLFxuXHRbL1vnkpDwob2Y8KixtF0vdWcsICfot68nXSxcblx0Wy9b5L6C5ouT5p2U6KiX6K6s5ouW5ouVXS91ZywgJ+aJmCddLFxuXHRbL1vmgpXnnY7nqIBdL3VnLCAn5biMJ10sXG5cdFsvW+W4vOW5l+WbveWci10vdWcsICflm68nXSxcblx0Wy9b6L+UXS91ZywgJ+WPjSddLFxuXHRbL1vpmb3pmLNdL3VnLCAn5L2vJ10sXG5cdFsvW+adpeiOseiQil0vdWcsICfkvoYnXSxcblx0Wy9b6JGG5aCh6KST57elXS91ZywgJ+S/nSddLFxuXHRbL1vmuKFdL3VnLCAn5bqmJ10sXG5cdFsvW+WJs+acreeumue0rl0vdWcsICfmiY4nXSxcblx0Wy9b5rmc5o+Q6ZqEXS91ZywgJ+WgpCddLFxuXHRbL1voh5jonKHooJ9dL3VnLCAn6IWKJ10sXG5cdFsvW+mssfComrzwqJ+dXS91ZywgJ+mDgSddLFxuXHRbL1vmk4DmnYbmob9dL3VnLCAn5omeJ10sXG5cdFsvW+iEvOmDnvClh5FdL3VnLCAn6YOOJ10sXG5cdFsvW+iKrV0vdWcsICflt7QnXSxcblx0Wy9b5raF5rm8XS91ZywgJ+aNjyddLFxuXHRbL1vmi6nmk4fmsqLms73mvqRdL3VnLCAn5oqeJ10sXG5cdFsvW+W5temWi10vdWcsICflvIAnXSxcblx0Wy9b54+uXS91ZywgJ+S9qSddLFxuXHRbL1vllqnnsbLpvqVdL3VnLCAn5Za7J10sXG5cdFsvW+WAvF0vdWcsICflgKQnXSxcblx0Wy9b6IeT6Ief6LST6LWD6auSXS91ZywgJ+iEjyddLFxuXHRbL1vjiqRdL3VnLCAn5LiKJ10sXG5cdFsvW+OKpl0vdWcsICfkuIsnXSxcblx0Wy9b5ZS/XS91ZywgJ+WRvCddLFxuXHRbL1voqbPor6ZdL3VnLCAn56WlJ10sXG5cdFsvW+WmruazpV0vdWcsICflsLwnXSxcblx0Wy9b5YmL5bCFXS91ZywgJ+WFiyddLFxuXHRbL1vmkqXmkq1dL3VnLCAn5ouoJ10sXG5cdFsvW+aMv+aPt10vdWcsICfmj5InXSxcblx0Wy9b5rGAXS91ZywgJ+S4gSddLFxuXHRbL1vpgqNdL3VnLCAn5aicJ10sXG5cdFsvW+iPiF0vdWcsICfmi4knXSxcblx0Wy9b546y55Cz6Yi06ZODXS91ZywgJ+aelyddLFxuXSk7XG5cbi8vY29uc29sZS5sb2coX2dyZWVkeVRhYmxlQ2FjaGVUZXN0KTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9ncmVlZHlUYWJsZUJ1aWxkKGRhdGE6IFtSZWdFeHAsIHN0cmluZ11bXSk6IHtcblx0X2dyZWVkeVRhYmxlQ2FjaGVSZWdleHA6IHJlYWRvbmx5IChyZWFkb25seSBbUmVnRXhwLCBzdHJpbmddKVtdO1xuXHRfZ3JlZWR5VGFibGVDYWNoZU1hcDogTWFwPHN0cmluZywgcmVhZG9ubHkgc3RyaW5nW10+O1xuXHRfZ3JlZWR5VGFibGVDYWNoZVRlc3Q6IFJlZ0V4cDtcbn1cbntcblx0Y29uc3QgX2dyZWVkeVRhYmxlQ2FjaGVSZWdleHA6IFtSZWdFeHAsIHN0cmluZ11bXSA9IGRhdGE7XG5cblx0bGV0IF9ncmVlZHlUYWJsZUNhY2hlTWFwOiBNYXA8c3RyaW5nLCBzdHJpbmdbXT47XG5cdGxldCBfZ3JlZWR5VGFibGVDYWNoZVRlc3Q6IFJlZ0V4cDtcblxuXHRfZ3JlZWR5VGFibGVDYWNoZU1hcCA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmdbXT4oKTtcblxuXHRsZXQgYXJyID0gX2dyZWVkeVRhYmxlQ2FjaGVSZWdleHBcblx0XHQucmVkdWNlKGZ1bmN0aW9uIChhcnIsIHIpXG5cdFx0e1xuXHRcdFx0bGV0IHMgPSByWzBdLnNvdXJjZVxuXHRcdFx0XHQucmVwbGFjZSgvXi4qXFxbfFxcXS4qJC91ZywgJycpXG5cdFx0XHQ7XG5cblx0XHRcdGxldCBhID0gVVN0cmluZy5zcGxpdChzLCAnJykuY29uY2F0KHJbMV0pO1xuXG5cdFx0XHRhLmZvckVhY2goYyA9PlxuXHRcdFx0e1xuXHRcdFx0XHRfZ3JlZWR5VGFibGVDYWNoZU1hcC5zZXQoYywgYSlcblx0XHRcdH0pO1xuXG5cdFx0XHRhcnIucHVzaCguLi5hKTtcblxuXHRcdFx0cmV0dXJuIGFycjtcblx0XHR9LCBbXSBhcyBzdHJpbmdbXSlcblx0O1xuXG5cdF9ncmVlZHlUYWJsZUNhY2hlVGVzdCA9IG5ldyBSZWdFeHAoYFske2FycmF5X3VuaXF1ZShhcnIpLmpvaW4oJycpfV1gLCAndScpO1xuXG5cdHJldHVybiB7XG5cdFx0X2dyZWVkeVRhYmxlQ2FjaGVSZWdleHAsXG5cdFx0X2dyZWVkeVRhYmxlQ2FjaGVNYXAsXG5cdFx0X2dyZWVkeVRhYmxlQ2FjaGVUZXN0LFxuXHR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ3JlZWR5VGFibGVUZXN0KGlucHV0OiBzdHJpbmcpXG57XG5cdHJldHVybiBfZ3JlZWR5VGFibGVDYWNoZVRlc3QudGVzdChpbnB1dClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdyZWVkeVRhYmxlQ2hhckFycmF5KGNoYXI6IHN0cmluZylcbntcblx0cmV0dXJuIF9ncmVlZHlUYWJsZUNhY2hlTWFwLmdldChjaGFyKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ3JlZWR5VGFibGVSZXBsYWNlKGlucHV0OiBzdHJpbmcpOiBzdHJpbmdcbntcblx0aWYgKGdyZWVkeVRhYmxlVGVzdChpbnB1dCkpXG5cdHtcblx0XHRyZXR1cm4gX2dyZWVkeVRhYmxlQ2FjaGVSZWdleHBcblx0XHRcdC5yZWR1Y2UoZnVuY3Rpb24gKGlucHV0LCByKVxuXHRcdFx0e1xuXHRcdFx0XHRyZXR1cm4gaW5wdXQucmVwbGFjZShyWzBdLCByWzFdKVxuXHRcdFx0fSwgaW5wdXQpXG5cdFx0XHQ7XG5cdH1cblxuXHRyZXR1cm4gaW5wdXRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZXhwb3J0cyBhcyB0eXBlb2YgaW1wb3J0KCcuL2dyZWVkeScpO1xuIl19
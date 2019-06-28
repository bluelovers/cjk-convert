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
    [/[附]/ug, '付'],
    [/[伽枷珈迦]/ug, '加'],
    [/[褔]/ug, '福'],
    [/[捱]/ug, '挨'],
    [/[拼]/ug, '拚'],
    [/[飄飘飃]/ug, '漂'],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JlZWR5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ3JlZWR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7R0FFRzs7O0FBRUgsMkNBQWlDO0FBQ2pDLDJEQUFrRDtBQUdyQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQThGWCxpTEFBQztBQUVILHFDQUFxQztBQUVyQyxTQUFnQixpQkFBaUIsQ0FBQyxJQUF3QjtJQU16RCxNQUFNLHVCQUF1QixHQUF1QixJQUFJLENBQUM7SUFFekQsSUFBSSxvQkFBMkMsQ0FBQztJQUNoRCxJQUFJLHFCQUE2QixDQUFDO0lBRWxDLG9CQUFvQixHQUFHLElBQUksR0FBRyxFQUFvQixDQUFDO0lBRW5ELElBQUksR0FBRyxHQUFHLHVCQUF1QjtTQUMvQixNQUFNLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUV2QixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTTthQUNqQixPQUFPLENBQUMsZUFBZSxFQUFFLEVBQUUsQ0FBQyxDQUM3QjtRQUVELElBQUksQ0FBQyxHQUFHLG9CQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFMUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUViLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDL0IsQ0FBQyxDQUFDLENBQUM7UUFFSCxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFZixPQUFPLEdBQUcsQ0FBQztJQUNaLENBQUMsRUFBRSxFQUFjLENBQUMsQ0FDbEI7SUFFRCxxQkFBcUIsR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLGlDQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFFM0UsT0FBTztRQUNOLHVCQUF1QjtRQUN2QixvQkFBb0I7UUFDcEIscUJBQXFCO0tBQ3JCLENBQUM7QUFDSCxDQUFDO0FBeENELDhDQXdDQztBQUVELFNBQWdCLGVBQWUsQ0FBQyxLQUFhO0lBRTVDLE9BQU8sNkJBQXFCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO0FBQ3pDLENBQUM7QUFIRCwwQ0FHQztBQUVELFNBQWdCLG9CQUFvQixDQUFDLElBQVk7SUFFaEQsT0FBTyw0QkFBb0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7QUFDdEMsQ0FBQztBQUhELG9EQUdDO0FBRUQsU0FBZ0Isa0JBQWtCLENBQUMsS0FBYTtJQUUvQyxJQUFJLGVBQWUsQ0FBQyxLQUFLLENBQUMsRUFDMUI7UUFDQyxPQUFPLCtCQUF1QjthQUM1QixNQUFNLENBQUMsVUFBVSxLQUFLLEVBQUUsQ0FBQztZQUV6QixPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ2pDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FDUjtLQUNGO0lBRUQsT0FBTyxLQUFLLENBQUE7QUFDYixDQUFDO0FBYkQsZ0RBYUM7QUFFRCxrQkFBZSxPQUFvQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IHVzZXIgb24gMjAxOS81LzkuXG4gKi9cblxuaW1wb3J0IFVTdHJpbmcgZnJvbSAndW5pLXN0cmluZyc7XG5pbXBvcnQgeyBhcnJheV91bmlxdWUgfSBmcm9tICdhcnJheS1oeXBlci11bmlxdWUnO1xuaW1wb3J0IHsgSU9wdGlvbnMgfSBmcm9tICcuL2xpc3QnO1xuXG5leHBvcnQgY29uc3QgeyBfZ3JlZWR5VGFibGVDYWNoZVJlZ2V4cCwgX2dyZWVkeVRhYmxlQ2FjaGVNYXAsIF9ncmVlZHlUYWJsZUNhY2hlVGVzdCB9ID0gX2dyZWVkeVRhYmxlQnVpbGQoW1xuXHRbL1vlmYHmgqrmg6FdL2csICfmgbYnXSxcblx0Wy9b57mL57mr5L+CXS9nLCAn57O7J10sXG5cdFsvW+eziumsjV0vZywgJ+iDoSddLFxuXHRbL1vlhIXlmbnnlbZdL2csICflvZMnXSxcblx0Wy9b5b6p6KSH6KaGXS9nLCAn5aSNJ10sXG5cdFsvW+WbjOiYh+eUpl0vZywgJ+iLjyddLFxuXHRbL1vmjqHlvannnazouKnln7DntrXkjL1dL2csICfph4cnXSxcblx0Wy9b5ZuJ5ZWw576F45Gp5YS4XS9nLCAn572XJ10sXG5cdFsvW+a1j+eAj+WKiV0vZywgJ+WImCddLFxuXHRbL1vlirXljbflt7vmjbJdL2csICfliLgnXSxcblx0Wy9b5YiS5YqD55WrXS9nLCAn55S7J10sXG5cdFsvW+mspemXmOmsremsql0vZywgJ+aWlyddLFxuXHRbL1vkub7kuoHkubnlubldL2csICflubInXSxcblx0Wy9b5Zuz5Zu+XS9nLCAn5ZyWJ10sXG5cdFsvW+aapuabhuattOatt10vZywgJ+WOhiddLFxuXHRbL1vpuqrpurXpurpdL2csICfpnaInXSxcblx0Wy9b6K6D6K6a6LOb6LSK6LWeXS9nLCAn6LWeJ10sXG5cdFsvW+eZvOmrqumrrl0vZywgJ+WPkSddLFxuXHRbL1vkvq3lhJjnm6FdL2csICflsL0nXSxcblx0Wy9b5YSq5b+n5oaCXS9nLCAn5b+nJ10sXG5cdFsvW+S/seWAtl0vZywgJ+WFtyddLFxuXHRbL1vkuYvnmoTlvpddL2csICfjga4nXSxcblx0Wy9b6IiH5LiOXS9nLCAn44GoJ10sXG5cdFsvW+WlueS7lueJoOelguS9l10vZywgJ+WugyddLFxuXHRbL1vmlK/pmrvmnp1dL2csICflj6onXSxcblx0Wy9b54Ku56Cy54KwXS9nLCAn5rOhJ10sXG5cdFsvW+S7sl0vZywgJ+S4rSddLFxuXHRbL1vljp9dL2csICflhYMnXSxcblx0Wy9b6L+05bu7XS9nLCAn5ZueJ10sXG5cdFsvW+S5vuS6geS5ueW5uV0vZywgJ+W5siddLFxuXHRbL1vpgb/pl6JdL2csICfovp8nXSxcblx0Wy9b5ru36bm15Y2k6bKBXS9nLCAn6a2vJ10sXG5cdFsvW+aqr+iHuumiseWEk10vZywgJ+WPsCddLFxuXHRbL1vlrrvnpZXnp5hdL2csICflr4YnXSxcblx0Wy9b6KyO6LCcXS9nLCAn6L+3J10sXG5cdFsvW+egguiOjl0vZywgJ+aymSddLFxuXHRbL1vnt6jnr4fnvJZdL2csICfnr4cnXSxcblx0Wy9b5Ya2XS9nLCAn5rK7J10sXG5cdFsvW+eCvOeFiemMrOmNivCrlIDnt7Tnu4NdL3VnLCAn57e0J10sXG5cdFsvW+S6nuS6muWpreWohV0vdWcsICfkuponXSxcblx0Wy9b5aGe6LO9XS91ZywgJ+i1myddLFxuXHRbL1vohb7pqLDnsZDnsZhdL3VnLCAn6JekJ10sXG5cdFsvW+Wms+elouemsF0vdWcsICfkvaAnXSxcblx0Wy9b5Zaw6aOg4rue6aOnXS91ZywgJ+mjnyddLFxuXHRbL1vnkarppqznjpvpqaxdL3VnLCAn6amsJ10sXG5cdFsvW+mkuOmkml0vdWcsICfppJonXSxcblx0Wy9b6KO4XS91ZywgJ+aenCddLFxuXHRbL1vlh7Hlh6/pjqfpk6BdL3VnLCAn5YexJ10sXG5cdFsvW+W4lui0tF0vdWcsICfosrwnXSxcblx0Wy9b55SaXS91ZywgJ+S7gCddLFxuXHRbL1voga/ogZTpgKPov55dL3VnLCAn6YCjJ10sXG5cdFsvW+WDj10vdWcsICfosaEnXSxcblx0Wy9b6JeJXS91ZywgJ+WAnyddLFxuXHRbL1volb5dL3VnLCAn6Zu3J10sXG5cdFsvW+ioguiuol0vdWcsICflrponXSxcblx0Wy9b5ZquXS91ZywgJ+WQkSddLFxuXHRbL1vns7jns7nkuJ1dL3VnLCAn57WyJ10sXG5cdFsvW+etkl0vdWcsICfmobYnXSxcblx0Wy9b5YW5546G5ruLXS91ZywgJ+iMsiddLFxuXHRbL1vlkZDoqKXorrddL3VnLCAn5ZC2J10sXG5cdFsvW+epgOezk10vdWcsICfosLcnXSxcblx0Wy9b5Lik5YWp5YCG5L+pXS91ZywgJ+S4oSddLFxuXHRbL1vluLPos6zotKZdL3VnLCAn5biQJ10sXG5cdFsvW+eJiOmXhl0vdWcsICfmnb8nXSxcblx0Wy9b5b6FXS91ZywgJ+WRhiddLFxuXHRbL1vnhpTpjpTplZXono3ono5dL3VnLCAn5rq2J10sXG5cdFsvW+WMr+axh10vdWcsICflvZknXSxcblx0Wy9b5b2/5LuPXS91ZywgJ+S9myddLFxuXHRbL1vpmL9dL3VnLCAn5ZWKJ10sXG5cdFsvW+Wutl0vdWcsICflgqInXSxcblx0Wy9b54iGXS91ZywgJ+aatCddLFxuXHRbL1vntrLki4Tki57ntrHnurJdL3VnLCAn572RJ10sXG5cdFsvW+iou10vdWcsICfms6gnXSxcblx0Wy9b54GM6LSv5r2FXS91ZywgJ+iyqyddLFxuXHRbL1vlgJJdL3VnLCAn5YiwJ10sXG5cdFsvW+enpF0vdWcsICflubMnXSxcblx0Wy9b5Yub5Yuy5YuzXS91ZywgJ+WLiyddLFxuXHRbL1vpupfkuL3ojoldL3VnLCAn5YipJ10sXG5cdFsvW+W3suW3s10vdWcsICflt7EnXSxcblx0Wy9b5ZesXS91ZywgJ+WRtSddLFxuXHRbL1vlk4rlk5/llLfllLnllrJdL3VnLCAn5ZGmJ10sXG5cdFsvW+adsOa9lOa0gV0vdWcsICflgpEnXSxcblx0Wy9b5Zi7XS91ZywgJ+WsiSddLFxuXHRbL1vnl7Lnl7PpurtdL3VnLCAn5ZibJ10sXG5cdFsvW+eLl10vdWcsICfniqwnXSxcblx0Wy9b5b2/5ouCXS91ZywgJ+S9myddLFxuXHRbL1vkupnmgYbmgZJdL3VnLCAn5LqYJ10sXG5cdFsvW+mZhF0vdWcsICfku5gnXSxcblx0Wy9b5Ly95p6354+I6L+mXS91ZywgJ+WKoCddLFxuXHRbL1vopJRdL3VnLCAn56aPJ10sXG5cdFsvW+aNsV0vdWcsICfmjKgnXSxcblx0Wy9b5ou8XS91ZywgJ+aLmiddLFxuXHRbL1vpo4Tpo5jpo4NdL3VnLCAn5ryCJ10sXG5dKTtcblxuLy9jb25zb2xlLmxvZyhfZ3JlZWR5VGFibGVDYWNoZVRlc3QpO1xuXG5leHBvcnQgZnVuY3Rpb24gX2dyZWVkeVRhYmxlQnVpbGQoZGF0YTogW1JlZ0V4cCwgc3RyaW5nXVtdKToge1xuXHRfZ3JlZWR5VGFibGVDYWNoZVJlZ2V4cDogcmVhZG9ubHkgKHJlYWRvbmx5IFtSZWdFeHAsIHN0cmluZ10pW107XG5cdF9ncmVlZHlUYWJsZUNhY2hlTWFwOiBNYXA8c3RyaW5nLCByZWFkb25seSBzdHJpbmdbXT47XG5cdF9ncmVlZHlUYWJsZUNhY2hlVGVzdDogUmVnRXhwO1xufVxue1xuXHRjb25zdCBfZ3JlZWR5VGFibGVDYWNoZVJlZ2V4cDogW1JlZ0V4cCwgc3RyaW5nXVtdID0gZGF0YTtcblxuXHRsZXQgX2dyZWVkeVRhYmxlQ2FjaGVNYXA6IE1hcDxzdHJpbmcsIHN0cmluZ1tdPjtcblx0bGV0IF9ncmVlZHlUYWJsZUNhY2hlVGVzdDogUmVnRXhwO1xuXG5cdF9ncmVlZHlUYWJsZUNhY2hlTWFwID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZ1tdPigpO1xuXG5cdGxldCBhcnIgPSBfZ3JlZWR5VGFibGVDYWNoZVJlZ2V4cFxuXHRcdC5yZWR1Y2UoZnVuY3Rpb24gKGFyciwgcilcblx0XHR7XG5cdFx0XHRsZXQgcyA9IHJbMF0uc291cmNlXG5cdFx0XHRcdC5yZXBsYWNlKC9eLipcXFt8XFxdLiokL3VnLCAnJylcblx0XHRcdDtcblxuXHRcdFx0bGV0IGEgPSBVU3RyaW5nLnNwbGl0KHMsICcnKS5jb25jYXQoclsxXSk7XG5cblx0XHRcdGEuZm9yRWFjaChjID0+XG5cdFx0XHR7XG5cdFx0XHRcdF9ncmVlZHlUYWJsZUNhY2hlTWFwLnNldChjLCBhKVxuXHRcdFx0fSk7XG5cblx0XHRcdGFyci5wdXNoKC4uLmEpO1xuXG5cdFx0XHRyZXR1cm4gYXJyO1xuXHRcdH0sIFtdIGFzIHN0cmluZ1tdKVxuXHQ7XG5cblx0X2dyZWVkeVRhYmxlQ2FjaGVUZXN0ID0gbmV3IFJlZ0V4cChgWyR7YXJyYXlfdW5pcXVlKGFycikuam9pbignJyl9XWAsICd1Jyk7XG5cblx0cmV0dXJuIHtcblx0XHRfZ3JlZWR5VGFibGVDYWNoZVJlZ2V4cCxcblx0XHRfZ3JlZWR5VGFibGVDYWNoZU1hcCxcblx0XHRfZ3JlZWR5VGFibGVDYWNoZVRlc3QsXG5cdH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBncmVlZHlUYWJsZVRlc3QoaW5wdXQ6IHN0cmluZylcbntcblx0cmV0dXJuIF9ncmVlZHlUYWJsZUNhY2hlVGVzdC50ZXN0KGlucHV0KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ3JlZWR5VGFibGVDaGFyQXJyYXkoY2hhcjogc3RyaW5nKVxue1xuXHRyZXR1cm4gX2dyZWVkeVRhYmxlQ2FjaGVNYXAuZ2V0KGNoYXIpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBncmVlZHlUYWJsZVJlcGxhY2UoaW5wdXQ6IHN0cmluZyk6IHN0cmluZ1xue1xuXHRpZiAoZ3JlZWR5VGFibGVUZXN0KGlucHV0KSlcblx0e1xuXHRcdHJldHVybiBfZ3JlZWR5VGFibGVDYWNoZVJlZ2V4cFxuXHRcdFx0LnJlZHVjZShmdW5jdGlvbiAoaW5wdXQsIHIpXG5cdFx0XHR7XG5cdFx0XHRcdHJldHVybiBpbnB1dC5yZXBsYWNlKHJbMF0sIHJbMV0pXG5cdFx0XHR9LCBpbnB1dClcblx0XHRcdDtcblx0fVxuXG5cdHJldHVybiBpbnB1dFxufVxuXG5leHBvcnQgZGVmYXVsdCBleHBvcnRzIGFzIHR5cGVvZiBpbXBvcnQoJy4vZ3JlZWR5Jyk7XG4iXX0=
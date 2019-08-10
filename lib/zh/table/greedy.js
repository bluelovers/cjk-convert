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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JlZWR5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ3JlZWR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7R0FFRzs7O0FBRUgsMkNBQWlDO0FBQ2pDLDJEQUFrRDtBQUdyQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUF3TFgsaUxBQUM7QUFFSCxxQ0FBcUM7QUFFckMsU0FBZ0IsaUJBQWlCLENBQUMsSUFBd0I7SUFNekQsTUFBTSx1QkFBdUIsR0FBdUIsSUFBSSxDQUFDO0lBRXpELElBQUksb0JBQTJDLENBQUM7SUFDaEQsSUFBSSxxQkFBNkIsQ0FBQztJQUVsQyxvQkFBb0IsR0FBRyxJQUFJLEdBQUcsRUFBb0IsQ0FBQztJQUVuRCxJQUFJLEdBQUcsR0FBRyx1QkFBdUI7U0FDL0IsTUFBTSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFFdkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU07YUFDakIsT0FBTyxDQUFDLGVBQWUsRUFBRSxFQUFFLENBQUMsQ0FDN0I7UUFFRCxJQUFJLENBQUMsR0FBRyxvQkFBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFFYixvQkFBb0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQy9CLENBQUMsQ0FBQyxDQUFDO1FBRUgsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRWYsT0FBTyxHQUFHLENBQUM7SUFDWixDQUFDLEVBQUUsRUFBYyxDQUFDLENBQ2xCO0lBRUQscUJBQXFCLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxpQ0FBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBRTNFLE9BQU87UUFDTix1QkFBdUI7UUFDdkIsb0JBQW9CO1FBQ3BCLHFCQUFxQjtLQUNyQixDQUFDO0FBQ0gsQ0FBQztBQXhDRCw4Q0F3Q0M7QUFFRCxTQUFnQixlQUFlLENBQUMsS0FBYTtJQUU1QyxPQUFPLDZCQUFxQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtBQUN6QyxDQUFDO0FBSEQsMENBR0M7QUFFRCxTQUFnQixvQkFBb0IsQ0FBQyxJQUFZO0lBRWhELE9BQU8sNEJBQW9CLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO0FBQ3RDLENBQUM7QUFIRCxvREFHQztBQUVELFNBQWdCLGtCQUFrQixDQUFDLEtBQWE7SUFFL0MsSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDLEVBQzFCO1FBQ0MsT0FBTywrQkFBdUI7YUFDNUIsTUFBTSxDQUFDLFVBQVUsS0FBSyxFQUFFLENBQUM7WUFFekIsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNqQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQ1I7S0FDRjtJQUVELE9BQU8sS0FBSyxDQUFBO0FBQ2IsQ0FBQztBQWJELGdEQWFDO0FBRUQsa0JBQWUsT0FBb0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSB1c2VyIG9uIDIwMTkvNS85LlxuICovXG5cbmltcG9ydCBVU3RyaW5nIGZyb20gJ3VuaS1zdHJpbmcnO1xuaW1wb3J0IHsgYXJyYXlfdW5pcXVlIH0gZnJvbSAnYXJyYXktaHlwZXItdW5pcXVlJztcbmltcG9ydCB7IElPcHRpb25zIH0gZnJvbSAnLi9saXN0JztcblxuZXhwb3J0IGNvbnN0IHsgX2dyZWVkeVRhYmxlQ2FjaGVSZWdleHAsIF9ncmVlZHlUYWJsZUNhY2hlTWFwLCBfZ3JlZWR5VGFibGVDYWNoZVRlc3QgfSA9IF9ncmVlZHlUYWJsZUJ1aWxkKFtcblxuXHRbL1vlmYHmgqrmg6FdL2csICfmgbYnXSxcblx0Wy9b57mL57mr5L+CXS9nLCAn57O7J10sXG5cdFsvW+eziumsjeiRq+ihmualnF0vZywgJ+iDoSddLFxuXHRbL1vlhIXlmbnnlbZdL2csICflvZMnXSxcblx0Wy9b5b6p6KSH6KaGXS9nLCAn5aSNJ10sXG5cdFsvW+WbjOiYh+eUpl0vZywgJ+iLjyddLFxuXHRbL1vmjqHlvannnazouKnln7DntrXkjL1dL2csICfph4cnXSxcblx0Wy9b5ZuJ5ZWw576F45Gp5YS4XS9nLCAn572XJ10sXG5cdFsvW+a1j+eAj+WKiV0vZywgJ+WImCddLFxuXHRbL1vlirXljbflt7vmjbJdL2csICfliLgnXSxcblx0Wy9b5YiS5YqD55WrXS9nLCAn55S7J10sXG5cdFsvW+mspemXmOmsremsql0vZywgJ+aWlyddLFxuXHRbL1vkub7kuoHkubnlubldL2csICflubInXSxcblx0Wy9b5Zuz5Zu+XS9nLCAn5ZyWJ10sXG5cdFsvW+aapuabhuattOatt10vZywgJ+WOhiddLFxuXHRbL1vpuqrpurXpurpdL2csICfpnaInXSxcblx0Wy9b6K6D6K6a6LOb6LSK6LWeXS9nLCAn6LWeJ10sXG5cdFsvW+eZvOmrqumrrl0vZywgJ+WPkSddLFxuXHRbL1vkvq3lhJjnm6FdL2csICflsL0nXSxcblx0Wy9b5YSq5b+n5oaCXS9nLCAn5b+nJ10sXG5cdFsvW+S/seWAtl0vZywgJ+WFtyddLFxuXHRbL1vkuYvnmoTlvpddL2csICfjga4nXSxcblx0Wy9b6IiH5LiOXS9nLCAn44GoJ10sXG5cdFsvW+WlueS7lueJoOelguS9l10vZywgJ+WugyddLFxuXHRbL1vmlK/pmrvmnp1dL2csICflj6onXSxcblx0Wy9b54Ku56Cy54KwXS9nLCAn5rOhJ10sXG5cdFsvW+S7suOKpV0vZywgJ+S4rSddLFxuXHRbL1vljp9dL2csICflhYMnXSxcblx0Wy9b6L+05bu7XS9nLCAn5ZueJ10sXG5cdFsvW+S5vuS6geS5ueW5uV0vZywgJ+W5siddLFxuXHRbL1vpgb/pl6JdL2csICfovp8nXSxcblx0Wy9b5ru36bm15Y2k6bKBXS9nLCAn6a2vJ10sXG5cdFsvW+aqr+iHuumiseWEk10vZywgJ+WPsCddLFxuXHRbL1vlrrvnpZXnp5hdL2csICflr4YnXSxcblx0Wy9b6KyO6LCcXS9nLCAn6L+3J10sXG5cdFsvW+egguiOjue0l+e6sV0vZywgJ+aymSddLFxuXHRbL1vnt6jnr4fnvJZdL2csICfnr4cnXSxcblx0Wy9b5Ya2XS9nLCAn5rK7J10sXG5cdFsvW+eCvOeFiemMrOmNivCrlIDnt7Tnu4NdL3VnLCAn57e0J10sXG5cdFsvW+S6nuS6muWpreWoheakj+ahoOS6nF0vdWcsICfkuponXSxcblx0Wy9b5aGe6LO9XS91ZywgJ+i1myddLFxuXHRbL1vohb7pqLDnsZDnsZhdL3VnLCAn6JekJ10sXG5cdFsvW+Wms+elouemsF0vdWcsICfkvaAnXSxcblx0Wy9b5Zaw6aOg4rue6aOnXS91ZywgJ+mjnyddLFxuXHRbL1vnkarppqznjpvpqaxdL3VnLCAn6amsJ10sXG5cdFsvW+mkuOmkml0vdWcsICfppJonXSxcblx0Wy9b6KO4XS91ZywgJ+aenCddLFxuXHRbL1vlh7Hlh6/pjqfpk6BdL3VnLCAn5YexJ10sXG5cdFsvW+W4lui0tF0vdWcsICfosrwnXSxcblx0Wy9b55SaXS91ZywgJ+S7gCddLFxuXHRbL1voga/ogZTpgKPov55dL3VnLCAn6YCjJ10sXG5cdFsvW+WDj10vdWcsICfosaEnXSxcblx0Wy9b6JeJXS91ZywgJ+WAnyddLFxuXHRbL1volb5dL3VnLCAn6Zu3J10sXG5cdFsvW+ioguiuoumHmOmSiV0vdWcsICflrponXSxcblx0Wy9b5ZquXS91ZywgJ+WQkSddLFxuXHRbL1vns7jns7nkuJ1dL3VnLCAn57WyJ10sXG5cdFsvW+etkl0vdWcsICfmobYnXSxcblx0Wy9b5YW5546G5ruLXS91ZywgJ+iMsiddLFxuXHRbL1vlkZDoqKXorrddL3VnLCAn5ZC2J10sXG5cdFsvW+epgOezk10vdWcsICfosLcnXSxcblx0Wy9b5Lik5YWp5YCG5L+pXS91ZywgJ+S4oSddLFxuXHRbL1vluLPos6zotKZdL3VnLCAn5biQJ10sXG5cdFsvW+eJiOmXhl0vdWcsICfmnb8nXSxcblx0Wy9b5b6FXS91ZywgJ+WRhiddLFxuXHRbL1vnhpTpjpTplZXono3ono5dL3VnLCAn5rq2J10sXG5cdFsvW+WMr+axh10vdWcsICflvZknXSxcblx0Wy9b5b2/5LuPXS91ZywgJ+S9myddLFxuXHRbL1vpmL9dL3VnLCAn5ZWKJ10sXG5cdFsvW+Wutl0vdWcsICflgqInXSxcblx0Wy9b54iGXS91ZywgJ+aatCddLFxuXHRbL1vntrLki4Tki57ntrHnurJdL3VnLCAn572RJ10sXG5cdFsvW+iou10vdWcsICfms6gnXSxcblx0Wy9b54GM6LSv5r2FXS91ZywgJ+iyqyddLFxuXHRbL1vlgJJdL3VnLCAn5YiwJ10sXG5cdFsvW+WEreenpOensOeoseihrOilr10vdWcsICflubMnXSxcblx0Wy9b5Yub5Yuy5YuzXS91ZywgJ+WLiyddLFxuXHRbL1vpupfkuL3ojoldL3VnLCAn5YipJ10sXG5cdFsvW+W3suW3s10vdWcsICflt7EnXSxcblx0Wy9b5ZesXS91ZywgJ+WRtSddLFxuXHRbL1vlk4rlk5/llLfllLnllrJdL3VnLCAn5ZGmJ10sXG5cdFsvW+WpleadsOa0gea9lOe1nF0vdWcsICflgpEnXSxcblx0Wy9b5Zi7XS91ZywgJ+WsiSddLFxuXHRbL1vnl7Lnl7PpurtdL3VnLCAn5ZibJ10sXG5cdFsvW+eLl10vdWcsICfniqwnXSxcblx0Wy9b5b2/5ouCXS91ZywgJ+S9myddLFxuXHRbL1vkupnmgYbmgZJdL3VnLCAn5LqYJ10sXG5cdFsvW+mZhOWJr10vdWcsICfku5gnXSxcblx0Wy9b5Ly95p6354+I6L+mXS91ZywgJ+WKoCddLFxuXHRbL1vopJRdL3VnLCAn56aPJ10sXG5cdFsvW+aNsV0vdWcsICfmjKgnXSxcblx0Wy9b5ou8XS91ZywgJ+aLmiddLFxuXHRbL1vpo4Tpo5jpo4NdL3VnLCAn5ryCJ10sXG5cdFsvW+S9lOayvl0vdWcsICfljaAnXSxcblx0Wy9b5rCX5rCj5rG95ruK54KBXS91ZywgJ+awlCddLFxuXHRbL1vmkqnpgbxdL3VnLCAn6L69J10sXG5cdFsvW+WBml0vdWcsICfkvZwnXSxcblx0Wy9b5pCc5o2cXS91ZywgJ+iSkCddLFxuXHRbL1vlj5/lgoFdL3VnLCAn5Y+fJ10sXG5cdFsvW+isneiwol0vdWcsICfmpq0nXSxcblx0Wy9b5b2iXS91ZywgJ+WeiyddLFxuXHRbL1vpm4fpoIvpoafpob5dL3VnLCAn5YOxJ10sXG5cdFsvW+W7rOiKpuiYhl0vdWcsICflupAnXSxcblx0Wy9b6IC96LqtXS91ZywgJ+eciCddLFxuXHRbL1vlgrnnq5/nq7bnq7joqqnwpaqw8Kehn/Cnq5jwp6uZ8Keuo/CokLxdL3VnLCAn56ueJ10sXG5cdFsvW+aull0vdWcsICfmpI0nXSxcblx0Wy9b5L2s5aelXS91ZywgJ+iAgSddLFxuXHRbL1vlgJZdL3VnLCAn5bm4J10sXG5cdFsvW+OgqueCrOefqemJhV0vdWcsICflt6gnXSxcblx0Wy9b6Y+I6ZO+54K86Yys6Y2K8KuUgOSDm/Cnua/nt7Tnu4PpgKPov55dL3VnLCAn54WJJ10sXG5cdFsvW+WItOWJgeWJkOWJruWKj10vdWcsICfjk6UnXSxcblx0Wy9b5p6P5qWgXS91ZywgJ+WNlyddLFxuXHRbL1vnkpDwob2Y8KixtF0vdWcsICfot68nXSxcblx0Wy9b5L6C5ouT5p2U6KiX6K6s5ouW5ouVXS91ZywgJ+aJmCddLFxuXHRbL1vmgpXnnY7nqIBdL3VnLCAn5biMJ10sXG5cdFsvW+W4vOW5l+WbveWci10vdWcsICflm68nXSxcblx0Wy9b6L+UXS91ZywgJ+WPjSddLFxuXHRbL1vpmb3pmLNdL3VnLCAn5L2vJ10sXG5cdFsvW+adpeiOseiQil0vdWcsICfkvoYnXSxcblx0Wy9b6JGG5aCh6KST57elXS91ZywgJ+S/nSddLFxuXHRbL1vmuKFdL3VnLCAn5bqmJ10sXG5cdFsvW+WJs+acreeumue0rl0vdWcsICfmiY4nXSxcblx0Wy9b5aqe5o+Q5rmc56aU57e557yH6ZqEXS91ZywgJ+WgpCddLFxuXHRbL1voh5jonKHooJ9dL3VnLCAn6IWKJ10sXG5cdFsvW+mssfComrzwqJ+dXS91ZywgJ+mDgSddLFxuXHRbL1vmk4DmnYbmob9dL3VnLCAn5omeJ10sXG5cdFsvW+iEvOmDnvClh5FdL3VnLCAn6YOOJ10sXG5cdFsvW+iKrV0vdWcsICflt7QnXSxcblx0Wy9b5raF5rm8XS91ZywgJ+aNjyddLFxuXHRbL1vmi6nmk4fmsqLms73mvqRdL3VnLCAn5oqeJ10sXG5cdFsvW+W5temWi10vdWcsICflvIAnXSxcblx0Wy9b54+uXS91ZywgJ+S9qSddLFxuXHRbL1vllqnnsbLpvqXlkIFdL3VnLCAn5Za7J10sXG5cdFsvW+WAvF0vdWcsICflgKQnXSxcblx0Wy9b6IeT6Ief6LST6LWD6auSXS91ZywgJ+iEjyddLFxuXHRbL1vjiqRdL3VnLCAn5LiKJ10sXG5cdFsvW+OKpl0vdWcsICfkuIsnXSxcblx0Wy9b5ZS/XS91ZywgJ+WRvCddLFxuXHRbL1voqbPor6ZdL3VnLCAn56WlJ10sXG5cdFsvW+WmruazpV0vdWcsICflsLwnXSxcblx0Wy9b5YmL5bCFXS91ZywgJ+WFiyddLFxuXHRbL1vmkqXmkq1dL3VnLCAn5ouoJ10sXG5cdFsvW+aMv+aPt10vdWcsICfmj5InXSxcblx0Wy9b5rGAXS91ZywgJ+S4gSddLFxuXHRbL1vpgqNdL3VnLCAn5aicJ10sXG5cdFsvW+iPiF0vdWcsICfmi4knXSxcblx0Wy9b546y55Cz6Yi06ZOD5reLXS91ZywgJ+aelyddLFxuXHRbL1vpipjpk61dL3VnLCAn5ZCNJ10sXG5cdFsvW+m9o10vdWcsICflh7onXSxcblx0Wy9b5qy46KqS6K+2XS91ZywgJ+WUiSddLFxuXHRbL1vlk55dL3VnLCAn5ZGjJ10sXG5cdFsvW+OWv+WQlF0vdWcsICfogLYnXSxcblx0Wy9b6a2FXS91ZywgJ+WqmiddLFxuXHRbL1voj7LpnZ5dL3VnLCAn5paQJ10sXG5cdFsvW+ihqemHtemSl10vdWcsICflj4knXSxcblx0Wy9b5reH55Cq56W6XS91ZywgJ+WFtiddLFxuXHRbL1vlo4foq4forZrosIjosK1dL3VnLCAn5Z2bJ10sXG5cdFsvW+adkOaftF0vdWcsICfmiY0nXSxcblx0Wy9b5ZS4XS91ZywgJ+W/tSddLFxuXHRbL1votr5dL3VnLCAn5oyHJ10sXG5cdFsvW+S7lV0vdWcsICflo6snXSxcblx0Wy9b5ayi5a2DXS91ZywgJ+WomCddLFxuXHRbL1vlk5HllJbnmILnl5ZdL3VnLCAn5ZWeJ10sXG5cdFsvW+WKqOWDjeS7gl0vdWcsICfli5UnXSxcblx0Wy9b5p+l5p+7XS91ZywgJ+WvnyddLFxuXHRbL1vpiYTpipXpkKHpkLXpk4HwqKuTXS91ZywgJ+mJgyddLFxuXHRbL1vlvZLmrbjnmohdL3VnLCAn5biwJ10sXG5cdFsvW+eYoeeWruWJtV0vdWcsICfliJsnXSxcblx0Wy9b5ou354OkXS91ZywgJ+iAgyddLFxuXHRbL1vovrxdL3VnLCAn5YWlJ10sXG5cdFsvW+S8puS+luWAq10vdWcsICfku5EnXSxcblx0Wy9b5LuUXS91ZywgJ+WtkCddLFxuXHRbL1vlvY7mub7ngaNdL3VnLCAn5byvJ10sXG5cdFsvW+iNp+iQpOibjeieol0vdWcsICfnhpInXSxcblx0Wy9b5oyj5o6Z54itXS91ZywgJ+S6iSddLFxuXHRbL1vmvLLog4DohLldL3VnLCAn5raoJ10sXG5cdFsvW+eEoeWGh+aykuayoV0vdWcsICfml6AnXSxcblx0Wy9b5Zm46KiwXS91ZywgJ+WQqCddLFxuXHRbL1vpiI7piaTpkqldL3VnLCAn5Yu+J10sXG5cdFsvW+ayiV0vdWcsICfmsognXSxcblx0Wy9b55Wz55aK6L+tXS91ZywgJ+WPoCddLFxuXG5dKTtcblxuLy9jb25zb2xlLmxvZyhfZ3JlZWR5VGFibGVDYWNoZVRlc3QpO1xuXG5leHBvcnQgZnVuY3Rpb24gX2dyZWVkeVRhYmxlQnVpbGQoZGF0YTogW1JlZ0V4cCwgc3RyaW5nXVtdKToge1xuXHRfZ3JlZWR5VGFibGVDYWNoZVJlZ2V4cDogcmVhZG9ubHkgKHJlYWRvbmx5IFtSZWdFeHAsIHN0cmluZ10pW107XG5cdF9ncmVlZHlUYWJsZUNhY2hlTWFwOiBNYXA8c3RyaW5nLCByZWFkb25seSBzdHJpbmdbXT47XG5cdF9ncmVlZHlUYWJsZUNhY2hlVGVzdDogUmVnRXhwO1xufVxue1xuXHRjb25zdCBfZ3JlZWR5VGFibGVDYWNoZVJlZ2V4cDogW1JlZ0V4cCwgc3RyaW5nXVtdID0gZGF0YTtcblxuXHRsZXQgX2dyZWVkeVRhYmxlQ2FjaGVNYXA6IE1hcDxzdHJpbmcsIHN0cmluZ1tdPjtcblx0bGV0IF9ncmVlZHlUYWJsZUNhY2hlVGVzdDogUmVnRXhwO1xuXG5cdF9ncmVlZHlUYWJsZUNhY2hlTWFwID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZ1tdPigpO1xuXG5cdGxldCBhcnIgPSBfZ3JlZWR5VGFibGVDYWNoZVJlZ2V4cFxuXHRcdC5yZWR1Y2UoZnVuY3Rpb24gKGFyciwgcilcblx0XHR7XG5cdFx0XHRsZXQgcyA9IHJbMF0uc291cmNlXG5cdFx0XHRcdC5yZXBsYWNlKC9eLipcXFt8XFxdLiokL3VnLCAnJylcblx0XHRcdDtcblxuXHRcdFx0bGV0IGEgPSBVU3RyaW5nLnNwbGl0KHMsICcnKS5jb25jYXQoclsxXSk7XG5cblx0XHRcdGEuZm9yRWFjaChjID0+XG5cdFx0XHR7XG5cdFx0XHRcdF9ncmVlZHlUYWJsZUNhY2hlTWFwLnNldChjLCBhKVxuXHRcdFx0fSk7XG5cblx0XHRcdGFyci5wdXNoKC4uLmEpO1xuXG5cdFx0XHRyZXR1cm4gYXJyO1xuXHRcdH0sIFtdIGFzIHN0cmluZ1tdKVxuXHQ7XG5cblx0X2dyZWVkeVRhYmxlQ2FjaGVUZXN0ID0gbmV3IFJlZ0V4cChgWyR7YXJyYXlfdW5pcXVlKGFycikuam9pbignJyl9XWAsICd1Jyk7XG5cblx0cmV0dXJuIHtcblx0XHRfZ3JlZWR5VGFibGVDYWNoZVJlZ2V4cCxcblx0XHRfZ3JlZWR5VGFibGVDYWNoZU1hcCxcblx0XHRfZ3JlZWR5VGFibGVDYWNoZVRlc3QsXG5cdH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBncmVlZHlUYWJsZVRlc3QoaW5wdXQ6IHN0cmluZylcbntcblx0cmV0dXJuIF9ncmVlZHlUYWJsZUNhY2hlVGVzdC50ZXN0KGlucHV0KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ3JlZWR5VGFibGVDaGFyQXJyYXkoY2hhcjogc3RyaW5nKVxue1xuXHRyZXR1cm4gX2dyZWVkeVRhYmxlQ2FjaGVNYXAuZ2V0KGNoYXIpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBncmVlZHlUYWJsZVJlcGxhY2UoaW5wdXQ6IHN0cmluZyk6IHN0cmluZ1xue1xuXHRpZiAoZ3JlZWR5VGFibGVUZXN0KGlucHV0KSlcblx0e1xuXHRcdHJldHVybiBfZ3JlZWR5VGFibGVDYWNoZVJlZ2V4cFxuXHRcdFx0LnJlZHVjZShmdW5jdGlvbiAoaW5wdXQsIHIpXG5cdFx0XHR7XG5cdFx0XHRcdHJldHVybiBpbnB1dC5yZXBsYWNlKHJbMF0sIHJbMV0pXG5cdFx0XHR9LCBpbnB1dClcblx0XHRcdDtcblx0fVxuXG5cdHJldHVybiBpbnB1dFxufVxuXG5leHBvcnQgZGVmYXVsdCBleHBvcnRzIGFzIHR5cGVvZiBpbXBvcnQoJy4vZ3JlZWR5Jyk7XG4iXX0=
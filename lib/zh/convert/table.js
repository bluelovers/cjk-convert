"use strict";
/**
 * Created by user on 2018/8/30/030.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const _table_cn2tw = require("chinese_convert/cn2tw");
const _table_tw2cn = require("chinese_convert/tw2cn");
const wikipedia_1 = require("./wikipedia");
exports.table_cn2tw = Object.assign(_table_cn2tw, wikipedia_1.wiki_s2t_v2);
exports.table_tw2cn = Object.assign(_table_tw2cn, wikipedia_1.wiki_t2s_v2);
if (1) {
    /**
     * 以下用來 reset 排序用
     */
    [
        // 從轉換表中刪除的字
        '像',
        '象',
        '剷',
        '鏟',
        '铲',
        '刬',
        '剗',
    ].forEach(function (v) {
        delete exports.table_tw2cn[v];
        delete exports.table_cn2tw[v];
    });
    [
    // 從 簡體轉換表內刪除的字
    ].forEach(function (v) {
        delete exports.table_cn2tw[v];
    });
    [
    // 從繁體轉換表內刪除的字
    ].forEach(function (v) {
        delete exports.table_tw2cn[v];
    });
}
exports.table_cn2tw = Object.assign(exports.table_cn2tw, {
    '恶': '惡',
    '苏': '蘇',
    '壳': '殻',
    '馆': '館',
    '里': '裡',
    '后': '後',
    '当': '當',
    '锺': '鍾',
    '钟': '鐘',
    '凃': '塗',
    '涂': '涂',
    '㑩': '儸',
    '罗': '羅',
    '啰': '囉',
    '国': '國',
    '验': '驗',
    '准': '準',
    //'历': '曆',
    '历': '歷',
    '刹': '剎',
    '讬': '託',
    '纤': '纖',
    '𫔀': '鍊',
    '炼': '煉',
    '恒': '恆',
    '畲': '畲',
    '复': '復',
    '钜': '鉅',
    '谑': '謔',
    '谘': '諮',
    '干': '幹',
    '线': '線',
    '缐': '線',
    '尽': '盡',
    '处': '處',
    '面': '麵',
    '舍': '捨',
    '松': '鬆',
    '𫔮': '閒',
    //'象': '象',
    '啮': '齧',
    '赃': '贓',
    '咤': '吒',
    '痳': '痲',
    //'荡': '盪',
    '荡': '蕩',
    '墙': '牆',
    '占': '佔',
    '借': '藉',
});
exports.table_tw2cn = Object.assign(exports.table_tw2cn, {
    '殻': '壳',
    '殼': '壳',
    '館': '馆',
    '後': '后',
    '儅': '儅',
    '噹': '当',
    '鍾': '锺',
    '鐘': '钟',
    '㑹': '会',
    '塗': '凃',
    '涂': '涂',
    '儸': '㑩',
    '羅': '罗',
    '囉': '啰',
    '國': '国',
    '剎': '刹',
    '託': '讬',
    '鍊': '炼',
    '錬': '炼',
    '煉': '炼',
    '壞': '坏',
    '壊': '坏',
    '佘': '佘',
    '畲': '畲',
    '丑': '丑',
    '么': '么',
    '几': '几',
    '后': '后',
    '斗': '斗',
    '艸': '艸',
    '干': '干',
    '虫': '虫',
    '岳': '岳',
    '卜': '卜',
    '于': '于',
    '里': '里',
    '鉅': '钜',
    '禦': '御',
    '謔': '谑',
    '餘': '馀',
    '范': '范',
    '朴': '朴',
    '咨': '咨',
    '諮': '谘',
    '齣': '齣',
    '線': '线',
    '綫': '线',
    '儘': '尽',
    '盡': '尽',
    '划': '划',
    '凈': '净',
    '杰': '杰',
    '余': '余',
    '面': '面',
    '舍': '舍',
    '松': '松',
    //'像': '象',
    //'象': '象',
    '云': '云',
    '嚙': '啮',
    '齧': '啮',
    '咸': '咸',
    '吒': '吒',
    '折': '折',
    '同': '同',
    '胡': '胡',
    '症': '症',
    '郁': '郁',
    '采': '采',
    '栖': '栖',
    '踪': '踪',
    '昵': '昵',
    '厘': '厘',
    '痲': '痳',
    '痳': '痳',
    '怜': '怜',
    '蕩': '荡',
    '盪': '荡',
    '悽': '悽',
    '牆': '墙',
    '墻': '墙',
    '佔': '占',
    '占': '占',
    '藉': '借',
    '借': '借',
});
[
    // 從轉換表中刪除的字
    //'処',
    //'佘',
    '畲',
    '氹',
    '凼',
    '靣',
    '彪',
    '尨',
    '狵',
].forEach(function (v) {
    delete exports.table_tw2cn[v];
    delete exports.table_cn2tw[v];
});
[
    // 從 簡體轉換表內刪除的字
    '鉅',
].forEach(function (v) {
    delete exports.table_cn2tw[v];
});
[
    // 從繁體轉換表內刪除的字
    '钜',
    // 加入 wikipedia.ts 後 產生的冷門字
    '党',
    '万',
    '与',
].forEach(function (v) {
    delete exports.table_tw2cn[v];
});
Object
    .entries({
    '餵': '𫗭',
    '餧': '𫗪',
    '淨': '净',
    '處': '处',
    '憂': '忧',
    '優': '优',
    '煙': '烟',
    '綫': '线',
    '線': '缐',
    '貳': '贰',
    // 以防萬一 因為 opencc 選用的字是 新字體 的 気
    '氣': '气',
    '咸': '鹹',
    '剗': '刬',
    '鏟': '铲',
    '盤': '盘',
    '採': '采',
    '棲': '栖',
    '暱': '昵',
    '繨': '𫄤',
})
    .forEach(function (v) {
    let [t, s] = v;
    exports.table_tw2cn[t] = s;
    exports.table_cn2tw[s] = t;
});
[
    // 不轉換的共用字
    '札',
    '谷',
    '污',
    '汙',
    '游',
    '遊',
    '伙',
    '夥',
    '御',
    '郁',
    '咔',
    '哢',
    '凌',
    '淩',
    '扎',
    '紮',
    '痴',
    '癡',
    //'咸',
    //'准',
    //'棲',
    //'栖',
    '嚯',
    //'余',
    '薑',
    '姜',
    '扡',
    '扦',
    '捻',
    '撚',
    '遝',
    '沓',
    //'淨',
    '栗',
    '挽',
    '灶',
    '竈',
    '霉',
    '黴',
    '欲',
    '慾',
    '征',
    '讚',
    '菸',
    '拾',
    '十',
    '証',
    '捲',
    '卷',
    '燻',
    '熏',
    '吁',
    '籲',
    '龥',
    '蹠',
    '跖',
    '矽',
    '硅',
    '脩',
    '修',
    '犟',
    '剷',
    '噼',
    '劈',
    '擗',
    '核',
    '覈',
    '憷',
    '呼',
    '唿',
    '嗬',
    '呵',
    '脣',
    '唇',
    '唇',
    '升',
    '昇',
    '磐',
    '溪',
    '渓',
    '谿',
    '嵠',
    '祐',
    '佑',
    '媮',
    '偷',
    '瓮',
    '罋',
    '甕',
    '闇',
    '暗',
    '佈',
    '布',
    '痺',
    '痹',
    '雇',
    '僱',
    '秘',
    '祕',
].forEach(function (v) {
    exports.table_tw2cn[v] = v;
    exports.table_cn2tw[v] = v;
});
exports.default = exports;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YWJsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7O0dBRUc7O0FBRUgsc0RBQXNEO0FBQ3RELHNEQUFzRDtBQUd0RCwyQ0FBdUQ7QUFFNUMsUUFBQSxXQUFXLEdBQVcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsdUJBQVcsQ0FBQyxDQUFDO0FBRS9ELFFBQUEsV0FBVyxHQUFXLE1BQU0sQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLHVCQUFXLENBQUMsQ0FBQztBQUUxRSxJQUFJLENBQUMsRUFDTDtJQUNDOztPQUVHO0lBRUg7UUFDQyxZQUFZO1FBQ1osR0FBRztRQUNILEdBQUc7UUFFSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNILENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQztRQUVwQixPQUFPLG1CQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEIsT0FBTyxtQkFBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBRUg7SUFDQyxlQUFlO0tBQ2YsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO1FBRXBCLE9BQU8sbUJBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2QixDQUFDLENBQUMsQ0FBQztJQUVIO0lBQ0MsY0FBYztLQUNkLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQztRQUVwQixPQUFPLG1CQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkIsQ0FBQyxDQUFDLENBQUM7Q0FDSDtBQUVELG1CQUFXLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxtQkFBVyxFQUFFO0lBQ3hDLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFFUixXQUFXO0lBQ1gsR0FBRyxFQUFFLEdBQUc7SUFFUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBRVIsR0FBRyxFQUFFLEdBQUc7SUFFUixJQUFJLEVBQUUsR0FBRztJQUNULEdBQUcsRUFBRSxHQUFHO0lBRVIsR0FBRyxFQUFFLEdBQUc7SUFFUixHQUFHLEVBQUUsR0FBRztJQUVSLEdBQUcsRUFBRSxHQUFHO0lBRVIsR0FBRyxFQUFFLEdBQUc7SUFFUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBRVIsR0FBRyxFQUFFLEdBQUc7SUFFUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBRVIsR0FBRyxFQUFFLEdBQUc7SUFFUixHQUFHLEVBQUUsR0FBRztJQUVSLEdBQUcsRUFBRSxHQUFHO0lBRVIsR0FBRyxFQUFFLEdBQUc7SUFFUixHQUFHLEVBQUUsR0FBRztJQUVSLElBQUksRUFBRSxHQUFHO0lBRVQsV0FBVztJQUVYLEdBQUcsRUFBRSxHQUFHO0lBRVIsR0FBRyxFQUFFLEdBQUc7SUFFUixHQUFHLEVBQUUsR0FBRztJQUVSLEdBQUcsRUFBRSxHQUFHO0lBRVIsV0FBVztJQUNYLEdBQUcsRUFBRSxHQUFHO0lBRVIsR0FBRyxFQUFFLEdBQUc7SUFFUixHQUFHLEVBQUUsR0FBRztJQUVSLEdBQUcsRUFBRSxHQUFHO0NBRVIsQ0FBQyxDQUFDO0FBRUgsbUJBQVcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLG1CQUFXLEVBQUU7SUFDeEMsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBRVIsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUVSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUVSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFFUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBSVIsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBRVIsR0FBRyxFQUFFLEdBQUc7SUFFUixHQUFHLEVBQUUsR0FBRztJQUVSLEdBQUcsRUFBRSxHQUFHO0lBRVIsR0FBRyxFQUFFLEdBQUc7SUFFUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUVSLEdBQUcsRUFBRSxHQUFHO0lBRVIsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUVSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFFUixHQUFHLEVBQUUsR0FBRztJQUVSLEdBQUcsRUFBRSxHQUFHO0lBRVIsR0FBRyxFQUFFLEdBQUc7SUFFUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBRVIsR0FBRyxFQUFFLEdBQUc7SUFFUixHQUFHLEVBQUUsR0FBRztJQUVSLFdBQVc7SUFDWCxXQUFXO0lBRVgsR0FBRyxFQUFFLEdBQUc7SUFFUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBRVIsR0FBRyxFQUFFLEdBQUc7SUFFUixHQUFHLEVBQUUsR0FBRztJQUVSLEdBQUcsRUFBRSxHQUFHO0lBRVIsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUVSLEdBQUcsRUFBRSxHQUFHO0lBRVIsR0FBRyxFQUFFLEdBQUc7SUFFUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBRVIsR0FBRyxFQUFFLEdBQUc7SUFFUixHQUFHLEVBQUUsR0FBRztJQUVSLEdBQUcsRUFBRSxHQUFHO0lBRVIsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUVSLEdBQUcsRUFBRSxHQUFHO0lBRVIsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUVSLEdBQUcsRUFBRSxHQUFHO0lBRVIsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUVSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFFUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0NBRVIsQ0FBQyxDQUFDO0FBRUg7SUFDQyxZQUFZO0lBQ1osTUFBTTtJQUNOLE1BQU07SUFDTixHQUFHO0lBQ0gsR0FBRztJQUNILEdBQUc7SUFDSCxHQUFHO0lBRUgsR0FBRztJQUNILEdBQUc7SUFDSCxHQUFHO0NBQ0gsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO0lBRXBCLE9BQU8sbUJBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0QixPQUFPLG1CQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdkIsQ0FBQyxDQUFDLENBQUM7QUFFSDtJQUNDLGVBQWU7SUFDZixHQUFHO0NBQ0gsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO0lBRXBCLE9BQU8sbUJBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN2QixDQUFDLENBQUMsQ0FBQztBQUVIO0lBQ0MsY0FBYztJQUNkLEdBQUc7SUFDSCwyQkFBMkI7SUFDM0IsR0FBRztJQUNILEdBQUc7SUFDSCxHQUFHO0NBQ0gsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO0lBRXBCLE9BQU8sbUJBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN2QixDQUFDLENBQUMsQ0FBQztBQUVILE1BQU07S0FDSixPQUFPLENBQUM7SUFDUixHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBRVQsR0FBRyxFQUFFLEdBQUc7SUFFUixHQUFHLEVBQUUsR0FBRztJQUVSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFFUixHQUFHLEVBQUUsR0FBRztJQUVSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFFUixHQUFHLEVBQUUsR0FBRztJQUVSLCtCQUErQjtJQUMvQixHQUFHLEVBQUUsR0FBRztJQUVSLEdBQUcsRUFBRSxHQUFHO0lBRVIsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUVSLEdBQUcsRUFBRSxHQUFHO0lBRVIsR0FBRyxFQUFFLEdBQUc7SUFFUixHQUFHLEVBQUUsR0FBRztJQUVSLEdBQUcsRUFBRSxHQUFHO0lBRVIsR0FBRyxFQUFFLElBQUk7Q0FDVCxDQUFDO0tBQ0QsT0FBTyxDQUFDLFVBQVUsQ0FBQztJQUVuQixJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUVmLG1CQUFXLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ25CLG1CQUFXLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3BCLENBQUMsQ0FBQyxDQUNGO0FBRUQ7SUFDQyxVQUFVO0lBQ1YsR0FBRztJQUNILEdBQUc7SUFDSCxHQUFHO0lBQ0gsR0FBRztJQUNILEdBQUc7SUFDSCxHQUFHO0lBQ0gsR0FBRztJQUNILEdBQUc7SUFDSCxHQUFHO0lBQ0gsR0FBRztJQUNILEdBQUc7SUFDSCxHQUFHO0lBQ0gsR0FBRztJQUNILEdBQUc7SUFDSCxHQUFHO0lBQ0gsR0FBRztJQUNILEdBQUc7SUFDSCxHQUFHO0lBQ0gsTUFBTTtJQUNOLE1BQU07SUFDTixNQUFNO0lBQ04sTUFBTTtJQUNOLEdBQUc7SUFDSCxNQUFNO0lBQ04sR0FBRztJQUNILEdBQUc7SUFDSCxHQUFHO0lBQ0gsR0FBRztJQUNILEdBQUc7SUFDSCxHQUFHO0lBQ0gsR0FBRztJQUNILEdBQUc7SUFDSCxNQUFNO0lBQ04sR0FBRztJQUNILEdBQUc7SUFDSCxHQUFHO0lBQ0gsR0FBRztJQUNILEdBQUc7SUFDSCxHQUFHO0lBQ0gsR0FBRztJQUNILEdBQUc7SUFDSCxHQUFHO0lBQ0gsR0FBRztJQUNILEdBQUc7SUFDSCxHQUFHO0lBQ0gsR0FBRztJQUNILEdBQUc7SUFDSCxHQUFHO0lBQ0gsR0FBRztJQUNILEdBQUc7SUFDSCxHQUFHO0lBQ0gsR0FBRztJQUNILEdBQUc7SUFDSCxHQUFHO0lBQ0gsR0FBRztJQUNILEdBQUc7SUFDSCxHQUFHO0lBQ0gsR0FBRztJQUNILEdBQUc7SUFDSCxHQUFHO0lBQ0gsR0FBRztJQUNILEdBQUc7SUFDSCxHQUFHO0lBQ0gsR0FBRztJQUNILEdBQUc7SUFDSCxHQUFHO0lBQ0gsR0FBRztJQUNILEdBQUc7SUFDSCxHQUFHO0lBQ0gsR0FBRztJQUNILEdBQUc7SUFDSCxHQUFHO0lBQ0gsR0FBRztJQUNILEdBQUc7SUFDSCxHQUFHO0lBQ0gsR0FBRztJQUNILEdBQUc7SUFDSCxHQUFHO0lBQ0gsR0FBRztJQUNILEdBQUc7SUFDSCxHQUFHO0lBQ0gsR0FBRztJQUNILEdBQUc7SUFDSCxHQUFHO0lBQ0gsR0FBRztJQUNILEdBQUc7SUFDSCxHQUFHO0lBQ0gsR0FBRztJQUNILEdBQUc7SUFDSCxHQUFHO0lBQ0gsR0FBRztJQUNILEdBQUc7SUFDSCxHQUFHO0lBQ0gsR0FBRztJQUNILEdBQUc7SUFFSCxHQUFHO0lBQ0gsR0FBRztJQUVILEdBQUc7SUFDSCxHQUFHO0NBRUgsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO0lBRXBCLG1CQUFXLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ25CLG1CQUFXLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3BCLENBQUMsQ0FBQyxDQUFDO0FBRUgsa0JBQWUsT0FBbUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSB1c2VyIG9uIDIwMTgvOC8zMC8wMzAuXG4gKi9cblxuaW1wb3J0ICogYXMgX3RhYmxlX2NuMnR3IGZyb20gJ2NoaW5lc2VfY29udmVydC9jbjJ0dyc7XG5pbXBvcnQgKiBhcyBfdGFibGVfdHcyY24gZnJvbSAnY2hpbmVzZV9jb252ZXJ0L3R3MmNuJztcblxuaW1wb3J0IHsgSVRhYmxlIH0gZnJvbSAnLi9jb3JlJztcbmltcG9ydCB7IHdpa2lfczJ0X3YyLCB3aWtpX3Qyc192MiB9IGZyb20gJy4vd2lraXBlZGlhJztcblxuZXhwb3J0IGxldCB0YWJsZV9jbjJ0dzogSVRhYmxlID0gT2JqZWN0LmFzc2lnbihfdGFibGVfY24ydHcsIHdpa2lfczJ0X3YyKTtcblxuZXhwb3J0IGxldCB0YWJsZV90dzJjbjogSVRhYmxlID0gT2JqZWN0LmFzc2lnbihfdGFibGVfdHcyY24sIHdpa2lfdDJzX3YyKTtcblxuaWYgKDEpXG57XG5cdC8qKlxuXHQgKiDku6XkuIvnlKjkvoYgcmVzZXQg5o6S5bqP55SoXG5cdCAqL1xuXG5cdFtcblx0XHQvLyDlvp7ovYnmj5vooajkuK3liKrpmaTnmoTlrZdcblx0XHQn5YOPJyxcblx0XHQn6LGhJyxcblxuXHRcdCflibcnLFxuXHRcdCfpj58nLFxuXHRcdCfpk7InLFxuXHRcdCfliKwnLFxuXHRcdCfliZcnLFxuXHRdLmZvckVhY2goZnVuY3Rpb24gKHYpXG5cdHtcblx0XHRkZWxldGUgdGFibGVfdHcyY25bdl07XG5cdFx0ZGVsZXRlIHRhYmxlX2NuMnR3W3ZdO1xuXHR9KTtcblxuXHRbXG5cdFx0Ly8g5b6eIOewoemrlOi9ieaPm+ihqOWFp+WIqumZpOeahOWtl1xuXHRdLmZvckVhY2goZnVuY3Rpb24gKHYpXG5cdHtcblx0XHRkZWxldGUgdGFibGVfY24ydHdbdl07XG5cdH0pO1xuXG5cdFtcblx0XHQvLyDlvp7nuYHpq5TovYnmj5vooajlhafliKrpmaTnmoTlrZdcblx0XS5mb3JFYWNoKGZ1bmN0aW9uICh2KVxuXHR7XG5cdFx0ZGVsZXRlIHRhYmxlX3R3MmNuW3ZdO1xuXHR9KTtcbn1cblxudGFibGVfY24ydHcgPSBPYmplY3QuYXNzaWduKHRhYmxlX2NuMnR3LCB7XG5cdCfmgbYnOiAn5oOhJyxcblx0J+iLjyc6ICfomIcnLFxuXHQn5aOzJzogJ+auuycsXG5cdCfppoYnOiAn6aSoJyxcblx0J+mHjCc6ICfoo6EnLFxuXHQn5ZCOJzogJ+W+jCcsXG5cdCflvZMnOiAn55W2Jyxcblx0J+mUuic6ICfpjb4nLFxuXHQn6ZKfJzogJ+mQmCcsXG5cdCflh4MnOiAn5aGXJyxcblx0J+a2gic6ICfmtoInLFxuXHQn45GpJzogJ+WEuCcsXG5cdCfnvZcnOiAn576FJyxcblx0J+WVsCc6ICflm4knLFxuXHQn5Zu9JzogJ+WciycsXG5cdCfpqownOiAn6amXJyxcblx0J+WHhic6ICfmupYnLFxuXG5cdC8vJ+WOhic6ICfmm4YnLFxuXHQn5Y6GJzogJ+attycsXG5cblx0J+WIuSc6ICfliY4nLFxuXHQn6K6sJzogJ+iolycsXG5cblx0J+e6pCc6ICfnupYnLFxuXG5cdCfwq5SAJzogJ+mNiicsXG5cdCfngrwnOiAn54WJJyxcblxuXHQn5oGSJzogJ+aBhicsXG5cblx0J+eVsic6ICfnlbInLFxuXG5cdCflpI0nOiAn5b6pJyxcblxuXHQn6ZKcJzogJ+mJhScsXG5cblx0J+iwkSc6ICforJQnLFxuXHQn6LCYJzogJ+irricsXG5cblx0J+W5sic6ICflubknLFxuXG5cdCfnur8nOiAn57eaJyxcblx0J+e8kCc6ICfnt5onLFxuXG5cdCflsL0nOiAn55uhJyxcblxuXHQn5aSEJzogJ+iZlScsXG5cblx0J+mdoic6ICfpurUnLFxuXG5cdCfoiI0nOiAn5o2oJyxcblxuXHQn5p2+JzogJ+mshicsXG5cblx0J/CrlK4nOiAn6ZaSJyxcblxuXHQvLyfosaEnOiAn6LGhJyxcblxuXHQn5ZWuJzogJ+m9pycsXG5cblx0J+i1gyc6ICfotJMnLFxuXG5cdCflkqQnOiAn5ZCSJyxcblxuXHQn55ezJzogJ+eXsicsXG5cblx0Ly8n6I2hJzogJ+ebqicsXG5cdCfojaEnOiAn6JWpJyxcblxuXHQn5aKZJzogJ+eJhicsXG5cblx0J+WNoCc6ICfkvZQnLFxuXG5cdCflgJ8nOiAn6JeJJyxcblxufSk7XG5cbnRhYmxlX3R3MmNuID0gT2JqZWN0LmFzc2lnbih0YWJsZV90dzJjbiwge1xuXHQn5q67JzogJ+WjsycsXG5cdCfmrrwnOiAn5aOzJyxcblx0J+mkqCc6ICfppoYnLFxuXHQn5b6MJzogJ+WQjicsXG5cdCflhIUnOiAn5YSFJyxcblx0J+WZuSc6ICflvZMnLFxuXHQn6Y2+JzogJ+mUuicsXG5cdCfpkJgnOiAn6ZKfJyxcblx0J+ORuSc6ICfkvJonLFxuXHQn5aGXJzogJ+WHgycsXG5cdCfmtoInOiAn5raCJyxcblx0J+WEuCc6ICfjkaknLFxuXHQn576FJzogJ+e9lycsXG5cdCflm4knOiAn5ZWwJyxcblx0J+Wciyc6ICflm70nLFxuXG5cdCfliY4nOiAn5Yi5Jyxcblx0J+iolyc6ICforqwnLFxuXG5cdCfpjYonOiAn54K8Jyxcblx0J+mMrCc6ICfngrwnLFxuXHQn54WJJzogJ+eCvCcsXG5cblx0J+Wjnic6ICflnY8nLFxuXHQn5aOKJzogJ+WdjycsXG5cblx0J+S9mCc6ICfkvZgnLFxuXHQn55WyJzogJ+eVsicsXG5cblxuXG5cdCfkuJEnOiAn5LiRJyxcblx0J+S5iCc6ICfkuYgnLFxuXHQn5YegJzogJ+WHoCcsXG5cdCflkI4nOiAn5ZCOJyxcblx0J+aWlyc6ICfmlpcnLFxuXHQn6Im4JzogJ+iJuCcsXG5cdCflubInOiAn5bmyJyxcblx0J+iZqyc6ICfomasnLFxuXHQn5bKzJzogJ+WysycsXG5cdCfljZwnOiAn5Y2cJyxcblx0J+S6jic6ICfkuo4nLFxuXHQn6YeMJzogJ+mHjCcsXG5cblx0J+mJhSc6ICfpkpwnLFxuXG5cdCfnpqYnOiAn5b6hJyxcblxuXHQn6KyUJzogJ+iwkScsXG5cblx0J+mkmCc6ICfppoAnLFxuXG5cdCfojIMnOiAn6IyDJyxcblx0J+actCc6ICfmnLQnLFxuXHQn5ZKoJzogJ+WSqCcsXG5cdCfoq64nOiAn6LCYJyxcblxuXHQn6b2jJzogJ+m9oycsXG5cblx0J+e3mic6ICfnur8nLFxuXHQn57arJzogJ+e6vycsXG5cblx0J+WEmCc6ICflsL0nLFxuXHQn55uhJzogJ+WwvScsXG5cblx0J+WIkic6ICfliJInLFxuXG5cdCflh4gnOiAn5YeAJyxcblxuXHQn5p2wJzogJ+adsCcsXG5cblx0J+S9mSc6ICfkvZknLFxuXHQn6Z2iJzogJ+mdoicsXG5cblx0J+iIjSc6ICfoiI0nLFxuXG5cdCfmnb4nOiAn5p2+JyxcblxuXHQvLyflg48nOiAn6LGhJyxcblx0Ly8n6LGhJzogJ+ixoScsXG5cblx0J+S6kSc6ICfkupEnLFxuXG5cdCflmpknOiAn5ZWuJyxcblx0J+m9pyc6ICflla4nLFxuXG5cdCflkrgnOiAn5ZK4JyxcblxuXHQn5ZCSJzogJ+WQkicsXG5cblx0J+aKmCc6ICfmipgnLFxuXG5cdCflkIwnOiAn5ZCMJyxcblx0J+iDoSc6ICfog6EnLFxuXG5cdCfnl4cnOiAn55eHJyxcblxuXHQn6YOBJzogJ+mDgScsXG5cblx0J+mHhyc6ICfph4cnLFxuXHQn5qCWJzogJ+aglicsXG5cblx0J+i4qic6ICfouKonLFxuXG5cdCfmmLUnOiAn5pi1JyxcblxuXHQn5Y6YJzogJ+WOmCcsXG5cblx0J+eXsic6ICfnl7MnLFxuXHQn55ezJzogJ+eXsycsXG5cblx0J+aAnCc6ICfmgJwnLFxuXG5cdCfolaknOiAn6I2hJyxcblx0J+ebqic6ICfojaEnLFxuXG5cdCfmgr0nOiAn5oK9JyxcblxuXHQn54mGJzogJ+WimScsXG5cdCflorsnOiAn5aKZJyxcblxuXHQn5L2UJzogJ+WNoCcsXG5cdCfljaAnOiAn5Y2gJyxcblxuXHQn6JeJJzogJ+WAnycsXG5cdCflgJ8nOiAn5YCfJyxcblxufSk7XG5cbltcblx0Ly8g5b6e6L2J5o+b6KGo5Lit5Yiq6Zmk55qE5a2XXG5cdC8vJ+WHpicsXG5cdC8vJ+S9mCcsXG5cdCfnlbInLFxuXHQn5rC5Jyxcblx0J+WHvCcsXG5cdCfpnaMnLFxuXG5cdCflvaonLFxuXHQn5bCoJyxcblx0J+eLtScsXG5dLmZvckVhY2goZnVuY3Rpb24gKHYpXG57XG5cdGRlbGV0ZSB0YWJsZV90dzJjblt2XTtcblx0ZGVsZXRlIHRhYmxlX2NuMnR3W3ZdO1xufSk7XG5cbltcblx0Ly8g5b6eIOewoemrlOi9ieaPm+ihqOWFp+WIqumZpOeahOWtl1xuXHQn6YmFJyxcbl0uZm9yRWFjaChmdW5jdGlvbiAodilcbntcblx0ZGVsZXRlIHRhYmxlX2NuMnR3W3ZdO1xufSk7XG5cbltcblx0Ly8g5b6e57mB6auU6L2J5o+b6KGo5YWn5Yiq6Zmk55qE5a2XXG5cdCfpkpwnLFxuXHQvLyDliqDlhaUgd2lraXBlZGlhLnRzIOW+jCDnlKLnlJ/nmoTlhrfploDlrZdcblx0J+WFmicsXG5cdCfkuIcnLFxuXHQn5LiOJyxcbl0uZm9yRWFjaChmdW5jdGlvbiAodilcbntcblx0ZGVsZXRlIHRhYmxlX3R3MmNuW3ZdO1xufSk7XG5cbk9iamVjdFxuXHQuZW50cmllcyh7XG5cdFx0J+mktSc6ICfwq5etJyxcblx0XHQn6aSnJzogJ/Crl6onLFxuXG5cdFx0J+a3qCc6ICflh4AnLFxuXG5cdFx0J+iZlSc6ICflpIQnLFxuXG5cdFx0J+aGgic6ICflv6cnLFxuXHRcdCflhKonOiAn5LyYJyxcblxuXHRcdCfnhZknOiAn54OfJyxcblxuXHRcdCfntqsnOiAn57q/Jyxcblx0XHQn57eaJzogJ+e8kCcsXG5cblx0XHQn6LKzJzogJ+i0sCcsXG5cblx0XHQvLyDku6XpmLLokKzkuIAg5Zug54K6IG9wZW5jYyDpgbjnlKjnmoTlrZfmmK8g5paw5a2X6auUIOeahCDmsJdcblx0XHQn5rCjJzogJ+awlCcsXG5cblx0XHQn5ZK4JzogJ+m5uScsXG5cblx0XHQn5YmXJzogJ+WIrCcsXG5cdFx0J+mPnyc6ICfpk7InLFxuXG5cdFx0J+ebpCc6ICfnm5gnLFxuXG5cdFx0J+aOoSc6ICfph4cnLFxuXG5cdFx0J+ajsic6ICfmoJYnLFxuXG5cdFx0J+aasSc6ICfmmLUnLFxuXG5cdFx0J+e5qCc6ICfwq4SkJyxcblx0fSlcblx0LmZvckVhY2goZnVuY3Rpb24gKHYpXG5cdHtcblx0XHRsZXQgW3QsIHNdID0gdjtcblxuXHRcdHRhYmxlX3R3MmNuW3RdID0gcztcblx0XHR0YWJsZV9jbjJ0d1tzXSA9IHQ7XG5cdH0pXG47XG5cbltcblx0Ly8g5LiN6L2J5o+b55qE5YWx55So5a2XXG5cdCfmnK0nLFxuXHQn6LC3Jyxcblx0J+axoScsXG5cdCfmsZknLFxuXHQn5ri4Jyxcblx0J+mBiicsXG5cdCfkvJknLFxuXHQn5aSlJyxcblx0J+W+oScsXG5cdCfpg4EnLFxuXHQn5ZKUJyxcblx0J+WToicsXG5cdCflh4wnLFxuXHQn5repJyxcblx0J+aJjicsXG5cdCfntK4nLFxuXHQn55e0Jyxcblx0J+eZoScsXG5cdC8vJ+WSuCcsXG5cdC8vJ+WHhicsXG5cdC8vJ+ajsicsXG5cdC8vJ+aglicsXG5cdCflmq8nLFxuXHQvLyfkvZknLFxuXHQn6JaRJyxcblx0J+WnnCcsXG5cdCfmiaEnLFxuXHQn5ommJyxcblx0J+aNuycsXG5cdCfmkponLFxuXHQn6YGdJyxcblx0J+aykycsXG5cdC8vJ+a3qCcsXG5cdCfmoJcnLFxuXHQn5oy9Jyxcblx0J+eBticsXG5cdCfnq4gnLFxuXHQn6ZyJJyxcblx0J+m7tCcsXG5cdCfmrLInLFxuXHQn5oW+Jyxcblx0J+W+gScsXG5cdCforponLFxuXHQn6I+4Jyxcblx0J+aLvicsXG5cdCfljYEnLFxuXHQn6Ki8Jyxcblx0J+aNsicsXG5cdCfljbcnLFxuXHQn54e7Jyxcblx0J+eGjycsXG5cdCflkIEnLFxuXHQn57GyJyxcblx0J+m+pScsXG5cdCfouaAnLFxuXHQn6LeWJyxcblx0J+efvScsXG5cdCfnoYUnLFxuXHQn6ISpJyxcblx0J+S/ricsXG5cdCfnip8nLFxuXHQn5Ym3Jyxcblx0J+WZvCcsXG5cdCfliognLFxuXHQn5pOXJyxcblx0J+aguCcsXG5cdCfopognLFxuXHQn5oa3Jyxcblx0J+WRvCcsXG5cdCfllL8nLFxuXHQn5ZesJyxcblx0J+WRtScsXG5cdCfohKMnLFxuXHQn5ZSHJyxcblx0J+WUhycsXG5cdCfljYcnLFxuXHQn5piHJyxcblx0J+ejkCcsXG5cdCfmuqonLFxuXHQn5riTJyxcblx0J+iwvycsXG5cdCfltaAnLFxuXHQn56WQJyxcblx0J+S9kScsXG5cdCflqq4nLFxuXHQn5YG3Jyxcblx0J+eTricsXG5cdCfnvYsnLFxuXHQn55SVJyxcblx0J+mXhycsXG5cdCfmmpcnLFxuXHQn5L2IJyxcblx0J+W4gycsXG5cdCfnl7onLFxuXHQn55e5JyxcblxuXHQn6ZuHJyxcblx0J+WDsScsXG5cblx0J+enmCcsXG5cdCfnpZUnLFxuXG5dLmZvckVhY2goZnVuY3Rpb24gKHYpXG57XG5cdHRhYmxlX3R3MmNuW3ZdID0gdjtcblx0dGFibGVfY24ydHdbdl0gPSB2O1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGV4cG9ydHMgYXMgdHlwZW9mIGltcG9ydCgnLi90YWJsZScpO1xuIl19
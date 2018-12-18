"use strict";
/**
 * Created by user on 2018/2/17/017.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../convert/index");
const util_1 = require("../../util");
const deepmerge = require("deepmerge-plus");
exports._table_tw = {
    '罗': '羅',
    '恶': '惡',
    '苏': '蘇',
    '馆': '館',
};
/**
 * 此表內只有符合 KEY 值時才會觸發
 */
exports.table_jp = {
    'の': [
        'の',
        '之',
        '的',
    ],
    'と': [
        'と',
        '與',
        '与',
    ],
    '画': [
        '划',
        '画',
        '劃',
        '畫',
    ],
    '闘': [
        '斗',
    ],
    '鬥': [
        '斗',
    ],
    '鬭': [
        '斗',
    ],
    '鬪': [
        '斗',
    ],
    '闇': [
        '暗',
    ],
    '図': [
        '図',
        '圖',
        '图',
    ],
    '当': [
        '当',
        '噹',
        '當',
        '儅',
    ],
    '閤': [
        '合',
    ],
    '阁': [
        '合',
    ],
    '罗': [
        '羅',
        '罗',
        '儸',
        '㑩',
        '囉',
        '啰',
    ],
    '干': [
        '幹',
        '乾',
        '干',
    ],
    '幹': [
        '幹',
        '干',
    ],
    '乾': [
        '干',
        '乾',
        '亁',
        '乹',
    ],
    '亁': [
        '乾',
        '亁',
        '乹',
    ],
    '乹': [
        '乾',
        '亁',
        '乹',
    ],
    '历': [
        '历',
        '歴',
        '歷',
        '暦',
        '曆',
    ],
    '歴': [
        '历',
    ],
    '歷': [
        '历',
    ],
    '暦': [
        '历',
    ],
    '曆': [
        '历',
    ],
    '呻': [
        '呻',
        '申',
    ],
    '覆': [
        '覆',
        '复',
    ],
    '勉': [
        '免',
    ],
    '勉': [
        '免',
    ],
    '甦': [
        '甦',
        '蘇',
        '苏',
    ],
    '忧': [
        '憂',
        '優',
    ],
    '鹹': [
        '咸',
        '鹹',
    ],
    '准': [
        '準',
        '准',
    ],
    '準': [
        '準',
        '准',
    ],
    '袮': [
        '袮',
        // 並非異體字 但由於過度相似 容易錯誤
        '祢',
    ],
    '儘': [
        '儘',
        '侭',
    ],
    '侭': [
        '儘',
        '侭',
    ],
    '脏': [
        '脏',
        '髒',
        '臟',
    ],
    '发': [
        '髮',
        '髪',
        '发',
    ],
    '髮': [
        '發',
        '发',
    ],
    '慾': [
        '慾',
        '欲',
    ],
    '讚': [
        '讃',
        '讚',
        '贊',
        '赞',
        '賛',
    ],
    '冲': [
        '冲',
        '沖',
        '衝',
    ],
    '面': [
        '麵',
        '麪',
        '麺',
    ],
    '鬚': [
        '鬚',
        '須',
        '须',
    ],
    '揹': [
        '揹',
        '背',
    ],
    '捲': [
        '捲',
        '卷',
        '巻',
    ],
    '卷': [
        '捲',
        '卷',
        '巻',
        '劵',
        '券',
    ],
    '巻': [
        '捲',
        '卷',
        '巻',
        '劵',
        '券',
    ],
    '苏': [
        '苏',
        '蘇',
        '甦',
    ],
    '瀏': [
        '瀏',
        '浏',
        '刘',
    ],
    '浏': [
        '瀏',
        '浏',
        '刘',
    ],
    '吁': [
        '籲',
        //'龥',
        '吁',
    ],
    '囉': [
        '囉',
        '啰',
        '罗',
        '羅',
    ],
    '啰': [
        '囉',
        '啰',
        '罗',
        '羅',
    ],
    '修': [
        '修',
        '俢',
    ],
    '犟': [
        '犟',
        '強',
        '强',
    ],
    '嗬': [
        '嗬',
        '呵',
    ],
    '唿': [
        '唿',
        '呼',
    ],
    '媮': [
        '媮',
        '偷',
    ],
    '采': [
        '采',
        '採',
    ],
    '彩': [
        '彩',
        '采',
    ],
    '𠩺': [
        '𠩺',
        '釐',
    ],
};
/**
 * 此表內符合以下任意值時會觸發
 */
exports.table_plus = {
    '劍': [
        '劍',
        '剑',
        '剣',
        '劎',
        '劒',
        '剱',
        '劔',
    ],
    '砲': [
        '砲',
        '炮',
    ],
    '偽': [
        '偽',
        '僞',
    ],
    '內': [
        '內',
        '内',
    ],
    '鬥': [
        '鬭',
        '鬥',
        '闘',
        '鬪',
    ],
    '鶏': [
        '鶏',
        '鷄',
        '雞',
        '鸡',
    ],
    '兎': [
        '兎',
        '兔',
    ],
    '坏': [
        '坯',
        '坏',
        "壊",
        "壞",
    ],
    '殻': [
        '殻',
        '殼',
        '壳',
    ],
    '像': [
        '像',
        '象',
    ],
    '蘇': [
        '苏',
        '蘇',
        '囌',
    ],
    '館': [
        '館',
        '館',
        '舘',
        '馆',
    ],
    '鳥': [
        '鳥',
        '鸟',
        '𫠓',
    ],
    '視': [
        '視',
        '視',
        '视',
        '眎',
    ],
    '険': [
        '険',
        '險',
        '险',
        '嶮',
        '崄',
    ],
    '絶': [
        '絶',
        '絕',
        '绝',
    ],
    '鉄': [
        '鉄',
        '鐵',
        '铁',
        '鐡',
    ],
    '諸': [
        '諸',
        '諸',
        '诸',
    ],
    '尋': [
        '尋',
        '寻',
        '𡬶',
    ],
    '裡': [
        '裡',
        '裏',
        '里',
    ],
    '鑑': [
        '鑑',
        '鉴',
        '鑒',
    ],
    '麵': [
        '麵',
        '麪',
        '麺',
    ],
    '歲': [
        '歲',
        '歳',
        '岁',
    ],
    // https://zh.wikipedia.org/wiki/%E9%8D%BE%E5%A7%93
    '鐘': [
        '鐘',
        '鍾',
        '钟',
        '锺',
    ],
    '會': [
        '會',
        '会',
        '㑹',
    ],
    '塗': [
        '塗',
        '凃',
        '涂',
    ],
    '髮': [
        '髮',
        '髪',
    ],
    '話': [
        '話',
        '话',
        '䛡',
    ],
    '閤': [
        '閤',
        '阁',
    ],
    '蔘': [
        '蔘',
        '參',
        '参',
    ],
    '労': [
        '労',
        '勞',
        '劳',
    ],
    '国': [
        '国',
        '囯',
        '國',
    ],
    '罵': [
        '罵',
        '骂',
        '駡',
    ],
    '対': [
        '対',
        '對',
        '对',
    ],
    '鏽': [
        '鏽',
        '銹',
        '锈',
    ],
    '駄': [
        '駄',
        '䭾',
        '馱',
        '驮',
    ],
    '薩': [
        '薩',
        '萨',
        '蕯',
    ],
    '単': [
        '単',
        '單',
        '单',
    ],
    '継': [
        '継',
        '繼',
        '继',
    ],
    '驗': [
        '驗',
        '验',
        '騐',
        '験',
    ],
    '歴': [
        '歴',
        '歷',
    ],
    '暦': [
        //'歴',
        //'歷',
        '暦',
        '曆',
    ],
    '団': [
        '团',
        '団',
        '團',
    ],
    '麼': [
        '麼',
        '麽',
        '庅',
    ],
    '戰': [
        '戦',
        '戰',
        '战',
    ],
    '乡': [
        '郷',
        '鄕',
        '鄉',
        '鄊',
        '乡',
    ],
    '勉': [
        '勉',
        '勉',
    ],
    '餘': [
        '餘',
        '馀',
        '余',
    ],
    '網': [
        '網',
        '䋄',
        '䋞',
        '网',
    ],
    '託': [
        '託',
        '讬',
        '侂',
        '托',
    ],
    '纖': [
        '纖',
        '纤',
        '縴',
        '繊',
    ],
    '鍊': [
        '鍊',
        '錬',
        '𫔀',
        '炼',
        '煉',
    ],
    '擊': [
        '撃',
        '擊',
        '击',
    ],
    '實': [
        '實',
        '実',
        '实',
        '寔',
    ],
    '於': [
        '於',
        '扵',
    ],
    '證': [
        '證',
        '証',
        '证',
    ],
    '據': [
        '據',
        '据',
        '拠',
    ],
    '處': [
        '處',
        '处',
        '䖏',
        '処',
    ],
    '瞪': [
        '瞪',
        '瞠',
        '眙',
    ],
    '肢': [
        '肢',
        '胑',
    ],
    '肉': [
        '肉',
        '宍',
        '𠕎',
    ],
    '憂': [
        '憂',
        '𢝊',
        '𢚧',
        '𢟜',
        '懮',
        '𨗫',
    ],
    '繫': [
        '繫',
        //'系',
        '繋',
    ],
    '廻': [
        '廻',
        '迴',
    ],
    '録': [
        '録',
        '錄',
        '录',
    ],
    '鎗': [
        '鎗',
        '槍',
        '枪',
    ],
    '悠': [
        '悠',
        '滺',
    ],
    '壶': [
        '壶',
        '壺',
        '壷',
    ],
    '茲': [
        '茲',
        '兹',
        '玆',
    ],
    '蓋': [
        '蓋',
        '盖',
        '葢',
    ],
    '蹟': [
        '蹟',
        '跡',
        '迹',
    ],
    '癒': [
        '癒',
        '瘉',
    ],
    '辺': [
        '辺',
        '邊',
        '边',
        '邉',
    ],
    '準': [
        '準',
        '凖',
    ],
    '衛': [
        '衛',
        '衞',
        '卫',
    ],
    '晚': [
        '晚',
        '晩',
    ],
    '裸': [
        '裸',
        '躶',
    ],
    '亀': [
        '亀',
        '龜',
        '龟',
        '𪚧',
        '𪚿',
        '𠃾',
    ],
    '凼': [
        '凼',
        '氹',
    ],
    '艸': [
        '艸',
        '草',
    ],
    '札': [
        '箚',
        '剳',
    ],
    '复': [
        '复',
        '復',
        '複',
    ],
    '污': [
        '污',
        '汙',
        '汚',
    ],
    '伙': [
        '伙',
        '夥',
    ],
    '御': [
        '御',
        '禦',
    ],
    '鬱': [
        '鬱',
        '郁',
    ],
    '淩': [
        '淩',
        '凌',
    ],
    '紮': [
        '紮',
        '扎',
    ],
    '痴': [
        '痴',
        '癡',
    ],
    '栖': [
        '栖',
        '棲',
    ],
    '犇': [
        '犇',
        '奔',
    ],
    '範': [
        '範',
        '范',
    ],
    '薑': [
        '薑',
        '姜',
        '葁',
    ],
    '樸': [
        '樸',
        '朴',
    ],
    '諮': [
        '諮',
        '谘',
        '咨',
    ],
    '撚': [
        '撚',
        '捻',
    ],
    '喂': [
        '喂',
        '餵',
        '餧',
    ],
    '淨': [
        '淨',
        '凈',
        '净',
    ],
    '栗': [
        '栗',
        '慄',
    ],
    '挽': [
        '挽',
        '輓',
    ],
    '灶': [
        '灶',
        '竈',
    ],
    '線': [
        '線',
        '缐',
        '綫',
        '线',
    ],
    '盡': [
        '盡',
        '尽',
        '儘',
    ],
    '黴': [
        '黴',
        '霉',
    ],
    '周': [
        '周',
        '週',
    ],
    '並': [
        '並',
        '并',
        '併',
    ],
    '讚': [
        '讚',
        '讃',
    ],
    '観': [
        '観',
        '觀',
        '观',
        '覌',
    ],
    '遊': [
        '遊',
        '游',
    ],
    '启': [
        '启',
        '啓',
        '啟',
        '啔',
    ],
    '廄': [
        '廄',
        '厩',
        '廐',
        '廏',
    ],
    '氣': [
        '気',
        '氣',
        '气',
    ],
    '欲': [
        '慾',
        '欲',
    ],
    '傑': [
        '傑',
        '杰',
    ],
    '鍛': [
        '鍛',
        '锻',
        '煅',
    ],
    '徵': [
        '徵',
        '徴',
    ],
    '閒': [
        '閒',
        '𫔮',
        '閑',
        '闲',
    ],
    '贊': [
        '贊',
        '赞',
        '賛',
    ],
    '櫻': [
        '櫻',
        '桜',
        '樱',
    ],
    '尨': [
        '尨',
        '狵',
    ],
    '圈': [
        '圈',
        '圏',
    ],
    '凶': [
        '凶',
        '兇',
    ],
    '浜': [
        '浜',
        '濱',
        '滨',
    ],
    '煙': [
        '煙',
        '烟',
        '菸',
    ],
    '黒': [
        '黒',
        '黑',
    ],
    '樂': [
        '樂',
        '乐',
        '楽',
    ],
    '薬': [
        '薬',
        '藥',
        '药',
    ],
    '劵': [
        '劵',
        '券',
        '卷',
    ],
    '貳': [
        '貳',
        '贰',
        '弐',
        '貮',
        '𢎐',
        '二',
    ],
    '隷': [
        '隷',
        '隸',
        '隶',
    ],
    '姫': [
        '姫',
        '姬',
    ],
    '燻': [
        '燻',
        '熏',
    ],
    '籲': [
        '籲',
        '龥',
    ],
    '齧': [
        '齧',
        '啮',
        '𪘂',
        '囓',
        '噛',
        '嚙',
    ],
    '鹼': [
        '鹼',
        '碱',
        '硷',
    ],
    '咸': [
        '咸',
        '鹹',
    ],
    '穗': [
        '穗',
        '穂',
    ],
    '廢': [
        '廢',
        '廃',
        '废',
    ],
    '蹠': [
        '蹠',
        '跖',
    ],
    '吒': [
        '吒',
        '咤',
    ],
    '剷': [
        '剷',
        '鏟',
        '铲',
        '刬',
        '剗',
    ],
    '擗': [
        '擗',
        '劈',
    ],
    '核': [
        '核',
        '覈',
    ],
    '脣': [
        '脣',
        '唇',
        '唇',
    ],
    '升': [
        '升',
        '昇',
    ],
    '磐': [
        '磐',
        '盤',
        '盘',
    ],
    '溪': [
        '溪',
        '渓',
    ],
    '谿': [
        '谿',
        '嵠',
    ],
    '折': [
        '折',
        '摺',
    ],
    '祐': [
        '祐',
        '佑',
    ],
    '瓮': [
        '瓮',
        '罋',
        '甕',
    ],
    '蹤': [
        '蹤',
        '踪',
        '踨',
    ],
    '暗': [
        '闇',
        '暗',
    ],
    '昵': [
        '昵',
        '暱',
    ],
    '布': [
        '布',
        '佈',
    ],
    '為': [
        '為',
        '为',
        '爲',
    ],
    '綳': [
        '綳',
        '繃',
        '绷',
    ],
    '痺': [
        '痺',
        '痹',
    ],
    '痲': [
        '痲',
        '痳',
    ],
    '雇': [
        '雇',
        '僱',
    ],
    '敘': [
        '敘',
        '叙',
        '敍',
    ],
    '盪': [
        '盪',
        '蕩',
        '荡',
    ],
    '勛': [
        '勛',
        '勳',
        '勋',
    ],
    '祕': [
        '祕',
        '秘',
    ],
    '牆': [
        '牆',
        '墙',
        '墻',
    ],
    '爾': [
        '爾',
        '尔',
        '尓',
    ],
    '焰': [
        '焰',
        '焔',
    ],
};
Object.keys(exports.table_plus)
    .forEach(function (key) {
    exports.table_plus[key] = util_1.array_unique(exports.table_plus[key]);
    exports.table_plus[key].forEach(function (s) {
        exports.table_plus[s] = exports.table_plus[key];
    });
});
// @ts-ignore
exports.table_jp = deepmerge(exports.table_jp, exports.table_plus);
Object.keys(exports.table_jp)
    .forEach(function (key) {
    exports.table_jp[key] = util_1.array_unique(exports.table_jp[key]);
});
exports._table_cn = _update({}, exports._table_tw);
function _update(target, source) {
    target = Object.keys(source)
        .reduce(function (a, b) {
        a[source[b]] = b;
        return a;
    }, {});
    return target;
}
exports._update = _update;
function _get(arr, value, ...values) {
    let ret = []
        .concat(value)
        .concat(...values)
        .filter(function (v) {
        return v;
    });
    //ret.length && ret.sort();
    return ret;
}
exports._get = _get;
function jp(char, options = {}) {
    let a = [];
    a = _get(a, exports.table_jp[char]);
    return a;
}
exports.jp = jp;
function tw(char, options = {}) {
    let a = [];
    a = _get(a, exports._table_tw[char], index_1.cn2tw(char, options));
    //console.log('cn2tw', char, a);
    return a;
}
exports.tw = tw;
function cn(char, options = {}) {
    let a = [];
    a = _get(a, exports._table_cn[char], index_1.tw2cn(char, options));
    //console.log('tw2cn', char, a);
    return a;
}
exports.cn = cn;
const self = require("./table");
exports.default = self;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YWJsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7O0dBRUc7O0FBR0gsNENBQStDO0FBQy9DLHFDQUEwQztBQUMxQyw0Q0FBNEM7QUFFakMsUUFBQSxTQUFTLEdBQUc7SUFDdEIsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7Q0FDUixDQUFDO0FBRUY7O0dBRUc7QUFDUSxRQUFBLFFBQVEsR0FBRztJQUNyQixHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO0tBQ0g7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gscUJBQXFCO1FBQ3JCLEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILE1BQU07UUFDTixHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUVIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELElBQUksRUFBRTtRQUNMLElBQUk7UUFDSixHQUFHO0tBQ0g7Q0FFRCxDQUFDO0FBRUY7O0dBRUc7QUFDUSxRQUFBLFVBQVUsR0FBRztJQUN2QixHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBRUg7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILElBQUk7S0FDSjtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxJQUFJO0tBQ0o7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELG1EQUFtRDtJQUNuRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FFSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUVILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBR0g7SUFFRCxHQUFHLEVBQUU7UUFDSixNQUFNO1FBQ04sTUFBTTtRQUNOLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxJQUFJO1FBRUosR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILElBQUk7S0FDSjtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxJQUFJO1FBQ0osSUFBSTtRQUNKLElBQUk7UUFDSixHQUFHO1FBQ0gsSUFBSTtLQUNKO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILE1BQU07UUFDTixHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILElBQUk7UUFDSixJQUFJO1FBQ0osSUFBSTtLQUNKO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsSUFBSTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsSUFBSTtRQUNKLEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxJQUFJO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFF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QyxHQUFHLElBQUksQ0FBQyxDQUFDLEVBQUUsaUJBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxhQUFLLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFFbkQsZ0NBQWdDO0lBRWhDLE9BQU8sQ0FBQyxDQUFDO0FBQ1YsQ0FBQztBQVRELGdCQVNDO0FBRUQsU0FBZ0IsRUFBRSxDQUFDLElBQVksRUFBRSxVQUFvQixFQUFFO0lBRXRELElBQUksQ0FBQyxHQUFhLEVBQUUsQ0FBQztJQUVyQixDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsRUFBRSxpQkFBUyxDQUFDLElBQUksQ0FBQyxFQUFFLGFBQUssQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUVuRCxnQ0FBZ0M7SUFFaEMsT0FBTyxDQUFDLENBQUM7QUFDVixDQUFDO0FBVEQsZ0JBU0M7QUFFRCxnQ0FBZ0M7QUFFaEMsa0JBQWUsSUFBSSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IHVzZXIgb24gMjAxOC8yLzE3LzAxNy5cbiAqL1xuXG5pbXBvcnQgeyBJT3B0aW9ucyB9IGZyb20gJy4uL2NvbnZlcnQvY29yZSc7XG5pbXBvcnQgeyB0dzJjbiwgY24ydHd9IGZyb20gJy4uL2NvbnZlcnQvaW5kZXgnO1xuaW1wb3J0IHsgYXJyYXlfdW5pcXVlIH0gZnJvbSAnLi4vLi4vdXRpbCc7XG5pbXBvcnQgKiBhcyBkZWVwbWVyZ2UgZnJvbSAnZGVlcG1lcmdlLXBsdXMnO1xuXG5leHBvcnQgbGV0IF90YWJsZV90dyA9IHtcblx0J+e9lyc6ICfnvoUnLFxuXHQn5oG2JzogJ+aDoScsXG5cdCfoi48nOiAn6JiHJyxcblx0J+mmhic6ICfppKgnLFxufTtcblxuLyoqXG4gKiDmraTooajlhaflj6rmnInnrKblkIggS0VZIOWAvOaZguaJjeacg+inuOeZvFxuICovXG5leHBvcnQgbGV0IHRhYmxlX2pwID0ge1xuXHQn44GuJzogW1xuXHRcdCfjga4nLFxuXHRcdCfkuYsnLFxuXHRcdCfnmoQnLFxuXHRdLFxuXG5cdCfjgagnOiBbXG5cdFx0J+OBqCcsXG5cdFx0J+iIhycsXG5cdFx0J+S4jicsXG5cdF0sXG5cblx0J+eUuyc6IFtcblx0XHQn5YiSJyxcblx0XHQn55S7Jyxcblx0XHQn5YqDJyxcblx0XHQn55WrJyxcblx0XSxcblx0J+mXmCc6IFtcblx0XHQn5paXJyxcblx0XSxcblx0J+mspSc6IFtcblx0XHQn5paXJyxcblx0XSxcblx0J+msrSc6IFtcblx0XHQn5paXJyxcblx0XSxcblx0J+msqic6IFtcblx0XHQn5paXJyxcblx0XSxcblx0J+mXhyc6IFtcblx0XHQn5pqXJyxcblx0XSxcblx0J+Wbsyc6IFtcblx0XHQn5ZuzJyxcblx0XHQn5ZyWJyxcblx0XHQn5Zu+Jyxcblx0XSxcblx0J+W9kyc6IFtcblx0XHQn5b2TJyxcblx0XHQn5Zm5Jyxcblx0XHQn55W2Jyxcblx0XHQn5YSFJyxcblx0XSxcblxuXHQn6ZakJzogW1xuXHRcdCflkIgnLFxuXHRdLFxuXHQn6ZiBJzogW1xuXHRcdCflkIgnLFxuXHRdLFxuXG5cdCfnvZcnOiBbXG5cdFx0J+e+hScsXG5cdFx0J+e9lycsXG5cdFx0J+WEuCcsXG5cdFx0J+ORqScsXG5cdFx0J+WbiScsXG5cdFx0J+WVsCcsXG5cdF0sXG5cblx0J+W5sic6IFtcblx0XHQn5bm5Jyxcblx0XHQn5Lm+Jyxcblx0XHQn5bmyJyxcblx0XSxcblxuXHQn5bm5JzogW1xuXHRcdCflubknLFxuXHRcdCflubInLFxuXHRdLFxuXG5cdCfkub4nOiBbXG5cdFx0J+W5sicsXG5cdFx0J+S5vicsXG5cdFx0J+S6gScsXG5cdFx0J+S5uScsXG5cdF0sXG5cdCfkuoEnOiBbXG5cdFx0J+S5vicsXG5cdFx0J+S6gScsXG5cdFx0J+S5uScsXG5cdF0sXG5cdCfkubknOiBbXG5cdFx0J+S5vicsXG5cdFx0J+S6gScsXG5cdFx0J+S5uScsXG5cdF0sXG5cblx0J+WOhic6IFtcblx0XHQn5Y6GJyxcblx0XHQn5q20Jyxcblx0XHQn5q23Jyxcblx0XHQn5pqmJyxcblx0XHQn5puGJyxcblx0XSxcblxuXHQn5q20JzogW1xuXHRcdCfljoYnLFxuXHRdLFxuXHQn5q23JzogW1xuXHRcdCfljoYnLFxuXHRdLFxuXHQn5pqmJzogW1xuXHRcdCfljoYnLFxuXHRdLFxuXHQn5puGJzogW1xuXHRcdCfljoYnLFxuXHRdLFxuXG5cdCflkbsnOiBbXG5cdFx0J+WRuycsXG5cdFx0J+eUsycsXG5cdF0sXG5cblx0J+imhic6IFtcblx0XHQn6KaGJyxcblx0XHQn5aSNJyxcblx0XSxcblxuXHQn5YuJJzogW1xuXHRcdCflhY0nLFxuXHRdLFxuXG5cdCfvqLMnOiBbXG5cdFx0J+WFjScsXG5cdF0sXG5cblx0J+eUpic6IFtcblx0XHQn55SmJyxcblx0XHQn6JiHJyxcblx0XHQn6IuPJyxcblx0XSxcblxuXHQn5b+nJzogW1xuXHRcdCfmhoInLFxuXHRcdCflhKonLFxuXHRdLFxuXG5cdCfpubknOiBbXG5cdFx0J+WSuCcsXG5cdFx0J+m5uScsXG5cdF0sXG5cblx0J+WHhic6IFtcblx0XHQn5rqWJyxcblx0XHQn5YeGJyxcblx0XSxcblxuXHQn5rqWJzogW1xuXHRcdCfmupYnLFxuXHRcdCflh4YnLFxuXHRdLFxuXG5cdCfooq4nOiBbXG5cdFx0J+iiricsXG5cdFx0Ly8g5Lim6Z2e55Ww6auU5a2XIOS9hueUseaWvOmBjuW6puebuOS8vCDlrrnmmJPpjK/oqqRcblx0XHQn56WiJyxcblx0XSxcblxuXHQn5YSYJzogW1xuXHRcdCflhJgnLFxuXHRcdCfkvq0nLFxuXHRdLFxuXG5cdCfkvq0nOiBbXG5cdFx0J+WEmCcsXG5cdFx0J+S+rScsXG5cdF0sXG5cblx0J+iEjyc6IFtcblx0XHQn6ISPJyxcblx0XHQn6auSJyxcblx0XHQn6IefJyxcblx0XSxcblxuXHQn5Y+RJzogW1xuXHRcdCfpq64nLFxuXHRcdCfpq6onLFxuXHRcdCflj5EnLFxuXHRdLFxuXG5cdCfpq64nOiBbXG5cdFx0J+eZvCcsXG5cdFx0J+WPkScsXG5cdF0sXG5cblx0J+aFvic6IFtcblx0XHQn5oW+Jyxcblx0XHQn5qyyJyxcblx0XSxcblxuXHQn6K6aJzogW1xuXHRcdCforoMnLFxuXHRcdCforponLFxuXHRcdCfotIonLFxuXHRcdCfotZ4nLFxuXHRcdCfos5snLFxuXHRdLFxuXG5cdCflhrInOiBbXG5cdFx0J+WGsicsXG5cdFx0J+aylicsXG5cdFx0J+ihnScsXG5cdF0sXG5cblx0J+mdoic6IFtcblx0XHQn6bq1Jyxcblx0XHQn6bqqJyxcblx0XHQn6bq6Jyxcblx0XSxcblxuXHQn6ayaJzogW1xuXHRcdCfprJonLFxuXHRcdCfpoIgnLFxuXHRcdCfpobsnLFxuXHRdLFxuXG5cdCfmj7knOiBbXG5cdFx0J+aPuScsXG5cdFx0J+iDjCcsXG5cdF0sXG5cblx0J+aNsic6IFtcblx0XHQn5o2yJyxcblx0XHQn5Y23Jyxcblx0XHQn5be7Jyxcblx0XSxcblxuXHQn5Y23JzogW1xuXHRcdCfmjbInLFxuXHRcdCfljbcnLFxuXHRcdCflt7snLFxuXHRcdCflirUnLFxuXHRcdCfliLgnLFxuXHRdLFxuXG5cdCflt7snOiBbXG5cdFx0J+aNsicsXG5cdFx0J+WNtycsXG5cdFx0J+W3uycsXG5cdFx0J+WKtScsXG5cdFx0J+WIuCcsXG5cdF0sXG5cblx0J+iLjyc6IFtcblx0XHQn6IuPJyxcblx0XHQn6JiHJyxcblx0XHQn55SmJyxcblx0XSxcblxuXHQn54CPJzogW1xuXHRcdCfngI8nLFxuXHRcdCfmtY8nLFxuXHRcdCfliJgnLFxuXHRdLFxuXHQn5rWPJzogW1xuXHRcdCfngI8nLFxuXHRcdCfmtY8nLFxuXHRcdCfliJgnLFxuXHRdLFxuXG5cdCflkIEnOiBbXG5cdFx0J+exsicsXG5cdFx0Ly8n6b6lJyxcblx0XHQn5ZCBJyxcblx0XSxcblxuXHQn5ZuJJzogW1xuXHRcdCflm4knLFxuXHRcdCfllbAnLFxuXHRcdCfnvZcnLFxuXHRcdCfnvoUnLFxuXHRdLFxuXG5cdCfllbAnOiBbXG5cdFx0J+WbiScsXG5cdFx0J+WVsCcsXG5cdFx0J+e9lycsXG5cdFx0J+e+hScsXG5cdF0sXG5cblx0J+S/ric6IFtcblx0XHQn5L+uJyxcblx0XHQn5L+iJyxcblx0XSxcblxuXHQn54qfJzogW1xuXHRcdCfnip8nLFxuXHRcdCflvLcnLFxuXHRcdCflvLonLFxuXHRdLFxuXG5cdCfll6wnOiBbXG5cdFx0J+WXrCcsXG5cdFx0J+WRtScsXG5cdF0sXG5cblx0J+WUvyc6IFtcblx0XHQn5ZS/Jyxcblx0XHQn5ZG8Jyxcblx0XSxcblxuXHQn5aquJzogW1xuXHRcdCflqq4nLFxuXHRcdCflgbcnLFxuXHRdLFxuXG5cdCfph4cnOiBbXG5cdFx0J+mHhycsXG5cdFx0J+aOoScsXG5cdFx0Ly8n5Z+wJyxcblx0XSxcblxuXHQn5b2pJzogW1xuXHRcdCflvaknLFxuXHRcdCfph4cnLFxuXHRdLFxuXG5cdCfwoKm6JzogW1xuXHRcdCfwoKm6Jyxcblx0XHQn6YeQJyxcblx0XSxcblxufTtcblxuLyoqXG4gKiDmraTooajlhafnrKblkIjku6XkuIvku7vmhI/lgLzmmYLmnIPop7jnmbxcbiAqL1xuZXhwb3J0IGxldCB0YWJsZV9wbHVzID0ge1xuXHQn5YqNJzogW1xuXHRcdCflio0nLFxuXHRcdCfliZEnLFxuXHRcdCfliaMnLFxuXHRcdCflio4nLFxuXHRcdCflipInLFxuXHRcdCflibEnLFxuXHRcdCflipQnLFxuXHRdLFxuXHQn56CyJzogW1xuXHRcdCfnoLInLFxuXHRcdCfngq4nLFxuXHRdLFxuXHQn5YG9JzogW1xuXHRcdCflgb0nLFxuXHRcdCflg54nLFxuXHRdLFxuXHQn5YWnJzogW1xuXHRcdCflhacnLFxuXHRcdCflhoUnLFxuXHRdLFxuXHQn6aylJzogW1xuXHRcdCfprK0nLFxuXHRcdCfprKUnLFxuXHRcdCfpl5gnLFxuXHRcdCfprKonLFxuXHRcdC8vJ+aWlycsXG5cdF0sXG5cdCfpto8nOiBbXG5cdFx0J+m2jycsXG5cdFx0J+m3hCcsXG5cdFx0J+mbnicsXG5cdFx0J+m4oScsXG5cdF0sXG5cdCflhY4nOiBbXG5cdFx0J+WFjicsXG5cdFx0J+WFlCcsXG5cdF0sXG5cdCflnY8nOiBbXG5cdFx0J+WdrycsXG5cdFx0J+WdjycsXG5cdFx0XCLlo4pcIixcblx0XHRcIuWjnlwiLFxuXHRdLFxuXHQn5q67JzogW1xuXHRcdCfmrrsnLFxuXHRcdCfmrrwnLFxuXHRcdCflo7MnLFxuXHRdLFxuXHQn5YOPJzogW1xuXHRcdCflg48nLFxuXHRcdCfosaEnLFxuXHRdLFxuXHQn6JiHJzogW1xuXHRcdCfoi48nLFxuXHRcdCfomIcnLFxuXHRcdCflm4wnLFxuXHRdLFxuXHQn6aSoJzogW1xuXHRcdCfppKgnLFxuXHRcdCfvqKwnLFxuXHRcdCfoiJgnLFxuXHRcdCfppoYnLFxuXHRdLFxuXHQn6bOlJzogW1xuXHRcdCfps6UnLFxuXHRcdCfpuJ8nLFxuXHRcdCfwq6CTJyxcblx0XSxcblx0J+imlic6IFtcblx0XHQn6KaWJyxcblx0XHQn76mhJyxcblx0XHQn6KeGJyxcblx0XHQn55yOJyxcblx0XSxcblx0J+mZuic6IFtcblx0XHQn6Zm6Jyxcblx0XHQn6ZqqJyxcblx0XHQn6ZmpJyxcblx0XHQn5bauJyxcblx0XHQn5bSEJyxcblx0XSxcblx0J+e1tic6IFtcblx0XHQn57W2Jyxcblx0XHQn57WVJyxcblx0XHQn57udJyxcblx0XSxcblx0J+mJhCc6IFtcblx0XHQn6YmEJyxcblx0XHQn6ZC1Jyxcblx0XHQn6ZOBJyxcblx0XHQn6ZChJyxcblx0XSxcblx0J+iruCc6IFtcblx0XHQn6Ku4Jyxcblx0XHQn76iiJyxcblx0XHQn6K+4Jyxcblx0XSxcblx0J+Wwiyc6IFtcblx0XHQn5bCLJyxcblx0XHQn5a+7Jyxcblx0XHQn8KGsticsXG5cdF0sXG5cdCfoo6EnOiBbXG5cdFx0J+ijoScsXG5cdFx0J+ijjycsXG5cdFx0J+mHjCcsXG5cdF0sXG5cdCfpkZEnOiBbXG5cdFx0J+mRkScsXG5cdFx0J+mJtCcsXG5cdFx0J+mRkicsXG5cdF0sXG5cdCfpurUnOiBbXG5cdFx0J+m6tScsXG5cdFx0J+m6qicsXG5cdFx0J+m6uicsXG5cdF0sXG5cdCfmrbInOiBbXG5cdFx0J+atsicsXG5cdFx0J+atsycsXG5cdFx0J+WygScsXG5cdF0sXG5cdC8vIGh0dHBzOi8vemgud2lraXBlZGlhLm9yZy93aWtpLyVFOSU4RCVCRSVFNSVBNyU5M1xuXHQn6ZCYJzogW1xuXHRcdCfpkJgnLFxuXHRcdCfpjb4nLFxuXHRcdCfpkp8nLFxuXHRcdCfplLonLFxuXHRdLFxuXHQn5pyDJzogW1xuXHRcdCfmnIMnLFxuXHRcdCfkvJonLFxuXHRcdCfjkbknLFxuXHRdLFxuXHQn5aGXJzogW1xuXHRcdCfloZcnLFxuXHRcdCflh4MnLFxuXHRcdCfmtoInLFxuXHRdLFxuXG5cdCfpq64nOiBbXG5cdFx0J+mrricsXG5cdFx0J+mrqicsXG5cdFx0Ly8n5Y+RJyxcblx0XSxcblxuXHQn6KmxJzogW1xuXHRcdCfoqbEnLFxuXHRcdCfor50nLFxuXHRcdCfkm6EnLFxuXHRdLFxuXG5cdCfplqQnOiBbXG5cdFx0J+mWpCcsXG5cdFx0J+mYgScsXG5cdF0sXG5cblx0J+iUmCc6IFtcblx0XHQn6JSYJyxcblx0XHQn5Y+DJyxcblx0XHQn5Y+CJyxcblx0XSxcblxuXHQn5Yq0JzogW1xuXHRcdCflirQnLFxuXHRcdCfli54nLFxuXHRcdCflirMnLFxuXHRdLFxuXG5cdCflm70nOiBbXG5cdFx0J+WbvScsXG5cdFx0J+WbrycsXG5cdFx0J+WciycsXG5cdF0sXG5cblx0J+e9tSc6IFtcblx0XHQn5721Jyxcblx0XHQn6aqCJyxcblx0XHQn6aehJyxcblx0XSxcblxuXHQn5a++JzogW1xuXHRcdCflr74nLFxuXHRcdCflsI0nLFxuXHRcdCflr7knLFxuXHRdLFxuXG5cdCfpj70nOiBbXG5cdFx0J+mPvScsXG5cdFx0J+mKuScsXG5cdFx0J+mUiCcsXG5cdF0sXG5cblx0J+mnhCc6IFtcblx0XHQn6aeEJyxcblx0XHQn5K2+Jyxcblx0XHQn6aaxJyxcblx0XHQn6amuJyxcblx0XSxcblxuXHQn6JapJzogW1xuXHRcdCfolqknLFxuXHRcdCfokKgnLFxuXHRcdCfola8nLFxuXHRdLFxuXG5cdCfljZgnOiBbXG5cdFx0J+WNmCcsXG5cdFx0J+WWricsXG5cdFx0J+WNlScsXG5cdF0sXG5cblx0J+e2mSc6IFtcblx0XHQn57aZJyxcblx0XHQn57m8Jyxcblx0XHQn57unJyxcblx0XSxcblxuXHQn6amXJzogW1xuXHRcdCfpqZcnLFxuXHRcdCfpqownLFxuXHRcdCfpqJAnLFxuXG5cdFx0J+mokycsXG5cdF0sXG5cblx0J+attCc6IFtcblx0XHQn5q20Jyxcblx0XHQn5q23Jyxcblx0XHQvLyfmmqYnLFxuXHRcdC8vJ+abhicsXG5cdF0sXG5cblx0J+aapic6IFtcblx0XHQvLyfmrbQnLFxuXHRcdC8vJ+attycsXG5cdFx0J+aapicsXG5cdFx0J+abhicsXG5cdF0sXG5cblx0J+Wboyc6IFtcblx0XHQn5ZuiJyxcblx0XHQn5ZujJyxcblx0XHQn5ZyYJyxcblx0XSxcblxuXHQn6bq8JzogW1xuXHRcdCfpurwnLFxuXHRcdCfpur0nLFxuXHRcdCfluoUnLFxuXHRdLFxuXG5cdCfmiLAnOiBbXG5cdFx0J+aIpicsXG5cdFx0J+aIsCcsXG5cdFx0J+aImCcsXG5cdF0sXG5cblx0J+S5oSc6IFtcblx0XHQn6YO3Jyxcblx0XHQn6YSVJyxcblx0XHQn6YSJJyxcblx0XHQn6YSKJyxcblx0XHQn5LmhJyxcblx0XSxcblxuXHQn5YuJJzogW1xuXHRcdCfli4knLFxuXHRcdCfvqLMnLFxuXHRdLFxuXG5cdCfppJgnOiBbXG5cdFx0J+mkmCcsXG5cdFx0J+mmgCcsXG5cdFx0J+S9mScsXG5cdF0sXG5cblx0J+e2sic6IFtcblx0XHQn57ayJyxcblx0XHQn5IuEJyxcblx0XHQn5IueJyxcblx0XHQn572RJyxcblx0XSxcblxuXHQn6KiXJzogW1xuXHRcdCfoqJcnLFxuXHRcdCforqwnLFxuXHRcdCfkvoInLFxuXHRcdCfmiZgnLFxuXHRdLFxuXG5cdCfnupYnOiBbXG5cdFx0J+e6licsXG5cdFx0J+e6pCcsXG5cdFx0J+e4tCcsXG5cdFx0J+e5iicsXG5cdF0sXG5cblx0J+mNiic6IFtcblx0XHQn6Y2KJyxcblx0XHQn6YysJyxcblx0XHQn8KuUgCcsXG5cblx0XHQn54K8Jyxcblx0XHQn54WJJyxcblx0XSxcblxuXHQn5pOKJzogW1xuXHRcdCfmkoMnLFxuXHRcdCfmk4onLFxuXHRcdCflh7snLFxuXHRdLFxuXG5cdCflr6YnOiBbXG5cdFx0J+WvpicsXG5cdFx0J+WunycsXG5cdFx0J+WunicsXG5cdFx0J+WvlCcsXG5cdF0sXG5cblx0J+aWvCc6IFtcblx0XHQn5pa8Jyxcblx0XHQn5om1Jyxcblx0XSxcblxuXHQn6K2JJzogW1xuXHRcdCforYknLFxuXHRcdCfoqLwnLFxuXHRcdCfor4EnLFxuXHRdLFxuXG5cdCfmk5onOiBbXG5cdFx0J+aTmicsXG5cdFx0J+aNricsXG5cdFx0J+aLoCcsXG5cdF0sXG5cblx0J+iZlSc6IFtcblx0XHQn6JmVJyxcblx0XHQn5aSEJyxcblx0XHQn5JaPJyxcblx0XHQn5YemJyxcblx0XSxcblxuXHQn556qJzogW1xuXHRcdCfnnqonLFxuXHRcdCfnnqAnLFxuXHRcdCfnnJknLFxuXHRdLFxuXG5cdCfogqInOiBbXG5cdFx0J+iCoicsXG5cdFx0J+iDkScsXG5cdF0sXG5cblx0J+iCiSc6IFtcblx0XHQn6IKJJyxcblx0XHQn5a6NJyxcblx0XHQn8KCVjicsXG5cdF0sXG5cblx0J+aGgic6IFtcblx0XHQn5oaCJyxcblx0XHQn8KKdiicsXG5cdFx0J/CimqcnLFxuXHRcdCfwop+cJyxcblx0XHQn5oeuJyxcblx0XHQn8KiXqycsXG5cdF0sXG5cblx0J+e5qyc6IFtcblx0XHQn57mrJyxcblx0XHQvLyfns7snLFxuXHRcdCfnuYsnLFxuXHRdLFxuXG5cdCflu7snOiBbXG5cdFx0J+W7uycsXG5cdFx0J+i/tCcsXG5cdF0sXG5cblx0J+mMsic6IFtcblx0XHQn6YyyJyxcblx0XHQn6YyEJyxcblx0XHQn5b2VJyxcblx0XSxcblxuXHQn6Y6XJzogW1xuXHRcdCfpjpcnLFxuXHRcdCfmp40nLFxuXHRcdCfmnqonLFxuXHRdLFxuXG5cdCfmgqAnOiBbXG5cdFx0J+aCoCcsXG5cdFx0J+a7uicsXG5cdF0sXG5cblx0J+Wjtic6IFtcblx0XHQn5aO2Jyxcblx0XHQn5aO6Jyxcblx0XHQn5aO3Jyxcblx0XSxcblxuXHQn6IyyJzogW1xuXHRcdCfojLInLFxuXHRcdCflhbknLFxuXHRcdCfnjoYnLFxuXHRdLFxuXG5cdCfok4snOiBbXG5cdFx0J+iTiycsXG5cdFx0J+eblicsXG5cdFx0J+iRoicsXG5cdF0sXG5cblx0J+i5nyc6IFtcblx0XHQn6LmfJyxcblx0XHQn6LehJyxcblx0XHQn6L+5Jyxcblx0XSxcblxuXHQn55mSJzogW1xuXHRcdCfnmZInLFxuXHRcdCfnmIknLFxuXHRdLFxuXG5cdCfovronOiBbXG5cdFx0J+i+uicsXG5cdFx0J+mCiicsXG5cdFx0J+i+uScsXG5cdFx0J+mCiScsXG5cdF0sXG5cblx0J+a6lic6IFtcblx0XHQn5rqWJyxcblx0XHQn5YeWJyxcblx0XSxcblxuXHQn6KGbJzogW1xuXHRcdCfooZsnLFxuXHRcdCfooZ4nLFxuXHRcdCfljasnLFxuXHRdLFxuXG5cdCfmmZonOiBbXG5cdFx0J+aZmicsXG5cdFx0J+aZqScsXG5cdF0sXG5cblx0J+ijuCc6IFtcblx0XHQn6KO4Jyxcblx0XHQn6Lq2Jyxcblx0XSxcblxuXHQn5LqAJzogW1xuXHRcdCfkuoAnLFxuXHRcdCfpvpwnLFxuXHRcdCfpvp8nLFxuXHRcdCfwqpqnJyxcblx0XHQn8KqavycsXG5cdFx0J/Cgg74nLFxuXHRdLFxuXG5cdCflh7wnOiBbXG5cdFx0J+WHvCcsXG5cdFx0J+awuScsXG5cdF0sXG5cblx0J+iJuCc6IFtcblx0XHQn6Im4Jyxcblx0XHQn6I2JJyxcblx0XSxcblxuXHQn5pytJzogW1xuXHRcdCfnrponLFxuXHRcdCflibMnLFxuXHRdLFxuXG5cdCflpI0nOiBbXG5cdFx0J+WkjScsXG5cdFx0J+W+qScsXG5cdFx0J+ikhycsXG5cdF0sXG5cblx0J+axoSc6IFtcblx0XHQn5rGhJyxcblx0XHQn5rGZJyxcblx0XHQn5rGaJyxcblx0XSxcblxuXHQn5LyZJzogW1xuXHRcdCfkvJknLFxuXHRcdCflpKUnLFxuXHRdLFxuXG5cdCflvqEnOiBbXG5cdFx0J+W+oScsXG5cdFx0J+empicsXG5cdF0sXG5cblx0J+mssSc6IFtcblx0XHQn6ayxJyxcblx0XHQn6YOBJyxcblx0XSxcblxuXHQn5repJzogW1xuXHRcdCfmt6knLFxuXHRcdCflh4wnLFxuXHRdLFxuXG5cdCfntK4nOiBbXG5cdFx0J+e0ricsXG5cdFx0J+aJjicsXG5cdF0sXG5cblx0J+eXtCc6IFtcblx0XHQn55e0Jyxcblx0XHQn55mhJyxcblx0XSxcblxuXHQn5qCWJzogW1xuXHRcdCfmoJYnLFxuXHRcdCfmo7InLFxuXHRdLFxuXG5cdCfniocnOiBbXG5cdFx0J+eKhycsXG5cdFx0J+WllCcsXG5cdF0sXG5cblx0J+evhCc6IFtcblx0XHQn56+EJyxcblx0XHQn6IyDJyxcblx0XSxcblxuXHQn6JaRJzogW1xuXHRcdCfolpEnLFxuXHRcdCflp5wnLFxuXHRcdCfokYEnLFxuXHRdLFxuXG5cdCfmqLgnOiBbXG5cdFx0J+aouCcsXG5cdFx0J+actCcsXG5cdF0sXG5cblx0J+irric6IFtcblx0XHQn6KuuJyxcblx0XHQn6LCYJyxcblx0XHQn5ZKoJyxcblx0XSxcblxuXHQn5pKaJzogW1xuXHRcdCfmkponLFxuXHRcdCfmjbsnLFxuXHRdLFxuXG5cdCflloInOiBbXG5cdFx0J+WWgicsXG5cdFx0J+mktScsXG5cdFx0J+mkpycsXG5cdF0sXG5cblx0J+a3qCc6IFtcblx0XHQn5reoJyxcblx0XHQn5YeIJyxcblx0XHQn5YeAJyxcblx0XSxcblxuXHQn5qCXJzogW1xuXHRcdCfmoJcnLFxuXHRcdCfmhYQnLFxuXHRdLFxuXG5cdCfmjL0nOiBbXG5cdFx0J+aMvScsXG5cdFx0J+i8kycsXG5cdF0sXG5cblx0J+eBtic6IFtcblx0XHQn54G2Jyxcblx0XHQn56uIJyxcblx0XSxcblxuXHQn57eaJzogW1xuXHRcdCfnt5onLFxuXHRcdCfnvJAnLFxuXHRcdCfntqsnLFxuXHRcdCfnur8nLFxuXHRdLFxuXG5cdCfnm6EnOiBbXG5cdFx0J+eboScsXG5cdFx0J+WwvScsXG5cdFx0J+WEmCcsXG5cdF0sXG5cblx0J+m7tCc6IFtcblx0XHQn6bu0Jyxcblx0XHQn6ZyJJyxcblx0XSxcblxuXHQn5ZGoJzogW1xuXHRcdCflkagnLFxuXHRcdCfpgLEnLFxuXHRdLFxuXG5cdCfkuKYnOiBbXG5cdFx0J+S4picsXG5cdFx0J+W5ticsXG5cdFx0J+S9tScsXG5cdF0sXG5cblx0J+iumic6IFtcblx0XHQn6K6aJyxcblx0XHQn6K6DJyxcblx0XSxcblxuXHQn6KazJzogW1xuXHRcdCfoprMnLFxuXHRcdCfop4AnLFxuXHRcdCfop4InLFxuXHRcdCfopownLFxuXHRdLFxuXG5cdCfpgYonOiBbXG5cdFx0J+mBiicsXG5cdFx0J+a4uCcsXG5cdF0sXG5cblx0J+WQryc6IFtcblx0XHQn5ZCvJyxcblx0XHQn5ZWTJyxcblx0XHQn5ZWfJyxcblx0XHQn5ZWUJyxcblx0XSxcblxuXHQn5buEJzogW1xuXHRcdCflu4QnLFxuXHRcdCfljqknLFxuXHRcdCflu5AnLFxuXHRcdCflu48nLFxuXHRdLFxuXG5cdCfmsKMnOiBbXG5cdFx0J+awlycsXG5cdFx0J+awoycsXG5cdFx0J+awlCcsXG5cdF0sXG5cblx0J+assic6IFtcblx0XHQn5oW+Jyxcblx0XHQn5qyyJyxcblx0XSxcblxuXHQn5YKRJzogW1xuXHRcdCflgpEnLFxuXHRcdCfmnbAnLFxuXHRdLFxuXG5cdCfpjZsnOiBbXG5cdFx0J+mNmycsXG5cdFx0J+mUuycsXG5cdFx0J+eFhScsXG5cdF0sXG5cblx0J+W+tSc6IFtcblx0XHQn5b61Jyxcblx0XHQn5b60Jyxcblx0XSxcblxuXHQn6ZaSJzogW1xuXHRcdCfplpInLFxuXHRcdCfwq5SuJyxcblx0XHQn6ZaRJyxcblx0XHQn6ZeyJyxcblx0XSxcblxuXHQn6LSKJzogW1xuXHRcdCfotIonLFxuXHRcdCfotZ4nLFxuXHRcdCfos5snLFxuXHRdLFxuXG5cdCfmq7snOiBbXG5cdFx0J+aruycsXG5cdFx0J+ahnCcsXG5cdFx0J+aosScsXG5cdF0sXG5cblx0J+WwqCc6IFtcblx0XHQn5bCoJyxcblx0XHQn54u1Jyxcblx0XSxcblxuXHQn5ZyIJzogW1xuXHRcdCflnIgnLFxuXHRcdCflnI8nLFxuXHRdLFxuXG5cdCflh7YnOiBbXG5cdFx0J+WHticsXG5cdFx0J+WFhycsXG5cdF0sXG5cblx0J+a1nCc6IFtcblx0XHQn5rWcJyxcblx0XHQn5r+xJyxcblx0XHQn5ruoJyxcblx0XSxcblxuXHQn54WZJzogW1xuXHRcdCfnhZknLFxuXHRcdCfng58nLFxuXHRcdCfoj7gnLFxuXHRdLFxuXG5cdCfpu5InOiBbXG5cdFx0J+m7kicsXG5cdFx0J+m7kScsXG5cdF0sXG5cblx0J+aogic6IFtcblx0XHQn5qiCJyxcblx0XHQn5LmQJyxcblx0XHQn5qW9Jyxcblx0XSxcblxuXHQn6JasJzogW1xuXHRcdCfolqwnLFxuXHRcdCfol6UnLFxuXHRcdCfoja8nLFxuXHRdLFxuXG5cdCflirUnOiBbXG5cdFx0J+WKtScsXG5cdFx0J+WIuCcsXG5cdFx0J+WNtycsXG5cdF0sXG5cblx0J+iysyc6IFtcblx0XHQn6LKzJyxcblx0XHQn6LSwJyxcblx0XHQn5byQJyxcblx0XHQn6LKuJyxcblx0XHQn8KKOkCcsXG5cdFx0J+S6jCcsXG5cdF0sXG5cblx0J+matyc6IFtcblx0XHQn6Zq3Jyxcblx0XHQn6Zq4Jyxcblx0XHQn6Zq2Jyxcblx0XSxcblxuXHQn5aerJzogW1xuXHRcdCflp6snLFxuXHRcdCflp6wnLFxuXHRdLFxuXG5cdCfnh7snOiBbXG5cdFx0J+eHuycsXG5cdFx0J+eGjycsXG5cdF0sXG5cblx0J+exsic6IFtcblx0XHQn57GyJyxcblx0XHQn6b6lJyxcblx0XSxcblxuXHQn6b2nJzogW1xuXHRcdCfpvacnLFxuXHRcdCflla4nLFxuXHRcdCfwqpiCJyxcblx0XHQn5ZuTJyxcblx0XHQn5ZmbJyxcblx0XHQn5ZqZJyxcblx0XSxcblxuXHQn6bm8JzogW1xuXHRcdCfpubwnLFxuXHRcdCfnorEnLFxuXHRcdCfnobcnLFxuXHRdLFxuXG5cdCflkrgnOiBbXG5cdFx0J+WSuCcsXG5cdFx0J+m5uScsXG5cdF0sXG5cblx0J+eplyc6IFtcblx0XHQn56mXJyxcblx0XHQn56mCJyxcblx0XSxcblxuXHQn5buiJzogW1xuXHRcdCflu6InLFxuXHRcdCflu4MnLFxuXHRcdCflup8nLFxuXHRdLFxuXG5cdCfouaAnOiBbXG5cdFx0J+i5oCcsXG5cdFx0J+i3licsXG5cdF0sXG5cblx0J+WQkic6IFtcblx0XHQn5ZCSJyxcblx0XHQn5ZKkJyxcblx0XSxcblxuXHQn5Ym3JzogW1xuXHRcdCflibcnLFxuXHRcdCfpj58nLFxuXHRcdCfpk7InLFxuXHRcdCfliKwnLFxuXHRcdCfliZcnLFxuXHRdLFxuXG5cdCfmk5cnOiBbXG5cdFx0J+aTlycsXG5cdFx0J+WKiCcsXG5cdF0sXG5cblx0J+aguCc6IFtcblx0XHQn5qC4Jyxcblx0XHQn6KaIJyxcblx0XSxcblxuXHQn6ISjJzogW1xuXHRcdCfohKMnLFxuXHRcdCfllIcnLFxuXHRcdCfllIcnLFxuXHRdLFxuXG5cdCfljYcnOiBbXG5cdFx0J+WNhycsXG5cdFx0J+aYhycsXG5cdF0sXG5cblx0J+ejkCc6IFtcblx0XHQn56OQJyxcblx0XHQn55ukJyxcblx0XHQn55uYJyxcblx0XSxcblxuXHQn5rqqJzogW1xuXHRcdCfmuqonLFxuXHRcdCfmuJMnLFxuXHRdLFxuXG5cdCfosL8nOiBbXG5cdFx0J+iwvycsXG5cdFx0J+W1oCcsXG5cdF0sXG5cblx0J+aKmCc6IFtcblx0XHQn5oqYJyxcblx0XHQn5pG6Jyxcblx0XSxcblxuXHQn56WQJzogW1xuXHRcdCfnpZAnLFxuXHRcdCfkvZEnLFxuXHRdLFxuXG5cdCfnk64nOiBbXG5cdFx0J+eTricsXG5cdFx0J+e9iycsXG5cdFx0J+eUlScsXG5cdF0sXG5cblx0J+i5pCc6IFtcblx0XHQn6LmkJyxcblx0XHQn6LiqJyxcblx0XHQn6LioJyxcblx0XSxcblxuXHQn5pqXJzogW1xuXHRcdCfpl4cnLFxuXHRcdCfmmpcnLFxuXHRdLFxuXG5cdCfmmLUnOiBbXG5cdFx0J+aYtScsXG5cdFx0J+aasScsXG5cdF0sXG5cblx0J+W4gyc6IFtcblx0XHQn5biDJyxcblx0XHQn5L2IJyxcblx0XSxcblxuXHQn54K6JzogW1xuXHRcdCfngronLFxuXHRcdCfkuLonLFxuXHRcdCfniLInLFxuXHRdLFxuXG5cdCfntrMnOiBbXG5cdFx0J+e2sycsXG5cdFx0J+e5gycsXG5cdFx0J+e7tycsXG5cdF0sXG5cblx0J+eXuic6IFtcblx0XHQn55e6Jyxcblx0XHQn55e5Jyxcblx0XSxcblxuXHQn55eyJzogW1xuXHRcdCfnl7InLFxuXHRcdCfnl7MnLFxuXHRdLFxuXG5cdCfpm4cnOiBbXG5cdFx0J+mbhycsXG5cdFx0J+WDsScsXG5cdF0sXG5cblx0J+aVmCc6IFtcblx0XHQn5pWYJyxcblx0XHQn5Y+ZJyxcblx0XHQn5pWNJyxcblx0XSxcblxuXHQn55uqJzogW1xuXHRcdCfnm6onLFxuXHRcdCfolaknLFxuXHRcdCfojaEnLFxuXHRdLFxuXG5cdCfli5snOiBbXG5cdFx0J+WLmycsXG5cdFx0J+WLsycsXG5cdFx0J+WLiycsXG5cdF0sXG5cblx0J+ellSc6IFtcblx0XHQn56WVJyxcblx0XHQn56eYJyxcblx0XSxcblxuXHQn54mGJzogW1xuXHRcdCfniYYnLFxuXHRcdCflopknLFxuXHRcdCflorsnLFxuXHRdLFxuXG5cdCfniL4nOiBbXG5cdFx0J+eIvicsXG5cdFx0J+WwlCcsXG5cdFx0J+WwkycsXG5cdF0sXG5cblx0J+eEsCc6IFtcblx0XHQn54SwJyxcblx0XHQn54SUJyxcblx0XSxcblxufTtcblxuT2JqZWN0LmtleXModGFibGVfcGx1cylcblx0LmZvckVhY2goZnVuY3Rpb24gKGtleSlcblx0e1xuXHRcdHRhYmxlX3BsdXNba2V5XSA9IGFycmF5X3VuaXF1ZSh0YWJsZV9wbHVzW2tleV0pO1xuXG5cdFx0dGFibGVfcGx1c1trZXldLmZvckVhY2goZnVuY3Rpb24gKHMpXG5cdFx0e1xuXHRcdFx0dGFibGVfcGx1c1tzXSA9IHRhYmxlX3BsdXNba2V5XTtcblx0XHR9KVxuXHR9KVxuO1xuXG4vLyBAdHMtaWdub3JlXG50YWJsZV9qcCA9IGRlZXBtZXJnZSh0YWJsZV9qcCwgdGFibGVfcGx1cyk7XG5cbk9iamVjdC5rZXlzKHRhYmxlX2pwKVxuXHQuZm9yRWFjaChmdW5jdGlvbiAoa2V5KVxuXHR7XG5cdFx0dGFibGVfanBba2V5XSA9IGFycmF5X3VuaXF1ZSh0YWJsZV9qcFtrZXldKTtcblx0fSlcbjtcblxuZXhwb3J0IGludGVyZmFjZSBJU2ltcGxlVGFibGVcbntcblx0W2tleTogc3RyaW5nXTogc3RyaW5nLFxufVxuXG5leHBvcnQgbGV0IF90YWJsZV9jbjogSVNpbXBsZVRhYmxlID0gX3VwZGF0ZSh7fSwgX3RhYmxlX3R3KTtcblxuZXhwb3J0IGZ1bmN0aW9uIF91cGRhdGUodGFyZ2V0OiBJU2ltcGxlVGFibGUsIHNvdXJjZTogSVNpbXBsZVRhYmxlKTogSVNpbXBsZVRhYmxlXG57XG5cdHRhcmdldCA9IE9iamVjdC5rZXlzKHNvdXJjZSlcblx0XHQucmVkdWNlKGZ1bmN0aW9uIChhLCBiKVxuXHRcdHtcblx0XHRcdGFbc291cmNlW2JdXSA9IGI7XG5cblx0XHRcdHJldHVybiBhO1xuXHRcdH0sIHt9KVxuXHQ7XG5cblx0cmV0dXJuIHRhcmdldDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9nZXQoYXJyOiBzdHJpbmdbXSwgdmFsdWU6IHN0cmluZyB8IHN0cmluZ1tdLCAuLi52YWx1ZXM6IEFycmF5PHN0cmluZyB8IHN0cmluZ1tdPik6IHN0cmluZ1tdXG57XG5cdGxldCByZXQ6IHN0cmluZ1tdID0gW11cblx0XHQuY29uY2F0KHZhbHVlKVxuXHRcdC5jb25jYXQoLi4udmFsdWVzKVxuXHRcdC5maWx0ZXIoZnVuY3Rpb24gKHYpXG5cdFx0e1xuXHRcdFx0cmV0dXJuIHY7XG5cdFx0fSlcblx0O1xuXG5cdC8vcmV0Lmxlbmd0aCAmJiByZXQuc29ydCgpO1xuXG5cdHJldHVybiByZXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBqcChjaGFyOiBzdHJpbmcsIG9wdGlvbnM6IElPcHRpb25zID0ge30pOiBzdHJpbmdbXVxue1xuXHRsZXQgYTogc3RyaW5nW10gPSBbXTtcblx0YSA9IF9nZXQoYSwgdGFibGVfanBbY2hhcl0pO1xuXG5cdHJldHVybiBhO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHcoY2hhcjogc3RyaW5nLCBvcHRpb25zOiBJT3B0aW9ucyA9IHt9KTogc3RyaW5nW11cbntcblx0bGV0IGE6IHN0cmluZ1tdID0gW107XG5cblx0YSA9IF9nZXQoYSwgX3RhYmxlX3R3W2NoYXJdLCBjbjJ0dyhjaGFyLCBvcHRpb25zKSk7XG5cblx0Ly9jb25zb2xlLmxvZygnY24ydHcnLCBjaGFyLCBhKTtcblxuXHRyZXR1cm4gYTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNuKGNoYXI6IHN0cmluZywgb3B0aW9uczogSU9wdGlvbnMgPSB7fSk6IHN0cmluZ1tdXG57XG5cdGxldCBhOiBzdHJpbmdbXSA9IFtdO1xuXG5cdGEgPSBfZ2V0KGEsIF90YWJsZV9jbltjaGFyXSwgdHcyY24oY2hhciwgb3B0aW9ucykpO1xuXG5cdC8vY29uc29sZS5sb2coJ3R3MmNuJywgY2hhciwgYSk7XG5cblx0cmV0dXJuIGE7XG59XG5cbmltcG9ydCAqIGFzIHNlbGYgZnJvbSAnLi90YWJsZSc7XG5cbmV4cG9ydCBkZWZhdWx0IHNlbGY7XG4iXX0=
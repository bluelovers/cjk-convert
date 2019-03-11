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
    /*
    '甚': [
        '甚',
        '什',
    ],
    */
    '恶': [
        '恶',
        '噁',
        '惡',
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
        '𫗭',
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
    '默': [
        '默',
        '黙',
    ],
    '壓': [
        '壓',
        '压',
        '圧',
    ],
    '廸': [
        '廸',
        '迪',
    ],
    '曉': [
        '曉',
        '晓',
        '暁',
    ],
    '霸': [
        '霸',
        '覇',
    ],
    '霊': [
        '霊',
        '靈',
        '灵',
    ],
    '泪': [
        '泪',
        '涙',
        '淚',
    ],
    '牺': [
        '牺',
        '犠',
        '犧',
    ],
    '藉': [
        '藉',
        '耤',
    ],
    '噸': [
        '噸',
        '吨',
    ],
    '俱': [
        '俱',
        '倶',
    ],
    '粽': [
        '粽',
        '糉',
        '糭',
    ],
    '向': [
        '向',
        '曏',
        '嚮',
    ],
    '悽': [
        '悽',
        '淒',
        '凄',
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
exports.default = exports;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YWJsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7O0dBRUc7O0FBR0gsNENBQStDO0FBQy9DLHFDQUEwQztBQUMxQyw0Q0FBNkM7QUFFbEMsUUFBQSxTQUFTLEdBQUc7SUFDdEIsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7Q0FDUixDQUFDO0FBRUY7O0dBRUc7QUFDUSxRQUFBLFFBQVEsR0FBRztJQUNyQixHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO0tBQ0g7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gscUJBQXFCO1FBQ3JCLEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILE1BQU07UUFDTixHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUVIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELElBQUksRUFBRTtRQUNMLElBQUk7UUFDSixHQUFHO0tBQ0g7SUFFRDs7Ozs7TUFLRTtJQUVGLEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0NBRUQsQ0FBQztBQUVGOztHQUVHO0FBQ1EsUUFBQSxVQUFVLEdBQUc7SUFDdkIsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUVIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxJQUFJO0tBQ0o7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsSUFBSTtLQUNKO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFDRCxtREFBbUQ7SUFDbkQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBRUg7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFFSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUdIO0lBRUQsR0FBRyxFQUFFO1FBQ0osTUFBTTtRQUNOLE1BQU07UUFDTixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsSUFBSTtRQUVKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxJQUFJO0tBQ0o7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsSUFBSTtRQUNKLElBQUk7UUFDSixJQUFJO1FBQ0osR0FBRztRQUNILElBQUk7S0FDSjtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxNQUFNO1FBQ04sR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxJQUFJO1FBQ0osSUFBSTtRQUNKLElBQUk7S0FDSjtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxJQUFJO0tBQ0o7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxJQUFJO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxJQUFJO1FBQ0osR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILElBQUk7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0os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QUFFO0lBRXRELElBQUksQ0FBQyxHQUFhLEVBQUUsQ0FBQztJQUVyQixDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsRUFBRSxpQkFBUyxDQUFDLElBQUksQ0FBQyxFQUFFLGFBQUssQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUVuRCxnQ0FBZ0M7SUFFaEMsT0FBTyxDQUFDLENBQUM7QUFDVixDQUFDO0FBVEQsZ0JBU0M7QUFFRCxrQkFBZSxPQUFtQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IHVzZXIgb24gMjAxOC8yLzE3LzAxNy5cbiAqL1xuXG5pbXBvcnQgeyBJT3B0aW9ucyB9IGZyb20gJy4uL2NvbnZlcnQvY29yZSc7XG5pbXBvcnQgeyB0dzJjbiwgY24ydHd9IGZyb20gJy4uL2NvbnZlcnQvaW5kZXgnO1xuaW1wb3J0IHsgYXJyYXlfdW5pcXVlIH0gZnJvbSAnLi4vLi4vdXRpbCc7XG5pbXBvcnQgZGVlcG1lcmdlID0gcmVxdWlyZSgnZGVlcG1lcmdlLXBsdXMnKTtcblxuZXhwb3J0IGxldCBfdGFibGVfdHcgPSB7XG5cdCfnvZcnOiAn576FJyxcblx0J+aBtic6ICfmg6EnLFxuXHQn6IuPJzogJ+iYhycsXG5cdCfppoYnOiAn6aSoJyxcbn07XG5cbi8qKlxuICog5q2k6KGo5YWn5Y+q5pyJ56ym5ZCIIEtFWSDlgLzmmYLmiY3mnIPop7jnmbxcbiAqL1xuZXhwb3J0IGxldCB0YWJsZV9qcCA9IHtcblx0J+OBric6IFtcblx0XHQn44GuJyxcblx0XHQn5LmLJyxcblx0XHQn55qEJyxcblx0XSxcblxuXHQn44GoJzogW1xuXHRcdCfjgagnLFxuXHRcdCfoiIcnLFxuXHRcdCfkuI4nLFxuXHRdLFxuXG5cdCfnlLsnOiBbXG5cdFx0J+WIkicsXG5cdFx0J+eUuycsXG5cdFx0J+WKgycsXG5cdFx0J+eVqycsXG5cdF0sXG5cdCfpl5gnOiBbXG5cdFx0J+aWlycsXG5cdF0sXG5cdCfprKUnOiBbXG5cdFx0J+aWlycsXG5cdF0sXG5cdCfprK0nOiBbXG5cdFx0J+aWlycsXG5cdF0sXG5cdCfprKonOiBbXG5cdFx0J+aWlycsXG5cdF0sXG5cdCfpl4cnOiBbXG5cdFx0J+aalycsXG5cdF0sXG5cdCflm7MnOiBbXG5cdFx0J+WbsycsXG5cdFx0J+WclicsXG5cdFx0J+WbvicsXG5cdF0sXG5cdCflvZMnOiBbXG5cdFx0J+W9kycsXG5cdFx0J+WZuScsXG5cdFx0J+eVticsXG5cdFx0J+WEhScsXG5cdF0sXG5cblx0J+mWpCc6IFtcblx0XHQn5ZCIJyxcblx0XSxcblx0J+mYgSc6IFtcblx0XHQn5ZCIJyxcblx0XSxcblxuXHQn572XJzogW1xuXHRcdCfnvoUnLFxuXHRcdCfnvZcnLFxuXHRcdCflhLgnLFxuXHRcdCfjkaknLFxuXHRcdCflm4knLFxuXHRcdCfllbAnLFxuXHRdLFxuXG5cdCflubInOiBbXG5cdFx0J+W5uScsXG5cdFx0J+S5vicsXG5cdFx0J+W5sicsXG5cdF0sXG5cblx0J+W5uSc6IFtcblx0XHQn5bm5Jyxcblx0XHQn5bmyJyxcblx0XSxcblxuXHQn5Lm+JzogW1xuXHRcdCflubInLFxuXHRcdCfkub4nLFxuXHRcdCfkuoEnLFxuXHRcdCfkubknLFxuXHRdLFxuXHQn5LqBJzogW1xuXHRcdCfkub4nLFxuXHRcdCfkuoEnLFxuXHRcdCfkubknLFxuXHRdLFxuXHQn5Lm5JzogW1xuXHRcdCfkub4nLFxuXHRcdCfkuoEnLFxuXHRcdCfkubknLFxuXHRdLFxuXG5cdCfljoYnOiBbXG5cdFx0J+WOhicsXG5cdFx0J+attCcsXG5cdFx0J+attycsXG5cdFx0J+aapicsXG5cdFx0J+abhicsXG5cdF0sXG5cblx0J+attCc6IFtcblx0XHQn5Y6GJyxcblx0XSxcblx0J+attyc6IFtcblx0XHQn5Y6GJyxcblx0XSxcblx0J+aapic6IFtcblx0XHQn5Y6GJyxcblx0XSxcblx0J+abhic6IFtcblx0XHQn5Y6GJyxcblx0XSxcblxuXHQn5ZG7JzogW1xuXHRcdCflkbsnLFxuXHRcdCfnlLMnLFxuXHRdLFxuXG5cdCfopoYnOiBbXG5cdFx0J+imhicsXG5cdFx0J+WkjScsXG5cdF0sXG5cblx0J+WLiSc6IFtcblx0XHQn5YWNJyxcblx0XSxcblxuXHQn76izJzogW1xuXHRcdCflhY0nLFxuXHRdLFxuXG5cdCfnlKYnOiBbXG5cdFx0J+eUpicsXG5cdFx0J+iYhycsXG5cdFx0J+iLjycsXG5cdF0sXG5cblx0J+W/pyc6IFtcblx0XHQn5oaCJyxcblx0XHQn5YSqJyxcblx0XSxcblxuXHQn6bm5JzogW1xuXHRcdCflkrgnLFxuXHRcdCfpubknLFxuXHRdLFxuXG5cdCflh4YnOiBbXG5cdFx0J+a6licsXG5cdFx0J+WHhicsXG5cdF0sXG5cblx0J+a6lic6IFtcblx0XHQn5rqWJyxcblx0XHQn5YeGJyxcblx0XSxcblxuXHQn6KKuJzogW1xuXHRcdCfooq4nLFxuXHRcdC8vIOS4pumdnueVsOmrlOWtlyDkvYbnlLHmlrzpgY7luqbnm7jkvLwg5a655piT6Yyv6KqkXG5cdFx0J+eloicsXG5cdF0sXG5cblx0J+WEmCc6IFtcblx0XHQn5YSYJyxcblx0XHQn5L6tJyxcblx0XSxcblxuXHQn5L6tJzogW1xuXHRcdCflhJgnLFxuXHRcdCfkvq0nLFxuXHRdLFxuXG5cdCfohI8nOiBbXG5cdFx0J+iEjycsXG5cdFx0J+mrkicsXG5cdFx0J+iHnycsXG5cdF0sXG5cblx0J+WPkSc6IFtcblx0XHQn6auuJyxcblx0XHQn6auqJyxcblx0XHQn5Y+RJyxcblx0XSxcblxuXHQn6auuJzogW1xuXHRcdCfnmbwnLFxuXHRcdCflj5EnLFxuXHRdLFxuXG5cdCfmhb4nOiBbXG5cdFx0J+aFvicsXG5cdFx0J+assicsXG5cdF0sXG5cblx0J+iumic6IFtcblx0XHQn6K6DJyxcblx0XHQn6K6aJyxcblx0XHQn6LSKJyxcblx0XHQn6LWeJyxcblx0XHQn6LObJyxcblx0XSxcblxuXHQn5YayJzogW1xuXHRcdCflhrInLFxuXHRcdCfmspYnLFxuXHRcdCfooZ0nLFxuXHRdLFxuXG5cdCfpnaInOiBbXG5cdFx0J+m6tScsXG5cdFx0J+m6qicsXG5cdFx0J+m6uicsXG5cdF0sXG5cblx0J+msmic6IFtcblx0XHQn6ayaJyxcblx0XHQn6aCIJyxcblx0XHQn6aG7Jyxcblx0XSxcblxuXHQn5o+5JzogW1xuXHRcdCfmj7knLFxuXHRcdCfog4wnLFxuXHRdLFxuXG5cdCfmjbInOiBbXG5cdFx0J+aNsicsXG5cdFx0J+WNtycsXG5cdFx0J+W3uycsXG5cdF0sXG5cblx0J+WNtyc6IFtcblx0XHQn5o2yJyxcblx0XHQn5Y23Jyxcblx0XHQn5be7Jyxcblx0XHQn5Yq1Jyxcblx0XHQn5Yi4Jyxcblx0XSxcblxuXHQn5be7JzogW1xuXHRcdCfmjbInLFxuXHRcdCfljbcnLFxuXHRcdCflt7snLFxuXHRcdCflirUnLFxuXHRcdCfliLgnLFxuXHRdLFxuXG5cdCfoi48nOiBbXG5cdFx0J+iLjycsXG5cdFx0J+iYhycsXG5cdFx0J+eUpicsXG5cdF0sXG5cblx0J+eAjyc6IFtcblx0XHQn54CPJyxcblx0XHQn5rWPJyxcblx0XHQn5YiYJyxcblx0XSxcblx0J+a1jyc6IFtcblx0XHQn54CPJyxcblx0XHQn5rWPJyxcblx0XHQn5YiYJyxcblx0XSxcblxuXHQn5ZCBJzogW1xuXHRcdCfnsbInLFxuXHRcdC8vJ+m+pScsXG5cdFx0J+WQgScsXG5cdF0sXG5cblx0J+WbiSc6IFtcblx0XHQn5ZuJJyxcblx0XHQn5ZWwJyxcblx0XHQn572XJyxcblx0XHQn576FJyxcblx0XSxcblxuXHQn5ZWwJzogW1xuXHRcdCflm4knLFxuXHRcdCfllbAnLFxuXHRcdCfnvZcnLFxuXHRcdCfnvoUnLFxuXHRdLFxuXG5cdCfkv64nOiBbXG5cdFx0J+S/ricsXG5cdFx0J+S/oicsXG5cdF0sXG5cblx0J+eKnyc6IFtcblx0XHQn54qfJyxcblx0XHQn5by3Jyxcblx0XHQn5by6Jyxcblx0XSxcblxuXHQn5ZesJzogW1xuXHRcdCfll6wnLFxuXHRcdCflkbUnLFxuXHRdLFxuXG5cdCfllL8nOiBbXG5cdFx0J+WUvycsXG5cdFx0J+WRvCcsXG5cdF0sXG5cblx0J+Wqric6IFtcblx0XHQn5aquJyxcblx0XHQn5YG3Jyxcblx0XSxcblxuXHQn6YeHJzogW1xuXHRcdCfph4cnLFxuXHRcdCfmjqEnLFxuXHRcdC8vJ+WfsCcsXG5cdF0sXG5cblx0J+W9qSc6IFtcblx0XHQn5b2pJyxcblx0XHQn6YeHJyxcblx0XSxcblxuXHQn8KCpuic6IFtcblx0XHQn8KCpuicsXG5cdFx0J+mHkCcsXG5cdF0sXG5cblx0Lypcblx0J+eUmic6IFtcblx0XHQn55SaJyxcblx0XHQn5LuAJyxcblx0XSxcblx0Ki9cblxuXHQn5oG2JzogW1xuXHRcdCfmgbYnLFxuXHRcdCflmYEnLFxuXHRcdCfmg6EnLFxuXHRdLFxuXG59O1xuXG4vKipcbiAqIOatpOihqOWFp+espuWQiOS7peS4i+S7u+aEj+WAvOaZguacg+inuOeZvFxuICovXG5leHBvcnQgbGV0IHRhYmxlX3BsdXMgPSB7XG5cdCflio0nOiBbXG5cdFx0J+WKjScsXG5cdFx0J+WJkScsXG5cdFx0J+WJoycsXG5cdFx0J+WKjicsXG5cdFx0J+WKkicsXG5cdFx0J+WJsScsXG5cdFx0J+WKlCcsXG5cdF0sXG5cdCfnoLInOiBbXG5cdFx0J+egsicsXG5cdFx0J+eCricsXG5cdF0sXG5cdCflgb0nOiBbXG5cdFx0J+WBvScsXG5cdFx0J+WDnicsXG5cdF0sXG5cdCflhacnOiBbXG5cdFx0J+WFpycsXG5cdFx0J+WGhScsXG5cdF0sXG5cdCfprKUnOiBbXG5cdFx0J+msrScsXG5cdFx0J+mspScsXG5cdFx0J+mXmCcsXG5cdFx0J+msqicsXG5cdFx0Ly8n5paXJyxcblx0XSxcblx0J+m2jyc6IFtcblx0XHQn6baPJyxcblx0XHQn6beEJyxcblx0XHQn6ZueJyxcblx0XHQn6bihJyxcblx0XSxcblx0J+WFjic6IFtcblx0XHQn5YWOJyxcblx0XHQn5YWUJyxcblx0XSxcblx0J+Wdjyc6IFtcblx0XHQn5Z2vJyxcblx0XHQn5Z2PJyxcblx0XHRcIuWjilwiLFxuXHRcdFwi5aOeXCIsXG5cdF0sXG5cdCfmrrsnOiBbXG5cdFx0J+auuycsXG5cdFx0J+auvCcsXG5cdFx0J+WjsycsXG5cdF0sXG5cdCflg48nOiBbXG5cdFx0J+WDjycsXG5cdFx0J+ixoScsXG5cdF0sXG5cdCfomIcnOiBbXG5cdFx0J+iLjycsXG5cdFx0J+iYhycsXG5cdFx0J+WbjCcsXG5cdF0sXG5cdCfppKgnOiBbXG5cdFx0J+mkqCcsXG5cdFx0J++orCcsXG5cdFx0J+iImCcsXG5cdFx0J+mmhicsXG5cdF0sXG5cdCfps6UnOiBbXG5cdFx0J+mzpScsXG5cdFx0J+m4nycsXG5cdFx0J/CroJMnLFxuXHRdLFxuXHQn6KaWJzogW1xuXHRcdCfoppYnLFxuXHRcdCfvqaEnLFxuXHRcdCfop4YnLFxuXHRcdCfnnI4nLFxuXHRdLFxuXHQn6Zm6JzogW1xuXHRcdCfpmbonLFxuXHRcdCfpmqonLFxuXHRcdCfpmaknLFxuXHRcdCfltq4nLFxuXHRcdCfltIQnLFxuXHRdLFxuXHQn57W2JzogW1xuXHRcdCfntbYnLFxuXHRcdCfntZUnLFxuXHRcdCfnu50nLFxuXHRdLFxuXHQn6YmEJzogW1xuXHRcdCfpiYQnLFxuXHRcdCfpkLUnLFxuXHRcdCfpk4EnLFxuXHRcdCfpkKEnLFxuXHRdLFxuXHQn6Ku4JzogW1xuXHRcdCfoq7gnLFxuXHRcdCfvqKInLFxuXHRcdCfor7gnLFxuXHRdLFxuXHQn5bCLJzogW1xuXHRcdCflsIsnLFxuXHRcdCflr7snLFxuXHRcdCfwoay2Jyxcblx0XSxcblx0J+ijoSc6IFtcblx0XHQn6KOhJyxcblx0XHQn6KOPJyxcblx0XHQn6YeMJyxcblx0XSxcblx0J+mRkSc6IFtcblx0XHQn6ZGRJyxcblx0XHQn6Ym0Jyxcblx0XHQn6ZGSJyxcblx0XSxcblx0J+m6tSc6IFtcblx0XHQn6bq1Jyxcblx0XHQn6bqqJyxcblx0XHQn6bq6Jyxcblx0XSxcblx0J+atsic6IFtcblx0XHQn5q2yJyxcblx0XHQn5q2zJyxcblx0XHQn5bKBJyxcblx0XSxcblx0Ly8gaHR0cHM6Ly96aC53aWtpcGVkaWEub3JnL3dpa2kvJUU5JThEJUJFJUU1JUE3JTkzXG5cdCfpkJgnOiBbXG5cdFx0J+mQmCcsXG5cdFx0J+mNvicsXG5cdFx0J+mSnycsXG5cdFx0J+mUuicsXG5cdF0sXG5cdCfmnIMnOiBbXG5cdFx0J+acgycsXG5cdFx0J+S8micsXG5cdFx0J+ORuScsXG5cdF0sXG5cdCfloZcnOiBbXG5cdFx0J+WhlycsXG5cdFx0J+WHgycsXG5cdFx0J+a2gicsXG5cdF0sXG5cblx0J+mrric6IFtcblx0XHQn6auuJyxcblx0XHQn6auqJyxcblx0XHQvLyflj5EnLFxuXHRdLFxuXG5cdCfoqbEnOiBbXG5cdFx0J+ipsScsXG5cdFx0J+ivnScsXG5cdFx0J+SboScsXG5cdF0sXG5cblx0J+mWpCc6IFtcblx0XHQn6ZakJyxcblx0XHQn6ZiBJyxcblx0XSxcblxuXHQn6JSYJzogW1xuXHRcdCfolJgnLFxuXHRcdCflj4MnLFxuXHRcdCflj4InLFxuXHRdLFxuXG5cdCflirQnOiBbXG5cdFx0J+WKtCcsXG5cdFx0J+WLnicsXG5cdFx0J+WKsycsXG5cdF0sXG5cblx0J+WbvSc6IFtcblx0XHQn5Zu9Jyxcblx0XHQn5ZuvJyxcblx0XHQn5ZyLJyxcblx0XSxcblxuXHQn5721JzogW1xuXHRcdCfnvbUnLFxuXHRcdCfpqoInLFxuXHRcdCfpp6EnLFxuXHRdLFxuXG5cdCflr74nOiBbXG5cdFx0J+WvvicsXG5cdFx0J+WwjScsXG5cdFx0J+WvuScsXG5cdF0sXG5cblx0J+mPvSc6IFtcblx0XHQn6Y+9Jyxcblx0XHQn6Yq5Jyxcblx0XHQn6ZSIJyxcblx0XSxcblxuXHQn6aeEJzogW1xuXHRcdCfpp4QnLFxuXHRcdCfkrb4nLFxuXHRcdCfpprEnLFxuXHRcdCfpqa4nLFxuXHRdLFxuXG5cdCfolqknOiBbXG5cdFx0J+iWqScsXG5cdFx0J+iQqCcsXG5cdFx0J+iVrycsXG5cdF0sXG5cblx0J+WNmCc6IFtcblx0XHQn5Y2YJyxcblx0XHQn5ZauJyxcblx0XHQn5Y2VJyxcblx0XSxcblxuXHQn57aZJzogW1xuXHRcdCfntpknLFxuXHRcdCfnubwnLFxuXHRcdCfnu6cnLFxuXHRdLFxuXG5cdCfpqZcnOiBbXG5cdFx0J+mplycsXG5cdFx0J+mqjCcsXG5cdFx0J+mokCcsXG5cblx0XHQn6aiTJyxcblx0XSxcblxuXHQn5q20JzogW1xuXHRcdCfmrbQnLFxuXHRcdCfmrbcnLFxuXHRcdC8vJ+aapicsXG5cdFx0Ly8n5puGJyxcblx0XSxcblxuXHQn5pqmJzogW1xuXHRcdC8vJ+attCcsXG5cdFx0Ly8n5q23Jyxcblx0XHQn5pqmJyxcblx0XHQn5puGJyxcblx0XSxcblxuXHQn5ZujJzogW1xuXHRcdCflm6InLFxuXHRcdCflm6MnLFxuXHRcdCflnJgnLFxuXHRdLFxuXG5cdCfpurwnOiBbXG5cdFx0J+m6vCcsXG5cdFx0J+m6vScsXG5cdFx0J+W6hScsXG5cdF0sXG5cblx0J+aIsCc6IFtcblx0XHQn5oimJyxcblx0XHQn5oiwJyxcblx0XHQn5oiYJyxcblx0XSxcblxuXHQn5LmhJzogW1xuXHRcdCfpg7cnLFxuXHRcdCfphJUnLFxuXHRcdCfphIknLFxuXHRcdCfphIonLFxuXHRcdCfkuaEnLFxuXHRdLFxuXG5cdCfli4knOiBbXG5cdFx0J+WLiScsXG5cdFx0J++osycsXG5cdF0sXG5cblx0J+mkmCc6IFtcblx0XHQn6aSYJyxcblx0XHQn6aaAJyxcblx0XHQn5L2ZJyxcblx0XSxcblxuXHQn57ayJzogW1xuXHRcdCfntrInLFxuXHRcdCfki4QnLFxuXHRcdCfki54nLFxuXHRcdCfnvZEnLFxuXHRdLFxuXG5cdCfoqJcnOiBbXG5cdFx0J+iolycsXG5cdFx0J+iurCcsXG5cdFx0J+S+gicsXG5cdFx0J+aJmCcsXG5cdF0sXG5cblx0J+e6lic6IFtcblx0XHQn57qWJyxcblx0XHQn57qkJyxcblx0XHQn57i0Jyxcblx0XHQn57mKJyxcblx0XSxcblxuXHQn6Y2KJzogW1xuXHRcdCfpjYonLFxuXHRcdCfpjKwnLFxuXHRcdCfwq5SAJyxcblxuXHRcdCfngrwnLFxuXHRcdCfnhYknLFxuXHRdLFxuXG5cdCfmk4onOiBbXG5cdFx0J+aSgycsXG5cdFx0J+aTiicsXG5cdFx0J+WHuycsXG5cdF0sXG5cblx0J+Wvpic6IFtcblx0XHQn5a+mJyxcblx0XHQn5a6fJyxcblx0XHQn5a6eJyxcblx0XHQn5a+UJyxcblx0XSxcblxuXHQn5pa8JzogW1xuXHRcdCfmlrwnLFxuXHRcdCfmibUnLFxuXHRdLFxuXG5cdCforYknOiBbXG5cdFx0J+itiScsXG5cdFx0J+iovCcsXG5cdFx0J+ivgScsXG5cdF0sXG5cblx0J+aTmic6IFtcblx0XHQn5pOaJyxcblx0XHQn5o2uJyxcblx0XHQn5ougJyxcblx0XSxcblxuXHQn6JmVJzogW1xuXHRcdCfomZUnLFxuXHRcdCflpIQnLFxuXHRcdCfklo8nLFxuXHRcdCflh6YnLFxuXHRdLFxuXG5cdCfnnqonOiBbXG5cdFx0J+eeqicsXG5cdFx0J+eeoCcsXG5cdFx0J+ecmScsXG5cdF0sXG5cblx0J+iCoic6IFtcblx0XHQn6IKiJyxcblx0XHQn6IORJyxcblx0XSxcblxuXHQn6IKJJzogW1xuXHRcdCfogoknLFxuXHRcdCflro0nLFxuXHRcdCfwoJWOJyxcblx0XSxcblxuXHQn5oaCJzogW1xuXHRcdCfmhoInLFxuXHRcdCfwop2KJyxcblx0XHQn8KKapycsXG5cdFx0J/Cin5wnLFxuXHRcdCfmh64nLFxuXHRcdCfwqJerJyxcblx0XSxcblxuXHQn57mrJzogW1xuXHRcdCfnuasnLFxuXHRcdC8vJ+ezuycsXG5cdFx0J+e5iycsXG5cdF0sXG5cblx0J+W7uyc6IFtcblx0XHQn5bu7Jyxcblx0XHQn6L+0Jyxcblx0XSxcblxuXHQn6YyyJzogW1xuXHRcdCfpjLInLFxuXHRcdCfpjIQnLFxuXHRcdCflvZUnLFxuXHRdLFxuXG5cdCfpjpcnOiBbXG5cdFx0J+mOlycsXG5cdFx0J+anjScsXG5cdFx0J+aeqicsXG5cdF0sXG5cblx0J+aCoCc6IFtcblx0XHQn5oKgJyxcblx0XHQn5ru6Jyxcblx0XSxcblxuXHQn5aO2JzogW1xuXHRcdCflo7YnLFxuXHRcdCflo7onLFxuXHRcdCflo7cnLFxuXHRdLFxuXG5cdCfojLInOiBbXG5cdFx0J+iMsicsXG5cdFx0J+WFuScsXG5cdFx0J+eOhicsXG5cdF0sXG5cblx0J+iTiyc6IFtcblx0XHQn6JOLJyxcblx0XHQn55uWJyxcblx0XHQn6JGiJyxcblx0XSxcblxuXHQn6LmfJzogW1xuXHRcdCfouZ8nLFxuXHRcdCfot6EnLFxuXHRcdCfov7knLFxuXHRdLFxuXG5cdCfnmZInOiBbXG5cdFx0J+eZkicsXG5cdFx0J+eYiScsXG5cdF0sXG5cblx0J+i+uic6IFtcblx0XHQn6L66Jyxcblx0XHQn6YKKJyxcblx0XHQn6L65Jyxcblx0XHQn6YKJJyxcblx0XSxcblxuXHQn5rqWJzogW1xuXHRcdCfmupYnLFxuXHRcdCflh5YnLFxuXHRdLFxuXG5cdCfooZsnOiBbXG5cdFx0J+ihmycsXG5cdFx0J+ihnicsXG5cdFx0J+WNqycsXG5cdF0sXG5cblx0J+aZmic6IFtcblx0XHQn5pmaJyxcblx0XHQn5pmpJyxcblx0XSxcblxuXHQn6KO4JzogW1xuXHRcdCfoo7gnLFxuXHRcdCfourYnLFxuXHRdLFxuXG5cdCfkuoAnOiBbXG5cdFx0J+S6gCcsXG5cdFx0J+m+nCcsXG5cdFx0J+m+nycsXG5cdFx0J/CqmqcnLFxuXHRcdCfwqpq/Jyxcblx0XHQn8KCDvicsXG5cdF0sXG5cblx0J+WHvCc6IFtcblx0XHQn5Ye8Jyxcblx0XHQn5rC5Jyxcblx0XSxcblxuXHQn6Im4JzogW1xuXHRcdCfoibgnLFxuXHRcdCfojYknLFxuXHRdLFxuXG5cdCfmnK0nOiBbXG5cdFx0J+eumicsXG5cdFx0J+WJsycsXG5cdF0sXG5cblx0J+WkjSc6IFtcblx0XHQn5aSNJyxcblx0XHQn5b6pJyxcblx0XHQn6KSHJyxcblx0XSxcblxuXHQn5rGhJzogW1xuXHRcdCfmsaEnLFxuXHRcdCfmsZknLFxuXHRcdCfmsZonLFxuXHRdLFxuXG5cdCfkvJknOiBbXG5cdFx0J+S8mScsXG5cdFx0J+WkpScsXG5cdF0sXG5cblx0J+W+oSc6IFtcblx0XHQn5b6hJyxcblx0XHQn56amJyxcblx0XSxcblxuXHQn6ayxJzogW1xuXHRcdCfprLEnLFxuXHRcdCfpg4EnLFxuXHRdLFxuXG5cdCfmt6knOiBbXG5cdFx0J+a3qScsXG5cdFx0J+WHjCcsXG5cdF0sXG5cblx0J+e0ric6IFtcblx0XHQn57SuJyxcblx0XHQn5omOJyxcblx0XSxcblxuXHQn55e0JzogW1xuXHRcdCfnl7QnLFxuXHRcdCfnmaEnLFxuXHRdLFxuXG5cdCfmoJYnOiBbXG5cdFx0J+aglicsXG5cdFx0J+ajsicsXG5cdF0sXG5cblx0J+eKhyc6IFtcblx0XHQn54qHJyxcblx0XHQn5aWUJyxcblx0XSxcblxuXHQn56+EJzogW1xuXHRcdCfnr4QnLFxuXHRcdCfojIMnLFxuXHRdLFxuXG5cdCfolpEnOiBbXG5cdFx0J+iWkScsXG5cdFx0J+WnnCcsXG5cdFx0J+iRgScsXG5cdF0sXG5cblx0J+aouCc6IFtcblx0XHQn5qi4Jyxcblx0XHQn5py0Jyxcblx0XSxcblxuXHQn6KuuJzogW1xuXHRcdCfoq64nLFxuXHRcdCfosJgnLFxuXHRcdCflkqgnLFxuXHRdLFxuXG5cdCfmkponOiBbXG5cdFx0J+aSmicsXG5cdFx0J+aNuycsXG5cdF0sXG5cblx0J+WWgic6IFtcblx0XHQn5ZaCJyxcblx0XHQn6aS1Jyxcblx0XHQn6aSnJyxcblx0XHQn8KuXrScsXG5cdF0sXG5cblx0J+a3qCc6IFtcblx0XHQn5reoJyxcblx0XHQn5YeIJyxcblx0XHQn5YeAJyxcblx0XSxcblxuXHQn5qCXJzogW1xuXHRcdCfmoJcnLFxuXHRcdCfmhYQnLFxuXHRdLFxuXG5cdCfmjL0nOiBbXG5cdFx0J+aMvScsXG5cdFx0J+i8kycsXG5cdF0sXG5cblx0J+eBtic6IFtcblx0XHQn54G2Jyxcblx0XHQn56uIJyxcblx0XSxcblxuXHQn57eaJzogW1xuXHRcdCfnt5onLFxuXHRcdCfnvJAnLFxuXHRcdCfntqsnLFxuXHRcdCfnur8nLFxuXHRdLFxuXG5cdCfnm6EnOiBbXG5cdFx0J+eboScsXG5cdFx0J+WwvScsXG5cdFx0J+WEmCcsXG5cdF0sXG5cblx0J+m7tCc6IFtcblx0XHQn6bu0Jyxcblx0XHQn6ZyJJyxcblx0XSxcblxuXHQn5ZGoJzogW1xuXHRcdCflkagnLFxuXHRcdCfpgLEnLFxuXHRdLFxuXG5cdCfkuKYnOiBbXG5cdFx0J+S4picsXG5cdFx0J+W5ticsXG5cdFx0J+S9tScsXG5cdF0sXG5cblx0J+iumic6IFtcblx0XHQn6K6aJyxcblx0XHQn6K6DJyxcblx0XSxcblxuXHQn6KazJzogW1xuXHRcdCfoprMnLFxuXHRcdCfop4AnLFxuXHRcdCfop4InLFxuXHRcdCfopownLFxuXHRdLFxuXG5cdCfpgYonOiBbXG5cdFx0J+mBiicsXG5cdFx0J+a4uCcsXG5cdF0sXG5cblx0J+WQryc6IFtcblx0XHQn5ZCvJyxcblx0XHQn5ZWTJyxcblx0XHQn5ZWfJyxcblx0XHQn5ZWUJyxcblx0XSxcblxuXHQn5buEJzogW1xuXHRcdCflu4QnLFxuXHRcdCfljqknLFxuXHRcdCflu5AnLFxuXHRcdCflu48nLFxuXHRdLFxuXG5cdCfmsKMnOiBbXG5cdFx0J+awlycsXG5cdFx0J+awoycsXG5cdFx0J+awlCcsXG5cdF0sXG5cblx0J+assic6IFtcblx0XHQn5oW+Jyxcblx0XHQn5qyyJyxcblx0XSxcblxuXHQn5YKRJzogW1xuXHRcdCflgpEnLFxuXHRcdCfmnbAnLFxuXHRdLFxuXG5cdCfpjZsnOiBbXG5cdFx0J+mNmycsXG5cdFx0J+mUuycsXG5cdFx0J+eFhScsXG5cdF0sXG5cblx0J+W+tSc6IFtcblx0XHQn5b61Jyxcblx0XHQn5b60Jyxcblx0XSxcblxuXHQn6ZaSJzogW1xuXHRcdCfplpInLFxuXHRcdCfwq5SuJyxcblx0XHQn6ZaRJyxcblx0XHQn6ZeyJyxcblx0XSxcblxuXHQn6LSKJzogW1xuXHRcdCfotIonLFxuXHRcdCfotZ4nLFxuXHRcdCfos5snLFxuXHRdLFxuXG5cdCfmq7snOiBbXG5cdFx0J+aruycsXG5cdFx0J+ahnCcsXG5cdFx0J+aosScsXG5cdF0sXG5cblx0J+WwqCc6IFtcblx0XHQn5bCoJyxcblx0XHQn54u1Jyxcblx0XSxcblxuXHQn5ZyIJzogW1xuXHRcdCflnIgnLFxuXHRcdCflnI8nLFxuXHRdLFxuXG5cdCflh7YnOiBbXG5cdFx0J+WHticsXG5cdFx0J+WFhycsXG5cdF0sXG5cblx0J+a1nCc6IFtcblx0XHQn5rWcJyxcblx0XHQn5r+xJyxcblx0XHQn5ruoJyxcblx0XSxcblxuXHQn54WZJzogW1xuXHRcdCfnhZknLFxuXHRcdCfng58nLFxuXHRcdCfoj7gnLFxuXHRdLFxuXG5cdCfpu5InOiBbXG5cdFx0J+m7kicsXG5cdFx0J+m7kScsXG5cdF0sXG5cblx0J+aogic6IFtcblx0XHQn5qiCJyxcblx0XHQn5LmQJyxcblx0XHQn5qW9Jyxcblx0XSxcblxuXHQn6JasJzogW1xuXHRcdCfolqwnLFxuXHRcdCfol6UnLFxuXHRcdCfoja8nLFxuXHRdLFxuXG5cdCflirUnOiBbXG5cdFx0J+WKtScsXG5cdFx0J+WIuCcsXG5cdFx0J+WNtycsXG5cdF0sXG5cblx0J+iysyc6IFtcblx0XHQn6LKzJyxcblx0XHQn6LSwJyxcblx0XHQn5byQJyxcblx0XHQn6LKuJyxcblx0XHQn8KKOkCcsXG5cdFx0J+S6jCcsXG5cdF0sXG5cblx0J+matyc6IFtcblx0XHQn6Zq3Jyxcblx0XHQn6Zq4Jyxcblx0XHQn6Zq2Jyxcblx0XSxcblxuXHQn5aerJzogW1xuXHRcdCflp6snLFxuXHRcdCflp6wnLFxuXHRdLFxuXG5cdCfnh7snOiBbXG5cdFx0J+eHuycsXG5cdFx0J+eGjycsXG5cdF0sXG5cblx0J+exsic6IFtcblx0XHQn57GyJyxcblx0XHQn6b6lJyxcblx0XSxcblxuXHQn6b2nJzogW1xuXHRcdCfpvacnLFxuXHRcdCflla4nLFxuXHRcdCfwqpiCJyxcblx0XHQn5ZuTJyxcblx0XHQn5ZmbJyxcblx0XHQn5ZqZJyxcblx0XSxcblxuXHQn6bm8JzogW1xuXHRcdCfpubwnLFxuXHRcdCfnorEnLFxuXHRcdCfnobcnLFxuXHRdLFxuXG5cdCflkrgnOiBbXG5cdFx0J+WSuCcsXG5cdFx0J+m5uScsXG5cdF0sXG5cblx0J+eplyc6IFtcblx0XHQn56mXJyxcblx0XHQn56mCJyxcblx0XSxcblxuXHQn5buiJzogW1xuXHRcdCflu6InLFxuXHRcdCflu4MnLFxuXHRcdCflup8nLFxuXHRdLFxuXG5cdCfouaAnOiBbXG5cdFx0J+i5oCcsXG5cdFx0J+i3licsXG5cdF0sXG5cblx0J+WQkic6IFtcblx0XHQn5ZCSJyxcblx0XHQn5ZKkJyxcblx0XSxcblxuXHQn5Ym3JzogW1xuXHRcdCflibcnLFxuXHRcdCfpj58nLFxuXHRcdCfpk7InLFxuXHRcdCfliKwnLFxuXHRcdCfliZcnLFxuXHRdLFxuXG5cdCfmk5cnOiBbXG5cdFx0J+aTlycsXG5cdFx0J+WKiCcsXG5cdF0sXG5cblx0J+aguCc6IFtcblx0XHQn5qC4Jyxcblx0XHQn6KaIJyxcblx0XSxcblxuXHQn6ISjJzogW1xuXHRcdCfohKMnLFxuXHRcdCfllIcnLFxuXHRcdCfllIcnLFxuXHRdLFxuXG5cdCfljYcnOiBbXG5cdFx0J+WNhycsXG5cdFx0J+aYhycsXG5cdF0sXG5cblx0J+ejkCc6IFtcblx0XHQn56OQJyxcblx0XHQn55ukJyxcblx0XHQn55uYJyxcblx0XSxcblxuXHQn5rqqJzogW1xuXHRcdCfmuqonLFxuXHRcdCfmuJMnLFxuXHRdLFxuXG5cdCfosL8nOiBbXG5cdFx0J+iwvycsXG5cdFx0J+W1oCcsXG5cdF0sXG5cblx0J+aKmCc6IFtcblx0XHQn5oqYJyxcblx0XHQn5pG6Jyxcblx0XSxcblxuXHQn56WQJzogW1xuXHRcdCfnpZAnLFxuXHRcdCfkvZEnLFxuXHRdLFxuXG5cdCfnk64nOiBbXG5cdFx0J+eTricsXG5cdFx0J+e9iycsXG5cdFx0J+eUlScsXG5cdF0sXG5cblx0J+i5pCc6IFtcblx0XHQn6LmkJyxcblx0XHQn6LiqJyxcblx0XHQn6LioJyxcblx0XSxcblxuXHQn5pqXJzogW1xuXHRcdCfpl4cnLFxuXHRcdCfmmpcnLFxuXHRdLFxuXG5cdCfmmLUnOiBbXG5cdFx0J+aYtScsXG5cdFx0J+aasScsXG5cdF0sXG5cblx0J+W4gyc6IFtcblx0XHQn5biDJyxcblx0XHQn5L2IJyxcblx0XSxcblxuXHQn54K6JzogW1xuXHRcdCfngronLFxuXHRcdCfkuLonLFxuXHRcdCfniLInLFxuXHRdLFxuXG5cdCfntrMnOiBbXG5cdFx0J+e2sycsXG5cdFx0J+e5gycsXG5cdFx0J+e7tycsXG5cdF0sXG5cblx0J+eXuic6IFtcblx0XHQn55e6Jyxcblx0XHQn55e5Jyxcblx0XSxcblxuXHQn55eyJzogW1xuXHRcdCfnl7InLFxuXHRcdCfnl7MnLFxuXHRdLFxuXG5cdCfpm4cnOiBbXG5cdFx0J+mbhycsXG5cdFx0J+WDsScsXG5cdF0sXG5cblx0J+aVmCc6IFtcblx0XHQn5pWYJyxcblx0XHQn5Y+ZJyxcblx0XHQn5pWNJyxcblx0XSxcblxuXHQn55uqJzogW1xuXHRcdCfnm6onLFxuXHRcdCfolaknLFxuXHRcdCfojaEnLFxuXHRdLFxuXG5cdCfli5snOiBbXG5cdFx0J+WLmycsXG5cdFx0J+WLsycsXG5cdFx0J+WLiycsXG5cdF0sXG5cblx0J+ellSc6IFtcblx0XHQn56WVJyxcblx0XHQn56eYJyxcblx0XSxcblxuXHQn54mGJzogW1xuXHRcdCfniYYnLFxuXHRcdCflopknLFxuXHRcdCflorsnLFxuXHRdLFxuXG5cdCfniL4nOiBbXG5cdFx0J+eIvicsXG5cdFx0J+WwlCcsXG5cdFx0J+WwkycsXG5cdF0sXG5cblx0J+eEsCc6IFtcblx0XHQn54SwJyxcblx0XHQn54SUJyxcblx0XSxcblxuXHQn6buYJzogW1xuXHRcdCfpu5gnLFxuXHRcdCfpu5knLFxuXHRdLFxuXG5cdCflo5MnOiBbXG5cdFx0J+WjkycsXG5cdFx0J+WOiycsXG5cdFx0J+WcpycsXG5cdF0sXG5cblx0J+W7uCc6IFtcblx0XHQn5bu4Jyxcblx0XHQn6L+qJyxcblx0XSxcblxuXHQn5puJJzogW1xuXHRcdCfmm4knLFxuXHRcdCfmmZMnLFxuXHRcdCfmmoEnLFxuXHRdLFxuXG5cdCfpnLgnOiBbXG5cdFx0J+mcuCcsXG5cdFx0J+imhycsXG5cdF0sXG5cblx0J+mciic6IFtcblx0XHQn6ZyKJyxcblx0XHQn6Z2IJyxcblx0XHQn54G1Jyxcblx0XSxcblxuXHQn5rOqJzogW1xuXHRcdCfms6onLFxuXHRcdCfmtpknLFxuXHRcdCfmt5onLFxuXHRdLFxuXG5cdCfnibonOiBbXG5cdFx0J+eJuicsXG5cdFx0J+eKoCcsXG5cdFx0J+eKpycsXG5cdF0sXG5cblx0J+iXiSc6IFtcblx0XHQn6JeJJyxcblx0XHQn6ICkJyxcblx0XSxcblxuXHQn5Zm4JzogW1xuXHRcdCflmbgnLFxuXHRcdCflkKgnLFxuXHRdLFxuXG5cdCfkv7EnOiBbXG5cdFx0J+S/sScsXG5cdFx0J+WAticsXG5cdF0sXG5cblx0J+eyvSc6IFtcblx0XHQn57K9Jyxcblx0XHQn57OJJyxcblx0XHQn57OtJyxcblx0XSxcblxuXHQn5ZCRJzogW1xuXHRcdCflkJEnLFxuXHRcdCfmm48nLFxuXHRcdCflmq4nLFxuXHRdLFxuXG5cdCfmgr0nOiBbXG5cdFx0J+aCvScsXG5cdFx0J+a3kicsXG5cdFx0J+WHhCcsXG5cdF0sXG5cbn07XG5cbk9iamVjdC5rZXlzKHRhYmxlX3BsdXMpXG5cdC5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpXG5cdHtcblx0XHR0YWJsZV9wbHVzW2tleV0gPSBhcnJheV91bmlxdWUodGFibGVfcGx1c1trZXldKTtcblxuXHRcdHRhYmxlX3BsdXNba2V5XS5mb3JFYWNoKGZ1bmN0aW9uIChzKVxuXHRcdHtcblx0XHRcdHRhYmxlX3BsdXNbc10gPSB0YWJsZV9wbHVzW2tleV07XG5cdFx0fSlcblx0fSlcbjtcblxuLy8gQHRzLWlnbm9yZVxudGFibGVfanAgPSBkZWVwbWVyZ2UodGFibGVfanAsIHRhYmxlX3BsdXMpO1xuXG5PYmplY3Qua2V5cyh0YWJsZV9qcClcblx0LmZvckVhY2goZnVuY3Rpb24gKGtleSlcblx0e1xuXHRcdHRhYmxlX2pwW2tleV0gPSBhcnJheV91bmlxdWUodGFibGVfanBba2V5XSk7XG5cdH0pXG47XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVNpbXBsZVRhYmxlXG57XG5cdFtrZXk6IHN0cmluZ106IHN0cmluZyxcbn1cblxuZXhwb3J0IGxldCBfdGFibGVfY246IElTaW1wbGVUYWJsZSA9IF91cGRhdGUoe30sIF90YWJsZV90dyk7XG5cbmV4cG9ydCBmdW5jdGlvbiBfdXBkYXRlKHRhcmdldDogSVNpbXBsZVRhYmxlLCBzb3VyY2U6IElTaW1wbGVUYWJsZSk6IElTaW1wbGVUYWJsZVxue1xuXHR0YXJnZXQgPSBPYmplY3Qua2V5cyhzb3VyY2UpXG5cdFx0LnJlZHVjZShmdW5jdGlvbiAoYSwgYilcblx0XHR7XG5cdFx0XHRhW3NvdXJjZVtiXV0gPSBiO1xuXG5cdFx0XHRyZXR1cm4gYTtcblx0XHR9LCB7fSlcblx0O1xuXG5cdHJldHVybiB0YXJnZXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfZ2V0KGFycjogc3RyaW5nW10sIHZhbHVlOiBzdHJpbmcgfCBzdHJpbmdbXSwgLi4udmFsdWVzOiBBcnJheTxzdHJpbmcgfCBzdHJpbmdbXT4pOiBzdHJpbmdbXVxue1xuXHRsZXQgcmV0OiBzdHJpbmdbXSA9IFtdXG5cdFx0LmNvbmNhdCh2YWx1ZSlcblx0XHQuY29uY2F0KC4uLnZhbHVlcylcblx0XHQuZmlsdGVyKGZ1bmN0aW9uICh2KVxuXHRcdHtcblx0XHRcdHJldHVybiB2O1xuXHRcdH0pXG5cdDtcblxuXHQvL3JldC5sZW5ndGggJiYgcmV0LnNvcnQoKTtcblxuXHRyZXR1cm4gcmV0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24ganAoY2hhcjogc3RyaW5nLCBvcHRpb25zOiBJT3B0aW9ucyA9IHt9KTogc3RyaW5nW11cbntcblx0bGV0IGE6IHN0cmluZ1tdID0gW107XG5cdGEgPSBfZ2V0KGEsIHRhYmxlX2pwW2NoYXJdKTtcblxuXHRyZXR1cm4gYTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR3KGNoYXI6IHN0cmluZywgb3B0aW9uczogSU9wdGlvbnMgPSB7fSk6IHN0cmluZ1tdXG57XG5cdGxldCBhOiBzdHJpbmdbXSA9IFtdO1xuXG5cdGEgPSBfZ2V0KGEsIF90YWJsZV90d1tjaGFyXSwgY24ydHcoY2hhciwgb3B0aW9ucykpO1xuXG5cdC8vY29uc29sZS5sb2coJ2NuMnR3JywgY2hhciwgYSk7XG5cblx0cmV0dXJuIGE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbihjaGFyOiBzdHJpbmcsIG9wdGlvbnM6IElPcHRpb25zID0ge30pOiBzdHJpbmdbXVxue1xuXHRsZXQgYTogc3RyaW5nW10gPSBbXTtcblxuXHRhID0gX2dldChhLCBfdGFibGVfY25bY2hhcl0sIHR3MmNuKGNoYXIsIG9wdGlvbnMpKTtcblxuXHQvL2NvbnNvbGUubG9nKCd0dzJjbicsIGNoYXIsIGEpO1xuXG5cdHJldHVybiBhO1xufVxuXG5leHBvcnQgZGVmYXVsdCBleHBvcnRzIGFzIHR5cGVvZiBpbXBvcnQoJy4vdGFibGUnKTtcbiJdfQ==
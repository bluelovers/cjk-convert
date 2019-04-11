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
    '炰': [
        '炰',
        '炮',
    ],
    '辟': [
        '辟',
        '闢',
        '避',
    ],
    '避': [
        '辟',
        '避',
    ],
    '闢': [
        '辟',
        '闢',
    ],
    '滷': [
        '魯',
        '鲁',
    ],
    '鹵': [
        '魯',
        '鲁',
    ],
    '卤': [
        '魯',
        '鲁',
    ],
    '儓': [
        '儓',
        '檯',
    ],
    '檯': [
        '儓',
        '檯',
    ],
    '台': [
        '台',
        '檯',
        '臺',
        '颱',
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
    '鱷': [
        '鱷',
        '鰐',
        '鳄',
    ],
    '滷': [
        '滷',
        '鹵',
        '卤',
    ],
    '颜': [
        '颜',
        '顏',
        '顔',
    ],
    '衝': [
        '衝',
        '沖',
        '冲',
    ],
    '樑': [
        '樑',
        '梁',
    ],
    '砂': [
        '砂',
        '沙',
    ],
    '炭': [
        '炭',
        '碳',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YWJsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7O0dBRUc7O0FBR0gsNENBQStDO0FBQy9DLHFDQUEwQztBQUMxQyw0Q0FBNkM7QUFFbEMsUUFBQSxTQUFTLEdBQUc7SUFDdEIsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7Q0FDUixDQUFDO0FBRUY7O0dBRUc7QUFDUSxRQUFBLFFBQVEsR0FBRztJQUNyQixHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO0tBQ0g7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gscUJBQXFCO1FBQ3JCLEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILE1BQU07UUFDTixHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUVIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELElBQUksRUFBRTtRQUNMLElBQUk7UUFDSixHQUFHO0tBQ0g7SUFFRDs7Ozs7TUFLRTtJQUVGLEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtDQUVELENBQUM7QUFFRjs7R0FFRztBQUNRLFFBQUEsVUFBVSxHQUFHO0lBQ3ZCLEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FFSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsSUFBSTtLQUNKO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILElBQUk7S0FDSjtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBQ0QsbURBQW1EO0lBQ25ELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUVIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBRUgsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FHSDtJQUVELEdBQUcsRUFBRTtRQUNKLE1BQU07UUFDTixNQUFNO1FBQ04sR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILElBQUk7UUFFSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsSUFBSTtLQUNKO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILElBQUk7UUFDSixJQUFJO1FBQ0osSUFBSTtRQUNKLEdBQUc7UUFDSCxJQUFJO0tBQ0o7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsTUFBTTtRQUNOLEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsSUFBSTtRQUNKLElBQUk7UUFDSixJQUFJO0tBQ0o7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsSUFBSTtLQUNKO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsSUFBSTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsSUFBSTtRQUNKLEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxJQUFJO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0os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SUFFaEMsT0FBTyxDQUFDLENBQUM7QUFDVixDQUFDO0FBVEQsZ0JBU0M7QUFFRCxrQkFBZSxPQUFtQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IHVzZXIgb24gMjAxOC8yLzE3LzAxNy5cbiAqL1xuXG5pbXBvcnQgeyBJT3B0aW9ucyB9IGZyb20gJy4uL2NvbnZlcnQvY29yZSc7XG5pbXBvcnQgeyB0dzJjbiwgY24ydHd9IGZyb20gJy4uL2NvbnZlcnQvaW5kZXgnO1xuaW1wb3J0IHsgYXJyYXlfdW5pcXVlIH0gZnJvbSAnLi4vLi4vdXRpbCc7XG5pbXBvcnQgZGVlcG1lcmdlID0gcmVxdWlyZSgnZGVlcG1lcmdlLXBsdXMnKTtcblxuZXhwb3J0IGxldCBfdGFibGVfdHcgPSB7XG5cdCfnvZcnOiAn576FJyxcblx0J+aBtic6ICfmg6EnLFxuXHQn6IuPJzogJ+iYhycsXG5cdCfppoYnOiAn6aSoJyxcbn07XG5cbi8qKlxuICog5q2k6KGo5YWn5Y+q5pyJ56ym5ZCIIEtFWSDlgLzmmYLmiY3mnIPop7jnmbxcbiAqL1xuZXhwb3J0IGxldCB0YWJsZV9qcCA9IHtcblx0J+OBric6IFtcblx0XHQn44GuJyxcblx0XHQn5LmLJyxcblx0XHQn55qEJyxcblx0XSxcblxuXHQn44GoJzogW1xuXHRcdCfjgagnLFxuXHRcdCfoiIcnLFxuXHRcdCfkuI4nLFxuXHRdLFxuXG5cdCfnlLsnOiBbXG5cdFx0J+WIkicsXG5cdFx0J+eUuycsXG5cdFx0J+WKgycsXG5cdFx0J+eVqycsXG5cdF0sXG5cdCfpl5gnOiBbXG5cdFx0J+aWlycsXG5cdF0sXG5cdCfprKUnOiBbXG5cdFx0J+aWlycsXG5cdF0sXG5cdCfprK0nOiBbXG5cdFx0J+aWlycsXG5cdF0sXG5cdCfprKonOiBbXG5cdFx0J+aWlycsXG5cdF0sXG5cdCfpl4cnOiBbXG5cdFx0J+aalycsXG5cdF0sXG5cdCflm7MnOiBbXG5cdFx0J+WbsycsXG5cdFx0J+WclicsXG5cdFx0J+WbvicsXG5cdF0sXG5cdCflvZMnOiBbXG5cdFx0J+W9kycsXG5cdFx0J+WZuScsXG5cdFx0J+eVticsXG5cdFx0J+WEhScsXG5cdF0sXG5cblx0J+mWpCc6IFtcblx0XHQn5ZCIJyxcblx0XSxcblx0J+mYgSc6IFtcblx0XHQn5ZCIJyxcblx0XSxcblxuXHQn572XJzogW1xuXHRcdCfnvoUnLFxuXHRcdCfnvZcnLFxuXHRcdCflhLgnLFxuXHRcdCfjkaknLFxuXHRcdCflm4knLFxuXHRcdCfllbAnLFxuXHRdLFxuXG5cdCflubInOiBbXG5cdFx0J+W5uScsXG5cdFx0J+S5vicsXG5cdFx0J+W5sicsXG5cdF0sXG5cblx0J+W5uSc6IFtcblx0XHQn5bm5Jyxcblx0XHQn5bmyJyxcblx0XSxcblxuXHQn5Lm+JzogW1xuXHRcdCflubInLFxuXHRcdCfkub4nLFxuXHRcdCfkuoEnLFxuXHRcdCfkubknLFxuXHRdLFxuXHQn5LqBJzogW1xuXHRcdCfkub4nLFxuXHRcdCfkuoEnLFxuXHRcdCfkubknLFxuXHRdLFxuXHQn5Lm5JzogW1xuXHRcdCfkub4nLFxuXHRcdCfkuoEnLFxuXHRcdCfkubknLFxuXHRdLFxuXG5cdCfljoYnOiBbXG5cdFx0J+WOhicsXG5cdFx0J+attCcsXG5cdFx0J+attycsXG5cdFx0J+aapicsXG5cdFx0J+abhicsXG5cdF0sXG5cblx0J+attCc6IFtcblx0XHQn5Y6GJyxcblx0XSxcblx0J+attyc6IFtcblx0XHQn5Y6GJyxcblx0XSxcblx0J+aapic6IFtcblx0XHQn5Y6GJyxcblx0XSxcblx0J+abhic6IFtcblx0XHQn5Y6GJyxcblx0XSxcblxuXHQn5ZG7JzogW1xuXHRcdCflkbsnLFxuXHRcdCfnlLMnLFxuXHRdLFxuXG5cdCfopoYnOiBbXG5cdFx0J+imhicsXG5cdFx0J+WkjScsXG5cdF0sXG5cblx0J+WLiSc6IFtcblx0XHQn5YWNJyxcblx0XSxcblxuXHQn76izJzogW1xuXHRcdCflhY0nLFxuXHRdLFxuXG5cdCfnlKYnOiBbXG5cdFx0J+eUpicsXG5cdFx0J+iYhycsXG5cdFx0J+iLjycsXG5cdF0sXG5cblx0J+W/pyc6IFtcblx0XHQn5oaCJyxcblx0XHQn5YSqJyxcblx0XSxcblxuXHQn6bm5JzogW1xuXHRcdCflkrgnLFxuXHRcdCfpubknLFxuXHRdLFxuXG5cdCflh4YnOiBbXG5cdFx0J+a6licsXG5cdFx0J+WHhicsXG5cdF0sXG5cblx0J+a6lic6IFtcblx0XHQn5rqWJyxcblx0XHQn5YeGJyxcblx0XSxcblxuXHQn6KKuJzogW1xuXHRcdCfooq4nLFxuXHRcdC8vIOS4pumdnueVsOmrlOWtlyDkvYbnlLHmlrzpgY7luqbnm7jkvLwg5a655piT6Yyv6KqkXG5cdFx0J+eloicsXG5cdF0sXG5cblx0J+WEmCc6IFtcblx0XHQn5YSYJyxcblx0XHQn5L6tJyxcblx0XSxcblxuXHQn5L6tJzogW1xuXHRcdCflhJgnLFxuXHRcdCfkvq0nLFxuXHRdLFxuXG5cdCfohI8nOiBbXG5cdFx0J+iEjycsXG5cdFx0J+mrkicsXG5cdFx0J+iHnycsXG5cdF0sXG5cblx0J+WPkSc6IFtcblx0XHQn6auuJyxcblx0XHQn6auqJyxcblx0XHQn5Y+RJyxcblx0XSxcblxuXHQn6auuJzogW1xuXHRcdCfnmbwnLFxuXHRcdCflj5EnLFxuXHRdLFxuXG5cdCfmhb4nOiBbXG5cdFx0J+aFvicsXG5cdFx0J+assicsXG5cdF0sXG5cblx0J+iumic6IFtcblx0XHQn6K6DJyxcblx0XHQn6K6aJyxcblx0XHQn6LSKJyxcblx0XHQn6LWeJyxcblx0XHQn6LObJyxcblx0XSxcblxuXHQn5YayJzogW1xuXHRcdCflhrInLFxuXHRcdCfmspYnLFxuXHRcdCfooZ0nLFxuXHRdLFxuXG5cdCfpnaInOiBbXG5cdFx0J+m6tScsXG5cdFx0J+m6qicsXG5cdFx0J+m6uicsXG5cdF0sXG5cblx0J+msmic6IFtcblx0XHQn6ayaJyxcblx0XHQn6aCIJyxcblx0XHQn6aG7Jyxcblx0XSxcblxuXHQn5o+5JzogW1xuXHRcdCfmj7knLFxuXHRcdCfog4wnLFxuXHRdLFxuXG5cdCfmjbInOiBbXG5cdFx0J+aNsicsXG5cdFx0J+WNtycsXG5cdFx0J+W3uycsXG5cdF0sXG5cblx0J+WNtyc6IFtcblx0XHQn5o2yJyxcblx0XHQn5Y23Jyxcblx0XHQn5be7Jyxcblx0XHQn5Yq1Jyxcblx0XHQn5Yi4Jyxcblx0XSxcblxuXHQn5be7JzogW1xuXHRcdCfmjbInLFxuXHRcdCfljbcnLFxuXHRcdCflt7snLFxuXHRcdCflirUnLFxuXHRcdCfliLgnLFxuXHRdLFxuXG5cdCfoi48nOiBbXG5cdFx0J+iLjycsXG5cdFx0J+iYhycsXG5cdFx0J+eUpicsXG5cdF0sXG5cblx0J+eAjyc6IFtcblx0XHQn54CPJyxcblx0XHQn5rWPJyxcblx0XHQn5YiYJyxcblx0XSxcblx0J+a1jyc6IFtcblx0XHQn54CPJyxcblx0XHQn5rWPJyxcblx0XHQn5YiYJyxcblx0XSxcblxuXHQn5ZCBJzogW1xuXHRcdCfnsbInLFxuXHRcdC8vJ+m+pScsXG5cdFx0J+WQgScsXG5cdF0sXG5cblx0J+WbiSc6IFtcblx0XHQn5ZuJJyxcblx0XHQn5ZWwJyxcblx0XHQn572XJyxcblx0XHQn576FJyxcblx0XSxcblxuXHQn5ZWwJzogW1xuXHRcdCflm4knLFxuXHRcdCfllbAnLFxuXHRcdCfnvZcnLFxuXHRcdCfnvoUnLFxuXHRdLFxuXG5cdCfkv64nOiBbXG5cdFx0J+S/ricsXG5cdFx0J+S/oicsXG5cdF0sXG5cblx0J+eKnyc6IFtcblx0XHQn54qfJyxcblx0XHQn5by3Jyxcblx0XHQn5by6Jyxcblx0XSxcblxuXHQn5ZesJzogW1xuXHRcdCfll6wnLFxuXHRcdCflkbUnLFxuXHRdLFxuXG5cdCfllL8nOiBbXG5cdFx0J+WUvycsXG5cdFx0J+WRvCcsXG5cdF0sXG5cblx0J+Wqric6IFtcblx0XHQn5aquJyxcblx0XHQn5YG3Jyxcblx0XSxcblxuXHQn6YeHJzogW1xuXHRcdCfph4cnLFxuXHRcdCfmjqEnLFxuXHRcdC8vJ+WfsCcsXG5cdF0sXG5cblx0J+W9qSc6IFtcblx0XHQn5b2pJyxcblx0XHQn6YeHJyxcblx0XSxcblxuXHQn8KCpuic6IFtcblx0XHQn8KCpuicsXG5cdFx0J+mHkCcsXG5cdF0sXG5cblx0Lypcblx0J+eUmic6IFtcblx0XHQn55SaJyxcblx0XHQn5LuAJyxcblx0XSxcblx0Ki9cblxuXHQn5oG2JzogW1xuXHRcdCfmgbYnLFxuXHRcdCflmYEnLFxuXHRcdCfmg6EnLFxuXHRdLFxuXG5cdCfngrAnOiBbXG5cdFx0J+eCsCcsXG5cdFx0J+eCricsXG5cdF0sXG5cblx0J+i+nyc6IFtcblx0XHQn6L6fJyxcblx0XHQn6ZeiJyxcblx0XHQn6YG/Jyxcblx0XSxcblxuXHQn6YG/JzogW1xuXHRcdCfovp8nLFxuXHRcdCfpgb8nLFxuXHRdLFxuXG5cdCfpl6InOiBbXG5cdFx0J+i+nycsXG5cdFx0J+mXoicsXG5cdF0sXG5cblx0J+a7tyc6IFtcblx0XHQn6a2vJyxcblx0XHQn6bKBJyxcblx0XSxcblxuXHQn6bm1JzogW1xuXHRcdCfpra8nLFxuXHRcdCfpsoEnLFxuXHRdLFxuXG5cdCfljaQnOiBbXG5cdFx0J+mtrycsXG5cdFx0J+mygScsXG5cdF0sXG5cblx0J+WEkyc6IFtcblx0XHQn5YSTJyxcblx0XHQn5qqvJyxcblx0XSxcblxuXHQn5qqvJzogW1xuXHRcdCflhJMnLFxuXHRcdCfmqq8nLFxuXHRdLFxuXG5cdCflj7AnOiBbXG5cdFx0J+WPsCcsXG5cdFx0J+aqrycsXG5cdFx0J+iHuicsXG5cdFx0J+misScsXG5cdF0sXG5cbn07XG5cbi8qKlxuICog5q2k6KGo5YWn56ym5ZCI5Lul5LiL5Lu75oSP5YC85pmC5pyD6Ke455m8XG4gKi9cbmV4cG9ydCBsZXQgdGFibGVfcGx1cyA9IHtcblx0J+WKjSc6IFtcblx0XHQn5YqNJyxcblx0XHQn5YmRJyxcblx0XHQn5YmjJyxcblx0XHQn5YqOJyxcblx0XHQn5YqSJyxcblx0XHQn5YmxJyxcblx0XHQn5YqUJyxcblx0XSxcblx0J+egsic6IFtcblx0XHQn56CyJyxcblx0XHQn54KuJyxcblx0XSxcblx0J+WBvSc6IFtcblx0XHQn5YG9Jyxcblx0XHQn5YOeJyxcblx0XSxcblx0J+WFpyc6IFtcblx0XHQn5YWnJyxcblx0XHQn5YaFJyxcblx0XSxcblx0J+mspSc6IFtcblx0XHQn6aytJyxcblx0XHQn6aylJyxcblx0XHQn6ZeYJyxcblx0XHQn6ayqJyxcblx0XHQvLyfmlpcnLFxuXHRdLFxuXHQn6baPJzogW1xuXHRcdCfpto8nLFxuXHRcdCfpt4QnLFxuXHRcdCfpm54nLFxuXHRcdCfpuKEnLFxuXHRdLFxuXHQn5YWOJzogW1xuXHRcdCflhY4nLFxuXHRcdCflhZQnLFxuXHRdLFxuXHQn5Z2PJzogW1xuXHRcdCflna8nLFxuXHRcdCflnY8nLFxuXHRcdFwi5aOKXCIsXG5cdFx0XCLlo55cIixcblx0XSxcblx0J+auuyc6IFtcblx0XHQn5q67Jyxcblx0XHQn5q68Jyxcblx0XHQn5aOzJyxcblx0XSxcblx0J+WDjyc6IFtcblx0XHQn5YOPJyxcblx0XHQn6LGhJyxcblx0XSxcblx0J+iYhyc6IFtcblx0XHQn6IuPJyxcblx0XHQn6JiHJyxcblx0XHQn5ZuMJyxcblx0XSxcblx0J+mkqCc6IFtcblx0XHQn6aSoJyxcblx0XHQn76isJyxcblx0XHQn6IiYJyxcblx0XHQn6aaGJyxcblx0XSxcblx0J+mzpSc6IFtcblx0XHQn6bOlJyxcblx0XHQn6bifJyxcblx0XHQn8KugkycsXG5cdF0sXG5cdCfoppYnOiBbXG5cdFx0J+imlicsXG5cdFx0J++poScsXG5cdFx0J+inhicsXG5cdFx0J+ecjicsXG5cdF0sXG5cdCfpmbonOiBbXG5cdFx0J+mZuicsXG5cdFx0J+maqicsXG5cdFx0J+mZqScsXG5cdFx0J+W2ricsXG5cdFx0J+W0hCcsXG5cdF0sXG5cdCfntbYnOiBbXG5cdFx0J+e1ticsXG5cdFx0J+e1lScsXG5cdFx0J+e7nScsXG5cdF0sXG5cdCfpiYQnOiBbXG5cdFx0J+mJhCcsXG5cdFx0J+mQtScsXG5cdFx0J+mTgScsXG5cdFx0J+mQoScsXG5cdF0sXG5cdCfoq7gnOiBbXG5cdFx0J+iruCcsXG5cdFx0J++ooicsXG5cdFx0J+ivuCcsXG5cdF0sXG5cdCflsIsnOiBbXG5cdFx0J+WwiycsXG5cdFx0J+WvuycsXG5cdFx0J/ChrLYnLFxuXHRdLFxuXHQn6KOhJzogW1xuXHRcdCfoo6EnLFxuXHRcdCfoo48nLFxuXHRcdCfph4wnLFxuXHRdLFxuXHQn6ZGRJzogW1xuXHRcdCfpkZEnLFxuXHRcdCfpibQnLFxuXHRcdCfpkZInLFxuXHRdLFxuXHQn6bq1JzogW1xuXHRcdCfpurUnLFxuXHRcdCfpuqonLFxuXHRcdCfpuronLFxuXHRdLFxuXHQn5q2yJzogW1xuXHRcdCfmrbInLFxuXHRcdCfmrbMnLFxuXHRcdCflsoEnLFxuXHRdLFxuXHQvLyBodHRwczovL3poLndpa2lwZWRpYS5vcmcvd2lraS8lRTklOEQlQkUlRTUlQTclOTNcblx0J+mQmCc6IFtcblx0XHQn6ZCYJyxcblx0XHQn6Y2+Jyxcblx0XHQn6ZKfJyxcblx0XHQn6ZS6Jyxcblx0XSxcblx0J+acgyc6IFtcblx0XHQn5pyDJyxcblx0XHQn5LyaJyxcblx0XHQn45G5Jyxcblx0XSxcblx0J+Whlyc6IFtcblx0XHQn5aGXJyxcblx0XHQn5YeDJyxcblx0XHQn5raCJyxcblx0XSxcblxuXHQn6auuJzogW1xuXHRcdCfpq64nLFxuXHRcdCfpq6onLFxuXHRcdC8vJ+WPkScsXG5cdF0sXG5cblx0J+ipsSc6IFtcblx0XHQn6KmxJyxcblx0XHQn6K+dJyxcblx0XHQn5JuhJyxcblx0XSxcblxuXHQn6ZakJzogW1xuXHRcdCfplqQnLFxuXHRcdCfpmIEnLFxuXHRdLFxuXG5cdCfolJgnOiBbXG5cdFx0J+iUmCcsXG5cdFx0J+WPgycsXG5cdFx0J+WPgicsXG5cdF0sXG5cblx0J+WKtCc6IFtcblx0XHQn5Yq0Jyxcblx0XHQn5YueJyxcblx0XHQn5YqzJyxcblx0XSxcblxuXHQn5Zu9JzogW1xuXHRcdCflm70nLFxuXHRcdCflm68nLFxuXHRcdCflnIsnLFxuXHRdLFxuXG5cdCfnvbUnOiBbXG5cdFx0J+e9tScsXG5cdFx0J+mqgicsXG5cdFx0J+mnoScsXG5cdF0sXG5cblx0J+Wvvic6IFtcblx0XHQn5a++Jyxcblx0XHQn5bCNJyxcblx0XHQn5a+5Jyxcblx0XSxcblxuXHQn6Y+9JzogW1xuXHRcdCfpj70nLFxuXHRcdCfpirknLFxuXHRcdCfplIgnLFxuXHRdLFxuXG5cdCfpp4QnOiBbXG5cdFx0J+mnhCcsXG5cdFx0J+StvicsXG5cdFx0J+mmsScsXG5cdFx0J+mpricsXG5cdF0sXG5cblx0J+iWqSc6IFtcblx0XHQn6JapJyxcblx0XHQn6JCoJyxcblx0XHQn6JWvJyxcblx0XSxcblxuXHQn5Y2YJzogW1xuXHRcdCfljZgnLFxuXHRcdCfllq4nLFxuXHRcdCfljZUnLFxuXHRdLFxuXG5cdCfntpknOiBbXG5cdFx0J+e2mScsXG5cdFx0J+e5vCcsXG5cdFx0J+e7pycsXG5cdF0sXG5cblx0J+mplyc6IFtcblx0XHQn6amXJyxcblx0XHQn6aqMJyxcblx0XHQn6aiQJyxcblxuXHRcdCfpqJMnLFxuXHRdLFxuXG5cdCfmrbQnOiBbXG5cdFx0J+attCcsXG5cdFx0J+attycsXG5cdFx0Ly8n5pqmJyxcblx0XHQvLyfmm4YnLFxuXHRdLFxuXG5cdCfmmqYnOiBbXG5cdFx0Ly8n5q20Jyxcblx0XHQvLyfmrbcnLFxuXHRcdCfmmqYnLFxuXHRcdCfmm4YnLFxuXHRdLFxuXG5cdCflm6MnOiBbXG5cdFx0J+WboicsXG5cdFx0J+WboycsXG5cdFx0J+WcmCcsXG5cdF0sXG5cblx0J+m6vCc6IFtcblx0XHQn6bq8Jyxcblx0XHQn6bq9Jyxcblx0XHQn5bqFJyxcblx0XSxcblxuXHQn5oiwJzogW1xuXHRcdCfmiKYnLFxuXHRcdCfmiLAnLFxuXHRcdCfmiJgnLFxuXHRdLFxuXG5cdCfkuaEnOiBbXG5cdFx0J+mDtycsXG5cdFx0J+mElScsXG5cdFx0J+mEiScsXG5cdFx0J+mEiicsXG5cdFx0J+S5oScsXG5cdF0sXG5cblx0J+WLiSc6IFtcblx0XHQn5YuJJyxcblx0XHQn76izJyxcblx0XSxcblxuXHQn6aSYJzogW1xuXHRcdCfppJgnLFxuXHRcdCfppoAnLFxuXHRcdCfkvZknLFxuXHRdLFxuXG5cdCfntrInOiBbXG5cdFx0J+e2sicsXG5cdFx0J+SLhCcsXG5cdFx0J+SLnicsXG5cdFx0J+e9kScsXG5cdF0sXG5cblx0J+iolyc6IFtcblx0XHQn6KiXJyxcblx0XHQn6K6sJyxcblx0XHQn5L6CJyxcblx0XHQn5omYJyxcblx0XSxcblxuXHQn57qWJzogW1xuXHRcdCfnupYnLFxuXHRcdCfnuqQnLFxuXHRcdCfnuLQnLFxuXHRcdCfnuYonLFxuXHRdLFxuXG5cdCfpjYonOiBbXG5cdFx0J+mNiicsXG5cdFx0J+mMrCcsXG5cdFx0J/CrlIAnLFxuXG5cdFx0J+eCvCcsXG5cdFx0J+eFiScsXG5cdF0sXG5cblx0J+aTiic6IFtcblx0XHQn5pKDJyxcblx0XHQn5pOKJyxcblx0XHQn5Ye7Jyxcblx0XSxcblxuXHQn5a+mJzogW1xuXHRcdCflr6YnLFxuXHRcdCflrp8nLFxuXHRcdCflrp4nLFxuXHRcdCflr5QnLFxuXHRdLFxuXG5cdCfmlrwnOiBbXG5cdFx0J+aWvCcsXG5cdFx0J+aJtScsXG5cdF0sXG5cblx0J+itiSc6IFtcblx0XHQn6K2JJyxcblx0XHQn6Ki8Jyxcblx0XHQn6K+BJyxcblx0XSxcblxuXHQn5pOaJzogW1xuXHRcdCfmk5onLFxuXHRcdCfmja4nLFxuXHRcdCfmi6AnLFxuXHRdLFxuXG5cdCfomZUnOiBbXG5cdFx0J+iZlScsXG5cdFx0J+WkhCcsXG5cdFx0J+SWjycsXG5cdFx0J+WHpicsXG5cdF0sXG5cblx0J+eeqic6IFtcblx0XHQn556qJyxcblx0XHQn556gJyxcblx0XHQn55yZJyxcblx0XSxcblxuXHQn6IKiJzogW1xuXHRcdCfogqInLFxuXHRcdCfog5EnLFxuXHRdLFxuXG5cdCfogoknOiBbXG5cdFx0J+iCiScsXG5cdFx0J+WujScsXG5cdFx0J/CglY4nLFxuXHRdLFxuXG5cdCfmhoInOiBbXG5cdFx0J+aGgicsXG5cdFx0J/CinYonLFxuXHRcdCfwopqnJyxcblx0XHQn8KKfnCcsXG5cdFx0J+aHricsXG5cdFx0J/Col6snLFxuXHRdLFxuXG5cdCfnuasnOiBbXG5cdFx0J+e5qycsXG5cdFx0Ly8n57O7Jyxcblx0XHQn57mLJyxcblx0XSxcblxuXHQn5bu7JzogW1xuXHRcdCflu7snLFxuXHRcdCfov7QnLFxuXHRdLFxuXG5cdCfpjLInOiBbXG5cdFx0J+mMsicsXG5cdFx0J+mMhCcsXG5cdFx0J+W9lScsXG5cdF0sXG5cblx0J+mOlyc6IFtcblx0XHQn6Y6XJyxcblx0XHQn5qeNJyxcblx0XHQn5p6qJyxcblx0XSxcblxuXHQn5oKgJzogW1xuXHRcdCfmgqAnLFxuXHRcdCfmu7onLFxuXHRdLFxuXG5cdCflo7YnOiBbXG5cdFx0J+WjticsXG5cdFx0J+WjuicsXG5cdFx0J+WjtycsXG5cdF0sXG5cblx0J+iMsic6IFtcblx0XHQn6IyyJyxcblx0XHQn5YW5Jyxcblx0XHQn546GJyxcblx0XSxcblxuXHQn6JOLJzogW1xuXHRcdCfok4snLFxuXHRcdCfnm5YnLFxuXHRcdCfokaInLFxuXHRdLFxuXG5cdCfouZ8nOiBbXG5cdFx0J+i5nycsXG5cdFx0J+i3oScsXG5cdFx0J+i/uScsXG5cdF0sXG5cblx0J+eZkic6IFtcblx0XHQn55mSJyxcblx0XHQn55iJJyxcblx0XSxcblxuXHQn6L66JzogW1xuXHRcdCfovronLFxuXHRcdCfpgoonLFxuXHRcdCfovrknLFxuXHRcdCfpgoknLFxuXHRdLFxuXG5cdCfmupYnOiBbXG5cdFx0J+a6licsXG5cdFx0J+WHlicsXG5cdF0sXG5cblx0J+ihmyc6IFtcblx0XHQn6KGbJyxcblx0XHQn6KGeJyxcblx0XHQn5Y2rJyxcblx0XSxcblxuXHQn5pmaJzogW1xuXHRcdCfmmZonLFxuXHRcdCfmmaknLFxuXHRdLFxuXG5cdCfoo7gnOiBbXG5cdFx0J+ijuCcsXG5cdFx0J+i6ticsXG5cdF0sXG5cblx0J+S6gCc6IFtcblx0XHQn5LqAJyxcblx0XHQn6b6cJyxcblx0XHQn6b6fJyxcblx0XHQn8KqapycsXG5cdFx0J/Cqmr8nLFxuXHRcdCfwoIO+Jyxcblx0XSxcblxuXHQn5Ye8JzogW1xuXHRcdCflh7wnLFxuXHRcdCfmsLknLFxuXHRdLFxuXG5cdCfoibgnOiBbXG5cdFx0J+iJuCcsXG5cdFx0J+iNiScsXG5cdF0sXG5cblx0J+acrSc6IFtcblx0XHQn566aJyxcblx0XHQn5YmzJyxcblx0XSxcblxuXHQn5aSNJzogW1xuXHRcdCflpI0nLFxuXHRcdCflvqknLFxuXHRcdCfopIcnLFxuXHRdLFxuXG5cdCfmsaEnOiBbXG5cdFx0J+axoScsXG5cdFx0J+axmScsXG5cdFx0J+axmicsXG5cdF0sXG5cblx0J+S8mSc6IFtcblx0XHQn5LyZJyxcblx0XHQn5aSlJyxcblx0XSxcblxuXHQn5b6hJzogW1xuXHRcdCflvqEnLFxuXHRcdCfnpqYnLFxuXHRdLFxuXG5cdCfprLEnOiBbXG5cdFx0J+mssScsXG5cdFx0J+mDgScsXG5cdF0sXG5cblx0J+a3qSc6IFtcblx0XHQn5repJyxcblx0XHQn5YeMJyxcblx0XSxcblxuXHQn57SuJzogW1xuXHRcdCfntK4nLFxuXHRcdCfmiY4nLFxuXHRdLFxuXG5cdCfnl7QnOiBbXG5cdFx0J+eXtCcsXG5cdFx0J+eZoScsXG5cdF0sXG5cblx0J+aglic6IFtcblx0XHQn5qCWJyxcblx0XHQn5qOyJyxcblx0XSxcblxuXHQn54qHJzogW1xuXHRcdCfniocnLFxuXHRcdCflpZQnLFxuXHRdLFxuXG5cdCfnr4QnOiBbXG5cdFx0J+evhCcsXG5cdFx0J+iMgycsXG5cdF0sXG5cblx0J+iWkSc6IFtcblx0XHQn6JaRJyxcblx0XHQn5aecJyxcblx0XHQn6JGBJyxcblx0XSxcblxuXHQn5qi4JzogW1xuXHRcdCfmqLgnLFxuXHRcdCfmnLQnLFxuXHRdLFxuXG5cdCfoq64nOiBbXG5cdFx0J+irricsXG5cdFx0J+iwmCcsXG5cdFx0J+WSqCcsXG5cdF0sXG5cblx0J+aSmic6IFtcblx0XHQn5pKaJyxcblx0XHQn5o27Jyxcblx0XSxcblxuXHQn5ZaCJzogW1xuXHRcdCflloInLFxuXHRcdCfppLUnLFxuXHRcdCfppKcnLFxuXHRcdCfwq5etJyxcblx0XSxcblxuXHQn5reoJzogW1xuXHRcdCfmt6gnLFxuXHRcdCflh4gnLFxuXHRcdCflh4AnLFxuXHRdLFxuXG5cdCfmoJcnOiBbXG5cdFx0J+aglycsXG5cdFx0J+aFhCcsXG5cdF0sXG5cblx0J+aMvSc6IFtcblx0XHQn5oy9Jyxcblx0XHQn6LyTJyxcblx0XSxcblxuXHQn54G2JzogW1xuXHRcdCfngbYnLFxuXHRcdCfnq4gnLFxuXHRdLFxuXG5cdCfnt5onOiBbXG5cdFx0J+e3micsXG5cdFx0J+e8kCcsXG5cdFx0J+e2qycsXG5cdFx0J+e6vycsXG5cdF0sXG5cblx0J+eboSc6IFtcblx0XHQn55uhJyxcblx0XHQn5bC9Jyxcblx0XHQn5YSYJyxcblx0XSxcblxuXHQn6bu0JzogW1xuXHRcdCfpu7QnLFxuXHRcdCfpnIknLFxuXHRdLFxuXG5cdCflkagnOiBbXG5cdFx0J+WRqCcsXG5cdFx0J+mAsScsXG5cdF0sXG5cblx0J+S4pic6IFtcblx0XHQn5LimJyxcblx0XHQn5bm2Jyxcblx0XHQn5L21Jyxcblx0XSxcblxuXHQn6K6aJzogW1xuXHRcdCforponLFxuXHRcdCforoMnLFxuXHRdLFxuXG5cdCfoprMnOiBbXG5cdFx0J+imsycsXG5cdFx0J+ingCcsXG5cdFx0J+ingicsXG5cdFx0J+imjCcsXG5cdF0sXG5cblx0J+mBiic6IFtcblx0XHQn6YGKJyxcblx0XHQn5ri4Jyxcblx0XSxcblxuXHQn5ZCvJzogW1xuXHRcdCflkK8nLFxuXHRcdCfllZMnLFxuXHRcdCfllZ8nLFxuXHRcdCfllZQnLFxuXHRdLFxuXG5cdCflu4QnOiBbXG5cdFx0J+W7hCcsXG5cdFx0J+WOqScsXG5cdFx0J+W7kCcsXG5cdFx0J+W7jycsXG5cdF0sXG5cblx0J+awoyc6IFtcblx0XHQn5rCXJyxcblx0XHQn5rCjJyxcblx0XHQn5rCUJyxcblx0XSxcblxuXHQn5qyyJzogW1xuXHRcdCfmhb4nLFxuXHRcdCfmrLInLFxuXHRdLFxuXG5cdCflgpEnOiBbXG5cdFx0J+WCkScsXG5cdFx0J+adsCcsXG5cdF0sXG5cblx0J+mNmyc6IFtcblx0XHQn6Y2bJyxcblx0XHQn6ZS7Jyxcblx0XHQn54WFJyxcblx0XSxcblxuXHQn5b61JzogW1xuXHRcdCflvrUnLFxuXHRcdCflvrQnLFxuXHRdLFxuXG5cdCfplpInOiBbXG5cdFx0J+mWkicsXG5cdFx0J/CrlK4nLFxuXHRcdCfplpEnLFxuXHRcdCfpl7InLFxuXHRdLFxuXG5cdCfotIonOiBbXG5cdFx0J+i0iicsXG5cdFx0J+i1nicsXG5cdFx0J+izmycsXG5cdF0sXG5cblx0J+aruyc6IFtcblx0XHQn5qu7Jyxcblx0XHQn5qGcJyxcblx0XHQn5qixJyxcblx0XSxcblxuXHQn5bCoJzogW1xuXHRcdCflsKgnLFxuXHRcdCfni7UnLFxuXHRdLFxuXG5cdCflnIgnOiBbXG5cdFx0J+WciCcsXG5cdFx0J+WcjycsXG5cdF0sXG5cblx0J+WHtic6IFtcblx0XHQn5Ye2Jyxcblx0XHQn5YWHJyxcblx0XSxcblxuXHQn5rWcJzogW1xuXHRcdCfmtZwnLFxuXHRcdCfmv7EnLFxuXHRcdCfmu6gnLFxuXHRdLFxuXG5cdCfnhZknOiBbXG5cdFx0J+eFmScsXG5cdFx0J+eDnycsXG5cdFx0J+iPuCcsXG5cdF0sXG5cblx0J+m7kic6IFtcblx0XHQn6buSJyxcblx0XHQn6buRJyxcblx0XSxcblxuXHQn5qiCJzogW1xuXHRcdCfmqIInLFxuXHRcdCfkuZAnLFxuXHRcdCfmpb0nLFxuXHRdLFxuXG5cdCfolqwnOiBbXG5cdFx0J+iWrCcsXG5cdFx0J+iXpScsXG5cdFx0J+iNrycsXG5cdF0sXG5cblx0J+WKtSc6IFtcblx0XHQn5Yq1Jyxcblx0XHQn5Yi4Jyxcblx0XHQn5Y23Jyxcblx0XSxcblxuXHQn6LKzJzogW1xuXHRcdCfosrMnLFxuXHRcdCfotLAnLFxuXHRcdCflvJAnLFxuXHRcdCfosq4nLFxuXHRcdCfwoo6QJyxcblx0XHQn5LqMJyxcblx0XSxcblxuXHQn6Zq3JzogW1xuXHRcdCfpmrcnLFxuXHRcdCfpmrgnLFxuXHRcdCfpmrYnLFxuXHRdLFxuXG5cdCflp6snOiBbXG5cdFx0J+WnqycsXG5cdFx0J+WnrCcsXG5cdF0sXG5cblx0J+eHuyc6IFtcblx0XHQn54e7Jyxcblx0XHQn54aPJyxcblx0XSxcblxuXHQn57GyJzogW1xuXHRcdCfnsbInLFxuXHRcdCfpvqUnLFxuXHRdLFxuXG5cdCfpvacnOiBbXG5cdFx0J+m9pycsXG5cdFx0J+WVricsXG5cdFx0J/CqmIInLFxuXHRcdCflm5MnLFxuXHRcdCflmZsnLFxuXHRcdCflmpknLFxuXHRdLFxuXG5cdCfpubwnOiBbXG5cdFx0J+m5vCcsXG5cdFx0J+eisScsXG5cdFx0J+ehtycsXG5cdF0sXG5cblx0J+WSuCc6IFtcblx0XHQn5ZK4Jyxcblx0XHQn6bm5Jyxcblx0XSxcblxuXHQn56mXJzogW1xuXHRcdCfnqZcnLFxuXHRcdCfnqYInLFxuXHRdLFxuXG5cdCflu6InOiBbXG5cdFx0J+W7oicsXG5cdFx0J+W7gycsXG5cdFx0J+W6nycsXG5cdF0sXG5cblx0J+i5oCc6IFtcblx0XHQn6LmgJyxcblx0XHQn6LeWJyxcblx0XSxcblxuXHQn5ZCSJzogW1xuXHRcdCflkJInLFxuXHRcdCflkqQnLFxuXHRdLFxuXG5cdCflibcnOiBbXG5cdFx0J+WJtycsXG5cdFx0J+mPnycsXG5cdFx0J+mTsicsXG5cdFx0J+WIrCcsXG5cdFx0J+WJlycsXG5cdF0sXG5cblx0J+aTlyc6IFtcblx0XHQn5pOXJyxcblx0XHQn5YqIJyxcblx0XSxcblxuXHQn5qC4JzogW1xuXHRcdCfmoLgnLFxuXHRcdCfopognLFxuXHRdLFxuXG5cdCfohKMnOiBbXG5cdFx0J+iEoycsXG5cdFx0J+WUhycsXG5cdFx0J+WUhycsXG5cdF0sXG5cblx0J+WNhyc6IFtcblx0XHQn5Y2HJyxcblx0XHQn5piHJyxcblx0XSxcblxuXHQn56OQJzogW1xuXHRcdCfno5AnLFxuXHRcdCfnm6QnLFxuXHRcdCfnm5gnLFxuXHRdLFxuXG5cdCfmuqonOiBbXG5cdFx0J+a6qicsXG5cdFx0J+a4kycsXG5cdF0sXG5cblx0J+iwvyc6IFtcblx0XHQn6LC/Jyxcblx0XHQn5bWgJyxcblx0XSxcblxuXHQn5oqYJzogW1xuXHRcdCfmipgnLFxuXHRcdCfmkbonLFxuXHRdLFxuXG5cdCfnpZAnOiBbXG5cdFx0J+elkCcsXG5cdFx0J+S9kScsXG5cdF0sXG5cblx0J+eTric6IFtcblx0XHQn55OuJyxcblx0XHQn572LJyxcblx0XHQn55SVJyxcblx0XSxcblxuXHQn6LmkJzogW1xuXHRcdCfouaQnLFxuXHRcdCfouKonLFxuXHRcdCfouKgnLFxuXHRdLFxuXG5cdCfmmpcnOiBbXG5cdFx0J+mXhycsXG5cdFx0J+aalycsXG5cdF0sXG5cblx0J+aYtSc6IFtcblx0XHQn5pi1Jyxcblx0XHQn5pqxJyxcblx0XSxcblxuXHQn5biDJzogW1xuXHRcdCfluIMnLFxuXHRcdCfkvYgnLFxuXHRdLFxuXG5cdCfngronOiBbXG5cdFx0J+eCuicsXG5cdFx0J+S4uicsXG5cdFx0J+eIsicsXG5cdF0sXG5cblx0J+e2syc6IFtcblx0XHQn57azJyxcblx0XHQn57mDJyxcblx0XHQn57u3Jyxcblx0XSxcblxuXHQn55e6JzogW1xuXHRcdCfnl7onLFxuXHRcdCfnl7knLFxuXHRdLFxuXG5cdCfnl7InOiBbXG5cdFx0J+eXsicsXG5cdFx0J+eXsycsXG5cdF0sXG5cblx0J+mbhyc6IFtcblx0XHQn6ZuHJyxcblx0XHQn5YOxJyxcblx0XSxcblxuXHQn5pWYJzogW1xuXHRcdCfmlZgnLFxuXHRcdCflj5knLFxuXHRcdCfmlY0nLFxuXHRdLFxuXG5cdCfnm6onOiBbXG5cdFx0J+ebqicsXG5cdFx0J+iVqScsXG5cdFx0J+iNoScsXG5cdF0sXG5cblx0J+WLmyc6IFtcblx0XHQn5YubJyxcblx0XHQn5YuzJyxcblx0XHQn5YuLJyxcblx0XSxcblxuXHQn56WVJzogW1xuXHRcdCfnpZUnLFxuXHRcdCfnp5gnLFxuXHRdLFxuXG5cdCfniYYnOiBbXG5cdFx0J+eJhicsXG5cdFx0J+WimScsXG5cdFx0J+WiuycsXG5cdF0sXG5cblx0J+eIvic6IFtcblx0XHQn54i+Jyxcblx0XHQn5bCUJyxcblx0XHQn5bCTJyxcblx0XSxcblxuXHQn54SwJzogW1xuXHRcdCfnhLAnLFxuXHRcdCfnhJQnLFxuXHRdLFxuXG5cdCfpu5gnOiBbXG5cdFx0J+m7mCcsXG5cdFx0J+m7mScsXG5cdF0sXG5cblx0J+Wjkyc6IFtcblx0XHQn5aOTJyxcblx0XHQn5Y6LJyxcblx0XHQn5ZynJyxcblx0XSxcblxuXHQn5bu4JzogW1xuXHRcdCflu7gnLFxuXHRcdCfov6onLFxuXHRdLFxuXG5cdCfmm4knOiBbXG5cdFx0J+abiScsXG5cdFx0J+aZkycsXG5cdFx0J+aagScsXG5cdF0sXG5cblx0J+mcuCc6IFtcblx0XHQn6Zy4Jyxcblx0XHQn6KaHJyxcblx0XSxcblxuXHQn6ZyKJzogW1xuXHRcdCfpnIonLFxuXHRcdCfpnYgnLFxuXHRcdCfngbUnLFxuXHRdLFxuXG5cdCfms6onOiBbXG5cdFx0J+azqicsXG5cdFx0J+a2mScsXG5cdFx0J+a3micsXG5cdF0sXG5cblx0J+eJuic6IFtcblx0XHQn54m6Jyxcblx0XHQn54qgJyxcblx0XHQn54qnJyxcblx0XSxcblxuXHQn6JeJJzogW1xuXHRcdCfol4knLFxuXHRcdCfogKQnLFxuXHRdLFxuXG5cdCflmbgnOiBbXG5cdFx0J+WZuCcsXG5cdFx0J+WQqCcsXG5cdF0sXG5cblx0J+S/sSc6IFtcblx0XHQn5L+xJyxcblx0XHQn5YC2Jyxcblx0XSxcblxuXHQn57K9JzogW1xuXHRcdCfnsr0nLFxuXHRcdCfns4knLFxuXHRcdCfns60nLFxuXHRdLFxuXG5cdCflkJEnOiBbXG5cdFx0J+WQkScsXG5cdFx0J+abjycsXG5cdFx0J+WaricsXG5cdF0sXG5cblx0J+aCvSc6IFtcblx0XHQn5oK9Jyxcblx0XHQn5reSJyxcblx0XHQn5YeEJyxcblx0XSxcblxuXHQn6bG3JzogW1xuXHRcdCfpsbcnLFxuXHRcdCfpsJAnLFxuXHRcdCfps4QnLFxuXHRdLFxuXG5cdCfmu7cnOiBbXG5cdFx0J+a7tycsXG5cdFx0J+m5tScsXG5cdFx0J+WNpCcsXG5cdF0sXG5cblx0J+minCc6IFtcblx0XHQn6aKcJyxcblx0XHQn6aGPJyxcblx0XHQn6aGUJyxcblx0XSxcblxuXHQn6KGdJzogW1xuXHRcdCfooZ0nLFxuXHRcdCfmspYnLFxuXHRcdCflhrInLFxuXHRdLFxuXG5cdCfmqJEnOiBbXG5cdFx0J+aokScsXG5cdFx0J+aigScsXG5cdF0sXG5cblx0J+eggic6IFtcblx0XHQn56CCJyxcblx0XHQn5rKZJyxcblx0XSxcblxuXHQn54KtJzogW1xuXHRcdCfngq0nLFxuXHRcdCfnorMnLFxuXHRdLFxuXG59O1xuXG5PYmplY3Qua2V5cyh0YWJsZV9wbHVzKVxuXHQuZm9yRWFjaChmdW5jdGlvbiAoa2V5KVxuXHR7XG5cdFx0dGFibGVfcGx1c1trZXldID0gYXJyYXlfdW5pcXVlKHRhYmxlX3BsdXNba2V5XSk7XG5cblx0XHR0YWJsZV9wbHVzW2tleV0uZm9yRWFjaChmdW5jdGlvbiAocylcblx0XHR7XG5cdFx0XHR0YWJsZV9wbHVzW3NdID0gdGFibGVfcGx1c1trZXldO1xuXHRcdH0pXG5cdH0pXG47XG5cbi8vIEB0cy1pZ25vcmVcbnRhYmxlX2pwID0gZGVlcG1lcmdlKHRhYmxlX2pwLCB0YWJsZV9wbHVzKTtcblxuT2JqZWN0LmtleXModGFibGVfanApXG5cdC5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpXG5cdHtcblx0XHR0YWJsZV9qcFtrZXldID0gYXJyYXlfdW5pcXVlKHRhYmxlX2pwW2tleV0pO1xuXHR9KVxuO1xuXG5leHBvcnQgaW50ZXJmYWNlIElTaW1wbGVUYWJsZVxue1xuXHRba2V5OiBzdHJpbmddOiBzdHJpbmcsXG59XG5cbmV4cG9ydCBsZXQgX3RhYmxlX2NuOiBJU2ltcGxlVGFibGUgPSBfdXBkYXRlKHt9LCBfdGFibGVfdHcpO1xuXG5leHBvcnQgZnVuY3Rpb24gX3VwZGF0ZSh0YXJnZXQ6IElTaW1wbGVUYWJsZSwgc291cmNlOiBJU2ltcGxlVGFibGUpOiBJU2ltcGxlVGFibGVcbntcblx0dGFyZ2V0ID0gT2JqZWN0LmtleXMoc291cmNlKVxuXHRcdC5yZWR1Y2UoZnVuY3Rpb24gKGEsIGIpXG5cdFx0e1xuXHRcdFx0YVtzb3VyY2VbYl1dID0gYjtcblxuXHRcdFx0cmV0dXJuIGE7XG5cdFx0fSwge30pXG5cdDtcblxuXHRyZXR1cm4gdGFyZ2V0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX2dldChhcnI6IHN0cmluZ1tdLCB2YWx1ZTogc3RyaW5nIHwgc3RyaW5nW10sIC4uLnZhbHVlczogQXJyYXk8c3RyaW5nIHwgc3RyaW5nW10+KTogc3RyaW5nW11cbntcblx0bGV0IHJldDogc3RyaW5nW10gPSBbXVxuXHRcdC5jb25jYXQodmFsdWUpXG5cdFx0LmNvbmNhdCguLi52YWx1ZXMpXG5cdFx0LmZpbHRlcihmdW5jdGlvbiAodilcblx0XHR7XG5cdFx0XHRyZXR1cm4gdjtcblx0XHR9KVxuXHQ7XG5cblx0Ly9yZXQubGVuZ3RoICYmIHJldC5zb3J0KCk7XG5cblx0cmV0dXJuIHJldDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGpwKGNoYXI6IHN0cmluZywgb3B0aW9uczogSU9wdGlvbnMgPSB7fSk6IHN0cmluZ1tdXG57XG5cdGxldCBhOiBzdHJpbmdbXSA9IFtdO1xuXHRhID0gX2dldChhLCB0YWJsZV9qcFtjaGFyXSk7XG5cblx0cmV0dXJuIGE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0dyhjaGFyOiBzdHJpbmcsIG9wdGlvbnM6IElPcHRpb25zID0ge30pOiBzdHJpbmdbXVxue1xuXHRsZXQgYTogc3RyaW5nW10gPSBbXTtcblxuXHRhID0gX2dldChhLCBfdGFibGVfdHdbY2hhcl0sIGNuMnR3KGNoYXIsIG9wdGlvbnMpKTtcblxuXHQvL2NvbnNvbGUubG9nKCdjbjJ0dycsIGNoYXIsIGEpO1xuXG5cdHJldHVybiBhO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY24oY2hhcjogc3RyaW5nLCBvcHRpb25zOiBJT3B0aW9ucyA9IHt9KTogc3RyaW5nW11cbntcblx0bGV0IGE6IHN0cmluZ1tdID0gW107XG5cblx0YSA9IF9nZXQoYSwgX3RhYmxlX2NuW2NoYXJdLCB0dzJjbihjaGFyLCBvcHRpb25zKSk7XG5cblx0Ly9jb25zb2xlLmxvZygndHcyY24nLCBjaGFyLCBhKTtcblxuXHRyZXR1cm4gYTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZXhwb3J0cyBhcyB0eXBlb2YgaW1wb3J0KCcuL3RhYmxlJyk7XG4iXX0=
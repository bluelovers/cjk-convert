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
let table_jp_core = {
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
    '練': [
        '炼',
    ],
    '练': [
        '炼',
    ],
    '繫': [
        '系',
    ],
    '繋': [
        '系',
    ],
    '糓': [
        '谷',
    ],
    '穀': [
        '谷',
    ],
    '版': [
        '板',
    ],
};
/**
 * 此表內符合以下任意值時會觸發
 */
let table_plus_core = {
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
        '葯',
        '𣛙',
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
    '糸': [
        '糸',
        '絲',
        '丝',
    ],
    '簷': [
        '簷',
        '檐',
    ],
    '涌': [
        '涌',
        '湧',
    ],
    '糓': [
        '穀',
        '糓',
    ],
    '両': [
        '両',
        '两',
        '兩',
    ],
    '家': [
        '家',
        '傢',
    ],
    '妳': [
        '妳',
        '你',
    ],
    '她': [
        '她',
        '他',
    ],
};
/**
 * 此表內符合以下任意值時會觸發
 */
exports.table_plus = _buildTablePlus(table_plus_core);
/**
 * 此表內只有符合 KEY 值時才會觸發
 */
exports.table_jp = _mergeTable(table_jp_core, exports.table_plus);
_uniqueTable(exports.table_jp);
function _uniqueTable(table_jp) {
    Object.keys(table_jp)
        .forEach(function (key) {
        // @ts-ignore
        table_jp[key] = util_1.array_unique(table_jp[key]);
    });
    return table_jp;
}
exports._uniqueTable = _uniqueTable;
function _buildTablePlus(table_plus) {
    Object.keys(table_plus)
        .forEach(function (key) {
        table_plus[key] = util_1.array_unique(table_plus[key]);
        table_plus[key].forEach(function (s) {
            table_plus[s] = table_plus[key];
        });
    });
    // @ts-ignore
    return table_plus;
}
exports._buildTablePlus = _buildTablePlus;
function _mergeTable(table_jp, table_plus) {
    // @ts-ignore
    return deepmerge(table_jp, table_plus);
}
exports._mergeTable = _mergeTable;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YWJsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7O0dBRUc7O0FBR0gsNENBQStDO0FBQy9DLHFDQUEwQztBQUMxQyw0Q0FBNkM7QUFFbEMsUUFBQSxTQUFTLEdBQUc7SUFDdEIsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7Q0FDQyxDQUFDO0FBRVg7O0dBRUc7QUFDSCxJQUFJLGFBQWEsR0FBRztJQUNuQixHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO0tBQ0g7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gscUJBQXFCO1FBQ3JCLEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILE1BQU07UUFDTixHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUVIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELElBQUksRUFBRTtRQUNMLElBQUk7UUFDSixHQUFHO0tBQ0g7SUFFRDs7Ozs7TUFLRTtJQUVGLEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7S0FDSDtDQUVRLENBQUM7QUFFWDs7R0FFRztBQUNILElBQUksZUFBZSxHQUFHO0lBQ3JCLEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FFSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsSUFBSTtLQUNKO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILElBQUk7S0FDSjtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBQ0QsbURBQW1EO0lBQ25ELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUVIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBRUgsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FHSDtJQUVELEdBQUcsRUFBRTtRQUNKLE1BQU07UUFDTixNQUFNO1FBQ04sR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILElBQUk7UUFFSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsSUFBSTtLQUNKO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILElBQUk7UUFDSixJQUFJO1FBQ0osSUFBSTtRQUNKLEdBQUc7UUFDSCxJQUFJO0tBQ0o7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsTUFBTTtRQUNOLEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsSUFBSTtRQUNKLElBQUk7UUFDSixJQUFJO0tBQ0o7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsSUFBSTtLQUNKO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsSUFBSTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxJQUFJO0tBQ0o7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxJQUFJO1FBQ0osR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILElBQUk7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gs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LE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFFbkQsZ0NBQWdDO0lBRWhDLE9BQU8sQ0FBQyxDQUFDO0FBQ1YsQ0FBQztBQVRELGdCQVNDO0FBRUQsa0JBQWUsT0FBbUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSB1c2VyIG9uIDIwMTgvMi8xNy8wMTcuXG4gKi9cblxuaW1wb3J0IHsgSU9wdGlvbnMgfSBmcm9tICcuLi9jb252ZXJ0L2NvcmUnO1xuaW1wb3J0IHsgdHcyY24sIGNuMnR3fSBmcm9tICcuLi9jb252ZXJ0L2luZGV4JztcbmltcG9ydCB7IGFycmF5X3VuaXF1ZSB9IGZyb20gJy4uLy4uL3V0aWwnO1xuaW1wb3J0IGRlZXBtZXJnZSA9IHJlcXVpcmUoJ2RlZXBtZXJnZS1wbHVzJyk7XG5cbmV4cG9ydCBsZXQgX3RhYmxlX3R3ID0ge1xuXHQn572XJzogJ+e+hScsXG5cdCfmgbYnOiAn5oOhJyxcblx0J+iLjyc6ICfomIcnLFxuXHQn6aaGJzogJ+mkqCcsXG59IGFzIGNvbnN0O1xuXG4vKipcbiAqIOatpOihqOWFp+WPquacieespuWQiCBLRVkg5YC85pmC5omN5pyD6Ke455m8XG4gKi9cbmxldCB0YWJsZV9qcF9jb3JlID0ge1xuXHQn44GuJzogW1xuXHRcdCfjga4nLFxuXHRcdCfkuYsnLFxuXHRcdCfnmoQnLFxuXHRdLFxuXG5cdCfjgagnOiBbXG5cdFx0J+OBqCcsXG5cdFx0J+iIhycsXG5cdFx0J+S4jicsXG5cdF0sXG5cblx0J+eUuyc6IFtcblx0XHQn5YiSJyxcblx0XHQn55S7Jyxcblx0XHQn5YqDJyxcblx0XHQn55WrJyxcblx0XSxcblx0J+mXmCc6IFtcblx0XHQn5paXJyxcblx0XSxcblx0J+mspSc6IFtcblx0XHQn5paXJyxcblx0XSxcblx0J+msrSc6IFtcblx0XHQn5paXJyxcblx0XSxcblx0J+msqic6IFtcblx0XHQn5paXJyxcblx0XSxcblx0J+mXhyc6IFtcblx0XHQn5pqXJyxcblx0XSxcblx0J+Wbsyc6IFtcblx0XHQn5ZuzJyxcblx0XHQn5ZyWJyxcblx0XHQn5Zu+Jyxcblx0XSxcblx0J+W9kyc6IFtcblx0XHQn5b2TJyxcblx0XHQn5Zm5Jyxcblx0XHQn55W2Jyxcblx0XHQn5YSFJyxcblx0XSxcblxuXHQn6ZakJzogW1xuXHRcdCflkIgnLFxuXHRdLFxuXHQn6ZiBJzogW1xuXHRcdCflkIgnLFxuXHRdLFxuXG5cdCfnvZcnOiBbXG5cdFx0J+e+hScsXG5cdFx0J+e9lycsXG5cdFx0J+WEuCcsXG5cdFx0J+ORqScsXG5cdFx0J+WbiScsXG5cdFx0J+WVsCcsXG5cdF0sXG5cblx0J+W5sic6IFtcblx0XHQn5bm5Jyxcblx0XHQn5Lm+Jyxcblx0XHQn5bmyJyxcblx0XSxcblxuXHQn5bm5JzogW1xuXHRcdCflubknLFxuXHRcdCflubInLFxuXHRdLFxuXG5cdCfkub4nOiBbXG5cdFx0J+W5sicsXG5cdFx0J+S5vicsXG5cdFx0J+S6gScsXG5cdFx0J+S5uScsXG5cdF0sXG5cdCfkuoEnOiBbXG5cdFx0J+S5vicsXG5cdFx0J+S6gScsXG5cdFx0J+S5uScsXG5cdF0sXG5cdCfkubknOiBbXG5cdFx0J+S5vicsXG5cdFx0J+S6gScsXG5cdFx0J+S5uScsXG5cdF0sXG5cblx0J+WOhic6IFtcblx0XHQn5Y6GJyxcblx0XHQn5q20Jyxcblx0XHQn5q23Jyxcblx0XHQn5pqmJyxcblx0XHQn5puGJyxcblx0XSxcblxuXHQn5q20JzogW1xuXHRcdCfljoYnLFxuXHRdLFxuXHQn5q23JzogW1xuXHRcdCfljoYnLFxuXHRdLFxuXHQn5pqmJzogW1xuXHRcdCfljoYnLFxuXHRdLFxuXHQn5puGJzogW1xuXHRcdCfljoYnLFxuXHRdLFxuXG5cdCflkbsnOiBbXG5cdFx0J+WRuycsXG5cdFx0J+eUsycsXG5cdF0sXG5cblx0J+imhic6IFtcblx0XHQn6KaGJyxcblx0XHQn5aSNJyxcblx0XSxcblxuXHQn5YuJJzogW1xuXHRcdCflhY0nLFxuXHRdLFxuXG5cdCfvqLMnOiBbXG5cdFx0J+WFjScsXG5cdF0sXG5cblx0J+eUpic6IFtcblx0XHQn55SmJyxcblx0XHQn6JiHJyxcblx0XHQn6IuPJyxcblx0XSxcblxuXHQn5b+nJzogW1xuXHRcdCfmhoInLFxuXHRcdCflhKonLFxuXHRdLFxuXG5cdCfpubknOiBbXG5cdFx0J+WSuCcsXG5cdFx0J+m5uScsXG5cdF0sXG5cblx0J+WHhic6IFtcblx0XHQn5rqWJyxcblx0XHQn5YeGJyxcblx0XSxcblxuXHQn5rqWJzogW1xuXHRcdCfmupYnLFxuXHRcdCflh4YnLFxuXHRdLFxuXG5cdCfooq4nOiBbXG5cdFx0J+iiricsXG5cdFx0Ly8g5Lim6Z2e55Ww6auU5a2XIOS9hueUseaWvOmBjuW6puebuOS8vCDlrrnmmJPpjK/oqqRcblx0XHQn56WiJyxcblx0XSxcblxuXHQn5YSYJzogW1xuXHRcdCflhJgnLFxuXHRcdCfkvq0nLFxuXHRdLFxuXG5cdCfkvq0nOiBbXG5cdFx0J+WEmCcsXG5cdFx0J+S+rScsXG5cdF0sXG5cblx0J+iEjyc6IFtcblx0XHQn6ISPJyxcblx0XHQn6auSJyxcblx0XHQn6IefJyxcblx0XSxcblxuXHQn5Y+RJzogW1xuXHRcdCfpq64nLFxuXHRcdCfpq6onLFxuXHRcdCflj5EnLFxuXHRdLFxuXG5cdCfpq64nOiBbXG5cdFx0J+eZvCcsXG5cdFx0J+WPkScsXG5cdF0sXG5cblx0J+aFvic6IFtcblx0XHQn5oW+Jyxcblx0XHQn5qyyJyxcblx0XSxcblxuXHQn6K6aJzogW1xuXHRcdCforoMnLFxuXHRcdCforponLFxuXHRcdCfotIonLFxuXHRcdCfotZ4nLFxuXHRcdCfos5snLFxuXHRdLFxuXG5cdCflhrInOiBbXG5cdFx0J+WGsicsXG5cdFx0J+aylicsXG5cdFx0J+ihnScsXG5cdF0sXG5cblx0J+mdoic6IFtcblx0XHQn6bq1Jyxcblx0XHQn6bqqJyxcblx0XHQn6bq6Jyxcblx0XSxcblxuXHQn6ayaJzogW1xuXHRcdCfprJonLFxuXHRcdCfpoIgnLFxuXHRcdCfpobsnLFxuXHRdLFxuXG5cdCfmj7knOiBbXG5cdFx0J+aPuScsXG5cdFx0J+iDjCcsXG5cdF0sXG5cblx0J+aNsic6IFtcblx0XHQn5o2yJyxcblx0XHQn5Y23Jyxcblx0XHQn5be7Jyxcblx0XSxcblxuXHQn5Y23JzogW1xuXHRcdCfmjbInLFxuXHRcdCfljbcnLFxuXHRcdCflt7snLFxuXHRcdCflirUnLFxuXHRcdCfliLgnLFxuXHRdLFxuXG5cdCflt7snOiBbXG5cdFx0J+aNsicsXG5cdFx0J+WNtycsXG5cdFx0J+W3uycsXG5cdFx0J+WKtScsXG5cdFx0J+WIuCcsXG5cdF0sXG5cblx0J+iLjyc6IFtcblx0XHQn6IuPJyxcblx0XHQn6JiHJyxcblx0XHQn55SmJyxcblx0XSxcblxuXHQn54CPJzogW1xuXHRcdCfngI8nLFxuXHRcdCfmtY8nLFxuXHRcdCfliJgnLFxuXHRdLFxuXHQn5rWPJzogW1xuXHRcdCfngI8nLFxuXHRcdCfmtY8nLFxuXHRcdCfliJgnLFxuXHRdLFxuXG5cdCflkIEnOiBbXG5cdFx0J+exsicsXG5cdFx0Ly8n6b6lJyxcblx0XHQn5ZCBJyxcblx0XSxcblxuXHQn5ZuJJzogW1xuXHRcdCflm4knLFxuXHRcdCfllbAnLFxuXHRcdCfnvZcnLFxuXHRcdCfnvoUnLFxuXHRdLFxuXG5cdCfllbAnOiBbXG5cdFx0J+WbiScsXG5cdFx0J+WVsCcsXG5cdFx0J+e9lycsXG5cdFx0J+e+hScsXG5cdF0sXG5cblx0J+S/ric6IFtcblx0XHQn5L+uJyxcblx0XHQn5L+iJyxcblx0XSxcblxuXHQn54qfJzogW1xuXHRcdCfnip8nLFxuXHRcdCflvLcnLFxuXHRcdCflvLonLFxuXHRdLFxuXG5cdCfll6wnOiBbXG5cdFx0J+WXrCcsXG5cdFx0J+WRtScsXG5cdF0sXG5cblx0J+WUvyc6IFtcblx0XHQn5ZS/Jyxcblx0XHQn5ZG8Jyxcblx0XSxcblxuXHQn5aquJzogW1xuXHRcdCflqq4nLFxuXHRcdCflgbcnLFxuXHRdLFxuXG5cdCfph4cnOiBbXG5cdFx0J+mHhycsXG5cdFx0J+aOoScsXG5cdFx0Ly8n5Z+wJyxcblx0XSxcblxuXHQn5b2pJzogW1xuXHRcdCflvaknLFxuXHRcdCfph4cnLFxuXHRdLFxuXG5cdCfwoKm6JzogW1xuXHRcdCfwoKm6Jyxcblx0XHQn6YeQJyxcblx0XSxcblxuXHQvKlxuXHQn55SaJzogW1xuXHRcdCfnlJonLFxuXHRcdCfku4AnLFxuXHRdLFxuXHQqL1xuXG5cdCfmgbYnOiBbXG5cdFx0J+aBticsXG5cdFx0J+WZgScsXG5cdFx0J+aDoScsXG5cdF0sXG5cblx0J+eCsCc6IFtcblx0XHQn54KwJyxcblx0XHQn54KuJyxcblx0XSxcblxuXHQn6L6fJzogW1xuXHRcdCfovp8nLFxuXHRcdCfpl6InLFxuXHRcdCfpgb8nLFxuXHRdLFxuXG5cdCfpgb8nOiBbXG5cdFx0J+i+nycsXG5cdFx0J+mBvycsXG5cdF0sXG5cblx0J+mXoic6IFtcblx0XHQn6L6fJyxcblx0XHQn6ZeiJyxcblx0XSxcblxuXHQn5ru3JzogW1xuXHRcdCfpra8nLFxuXHRcdCfpsoEnLFxuXHRdLFxuXG5cdCfpubUnOiBbXG5cdFx0J+mtrycsXG5cdFx0J+mygScsXG5cdF0sXG5cblx0J+WNpCc6IFtcblx0XHQn6a2vJyxcblx0XHQn6bKBJyxcblx0XSxcblxuXHQn5YSTJzogW1xuXHRcdCflhJMnLFxuXHRcdCfmqq8nLFxuXHRdLFxuXG5cdCfmqq8nOiBbXG5cdFx0J+WEkycsXG5cdFx0J+aqrycsXG5cdF0sXG5cblx0J+WPsCc6IFtcblx0XHQn5Y+wJyxcblx0XHQn5qqvJyxcblx0XHQn6Ie6Jyxcblx0XHQn6aKxJyxcblx0XSxcblxuXHQn57e0JzogW1xuXHRcdCfngrwnLFxuXHRdLFxuXG5cdCfnu4MnOiBbXG5cdFx0J+eCvCcsXG5cdF0sXG5cblx0J+e5qyc6IFtcblx0XHQn57O7Jyxcblx0XSxcblxuXHQn57mLJzogW1xuXHRcdCfns7snLFxuXHRdLFxuXG5cdCfns5MnOiBbXG5cdFx0J+iwtycsXG5cdF0sXG5cblx0J+epgCc6IFtcblx0XHQn6LC3Jyxcblx0XSxcblxuXHQn54mIJzogW1xuXHRcdCfmnb8nLFxuXHRdLFxuXG59IGFzIGNvbnN0O1xuXG4vKipcbiAqIOatpOihqOWFp+espuWQiOS7peS4i+S7u+aEj+WAvOaZguacg+inuOeZvFxuICovXG5sZXQgdGFibGVfcGx1c19jb3JlID0ge1xuXHQn5YqNJzogW1xuXHRcdCflio0nLFxuXHRcdCfliZEnLFxuXHRcdCfliaMnLFxuXHRcdCflio4nLFxuXHRcdCflipInLFxuXHRcdCflibEnLFxuXHRcdCflipQnLFxuXHRdLFxuXHQn56CyJzogW1xuXHRcdCfnoLInLFxuXHRcdCfngq4nLFxuXHRdLFxuXHQn5YG9JzogW1xuXHRcdCflgb0nLFxuXHRcdCflg54nLFxuXHRdLFxuXHQn5YWnJzogW1xuXHRcdCflhacnLFxuXHRcdCflhoUnLFxuXHRdLFxuXHQn6aylJzogW1xuXHRcdCfprK0nLFxuXHRcdCfprKUnLFxuXHRcdCfpl5gnLFxuXHRcdCfprKonLFxuXHRcdC8vJ+aWlycsXG5cdF0sXG5cdCfpto8nOiBbXG5cdFx0J+m2jycsXG5cdFx0J+m3hCcsXG5cdFx0J+mbnicsXG5cdFx0J+m4oScsXG5cdF0sXG5cdCflhY4nOiBbXG5cdFx0J+WFjicsXG5cdFx0J+WFlCcsXG5cdF0sXG5cdCflnY8nOiBbXG5cdFx0J+WdrycsXG5cdFx0J+WdjycsXG5cdFx0XCLlo4pcIixcblx0XHRcIuWjnlwiLFxuXHRdLFxuXHQn5q67JzogW1xuXHRcdCfmrrsnLFxuXHRcdCfmrrwnLFxuXHRcdCflo7MnLFxuXHRdLFxuXHQn5YOPJzogW1xuXHRcdCflg48nLFxuXHRcdCfosaEnLFxuXHRdLFxuXHQn6JiHJzogW1xuXHRcdCfoi48nLFxuXHRcdCfomIcnLFxuXHRcdCflm4wnLFxuXHRdLFxuXHQn6aSoJzogW1xuXHRcdCfppKgnLFxuXHRcdCfvqKwnLFxuXHRcdCfoiJgnLFxuXHRcdCfppoYnLFxuXHRdLFxuXHQn6bOlJzogW1xuXHRcdCfps6UnLFxuXHRcdCfpuJ8nLFxuXHRcdCfwq6CTJyxcblx0XSxcblx0J+imlic6IFtcblx0XHQn6KaWJyxcblx0XHQn76mhJyxcblx0XHQn6KeGJyxcblx0XHQn55yOJyxcblx0XSxcblx0J+mZuic6IFtcblx0XHQn6Zm6Jyxcblx0XHQn6ZqqJyxcblx0XHQn6ZmpJyxcblx0XHQn5bauJyxcblx0XHQn5bSEJyxcblx0XSxcblx0J+e1tic6IFtcblx0XHQn57W2Jyxcblx0XHQn57WVJyxcblx0XHQn57udJyxcblx0XSxcblx0J+mJhCc6IFtcblx0XHQn6YmEJyxcblx0XHQn6ZC1Jyxcblx0XHQn6ZOBJyxcblx0XHQn6ZChJyxcblx0XSxcblx0J+iruCc6IFtcblx0XHQn6Ku4Jyxcblx0XHQn76iiJyxcblx0XHQn6K+4Jyxcblx0XSxcblx0J+Wwiyc6IFtcblx0XHQn5bCLJyxcblx0XHQn5a+7Jyxcblx0XHQn8KGsticsXG5cdF0sXG5cdCfoo6EnOiBbXG5cdFx0J+ijoScsXG5cdFx0J+ijjycsXG5cdFx0J+mHjCcsXG5cdF0sXG5cdCfpkZEnOiBbXG5cdFx0J+mRkScsXG5cdFx0J+mJtCcsXG5cdFx0J+mRkicsXG5cdF0sXG5cdCfpurUnOiBbXG5cdFx0J+m6tScsXG5cdFx0J+m6qicsXG5cdFx0J+m6uicsXG5cdF0sXG5cdCfmrbInOiBbXG5cdFx0J+atsicsXG5cdFx0J+atsycsXG5cdFx0J+WygScsXG5cdF0sXG5cdC8vIGh0dHBzOi8vemgud2lraXBlZGlhLm9yZy93aWtpLyVFOSU4RCVCRSVFNSVBNyU5M1xuXHQn6ZCYJzogW1xuXHRcdCfpkJgnLFxuXHRcdCfpjb4nLFxuXHRcdCfpkp8nLFxuXHRcdCfplLonLFxuXHRdLFxuXHQn5pyDJzogW1xuXHRcdCfmnIMnLFxuXHRcdCfkvJonLFxuXHRcdCfjkbknLFxuXHRdLFxuXHQn5aGXJzogW1xuXHRcdCfloZcnLFxuXHRcdCflh4MnLFxuXHRcdCfmtoInLFxuXHRdLFxuXG5cdCfpq64nOiBbXG5cdFx0J+mrricsXG5cdFx0J+mrqicsXG5cdFx0Ly8n5Y+RJyxcblx0XSxcblxuXHQn6KmxJzogW1xuXHRcdCfoqbEnLFxuXHRcdCfor50nLFxuXHRcdCfkm6EnLFxuXHRdLFxuXG5cdCfplqQnOiBbXG5cdFx0J+mWpCcsXG5cdFx0J+mYgScsXG5cdF0sXG5cblx0J+iUmCc6IFtcblx0XHQn6JSYJyxcblx0XHQn5Y+DJyxcblx0XHQn5Y+CJyxcblx0XSxcblxuXHQn5Yq0JzogW1xuXHRcdCflirQnLFxuXHRcdCfli54nLFxuXHRcdCflirMnLFxuXHRdLFxuXG5cdCflm70nOiBbXG5cdFx0J+WbvScsXG5cdFx0J+WbrycsXG5cdFx0J+WciycsXG5cdF0sXG5cblx0J+e9tSc6IFtcblx0XHQn5721Jyxcblx0XHQn6aqCJyxcblx0XHQn6aehJyxcblx0XSxcblxuXHQn5a++JzogW1xuXHRcdCflr74nLFxuXHRcdCflsI0nLFxuXHRcdCflr7knLFxuXHRdLFxuXG5cdCfpj70nOiBbXG5cdFx0J+mPvScsXG5cdFx0J+mKuScsXG5cdFx0J+mUiCcsXG5cdF0sXG5cblx0J+mnhCc6IFtcblx0XHQn6aeEJyxcblx0XHQn5K2+Jyxcblx0XHQn6aaxJyxcblx0XHQn6amuJyxcblx0XSxcblxuXHQn6JapJzogW1xuXHRcdCfolqknLFxuXHRcdCfokKgnLFxuXHRcdCfola8nLFxuXHRdLFxuXG5cdCfljZgnOiBbXG5cdFx0J+WNmCcsXG5cdFx0J+WWricsXG5cdFx0J+WNlScsXG5cdF0sXG5cblx0J+e2mSc6IFtcblx0XHQn57aZJyxcblx0XHQn57m8Jyxcblx0XHQn57unJyxcblx0XSxcblxuXHQn6amXJzogW1xuXHRcdCfpqZcnLFxuXHRcdCfpqownLFxuXHRcdCfpqJAnLFxuXG5cdFx0J+mokycsXG5cdF0sXG5cblx0J+attCc6IFtcblx0XHQn5q20Jyxcblx0XHQn5q23Jyxcblx0XHQvLyfmmqYnLFxuXHRcdC8vJ+abhicsXG5cdF0sXG5cblx0J+aapic6IFtcblx0XHQvLyfmrbQnLFxuXHRcdC8vJ+attycsXG5cdFx0J+aapicsXG5cdFx0J+abhicsXG5cdF0sXG5cblx0J+Wboyc6IFtcblx0XHQn5ZuiJyxcblx0XHQn5ZujJyxcblx0XHQn5ZyYJyxcblx0XSxcblxuXHQn6bq8JzogW1xuXHRcdCfpurwnLFxuXHRcdCfpur0nLFxuXHRcdCfluoUnLFxuXHRdLFxuXG5cdCfmiLAnOiBbXG5cdFx0J+aIpicsXG5cdFx0J+aIsCcsXG5cdFx0J+aImCcsXG5cdF0sXG5cblx0J+S5oSc6IFtcblx0XHQn6YO3Jyxcblx0XHQn6YSVJyxcblx0XHQn6YSJJyxcblx0XHQn6YSKJyxcblx0XHQn5LmhJyxcblx0XSxcblxuXHQn5YuJJzogW1xuXHRcdCfli4knLFxuXHRcdCfvqLMnLFxuXHRdLFxuXG5cdCfppJgnOiBbXG5cdFx0J+mkmCcsXG5cdFx0J+mmgCcsXG5cdFx0J+S9mScsXG5cdF0sXG5cblx0J+e2sic6IFtcblx0XHQn57ayJyxcblx0XHQn5IuEJyxcblx0XHQn5IueJyxcblx0XHQn572RJyxcblx0XSxcblxuXHQn6KiXJzogW1xuXHRcdCfoqJcnLFxuXHRcdCforqwnLFxuXHRcdCfkvoInLFxuXHRcdCfmiZgnLFxuXHRdLFxuXG5cdCfnupYnOiBbXG5cdFx0J+e6licsXG5cdFx0J+e6pCcsXG5cdFx0J+e4tCcsXG5cdFx0J+e5iicsXG5cdF0sXG5cblx0J+mNiic6IFtcblx0XHQn6Y2KJyxcblx0XHQn6YysJyxcblx0XHQn8KuUgCcsXG5cblx0XHQn54K8Jyxcblx0XHQn54WJJyxcblx0XSxcblxuXHQn5pOKJzogW1xuXHRcdCfmkoMnLFxuXHRcdCfmk4onLFxuXHRcdCflh7snLFxuXHRdLFxuXG5cdCflr6YnOiBbXG5cdFx0J+WvpicsXG5cdFx0J+WunycsXG5cdFx0J+WunicsXG5cdFx0J+WvlCcsXG5cdF0sXG5cblx0J+aWvCc6IFtcblx0XHQn5pa8Jyxcblx0XHQn5om1Jyxcblx0XSxcblxuXHQn6K2JJzogW1xuXHRcdCforYknLFxuXHRcdCfoqLwnLFxuXHRcdCfor4EnLFxuXHRdLFxuXG5cdCfmk5onOiBbXG5cdFx0J+aTmicsXG5cdFx0J+aNricsXG5cdFx0J+aLoCcsXG5cdF0sXG5cblx0J+iZlSc6IFtcblx0XHQn6JmVJyxcblx0XHQn5aSEJyxcblx0XHQn5JaPJyxcblx0XHQn5YemJyxcblx0XSxcblxuXHQn556qJzogW1xuXHRcdCfnnqonLFxuXHRcdCfnnqAnLFxuXHRcdCfnnJknLFxuXHRdLFxuXG5cdCfogqInOiBbXG5cdFx0J+iCoicsXG5cdFx0J+iDkScsXG5cdF0sXG5cblx0J+iCiSc6IFtcblx0XHQn6IKJJyxcblx0XHQn5a6NJyxcblx0XHQn8KCVjicsXG5cdF0sXG5cblx0J+aGgic6IFtcblx0XHQn5oaCJyxcblx0XHQn8KKdiicsXG5cdFx0J/CimqcnLFxuXHRcdCfwop+cJyxcblx0XHQn5oeuJyxcblx0XHQn8KiXqycsXG5cdF0sXG5cblx0J+e5qyc6IFtcblx0XHQn57mrJyxcblx0XHQvLyfns7snLFxuXHRcdCfnuYsnLFxuXHRdLFxuXG5cdCflu7snOiBbXG5cdFx0J+W7uycsXG5cdFx0J+i/tCcsXG5cdF0sXG5cblx0J+mMsic6IFtcblx0XHQn6YyyJyxcblx0XHQn6YyEJyxcblx0XHQn5b2VJyxcblx0XSxcblxuXHQn6Y6XJzogW1xuXHRcdCfpjpcnLFxuXHRcdCfmp40nLFxuXHRcdCfmnqonLFxuXHRdLFxuXG5cdCfmgqAnOiBbXG5cdFx0J+aCoCcsXG5cdFx0J+a7uicsXG5cdF0sXG5cblx0J+Wjtic6IFtcblx0XHQn5aO2Jyxcblx0XHQn5aO6Jyxcblx0XHQn5aO3Jyxcblx0XSxcblxuXHQn6IyyJzogW1xuXHRcdCfojLInLFxuXHRcdCflhbknLFxuXHRcdCfnjoYnLFxuXHRdLFxuXG5cdCfok4snOiBbXG5cdFx0J+iTiycsXG5cdFx0J+eblicsXG5cdFx0J+iRoicsXG5cdF0sXG5cblx0J+i5nyc6IFtcblx0XHQn6LmfJyxcblx0XHQn6LehJyxcblx0XHQn6L+5Jyxcblx0XSxcblxuXHQn55mSJzogW1xuXHRcdCfnmZInLFxuXHRcdCfnmIknLFxuXHRdLFxuXG5cdCfovronOiBbXG5cdFx0J+i+uicsXG5cdFx0J+mCiicsXG5cdFx0J+i+uScsXG5cdFx0J+mCiScsXG5cdF0sXG5cblx0J+a6lic6IFtcblx0XHQn5rqWJyxcblx0XHQn5YeWJyxcblx0XSxcblxuXHQn6KGbJzogW1xuXHRcdCfooZsnLFxuXHRcdCfooZ4nLFxuXHRcdCfljasnLFxuXHRdLFxuXG5cdCfmmZonOiBbXG5cdFx0J+aZmicsXG5cdFx0J+aZqScsXG5cdF0sXG5cblx0J+ijuCc6IFtcblx0XHQn6KO4Jyxcblx0XHQn6Lq2Jyxcblx0XSxcblxuXHQn5LqAJzogW1xuXHRcdCfkuoAnLFxuXHRcdCfpvpwnLFxuXHRcdCfpvp8nLFxuXHRcdCfwqpqnJyxcblx0XHQn8KqavycsXG5cdFx0J/Cgg74nLFxuXHRdLFxuXG5cdCflh7wnOiBbXG5cdFx0J+WHvCcsXG5cdFx0J+awuScsXG5cdF0sXG5cblx0J+iJuCc6IFtcblx0XHQn6Im4Jyxcblx0XHQn6I2JJyxcblx0XSxcblxuXHQn5pytJzogW1xuXHRcdCfnrponLFxuXHRcdCflibMnLFxuXHRdLFxuXG5cdCflpI0nOiBbXG5cdFx0J+WkjScsXG5cdFx0J+W+qScsXG5cdFx0J+ikhycsXG5cdF0sXG5cblx0J+axoSc6IFtcblx0XHQn5rGhJyxcblx0XHQn5rGZJyxcblx0XHQn5rGaJyxcblx0XSxcblxuXHQn5LyZJzogW1xuXHRcdCfkvJknLFxuXHRcdCflpKUnLFxuXHRdLFxuXG5cdCflvqEnOiBbXG5cdFx0J+W+oScsXG5cdFx0J+empicsXG5cdF0sXG5cblx0J+mssSc6IFtcblx0XHQn6ayxJyxcblx0XHQn6YOBJyxcblx0XSxcblxuXHQn5repJzogW1xuXHRcdCfmt6knLFxuXHRcdCflh4wnLFxuXHRdLFxuXG5cdCfntK4nOiBbXG5cdFx0J+e0ricsXG5cdFx0J+aJjicsXG5cdF0sXG5cblx0J+eXtCc6IFtcblx0XHQn55e0Jyxcblx0XHQn55mhJyxcblx0XSxcblxuXHQn5qCWJzogW1xuXHRcdCfmoJYnLFxuXHRcdCfmo7InLFxuXHRdLFxuXG5cdCfniocnOiBbXG5cdFx0J+eKhycsXG5cdFx0J+WllCcsXG5cdF0sXG5cblx0J+evhCc6IFtcblx0XHQn56+EJyxcblx0XHQn6IyDJyxcblx0XSxcblxuXHQn6JaRJzogW1xuXHRcdCfolpEnLFxuXHRcdCflp5wnLFxuXHRcdCfokYEnLFxuXHRdLFxuXG5cdCfmqLgnOiBbXG5cdFx0J+aouCcsXG5cdFx0J+actCcsXG5cdF0sXG5cblx0J+irric6IFtcblx0XHQn6KuuJyxcblx0XHQn6LCYJyxcblx0XHQn5ZKoJyxcblx0XSxcblxuXHQn5pKaJzogW1xuXHRcdCfmkponLFxuXHRcdCfmjbsnLFxuXHRdLFxuXG5cdCflloInOiBbXG5cdFx0J+WWgicsXG5cdFx0J+mktScsXG5cdFx0J+mkpycsXG5cdFx0J/Crl60nLFxuXHRdLFxuXG5cdCfmt6gnOiBbXG5cdFx0J+a3qCcsXG5cdFx0J+WHiCcsXG5cdFx0J+WHgCcsXG5cdF0sXG5cblx0J+aglyc6IFtcblx0XHQn5qCXJyxcblx0XHQn5oWEJyxcblx0XSxcblxuXHQn5oy9JzogW1xuXHRcdCfmjL0nLFxuXHRcdCfovJMnLFxuXHRdLFxuXG5cdCfngbYnOiBbXG5cdFx0J+eBticsXG5cdFx0J+eriCcsXG5cdF0sXG5cblx0J+e3mic6IFtcblx0XHQn57eaJyxcblx0XHQn57yQJyxcblx0XHQn57arJyxcblx0XHQn57q/Jyxcblx0XSxcblxuXHQn55uhJzogW1xuXHRcdCfnm6EnLFxuXHRcdCflsL0nLFxuXHRcdCflhJgnLFxuXHRdLFxuXG5cdCfpu7QnOiBbXG5cdFx0J+m7tCcsXG5cdFx0J+mciScsXG5cdF0sXG5cblx0J+WRqCc6IFtcblx0XHQn5ZGoJyxcblx0XHQn6YCxJyxcblx0XSxcblxuXHQn5LimJzogW1xuXHRcdCfkuKYnLFxuXHRcdCflubYnLFxuXHRcdCfkvbUnLFxuXHRdLFxuXG5cdCforponOiBbXG5cdFx0J+iumicsXG5cdFx0J+iugycsXG5cdF0sXG5cblx0J+imsyc6IFtcblx0XHQn6KazJyxcblx0XHQn6KeAJyxcblx0XHQn6KeCJyxcblx0XHQn6KaMJyxcblx0XSxcblxuXHQn6YGKJzogW1xuXHRcdCfpgYonLFxuXHRcdCfmuLgnLFxuXHRdLFxuXG5cdCflkK8nOiBbXG5cdFx0J+WQrycsXG5cdFx0J+WVkycsXG5cdFx0J+WVnycsXG5cdFx0J+WVlCcsXG5cdF0sXG5cblx0J+W7hCc6IFtcblx0XHQn5buEJyxcblx0XHQn5Y6pJyxcblx0XHQn5buQJyxcblx0XHQn5buPJyxcblx0XSxcblxuXHQn5rCjJzogW1xuXHRcdCfmsJcnLFxuXHRcdCfmsKMnLFxuXHRcdCfmsJQnLFxuXHRdLFxuXG5cdCfmrLInOiBbXG5cdFx0J+aFvicsXG5cdFx0J+assicsXG5cdF0sXG5cblx0J+WCkSc6IFtcblx0XHQn5YKRJyxcblx0XHQn5p2wJyxcblx0XSxcblxuXHQn6Y2bJzogW1xuXHRcdCfpjZsnLFxuXHRcdCfplLsnLFxuXHRcdCfnhYUnLFxuXHRdLFxuXG5cdCflvrUnOiBbXG5cdFx0J+W+tScsXG5cdFx0J+W+tCcsXG5cdF0sXG5cblx0J+mWkic6IFtcblx0XHQn6ZaSJyxcblx0XHQn8KuUricsXG5cdFx0J+mWkScsXG5cdFx0J+mXsicsXG5cdF0sXG5cblx0J+i0iic6IFtcblx0XHQn6LSKJyxcblx0XHQn6LWeJyxcblx0XHQn6LObJyxcblx0XSxcblxuXHQn5qu7JzogW1xuXHRcdCfmq7snLFxuXHRcdCfmoZwnLFxuXHRcdCfmqLEnLFxuXHRdLFxuXG5cdCflsKgnOiBbXG5cdFx0J+WwqCcsXG5cdFx0J+eLtScsXG5cdF0sXG5cblx0J+WciCc6IFtcblx0XHQn5ZyIJyxcblx0XHQn5ZyPJyxcblx0XSxcblxuXHQn5Ye2JzogW1xuXHRcdCflh7YnLFxuXHRcdCflhYcnLFxuXHRdLFxuXG5cdCfmtZwnOiBbXG5cdFx0J+a1nCcsXG5cdFx0J+a/sScsXG5cdFx0J+a7qCcsXG5cdF0sXG5cblx0J+eFmSc6IFtcblx0XHQn54WZJyxcblx0XHQn54OfJyxcblx0XHQn6I+4Jyxcblx0XSxcblxuXHQn6buSJzogW1xuXHRcdCfpu5InLFxuXHRcdCfpu5EnLFxuXHRdLFxuXG5cdCfmqIInOiBbXG5cdFx0J+aogicsXG5cdFx0J+S5kCcsXG5cdFx0J+alvScsXG5cdF0sXG5cblx0J+iWrCc6IFtcblx0XHQn6JasJyxcblx0XHQn6JelJyxcblx0XHQn6I2vJyxcblx0XHQn6JGvJyxcblx0XHQn8KObmScsXG5cdF0sXG5cblx0J+WKtSc6IFtcblx0XHQn5Yq1Jyxcblx0XHQn5Yi4Jyxcblx0XHQn5Y23Jyxcblx0XSxcblxuXHQn6LKzJzogW1xuXHRcdCfosrMnLFxuXHRcdCfotLAnLFxuXHRcdCflvJAnLFxuXHRcdCfosq4nLFxuXHRcdCfwoo6QJyxcblx0XHQn5LqMJyxcblx0XSxcblxuXHQn6Zq3JzogW1xuXHRcdCfpmrcnLFxuXHRcdCfpmrgnLFxuXHRcdCfpmrYnLFxuXHRdLFxuXG5cdCflp6snOiBbXG5cdFx0J+WnqycsXG5cdFx0J+WnrCcsXG5cdF0sXG5cblx0J+eHuyc6IFtcblx0XHQn54e7Jyxcblx0XHQn54aPJyxcblx0XSxcblxuXHQn57GyJzogW1xuXHRcdCfnsbInLFxuXHRcdCfpvqUnLFxuXHRdLFxuXG5cdCfpvacnOiBbXG5cdFx0J+m9pycsXG5cdFx0J+WVricsXG5cdFx0J/CqmIInLFxuXHRcdCflm5MnLFxuXHRcdCflmZsnLFxuXHRcdCflmpknLFxuXHRdLFxuXG5cdCfpubwnOiBbXG5cdFx0J+m5vCcsXG5cdFx0J+eisScsXG5cdFx0J+ehtycsXG5cdF0sXG5cblx0J+WSuCc6IFtcblx0XHQn5ZK4Jyxcblx0XHQn6bm5Jyxcblx0XSxcblxuXHQn56mXJzogW1xuXHRcdCfnqZcnLFxuXHRcdCfnqYInLFxuXHRdLFxuXG5cdCflu6InOiBbXG5cdFx0J+W7oicsXG5cdFx0J+W7gycsXG5cdFx0J+W6nycsXG5cdF0sXG5cblx0J+i5oCc6IFtcblx0XHQn6LmgJyxcblx0XHQn6LeWJyxcblx0XSxcblxuXHQn5ZCSJzogW1xuXHRcdCflkJInLFxuXHRcdCflkqQnLFxuXHRdLFxuXG5cdCflibcnOiBbXG5cdFx0J+WJtycsXG5cdFx0J+mPnycsXG5cdFx0J+mTsicsXG5cdFx0J+WIrCcsXG5cdFx0J+WJlycsXG5cdF0sXG5cblx0J+aTlyc6IFtcblx0XHQn5pOXJyxcblx0XHQn5YqIJyxcblx0XSxcblxuXHQn5qC4JzogW1xuXHRcdCfmoLgnLFxuXHRcdCfopognLFxuXHRdLFxuXG5cdCfohKMnOiBbXG5cdFx0J+iEoycsXG5cdFx0J+WUhycsXG5cdFx0J+WUhycsXG5cdF0sXG5cblx0J+WNhyc6IFtcblx0XHQn5Y2HJyxcblx0XHQn5piHJyxcblx0XSxcblxuXHQn56OQJzogW1xuXHRcdCfno5AnLFxuXHRcdCfnm6QnLFxuXHRcdCfnm5gnLFxuXHRdLFxuXG5cdCfmuqonOiBbXG5cdFx0J+a6qicsXG5cdFx0J+a4kycsXG5cdF0sXG5cblx0J+iwvyc6IFtcblx0XHQn6LC/Jyxcblx0XHQn5bWgJyxcblx0XSxcblxuXHQn5oqYJzogW1xuXHRcdCfmipgnLFxuXHRcdCfmkbonLFxuXHRdLFxuXG5cdCfnpZAnOiBbXG5cdFx0J+elkCcsXG5cdFx0J+S9kScsXG5cdF0sXG5cblx0J+eTric6IFtcblx0XHQn55OuJyxcblx0XHQn572LJyxcblx0XHQn55SVJyxcblx0XSxcblxuXHQn6LmkJzogW1xuXHRcdCfouaQnLFxuXHRcdCfouKonLFxuXHRcdCfouKgnLFxuXHRdLFxuXG5cdCfmmpcnOiBbXG5cdFx0J+mXhycsXG5cdFx0J+aalycsXG5cdF0sXG5cblx0J+aYtSc6IFtcblx0XHQn5pi1Jyxcblx0XHQn5pqxJyxcblx0XSxcblxuXHQn5biDJzogW1xuXHRcdCfluIMnLFxuXHRcdCfkvYgnLFxuXHRdLFxuXG5cdCfngronOiBbXG5cdFx0J+eCuicsXG5cdFx0J+S4uicsXG5cdFx0J+eIsicsXG5cdF0sXG5cblx0J+e2syc6IFtcblx0XHQn57azJyxcblx0XHQn57mDJyxcblx0XHQn57u3Jyxcblx0XSxcblxuXHQn55e6JzogW1xuXHRcdCfnl7onLFxuXHRcdCfnl7knLFxuXHRdLFxuXG5cdCfnl7InOiBbXG5cdFx0J+eXsicsXG5cdFx0J+eXsycsXG5cdF0sXG5cblx0J+mbhyc6IFtcblx0XHQn6ZuHJyxcblx0XHQn5YOxJyxcblx0XSxcblxuXHQn5pWYJzogW1xuXHRcdCfmlZgnLFxuXHRcdCflj5knLFxuXHRcdCfmlY0nLFxuXHRdLFxuXG5cdCfnm6onOiBbXG5cdFx0J+ebqicsXG5cdFx0J+iVqScsXG5cdFx0J+iNoScsXG5cdF0sXG5cblx0J+WLmyc6IFtcblx0XHQn5YubJyxcblx0XHQn5YuzJyxcblx0XHQn5YuLJyxcblx0XSxcblxuXHQn56WVJzogW1xuXHRcdCfnpZUnLFxuXHRcdCfnp5gnLFxuXHRdLFxuXG5cdCfniYYnOiBbXG5cdFx0J+eJhicsXG5cdFx0J+WimScsXG5cdFx0J+WiuycsXG5cdF0sXG5cblx0J+eIvic6IFtcblx0XHQn54i+Jyxcblx0XHQn5bCUJyxcblx0XHQn5bCTJyxcblx0XSxcblxuXHQn54SwJzogW1xuXHRcdCfnhLAnLFxuXHRcdCfnhJQnLFxuXHRdLFxuXG5cdCfpu5gnOiBbXG5cdFx0J+m7mCcsXG5cdFx0J+m7mScsXG5cdF0sXG5cblx0J+Wjkyc6IFtcblx0XHQn5aOTJyxcblx0XHQn5Y6LJyxcblx0XHQn5ZynJyxcblx0XSxcblxuXHQn5bu4JzogW1xuXHRcdCflu7gnLFxuXHRcdCfov6onLFxuXHRdLFxuXG5cdCfmm4knOiBbXG5cdFx0J+abiScsXG5cdFx0J+aZkycsXG5cdFx0J+aagScsXG5cdF0sXG5cblx0J+mcuCc6IFtcblx0XHQn6Zy4Jyxcblx0XHQn6KaHJyxcblx0XSxcblxuXHQn6ZyKJzogW1xuXHRcdCfpnIonLFxuXHRcdCfpnYgnLFxuXHRcdCfngbUnLFxuXHRdLFxuXG5cdCfms6onOiBbXG5cdFx0J+azqicsXG5cdFx0J+a2mScsXG5cdFx0J+a3micsXG5cdF0sXG5cblx0J+eJuic6IFtcblx0XHQn54m6Jyxcblx0XHQn54qgJyxcblx0XHQn54qnJyxcblx0XSxcblxuXHQn6JeJJzogW1xuXHRcdCfol4knLFxuXHRcdCfogKQnLFxuXHRdLFxuXG5cdCflmbgnOiBbXG5cdFx0J+WZuCcsXG5cdFx0J+WQqCcsXG5cdF0sXG5cblx0J+S/sSc6IFtcblx0XHQn5L+xJyxcblx0XHQn5YC2Jyxcblx0XSxcblxuXHQn57K9JzogW1xuXHRcdCfnsr0nLFxuXHRcdCfns4knLFxuXHRcdCfns60nLFxuXHRdLFxuXG5cdCflkJEnOiBbXG5cdFx0J+WQkScsXG5cdFx0J+abjycsXG5cdFx0J+WaricsXG5cdF0sXG5cblx0J+aCvSc6IFtcblx0XHQn5oK9Jyxcblx0XHQn5reSJyxcblx0XHQn5YeEJyxcblx0XSxcblxuXHQn6bG3JzogW1xuXHRcdCfpsbcnLFxuXHRcdCfpsJAnLFxuXHRcdCfps4QnLFxuXHRdLFxuXG5cdCfmu7cnOiBbXG5cdFx0J+a7tycsXG5cdFx0J+m5tScsXG5cdFx0J+WNpCcsXG5cdF0sXG5cblx0J+minCc6IFtcblx0XHQn6aKcJyxcblx0XHQn6aGPJyxcblx0XHQn6aGUJyxcblx0XSxcblxuXHQn6KGdJzogW1xuXHRcdCfooZ0nLFxuXHRcdCfmspYnLFxuXHRcdCflhrInLFxuXHRdLFxuXG5cdCfmqJEnOiBbXG5cdFx0J+aokScsXG5cdFx0J+aigScsXG5cdF0sXG5cblx0J+eggic6IFtcblx0XHQn56CCJyxcblx0XHQn5rKZJyxcblx0XSxcblxuXHQn54KtJzogW1xuXHRcdCfngq0nLFxuXHRcdCfnorMnLFxuXHRdLFxuXG5cdCfns7gnOiBbXG5cdFx0J+ezuCcsXG5cdFx0J+e1sicsXG5cdFx0J+S4nScsXG5cdF0sXG5cblx0J+ewtyc6IFtcblx0XHQn57C3Jyxcblx0XHQn5qqQJyxcblx0XSxcblxuXHQn5raMJzogW1xuXHRcdCfmtownLFxuXHRcdCfmuacnLFxuXHRdLFxuXG5cdCfns5MnOiBbXG5cdFx0J+epgCcsXG5cdFx0J+ezkycsXG5cdF0sXG5cblx0J+S4oSc6IFtcblx0XHQn5LihJyxcblx0XHQn5LikJyxcblx0XHQn5YWpJyxcblx0XSxcblxuXHQn5a62JzogW1xuXHRcdCflrrYnLFxuXHRcdCflgqInLFxuXHRdLFxuXG5cdCflprMnOiBbXG5cdFx0J+WmsycsXG5cdFx0J+S9oCcsXG5cdF0sXG5cblx0J+WluSc6IFtcblx0XHQn5aW5Jyxcblx0XHQn5LuWJyxcblx0XSxcblxufSBhcyBjb25zdDtcblxuLyoqXG4gKiDmraTooajlhafnrKblkIjku6XkuIvku7vmhI/lgLzmmYLmnIPop7jnmbxcbiAqL1xuZXhwb3J0IGNvbnN0IHRhYmxlX3BsdXMgPSBfYnVpbGRUYWJsZVBsdXModGFibGVfcGx1c19jb3JlKTtcblxuLyoqXG4gKiDmraTooajlhaflj6rmnInnrKblkIggS0VZIOWAvOaZguaJjeacg+inuOeZvFxuICovXG5leHBvcnQgY29uc3QgdGFibGVfanAgPSBfbWVyZ2VUYWJsZSh0YWJsZV9qcF9jb3JlLCB0YWJsZV9wbHVzKTtcblxuX3VuaXF1ZVRhYmxlKHRhYmxlX2pwKTtcblxudHlwZSBJQXJyYXlPclJlYWRvbmx5PFU+ID0gVVtdIHwgcmVhZG9ubHkgVVtdO1xuXG5leHBvcnQgZnVuY3Rpb24gX3VuaXF1ZVRhYmxlPFQgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCBJQXJyYXlPclJlYWRvbmx5PHN0cmluZz4+Pih0YWJsZV9qcDogVClcbntcblx0T2JqZWN0LmtleXModGFibGVfanApXG5cdFx0LmZvckVhY2goZnVuY3Rpb24gKGtleSlcblx0XHR7XG5cdFx0XHQvLyBAdHMtaWdub3JlXG5cdFx0XHR0YWJsZV9qcFtrZXldID0gYXJyYXlfdW5pcXVlKHRhYmxlX2pwW2tleV0pO1xuXHRcdH0pXG5cdDtcblxuXHRyZXR1cm4gdGFibGVfanA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfYnVpbGRUYWJsZVBsdXM8VCBleHRlbmRzIHN0cmluZywgVSBleHRlbmRzIHN0cmluZz4odGFibGVfcGx1czogUmVjb3JkPFQsIElBcnJheU9yUmVhZG9ubHk8VT4+KTogUmVjb3JkPFUgfCBULCBzdHJpbmdbXT5cbntcblx0T2JqZWN0LmtleXModGFibGVfcGx1cylcblx0XHQuZm9yRWFjaChmdW5jdGlvbiAoa2V5KVxuXHRcdHtcblx0XHRcdHRhYmxlX3BsdXNba2V5XSA9IGFycmF5X3VuaXF1ZSh0YWJsZV9wbHVzW2tleV0pO1xuXG5cdFx0XHR0YWJsZV9wbHVzW2tleV0uZm9yRWFjaChmdW5jdGlvbiAocylcblx0XHRcdHtcblx0XHRcdFx0dGFibGVfcGx1c1tzXSA9IHRhYmxlX3BsdXNba2V5XTtcblx0XHRcdH0pXG5cdFx0fSlcblx0O1xuXG5cdC8vIEB0cy1pZ25vcmVcblx0cmV0dXJuIHRhYmxlX3BsdXNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9tZXJnZVRhYmxlPFQgZXh0ZW5kcyBzdHJpbmcsIFUgZXh0ZW5kcyBzdHJpbmc+KHRhYmxlX2pwOiBSZWNvcmQ8VCwgSUFycmF5T3JSZWFkb25seTxzdHJpbmc+PiwgdGFibGVfcGx1czogUmVjb3JkPFUsIElBcnJheU9yUmVhZG9ubHk8c3RyaW5nPj4pOiBSZWNvcmQ8VSB8IFQsIHN0cmluZ1tdPlxue1xuXHQvLyBAdHMtaWdub3JlXG5cdHJldHVybiBkZWVwbWVyZ2UodGFibGVfanAsIHRhYmxlX3BsdXMpO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElTaW1wbGVUYWJsZVxue1xuXHRba2V5OiBzdHJpbmddOiBzdHJpbmcsXG59XG5cbmV4cG9ydCBsZXQgX3RhYmxlX2NuOiBJU2ltcGxlVGFibGUgPSBfdXBkYXRlKHt9LCBfdGFibGVfdHcpO1xuXG5leHBvcnQgZnVuY3Rpb24gX3VwZGF0ZSh0YXJnZXQ6IElTaW1wbGVUYWJsZSwgc291cmNlOiBJU2ltcGxlVGFibGUpOiBJU2ltcGxlVGFibGVcbntcblx0dGFyZ2V0ID0gT2JqZWN0LmtleXMoc291cmNlKVxuXHRcdC5yZWR1Y2UoZnVuY3Rpb24gKGEsIGIpXG5cdFx0e1xuXHRcdFx0YVtzb3VyY2VbYl1dID0gYjtcblxuXHRcdFx0cmV0dXJuIGE7XG5cdFx0fSwge30pXG5cdDtcblxuXHRyZXR1cm4gdGFyZ2V0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX2dldChhcnI6IHN0cmluZ1tdLCB2YWx1ZTogc3RyaW5nIHwgc3RyaW5nW10sIC4uLnZhbHVlczogQXJyYXk8c3RyaW5nIHwgc3RyaW5nW10+KTogc3RyaW5nW11cbntcblx0bGV0IHJldDogc3RyaW5nW10gPSBbXVxuXHRcdC5jb25jYXQodmFsdWUpXG5cdFx0LmNvbmNhdCguLi52YWx1ZXMpXG5cdFx0LmZpbHRlcihmdW5jdGlvbiAodilcblx0XHR7XG5cdFx0XHRyZXR1cm4gdjtcblx0XHR9KVxuXHQ7XG5cblx0Ly9yZXQubGVuZ3RoICYmIHJldC5zb3J0KCk7XG5cblx0cmV0dXJuIHJldDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGpwKGNoYXI6IHN0cmluZywgb3B0aW9uczogSU9wdGlvbnMgPSB7fSk6IHN0cmluZ1tdXG57XG5cdGxldCBhOiBzdHJpbmdbXSA9IFtdO1xuXHRhID0gX2dldChhLCB0YWJsZV9qcFtjaGFyXSk7XG5cblx0cmV0dXJuIGE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0dyhjaGFyOiBzdHJpbmcsIG9wdGlvbnM6IElPcHRpb25zID0ge30pOiBzdHJpbmdbXVxue1xuXHRsZXQgYTogc3RyaW5nW10gPSBbXTtcblxuXHRhID0gX2dldChhLCBfdGFibGVfdHdbY2hhcl0sIGNuMnR3KGNoYXIsIG9wdGlvbnMpKTtcblxuXHQvL2NvbnNvbGUubG9nKCdjbjJ0dycsIGNoYXIsIGEpO1xuXG5cdHJldHVybiBhO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY24oY2hhcjogc3RyaW5nLCBvcHRpb25zOiBJT3B0aW9ucyA9IHt9KTogc3RyaW5nW11cbntcblx0bGV0IGE6IHN0cmluZ1tdID0gW107XG5cblx0YSA9IF9nZXQoYSwgX3RhYmxlX2NuW2NoYXJdLCB0dzJjbihjaGFyLCBvcHRpb25zKSk7XG5cblx0Ly9jb25zb2xlLmxvZygndHcyY24nLCBjaGFyLCBhKTtcblxuXHRyZXR1cm4gYTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZXhwb3J0cyBhcyB0eXBlb2YgaW1wb3J0KCcuL3RhYmxlJyk7XG4iXX0=
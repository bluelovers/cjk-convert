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
    '藤': [
        '藤',
        '籐',
        '籘',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YWJsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7O0dBRUc7O0FBR0gsNENBQStDO0FBQy9DLHFDQUEwQztBQUMxQyw0Q0FBNkM7QUFFbEMsUUFBQSxTQUFTLEdBQUc7SUFDdEIsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7Q0FDQyxDQUFDO0FBRVg7O0dBRUc7QUFDSCxJQUFJLGFBQWEsR0FBRztJQUNuQixHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO0tBQ0g7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gscUJBQXFCO1FBQ3JCLEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILE1BQU07UUFDTixHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUVIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELElBQUksRUFBRTtRQUNMLElBQUk7UUFDSixHQUFHO0tBQ0g7SUFFRDs7Ozs7TUFLRTtJQUVGLEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7S0FDSDtDQUVRLENBQUM7QUFFWDs7R0FFRztBQUNILElBQUksZUFBZSxHQUFHO0lBQ3JCLEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FFSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsSUFBSTtLQUNKO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILElBQUk7S0FDSjtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBQ0QsbURBQW1EO0lBQ25ELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUVIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBRUgsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FHSDtJQUVELEdBQUcsRUFBRTtRQUNKLE1BQU07UUFDTixNQUFNO1FBQ04sR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILElBQUk7UUFFSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsSUFBSTtLQUNKO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILElBQUk7UUFDSixJQUFJO1FBQ0osSUFBSTtRQUNKLEdBQUc7UUFDSCxJQUFJO0tBQ0o7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsTUFBTTtRQUNOLEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsSUFBSTtRQUNKLElBQUk7UUFDSixJQUFJO0tBQ0o7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsSUFBSTtLQUNKO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsSUFBSTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxJQUFJO0tBQ0o7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxJQUFJO1FBQ0osR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILElBQUk7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7Q0FFUSxDQUFDO0FBRVg7O0dBRUc7QUFDVSxRQUFBLFVBQVUsR0FBRyxlQUFlLENBQUMsZUFBZSxDQUFDLENBQUM7QUFFM0Q7O0dBRUc7QUFDVSxRQUFBLFFBQVEsR0FBRyxXQUFXLENBQUMsYUFBYSxFQUFFLGtCQUFVLENBQUMsQ0FBQztBQUUvRCxZQUFZLENBQUMsZ0JBQVEsQ0FBQyxDQUFDO0FBSXZCLFNBQWdCLFlBQVksQ0FBcUQsUUFBVztJQUUzRixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUNuQixPQUFPLENBQUMsVUFBVSxHQUFHO1FBRXJCLGFBQWE7UUFDYixRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsbUJBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM3QyxDQUFDLENBQUMsQ0FDRjtJQUVELE9BQU8sUUFBUSxDQUFDO0FBQ2pCLENBQUM7QUFYRCxvQ0FXQztBQUVELFNBQWdCLGVBQWUsQ0FBcUMsVUFBMEM7SUFFN0csTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7U0FDckIsT0FBTyxDQUFDLFVBQVUsR0FBRztRQUVyQixVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsbUJBQVksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUVoRCxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQztZQUVsQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxDQUFBO0lBQ0gsQ0FBQyxDQUFDLENBQ0Y7SUFFRCxhQUFhO0lBQ2IsT0FBTyxVQUFVLENBQUE7QUFDbEIsQ0FBQztBQWhCRCwwQ0FnQkM7QUFFRCxTQUFnQixXQUFXLENBQXFDLFFBQTZDLEVBQUUsVUFBK0M7SUFFN0osYUFBYTtJQUNiLE9BQU8sU0FBUyxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztBQUN4QyxDQUFDO0FBSkQsa0NBSUM7QUFPVSxRQUFBLFNBQVMsR0FBaUIsT0FBTyxDQUFDLEVBQUUsRUFBRSxpQkFBUyxDQUFDLENBQUM7QUFFNUQsU0FBZ0IsT0FBTyxDQUFDLE1BQW9CLEVBQUUsTUFBb0I7SUFFakUsTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQzFCLE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDO1FBRXJCLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFakIsT0FBTyxDQUFDLENBQUM7SUFDVixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQ047SUFFRCxPQUFPLE1BQU0sQ0FBQztBQUNmLENBQUM7QUFaRCwwQkFZQztBQUVELFNBQWdCLElBQUksQ0FBQyxHQUFhLEVBQUUsS0FBd0IsRUFBRSxHQUFHLE1BQWdDO0lBRWhHLElBQUksR0FBRyxHQUFhLEVBQUU7U0FDcEIsTUFBTSxDQUFDLEtBQUssQ0FBQztTQUNiLE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQztTQUNqQixNQUFNLENBQUMsVUFBVSxDQUFDO1FBRWxCLE9BQU8sQ0FBQyxDQUFDO0lBQ1YsQ0FBQyxDQUFDLENBQ0Y7SUFFRCwyQkFBMkI7SUFFM0IsT0FBTyxHQUFHLENBQUM7QUFDWixDQUFDO0FBZEQsb0JBY0M7QUFFRCxTQUFnQixFQUFFLENBQUMsSUFBWSxFQUFFLFVBQW9CLEVBQUU7SUFFdEQsSUFBSSxDQUFDLEdBQWEsRUFBRSxDQUFDO0lBQ3JCLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxFQUFFLGdCQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUU1QixPQUFPLENBQUMsQ0FBQztBQUNWLENBQUM7QUFORCxnQkFNQztBQUVELFNBQWdCLEVBQUUsQ0FBQyxJQUFZLEVBQUUsVUFBb0IsRUFBRTtJQUV0RCxJQUFJLENBQUMsR0FBYSxFQUFFLENBQUM7SUFFckIsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEVBQUUsaUJBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxhQUFLLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFFbkQsZ0NBQWdDO0lBRWhDLE9BQU8sQ0FBQyxDQUFDO0FBQ1YsQ0FBQztBQVRELGdCQVNDO0FBRUQsU0FBZ0IsRUFBRSxDQUFDLElBQVksRUFBRSxVQUFvQixFQUFFO0lBRXRELElBQUksQ0FBQyxHQUFhLEVBQUUsQ0FBQztJQUVyQixDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsRUFBRSxpQkFBUyxDQUFDLElBQUksQ0FBQyxFQUFFLGFBQUssQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUVuRCxnQ0FBZ0M7SUFFaEMsT0FBTyxDQUFDLENBQUM7QUFDVixDQUFDO0FBVEQsZ0JBU0M7QUFFRCxrQkFBZSxPQUFtQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IHVzZXIgb24gMjAxOC8yLzE3LzAxNy5cbiAqL1xuXG5pbXBvcnQgeyBJT3B0aW9ucyB9IGZyb20gJy4uL2NvbnZlcnQvY29yZSc7XG5pbXBvcnQgeyB0dzJjbiwgY24ydHd9IGZyb20gJy4uL2NvbnZlcnQvaW5kZXgnO1xuaW1wb3J0IHsgYXJyYXlfdW5pcXVlIH0gZnJvbSAnLi4vLi4vdXRpbCc7XG5pbXBvcnQgZGVlcG1lcmdlID0gcmVxdWlyZSgnZGVlcG1lcmdlLXBsdXMnKTtcblxuZXhwb3J0IGxldCBfdGFibGVfdHcgPSB7XG5cdCfnvZcnOiAn576FJyxcblx0J+aBtic6ICfmg6EnLFxuXHQn6IuPJzogJ+iYhycsXG5cdCfppoYnOiAn6aSoJyxcbn0gYXMgY29uc3Q7XG5cbi8qKlxuICog5q2k6KGo5YWn5Y+q5pyJ56ym5ZCIIEtFWSDlgLzmmYLmiY3mnIPop7jnmbxcbiAqL1xubGV0IHRhYmxlX2pwX2NvcmUgPSB7XG5cdCfjga4nOiBbXG5cdFx0J+OBricsXG5cdFx0J+S5iycsXG5cdFx0J+eahCcsXG5cdF0sXG5cblx0J+OBqCc6IFtcblx0XHQn44GoJyxcblx0XHQn6IiHJyxcblx0XHQn5LiOJyxcblx0XSxcblxuXHQn55S7JzogW1xuXHRcdCfliJInLFxuXHRcdCfnlLsnLFxuXHRcdCflioMnLFxuXHRcdCfnlasnLFxuXHRdLFxuXHQn6ZeYJzogW1xuXHRcdCfmlpcnLFxuXHRdLFxuXHQn6aylJzogW1xuXHRcdCfmlpcnLFxuXHRdLFxuXHQn6aytJzogW1xuXHRcdCfmlpcnLFxuXHRdLFxuXHQn6ayqJzogW1xuXHRcdCfmlpcnLFxuXHRdLFxuXHQn6ZeHJzogW1xuXHRcdCfmmpcnLFxuXHRdLFxuXHQn5ZuzJzogW1xuXHRcdCflm7MnLFxuXHRcdCflnJYnLFxuXHRcdCflm74nLFxuXHRdLFxuXHQn5b2TJzogW1xuXHRcdCflvZMnLFxuXHRcdCflmbknLFxuXHRcdCfnlbYnLFxuXHRcdCflhIUnLFxuXHRdLFxuXG5cdCfplqQnOiBbXG5cdFx0J+WQiCcsXG5cdF0sXG5cdCfpmIEnOiBbXG5cdFx0J+WQiCcsXG5cdF0sXG5cblx0J+e9lyc6IFtcblx0XHQn576FJyxcblx0XHQn572XJyxcblx0XHQn5YS4Jyxcblx0XHQn45GpJyxcblx0XHQn5ZuJJyxcblx0XHQn5ZWwJyxcblx0XSxcblxuXHQn5bmyJzogW1xuXHRcdCflubknLFxuXHRcdCfkub4nLFxuXHRcdCflubInLFxuXHRdLFxuXG5cdCflubknOiBbXG5cdFx0J+W5uScsXG5cdFx0J+W5sicsXG5cdF0sXG5cblx0J+S5vic6IFtcblx0XHQn5bmyJyxcblx0XHQn5Lm+Jyxcblx0XHQn5LqBJyxcblx0XHQn5Lm5Jyxcblx0XSxcblx0J+S6gSc6IFtcblx0XHQn5Lm+Jyxcblx0XHQn5LqBJyxcblx0XHQn5Lm5Jyxcblx0XSxcblx0J+S5uSc6IFtcblx0XHQn5Lm+Jyxcblx0XHQn5LqBJyxcblx0XHQn5Lm5Jyxcblx0XSxcblxuXHQn5Y6GJzogW1xuXHRcdCfljoYnLFxuXHRcdCfmrbQnLFxuXHRcdCfmrbcnLFxuXHRcdCfmmqYnLFxuXHRcdCfmm4YnLFxuXHRdLFxuXG5cdCfmrbQnOiBbXG5cdFx0J+WOhicsXG5cdF0sXG5cdCfmrbcnOiBbXG5cdFx0J+WOhicsXG5cdF0sXG5cdCfmmqYnOiBbXG5cdFx0J+WOhicsXG5cdF0sXG5cdCfmm4YnOiBbXG5cdFx0J+WOhicsXG5cdF0sXG5cblx0J+WRuyc6IFtcblx0XHQn5ZG7Jyxcblx0XHQn55SzJyxcblx0XSxcblxuXHQn6KaGJzogW1xuXHRcdCfopoYnLFxuXHRcdCflpI0nLFxuXHRdLFxuXG5cdCfli4knOiBbXG5cdFx0J+WFjScsXG5cdF0sXG5cblx0J++osyc6IFtcblx0XHQn5YWNJyxcblx0XSxcblxuXHQn55SmJzogW1xuXHRcdCfnlKYnLFxuXHRcdCfomIcnLFxuXHRcdCfoi48nLFxuXHRdLFxuXG5cdCflv6cnOiBbXG5cdFx0J+aGgicsXG5cdFx0J+WEqicsXG5cdF0sXG5cblx0J+m5uSc6IFtcblx0XHQn5ZK4Jyxcblx0XHQn6bm5Jyxcblx0XSxcblxuXHQn5YeGJzogW1xuXHRcdCfmupYnLFxuXHRcdCflh4YnLFxuXHRdLFxuXG5cdCfmupYnOiBbXG5cdFx0J+a6licsXG5cdFx0J+WHhicsXG5cdF0sXG5cblx0J+iiric6IFtcblx0XHQn6KKuJyxcblx0XHQvLyDkuKbpnZ7nlbDpq5TlrZcg5L2G55Sx5pa86YGO5bqm55u45Ly8IOWuueaYk+mMr+iqpFxuXHRcdCfnpaInLFxuXHRdLFxuXG5cdCflhJgnOiBbXG5cdFx0J+WEmCcsXG5cdFx0J+S+rScsXG5cdF0sXG5cblx0J+S+rSc6IFtcblx0XHQn5YSYJyxcblx0XHQn5L6tJyxcblx0XSxcblxuXHQn6ISPJzogW1xuXHRcdCfohI8nLFxuXHRcdCfpq5InLFxuXHRcdCfoh58nLFxuXHRdLFxuXG5cdCflj5EnOiBbXG5cdFx0J+mrricsXG5cdFx0J+mrqicsXG5cdFx0J+WPkScsXG5cdF0sXG5cblx0J+mrric6IFtcblx0XHQn55m8Jyxcblx0XHQn5Y+RJyxcblx0XSxcblxuXHQn5oW+JzogW1xuXHRcdCfmhb4nLFxuXHRcdCfmrLInLFxuXHRdLFxuXG5cdCforponOiBbXG5cdFx0J+iugycsXG5cdFx0J+iumicsXG5cdFx0J+i0iicsXG5cdFx0J+i1nicsXG5cdFx0J+izmycsXG5cdF0sXG5cblx0J+WGsic6IFtcblx0XHQn5YayJyxcblx0XHQn5rKWJyxcblx0XHQn6KGdJyxcblx0XSxcblxuXHQn6Z2iJzogW1xuXHRcdCfpurUnLFxuXHRcdCfpuqonLFxuXHRcdCfpuronLFxuXHRdLFxuXG5cdCfprJonOiBbXG5cdFx0J+msmicsXG5cdFx0J+mgiCcsXG5cdFx0J+mhuycsXG5cdF0sXG5cblx0J+aPuSc6IFtcblx0XHQn5o+5Jyxcblx0XHQn6IOMJyxcblx0XSxcblxuXHQn5o2yJzogW1xuXHRcdCfmjbInLFxuXHRcdCfljbcnLFxuXHRcdCflt7snLFxuXHRdLFxuXG5cdCfljbcnOiBbXG5cdFx0J+aNsicsXG5cdFx0J+WNtycsXG5cdFx0J+W3uycsXG5cdFx0J+WKtScsXG5cdFx0J+WIuCcsXG5cdF0sXG5cblx0J+W3uyc6IFtcblx0XHQn5o2yJyxcblx0XHQn5Y23Jyxcblx0XHQn5be7Jyxcblx0XHQn5Yq1Jyxcblx0XHQn5Yi4Jyxcblx0XSxcblxuXHQn6IuPJzogW1xuXHRcdCfoi48nLFxuXHRcdCfomIcnLFxuXHRcdCfnlKYnLFxuXHRdLFxuXG5cdCfngI8nOiBbXG5cdFx0J+eAjycsXG5cdFx0J+a1jycsXG5cdFx0J+WImCcsXG5cdF0sXG5cdCfmtY8nOiBbXG5cdFx0J+eAjycsXG5cdFx0J+a1jycsXG5cdFx0J+WImCcsXG5cdF0sXG5cblx0J+WQgSc6IFtcblx0XHQn57GyJyxcblx0XHQvLyfpvqUnLFxuXHRcdCflkIEnLFxuXHRdLFxuXG5cdCflm4knOiBbXG5cdFx0J+WbiScsXG5cdFx0J+WVsCcsXG5cdFx0J+e9lycsXG5cdFx0J+e+hScsXG5cdF0sXG5cblx0J+WVsCc6IFtcblx0XHQn5ZuJJyxcblx0XHQn5ZWwJyxcblx0XHQn572XJyxcblx0XHQn576FJyxcblx0XSxcblxuXHQn5L+uJzogW1xuXHRcdCfkv64nLFxuXHRcdCfkv6InLFxuXHRdLFxuXG5cdCfnip8nOiBbXG5cdFx0J+eKnycsXG5cdFx0J+W8tycsXG5cdFx0J+W8uicsXG5cdF0sXG5cblx0J+WXrCc6IFtcblx0XHQn5ZesJyxcblx0XHQn5ZG1Jyxcblx0XSxcblxuXHQn5ZS/JzogW1xuXHRcdCfllL8nLFxuXHRcdCflkbwnLFxuXHRdLFxuXG5cdCflqq4nOiBbXG5cdFx0J+WqricsXG5cdFx0J+WBtycsXG5cdF0sXG5cblx0J+mHhyc6IFtcblx0XHQn6YeHJyxcblx0XHQn5o6hJyxcblx0XHQvLyfln7AnLFxuXHRdLFxuXG5cdCflvaknOiBbXG5cdFx0J+W9qScsXG5cdFx0J+mHhycsXG5cdF0sXG5cblx0J/CgqbonOiBbXG5cdFx0J/CgqbonLFxuXHRcdCfph5AnLFxuXHRdLFxuXG5cdC8qXG5cdCfnlJonOiBbXG5cdFx0J+eUmicsXG5cdFx0J+S7gCcsXG5cdF0sXG5cdCovXG5cblx0J+aBtic6IFtcblx0XHQn5oG2Jyxcblx0XHQn5ZmBJyxcblx0XHQn5oOhJyxcblx0XSxcblxuXHQn54KwJzogW1xuXHRcdCfngrAnLFxuXHRcdCfngq4nLFxuXHRdLFxuXG5cdCfovp8nOiBbXG5cdFx0J+i+nycsXG5cdFx0J+mXoicsXG5cdFx0J+mBvycsXG5cdF0sXG5cblx0J+mBvyc6IFtcblx0XHQn6L6fJyxcblx0XHQn6YG/Jyxcblx0XSxcblxuXHQn6ZeiJzogW1xuXHRcdCfovp8nLFxuXHRcdCfpl6InLFxuXHRdLFxuXG5cdCfmu7cnOiBbXG5cdFx0J+mtrycsXG5cdFx0J+mygScsXG5cdF0sXG5cblx0J+m5tSc6IFtcblx0XHQn6a2vJyxcblx0XHQn6bKBJyxcblx0XSxcblxuXHQn5Y2kJzogW1xuXHRcdCfpra8nLFxuXHRcdCfpsoEnLFxuXHRdLFxuXG5cdCflhJMnOiBbXG5cdFx0J+WEkycsXG5cdFx0J+aqrycsXG5cdF0sXG5cblx0J+aqryc6IFtcblx0XHQn5YSTJyxcblx0XHQn5qqvJyxcblx0XSxcblxuXHQn5Y+wJzogW1xuXHRcdCflj7AnLFxuXHRcdCfmqq8nLFxuXHRcdCfoh7onLFxuXHRcdCfporEnLFxuXHRdLFxuXG5cdCfnt7QnOiBbXG5cdFx0J+eCvCcsXG5cdF0sXG5cblx0J+e7gyc6IFtcblx0XHQn54K8Jyxcblx0XSxcblxuXHQn57mrJzogW1xuXHRcdCfns7snLFxuXHRdLFxuXG5cdCfnuYsnOiBbXG5cdFx0J+ezuycsXG5cdF0sXG5cblx0J+ezkyc6IFtcblx0XHQn6LC3Jyxcblx0XSxcblxuXHQn56mAJzogW1xuXHRcdCfosLcnLFxuXHRdLFxuXG5cdCfniYgnOiBbXG5cdFx0J+advycsXG5cdF0sXG5cbn0gYXMgY29uc3Q7XG5cbi8qKlxuICog5q2k6KGo5YWn56ym5ZCI5Lul5LiL5Lu75oSP5YC85pmC5pyD6Ke455m8XG4gKi9cbmxldCB0YWJsZV9wbHVzX2NvcmUgPSB7XG5cdCflio0nOiBbXG5cdFx0J+WKjScsXG5cdFx0J+WJkScsXG5cdFx0J+WJoycsXG5cdFx0J+WKjicsXG5cdFx0J+WKkicsXG5cdFx0J+WJsScsXG5cdFx0J+WKlCcsXG5cdF0sXG5cdCfnoLInOiBbXG5cdFx0J+egsicsXG5cdFx0J+eCricsXG5cdF0sXG5cdCflgb0nOiBbXG5cdFx0J+WBvScsXG5cdFx0J+WDnicsXG5cdF0sXG5cdCflhacnOiBbXG5cdFx0J+WFpycsXG5cdFx0J+WGhScsXG5cdF0sXG5cdCfprKUnOiBbXG5cdFx0J+msrScsXG5cdFx0J+mspScsXG5cdFx0J+mXmCcsXG5cdFx0J+msqicsXG5cdFx0Ly8n5paXJyxcblx0XSxcblx0J+m2jyc6IFtcblx0XHQn6baPJyxcblx0XHQn6beEJyxcblx0XHQn6ZueJyxcblx0XHQn6bihJyxcblx0XSxcblx0J+WFjic6IFtcblx0XHQn5YWOJyxcblx0XHQn5YWUJyxcblx0XSxcblx0J+Wdjyc6IFtcblx0XHQn5Z2vJyxcblx0XHQn5Z2PJyxcblx0XHRcIuWjilwiLFxuXHRcdFwi5aOeXCIsXG5cdF0sXG5cdCfmrrsnOiBbXG5cdFx0J+auuycsXG5cdFx0J+auvCcsXG5cdFx0J+WjsycsXG5cdF0sXG5cdCflg48nOiBbXG5cdFx0J+WDjycsXG5cdFx0J+ixoScsXG5cdF0sXG5cdCfomIcnOiBbXG5cdFx0J+iLjycsXG5cdFx0J+iYhycsXG5cdFx0J+WbjCcsXG5cdF0sXG5cdCfppKgnOiBbXG5cdFx0J+mkqCcsXG5cdFx0J++orCcsXG5cdFx0J+iImCcsXG5cdFx0J+mmhicsXG5cdF0sXG5cdCfps6UnOiBbXG5cdFx0J+mzpScsXG5cdFx0J+m4nycsXG5cdFx0J/CroJMnLFxuXHRdLFxuXHQn6KaWJzogW1xuXHRcdCfoppYnLFxuXHRcdCfvqaEnLFxuXHRcdCfop4YnLFxuXHRcdCfnnI4nLFxuXHRdLFxuXHQn6Zm6JzogW1xuXHRcdCfpmbonLFxuXHRcdCfpmqonLFxuXHRcdCfpmaknLFxuXHRcdCfltq4nLFxuXHRcdCfltIQnLFxuXHRdLFxuXHQn57W2JzogW1xuXHRcdCfntbYnLFxuXHRcdCfntZUnLFxuXHRcdCfnu50nLFxuXHRdLFxuXHQn6YmEJzogW1xuXHRcdCfpiYQnLFxuXHRcdCfpkLUnLFxuXHRcdCfpk4EnLFxuXHRcdCfpkKEnLFxuXHRdLFxuXHQn6Ku4JzogW1xuXHRcdCfoq7gnLFxuXHRcdCfvqKInLFxuXHRcdCfor7gnLFxuXHRdLFxuXHQn5bCLJzogW1xuXHRcdCflsIsnLFxuXHRcdCflr7snLFxuXHRcdCfwoay2Jyxcblx0XSxcblx0J+ijoSc6IFtcblx0XHQn6KOhJyxcblx0XHQn6KOPJyxcblx0XHQn6YeMJyxcblx0XSxcblx0J+mRkSc6IFtcblx0XHQn6ZGRJyxcblx0XHQn6Ym0Jyxcblx0XHQn6ZGSJyxcblx0XSxcblx0J+m6tSc6IFtcblx0XHQn6bq1Jyxcblx0XHQn6bqqJyxcblx0XHQn6bq6Jyxcblx0XSxcblx0J+atsic6IFtcblx0XHQn5q2yJyxcblx0XHQn5q2zJyxcblx0XHQn5bKBJyxcblx0XSxcblx0Ly8gaHR0cHM6Ly96aC53aWtpcGVkaWEub3JnL3dpa2kvJUU5JThEJUJFJUU1JUE3JTkzXG5cdCfpkJgnOiBbXG5cdFx0J+mQmCcsXG5cdFx0J+mNvicsXG5cdFx0J+mSnycsXG5cdFx0J+mUuicsXG5cdF0sXG5cdCfmnIMnOiBbXG5cdFx0J+acgycsXG5cdFx0J+S8micsXG5cdFx0J+ORuScsXG5cdF0sXG5cdCfloZcnOiBbXG5cdFx0J+WhlycsXG5cdFx0J+WHgycsXG5cdFx0J+a2gicsXG5cdF0sXG5cblx0J+mrric6IFtcblx0XHQn6auuJyxcblx0XHQn6auqJyxcblx0XHQvLyflj5EnLFxuXHRdLFxuXG5cdCfoqbEnOiBbXG5cdFx0J+ipsScsXG5cdFx0J+ivnScsXG5cdFx0J+SboScsXG5cdF0sXG5cblx0J+mWpCc6IFtcblx0XHQn6ZakJyxcblx0XHQn6ZiBJyxcblx0XSxcblxuXHQn6JSYJzogW1xuXHRcdCfolJgnLFxuXHRcdCflj4MnLFxuXHRcdCflj4InLFxuXHRdLFxuXG5cdCflirQnOiBbXG5cdFx0J+WKtCcsXG5cdFx0J+WLnicsXG5cdFx0J+WKsycsXG5cdF0sXG5cblx0J+WbvSc6IFtcblx0XHQn5Zu9Jyxcblx0XHQn5ZuvJyxcblx0XHQn5ZyLJyxcblx0XSxcblxuXHQn5721JzogW1xuXHRcdCfnvbUnLFxuXHRcdCfpqoInLFxuXHRcdCfpp6EnLFxuXHRdLFxuXG5cdCflr74nOiBbXG5cdFx0J+WvvicsXG5cdFx0J+WwjScsXG5cdFx0J+WvuScsXG5cdF0sXG5cblx0J+mPvSc6IFtcblx0XHQn6Y+9Jyxcblx0XHQn6Yq5Jyxcblx0XHQn6ZSIJyxcblx0XSxcblxuXHQn6aeEJzogW1xuXHRcdCfpp4QnLFxuXHRcdCfkrb4nLFxuXHRcdCfpprEnLFxuXHRcdCfpqa4nLFxuXHRdLFxuXG5cdCfolqknOiBbXG5cdFx0J+iWqScsXG5cdFx0J+iQqCcsXG5cdFx0J+iVrycsXG5cdF0sXG5cblx0J+WNmCc6IFtcblx0XHQn5Y2YJyxcblx0XHQn5ZauJyxcblx0XHQn5Y2VJyxcblx0XSxcblxuXHQn57aZJzogW1xuXHRcdCfntpknLFxuXHRcdCfnubwnLFxuXHRcdCfnu6cnLFxuXHRdLFxuXG5cdCfpqZcnOiBbXG5cdFx0J+mplycsXG5cdFx0J+mqjCcsXG5cdFx0J+mokCcsXG5cblx0XHQn6aiTJyxcblx0XSxcblxuXHQn5q20JzogW1xuXHRcdCfmrbQnLFxuXHRcdCfmrbcnLFxuXHRcdC8vJ+aapicsXG5cdFx0Ly8n5puGJyxcblx0XSxcblxuXHQn5pqmJzogW1xuXHRcdC8vJ+attCcsXG5cdFx0Ly8n5q23Jyxcblx0XHQn5pqmJyxcblx0XHQn5puGJyxcblx0XSxcblxuXHQn5ZujJzogW1xuXHRcdCflm6InLFxuXHRcdCflm6MnLFxuXHRcdCflnJgnLFxuXHRdLFxuXG5cdCfpurwnOiBbXG5cdFx0J+m6vCcsXG5cdFx0J+m6vScsXG5cdFx0J+W6hScsXG5cdF0sXG5cblx0J+aIsCc6IFtcblx0XHQn5oimJyxcblx0XHQn5oiwJyxcblx0XHQn5oiYJyxcblx0XSxcblxuXHQn5LmhJzogW1xuXHRcdCfpg7cnLFxuXHRcdCfphJUnLFxuXHRcdCfphIknLFxuXHRcdCfphIonLFxuXHRcdCfkuaEnLFxuXHRdLFxuXG5cdCfli4knOiBbXG5cdFx0J+WLiScsXG5cdFx0J++osycsXG5cdF0sXG5cblx0J+mkmCc6IFtcblx0XHQn6aSYJyxcblx0XHQn6aaAJyxcblx0XHQn5L2ZJyxcblx0XSxcblxuXHQn57ayJzogW1xuXHRcdCfntrInLFxuXHRcdCfki4QnLFxuXHRcdCfki54nLFxuXHRcdCfnvZEnLFxuXHRdLFxuXG5cdCfoqJcnOiBbXG5cdFx0J+iolycsXG5cdFx0J+iurCcsXG5cdFx0J+S+gicsXG5cdFx0J+aJmCcsXG5cdF0sXG5cblx0J+e6lic6IFtcblx0XHQn57qWJyxcblx0XHQn57qkJyxcblx0XHQn57i0Jyxcblx0XHQn57mKJyxcblx0XSxcblxuXHQn6Y2KJzogW1xuXHRcdCfpjYonLFxuXHRcdCfpjKwnLFxuXHRcdCfwq5SAJyxcblxuXHRcdCfngrwnLFxuXHRcdCfnhYknLFxuXHRdLFxuXG5cdCfmk4onOiBbXG5cdFx0J+aSgycsXG5cdFx0J+aTiicsXG5cdFx0J+WHuycsXG5cdF0sXG5cblx0J+Wvpic6IFtcblx0XHQn5a+mJyxcblx0XHQn5a6fJyxcblx0XHQn5a6eJyxcblx0XHQn5a+UJyxcblx0XSxcblxuXHQn5pa8JzogW1xuXHRcdCfmlrwnLFxuXHRcdCfmibUnLFxuXHRdLFxuXG5cdCforYknOiBbXG5cdFx0J+itiScsXG5cdFx0J+iovCcsXG5cdFx0J+ivgScsXG5cdF0sXG5cblx0J+aTmic6IFtcblx0XHQn5pOaJyxcblx0XHQn5o2uJyxcblx0XHQn5ougJyxcblx0XSxcblxuXHQn6JmVJzogW1xuXHRcdCfomZUnLFxuXHRcdCflpIQnLFxuXHRcdCfklo8nLFxuXHRcdCflh6YnLFxuXHRdLFxuXG5cdCfnnqonOiBbXG5cdFx0J+eeqicsXG5cdFx0J+eeoCcsXG5cdFx0J+ecmScsXG5cdF0sXG5cblx0J+iCoic6IFtcblx0XHQn6IKiJyxcblx0XHQn6IORJyxcblx0XSxcblxuXHQn6IKJJzogW1xuXHRcdCfogoknLFxuXHRcdCflro0nLFxuXHRcdCfwoJWOJyxcblx0XSxcblxuXHQn5oaCJzogW1xuXHRcdCfmhoInLFxuXHRcdCfwop2KJyxcblx0XHQn8KKapycsXG5cdFx0J/Cin5wnLFxuXHRcdCfmh64nLFxuXHRcdCfwqJerJyxcblx0XSxcblxuXHQn57mrJzogW1xuXHRcdCfnuasnLFxuXHRcdC8vJ+ezuycsXG5cdFx0J+e5iycsXG5cdF0sXG5cblx0J+W7uyc6IFtcblx0XHQn5bu7Jyxcblx0XHQn6L+0Jyxcblx0XSxcblxuXHQn6YyyJzogW1xuXHRcdCfpjLInLFxuXHRcdCfpjIQnLFxuXHRcdCflvZUnLFxuXHRdLFxuXG5cdCfpjpcnOiBbXG5cdFx0J+mOlycsXG5cdFx0J+anjScsXG5cdFx0J+aeqicsXG5cdF0sXG5cblx0J+aCoCc6IFtcblx0XHQn5oKgJyxcblx0XHQn5ru6Jyxcblx0XSxcblxuXHQn5aO2JzogW1xuXHRcdCflo7YnLFxuXHRcdCflo7onLFxuXHRcdCflo7cnLFxuXHRdLFxuXG5cdCfojLInOiBbXG5cdFx0J+iMsicsXG5cdFx0J+WFuScsXG5cdFx0J+eOhicsXG5cdF0sXG5cblx0J+iTiyc6IFtcblx0XHQn6JOLJyxcblx0XHQn55uWJyxcblx0XHQn6JGiJyxcblx0XSxcblxuXHQn6LmfJzogW1xuXHRcdCfouZ8nLFxuXHRcdCfot6EnLFxuXHRcdCfov7knLFxuXHRdLFxuXG5cdCfnmZInOiBbXG5cdFx0J+eZkicsXG5cdFx0J+eYiScsXG5cdF0sXG5cblx0J+i+uic6IFtcblx0XHQn6L66Jyxcblx0XHQn6YKKJyxcblx0XHQn6L65Jyxcblx0XHQn6YKJJyxcblx0XSxcblxuXHQn5rqWJzogW1xuXHRcdCfmupYnLFxuXHRcdCflh5YnLFxuXHRdLFxuXG5cdCfooZsnOiBbXG5cdFx0J+ihmycsXG5cdFx0J+ihnicsXG5cdFx0J+WNqycsXG5cdF0sXG5cblx0J+aZmic6IFtcblx0XHQn5pmaJyxcblx0XHQn5pmpJyxcblx0XSxcblxuXHQn6KO4JzogW1xuXHRcdCfoo7gnLFxuXHRcdCfourYnLFxuXHRdLFxuXG5cdCfkuoAnOiBbXG5cdFx0J+S6gCcsXG5cdFx0J+m+nCcsXG5cdFx0J+m+nycsXG5cdFx0J/CqmqcnLFxuXHRcdCfwqpq/Jyxcblx0XHQn8KCDvicsXG5cdF0sXG5cblx0J+WHvCc6IFtcblx0XHQn5Ye8Jyxcblx0XHQn5rC5Jyxcblx0XSxcblxuXHQn6Im4JzogW1xuXHRcdCfoibgnLFxuXHRcdCfojYknLFxuXHRdLFxuXG5cdCfmnK0nOiBbXG5cdFx0J+eumicsXG5cdFx0J+WJsycsXG5cdF0sXG5cblx0J+WkjSc6IFtcblx0XHQn5aSNJyxcblx0XHQn5b6pJyxcblx0XHQn6KSHJyxcblx0XSxcblxuXHQn5rGhJzogW1xuXHRcdCfmsaEnLFxuXHRcdCfmsZknLFxuXHRcdCfmsZonLFxuXHRdLFxuXG5cdCfkvJknOiBbXG5cdFx0J+S8mScsXG5cdFx0J+WkpScsXG5cdF0sXG5cblx0J+W+oSc6IFtcblx0XHQn5b6hJyxcblx0XHQn56amJyxcblx0XSxcblxuXHQn6ayxJzogW1xuXHRcdCfprLEnLFxuXHRcdCfpg4EnLFxuXHRdLFxuXG5cdCfmt6knOiBbXG5cdFx0J+a3qScsXG5cdFx0J+WHjCcsXG5cdF0sXG5cblx0J+e0ric6IFtcblx0XHQn57SuJyxcblx0XHQn5omOJyxcblx0XSxcblxuXHQn55e0JzogW1xuXHRcdCfnl7QnLFxuXHRcdCfnmaEnLFxuXHRdLFxuXG5cdCfmoJYnOiBbXG5cdFx0J+aglicsXG5cdFx0J+ajsicsXG5cdF0sXG5cblx0J+eKhyc6IFtcblx0XHQn54qHJyxcblx0XHQn5aWUJyxcblx0XSxcblxuXHQn56+EJzogW1xuXHRcdCfnr4QnLFxuXHRcdCfojIMnLFxuXHRdLFxuXG5cdCfolpEnOiBbXG5cdFx0J+iWkScsXG5cdFx0J+WnnCcsXG5cdFx0J+iRgScsXG5cdF0sXG5cblx0J+aouCc6IFtcblx0XHQn5qi4Jyxcblx0XHQn5py0Jyxcblx0XSxcblxuXHQn6KuuJzogW1xuXHRcdCfoq64nLFxuXHRcdCfosJgnLFxuXHRcdCflkqgnLFxuXHRdLFxuXG5cdCfmkponOiBbXG5cdFx0J+aSmicsXG5cdFx0J+aNuycsXG5cdF0sXG5cblx0J+WWgic6IFtcblx0XHQn5ZaCJyxcblx0XHQn6aS1Jyxcblx0XHQn6aSnJyxcblx0XHQn8KuXrScsXG5cdF0sXG5cblx0J+a3qCc6IFtcblx0XHQn5reoJyxcblx0XHQn5YeIJyxcblx0XHQn5YeAJyxcblx0XSxcblxuXHQn5qCXJzogW1xuXHRcdCfmoJcnLFxuXHRcdCfmhYQnLFxuXHRdLFxuXG5cdCfmjL0nOiBbXG5cdFx0J+aMvScsXG5cdFx0J+i8kycsXG5cdF0sXG5cblx0J+eBtic6IFtcblx0XHQn54G2Jyxcblx0XHQn56uIJyxcblx0XSxcblxuXHQn57eaJzogW1xuXHRcdCfnt5onLFxuXHRcdCfnvJAnLFxuXHRcdCfntqsnLFxuXHRcdCfnur8nLFxuXHRdLFxuXG5cdCfnm6EnOiBbXG5cdFx0J+eboScsXG5cdFx0J+WwvScsXG5cdFx0J+WEmCcsXG5cdF0sXG5cblx0J+m7tCc6IFtcblx0XHQn6bu0Jyxcblx0XHQn6ZyJJyxcblx0XSxcblxuXHQn5ZGoJzogW1xuXHRcdCflkagnLFxuXHRcdCfpgLEnLFxuXHRdLFxuXG5cdCfkuKYnOiBbXG5cdFx0J+S4picsXG5cdFx0J+W5ticsXG5cdFx0J+S9tScsXG5cdF0sXG5cblx0J+iumic6IFtcblx0XHQn6K6aJyxcblx0XHQn6K6DJyxcblx0XSxcblxuXHQn6KazJzogW1xuXHRcdCfoprMnLFxuXHRcdCfop4AnLFxuXHRcdCfop4InLFxuXHRcdCfopownLFxuXHRdLFxuXG5cdCfpgYonOiBbXG5cdFx0J+mBiicsXG5cdFx0J+a4uCcsXG5cdF0sXG5cblx0J+WQryc6IFtcblx0XHQn5ZCvJyxcblx0XHQn5ZWTJyxcblx0XHQn5ZWfJyxcblx0XHQn5ZWUJyxcblx0XSxcblxuXHQn5buEJzogW1xuXHRcdCflu4QnLFxuXHRcdCfljqknLFxuXHRcdCflu5AnLFxuXHRcdCflu48nLFxuXHRdLFxuXG5cdCfmsKMnOiBbXG5cdFx0J+awlycsXG5cdFx0J+awoycsXG5cdFx0J+awlCcsXG5cdF0sXG5cblx0J+assic6IFtcblx0XHQn5oW+Jyxcblx0XHQn5qyyJyxcblx0XSxcblxuXHQn5YKRJzogW1xuXHRcdCflgpEnLFxuXHRcdCfmnbAnLFxuXHRdLFxuXG5cdCfpjZsnOiBbXG5cdFx0J+mNmycsXG5cdFx0J+mUuycsXG5cdFx0J+eFhScsXG5cdF0sXG5cblx0J+W+tSc6IFtcblx0XHQn5b61Jyxcblx0XHQn5b60Jyxcblx0XSxcblxuXHQn6ZaSJzogW1xuXHRcdCfplpInLFxuXHRcdCfwq5SuJyxcblx0XHQn6ZaRJyxcblx0XHQn6ZeyJyxcblx0XSxcblxuXHQn6LSKJzogW1xuXHRcdCfotIonLFxuXHRcdCfotZ4nLFxuXHRcdCfos5snLFxuXHRdLFxuXG5cdCfmq7snOiBbXG5cdFx0J+aruycsXG5cdFx0J+ahnCcsXG5cdFx0J+aosScsXG5cdF0sXG5cblx0J+WwqCc6IFtcblx0XHQn5bCoJyxcblx0XHQn54u1Jyxcblx0XSxcblxuXHQn5ZyIJzogW1xuXHRcdCflnIgnLFxuXHRcdCflnI8nLFxuXHRdLFxuXG5cdCflh7YnOiBbXG5cdFx0J+WHticsXG5cdFx0J+WFhycsXG5cdF0sXG5cblx0J+a1nCc6IFtcblx0XHQn5rWcJyxcblx0XHQn5r+xJyxcblx0XHQn5ruoJyxcblx0XSxcblxuXHQn54WZJzogW1xuXHRcdCfnhZknLFxuXHRcdCfng58nLFxuXHRcdCfoj7gnLFxuXHRdLFxuXG5cdCfpu5InOiBbXG5cdFx0J+m7kicsXG5cdFx0J+m7kScsXG5cdF0sXG5cblx0J+aogic6IFtcblx0XHQn5qiCJyxcblx0XHQn5LmQJyxcblx0XHQn5qW9Jyxcblx0XSxcblxuXHQn6JasJzogW1xuXHRcdCfolqwnLFxuXHRcdCfol6UnLFxuXHRcdCfoja8nLFxuXHRcdCfoka8nLFxuXHRcdCfwo5uZJyxcblx0XSxcblxuXHQn5Yq1JzogW1xuXHRcdCflirUnLFxuXHRcdCfliLgnLFxuXHRcdCfljbcnLFxuXHRdLFxuXG5cdCfosrMnOiBbXG5cdFx0J+iysycsXG5cdFx0J+i0sCcsXG5cdFx0J+W8kCcsXG5cdFx0J+iyricsXG5cdFx0J/CijpAnLFxuXHRcdCfkuownLFxuXHRdLFxuXG5cdCfpmrcnOiBbXG5cdFx0J+matycsXG5cdFx0J+mauCcsXG5cdFx0J+maticsXG5cdF0sXG5cblx0J+Wnqyc6IFtcblx0XHQn5aerJyxcblx0XHQn5aesJyxcblx0XSxcblxuXHQn54e7JzogW1xuXHRcdCfnh7snLFxuXHRcdCfnho8nLFxuXHRdLFxuXG5cdCfnsbInOiBbXG5cdFx0J+exsicsXG5cdFx0J+m+pScsXG5cdF0sXG5cblx0J+m9pyc6IFtcblx0XHQn6b2nJyxcblx0XHQn5ZWuJyxcblx0XHQn8KqYgicsXG5cdFx0J+WbkycsXG5cdFx0J+WZmycsXG5cdFx0J+WamScsXG5cdF0sXG5cblx0J+m5vCc6IFtcblx0XHQn6bm8Jyxcblx0XHQn56KxJyxcblx0XHQn56G3Jyxcblx0XSxcblxuXHQn5ZK4JzogW1xuXHRcdCflkrgnLFxuXHRcdCfpubknLFxuXHRdLFxuXG5cdCfnqZcnOiBbXG5cdFx0J+eplycsXG5cdFx0J+epgicsXG5cdF0sXG5cblx0J+W7oic6IFtcblx0XHQn5buiJyxcblx0XHQn5buDJyxcblx0XHQn5bqfJyxcblx0XSxcblxuXHQn6LmgJzogW1xuXHRcdCfouaAnLFxuXHRcdCfot5YnLFxuXHRdLFxuXG5cdCflkJInOiBbXG5cdFx0J+WQkicsXG5cdFx0J+WSpCcsXG5cdF0sXG5cblx0J+WJtyc6IFtcblx0XHQn5Ym3Jyxcblx0XHQn6Y+fJyxcblx0XHQn6ZOyJyxcblx0XHQn5YisJyxcblx0XHQn5YmXJyxcblx0XSxcblxuXHQn5pOXJzogW1xuXHRcdCfmk5cnLFxuXHRcdCfliognLFxuXHRdLFxuXG5cdCfmoLgnOiBbXG5cdFx0J+aguCcsXG5cdFx0J+imiCcsXG5cdF0sXG5cblx0J+iEoyc6IFtcblx0XHQn6ISjJyxcblx0XHQn5ZSHJyxcblx0XHQn5ZSHJyxcblx0XSxcblxuXHQn5Y2HJzogW1xuXHRcdCfljYcnLFxuXHRcdCfmmIcnLFxuXHRdLFxuXG5cdCfno5AnOiBbXG5cdFx0J+ejkCcsXG5cdFx0J+ebpCcsXG5cdFx0J+ebmCcsXG5cdF0sXG5cblx0J+a6qic6IFtcblx0XHQn5rqqJyxcblx0XHQn5riTJyxcblx0XSxcblxuXHQn6LC/JzogW1xuXHRcdCfosL8nLFxuXHRcdCfltaAnLFxuXHRdLFxuXG5cdCfmipgnOiBbXG5cdFx0J+aKmCcsXG5cdFx0J+aRuicsXG5cdF0sXG5cblx0J+elkCc6IFtcblx0XHQn56WQJyxcblx0XHQn5L2RJyxcblx0XSxcblxuXHQn55OuJzogW1xuXHRcdCfnk64nLFxuXHRcdCfnvYsnLFxuXHRcdCfnlJUnLFxuXHRdLFxuXG5cdCfouaQnOiBbXG5cdFx0J+i5pCcsXG5cdFx0J+i4qicsXG5cdFx0J+i4qCcsXG5cdF0sXG5cblx0J+aalyc6IFtcblx0XHQn6ZeHJyxcblx0XHQn5pqXJyxcblx0XSxcblxuXHQn5pi1JzogW1xuXHRcdCfmmLUnLFxuXHRcdCfmmrEnLFxuXHRdLFxuXG5cdCfluIMnOiBbXG5cdFx0J+W4gycsXG5cdFx0J+S9iCcsXG5cdF0sXG5cblx0J+eCuic6IFtcblx0XHQn54K6Jyxcblx0XHQn5Li6Jyxcblx0XHQn54iyJyxcblx0XSxcblxuXHQn57azJzogW1xuXHRcdCfntrMnLFxuXHRcdCfnuYMnLFxuXHRcdCfnu7cnLFxuXHRdLFxuXG5cdCfnl7onOiBbXG5cdFx0J+eXuicsXG5cdFx0J+eXuScsXG5cdF0sXG5cblx0J+eXsic6IFtcblx0XHQn55eyJyxcblx0XHQn55ezJyxcblx0XSxcblxuXHQn6ZuHJzogW1xuXHRcdCfpm4cnLFxuXHRcdCflg7EnLFxuXHRdLFxuXG5cdCfmlZgnOiBbXG5cdFx0J+aVmCcsXG5cdFx0J+WPmScsXG5cdFx0J+aVjScsXG5cdF0sXG5cblx0J+ebqic6IFtcblx0XHQn55uqJyxcblx0XHQn6JWpJyxcblx0XHQn6I2hJyxcblx0XSxcblxuXHQn5YubJzogW1xuXHRcdCfli5snLFxuXHRcdCfli7MnLFxuXHRcdCfli4snLFxuXHRdLFxuXG5cdCfnpZUnOiBbXG5cdFx0J+ellScsXG5cdFx0J+enmCcsXG5cdF0sXG5cblx0J+eJhic6IFtcblx0XHQn54mGJyxcblx0XHQn5aKZJyxcblx0XHQn5aK7Jyxcblx0XSxcblxuXHQn54i+JzogW1xuXHRcdCfniL4nLFxuXHRcdCflsJQnLFxuXHRcdCflsJMnLFxuXHRdLFxuXG5cdCfnhLAnOiBbXG5cdFx0J+eEsCcsXG5cdFx0J+eElCcsXG5cdF0sXG5cblx0J+m7mCc6IFtcblx0XHQn6buYJyxcblx0XHQn6buZJyxcblx0XSxcblxuXHQn5aOTJzogW1xuXHRcdCflo5MnLFxuXHRcdCfljosnLFxuXHRcdCflnKcnLFxuXHRdLFxuXG5cdCflu7gnOiBbXG5cdFx0J+W7uCcsXG5cdFx0J+i/qicsXG5cdF0sXG5cblx0J+abiSc6IFtcblx0XHQn5puJJyxcblx0XHQn5pmTJyxcblx0XHQn5pqBJyxcblx0XSxcblxuXHQn6Zy4JzogW1xuXHRcdCfpnLgnLFxuXHRcdCfopocnLFxuXHRdLFxuXG5cdCfpnIonOiBbXG5cdFx0J+mciicsXG5cdFx0J+mdiCcsXG5cdFx0J+eBtScsXG5cdF0sXG5cblx0J+azqic6IFtcblx0XHQn5rOqJyxcblx0XHQn5raZJyxcblx0XHQn5reaJyxcblx0XSxcblxuXHQn54m6JzogW1xuXHRcdCfnibonLFxuXHRcdCfniqAnLFxuXHRcdCfniqcnLFxuXHRdLFxuXG5cdCfol4knOiBbXG5cdFx0J+iXiScsXG5cdFx0J+iApCcsXG5cdF0sXG5cblx0J+WZuCc6IFtcblx0XHQn5Zm4Jyxcblx0XHQn5ZCoJyxcblx0XSxcblxuXHQn5L+xJzogW1xuXHRcdCfkv7EnLFxuXHRcdCflgLYnLFxuXHRdLFxuXG5cdCfnsr0nOiBbXG5cdFx0J+eyvScsXG5cdFx0J+eziScsXG5cdFx0J+ezrScsXG5cdF0sXG5cblx0J+WQkSc6IFtcblx0XHQn5ZCRJyxcblx0XHQn5puPJyxcblx0XHQn5ZquJyxcblx0XSxcblxuXHQn5oK9JzogW1xuXHRcdCfmgr0nLFxuXHRcdCfmt5InLFxuXHRcdCflh4QnLFxuXHRdLFxuXG5cdCfpsbcnOiBbXG5cdFx0J+mxtycsXG5cdFx0J+mwkCcsXG5cdFx0J+mzhCcsXG5cdF0sXG5cblx0J+a7tyc6IFtcblx0XHQn5ru3Jyxcblx0XHQn6bm1Jyxcblx0XHQn5Y2kJyxcblx0XSxcblxuXHQn6aKcJzogW1xuXHRcdCfpopwnLFxuXHRcdCfpoY8nLFxuXHRcdCfpoZQnLFxuXHRdLFxuXG5cdCfooZ0nOiBbXG5cdFx0J+ihnScsXG5cdFx0J+aylicsXG5cdFx0J+WGsicsXG5cdF0sXG5cblx0J+aokSc6IFtcblx0XHQn5qiRJyxcblx0XHQn5qKBJyxcblx0XSxcblxuXHQn56CCJzogW1xuXHRcdCfnoIInLFxuXHRcdCfmspknLFxuXHRdLFxuXG5cdCfngq0nOiBbXG5cdFx0J+eCrScsXG5cdFx0J+eisycsXG5cdF0sXG5cblx0J+ezuCc6IFtcblx0XHQn57O4Jyxcblx0XHQn57WyJyxcblx0XHQn5LidJyxcblx0XSxcblxuXHQn57C3JzogW1xuXHRcdCfnsLcnLFxuXHRcdCfmqpAnLFxuXHRdLFxuXG5cdCfmtownOiBbXG5cdFx0J+a2jCcsXG5cdFx0J+a5pycsXG5cdF0sXG5cblx0J+ezkyc6IFtcblx0XHQn56mAJyxcblx0XHQn57OTJyxcblx0XSxcblxuXHQn5LihJzogW1xuXHRcdCfkuKEnLFxuXHRcdCfkuKQnLFxuXHRcdCflhaknLFxuXHRdLFxuXG5cdCflrrYnOiBbXG5cdFx0J+WuticsXG5cdFx0J+WCoicsXG5cdF0sXG5cblx0J+Wmsyc6IFtcblx0XHQn5aazJyxcblx0XHQn5L2gJyxcblx0XSxcblxuXHQn5aW5JzogW1xuXHRcdCflpbknLFxuXHRcdCfku5YnLFxuXHRdLFxuXG5cdCfol6QnOiBbXG5cdFx0J+iXpCcsXG5cdFx0J+exkCcsXG5cdFx0J+exmCcsXG5cdF0sXG5cbn0gYXMgY29uc3Q7XG5cbi8qKlxuICog5q2k6KGo5YWn56ym5ZCI5Lul5LiL5Lu75oSP5YC85pmC5pyD6Ke455m8XG4gKi9cbmV4cG9ydCBjb25zdCB0YWJsZV9wbHVzID0gX2J1aWxkVGFibGVQbHVzKHRhYmxlX3BsdXNfY29yZSk7XG5cbi8qKlxuICog5q2k6KGo5YWn5Y+q5pyJ56ym5ZCIIEtFWSDlgLzmmYLmiY3mnIPop7jnmbxcbiAqL1xuZXhwb3J0IGNvbnN0IHRhYmxlX2pwID0gX21lcmdlVGFibGUodGFibGVfanBfY29yZSwgdGFibGVfcGx1cyk7XG5cbl91bmlxdWVUYWJsZSh0YWJsZV9qcCk7XG5cbnR5cGUgSUFycmF5T3JSZWFkb25seTxVPiA9IFVbXSB8IHJlYWRvbmx5IFVbXTtcblxuZXhwb3J0IGZ1bmN0aW9uIF91bmlxdWVUYWJsZTxUIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgSUFycmF5T3JSZWFkb25seTxzdHJpbmc+Pj4odGFibGVfanA6IFQpXG57XG5cdE9iamVjdC5rZXlzKHRhYmxlX2pwKVxuXHRcdC5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpXG5cdFx0e1xuXHRcdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdFx0dGFibGVfanBba2V5XSA9IGFycmF5X3VuaXF1ZSh0YWJsZV9qcFtrZXldKTtcblx0XHR9KVxuXHQ7XG5cblx0cmV0dXJuIHRhYmxlX2pwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX2J1aWxkVGFibGVQbHVzPFQgZXh0ZW5kcyBzdHJpbmcsIFUgZXh0ZW5kcyBzdHJpbmc+KHRhYmxlX3BsdXM6IFJlY29yZDxULCBJQXJyYXlPclJlYWRvbmx5PFU+Pik6IFJlY29yZDxVIHwgVCwgc3RyaW5nW10+XG57XG5cdE9iamVjdC5rZXlzKHRhYmxlX3BsdXMpXG5cdFx0LmZvckVhY2goZnVuY3Rpb24gKGtleSlcblx0XHR7XG5cdFx0XHR0YWJsZV9wbHVzW2tleV0gPSBhcnJheV91bmlxdWUodGFibGVfcGx1c1trZXldKTtcblxuXHRcdFx0dGFibGVfcGx1c1trZXldLmZvckVhY2goZnVuY3Rpb24gKHMpXG5cdFx0XHR7XG5cdFx0XHRcdHRhYmxlX3BsdXNbc10gPSB0YWJsZV9wbHVzW2tleV07XG5cdFx0XHR9KVxuXHRcdH0pXG5cdDtcblxuXHQvLyBAdHMtaWdub3JlXG5cdHJldHVybiB0YWJsZV9wbHVzXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfbWVyZ2VUYWJsZTxUIGV4dGVuZHMgc3RyaW5nLCBVIGV4dGVuZHMgc3RyaW5nPih0YWJsZV9qcDogUmVjb3JkPFQsIElBcnJheU9yUmVhZG9ubHk8c3RyaW5nPj4sIHRhYmxlX3BsdXM6IFJlY29yZDxVLCBJQXJyYXlPclJlYWRvbmx5PHN0cmluZz4+KTogUmVjb3JkPFUgfCBULCBzdHJpbmdbXT5cbntcblx0Ly8gQHRzLWlnbm9yZVxuXHRyZXR1cm4gZGVlcG1lcmdlKHRhYmxlX2pwLCB0YWJsZV9wbHVzKTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJU2ltcGxlVGFibGVcbntcblx0W2tleTogc3RyaW5nXTogc3RyaW5nLFxufVxuXG5leHBvcnQgbGV0IF90YWJsZV9jbjogSVNpbXBsZVRhYmxlID0gX3VwZGF0ZSh7fSwgX3RhYmxlX3R3KTtcblxuZXhwb3J0IGZ1bmN0aW9uIF91cGRhdGUodGFyZ2V0OiBJU2ltcGxlVGFibGUsIHNvdXJjZTogSVNpbXBsZVRhYmxlKTogSVNpbXBsZVRhYmxlXG57XG5cdHRhcmdldCA9IE9iamVjdC5rZXlzKHNvdXJjZSlcblx0XHQucmVkdWNlKGZ1bmN0aW9uIChhLCBiKVxuXHRcdHtcblx0XHRcdGFbc291cmNlW2JdXSA9IGI7XG5cblx0XHRcdHJldHVybiBhO1xuXHRcdH0sIHt9KVxuXHQ7XG5cblx0cmV0dXJuIHRhcmdldDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9nZXQoYXJyOiBzdHJpbmdbXSwgdmFsdWU6IHN0cmluZyB8IHN0cmluZ1tdLCAuLi52YWx1ZXM6IEFycmF5PHN0cmluZyB8IHN0cmluZ1tdPik6IHN0cmluZ1tdXG57XG5cdGxldCByZXQ6IHN0cmluZ1tdID0gW11cblx0XHQuY29uY2F0KHZhbHVlKVxuXHRcdC5jb25jYXQoLi4udmFsdWVzKVxuXHRcdC5maWx0ZXIoZnVuY3Rpb24gKHYpXG5cdFx0e1xuXHRcdFx0cmV0dXJuIHY7XG5cdFx0fSlcblx0O1xuXG5cdC8vcmV0Lmxlbmd0aCAmJiByZXQuc29ydCgpO1xuXG5cdHJldHVybiByZXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBqcChjaGFyOiBzdHJpbmcsIG9wdGlvbnM6IElPcHRpb25zID0ge30pOiBzdHJpbmdbXVxue1xuXHRsZXQgYTogc3RyaW5nW10gPSBbXTtcblx0YSA9IF9nZXQoYSwgdGFibGVfanBbY2hhcl0pO1xuXG5cdHJldHVybiBhO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHcoY2hhcjogc3RyaW5nLCBvcHRpb25zOiBJT3B0aW9ucyA9IHt9KTogc3RyaW5nW11cbntcblx0bGV0IGE6IHN0cmluZ1tdID0gW107XG5cblx0YSA9IF9nZXQoYSwgX3RhYmxlX3R3W2NoYXJdLCBjbjJ0dyhjaGFyLCBvcHRpb25zKSk7XG5cblx0Ly9jb25zb2xlLmxvZygnY24ydHcnLCBjaGFyLCBhKTtcblxuXHRyZXR1cm4gYTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNuKGNoYXI6IHN0cmluZywgb3B0aW9uczogSU9wdGlvbnMgPSB7fSk6IHN0cmluZ1tdXG57XG5cdGxldCBhOiBzdHJpbmdbXSA9IFtdO1xuXG5cdGEgPSBfZ2V0KGEsIF90YWJsZV9jbltjaGFyXSwgdHcyY24oY2hhciwgb3B0aW9ucykpO1xuXG5cdC8vY29uc29sZS5sb2coJ3R3MmNuJywgY2hhciwgYSk7XG5cblx0cmV0dXJuIGE7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGV4cG9ydHMgYXMgdHlwZW9mIGltcG9ydCgnLi90YWJsZScpO1xuIl19
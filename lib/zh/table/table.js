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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YWJsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7O0dBRUc7O0FBR0gsNENBQStDO0FBQy9DLHFDQUEwQztBQUMxQyw0Q0FBNkM7QUFFbEMsUUFBQSxTQUFTLEdBQUc7SUFDdEIsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7Q0FDUixDQUFDO0FBRUY7O0dBRUc7QUFDUSxRQUFBLFFBQVEsR0FBRztJQUNyQixHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO0tBQ0g7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gscUJBQXFCO1FBQ3JCLEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILE1BQU07UUFDTixHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUVIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELElBQUksRUFBRTtRQUNMLElBQUk7UUFDSixHQUFHO0tBQ0g7SUFFRDs7Ozs7TUFLRTtJQUVGLEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7S0FDSDtDQUVELENBQUM7QUFFRjs7R0FFRztBQUNRLFFBQUEsVUFBVSxHQUFHO0lBQ3ZCLEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FFSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsSUFBSTtLQUNKO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILElBQUk7S0FDSjtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBQ0QsbURBQW1EO0lBQ25ELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUVIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBRUgsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FHSDtJQUVELEdBQUcsRUFBRTtRQUNKLE1BQU07UUFDTixNQUFNO1FBQ04sR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILElBQUk7UUFFSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsSUFBSTtLQUNKO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILElBQUk7UUFDSixJQUFJO1FBQ0osSUFBSTtRQUNKLEdBQUc7UUFDSCxJQUFJO0tBQ0o7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsTUFBTTtRQUNOLEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsSUFBSTtRQUNKLElBQUk7UUFDSixJQUFJO0tBQ0o7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsSUFBSTtLQUNKO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsSUFBSTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsSUFBSTtRQUNKLEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxJQUFJO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gs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Q0FBQztJQUVyQixDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsRUFBRSxpQkFBUyxDQUFDLElBQUksQ0FBQyxFQUFFLGFBQUssQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUVuRCxnQ0FBZ0M7SUFFaEMsT0FBTyxDQUFDLENBQUM7QUFDVixDQUFDO0FBVEQsZ0JBU0M7QUFFRCxTQUFnQixFQUFFLENBQUMsSUFBWSxFQUFFLFVBQW9CLEVBQUU7SUFFdEQsSUFBSSxDQUFDLEdBQWEsRUFBRSxDQUFDO0lBRXJCLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxFQUFFLGlCQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsYUFBSyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBRW5ELGdDQUFnQztJQUVoQyxPQUFPLENBQUMsQ0FBQztBQUNWLENBQUM7QUFURCxnQkFTQztBQUVELGtCQUFlLE9BQW1DLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgdXNlciBvbiAyMDE4LzIvMTcvMDE3LlxuICovXG5cbmltcG9ydCB7IElPcHRpb25zIH0gZnJvbSAnLi4vY29udmVydC9jb3JlJztcbmltcG9ydCB7IHR3MmNuLCBjbjJ0d30gZnJvbSAnLi4vY29udmVydC9pbmRleCc7XG5pbXBvcnQgeyBhcnJheV91bmlxdWUgfSBmcm9tICcuLi8uLi91dGlsJztcbmltcG9ydCBkZWVwbWVyZ2UgPSByZXF1aXJlKCdkZWVwbWVyZ2UtcGx1cycpO1xuXG5leHBvcnQgbGV0IF90YWJsZV90dyA9IHtcblx0J+e9lyc6ICfnvoUnLFxuXHQn5oG2JzogJ+aDoScsXG5cdCfoi48nOiAn6JiHJyxcblx0J+mmhic6ICfppKgnLFxufTtcblxuLyoqXG4gKiDmraTooajlhaflj6rmnInnrKblkIggS0VZIOWAvOaZguaJjeacg+inuOeZvFxuICovXG5leHBvcnQgbGV0IHRhYmxlX2pwID0ge1xuXHQn44GuJzogW1xuXHRcdCfjga4nLFxuXHRcdCfkuYsnLFxuXHRcdCfnmoQnLFxuXHRdLFxuXG5cdCfjgagnOiBbXG5cdFx0J+OBqCcsXG5cdFx0J+iIhycsXG5cdFx0J+S4jicsXG5cdF0sXG5cblx0J+eUuyc6IFtcblx0XHQn5YiSJyxcblx0XHQn55S7Jyxcblx0XHQn5YqDJyxcblx0XHQn55WrJyxcblx0XSxcblx0J+mXmCc6IFtcblx0XHQn5paXJyxcblx0XSxcblx0J+mspSc6IFtcblx0XHQn5paXJyxcblx0XSxcblx0J+msrSc6IFtcblx0XHQn5paXJyxcblx0XSxcblx0J+msqic6IFtcblx0XHQn5paXJyxcblx0XSxcblx0J+mXhyc6IFtcblx0XHQn5pqXJyxcblx0XSxcblx0J+Wbsyc6IFtcblx0XHQn5ZuzJyxcblx0XHQn5ZyWJyxcblx0XHQn5Zu+Jyxcblx0XSxcblx0J+W9kyc6IFtcblx0XHQn5b2TJyxcblx0XHQn5Zm5Jyxcblx0XHQn55W2Jyxcblx0XHQn5YSFJyxcblx0XSxcblxuXHQn6ZakJzogW1xuXHRcdCflkIgnLFxuXHRdLFxuXHQn6ZiBJzogW1xuXHRcdCflkIgnLFxuXHRdLFxuXG5cdCfnvZcnOiBbXG5cdFx0J+e+hScsXG5cdFx0J+e9lycsXG5cdFx0J+WEuCcsXG5cdFx0J+ORqScsXG5cdFx0J+WbiScsXG5cdFx0J+WVsCcsXG5cdF0sXG5cblx0J+W5sic6IFtcblx0XHQn5bm5Jyxcblx0XHQn5Lm+Jyxcblx0XHQn5bmyJyxcblx0XSxcblxuXHQn5bm5JzogW1xuXHRcdCflubknLFxuXHRcdCflubInLFxuXHRdLFxuXG5cdCfkub4nOiBbXG5cdFx0J+W5sicsXG5cdFx0J+S5vicsXG5cdFx0J+S6gScsXG5cdFx0J+S5uScsXG5cdF0sXG5cdCfkuoEnOiBbXG5cdFx0J+S5vicsXG5cdFx0J+S6gScsXG5cdFx0J+S5uScsXG5cdF0sXG5cdCfkubknOiBbXG5cdFx0J+S5vicsXG5cdFx0J+S6gScsXG5cdFx0J+S5uScsXG5cdF0sXG5cblx0J+WOhic6IFtcblx0XHQn5Y6GJyxcblx0XHQn5q20Jyxcblx0XHQn5q23Jyxcblx0XHQn5pqmJyxcblx0XHQn5puGJyxcblx0XSxcblxuXHQn5q20JzogW1xuXHRcdCfljoYnLFxuXHRdLFxuXHQn5q23JzogW1xuXHRcdCfljoYnLFxuXHRdLFxuXHQn5pqmJzogW1xuXHRcdCfljoYnLFxuXHRdLFxuXHQn5puGJzogW1xuXHRcdCfljoYnLFxuXHRdLFxuXG5cdCflkbsnOiBbXG5cdFx0J+WRuycsXG5cdFx0J+eUsycsXG5cdF0sXG5cblx0J+imhic6IFtcblx0XHQn6KaGJyxcblx0XHQn5aSNJyxcblx0XSxcblxuXHQn5YuJJzogW1xuXHRcdCflhY0nLFxuXHRdLFxuXG5cdCfvqLMnOiBbXG5cdFx0J+WFjScsXG5cdF0sXG5cblx0J+eUpic6IFtcblx0XHQn55SmJyxcblx0XHQn6JiHJyxcblx0XHQn6IuPJyxcblx0XSxcblxuXHQn5b+nJzogW1xuXHRcdCfmhoInLFxuXHRcdCflhKonLFxuXHRdLFxuXG5cdCfpubknOiBbXG5cdFx0J+WSuCcsXG5cdFx0J+m5uScsXG5cdF0sXG5cblx0J+WHhic6IFtcblx0XHQn5rqWJyxcblx0XHQn5YeGJyxcblx0XSxcblxuXHQn5rqWJzogW1xuXHRcdCfmupYnLFxuXHRcdCflh4YnLFxuXHRdLFxuXG5cdCfooq4nOiBbXG5cdFx0J+iiricsXG5cdFx0Ly8g5Lim6Z2e55Ww6auU5a2XIOS9hueUseaWvOmBjuW6puebuOS8vCDlrrnmmJPpjK/oqqRcblx0XHQn56WiJyxcblx0XSxcblxuXHQn5YSYJzogW1xuXHRcdCflhJgnLFxuXHRcdCfkvq0nLFxuXHRdLFxuXG5cdCfkvq0nOiBbXG5cdFx0J+WEmCcsXG5cdFx0J+S+rScsXG5cdF0sXG5cblx0J+iEjyc6IFtcblx0XHQn6ISPJyxcblx0XHQn6auSJyxcblx0XHQn6IefJyxcblx0XSxcblxuXHQn5Y+RJzogW1xuXHRcdCfpq64nLFxuXHRcdCfpq6onLFxuXHRcdCflj5EnLFxuXHRdLFxuXG5cdCfpq64nOiBbXG5cdFx0J+eZvCcsXG5cdFx0J+WPkScsXG5cdF0sXG5cblx0J+aFvic6IFtcblx0XHQn5oW+Jyxcblx0XHQn5qyyJyxcblx0XSxcblxuXHQn6K6aJzogW1xuXHRcdCforoMnLFxuXHRcdCforponLFxuXHRcdCfotIonLFxuXHRcdCfotZ4nLFxuXHRcdCfos5snLFxuXHRdLFxuXG5cdCflhrInOiBbXG5cdFx0J+WGsicsXG5cdFx0J+aylicsXG5cdFx0J+ihnScsXG5cdF0sXG5cblx0J+mdoic6IFtcblx0XHQn6bq1Jyxcblx0XHQn6bqqJyxcblx0XHQn6bq6Jyxcblx0XSxcblxuXHQn6ayaJzogW1xuXHRcdCfprJonLFxuXHRcdCfpoIgnLFxuXHRcdCfpobsnLFxuXHRdLFxuXG5cdCfmj7knOiBbXG5cdFx0J+aPuScsXG5cdFx0J+iDjCcsXG5cdF0sXG5cblx0J+aNsic6IFtcblx0XHQn5o2yJyxcblx0XHQn5Y23Jyxcblx0XHQn5be7Jyxcblx0XSxcblxuXHQn5Y23JzogW1xuXHRcdCfmjbInLFxuXHRcdCfljbcnLFxuXHRcdCflt7snLFxuXHRcdCflirUnLFxuXHRcdCfliLgnLFxuXHRdLFxuXG5cdCflt7snOiBbXG5cdFx0J+aNsicsXG5cdFx0J+WNtycsXG5cdFx0J+W3uycsXG5cdFx0J+WKtScsXG5cdFx0J+WIuCcsXG5cdF0sXG5cblx0J+iLjyc6IFtcblx0XHQn6IuPJyxcblx0XHQn6JiHJyxcblx0XHQn55SmJyxcblx0XSxcblxuXHQn54CPJzogW1xuXHRcdCfngI8nLFxuXHRcdCfmtY8nLFxuXHRcdCfliJgnLFxuXHRdLFxuXHQn5rWPJzogW1xuXHRcdCfngI8nLFxuXHRcdCfmtY8nLFxuXHRcdCfliJgnLFxuXHRdLFxuXG5cdCflkIEnOiBbXG5cdFx0J+exsicsXG5cdFx0Ly8n6b6lJyxcblx0XHQn5ZCBJyxcblx0XSxcblxuXHQn5ZuJJzogW1xuXHRcdCflm4knLFxuXHRcdCfllbAnLFxuXHRcdCfnvZcnLFxuXHRcdCfnvoUnLFxuXHRdLFxuXG5cdCfllbAnOiBbXG5cdFx0J+WbiScsXG5cdFx0J+WVsCcsXG5cdFx0J+e9lycsXG5cdFx0J+e+hScsXG5cdF0sXG5cblx0J+S/ric6IFtcblx0XHQn5L+uJyxcblx0XHQn5L+iJyxcblx0XSxcblxuXHQn54qfJzogW1xuXHRcdCfnip8nLFxuXHRcdCflvLcnLFxuXHRcdCflvLonLFxuXHRdLFxuXG5cdCfll6wnOiBbXG5cdFx0J+WXrCcsXG5cdFx0J+WRtScsXG5cdF0sXG5cblx0J+WUvyc6IFtcblx0XHQn5ZS/Jyxcblx0XHQn5ZG8Jyxcblx0XSxcblxuXHQn5aquJzogW1xuXHRcdCflqq4nLFxuXHRcdCflgbcnLFxuXHRdLFxuXG5cdCfph4cnOiBbXG5cdFx0J+mHhycsXG5cdFx0J+aOoScsXG5cdFx0Ly8n5Z+wJyxcblx0XSxcblxuXHQn5b2pJzogW1xuXHRcdCflvaknLFxuXHRcdCfph4cnLFxuXHRdLFxuXG5cdCfwoKm6JzogW1xuXHRcdCfwoKm6Jyxcblx0XHQn6YeQJyxcblx0XSxcblxuXHQvKlxuXHQn55SaJzogW1xuXHRcdCfnlJonLFxuXHRcdCfku4AnLFxuXHRdLFxuXHQqL1xuXG5cdCfmgbYnOiBbXG5cdFx0J+aBticsXG5cdFx0J+WZgScsXG5cdFx0J+aDoScsXG5cdF0sXG5cblx0J+eCsCc6IFtcblx0XHQn54KwJyxcblx0XHQn54KuJyxcblx0XSxcblxuXHQn6L6fJzogW1xuXHRcdCfovp8nLFxuXHRcdCfpl6InLFxuXHRcdCfpgb8nLFxuXHRdLFxuXG5cdCfpgb8nOiBbXG5cdFx0J+i+nycsXG5cdFx0J+mBvycsXG5cdF0sXG5cblx0J+mXoic6IFtcblx0XHQn6L6fJyxcblx0XHQn6ZeiJyxcblx0XSxcblxuXHQn5ru3JzogW1xuXHRcdCfpra8nLFxuXHRcdCfpsoEnLFxuXHRdLFxuXG5cdCfpubUnOiBbXG5cdFx0J+mtrycsXG5cdFx0J+mygScsXG5cdF0sXG5cblx0J+WNpCc6IFtcblx0XHQn6a2vJyxcblx0XHQn6bKBJyxcblx0XSxcblxuXHQn5YSTJzogW1xuXHRcdCflhJMnLFxuXHRcdCfmqq8nLFxuXHRdLFxuXG5cdCfmqq8nOiBbXG5cdFx0J+WEkycsXG5cdFx0J+aqrycsXG5cdF0sXG5cblx0J+WPsCc6IFtcblx0XHQn5Y+wJyxcblx0XHQn5qqvJyxcblx0XHQn6Ie6Jyxcblx0XHQn6aKxJyxcblx0XSxcblxuXHQn57e0JzogW1xuXHRcdCfngrwnLFxuXHRdLFxuXG5cdCfnu4MnOiBbXG5cdFx0J+eCvCcsXG5cdF0sXG5cblx0J+e5qyc6IFtcblx0XHQn57O7Jyxcblx0XSxcblxuXHQn57mLJzogW1xuXHRcdCfns7snLFxuXHRdLFxuXG5cdCfns5MnOiBbXG5cdFx0J+iwtycsXG5cdF0sXG5cblx0J+epgCc6IFtcblx0XHQn6LC3Jyxcblx0XSxcblxufTtcblxuLyoqXG4gKiDmraTooajlhafnrKblkIjku6XkuIvku7vmhI/lgLzmmYLmnIPop7jnmbxcbiAqL1xuZXhwb3J0IGxldCB0YWJsZV9wbHVzID0ge1xuXHQn5YqNJzogW1xuXHRcdCflio0nLFxuXHRcdCfliZEnLFxuXHRcdCfliaMnLFxuXHRcdCflio4nLFxuXHRcdCflipInLFxuXHRcdCflibEnLFxuXHRcdCflipQnLFxuXHRdLFxuXHQn56CyJzogW1xuXHRcdCfnoLInLFxuXHRcdCfngq4nLFxuXHRdLFxuXHQn5YG9JzogW1xuXHRcdCflgb0nLFxuXHRcdCflg54nLFxuXHRdLFxuXHQn5YWnJzogW1xuXHRcdCflhacnLFxuXHRcdCflhoUnLFxuXHRdLFxuXHQn6aylJzogW1xuXHRcdCfprK0nLFxuXHRcdCfprKUnLFxuXHRcdCfpl5gnLFxuXHRcdCfprKonLFxuXHRcdC8vJ+aWlycsXG5cdF0sXG5cdCfpto8nOiBbXG5cdFx0J+m2jycsXG5cdFx0J+m3hCcsXG5cdFx0J+mbnicsXG5cdFx0J+m4oScsXG5cdF0sXG5cdCflhY4nOiBbXG5cdFx0J+WFjicsXG5cdFx0J+WFlCcsXG5cdF0sXG5cdCflnY8nOiBbXG5cdFx0J+WdrycsXG5cdFx0J+WdjycsXG5cdFx0XCLlo4pcIixcblx0XHRcIuWjnlwiLFxuXHRdLFxuXHQn5q67JzogW1xuXHRcdCfmrrsnLFxuXHRcdCfmrrwnLFxuXHRcdCflo7MnLFxuXHRdLFxuXHQn5YOPJzogW1xuXHRcdCflg48nLFxuXHRcdCfosaEnLFxuXHRdLFxuXHQn6JiHJzogW1xuXHRcdCfoi48nLFxuXHRcdCfomIcnLFxuXHRcdCflm4wnLFxuXHRdLFxuXHQn6aSoJzogW1xuXHRcdCfppKgnLFxuXHRcdCfvqKwnLFxuXHRcdCfoiJgnLFxuXHRcdCfppoYnLFxuXHRdLFxuXHQn6bOlJzogW1xuXHRcdCfps6UnLFxuXHRcdCfpuJ8nLFxuXHRcdCfwq6CTJyxcblx0XSxcblx0J+imlic6IFtcblx0XHQn6KaWJyxcblx0XHQn76mhJyxcblx0XHQn6KeGJyxcblx0XHQn55yOJyxcblx0XSxcblx0J+mZuic6IFtcblx0XHQn6Zm6Jyxcblx0XHQn6ZqqJyxcblx0XHQn6ZmpJyxcblx0XHQn5bauJyxcblx0XHQn5bSEJyxcblx0XSxcblx0J+e1tic6IFtcblx0XHQn57W2Jyxcblx0XHQn57WVJyxcblx0XHQn57udJyxcblx0XSxcblx0J+mJhCc6IFtcblx0XHQn6YmEJyxcblx0XHQn6ZC1Jyxcblx0XHQn6ZOBJyxcblx0XHQn6ZChJyxcblx0XSxcblx0J+iruCc6IFtcblx0XHQn6Ku4Jyxcblx0XHQn76iiJyxcblx0XHQn6K+4Jyxcblx0XSxcblx0J+Wwiyc6IFtcblx0XHQn5bCLJyxcblx0XHQn5a+7Jyxcblx0XHQn8KGsticsXG5cdF0sXG5cdCfoo6EnOiBbXG5cdFx0J+ijoScsXG5cdFx0J+ijjycsXG5cdFx0J+mHjCcsXG5cdF0sXG5cdCfpkZEnOiBbXG5cdFx0J+mRkScsXG5cdFx0J+mJtCcsXG5cdFx0J+mRkicsXG5cdF0sXG5cdCfpurUnOiBbXG5cdFx0J+m6tScsXG5cdFx0J+m6qicsXG5cdFx0J+m6uicsXG5cdF0sXG5cdCfmrbInOiBbXG5cdFx0J+atsicsXG5cdFx0J+atsycsXG5cdFx0J+WygScsXG5cdF0sXG5cdC8vIGh0dHBzOi8vemgud2lraXBlZGlhLm9yZy93aWtpLyVFOSU4RCVCRSVFNSVBNyU5M1xuXHQn6ZCYJzogW1xuXHRcdCfpkJgnLFxuXHRcdCfpjb4nLFxuXHRcdCfpkp8nLFxuXHRcdCfplLonLFxuXHRdLFxuXHQn5pyDJzogW1xuXHRcdCfmnIMnLFxuXHRcdCfkvJonLFxuXHRcdCfjkbknLFxuXHRdLFxuXHQn5aGXJzogW1xuXHRcdCfloZcnLFxuXHRcdCflh4MnLFxuXHRcdCfmtoInLFxuXHRdLFxuXG5cdCfpq64nOiBbXG5cdFx0J+mrricsXG5cdFx0J+mrqicsXG5cdFx0Ly8n5Y+RJyxcblx0XSxcblxuXHQn6KmxJzogW1xuXHRcdCfoqbEnLFxuXHRcdCfor50nLFxuXHRcdCfkm6EnLFxuXHRdLFxuXG5cdCfplqQnOiBbXG5cdFx0J+mWpCcsXG5cdFx0J+mYgScsXG5cdF0sXG5cblx0J+iUmCc6IFtcblx0XHQn6JSYJyxcblx0XHQn5Y+DJyxcblx0XHQn5Y+CJyxcblx0XSxcblxuXHQn5Yq0JzogW1xuXHRcdCflirQnLFxuXHRcdCfli54nLFxuXHRcdCflirMnLFxuXHRdLFxuXG5cdCflm70nOiBbXG5cdFx0J+WbvScsXG5cdFx0J+WbrycsXG5cdFx0J+WciycsXG5cdF0sXG5cblx0J+e9tSc6IFtcblx0XHQn5721Jyxcblx0XHQn6aqCJyxcblx0XHQn6aehJyxcblx0XSxcblxuXHQn5a++JzogW1xuXHRcdCflr74nLFxuXHRcdCflsI0nLFxuXHRcdCflr7knLFxuXHRdLFxuXG5cdCfpj70nOiBbXG5cdFx0J+mPvScsXG5cdFx0J+mKuScsXG5cdFx0J+mUiCcsXG5cdF0sXG5cblx0J+mnhCc6IFtcblx0XHQn6aeEJyxcblx0XHQn5K2+Jyxcblx0XHQn6aaxJyxcblx0XHQn6amuJyxcblx0XSxcblxuXHQn6JapJzogW1xuXHRcdCfolqknLFxuXHRcdCfokKgnLFxuXHRcdCfola8nLFxuXHRdLFxuXG5cdCfljZgnOiBbXG5cdFx0J+WNmCcsXG5cdFx0J+WWricsXG5cdFx0J+WNlScsXG5cdF0sXG5cblx0J+e2mSc6IFtcblx0XHQn57aZJyxcblx0XHQn57m8Jyxcblx0XHQn57unJyxcblx0XSxcblxuXHQn6amXJzogW1xuXHRcdCfpqZcnLFxuXHRcdCfpqownLFxuXHRcdCfpqJAnLFxuXG5cdFx0J+mokycsXG5cdF0sXG5cblx0J+attCc6IFtcblx0XHQn5q20Jyxcblx0XHQn5q23Jyxcblx0XHQvLyfmmqYnLFxuXHRcdC8vJ+abhicsXG5cdF0sXG5cblx0J+aapic6IFtcblx0XHQvLyfmrbQnLFxuXHRcdC8vJ+attycsXG5cdFx0J+aapicsXG5cdFx0J+abhicsXG5cdF0sXG5cblx0J+Wboyc6IFtcblx0XHQn5ZuiJyxcblx0XHQn5ZujJyxcblx0XHQn5ZyYJyxcblx0XSxcblxuXHQn6bq8JzogW1xuXHRcdCfpurwnLFxuXHRcdCfpur0nLFxuXHRcdCfluoUnLFxuXHRdLFxuXG5cdCfmiLAnOiBbXG5cdFx0J+aIpicsXG5cdFx0J+aIsCcsXG5cdFx0J+aImCcsXG5cdF0sXG5cblx0J+S5oSc6IFtcblx0XHQn6YO3Jyxcblx0XHQn6YSVJyxcblx0XHQn6YSJJyxcblx0XHQn6YSKJyxcblx0XHQn5LmhJyxcblx0XSxcblxuXHQn5YuJJzogW1xuXHRcdCfli4knLFxuXHRcdCfvqLMnLFxuXHRdLFxuXG5cdCfppJgnOiBbXG5cdFx0J+mkmCcsXG5cdFx0J+mmgCcsXG5cdFx0J+S9mScsXG5cdF0sXG5cblx0J+e2sic6IFtcblx0XHQn57ayJyxcblx0XHQn5IuEJyxcblx0XHQn5IueJyxcblx0XHQn572RJyxcblx0XSxcblxuXHQn6KiXJzogW1xuXHRcdCfoqJcnLFxuXHRcdCforqwnLFxuXHRcdCfkvoInLFxuXHRcdCfmiZgnLFxuXHRdLFxuXG5cdCfnupYnOiBbXG5cdFx0J+e6licsXG5cdFx0J+e6pCcsXG5cdFx0J+e4tCcsXG5cdFx0J+e5iicsXG5cdF0sXG5cblx0J+mNiic6IFtcblx0XHQn6Y2KJyxcblx0XHQn6YysJyxcblx0XHQn8KuUgCcsXG5cblx0XHQn54K8Jyxcblx0XHQn54WJJyxcblx0XSxcblxuXHQn5pOKJzogW1xuXHRcdCfmkoMnLFxuXHRcdCfmk4onLFxuXHRcdCflh7snLFxuXHRdLFxuXG5cdCflr6YnOiBbXG5cdFx0J+WvpicsXG5cdFx0J+WunycsXG5cdFx0J+WunicsXG5cdFx0J+WvlCcsXG5cdF0sXG5cblx0J+aWvCc6IFtcblx0XHQn5pa8Jyxcblx0XHQn5om1Jyxcblx0XSxcblxuXHQn6K2JJzogW1xuXHRcdCforYknLFxuXHRcdCfoqLwnLFxuXHRcdCfor4EnLFxuXHRdLFxuXG5cdCfmk5onOiBbXG5cdFx0J+aTmicsXG5cdFx0J+aNricsXG5cdFx0J+aLoCcsXG5cdF0sXG5cblx0J+iZlSc6IFtcblx0XHQn6JmVJyxcblx0XHQn5aSEJyxcblx0XHQn5JaPJyxcblx0XHQn5YemJyxcblx0XSxcblxuXHQn556qJzogW1xuXHRcdCfnnqonLFxuXHRcdCfnnqAnLFxuXHRcdCfnnJknLFxuXHRdLFxuXG5cdCfogqInOiBbXG5cdFx0J+iCoicsXG5cdFx0J+iDkScsXG5cdF0sXG5cblx0J+iCiSc6IFtcblx0XHQn6IKJJyxcblx0XHQn5a6NJyxcblx0XHQn8KCVjicsXG5cdF0sXG5cblx0J+aGgic6IFtcblx0XHQn5oaCJyxcblx0XHQn8KKdiicsXG5cdFx0J/CimqcnLFxuXHRcdCfwop+cJyxcblx0XHQn5oeuJyxcblx0XHQn8KiXqycsXG5cdF0sXG5cblx0J+e5qyc6IFtcblx0XHQn57mrJyxcblx0XHQvLyfns7snLFxuXHRcdCfnuYsnLFxuXHRdLFxuXG5cdCflu7snOiBbXG5cdFx0J+W7uycsXG5cdFx0J+i/tCcsXG5cdF0sXG5cblx0J+mMsic6IFtcblx0XHQn6YyyJyxcblx0XHQn6YyEJyxcblx0XHQn5b2VJyxcblx0XSxcblxuXHQn6Y6XJzogW1xuXHRcdCfpjpcnLFxuXHRcdCfmp40nLFxuXHRcdCfmnqonLFxuXHRdLFxuXG5cdCfmgqAnOiBbXG5cdFx0J+aCoCcsXG5cdFx0J+a7uicsXG5cdF0sXG5cblx0J+Wjtic6IFtcblx0XHQn5aO2Jyxcblx0XHQn5aO6Jyxcblx0XHQn5aO3Jyxcblx0XSxcblxuXHQn6IyyJzogW1xuXHRcdCfojLInLFxuXHRcdCflhbknLFxuXHRcdCfnjoYnLFxuXHRdLFxuXG5cdCfok4snOiBbXG5cdFx0J+iTiycsXG5cdFx0J+eblicsXG5cdFx0J+iRoicsXG5cdF0sXG5cblx0J+i5nyc6IFtcblx0XHQn6LmfJyxcblx0XHQn6LehJyxcblx0XHQn6L+5Jyxcblx0XSxcblxuXHQn55mSJzogW1xuXHRcdCfnmZInLFxuXHRcdCfnmIknLFxuXHRdLFxuXG5cdCfovronOiBbXG5cdFx0J+i+uicsXG5cdFx0J+mCiicsXG5cdFx0J+i+uScsXG5cdFx0J+mCiScsXG5cdF0sXG5cblx0J+a6lic6IFtcblx0XHQn5rqWJyxcblx0XHQn5YeWJyxcblx0XSxcblxuXHQn6KGbJzogW1xuXHRcdCfooZsnLFxuXHRcdCfooZ4nLFxuXHRcdCfljasnLFxuXHRdLFxuXG5cdCfmmZonOiBbXG5cdFx0J+aZmicsXG5cdFx0J+aZqScsXG5cdF0sXG5cblx0J+ijuCc6IFtcblx0XHQn6KO4Jyxcblx0XHQn6Lq2Jyxcblx0XSxcblxuXHQn5LqAJzogW1xuXHRcdCfkuoAnLFxuXHRcdCfpvpwnLFxuXHRcdCfpvp8nLFxuXHRcdCfwqpqnJyxcblx0XHQn8KqavycsXG5cdFx0J/Cgg74nLFxuXHRdLFxuXG5cdCflh7wnOiBbXG5cdFx0J+WHvCcsXG5cdFx0J+awuScsXG5cdF0sXG5cblx0J+iJuCc6IFtcblx0XHQn6Im4Jyxcblx0XHQn6I2JJyxcblx0XSxcblxuXHQn5pytJzogW1xuXHRcdCfnrponLFxuXHRcdCflibMnLFxuXHRdLFxuXG5cdCflpI0nOiBbXG5cdFx0J+WkjScsXG5cdFx0J+W+qScsXG5cdFx0J+ikhycsXG5cdF0sXG5cblx0J+axoSc6IFtcblx0XHQn5rGhJyxcblx0XHQn5rGZJyxcblx0XHQn5rGaJyxcblx0XSxcblxuXHQn5LyZJzogW1xuXHRcdCfkvJknLFxuXHRcdCflpKUnLFxuXHRdLFxuXG5cdCflvqEnOiBbXG5cdFx0J+W+oScsXG5cdFx0J+empicsXG5cdF0sXG5cblx0J+mssSc6IFtcblx0XHQn6ayxJyxcblx0XHQn6YOBJyxcblx0XSxcblxuXHQn5repJzogW1xuXHRcdCfmt6knLFxuXHRcdCflh4wnLFxuXHRdLFxuXG5cdCfntK4nOiBbXG5cdFx0J+e0ricsXG5cdFx0J+aJjicsXG5cdF0sXG5cblx0J+eXtCc6IFtcblx0XHQn55e0Jyxcblx0XHQn55mhJyxcblx0XSxcblxuXHQn5qCWJzogW1xuXHRcdCfmoJYnLFxuXHRcdCfmo7InLFxuXHRdLFxuXG5cdCfniocnOiBbXG5cdFx0J+eKhycsXG5cdFx0J+WllCcsXG5cdF0sXG5cblx0J+evhCc6IFtcblx0XHQn56+EJyxcblx0XHQn6IyDJyxcblx0XSxcblxuXHQn6JaRJzogW1xuXHRcdCfolpEnLFxuXHRcdCflp5wnLFxuXHRcdCfokYEnLFxuXHRdLFxuXG5cdCfmqLgnOiBbXG5cdFx0J+aouCcsXG5cdFx0J+actCcsXG5cdF0sXG5cblx0J+irric6IFtcblx0XHQn6KuuJyxcblx0XHQn6LCYJyxcblx0XHQn5ZKoJyxcblx0XSxcblxuXHQn5pKaJzogW1xuXHRcdCfmkponLFxuXHRcdCfmjbsnLFxuXHRdLFxuXG5cdCflloInOiBbXG5cdFx0J+WWgicsXG5cdFx0J+mktScsXG5cdFx0J+mkpycsXG5cdFx0J/Crl60nLFxuXHRdLFxuXG5cdCfmt6gnOiBbXG5cdFx0J+a3qCcsXG5cdFx0J+WHiCcsXG5cdFx0J+WHgCcsXG5cdF0sXG5cblx0J+aglyc6IFtcblx0XHQn5qCXJyxcblx0XHQn5oWEJyxcblx0XSxcblxuXHQn5oy9JzogW1xuXHRcdCfmjL0nLFxuXHRcdCfovJMnLFxuXHRdLFxuXG5cdCfngbYnOiBbXG5cdFx0J+eBticsXG5cdFx0J+eriCcsXG5cdF0sXG5cblx0J+e3mic6IFtcblx0XHQn57eaJyxcblx0XHQn57yQJyxcblx0XHQn57arJyxcblx0XHQn57q/Jyxcblx0XSxcblxuXHQn55uhJzogW1xuXHRcdCfnm6EnLFxuXHRcdCflsL0nLFxuXHRcdCflhJgnLFxuXHRdLFxuXG5cdCfpu7QnOiBbXG5cdFx0J+m7tCcsXG5cdFx0J+mciScsXG5cdF0sXG5cblx0J+WRqCc6IFtcblx0XHQn5ZGoJyxcblx0XHQn6YCxJyxcblx0XSxcblxuXHQn5LimJzogW1xuXHRcdCfkuKYnLFxuXHRcdCflubYnLFxuXHRcdCfkvbUnLFxuXHRdLFxuXG5cdCforponOiBbXG5cdFx0J+iumicsXG5cdFx0J+iugycsXG5cdF0sXG5cblx0J+imsyc6IFtcblx0XHQn6KazJyxcblx0XHQn6KeAJyxcblx0XHQn6KeCJyxcblx0XHQn6KaMJyxcblx0XSxcblxuXHQn6YGKJzogW1xuXHRcdCfpgYonLFxuXHRcdCfmuLgnLFxuXHRdLFxuXG5cdCflkK8nOiBbXG5cdFx0J+WQrycsXG5cdFx0J+WVkycsXG5cdFx0J+WVnycsXG5cdFx0J+WVlCcsXG5cdF0sXG5cblx0J+W7hCc6IFtcblx0XHQn5buEJyxcblx0XHQn5Y6pJyxcblx0XHQn5buQJyxcblx0XHQn5buPJyxcblx0XSxcblxuXHQn5rCjJzogW1xuXHRcdCfmsJcnLFxuXHRcdCfmsKMnLFxuXHRcdCfmsJQnLFxuXHRdLFxuXG5cdCfmrLInOiBbXG5cdFx0J+aFvicsXG5cdFx0J+assicsXG5cdF0sXG5cblx0J+WCkSc6IFtcblx0XHQn5YKRJyxcblx0XHQn5p2wJyxcblx0XSxcblxuXHQn6Y2bJzogW1xuXHRcdCfpjZsnLFxuXHRcdCfplLsnLFxuXHRcdCfnhYUnLFxuXHRdLFxuXG5cdCflvrUnOiBbXG5cdFx0J+W+tScsXG5cdFx0J+W+tCcsXG5cdF0sXG5cblx0J+mWkic6IFtcblx0XHQn6ZaSJyxcblx0XHQn8KuUricsXG5cdFx0J+mWkScsXG5cdFx0J+mXsicsXG5cdF0sXG5cblx0J+i0iic6IFtcblx0XHQn6LSKJyxcblx0XHQn6LWeJyxcblx0XHQn6LObJyxcblx0XSxcblxuXHQn5qu7JzogW1xuXHRcdCfmq7snLFxuXHRcdCfmoZwnLFxuXHRcdCfmqLEnLFxuXHRdLFxuXG5cdCflsKgnOiBbXG5cdFx0J+WwqCcsXG5cdFx0J+eLtScsXG5cdF0sXG5cblx0J+WciCc6IFtcblx0XHQn5ZyIJyxcblx0XHQn5ZyPJyxcblx0XSxcblxuXHQn5Ye2JzogW1xuXHRcdCflh7YnLFxuXHRcdCflhYcnLFxuXHRdLFxuXG5cdCfmtZwnOiBbXG5cdFx0J+a1nCcsXG5cdFx0J+a/sScsXG5cdFx0J+a7qCcsXG5cdF0sXG5cblx0J+eFmSc6IFtcblx0XHQn54WZJyxcblx0XHQn54OfJyxcblx0XHQn6I+4Jyxcblx0XSxcblxuXHQn6buSJzogW1xuXHRcdCfpu5InLFxuXHRcdCfpu5EnLFxuXHRdLFxuXG5cdCfmqIInOiBbXG5cdFx0J+aogicsXG5cdFx0J+S5kCcsXG5cdFx0J+alvScsXG5cdF0sXG5cblx0J+iWrCc6IFtcblx0XHQn6JasJyxcblx0XHQn6JelJyxcblx0XHQn6I2vJyxcblx0XSxcblxuXHQn5Yq1JzogW1xuXHRcdCflirUnLFxuXHRcdCfliLgnLFxuXHRcdCfljbcnLFxuXHRdLFxuXG5cdCfosrMnOiBbXG5cdFx0J+iysycsXG5cdFx0J+i0sCcsXG5cdFx0J+W8kCcsXG5cdFx0J+iyricsXG5cdFx0J/CijpAnLFxuXHRcdCfkuownLFxuXHRdLFxuXG5cdCfpmrcnOiBbXG5cdFx0J+matycsXG5cdFx0J+mauCcsXG5cdFx0J+maticsXG5cdF0sXG5cblx0J+Wnqyc6IFtcblx0XHQn5aerJyxcblx0XHQn5aesJyxcblx0XSxcblxuXHQn54e7JzogW1xuXHRcdCfnh7snLFxuXHRcdCfnho8nLFxuXHRdLFxuXG5cdCfnsbInOiBbXG5cdFx0J+exsicsXG5cdFx0J+m+pScsXG5cdF0sXG5cblx0J+m9pyc6IFtcblx0XHQn6b2nJyxcblx0XHQn5ZWuJyxcblx0XHQn8KqYgicsXG5cdFx0J+WbkycsXG5cdFx0J+WZmycsXG5cdFx0J+WamScsXG5cdF0sXG5cblx0J+m5vCc6IFtcblx0XHQn6bm8Jyxcblx0XHQn56KxJyxcblx0XHQn56G3Jyxcblx0XSxcblxuXHQn5ZK4JzogW1xuXHRcdCflkrgnLFxuXHRcdCfpubknLFxuXHRdLFxuXG5cdCfnqZcnOiBbXG5cdFx0J+eplycsXG5cdFx0J+epgicsXG5cdF0sXG5cblx0J+W7oic6IFtcblx0XHQn5buiJyxcblx0XHQn5buDJyxcblx0XHQn5bqfJyxcblx0XSxcblxuXHQn6LmgJzogW1xuXHRcdCfouaAnLFxuXHRcdCfot5YnLFxuXHRdLFxuXG5cdCflkJInOiBbXG5cdFx0J+WQkicsXG5cdFx0J+WSpCcsXG5cdF0sXG5cblx0J+WJtyc6IFtcblx0XHQn5Ym3Jyxcblx0XHQn6Y+fJyxcblx0XHQn6ZOyJyxcblx0XHQn5YisJyxcblx0XHQn5YmXJyxcblx0XSxcblxuXHQn5pOXJzogW1xuXHRcdCfmk5cnLFxuXHRcdCfliognLFxuXHRdLFxuXG5cdCfmoLgnOiBbXG5cdFx0J+aguCcsXG5cdFx0J+imiCcsXG5cdF0sXG5cblx0J+iEoyc6IFtcblx0XHQn6ISjJyxcblx0XHQn5ZSHJyxcblx0XHQn5ZSHJyxcblx0XSxcblxuXHQn5Y2HJzogW1xuXHRcdCfljYcnLFxuXHRcdCfmmIcnLFxuXHRdLFxuXG5cdCfno5AnOiBbXG5cdFx0J+ejkCcsXG5cdFx0J+ebpCcsXG5cdFx0J+ebmCcsXG5cdF0sXG5cblx0J+a6qic6IFtcblx0XHQn5rqqJyxcblx0XHQn5riTJyxcblx0XSxcblxuXHQn6LC/JzogW1xuXHRcdCfosL8nLFxuXHRcdCfltaAnLFxuXHRdLFxuXG5cdCfmipgnOiBbXG5cdFx0J+aKmCcsXG5cdFx0J+aRuicsXG5cdF0sXG5cblx0J+elkCc6IFtcblx0XHQn56WQJyxcblx0XHQn5L2RJyxcblx0XSxcblxuXHQn55OuJzogW1xuXHRcdCfnk64nLFxuXHRcdCfnvYsnLFxuXHRcdCfnlJUnLFxuXHRdLFxuXG5cdCfouaQnOiBbXG5cdFx0J+i5pCcsXG5cdFx0J+i4qicsXG5cdFx0J+i4qCcsXG5cdF0sXG5cblx0J+aalyc6IFtcblx0XHQn6ZeHJyxcblx0XHQn5pqXJyxcblx0XSxcblxuXHQn5pi1JzogW1xuXHRcdCfmmLUnLFxuXHRcdCfmmrEnLFxuXHRdLFxuXG5cdCfluIMnOiBbXG5cdFx0J+W4gycsXG5cdFx0J+S9iCcsXG5cdF0sXG5cblx0J+eCuic6IFtcblx0XHQn54K6Jyxcblx0XHQn5Li6Jyxcblx0XHQn54iyJyxcblx0XSxcblxuXHQn57azJzogW1xuXHRcdCfntrMnLFxuXHRcdCfnuYMnLFxuXHRcdCfnu7cnLFxuXHRdLFxuXG5cdCfnl7onOiBbXG5cdFx0J+eXuicsXG5cdFx0J+eXuScsXG5cdF0sXG5cblx0J+eXsic6IFtcblx0XHQn55eyJyxcblx0XHQn55ezJyxcblx0XSxcblxuXHQn6ZuHJzogW1xuXHRcdCfpm4cnLFxuXHRcdCflg7EnLFxuXHRdLFxuXG5cdCfmlZgnOiBbXG5cdFx0J+aVmCcsXG5cdFx0J+WPmScsXG5cdFx0J+aVjScsXG5cdF0sXG5cblx0J+ebqic6IFtcblx0XHQn55uqJyxcblx0XHQn6JWpJyxcblx0XHQn6I2hJyxcblx0XSxcblxuXHQn5YubJzogW1xuXHRcdCfli5snLFxuXHRcdCfli7MnLFxuXHRcdCfli4snLFxuXHRdLFxuXG5cdCfnpZUnOiBbXG5cdFx0J+ellScsXG5cdFx0J+enmCcsXG5cdF0sXG5cblx0J+eJhic6IFtcblx0XHQn54mGJyxcblx0XHQn5aKZJyxcblx0XHQn5aK7Jyxcblx0XSxcblxuXHQn54i+JzogW1xuXHRcdCfniL4nLFxuXHRcdCflsJQnLFxuXHRcdCflsJMnLFxuXHRdLFxuXG5cdCfnhLAnOiBbXG5cdFx0J+eEsCcsXG5cdFx0J+eElCcsXG5cdF0sXG5cblx0J+m7mCc6IFtcblx0XHQn6buYJyxcblx0XHQn6buZJyxcblx0XSxcblxuXHQn5aOTJzogW1xuXHRcdCflo5MnLFxuXHRcdCfljosnLFxuXHRcdCflnKcnLFxuXHRdLFxuXG5cdCflu7gnOiBbXG5cdFx0J+W7uCcsXG5cdFx0J+i/qicsXG5cdF0sXG5cblx0J+abiSc6IFtcblx0XHQn5puJJyxcblx0XHQn5pmTJyxcblx0XHQn5pqBJyxcblx0XSxcblxuXHQn6Zy4JzogW1xuXHRcdCfpnLgnLFxuXHRcdCfopocnLFxuXHRdLFxuXG5cdCfpnIonOiBbXG5cdFx0J+mciicsXG5cdFx0J+mdiCcsXG5cdFx0J+eBtScsXG5cdF0sXG5cblx0J+azqic6IFtcblx0XHQn5rOqJyxcblx0XHQn5raZJyxcblx0XHQn5reaJyxcblx0XSxcblxuXHQn54m6JzogW1xuXHRcdCfnibonLFxuXHRcdCfniqAnLFxuXHRcdCfniqcnLFxuXHRdLFxuXG5cdCfol4knOiBbXG5cdFx0J+iXiScsXG5cdFx0J+iApCcsXG5cdF0sXG5cblx0J+WZuCc6IFtcblx0XHQn5Zm4Jyxcblx0XHQn5ZCoJyxcblx0XSxcblxuXHQn5L+xJzogW1xuXHRcdCfkv7EnLFxuXHRcdCflgLYnLFxuXHRdLFxuXG5cdCfnsr0nOiBbXG5cdFx0J+eyvScsXG5cdFx0J+eziScsXG5cdFx0J+ezrScsXG5cdF0sXG5cblx0J+WQkSc6IFtcblx0XHQn5ZCRJyxcblx0XHQn5puPJyxcblx0XHQn5ZquJyxcblx0XSxcblxuXHQn5oK9JzogW1xuXHRcdCfmgr0nLFxuXHRcdCfmt5InLFxuXHRcdCflh4QnLFxuXHRdLFxuXG5cdCfpsbcnOiBbXG5cdFx0J+mxtycsXG5cdFx0J+mwkCcsXG5cdFx0J+mzhCcsXG5cdF0sXG5cblx0J+a7tyc6IFtcblx0XHQn5ru3Jyxcblx0XHQn6bm1Jyxcblx0XHQn5Y2kJyxcblx0XSxcblxuXHQn6aKcJzogW1xuXHRcdCfpopwnLFxuXHRcdCfpoY8nLFxuXHRcdCfpoZQnLFxuXHRdLFxuXG5cdCfooZ0nOiBbXG5cdFx0J+ihnScsXG5cdFx0J+aylicsXG5cdFx0J+WGsicsXG5cdF0sXG5cblx0J+aokSc6IFtcblx0XHQn5qiRJyxcblx0XHQn5qKBJyxcblx0XSxcblxuXHQn56CCJzogW1xuXHRcdCfnoIInLFxuXHRcdCfmspknLFxuXHRdLFxuXG5cdCfngq0nOiBbXG5cdFx0J+eCrScsXG5cdFx0J+eisycsXG5cdF0sXG5cblx0J+ezuCc6IFtcblx0XHQn57O4Jyxcblx0XHQn57WyJyxcblx0XHQn5LidJyxcblx0XSxcblxuXHQn57C3JzogW1xuXHRcdCfnsLcnLFxuXHRcdCfmqpAnLFxuXHRdLFxuXG5cdCfmtownOiBbXG5cdFx0J+a2jCcsXG5cdFx0J+a5pycsXG5cdF0sXG5cblx0J+ezkyc6IFtcblx0XHQn56mAJyxcblx0XHQn57OTJyxcblx0XSxcblxufTtcblxuT2JqZWN0LmtleXModGFibGVfcGx1cylcblx0LmZvckVhY2goZnVuY3Rpb24gKGtleSlcblx0e1xuXHRcdHRhYmxlX3BsdXNba2V5XSA9IGFycmF5X3VuaXF1ZSh0YWJsZV9wbHVzW2tleV0pO1xuXG5cdFx0dGFibGVfcGx1c1trZXldLmZvckVhY2goZnVuY3Rpb24gKHMpXG5cdFx0e1xuXHRcdFx0dGFibGVfcGx1c1tzXSA9IHRhYmxlX3BsdXNba2V5XTtcblx0XHR9KVxuXHR9KVxuO1xuXG4vLyBAdHMtaWdub3JlXG50YWJsZV9qcCA9IGRlZXBtZXJnZSh0YWJsZV9qcCwgdGFibGVfcGx1cyk7XG5cbk9iamVjdC5rZXlzKHRhYmxlX2pwKVxuXHQuZm9yRWFjaChmdW5jdGlvbiAoa2V5KVxuXHR7XG5cdFx0dGFibGVfanBba2V5XSA9IGFycmF5X3VuaXF1ZSh0YWJsZV9qcFtrZXldKTtcblx0fSlcbjtcblxuZXhwb3J0IGludGVyZmFjZSBJU2ltcGxlVGFibGVcbntcblx0W2tleTogc3RyaW5nXTogc3RyaW5nLFxufVxuXG5leHBvcnQgbGV0IF90YWJsZV9jbjogSVNpbXBsZVRhYmxlID0gX3VwZGF0ZSh7fSwgX3RhYmxlX3R3KTtcblxuZXhwb3J0IGZ1bmN0aW9uIF91cGRhdGUodGFyZ2V0OiBJU2ltcGxlVGFibGUsIHNvdXJjZTogSVNpbXBsZVRhYmxlKTogSVNpbXBsZVRhYmxlXG57XG5cdHRhcmdldCA9IE9iamVjdC5rZXlzKHNvdXJjZSlcblx0XHQucmVkdWNlKGZ1bmN0aW9uIChhLCBiKVxuXHRcdHtcblx0XHRcdGFbc291cmNlW2JdXSA9IGI7XG5cblx0XHRcdHJldHVybiBhO1xuXHRcdH0sIHt9KVxuXHQ7XG5cblx0cmV0dXJuIHRhcmdldDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9nZXQoYXJyOiBzdHJpbmdbXSwgdmFsdWU6IHN0cmluZyB8IHN0cmluZ1tdLCAuLi52YWx1ZXM6IEFycmF5PHN0cmluZyB8IHN0cmluZ1tdPik6IHN0cmluZ1tdXG57XG5cdGxldCByZXQ6IHN0cmluZ1tdID0gW11cblx0XHQuY29uY2F0KHZhbHVlKVxuXHRcdC5jb25jYXQoLi4udmFsdWVzKVxuXHRcdC5maWx0ZXIoZnVuY3Rpb24gKHYpXG5cdFx0e1xuXHRcdFx0cmV0dXJuIHY7XG5cdFx0fSlcblx0O1xuXG5cdC8vcmV0Lmxlbmd0aCAmJiByZXQuc29ydCgpO1xuXG5cdHJldHVybiByZXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBqcChjaGFyOiBzdHJpbmcsIG9wdGlvbnM6IElPcHRpb25zID0ge30pOiBzdHJpbmdbXVxue1xuXHRsZXQgYTogc3RyaW5nW10gPSBbXTtcblx0YSA9IF9nZXQoYSwgdGFibGVfanBbY2hhcl0pO1xuXG5cdHJldHVybiBhO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHcoY2hhcjogc3RyaW5nLCBvcHRpb25zOiBJT3B0aW9ucyA9IHt9KTogc3RyaW5nW11cbntcblx0bGV0IGE6IHN0cmluZ1tdID0gW107XG5cblx0YSA9IF9nZXQoYSwgX3RhYmxlX3R3W2NoYXJdLCBjbjJ0dyhjaGFyLCBvcHRpb25zKSk7XG5cblx0Ly9jb25zb2xlLmxvZygnY24ydHcnLCBjaGFyLCBhKTtcblxuXHRyZXR1cm4gYTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNuKGNoYXI6IHN0cmluZywgb3B0aW9uczogSU9wdGlvbnMgPSB7fSk6IHN0cmluZ1tdXG57XG5cdGxldCBhOiBzdHJpbmdbXSA9IFtdO1xuXG5cdGEgPSBfZ2V0KGEsIF90YWJsZV9jbltjaGFyXSwgdHcyY24oY2hhciwgb3B0aW9ucykpO1xuXG5cdC8vY29uc29sZS5sb2coJ3R3MmNuJywgY2hhciwgYSk7XG5cblx0cmV0dXJuIGE7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGV4cG9ydHMgYXMgdHlwZW9mIGltcG9ydCgnLi90YWJsZScpO1xuIl19
"use strict";
/**
 * Created by user on 2018/2/17/017.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../convert/index");
const array_hyper_unique_1 = require("array-hyper-unique");
const deepmerge = require("deepmerge-plus");
const list_1 = require("../../jp/list");
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
    '祕': [
        '密',
    ],
    '秘': [
        '密',
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
        //'侂',
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
    //	'札': [
    //		'箚',
    //		'剳',
    //	],
    '箚': [
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
        '勲',
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
    '嬉': [
        '嬉',
        '嘻',
    ],
    '亘': [
        '亘',
        '亙',
    ],
    '恆': [
        '恆',
        '恒',
    ],
    '鶇': [
        '鶇',
        '鶫',
        '鸫',
    ],
    '姉': [
        '姉',
        '姐',
        '姊',
    ],
    '剁': [
        '剁',
        '刴',
    ],
    '泄': [
        '泄',
        '洩',
    ],
    '舖': [
        '舖',
        '铺',
        '鋪',
        '舗',
    ],
    '效': [
        '效',
        '効',
    ],
    '喻': [
        '喻',
        '喩',
    ],
    '插': [
        '挿',
        '插',
        '揷',
    ],
    '銳': [
        '銳',
        '鋭',
        '锐',
    ],
    '權': [
        '權',
        '権',
        '权',
    ],
    '経': [
        '経',
        '經',
        '经',
    ],
    '歓': [
        '歓',
        '歡',
        '欢',
    ],
    '孃': [
        '嬢',
        '孃',
    ],
    '済': [
        '済',
        '濟',
        '济',
    ],
    '收': [
        '収',
        '收',
    ],
    '綠': [
        '綠',
        '緑',
        '绿',
    ],
    '唖': [
        '唖',
        '啞',
        '哑',
    ],
    '剿': [
        '剿',
        '勦',
        '𠞰',
    ],
    '禍': [
        '禍',
        '禍',
        '祸',
    ],
    ...jpListLazyAllMap([
        '営',
        '産',
        '査',
        '絵',
        '懐',
        '釈',
        '蔵',
        '娯',
        '焼',
        '拡',
        '賎',
        '銭',
        '雑',
        '聴',
        '帯',
        '閲',
        '覧',
        '悪',
        '亜',
        '氷',
    ]),
    '侮': [
        '侮',
        '侮',
    ],
    '沉': [
        '沉',
        '沈',
    ],
    '嚐': [
        '嚐',
        '嘗',
        '尝',
    ],
    '搾': [
        '搾',
        '榨',
    ],
    '获': [
        '获',
        '獲',
        '穫',
    ],
    '繮': [
        '繮',
        '缰',
        '韁',
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
        table_jp[key] = array_hyper_unique_1.array_unique(table_jp[key]);
    });
    return table_jp;
}
exports._uniqueTable = _uniqueTable;
function _buildTablePlus(table_plus) {
    Object.keys(table_plus)
        .forEach(function (key) {
        table_plus[key] = array_hyper_unique_1.array_unique(table_plus[key]);
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
function jpListLazyAllMap(arr) {
    return arr.reduce((a, b) => {
        a[b] = jpListLazyAll(b);
        return a;
    }, {});
}
function jpListLazyAll(char) {
    return list_1.lazyAll(char, {
        safe: false,
        includeSelf: true,
    });
}
exports.default = exports;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YWJsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7O0dBRUc7O0FBR0gsNENBQWdEO0FBQ2hELDJEQUFrRDtBQUNsRCw0Q0FBNkM7QUFDN0Msd0NBQTBEO0FBRy9DLFFBQUEsU0FBUyxHQUFHO0lBQ3RCLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0NBQ0MsQ0FBQztBQUVYOztHQUVHO0FBQ0gsSUFBSSxhQUFhLEdBQUc7SUFDbkIsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILHFCQUFxQjtRQUNyQixHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxNQUFNO1FBQ04sR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FFSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxJQUFJLEVBQUU7UUFDTCxJQUFJO1FBQ0osR0FBRztLQUNIO0lBRUQ7Ozs7O01BS0U7SUFFRixHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO0tBQ0g7Q0FFUSxDQUFDO0FBRVg7O0dBRUc7QUFDSCxJQUFJLGVBQWUsR0FBRztJQUNyQixHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBRUg7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILElBQUk7S0FDSjtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxJQUFJO0tBQ0o7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELG1EQUFtRDtJQUNuRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FFSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUVILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBR0g7SUFFRCxHQUFHLEVBQUU7UUFDSixNQUFNO1FBQ04sTUFBTTtRQUNOLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxNQUFNO1FBQ04sR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxJQUFJO1FBRUosR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILElBQUk7S0FDSjtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxJQUFJO1FBQ0osSUFBSTtRQUNKLElBQUk7UUFDSixHQUFHO1FBQ0gsSUFBSTtLQUNKO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILE1BQU07UUFDTixHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILElBQUk7UUFDSixJQUFJO1FBQ0osSUFBSTtLQUNKO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRixTQUFTO0lBQ1QsUUFBUTtJQUNSLFFBQVE7SUFDUixLQUFLO0lBRUosR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxJQUFJO0tBQ0o7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxJQUFJO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILElBQUk7S0FDSjtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILElBQUk7UUFDSixHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsSUFBSTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FB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QztJQUU3RSxPQUFRLEdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDbkMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4QixPQUFPLENBQUMsQ0FBQztJQUNWLENBQUMsRUFBRSxFQUFtQixDQUFDLENBQUE7QUFDdkIsQ0FBQztBQUVELFNBQVMsYUFBYSxDQUFtQixJQUFPO0lBRS9DLE9BQU8sY0FBYyxDQUFDLElBQUksRUFBRTtRQUMzQixJQUFJLEVBQUUsS0FBSztRQUNYLFdBQVcsRUFBRSxJQUFJO0tBQ2pCLENBQVEsQ0FBQTtBQUNWLENBQUM7QUFFRCxrQkFBZSxPQUFtQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IHVzZXIgb24gMjAxOC8yLzE3LzAxNy5cbiAqL1xuXG5pbXBvcnQgeyBJT3B0aW9ucyB9IGZyb20gJy4uL2NvbnZlcnQvY29yZSc7XG5pbXBvcnQgeyB0dzJjbiwgY24ydHcgfSBmcm9tICcuLi9jb252ZXJ0L2luZGV4JztcbmltcG9ydCB7IGFycmF5X3VuaXF1ZSB9IGZyb20gJ2FycmF5LWh5cGVyLXVuaXF1ZSc7XG5pbXBvcnQgZGVlcG1lcmdlID0gcmVxdWlyZSgnZGVlcG1lcmdlLXBsdXMnKTtcbmltcG9ydCB7IGxhenlBbGwgYXMgX2pwTGlzdExhenlBbGwgfSBmcm9tICcuLi8uLi9qcC9saXN0JztcbmltcG9ydCB7IElUU0FycmF5TGlzdE1heWJlUmVhZG9ubHkgfSBmcm9tICd0cy10eXBlJztcblxuZXhwb3J0IGxldCBfdGFibGVfdHcgPSB7XG5cdCfnvZcnOiAn576FJyxcblx0J+aBtic6ICfmg6EnLFxuXHQn6IuPJzogJ+iYhycsXG5cdCfppoYnOiAn6aSoJyxcbn0gYXMgY29uc3Q7XG5cbi8qKlxuICog5q2k6KGo5YWn5Y+q5pyJ56ym5ZCIIEtFWSDlgLzmmYLmiY3mnIPop7jnmbxcbiAqL1xubGV0IHRhYmxlX2pwX2NvcmUgPSB7XG5cdCfjga4nOiBbXG5cdFx0J+OBricsXG5cdFx0J+S5iycsXG5cdFx0J+eahCcsXG5cdF0sXG5cblx0J+OBqCc6IFtcblx0XHQn44GoJyxcblx0XHQn6IiHJyxcblx0XHQn5LiOJyxcblx0XSxcblxuXHQn55S7JzogW1xuXHRcdCfliJInLFxuXHRcdCfnlLsnLFxuXHRcdCflioMnLFxuXHRcdCfnlasnLFxuXHRdLFxuXHQn6ZeYJzogW1xuXHRcdCfmlpcnLFxuXHRdLFxuXHQn6aylJzogW1xuXHRcdCfmlpcnLFxuXHRdLFxuXHQn6aytJzogW1xuXHRcdCfmlpcnLFxuXHRdLFxuXHQn6ayqJzogW1xuXHRcdCfmlpcnLFxuXHRdLFxuXHQn6ZeHJzogW1xuXHRcdCfmmpcnLFxuXHRdLFxuXHQn5ZuzJzogW1xuXHRcdCflm7MnLFxuXHRcdCflnJYnLFxuXHRcdCflm74nLFxuXHRdLFxuXHQn5b2TJzogW1xuXHRcdCflvZMnLFxuXHRcdCflmbknLFxuXHRcdCfnlbYnLFxuXHRcdCflhIUnLFxuXHRdLFxuXG5cdCfplqQnOiBbXG5cdFx0J+WQiCcsXG5cdF0sXG5cdCfpmIEnOiBbXG5cdFx0J+WQiCcsXG5cdF0sXG5cblx0J+e9lyc6IFtcblx0XHQn576FJyxcblx0XHQn572XJyxcblx0XHQn5YS4Jyxcblx0XHQn45GpJyxcblx0XHQn5ZuJJyxcblx0XHQn5ZWwJyxcblx0XSxcblxuXHQn5bmyJzogW1xuXHRcdCflubknLFxuXHRcdCfkub4nLFxuXHRcdCflubInLFxuXHRdLFxuXG5cdCflubknOiBbXG5cdFx0J+W5uScsXG5cdFx0J+W5sicsXG5cdF0sXG5cblx0J+S5vic6IFtcblx0XHQn5bmyJyxcblx0XHQn5Lm+Jyxcblx0XHQn5LqBJyxcblx0XHQn5Lm5Jyxcblx0XSxcblx0J+S6gSc6IFtcblx0XHQn5Lm+Jyxcblx0XHQn5LqBJyxcblx0XHQn5Lm5Jyxcblx0XSxcblx0J+S5uSc6IFtcblx0XHQn5Lm+Jyxcblx0XHQn5LqBJyxcblx0XHQn5Lm5Jyxcblx0XSxcblxuXHQn5Y6GJzogW1xuXHRcdCfljoYnLFxuXHRcdCfmrbQnLFxuXHRcdCfmrbcnLFxuXHRcdCfmmqYnLFxuXHRcdCfmm4YnLFxuXHRdLFxuXG5cdCfmrbQnOiBbXG5cdFx0J+WOhicsXG5cdF0sXG5cdCfmrbcnOiBbXG5cdFx0J+WOhicsXG5cdF0sXG5cdCfmmqYnOiBbXG5cdFx0J+WOhicsXG5cdF0sXG5cdCfmm4YnOiBbXG5cdFx0J+WOhicsXG5cdF0sXG5cblx0J+WRuyc6IFtcblx0XHQn5ZG7Jyxcblx0XHQn55SzJyxcblx0XSxcblxuXHQn6KaGJzogW1xuXHRcdCfopoYnLFxuXHRcdCflpI0nLFxuXHRdLFxuXG5cdCfli4knOiBbXG5cdFx0J+WFjScsXG5cdF0sXG5cblx0J++osyc6IFtcblx0XHQn5YWNJyxcblx0XSxcblxuXHQn55SmJzogW1xuXHRcdCfnlKYnLFxuXHRcdCfomIcnLFxuXHRcdCfoi48nLFxuXHRdLFxuXG5cdCflv6cnOiBbXG5cdFx0J+aGgicsXG5cdFx0J+WEqicsXG5cdF0sXG5cblx0J+m5uSc6IFtcblx0XHQn5ZK4Jyxcblx0XHQn6bm5Jyxcblx0XSxcblxuXHQn5YeGJzogW1xuXHRcdCfmupYnLFxuXHRcdCflh4YnLFxuXHRdLFxuXG5cdCfmupYnOiBbXG5cdFx0J+a6licsXG5cdFx0J+WHhicsXG5cdF0sXG5cblx0J+iiric6IFtcblx0XHQn6KKuJyxcblx0XHQvLyDkuKbpnZ7nlbDpq5TlrZcg5L2G55Sx5pa86YGO5bqm55u45Ly8IOWuueaYk+mMr+iqpFxuXHRcdCfnpaInLFxuXHRdLFxuXG5cdCflhJgnOiBbXG5cdFx0J+WEmCcsXG5cdFx0J+S+rScsXG5cdF0sXG5cblx0J+S+rSc6IFtcblx0XHQn5YSYJyxcblx0XHQn5L6tJyxcblx0XSxcblxuXHQn6ISPJzogW1xuXHRcdCfohI8nLFxuXHRcdCfpq5InLFxuXHRcdCfoh58nLFxuXHRdLFxuXG5cdCflj5EnOiBbXG5cdFx0J+mrricsXG5cdFx0J+mrqicsXG5cdFx0J+WPkScsXG5cdF0sXG5cblx0J+mrric6IFtcblx0XHQn55m8Jyxcblx0XHQn5Y+RJyxcblx0XSxcblxuXHQn5oW+JzogW1xuXHRcdCfmhb4nLFxuXHRcdCfmrLInLFxuXHRdLFxuXG5cdCforponOiBbXG5cdFx0J+iugycsXG5cdFx0J+iumicsXG5cdFx0J+i0iicsXG5cdFx0J+i1nicsXG5cdFx0J+izmycsXG5cdF0sXG5cblx0J+WGsic6IFtcblx0XHQn5YayJyxcblx0XHQn5rKWJyxcblx0XHQn6KGdJyxcblx0XSxcblxuXHQn6Z2iJzogW1xuXHRcdCfpurUnLFxuXHRcdCfpuqonLFxuXHRcdCfpuronLFxuXHRdLFxuXG5cdCfprJonOiBbXG5cdFx0J+msmicsXG5cdFx0J+mgiCcsXG5cdFx0J+mhuycsXG5cdF0sXG5cblx0J+aPuSc6IFtcblx0XHQn5o+5Jyxcblx0XHQn6IOMJyxcblx0XSxcblxuXHQn5o2yJzogW1xuXHRcdCfmjbInLFxuXHRcdCfljbcnLFxuXHRcdCflt7snLFxuXHRdLFxuXG5cdCfljbcnOiBbXG5cdFx0J+aNsicsXG5cdFx0J+WNtycsXG5cdFx0J+W3uycsXG5cdFx0J+WKtScsXG5cdFx0J+WIuCcsXG5cdF0sXG5cblx0J+W3uyc6IFtcblx0XHQn5o2yJyxcblx0XHQn5Y23Jyxcblx0XHQn5be7Jyxcblx0XHQn5Yq1Jyxcblx0XHQn5Yi4Jyxcblx0XSxcblxuXHQn6IuPJzogW1xuXHRcdCfoi48nLFxuXHRcdCfomIcnLFxuXHRcdCfnlKYnLFxuXHRdLFxuXG5cdCfngI8nOiBbXG5cdFx0J+eAjycsXG5cdFx0J+a1jycsXG5cdFx0J+WImCcsXG5cdF0sXG5cdCfmtY8nOiBbXG5cdFx0J+eAjycsXG5cdFx0J+a1jycsXG5cdFx0J+WImCcsXG5cdF0sXG5cblx0J+WQgSc6IFtcblx0XHQn57GyJyxcblx0XHQvLyfpvqUnLFxuXHRcdCflkIEnLFxuXHRdLFxuXG5cdCflm4knOiBbXG5cdFx0J+WbiScsXG5cdFx0J+WVsCcsXG5cdFx0J+e9lycsXG5cdFx0J+e+hScsXG5cdF0sXG5cblx0J+WVsCc6IFtcblx0XHQn5ZuJJyxcblx0XHQn5ZWwJyxcblx0XHQn572XJyxcblx0XHQn576FJyxcblx0XSxcblxuXHQn5L+uJzogW1xuXHRcdCfkv64nLFxuXHRcdCfkv6InLFxuXHRdLFxuXG5cdCfnip8nOiBbXG5cdFx0J+eKnycsXG5cdFx0J+W8tycsXG5cdFx0J+W8uicsXG5cdF0sXG5cblx0J+WXrCc6IFtcblx0XHQn5ZesJyxcblx0XHQn5ZG1Jyxcblx0XSxcblxuXHQn5ZS/JzogW1xuXHRcdCfllL8nLFxuXHRcdCflkbwnLFxuXHRdLFxuXG5cdCflqq4nOiBbXG5cdFx0J+WqricsXG5cdFx0J+WBtycsXG5cdF0sXG5cblx0J+mHhyc6IFtcblx0XHQn6YeHJyxcblx0XHQn5o6hJyxcblx0XHQvLyfln7AnLFxuXHRdLFxuXG5cdCflvaknOiBbXG5cdFx0J+W9qScsXG5cdFx0J+mHhycsXG5cdF0sXG5cblx0J/CgqbonOiBbXG5cdFx0J/CgqbonLFxuXHRcdCfph5AnLFxuXHRdLFxuXG5cdC8qXG5cdCfnlJonOiBbXG5cdFx0J+eUmicsXG5cdFx0J+S7gCcsXG5cdF0sXG5cdCovXG5cblx0J+aBtic6IFtcblx0XHQn5oG2Jyxcblx0XHQn5ZmBJyxcblx0XHQn5oOhJyxcblx0XSxcblxuXHQn54KwJzogW1xuXHRcdCfngrAnLFxuXHRcdCfngq4nLFxuXHRdLFxuXG5cdCfovp8nOiBbXG5cdFx0J+i+nycsXG5cdFx0J+mXoicsXG5cdFx0J+mBvycsXG5cdF0sXG5cblx0J+mBvyc6IFtcblx0XHQn6L6fJyxcblx0XHQn6YG/Jyxcblx0XSxcblxuXHQn6ZeiJzogW1xuXHRcdCfovp8nLFxuXHRcdCfpl6InLFxuXHRdLFxuXG5cdCfmu7cnOiBbXG5cdFx0J+mtrycsXG5cdFx0J+mygScsXG5cdF0sXG5cblx0J+m5tSc6IFtcblx0XHQn6a2vJyxcblx0XHQn6bKBJyxcblx0XSxcblxuXHQn5Y2kJzogW1xuXHRcdCfpra8nLFxuXHRcdCfpsoEnLFxuXHRdLFxuXG5cdCflhJMnOiBbXG5cdFx0J+WEkycsXG5cdFx0J+aqrycsXG5cdF0sXG5cblx0J+aqryc6IFtcblx0XHQn5YSTJyxcblx0XHQn5qqvJyxcblx0XSxcblxuXHQn5Y+wJzogW1xuXHRcdCflj7AnLFxuXHRcdCfmqq8nLFxuXHRcdCfoh7onLFxuXHRcdCfporEnLFxuXHRdLFxuXG5cdCfnt7QnOiBbXG5cdFx0J+eCvCcsXG5cdF0sXG5cblx0J+e7gyc6IFtcblx0XHQn54K8Jyxcblx0XSxcblxuXHQn57mrJzogW1xuXHRcdCfns7snLFxuXHRdLFxuXG5cdCfnuYsnOiBbXG5cdFx0J+ezuycsXG5cdF0sXG5cblx0J+ezkyc6IFtcblx0XHQn6LC3Jyxcblx0XSxcblxuXHQn56mAJzogW1xuXHRcdCfosLcnLFxuXHRdLFxuXG5cdCfniYgnOiBbXG5cdFx0J+advycsXG5cdF0sXG5cblx0J+ellSc6IFtcblx0XHQn5a+GJyxcblx0XSxcblxuXHQn56eYJzogW1xuXHRcdCflr4YnLFxuXHRdLFxuXG59IGFzIGNvbnN0O1xuXG4vKipcbiAqIOatpOihqOWFp+espuWQiOS7peS4i+S7u+aEj+WAvOaZguacg+inuOeZvFxuICovXG5sZXQgdGFibGVfcGx1c19jb3JlID0ge1xuXHQn5YqNJzogW1xuXHRcdCflio0nLFxuXHRcdCfliZEnLFxuXHRcdCfliaMnLFxuXHRcdCflio4nLFxuXHRcdCflipInLFxuXHRcdCflibEnLFxuXHRcdCflipQnLFxuXHRdLFxuXHQn56CyJzogW1xuXHRcdCfnoLInLFxuXHRcdCfngq4nLFxuXHRdLFxuXHQn5YG9JzogW1xuXHRcdCflgb0nLFxuXHRcdCflg54nLFxuXHRdLFxuXHQn5YWnJzogW1xuXHRcdCflhacnLFxuXHRcdCflhoUnLFxuXHRdLFxuXHQn6aylJzogW1xuXHRcdCfprK0nLFxuXHRcdCfprKUnLFxuXHRcdCfpl5gnLFxuXHRcdCfprKonLFxuXHRcdC8vJ+aWlycsXG5cdF0sXG5cdCfpto8nOiBbXG5cdFx0J+m2jycsXG5cdFx0J+m3hCcsXG5cdFx0J+mbnicsXG5cdFx0J+m4oScsXG5cdF0sXG5cdCflhY4nOiBbXG5cdFx0J+WFjicsXG5cdFx0J+WFlCcsXG5cdF0sXG5cdCflnY8nOiBbXG5cdFx0J+WdrycsXG5cdFx0J+WdjycsXG5cdFx0XCLlo4pcIixcblx0XHRcIuWjnlwiLFxuXHRdLFxuXHQn5q67JzogW1xuXHRcdCfmrrsnLFxuXHRcdCfmrrwnLFxuXHRcdCflo7MnLFxuXHRdLFxuXHQn5YOPJzogW1xuXHRcdCflg48nLFxuXHRcdCfosaEnLFxuXHRdLFxuXHQn6JiHJzogW1xuXHRcdCfoi48nLFxuXHRcdCfomIcnLFxuXHRcdCflm4wnLFxuXHRdLFxuXHQn6aSoJzogW1xuXHRcdCfppKgnLFxuXHRcdCfvqKwnLFxuXHRcdCfoiJgnLFxuXHRcdCfppoYnLFxuXHRdLFxuXHQn6bOlJzogW1xuXHRcdCfps6UnLFxuXHRcdCfpuJ8nLFxuXHRcdCfwq6CTJyxcblx0XSxcblx0J+imlic6IFtcblx0XHQn6KaWJyxcblx0XHQn76mhJyxcblx0XHQn6KeGJyxcblx0XHQn55yOJyxcblx0XSxcblx0J+mZuic6IFtcblx0XHQn6Zm6Jyxcblx0XHQn6ZqqJyxcblx0XHQn6ZmpJyxcblx0XHQn5bauJyxcblx0XHQn5bSEJyxcblx0XSxcblx0J+e1tic6IFtcblx0XHQn57W2Jyxcblx0XHQn57WVJyxcblx0XHQn57udJyxcblx0XSxcblx0J+mJhCc6IFtcblx0XHQn6YmEJyxcblx0XHQn6ZC1Jyxcblx0XHQn6ZOBJyxcblx0XHQn6ZChJyxcblx0XSxcblx0J+iruCc6IFtcblx0XHQn6Ku4Jyxcblx0XHQn76iiJyxcblx0XHQn6K+4Jyxcblx0XSxcblx0J+Wwiyc6IFtcblx0XHQn5bCLJyxcblx0XHQn5a+7Jyxcblx0XHQn8KGsticsXG5cdF0sXG5cdCfoo6EnOiBbXG5cdFx0J+ijoScsXG5cdFx0J+ijjycsXG5cdFx0J+mHjCcsXG5cdF0sXG5cdCfpkZEnOiBbXG5cdFx0J+mRkScsXG5cdFx0J+mJtCcsXG5cdFx0J+mRkicsXG5cdF0sXG5cdCfpurUnOiBbXG5cdFx0J+m6tScsXG5cdFx0J+m6qicsXG5cdFx0J+m6uicsXG5cdF0sXG5cdCfmrbInOiBbXG5cdFx0J+atsicsXG5cdFx0J+atsycsXG5cdFx0J+WygScsXG5cdF0sXG5cdC8vIGh0dHBzOi8vemgud2lraXBlZGlhLm9yZy93aWtpLyVFOSU4RCVCRSVFNSVBNyU5M1xuXHQn6ZCYJzogW1xuXHRcdCfpkJgnLFxuXHRcdCfpjb4nLFxuXHRcdCfpkp8nLFxuXHRcdCfplLonLFxuXHRdLFxuXHQn5pyDJzogW1xuXHRcdCfmnIMnLFxuXHRcdCfkvJonLFxuXHRcdCfjkbknLFxuXHRdLFxuXHQn5aGXJzogW1xuXHRcdCfloZcnLFxuXHRcdCflh4MnLFxuXHRcdCfmtoInLFxuXHRdLFxuXG5cdCfpq64nOiBbXG5cdFx0J+mrricsXG5cdFx0J+mrqicsXG5cdFx0Ly8n5Y+RJyxcblx0XSxcblxuXHQn6KmxJzogW1xuXHRcdCfoqbEnLFxuXHRcdCfor50nLFxuXHRcdCfkm6EnLFxuXHRdLFxuXG5cdCfplqQnOiBbXG5cdFx0J+mWpCcsXG5cdFx0J+mYgScsXG5cdF0sXG5cblx0J+iUmCc6IFtcblx0XHQn6JSYJyxcblx0XHQn5Y+DJyxcblx0XHQn5Y+CJyxcblx0XSxcblxuXHQn5Yq0JzogW1xuXHRcdCflirQnLFxuXHRcdCfli54nLFxuXHRcdCflirMnLFxuXHRdLFxuXG5cdCflm70nOiBbXG5cdFx0J+WbvScsXG5cdFx0J+WbrycsXG5cdFx0J+WciycsXG5cdF0sXG5cblx0J+e9tSc6IFtcblx0XHQn5721Jyxcblx0XHQn6aqCJyxcblx0XHQn6aehJyxcblx0XSxcblxuXHQn5a++JzogW1xuXHRcdCflr74nLFxuXHRcdCflsI0nLFxuXHRcdCflr7knLFxuXHRdLFxuXG5cdCfpj70nOiBbXG5cdFx0J+mPvScsXG5cdFx0J+mKuScsXG5cdFx0J+mUiCcsXG5cdF0sXG5cblx0J+mnhCc6IFtcblx0XHQn6aeEJyxcblx0XHQn5K2+Jyxcblx0XHQn6aaxJyxcblx0XHQn6amuJyxcblx0XSxcblxuXHQn6JapJzogW1xuXHRcdCfolqknLFxuXHRcdCfokKgnLFxuXHRcdCfola8nLFxuXHRdLFxuXG5cdCfljZgnOiBbXG5cdFx0J+WNmCcsXG5cdFx0J+WWricsXG5cdFx0J+WNlScsXG5cdF0sXG5cblx0J+e2mSc6IFtcblx0XHQn57aZJyxcblx0XHQn57m8Jyxcblx0XHQn57unJyxcblx0XSxcblxuXHQn6amXJzogW1xuXHRcdCfpqZcnLFxuXHRcdCfpqownLFxuXHRcdCfpqJAnLFxuXG5cdFx0J+mokycsXG5cdF0sXG5cblx0J+attCc6IFtcblx0XHQn5q20Jyxcblx0XHQn5q23Jyxcblx0XHQvLyfmmqYnLFxuXHRcdC8vJ+abhicsXG5cdF0sXG5cblx0J+aapic6IFtcblx0XHQvLyfmrbQnLFxuXHRcdC8vJ+attycsXG5cdFx0J+aapicsXG5cdFx0J+abhicsXG5cdF0sXG5cblx0J+Wboyc6IFtcblx0XHQn5ZuiJyxcblx0XHQn5ZujJyxcblx0XHQn5ZyYJyxcblx0XSxcblxuXHQn6bq8JzogW1xuXHRcdCfpurwnLFxuXHRcdCfpur0nLFxuXHRcdCfluoUnLFxuXHRdLFxuXG5cdCfmiLAnOiBbXG5cdFx0J+aIpicsXG5cdFx0J+aIsCcsXG5cdFx0J+aImCcsXG5cdF0sXG5cblx0J+S5oSc6IFtcblx0XHQn6YO3Jyxcblx0XHQn6YSVJyxcblx0XHQn6YSJJyxcblx0XHQn6YSKJyxcblx0XHQn5LmhJyxcblx0XSxcblxuXHQn5YuJJzogW1xuXHRcdCfli4knLFxuXHRcdCfvqLMnLFxuXHRdLFxuXG5cdCfppJgnOiBbXG5cdFx0J+mkmCcsXG5cdFx0J+mmgCcsXG5cdFx0J+S9mScsXG5cdF0sXG5cblx0J+e2sic6IFtcblx0XHQn57ayJyxcblx0XHQn5IuEJyxcblx0XHQn5IueJyxcblx0XHQn572RJyxcblx0XSxcblxuXHQn6KiXJzogW1xuXHRcdCfoqJcnLFxuXHRcdCforqwnLFxuXHRcdC8vJ+S+gicsXG5cdFx0J+aJmCcsXG5cdF0sXG5cblx0J+e6lic6IFtcblx0XHQn57qWJyxcblx0XHQn57qkJyxcblx0XHQn57i0Jyxcblx0XHQn57mKJyxcblx0XSxcblxuXHQn6Y2KJzogW1xuXHRcdCfpjYonLFxuXHRcdCfpjKwnLFxuXHRcdCfwq5SAJyxcblxuXHRcdCfngrwnLFxuXHRcdCfnhYknLFxuXHRdLFxuXG5cdCfmk4onOiBbXG5cdFx0J+aSgycsXG5cdFx0J+aTiicsXG5cdFx0J+WHuycsXG5cdF0sXG5cblx0J+Wvpic6IFtcblx0XHQn5a+mJyxcblx0XHQn5a6fJyxcblx0XHQn5a6eJyxcblx0XHQn5a+UJyxcblx0XSxcblxuXHQn5pa8JzogW1xuXHRcdCfmlrwnLFxuXHRcdCfmibUnLFxuXHRdLFxuXG5cdCforYknOiBbXG5cdFx0J+itiScsXG5cdFx0J+iovCcsXG5cdFx0J+ivgScsXG5cdF0sXG5cblx0J+aTmic6IFtcblx0XHQn5pOaJyxcblx0XHQn5o2uJyxcblx0XHQn5ougJyxcblx0XSxcblxuXHQn6JmVJzogW1xuXHRcdCfomZUnLFxuXHRcdCflpIQnLFxuXHRcdCfklo8nLFxuXHRcdCflh6YnLFxuXHRdLFxuXG5cdCfnnqonOiBbXG5cdFx0J+eeqicsXG5cdFx0J+eeoCcsXG5cdFx0J+ecmScsXG5cdF0sXG5cblx0J+iCoic6IFtcblx0XHQn6IKiJyxcblx0XHQn6IORJyxcblx0XSxcblxuXHQn6IKJJzogW1xuXHRcdCfogoknLFxuXHRcdCflro0nLFxuXHRcdCfwoJWOJyxcblx0XSxcblxuXHQn5oaCJzogW1xuXHRcdCfmhoInLFxuXHRcdCfwop2KJyxcblx0XHQn8KKapycsXG5cdFx0J/Cin5wnLFxuXHRcdCfmh64nLFxuXHRcdCfwqJerJyxcblx0XSxcblxuXHQn57mrJzogW1xuXHRcdCfnuasnLFxuXHRcdC8vJ+ezuycsXG5cdFx0J+e5iycsXG5cdF0sXG5cblx0J+W7uyc6IFtcblx0XHQn5bu7Jyxcblx0XHQn6L+0Jyxcblx0XSxcblxuXHQn6YyyJzogW1xuXHRcdCfpjLInLFxuXHRcdCfpjIQnLFxuXHRcdCflvZUnLFxuXHRdLFxuXG5cdCfpjpcnOiBbXG5cdFx0J+mOlycsXG5cdFx0J+anjScsXG5cdFx0J+aeqicsXG5cdF0sXG5cblx0J+aCoCc6IFtcblx0XHQn5oKgJyxcblx0XHQn5ru6Jyxcblx0XSxcblxuXHQn5aO2JzogW1xuXHRcdCflo7YnLFxuXHRcdCflo7onLFxuXHRcdCflo7cnLFxuXHRdLFxuXG5cdCfojLInOiBbXG5cdFx0J+iMsicsXG5cdFx0J+WFuScsXG5cdFx0J+eOhicsXG5cdF0sXG5cblx0J+iTiyc6IFtcblx0XHQn6JOLJyxcblx0XHQn55uWJyxcblx0XHQn6JGiJyxcblx0XSxcblxuXHQn6LmfJzogW1xuXHRcdCfouZ8nLFxuXHRcdCfot6EnLFxuXHRcdCfov7knLFxuXHRdLFxuXG5cdCfnmZInOiBbXG5cdFx0J+eZkicsXG5cdFx0J+eYiScsXG5cdF0sXG5cblx0J+i+uic6IFtcblx0XHQn6L66Jyxcblx0XHQn6YKKJyxcblx0XHQn6L65Jyxcblx0XHQn6YKJJyxcblx0XSxcblxuXHQn5rqWJzogW1xuXHRcdCfmupYnLFxuXHRcdCflh5YnLFxuXHRdLFxuXG5cdCfooZsnOiBbXG5cdFx0J+ihmycsXG5cdFx0J+ihnicsXG5cdFx0J+WNqycsXG5cdF0sXG5cblx0J+aZmic6IFtcblx0XHQn5pmaJyxcblx0XHQn5pmpJyxcblx0XSxcblxuXHQn6KO4JzogW1xuXHRcdCfoo7gnLFxuXHRcdCfourYnLFxuXHRdLFxuXG5cdCfkuoAnOiBbXG5cdFx0J+S6gCcsXG5cdFx0J+m+nCcsXG5cdFx0J+m+nycsXG5cdFx0J/CqmqcnLFxuXHRcdCfwqpq/Jyxcblx0XHQn8KCDvicsXG5cdF0sXG5cblx0J+WHvCc6IFtcblx0XHQn5Ye8Jyxcblx0XHQn5rC5Jyxcblx0XSxcblxuXHQn6Im4JzogW1xuXHRcdCfoibgnLFxuXHRcdCfojYknLFxuXHRdLFxuXG4vL1x0J+acrSc6IFtcbi8vXHRcdCfnrponLFxuLy9cdFx0J+WJsycsXG4vL1x0XSxcblxuXHQn566aJzogW1xuXHRcdCfnrponLFxuXHRcdCflibMnLFxuXHRdLFxuXG5cdCflpI0nOiBbXG5cdFx0J+WkjScsXG5cdFx0J+W+qScsXG5cdFx0J+ikhycsXG5cdF0sXG5cblx0J+axoSc6IFtcblx0XHQn5rGhJyxcblx0XHQn5rGZJyxcblx0XHQn5rGaJyxcblx0XSxcblxuXHQn5LyZJzogW1xuXHRcdCfkvJknLFxuXHRcdCflpKUnLFxuXHRdLFxuXG5cdCflvqEnOiBbXG5cdFx0J+W+oScsXG5cdFx0J+empicsXG5cdF0sXG5cblx0J+mssSc6IFtcblx0XHQn6ayxJyxcblx0XHQn6YOBJyxcblx0XSxcblxuXHQn5repJzogW1xuXHRcdCfmt6knLFxuXHRcdCflh4wnLFxuXHRdLFxuXG5cdCfntK4nOiBbXG5cdFx0J+e0ricsXG5cdFx0J+aJjicsXG5cdF0sXG5cblx0J+eXtCc6IFtcblx0XHQn55e0Jyxcblx0XHQn55mhJyxcblx0XSxcblxuXHQn5qCWJzogW1xuXHRcdCfmoJYnLFxuXHRcdCfmo7InLFxuXHRdLFxuXG5cdCfniocnOiBbXG5cdFx0J+eKhycsXG5cdFx0J+WllCcsXG5cdF0sXG5cblx0J+evhCc6IFtcblx0XHQn56+EJyxcblx0XHQn6IyDJyxcblx0XSxcblxuXHQn6JaRJzogW1xuXHRcdCfolpEnLFxuXHRcdCflp5wnLFxuXHRcdCfokYEnLFxuXHRdLFxuXG5cdCfmqLgnOiBbXG5cdFx0J+aouCcsXG5cdFx0J+actCcsXG5cdF0sXG5cblx0J+irric6IFtcblx0XHQn6KuuJyxcblx0XHQn6LCYJyxcblx0XHQn5ZKoJyxcblx0XSxcblxuXHQn5pKaJzogW1xuXHRcdCfmkponLFxuXHRcdCfmjbsnLFxuXHRdLFxuXG5cdCflloInOiBbXG5cdFx0J+WWgicsXG5cdFx0J+mktScsXG5cdFx0J+mkpycsXG5cdFx0J/Crl60nLFxuXHRdLFxuXG5cdCfmt6gnOiBbXG5cdFx0J+a3qCcsXG5cdFx0J+WHiCcsXG5cdFx0J+WHgCcsXG5cdF0sXG5cblx0J+aglyc6IFtcblx0XHQn5qCXJyxcblx0XHQn5oWEJyxcblx0XSxcblxuXHQn5oy9JzogW1xuXHRcdCfmjL0nLFxuXHRcdCfovJMnLFxuXHRdLFxuXG5cdCfngbYnOiBbXG5cdFx0J+eBticsXG5cdFx0J+eriCcsXG5cdF0sXG5cblx0J+e3mic6IFtcblx0XHQn57eaJyxcblx0XHQn57yQJyxcblx0XHQn57arJyxcblx0XHQn57q/Jyxcblx0XSxcblxuXHQn55uhJzogW1xuXHRcdCfnm6EnLFxuXHRcdCflsL0nLFxuXHRcdCflhJgnLFxuXHRdLFxuXG5cdCfpu7QnOiBbXG5cdFx0J+m7tCcsXG5cdFx0J+mciScsXG5cdF0sXG5cblx0J+WRqCc6IFtcblx0XHQn5ZGoJyxcblx0XHQn6YCxJyxcblx0XSxcblxuXHQn5LimJzogW1xuXHRcdCfkuKYnLFxuXHRcdCflubYnLFxuXHRcdCfkvbUnLFxuXHRdLFxuXG5cdCforponOiBbXG5cdFx0J+iumicsXG5cdFx0J+iugycsXG5cdF0sXG5cblx0J+imsyc6IFtcblx0XHQn6KazJyxcblx0XHQn6KeAJyxcblx0XHQn6KeCJyxcblx0XHQn6KaMJyxcblx0XSxcblxuXHQn6YGKJzogW1xuXHRcdCfpgYonLFxuXHRcdCfmuLgnLFxuXHRdLFxuXG5cdCflkK8nOiBbXG5cdFx0J+WQrycsXG5cdFx0J+WVkycsXG5cdFx0J+WVnycsXG5cdFx0J+WVlCcsXG5cdF0sXG5cblx0J+W7hCc6IFtcblx0XHQn5buEJyxcblx0XHQn5Y6pJyxcblx0XHQn5buQJyxcblx0XHQn5buPJyxcblx0XSxcblxuXHQn5rCjJzogW1xuXHRcdCfmsJcnLFxuXHRcdCfmsKMnLFxuXHRcdCfmsJQnLFxuXHRdLFxuXG5cdCfmrLInOiBbXG5cdFx0J+aFvicsXG5cdFx0J+assicsXG5cdF0sXG5cblx0J+WCkSc6IFtcblx0XHQn5YKRJyxcblx0XHQn5p2wJyxcblx0XSxcblxuXHQn6Y2bJzogW1xuXHRcdCfpjZsnLFxuXHRcdCfplLsnLFxuXHRcdCfnhYUnLFxuXHRdLFxuXG5cdCflvrUnOiBbXG5cdFx0J+W+tScsXG5cdFx0J+W+tCcsXG5cdF0sXG5cblx0J+mWkic6IFtcblx0XHQn6ZaSJyxcblx0XHQn8KuUricsXG5cdFx0J+mWkScsXG5cdFx0J+mXsicsXG5cdF0sXG5cblx0J+i0iic6IFtcblx0XHQn6LSKJyxcblx0XHQn6LWeJyxcblx0XHQn6LObJyxcblx0XSxcblxuXHQn5qu7JzogW1xuXHRcdCfmq7snLFxuXHRcdCfmoZwnLFxuXHRcdCfmqLEnLFxuXHRdLFxuXG5cdCflsKgnOiBbXG5cdFx0J+WwqCcsXG5cdFx0J+eLtScsXG5cdF0sXG5cblx0J+WciCc6IFtcblx0XHQn5ZyIJyxcblx0XHQn5ZyPJyxcblx0XSxcblxuXHQn5Ye2JzogW1xuXHRcdCflh7YnLFxuXHRcdCflhYcnLFxuXHRdLFxuXG5cdCfmtZwnOiBbXG5cdFx0J+a1nCcsXG5cdFx0J+a/sScsXG5cdFx0J+a7qCcsXG5cdF0sXG5cblx0J+eFmSc6IFtcblx0XHQn54WZJyxcblx0XHQn54OfJyxcblx0XHQn6I+4Jyxcblx0XSxcblxuXHQn6buSJzogW1xuXHRcdCfpu5InLFxuXHRcdCfpu5EnLFxuXHRdLFxuXG5cdCfmqIInOiBbXG5cdFx0J+aogicsXG5cdFx0J+S5kCcsXG5cdFx0J+alvScsXG5cdF0sXG5cblx0J+iWrCc6IFtcblx0XHQn6JasJyxcblx0XHQn6JelJyxcblx0XHQn6I2vJyxcblx0XHQn6JGvJyxcblx0XHQn8KObmScsXG5cdF0sXG5cblx0J+WKtSc6IFtcblx0XHQn5Yq1Jyxcblx0XHQn5Yi4Jyxcblx0XHQn5Y23Jyxcblx0XSxcblxuXHQn6LKzJzogW1xuXHRcdCfosrMnLFxuXHRcdCfotLAnLFxuXHRcdCflvJAnLFxuXHRcdCfosq4nLFxuXHRcdCfwoo6QJyxcblx0XHQn5LqMJyxcblx0XSxcblxuXHQn6Zq3JzogW1xuXHRcdCfpmrcnLFxuXHRcdCfpmrgnLFxuXHRcdCfpmrYnLFxuXHRdLFxuXG5cdCflp6snOiBbXG5cdFx0J+WnqycsXG5cdFx0J+WnrCcsXG5cdF0sXG5cblx0J+eHuyc6IFtcblx0XHQn54e7Jyxcblx0XHQn54aPJyxcblx0XSxcblxuXHQn57GyJzogW1xuXHRcdCfnsbInLFxuXHRcdCfpvqUnLFxuXHRdLFxuXG5cdCfpvacnOiBbXG5cdFx0J+m9pycsXG5cdFx0J+WVricsXG5cdFx0J/CqmIInLFxuXHRcdCflm5MnLFxuXHRcdCflmZsnLFxuXHRcdCflmpknLFxuXHRdLFxuXG5cdCfpubwnOiBbXG5cdFx0J+m5vCcsXG5cdFx0J+eisScsXG5cdFx0J+ehtycsXG5cdF0sXG5cblx0J+WSuCc6IFtcblx0XHQn5ZK4Jyxcblx0XHQn6bm5Jyxcblx0XSxcblxuXHQn56mXJzogW1xuXHRcdCfnqZcnLFxuXHRcdCfnqYInLFxuXHRdLFxuXG5cdCflu6InOiBbXG5cdFx0J+W7oicsXG5cdFx0J+W7gycsXG5cdFx0J+W6nycsXG5cdF0sXG5cblx0J+i5oCc6IFtcblx0XHQn6LmgJyxcblx0XHQn6LeWJyxcblx0XSxcblxuXHQn5ZCSJzogW1xuXHRcdCflkJInLFxuXHRcdCflkqQnLFxuXHRdLFxuXG5cdCflibcnOiBbXG5cdFx0J+WJtycsXG5cdFx0J+mPnycsXG5cdFx0J+mTsicsXG5cdFx0J+WIrCcsXG5cdFx0J+WJlycsXG5cdF0sXG5cblx0J+aTlyc6IFtcblx0XHQn5pOXJyxcblx0XHQn5YqIJyxcblx0XSxcblxuXHQn5qC4JzogW1xuXHRcdCfmoLgnLFxuXHRcdCfopognLFxuXHRdLFxuXG5cdCfohKMnOiBbXG5cdFx0J+iEoycsXG5cdFx0J+WUhycsXG5cdFx0J+WUhycsXG5cdF0sXG5cblx0J+WNhyc6IFtcblx0XHQn5Y2HJyxcblx0XHQn5piHJyxcblx0XSxcblxuXHQn56OQJzogW1xuXHRcdCfno5AnLFxuXHRcdCfnm6QnLFxuXHRcdCfnm5gnLFxuXHRdLFxuXG5cdCfmuqonOiBbXG5cdFx0J+a6qicsXG5cdFx0J+a4kycsXG5cdF0sXG5cblx0J+iwvyc6IFtcblx0XHQn6LC/Jyxcblx0XHQn5bWgJyxcblx0XSxcblxuXHQn5oqYJzogW1xuXHRcdCfmipgnLFxuXHRcdCfmkbonLFxuXHRdLFxuXG5cdCfnpZAnOiBbXG5cdFx0J+elkCcsXG5cdFx0J+S9kScsXG5cdF0sXG5cblx0J+eTric6IFtcblx0XHQn55OuJyxcblx0XHQn572LJyxcblx0XHQn55SVJyxcblx0XSxcblxuXHQn6LmkJzogW1xuXHRcdCfouaQnLFxuXHRcdCfouKonLFxuXHRcdCfouKgnLFxuXHRdLFxuXG5cdCfmmpcnOiBbXG5cdFx0J+mXhycsXG5cdFx0J+aalycsXG5cdF0sXG5cblx0J+aYtSc6IFtcblx0XHQn5pi1Jyxcblx0XHQn5pqxJyxcblx0XSxcblxuXHQn5biDJzogW1xuXHRcdCfluIMnLFxuXHRcdCfkvYgnLFxuXHRdLFxuXG5cdCfngronOiBbXG5cdFx0J+eCuicsXG5cdFx0J+S4uicsXG5cdFx0J+eIsicsXG5cdF0sXG5cblx0J+e2syc6IFtcblx0XHQn57azJyxcblx0XHQn57mDJyxcblx0XHQn57u3Jyxcblx0XSxcblxuXHQn55e6JzogW1xuXHRcdCfnl7onLFxuXHRcdCfnl7knLFxuXHRdLFxuXG5cdCfnl7InOiBbXG5cdFx0J+eXsicsXG5cdFx0J+eXsycsXG5cdF0sXG5cblx0J+mbhyc6IFtcblx0XHQn6ZuHJyxcblx0XHQn5YOxJyxcblx0XSxcblxuXHQn5pWYJzogW1xuXHRcdCfmlZgnLFxuXHRcdCflj5knLFxuXHRcdCfmlY0nLFxuXHRdLFxuXG5cdCfnm6onOiBbXG5cdFx0J+ebqicsXG5cdFx0J+iVqScsXG5cdFx0J+iNoScsXG5cdF0sXG5cblx0J+WLmyc6IFtcblx0XHQn5YubJyxcblx0XHQn5YuzJyxcblx0XHQn5YuLJyxcblx0XHQn5YuyJyxcblx0XSxcblxuXHQn56WVJzogW1xuXHRcdCfnpZUnLFxuXHRcdCfnp5gnLFxuXHRdLFxuXG5cdCfniYYnOiBbXG5cdFx0J+eJhicsXG5cdFx0J+WimScsXG5cdFx0J+WiuycsXG5cdF0sXG5cblx0J+eIvic6IFtcblx0XHQn54i+Jyxcblx0XHQn5bCUJyxcblx0XHQn5bCTJyxcblx0XSxcblxuXHQn54SwJzogW1xuXHRcdCfnhLAnLFxuXHRcdCfnhJQnLFxuXHRdLFxuXG5cdCfpu5gnOiBbXG5cdFx0J+m7mCcsXG5cdFx0J+m7mScsXG5cdF0sXG5cblx0J+Wjkyc6IFtcblx0XHQn5aOTJyxcblx0XHQn5Y6LJyxcblx0XHQn5ZynJyxcblx0XSxcblxuXHQn5bu4JzogW1xuXHRcdCflu7gnLFxuXHRcdCfov6onLFxuXHRdLFxuXG5cdCfmm4knOiBbXG5cdFx0J+abiScsXG5cdFx0J+aZkycsXG5cdFx0J+aagScsXG5cdF0sXG5cblx0J+mcuCc6IFtcblx0XHQn6Zy4Jyxcblx0XHQn6KaHJyxcblx0XSxcblxuXHQn6ZyKJzogW1xuXHRcdCfpnIonLFxuXHRcdCfpnYgnLFxuXHRcdCfngbUnLFxuXHRdLFxuXG5cdCfms6onOiBbXG5cdFx0J+azqicsXG5cdFx0J+a2mScsXG5cdFx0J+a3micsXG5cdF0sXG5cblx0J+eJuic6IFtcblx0XHQn54m6Jyxcblx0XHQn54qgJyxcblx0XHQn54qnJyxcblx0XSxcblxuXHQn6JeJJzogW1xuXHRcdCfol4knLFxuXHRcdCfogKQnLFxuXHRdLFxuXG5cdCflmbgnOiBbXG5cdFx0J+WZuCcsXG5cdFx0J+WQqCcsXG5cdF0sXG5cblx0J+S/sSc6IFtcblx0XHQn5L+xJyxcblx0XHQn5YC2Jyxcblx0XSxcblxuXHQn57K9JzogW1xuXHRcdCfnsr0nLFxuXHRcdCfns4knLFxuXHRcdCfns60nLFxuXHRdLFxuXG5cdCflkJEnOiBbXG5cdFx0J+WQkScsXG5cdFx0J+abjycsXG5cdFx0J+WaricsXG5cdF0sXG5cblx0J+aCvSc6IFtcblx0XHQn5oK9Jyxcblx0XHQn5reSJyxcblx0XHQn5YeEJyxcblx0XSxcblxuXHQn6bG3JzogW1xuXHRcdCfpsbcnLFxuXHRcdCfpsJAnLFxuXHRcdCfps4QnLFxuXHRdLFxuXG5cdCfmu7cnOiBbXG5cdFx0J+a7tycsXG5cdFx0J+m5tScsXG5cdFx0J+WNpCcsXG5cdF0sXG5cblx0J+minCc6IFtcblx0XHQn6aKcJyxcblx0XHQn6aGPJyxcblx0XHQn6aGUJyxcblx0XSxcblxuXHQn6KGdJzogW1xuXHRcdCfooZ0nLFxuXHRcdCfmspYnLFxuXHRcdCflhrInLFxuXHRdLFxuXG5cdCfmqJEnOiBbXG5cdFx0J+aokScsXG5cdFx0J+aigScsXG5cdF0sXG5cblx0J+eggic6IFtcblx0XHQn56CCJyxcblx0XHQn5rKZJyxcblx0XSxcblxuXHQn54KtJzogW1xuXHRcdCfngq0nLFxuXHRcdCfnorMnLFxuXHRdLFxuXG5cdCfns7gnOiBbXG5cdFx0J+ezuCcsXG5cdFx0J+e1sicsXG5cdFx0J+S4nScsXG5cdF0sXG5cblx0J+ewtyc6IFtcblx0XHQn57C3Jyxcblx0XHQn5qqQJyxcblx0XSxcblxuXHQn5raMJzogW1xuXHRcdCfmtownLFxuXHRcdCfmuacnLFxuXHRdLFxuXG5cdCfns5MnOiBbXG5cdFx0J+epgCcsXG5cdFx0J+ezkycsXG5cdF0sXG5cblx0J+S4oSc6IFtcblx0XHQn5LihJyxcblx0XHQn5LikJyxcblx0XHQn5YWpJyxcblx0XSxcblxuXHQn5a62JzogW1xuXHRcdCflrrYnLFxuXHRcdCflgqInLFxuXHRdLFxuXG5cdCflprMnOiBbXG5cdFx0J+WmsycsXG5cdFx0J+S9oCcsXG5cdF0sXG5cblx0J+WluSc6IFtcblx0XHQn5aW5Jyxcblx0XHQn5LuWJyxcblx0XSxcblxuXHQn6JekJzogW1xuXHRcdCfol6QnLFxuXHRcdCfnsZAnLFxuXHRcdCfnsZgnLFxuXHRdLFxuXG5cdCflrIknOiBbXG5cdFx0J+WsiScsXG5cdFx0J+WYuycsXG5cdF0sXG5cblx0J+S6mCc6IFtcblx0XHQn5LqYJyxcblx0XHQn5LqZJyxcblx0XSxcblxuXHQn5oGGJzogW1xuXHRcdCfmgYYnLFxuXHRcdCfmgZInLFxuXHRdLFxuXG5cdCfptocnOiBbXG5cdFx0J+m2hycsXG5cdFx0J+m2qycsXG5cdFx0J+m4qycsXG5cdF0sXG5cblx0J+WniSc6IFtcblx0XHQn5aeJJyxcblx0XHQn5aeQJyxcblx0XHQn5aeKJyxcblx0XSxcblxuXHQn5YmBJzogW1xuXHRcdCfliYEnLFxuXHRcdCfliLQnLFxuXHRdLFxuXG5cdCfms4QnOiBbXG5cdFx0J+azhCcsXG5cdFx0J+a0qScsXG5cdF0sXG5cblx0J+iIlic6IFtcblx0XHQn6IiWJyxcblx0XHQn6ZO6Jyxcblx0XHQn6YuqJyxcblx0XHQn6IiXJyxcblx0XSxcblxuXHQn5pWIJzogW1xuXHRcdCfmlYgnLFxuXHRcdCflirknLFxuXHRdLFxuXG5cdCfllrsnOiBbXG5cdFx0J+WWuycsXG5cdFx0J+WWqScsXG5cdF0sXG5cblx0J+aPkic6IFtcblx0XHQn5oy/Jyxcblx0XHQn5o+SJyxcblx0XHQn5o+3Jyxcblx0XSxcblxuXHQn6YqzJzogW1xuXHRcdCfpirMnLFxuXHRcdCfpi60nLFxuXHRcdCfplJAnLFxuXHRdLFxuXG5cdCfmrIonOiBbXG5cdFx0J+asiicsXG5cdFx0J+aoqScsXG5cdFx0J+adgycsXG5cdF0sXG5cblx0J+e1jCc6IFtcblx0XHQn57WMJyxcblx0XHQn57aTJyxcblx0XHQn57uPJyxcblx0XSxcblxuXHQn5q2TJzogW1xuXHRcdCfmrZMnLFxuXHRcdCfmraEnLFxuXHRcdCfmrKInLFxuXHRdLFxuXG5cdCflrYMnOiBbXG5cdFx0J+WsoicsXG5cdFx0J+WtgycsXG5cdF0sXG5cblx0J+a4iCc6IFtcblx0XHQn5riIJyxcblx0XHQn5r+fJyxcblx0XHQn5rWOJyxcblx0XSxcblxuXHQn5pS2JzogW1xuXHRcdCflj44nLFxuXHRcdCfmlLYnLFxuXHRdLFxuXG5cdCfntqAnOiBbXG5cdFx0J+e2oCcsXG5cdFx0J+e3kScsXG5cdFx0J+e7vycsXG5cdF0sXG5cblx0J+WUlic6IFtcblx0XHQn5ZSWJyxcblx0XHQn5ZWeJyxcblx0XHQn5ZORJyxcblx0XSxcblxuXHQn5Ym/JzogW1xuXHRcdCflib8nLFxuXHRcdCfli6YnLFxuXHRcdCfwoJ6wJyxcblx0XSxcblxuXHQn56aNJzogW1xuXHRcdCfnpo0nLFxuXHRcdCfvqZInLFxuXHRcdCfnpbgnLFxuXHRdLFxuXG5cdC4uLmpwTGlzdExhenlBbGxNYXAoW1xuXHRcdCfllrYnLFxuXHRcdCfnlKMnLFxuXHRcdCfmn7snLFxuXHRcdCfntbUnLFxuXHRcdCfmh5AnLFxuXHRcdCfph4gnLFxuXHRcdCfolLUnLFxuXHRcdCflqK8nLFxuXHRcdCfnhLwnLFxuXHRcdCfmi6EnLFxuXHRcdCfos44nLFxuXHRcdCfpiq0nLFxuXHRcdCfpm5EnLFxuXHRcdCfogbQnLFxuXHRcdCfluK8nLFxuXHRcdCfplrInLFxuXHRcdCfopqcnLFxuXHRcdCfmgqonLFxuXHRcdCfkupwnLFxuXHRcdCfmsLcnLFxuXHRdIGFzIGNvbnN0KSxcblxuXHQn5L6uJzogW1xuXHRcdCfkvq4nLFxuXHRcdCfvqLAnLFxuXHRdLFxuXG5cdCfmsoknOiBbXG5cdFx0J+ayiScsXG5cdFx0J+ayiCcsXG5cdF0sXG5cblx0J+WakCc6IFtcblx0XHQn5ZqQJyxcblx0XHQn5ZiXJyxcblx0XHQn5bCdJyxcblx0XSxcblxuXHQn5pC+JzogW1xuXHRcdCfmkL4nLFxuXHRcdCfmpqgnLFxuXHRdLFxuXG5cdCfojrcnOiBbXG5cdFx0J+iOtycsXG5cdFx0J+eNsicsXG5cdFx0J+epqycsXG5cdF0sXG5cblx0J+e5ric6IFtcblx0XHQn57muJyxcblx0XHQn57ywJyxcblx0XHQn6Z+BJyxcblx0XSxcblxufSBhcyBjb25zdDtcblxuLyoqXG4gKiDmraTooajlhafnrKblkIjku6XkuIvku7vmhI/lgLzmmYLmnIPop7jnmbxcbiAqL1xuZXhwb3J0IGNvbnN0IHRhYmxlX3BsdXMgPSBfYnVpbGRUYWJsZVBsdXModGFibGVfcGx1c19jb3JlKTtcblxuLyoqXG4gKiDmraTooajlhaflj6rmnInnrKblkIggS0VZIOWAvOaZguaJjeacg+inuOeZvFxuICovXG5leHBvcnQgY29uc3QgdGFibGVfanAgPSBfbWVyZ2VUYWJsZSh0YWJsZV9qcF9jb3JlLCB0YWJsZV9wbHVzKTtcblxuX3VuaXF1ZVRhYmxlKHRhYmxlX2pwKTtcblxudHlwZSBJQXJyYXlPclJlYWRvbmx5PFU+ID0gVVtdIHwgcmVhZG9ubHkgVVtdO1xuXG5leHBvcnQgZnVuY3Rpb24gX3VuaXF1ZVRhYmxlPFQgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCBJQXJyYXlPclJlYWRvbmx5PHN0cmluZz4+Pih0YWJsZV9qcDogVClcbntcblx0T2JqZWN0LmtleXModGFibGVfanApXG5cdFx0LmZvckVhY2goZnVuY3Rpb24gKGtleSlcblx0XHR7XG5cdFx0XHQvLyBAdHMtaWdub3JlXG5cdFx0XHR0YWJsZV9qcFtrZXldID0gYXJyYXlfdW5pcXVlKHRhYmxlX2pwW2tleV0pO1xuXHRcdH0pXG5cdDtcblxuXHRyZXR1cm4gdGFibGVfanA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfYnVpbGRUYWJsZVBsdXM8VCBleHRlbmRzIHN0cmluZywgVSBleHRlbmRzIHN0cmluZz4odGFibGVfcGx1czogUmVjb3JkPFQsIElBcnJheU9yUmVhZG9ubHk8VT4+KTogUmVjb3JkPFUgfCBULCBzdHJpbmdbXT5cbntcblx0T2JqZWN0LmtleXModGFibGVfcGx1cylcblx0XHQuZm9yRWFjaChmdW5jdGlvbiAoa2V5KVxuXHRcdHtcblx0XHRcdHRhYmxlX3BsdXNba2V5XSA9IGFycmF5X3VuaXF1ZSh0YWJsZV9wbHVzW2tleV0pO1xuXG5cdFx0XHR0YWJsZV9wbHVzW2tleV0uZm9yRWFjaChmdW5jdGlvbiAocylcblx0XHRcdHtcblx0XHRcdFx0dGFibGVfcGx1c1tzXSA9IHRhYmxlX3BsdXNba2V5XTtcblx0XHRcdH0pXG5cdFx0fSlcblx0O1xuXG5cdC8vIEB0cy1pZ25vcmVcblx0cmV0dXJuIHRhYmxlX3BsdXNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9tZXJnZVRhYmxlPFQgZXh0ZW5kcyBzdHJpbmcsIFUgZXh0ZW5kcyBzdHJpbmc+KHRhYmxlX2pwOiBSZWNvcmQ8VCwgSUFycmF5T3JSZWFkb25seTxzdHJpbmc+Pixcblx0dGFibGVfcGx1czogUmVjb3JkPFUsIElBcnJheU9yUmVhZG9ubHk8c3RyaW5nPj4sXG4pOiBSZWNvcmQ8VSB8IFQsIHN0cmluZ1tdPlxue1xuXHQvLyBAdHMtaWdub3JlXG5cdHJldHVybiBkZWVwbWVyZ2UodGFibGVfanAsIHRhYmxlX3BsdXMpO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElTaW1wbGVUYWJsZVxue1xuXHRba2V5OiBzdHJpbmddOiBzdHJpbmcsXG59XG5cbmV4cG9ydCBsZXQgX3RhYmxlX2NuOiBJU2ltcGxlVGFibGUgPSBfdXBkYXRlKHt9LCBfdGFibGVfdHcpO1xuXG5leHBvcnQgZnVuY3Rpb24gX3VwZGF0ZSh0YXJnZXQ6IElTaW1wbGVUYWJsZSwgc291cmNlOiBJU2ltcGxlVGFibGUpOiBJU2ltcGxlVGFibGVcbntcblx0dGFyZ2V0ID0gT2JqZWN0LmtleXMoc291cmNlKVxuXHRcdC5yZWR1Y2UoZnVuY3Rpb24gKGEsIGIpXG5cdFx0e1xuXHRcdFx0YVtzb3VyY2VbYl1dID0gYjtcblxuXHRcdFx0cmV0dXJuIGE7XG5cdFx0fSwge30pXG5cdDtcblxuXHRyZXR1cm4gdGFyZ2V0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX2dldChhcnI6IHN0cmluZ1tdLCB2YWx1ZTogc3RyaW5nIHwgc3RyaW5nW10sIC4uLnZhbHVlczogQXJyYXk8c3RyaW5nIHwgc3RyaW5nW10+KTogc3RyaW5nW11cbntcblx0bGV0IHJldDogc3RyaW5nW10gPSBbXVxuXHRcdC5jb25jYXQodmFsdWUpXG5cdFx0LmNvbmNhdCguLi52YWx1ZXMpXG5cdFx0LmZpbHRlcihmdW5jdGlvbiAodilcblx0XHR7XG5cdFx0XHRyZXR1cm4gdjtcblx0XHR9KVxuXHQ7XG5cblx0Ly9yZXQubGVuZ3RoICYmIHJldC5zb3J0KCk7XG5cblx0cmV0dXJuIHJldDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGpwKGNoYXI6IHN0cmluZywgb3B0aW9uczogSU9wdGlvbnMgPSB7fSk6IHN0cmluZ1tdXG57XG5cdGxldCBhOiBzdHJpbmdbXSA9IFtdO1xuXHRhID0gX2dldChhLCB0YWJsZV9qcFtjaGFyXSk7XG5cblx0cmV0dXJuIGE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0dyhjaGFyOiBzdHJpbmcsIG9wdGlvbnM6IElPcHRpb25zID0ge30pOiBzdHJpbmdbXVxue1xuXHRsZXQgYTogc3RyaW5nW10gPSBbXTtcblxuXHRhID0gX2dldChhLCBfdGFibGVfdHdbY2hhcl0sIGNuMnR3KGNoYXIsIG9wdGlvbnMpKTtcblxuXHQvL2NvbnNvbGUubG9nKCdjbjJ0dycsIGNoYXIsIGEpO1xuXG5cdHJldHVybiBhO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY24oY2hhcjogc3RyaW5nLCBvcHRpb25zOiBJT3B0aW9ucyA9IHt9KTogc3RyaW5nW11cbntcblx0bGV0IGE6IHN0cmluZ1tdID0gW107XG5cblx0YSA9IF9nZXQoYSwgX3RhYmxlX2NuW2NoYXJdLCB0dzJjbihjaGFyLCBvcHRpb25zKSk7XG5cblx0Ly9jb25zb2xlLmxvZygndHcyY24nLCBjaGFyLCBhKTtcblxuXHRyZXR1cm4gYTtcbn1cblxudHlwZSBJUmVjb3JkTWFwPEsgZXh0ZW5kcyBzdHJpbmc+ID0ge1xuXHRbUCBpbiBLXTogKFAgJiBzdHJpbmcpW11cbn07XG5cbmZ1bmN0aW9uIGpwTGlzdExhenlBbGxNYXA8VCBleHRlbmRzIHN0cmluZz4oYXJyOiBJVFNBcnJheUxpc3RNYXliZVJlYWRvbmx5PFQ+KVxue1xucmV0dXJuIChhcnIgYXMgVFtdKS5yZWR1Y2UoKGEsIGIpID0+IHtcblx0YVtiXSA9IGpwTGlzdExhenlBbGwoYik7XG5cdHJldHVybiBhO1xufSwge30gYXMgSVJlY29yZE1hcDxUPilcbn1cblxuZnVuY3Rpb24ganBMaXN0TGF6eUFsbDxUIGV4dGVuZHMgc3RyaW5nPihjaGFyOiBUKTogKFQgJiBzdHJpbmcpW11cbntcblx0cmV0dXJuIF9qcExpc3RMYXp5QWxsKGNoYXIsIHtcblx0XHRzYWZlOiBmYWxzZSxcblx0XHRpbmNsdWRlU2VsZjogdHJ1ZSxcblx0fSkgYXMgYW55XG59XG5cbmV4cG9ydCBkZWZhdWx0IGV4cG9ydHMgYXMgdHlwZW9mIGltcG9ydCgnLi90YWJsZScpO1xuIl19
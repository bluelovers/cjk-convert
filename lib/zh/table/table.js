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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YWJsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7O0dBRUc7O0FBR0gsNENBQWdEO0FBQ2hELDJEQUFrRDtBQUNsRCw0Q0FBNkM7QUFDN0Msd0NBQTBEO0FBRy9DLFFBQUEsU0FBUyxHQUFHO0lBQ3RCLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0NBQ0MsQ0FBQztBQUVYOztHQUVHO0FBQ0gsSUFBSSxhQUFhLEdBQUc7SUFDbkIsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILHFCQUFxQjtRQUNyQixHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxNQUFNO1FBQ04sR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FFSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxJQUFJLEVBQUU7UUFDTCxJQUFJO1FBQ0osR0FBRztLQUNIO0lBRUQ7Ozs7O01BS0U7SUFFRixHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO0tBQ0g7Q0FFUSxDQUFDO0FBRVg7O0dBRUc7QUFDSCxJQUFJLGVBQWUsR0FBRztJQUNyQixHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBRUg7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILElBQUk7S0FDSjtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxJQUFJO0tBQ0o7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELG1EQUFtRDtJQUNuRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FFSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUVILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBR0g7SUFFRCxHQUFHLEVBQUU7UUFDSixNQUFNO1FBQ04sTUFBTTtRQUNOLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxNQUFNO1FBQ04sR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxJQUFJO1FBRUosR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILElBQUk7S0FDSjtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxJQUFJO1FBQ0osSUFBSTtRQUNKLElBQUk7UUFDSixHQUFHO1FBQ0gsSUFBSTtLQUNKO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILE1BQU07UUFDTixHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILElBQUk7UUFDSixJQUFJO1FBQ0osSUFBSTtLQUNKO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRixTQUFTO0lBQ1QsUUFBUTtJQUNSLFFBQVE7SUFDUixLQUFLO0lBRUosR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxJQUFJO0tBQ0o7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxJQUFJO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILElBQUk7S0FDSjtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILElBQUk7UUFDSixHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsSUFBSTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBRUQsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFFRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUVELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FB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QUMsRUFBRSxFQUFFO1FBQ25DLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEIsT0FBTyxDQUFDLENBQUM7SUFDVixDQUFDLEVBQUUsRUFBbUIsQ0FBQyxDQUFBO0FBQ3ZCLENBQUM7QUFFRCxTQUFTLGFBQWEsQ0FBbUIsSUFBTztJQUUvQyxPQUFPLGNBQWMsQ0FBQyxJQUFJLEVBQUU7UUFDM0IsSUFBSSxFQUFFLEtBQUs7UUFDWCxXQUFXLEVBQUUsSUFBSTtLQUNqQixDQUFRLENBQUE7QUFDVixDQUFDO0FBRUQsa0JBQWUsT0FBbUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSB1c2VyIG9uIDIwMTgvMi8xNy8wMTcuXG4gKi9cblxuaW1wb3J0IHsgSU9wdGlvbnMgfSBmcm9tICcuLi9jb252ZXJ0L2NvcmUnO1xuaW1wb3J0IHsgdHcyY24sIGNuMnR3IH0gZnJvbSAnLi4vY29udmVydC9pbmRleCc7XG5pbXBvcnQgeyBhcnJheV91bmlxdWUgfSBmcm9tICdhcnJheS1oeXBlci11bmlxdWUnO1xuaW1wb3J0IGRlZXBtZXJnZSA9IHJlcXVpcmUoJ2RlZXBtZXJnZS1wbHVzJyk7XG5pbXBvcnQgeyBsYXp5QWxsIGFzIF9qcExpc3RMYXp5QWxsIH0gZnJvbSAnLi4vLi4vanAvbGlzdCc7XG5pbXBvcnQgeyBJVFNBcnJheUxpc3RNYXliZVJlYWRvbmx5IH0gZnJvbSAndHMtdHlwZSc7XG5cbmV4cG9ydCBsZXQgX3RhYmxlX3R3ID0ge1xuXHQn572XJzogJ+e+hScsXG5cdCfmgbYnOiAn5oOhJyxcblx0J+iLjyc6ICfomIcnLFxuXHQn6aaGJzogJ+mkqCcsXG59IGFzIGNvbnN0O1xuXG4vKipcbiAqIOatpOihqOWFp+WPquacieespuWQiCBLRVkg5YC85pmC5omN5pyD6Ke455m8XG4gKi9cbmxldCB0YWJsZV9qcF9jb3JlID0ge1xuXHQn44GuJzogW1xuXHRcdCfjga4nLFxuXHRcdCfkuYsnLFxuXHRcdCfnmoQnLFxuXHRdLFxuXG5cdCfjgagnOiBbXG5cdFx0J+OBqCcsXG5cdFx0J+iIhycsXG5cdFx0J+S4jicsXG5cdF0sXG5cblx0J+eUuyc6IFtcblx0XHQn5YiSJyxcblx0XHQn55S7Jyxcblx0XHQn5YqDJyxcblx0XHQn55WrJyxcblx0XSxcblx0J+mXmCc6IFtcblx0XHQn5paXJyxcblx0XSxcblx0J+mspSc6IFtcblx0XHQn5paXJyxcblx0XSxcblx0J+msrSc6IFtcblx0XHQn5paXJyxcblx0XSxcblx0J+msqic6IFtcblx0XHQn5paXJyxcblx0XSxcblx0J+mXhyc6IFtcblx0XHQn5pqXJyxcblx0XSxcblx0J+Wbsyc6IFtcblx0XHQn5ZuzJyxcblx0XHQn5ZyWJyxcblx0XHQn5Zu+Jyxcblx0XSxcblx0J+W9kyc6IFtcblx0XHQn5b2TJyxcblx0XHQn5Zm5Jyxcblx0XHQn55W2Jyxcblx0XHQn5YSFJyxcblx0XSxcblxuXHQn6ZakJzogW1xuXHRcdCflkIgnLFxuXHRdLFxuXHQn6ZiBJzogW1xuXHRcdCflkIgnLFxuXHRdLFxuXG5cdCfnvZcnOiBbXG5cdFx0J+e+hScsXG5cdFx0J+e9lycsXG5cdFx0J+WEuCcsXG5cdFx0J+ORqScsXG5cdFx0J+WbiScsXG5cdFx0J+WVsCcsXG5cdF0sXG5cblx0J+W5sic6IFtcblx0XHQn5bm5Jyxcblx0XHQn5Lm+Jyxcblx0XHQn5bmyJyxcblx0XSxcblxuXHQn5bm5JzogW1xuXHRcdCflubknLFxuXHRcdCflubInLFxuXHRdLFxuXG5cdCfkub4nOiBbXG5cdFx0J+W5sicsXG5cdFx0J+S5vicsXG5cdFx0J+S6gScsXG5cdFx0J+S5uScsXG5cdF0sXG5cdCfkuoEnOiBbXG5cdFx0J+S5vicsXG5cdFx0J+S6gScsXG5cdFx0J+S5uScsXG5cdF0sXG5cdCfkubknOiBbXG5cdFx0J+S5vicsXG5cdFx0J+S6gScsXG5cdFx0J+S5uScsXG5cdF0sXG5cblx0J+WOhic6IFtcblx0XHQn5Y6GJyxcblx0XHQn5q20Jyxcblx0XHQn5q23Jyxcblx0XHQn5pqmJyxcblx0XHQn5puGJyxcblx0XSxcblxuXHQn5q20JzogW1xuXHRcdCfljoYnLFxuXHRdLFxuXHQn5q23JzogW1xuXHRcdCfljoYnLFxuXHRdLFxuXHQn5pqmJzogW1xuXHRcdCfljoYnLFxuXHRdLFxuXHQn5puGJzogW1xuXHRcdCfljoYnLFxuXHRdLFxuXG5cdCflkbsnOiBbXG5cdFx0J+WRuycsXG5cdFx0J+eUsycsXG5cdF0sXG5cblx0J+imhic6IFtcblx0XHQn6KaGJyxcblx0XHQn5aSNJyxcblx0XSxcblxuXHQn5YuJJzogW1xuXHRcdCflhY0nLFxuXHRdLFxuXG5cdCfvqLMnOiBbXG5cdFx0J+WFjScsXG5cdF0sXG5cblx0J+eUpic6IFtcblx0XHQn55SmJyxcblx0XHQn6JiHJyxcblx0XHQn6IuPJyxcblx0XSxcblxuXHQn5b+nJzogW1xuXHRcdCfmhoInLFxuXHRcdCflhKonLFxuXHRdLFxuXG5cdCfpubknOiBbXG5cdFx0J+WSuCcsXG5cdFx0J+m5uScsXG5cdF0sXG5cblx0J+WHhic6IFtcblx0XHQn5rqWJyxcblx0XHQn5YeGJyxcblx0XSxcblxuXHQn5rqWJzogW1xuXHRcdCfmupYnLFxuXHRcdCflh4YnLFxuXHRdLFxuXG5cdCfooq4nOiBbXG5cdFx0J+iiricsXG5cdFx0Ly8g5Lim6Z2e55Ww6auU5a2XIOS9hueUseaWvOmBjuW6puebuOS8vCDlrrnmmJPpjK/oqqRcblx0XHQn56WiJyxcblx0XSxcblxuXHQn5YSYJzogW1xuXHRcdCflhJgnLFxuXHRcdCfkvq0nLFxuXHRdLFxuXG5cdCfkvq0nOiBbXG5cdFx0J+WEmCcsXG5cdFx0J+S+rScsXG5cdF0sXG5cblx0J+iEjyc6IFtcblx0XHQn6ISPJyxcblx0XHQn6auSJyxcblx0XHQn6IefJyxcblx0XSxcblxuXHQn5Y+RJzogW1xuXHRcdCfpq64nLFxuXHRcdCfpq6onLFxuXHRcdCflj5EnLFxuXHRdLFxuXG5cdCfpq64nOiBbXG5cdFx0J+eZvCcsXG5cdFx0J+WPkScsXG5cdF0sXG5cblx0J+aFvic6IFtcblx0XHQn5oW+Jyxcblx0XHQn5qyyJyxcblx0XSxcblxuXHQn6K6aJzogW1xuXHRcdCforoMnLFxuXHRcdCforponLFxuXHRcdCfotIonLFxuXHRcdCfotZ4nLFxuXHRcdCfos5snLFxuXHRdLFxuXG5cdCflhrInOiBbXG5cdFx0J+WGsicsXG5cdFx0J+aylicsXG5cdFx0J+ihnScsXG5cdF0sXG5cblx0J+mdoic6IFtcblx0XHQn6bq1Jyxcblx0XHQn6bqqJyxcblx0XHQn6bq6Jyxcblx0XSxcblxuXHQn6ayaJzogW1xuXHRcdCfprJonLFxuXHRcdCfpoIgnLFxuXHRcdCfpobsnLFxuXHRdLFxuXG5cdCfmj7knOiBbXG5cdFx0J+aPuScsXG5cdFx0J+iDjCcsXG5cdF0sXG5cblx0J+aNsic6IFtcblx0XHQn5o2yJyxcblx0XHQn5Y23Jyxcblx0XHQn5be7Jyxcblx0XSxcblxuXHQn5Y23JzogW1xuXHRcdCfmjbInLFxuXHRcdCfljbcnLFxuXHRcdCflt7snLFxuXHRcdCflirUnLFxuXHRcdCfliLgnLFxuXHRdLFxuXG5cdCflt7snOiBbXG5cdFx0J+aNsicsXG5cdFx0J+WNtycsXG5cdFx0J+W3uycsXG5cdFx0J+WKtScsXG5cdFx0J+WIuCcsXG5cdF0sXG5cblx0J+iLjyc6IFtcblx0XHQn6IuPJyxcblx0XHQn6JiHJyxcblx0XHQn55SmJyxcblx0XSxcblxuXHQn54CPJzogW1xuXHRcdCfngI8nLFxuXHRcdCfmtY8nLFxuXHRcdCfliJgnLFxuXHRdLFxuXHQn5rWPJzogW1xuXHRcdCfngI8nLFxuXHRcdCfmtY8nLFxuXHRcdCfliJgnLFxuXHRdLFxuXG5cdCflkIEnOiBbXG5cdFx0J+exsicsXG5cdFx0Ly8n6b6lJyxcblx0XHQn5ZCBJyxcblx0XSxcblxuXHQn5ZuJJzogW1xuXHRcdCflm4knLFxuXHRcdCfllbAnLFxuXHRcdCfnvZcnLFxuXHRcdCfnvoUnLFxuXHRdLFxuXG5cdCfllbAnOiBbXG5cdFx0J+WbiScsXG5cdFx0J+WVsCcsXG5cdFx0J+e9lycsXG5cdFx0J+e+hScsXG5cdF0sXG5cblx0J+S/ric6IFtcblx0XHQn5L+uJyxcblx0XHQn5L+iJyxcblx0XSxcblxuXHQn54qfJzogW1xuXHRcdCfnip8nLFxuXHRcdCflvLcnLFxuXHRcdCflvLonLFxuXHRdLFxuXG5cdCfll6wnOiBbXG5cdFx0J+WXrCcsXG5cdFx0J+WRtScsXG5cdF0sXG5cblx0J+WUvyc6IFtcblx0XHQn5ZS/Jyxcblx0XHQn5ZG8Jyxcblx0XSxcblxuXHQn5aquJzogW1xuXHRcdCflqq4nLFxuXHRcdCflgbcnLFxuXHRdLFxuXG5cdCfph4cnOiBbXG5cdFx0J+mHhycsXG5cdFx0J+aOoScsXG5cdFx0Ly8n5Z+wJyxcblx0XSxcblxuXHQn5b2pJzogW1xuXHRcdCflvaknLFxuXHRcdCfph4cnLFxuXHRdLFxuXG5cdCfwoKm6JzogW1xuXHRcdCfwoKm6Jyxcblx0XHQn6YeQJyxcblx0XSxcblxuXHQvKlxuXHQn55SaJzogW1xuXHRcdCfnlJonLFxuXHRcdCfku4AnLFxuXHRdLFxuXHQqL1xuXG5cdCfmgbYnOiBbXG5cdFx0J+aBticsXG5cdFx0J+WZgScsXG5cdFx0J+aDoScsXG5cdF0sXG5cblx0J+eCsCc6IFtcblx0XHQn54KwJyxcblx0XHQn54KuJyxcblx0XSxcblxuXHQn6L6fJzogW1xuXHRcdCfovp8nLFxuXHRcdCfpl6InLFxuXHRcdCfpgb8nLFxuXHRdLFxuXG5cdCfpgb8nOiBbXG5cdFx0J+i+nycsXG5cdFx0J+mBvycsXG5cdF0sXG5cblx0J+mXoic6IFtcblx0XHQn6L6fJyxcblx0XHQn6ZeiJyxcblx0XSxcblxuXHQn5ru3JzogW1xuXHRcdCfpra8nLFxuXHRcdCfpsoEnLFxuXHRdLFxuXG5cdCfpubUnOiBbXG5cdFx0J+mtrycsXG5cdFx0J+mygScsXG5cdF0sXG5cblx0J+WNpCc6IFtcblx0XHQn6a2vJyxcblx0XHQn6bKBJyxcblx0XSxcblxuXHQn5YSTJzogW1xuXHRcdCflhJMnLFxuXHRcdCfmqq8nLFxuXHRdLFxuXG5cdCfmqq8nOiBbXG5cdFx0J+WEkycsXG5cdFx0J+aqrycsXG5cdF0sXG5cblx0J+WPsCc6IFtcblx0XHQn5Y+wJyxcblx0XHQn5qqvJyxcblx0XHQn6Ie6Jyxcblx0XHQn6aKxJyxcblx0XSxcblxuXHQn57e0JzogW1xuXHRcdCfngrwnLFxuXHRdLFxuXG5cdCfnu4MnOiBbXG5cdFx0J+eCvCcsXG5cdF0sXG5cblx0J+e5qyc6IFtcblx0XHQn57O7Jyxcblx0XSxcblxuXHQn57mLJzogW1xuXHRcdCfns7snLFxuXHRdLFxuXG5cdCfns5MnOiBbXG5cdFx0J+iwtycsXG5cdF0sXG5cblx0J+epgCc6IFtcblx0XHQn6LC3Jyxcblx0XSxcblxuXHQn54mIJzogW1xuXHRcdCfmnb8nLFxuXHRdLFxuXG5cdCfnpZUnOiBbXG5cdFx0J+WvhicsXG5cdF0sXG5cblx0J+enmCc6IFtcblx0XHQn5a+GJyxcblx0XSxcblxufSBhcyBjb25zdDtcblxuLyoqXG4gKiDmraTooajlhafnrKblkIjku6XkuIvku7vmhI/lgLzmmYLmnIPop7jnmbxcbiAqL1xubGV0IHRhYmxlX3BsdXNfY29yZSA9IHtcblx0J+WKjSc6IFtcblx0XHQn5YqNJyxcblx0XHQn5YmRJyxcblx0XHQn5YmjJyxcblx0XHQn5YqOJyxcblx0XHQn5YqSJyxcblx0XHQn5YmxJyxcblx0XHQn5YqUJyxcblx0XSxcblx0J+egsic6IFtcblx0XHQn56CyJyxcblx0XHQn54KuJyxcblx0XSxcblx0J+WBvSc6IFtcblx0XHQn5YG9Jyxcblx0XHQn5YOeJyxcblx0XSxcblx0J+WFpyc6IFtcblx0XHQn5YWnJyxcblx0XHQn5YaFJyxcblx0XSxcblx0J+mspSc6IFtcblx0XHQn6aytJyxcblx0XHQn6aylJyxcblx0XHQn6ZeYJyxcblx0XHQn6ayqJyxcblx0XHQvLyfmlpcnLFxuXHRdLFxuXHQn6baPJzogW1xuXHRcdCfpto8nLFxuXHRcdCfpt4QnLFxuXHRcdCfpm54nLFxuXHRcdCfpuKEnLFxuXHRdLFxuXHQn5YWOJzogW1xuXHRcdCflhY4nLFxuXHRcdCflhZQnLFxuXHRdLFxuXHQn5Z2PJzogW1xuXHRcdCflna8nLFxuXHRcdCflnY8nLFxuXHRcdFwi5aOKXCIsXG5cdFx0XCLlo55cIixcblx0XSxcblx0J+auuyc6IFtcblx0XHQn5q67Jyxcblx0XHQn5q68Jyxcblx0XHQn5aOzJyxcblx0XSxcblx0J+WDjyc6IFtcblx0XHQn5YOPJyxcblx0XHQn6LGhJyxcblx0XSxcblx0J+iYhyc6IFtcblx0XHQn6IuPJyxcblx0XHQn6JiHJyxcblx0XHQn5ZuMJyxcblx0XSxcblx0J+mkqCc6IFtcblx0XHQn6aSoJyxcblx0XHQn76isJyxcblx0XHQn6IiYJyxcblx0XHQn6aaGJyxcblx0XSxcblx0J+mzpSc6IFtcblx0XHQn6bOlJyxcblx0XHQn6bifJyxcblx0XHQn8KugkycsXG5cdF0sXG5cdCfoppYnOiBbXG5cdFx0J+imlicsXG5cdFx0J++poScsXG5cdFx0J+inhicsXG5cdFx0J+ecjicsXG5cdF0sXG5cdCfpmbonOiBbXG5cdFx0J+mZuicsXG5cdFx0J+maqicsXG5cdFx0J+mZqScsXG5cdFx0J+W2ricsXG5cdFx0J+W0hCcsXG5cdF0sXG5cdCfntbYnOiBbXG5cdFx0J+e1ticsXG5cdFx0J+e1lScsXG5cdFx0J+e7nScsXG5cdF0sXG5cdCfpiYQnOiBbXG5cdFx0J+mJhCcsXG5cdFx0J+mQtScsXG5cdFx0J+mTgScsXG5cdFx0J+mQoScsXG5cdF0sXG5cdCfoq7gnOiBbXG5cdFx0J+iruCcsXG5cdFx0J++ooicsXG5cdFx0J+ivuCcsXG5cdF0sXG5cdCflsIsnOiBbXG5cdFx0J+WwiycsXG5cdFx0J+WvuycsXG5cdFx0J/ChrLYnLFxuXHRdLFxuXHQn6KOhJzogW1xuXHRcdCfoo6EnLFxuXHRcdCfoo48nLFxuXHRcdCfph4wnLFxuXHRdLFxuXHQn6ZGRJzogW1xuXHRcdCfpkZEnLFxuXHRcdCfpibQnLFxuXHRcdCfpkZInLFxuXHRdLFxuXHQn6bq1JzogW1xuXHRcdCfpurUnLFxuXHRcdCfpuqonLFxuXHRcdCfpuronLFxuXHRdLFxuXHQn5q2yJzogW1xuXHRcdCfmrbInLFxuXHRcdCfmrbMnLFxuXHRcdCflsoEnLFxuXHRdLFxuXHQvLyBodHRwczovL3poLndpa2lwZWRpYS5vcmcvd2lraS8lRTklOEQlQkUlRTUlQTclOTNcblx0J+mQmCc6IFtcblx0XHQn6ZCYJyxcblx0XHQn6Y2+Jyxcblx0XHQn6ZKfJyxcblx0XHQn6ZS6Jyxcblx0XSxcblx0J+acgyc6IFtcblx0XHQn5pyDJyxcblx0XHQn5LyaJyxcblx0XHQn45G5Jyxcblx0XSxcblx0J+Whlyc6IFtcblx0XHQn5aGXJyxcblx0XHQn5YeDJyxcblx0XHQn5raCJyxcblx0XSxcblxuXHQn6auuJzogW1xuXHRcdCfpq64nLFxuXHRcdCfpq6onLFxuXHRcdC8vJ+WPkScsXG5cdF0sXG5cblx0J+ipsSc6IFtcblx0XHQn6KmxJyxcblx0XHQn6K+dJyxcblx0XHQn5JuhJyxcblx0XSxcblxuXHQn6ZakJzogW1xuXHRcdCfplqQnLFxuXHRcdCfpmIEnLFxuXHRdLFxuXG5cdCfolJgnOiBbXG5cdFx0J+iUmCcsXG5cdFx0J+WPgycsXG5cdFx0J+WPgicsXG5cdF0sXG5cblx0J+WKtCc6IFtcblx0XHQn5Yq0Jyxcblx0XHQn5YueJyxcblx0XHQn5YqzJyxcblx0XSxcblxuXHQn5Zu9JzogW1xuXHRcdCflm70nLFxuXHRcdCflm68nLFxuXHRcdCflnIsnLFxuXHRdLFxuXG5cdCfnvbUnOiBbXG5cdFx0J+e9tScsXG5cdFx0J+mqgicsXG5cdFx0J+mnoScsXG5cdF0sXG5cblx0J+Wvvic6IFtcblx0XHQn5a++Jyxcblx0XHQn5bCNJyxcblx0XHQn5a+5Jyxcblx0XSxcblxuXHQn6Y+9JzogW1xuXHRcdCfpj70nLFxuXHRcdCfpirknLFxuXHRcdCfplIgnLFxuXHRdLFxuXG5cdCfpp4QnOiBbXG5cdFx0J+mnhCcsXG5cdFx0J+StvicsXG5cdFx0J+mmsScsXG5cdFx0J+mpricsXG5cdF0sXG5cblx0J+iWqSc6IFtcblx0XHQn6JapJyxcblx0XHQn6JCoJyxcblx0XHQn6JWvJyxcblx0XSxcblxuXHQn5Y2YJzogW1xuXHRcdCfljZgnLFxuXHRcdCfllq4nLFxuXHRcdCfljZUnLFxuXHRdLFxuXG5cdCfntpknOiBbXG5cdFx0J+e2mScsXG5cdFx0J+e5vCcsXG5cdFx0J+e7pycsXG5cdF0sXG5cblx0J+mplyc6IFtcblx0XHQn6amXJyxcblx0XHQn6aqMJyxcblx0XHQn6aiQJyxcblxuXHRcdCfpqJMnLFxuXHRdLFxuXG5cdCfmrbQnOiBbXG5cdFx0J+attCcsXG5cdFx0J+attycsXG5cdFx0Ly8n5pqmJyxcblx0XHQvLyfmm4YnLFxuXHRdLFxuXG5cdCfmmqYnOiBbXG5cdFx0Ly8n5q20Jyxcblx0XHQvLyfmrbcnLFxuXHRcdCfmmqYnLFxuXHRcdCfmm4YnLFxuXHRdLFxuXG5cdCflm6MnOiBbXG5cdFx0J+WboicsXG5cdFx0J+WboycsXG5cdFx0J+WcmCcsXG5cdF0sXG5cblx0J+m6vCc6IFtcblx0XHQn6bq8Jyxcblx0XHQn6bq9Jyxcblx0XHQn5bqFJyxcblx0XSxcblxuXHQn5oiwJzogW1xuXHRcdCfmiKYnLFxuXHRcdCfmiLAnLFxuXHRcdCfmiJgnLFxuXHRdLFxuXG5cdCfkuaEnOiBbXG5cdFx0J+mDtycsXG5cdFx0J+mElScsXG5cdFx0J+mEiScsXG5cdFx0J+mEiicsXG5cdFx0J+S5oScsXG5cdF0sXG5cblx0J+WLiSc6IFtcblx0XHQn5YuJJyxcblx0XHQn76izJyxcblx0XSxcblxuXHQn6aSYJzogW1xuXHRcdCfppJgnLFxuXHRcdCfppoAnLFxuXHRcdCfkvZknLFxuXHRdLFxuXG5cdCfntrInOiBbXG5cdFx0J+e2sicsXG5cdFx0J+SLhCcsXG5cdFx0J+SLnicsXG5cdFx0J+e9kScsXG5cdF0sXG5cblx0J+iolyc6IFtcblx0XHQn6KiXJyxcblx0XHQn6K6sJyxcblx0XHQvLyfkvoInLFxuXHRcdCfmiZgnLFxuXHRdLFxuXG5cdCfnupYnOiBbXG5cdFx0J+e6licsXG5cdFx0J+e6pCcsXG5cdFx0J+e4tCcsXG5cdFx0J+e5iicsXG5cdF0sXG5cblx0J+mNiic6IFtcblx0XHQn6Y2KJyxcblx0XHQn6YysJyxcblx0XHQn8KuUgCcsXG5cblx0XHQn54K8Jyxcblx0XHQn54WJJyxcblx0XSxcblxuXHQn5pOKJzogW1xuXHRcdCfmkoMnLFxuXHRcdCfmk4onLFxuXHRcdCflh7snLFxuXHRdLFxuXG5cdCflr6YnOiBbXG5cdFx0J+WvpicsXG5cdFx0J+WunycsXG5cdFx0J+WunicsXG5cdFx0J+WvlCcsXG5cdF0sXG5cblx0J+aWvCc6IFtcblx0XHQn5pa8Jyxcblx0XHQn5om1Jyxcblx0XSxcblxuXHQn6K2JJzogW1xuXHRcdCforYknLFxuXHRcdCfoqLwnLFxuXHRcdCfor4EnLFxuXHRdLFxuXG5cdCfmk5onOiBbXG5cdFx0J+aTmicsXG5cdFx0J+aNricsXG5cdFx0J+aLoCcsXG5cdF0sXG5cblx0J+iZlSc6IFtcblx0XHQn6JmVJyxcblx0XHQn5aSEJyxcblx0XHQn5JaPJyxcblx0XHQn5YemJyxcblx0XSxcblxuXHQn556qJzogW1xuXHRcdCfnnqonLFxuXHRcdCfnnqAnLFxuXHRcdCfnnJknLFxuXHRdLFxuXG5cdCfogqInOiBbXG5cdFx0J+iCoicsXG5cdFx0J+iDkScsXG5cdF0sXG5cblx0J+iCiSc6IFtcblx0XHQn6IKJJyxcblx0XHQn5a6NJyxcblx0XHQn8KCVjicsXG5cdF0sXG5cblx0J+aGgic6IFtcblx0XHQn5oaCJyxcblx0XHQn8KKdiicsXG5cdFx0J/CimqcnLFxuXHRcdCfwop+cJyxcblx0XHQn5oeuJyxcblx0XHQn8KiXqycsXG5cdF0sXG5cblx0J+e5qyc6IFtcblx0XHQn57mrJyxcblx0XHQvLyfns7snLFxuXHRcdCfnuYsnLFxuXHRdLFxuXG5cdCflu7snOiBbXG5cdFx0J+W7uycsXG5cdFx0J+i/tCcsXG5cdF0sXG5cblx0J+mMsic6IFtcblx0XHQn6YyyJyxcblx0XHQn6YyEJyxcblx0XHQn5b2VJyxcblx0XSxcblxuXHQn6Y6XJzogW1xuXHRcdCfpjpcnLFxuXHRcdCfmp40nLFxuXHRcdCfmnqonLFxuXHRdLFxuXG5cdCfmgqAnOiBbXG5cdFx0J+aCoCcsXG5cdFx0J+a7uicsXG5cdF0sXG5cblx0J+Wjtic6IFtcblx0XHQn5aO2Jyxcblx0XHQn5aO6Jyxcblx0XHQn5aO3Jyxcblx0XSxcblxuXHQn6IyyJzogW1xuXHRcdCfojLInLFxuXHRcdCflhbknLFxuXHRcdCfnjoYnLFxuXHRdLFxuXG5cdCfok4snOiBbXG5cdFx0J+iTiycsXG5cdFx0J+eblicsXG5cdFx0J+iRoicsXG5cdF0sXG5cblx0J+i5nyc6IFtcblx0XHQn6LmfJyxcblx0XHQn6LehJyxcblx0XHQn6L+5Jyxcblx0XSxcblxuXHQn55mSJzogW1xuXHRcdCfnmZInLFxuXHRcdCfnmIknLFxuXHRdLFxuXG5cdCfovronOiBbXG5cdFx0J+i+uicsXG5cdFx0J+mCiicsXG5cdFx0J+i+uScsXG5cdFx0J+mCiScsXG5cdF0sXG5cblx0J+a6lic6IFtcblx0XHQn5rqWJyxcblx0XHQn5YeWJyxcblx0XSxcblxuXHQn6KGbJzogW1xuXHRcdCfooZsnLFxuXHRcdCfooZ4nLFxuXHRcdCfljasnLFxuXHRdLFxuXG5cdCfmmZonOiBbXG5cdFx0J+aZmicsXG5cdFx0J+aZqScsXG5cdF0sXG5cblx0J+ijuCc6IFtcblx0XHQn6KO4Jyxcblx0XHQn6Lq2Jyxcblx0XSxcblxuXHQn5LqAJzogW1xuXHRcdCfkuoAnLFxuXHRcdCfpvpwnLFxuXHRcdCfpvp8nLFxuXHRcdCfwqpqnJyxcblx0XHQn8KqavycsXG5cdFx0J/Cgg74nLFxuXHRdLFxuXG5cdCflh7wnOiBbXG5cdFx0J+WHvCcsXG5cdFx0J+awuScsXG5cdF0sXG5cblx0J+iJuCc6IFtcblx0XHQn6Im4Jyxcblx0XHQn6I2JJyxcblx0XSxcblxuLy9cdCfmnK0nOiBbXG4vL1x0XHQn566aJyxcbi8vXHRcdCflibMnLFxuLy9cdF0sXG5cblx0J+eumic6IFtcblx0XHQn566aJyxcblx0XHQn5YmzJyxcblx0XSxcblxuXHQn5aSNJzogW1xuXHRcdCflpI0nLFxuXHRcdCflvqknLFxuXHRcdCfopIcnLFxuXHRdLFxuXG5cdCfmsaEnOiBbXG5cdFx0J+axoScsXG5cdFx0J+axmScsXG5cdFx0J+axmicsXG5cdF0sXG5cblx0J+S8mSc6IFtcblx0XHQn5LyZJyxcblx0XHQn5aSlJyxcblx0XSxcblxuXHQn5b6hJzogW1xuXHRcdCflvqEnLFxuXHRcdCfnpqYnLFxuXHRdLFxuXG5cdCfprLEnOiBbXG5cdFx0J+mssScsXG5cdFx0J+mDgScsXG5cdF0sXG5cblx0J+a3qSc6IFtcblx0XHQn5repJyxcblx0XHQn5YeMJyxcblx0XSxcblxuXHQn57SuJzogW1xuXHRcdCfntK4nLFxuXHRcdCfmiY4nLFxuXHRdLFxuXG5cdCfnl7QnOiBbXG5cdFx0J+eXtCcsXG5cdFx0J+eZoScsXG5cdF0sXG5cblx0J+aglic6IFtcblx0XHQn5qCWJyxcblx0XHQn5qOyJyxcblx0XSxcblxuXHQn54qHJzogW1xuXHRcdCfniocnLFxuXHRcdCflpZQnLFxuXHRdLFxuXG5cdCfnr4QnOiBbXG5cdFx0J+evhCcsXG5cdFx0J+iMgycsXG5cdF0sXG5cblx0J+iWkSc6IFtcblx0XHQn6JaRJyxcblx0XHQn5aecJyxcblx0XHQn6JGBJyxcblx0XSxcblxuXHQn5qi4JzogW1xuXHRcdCfmqLgnLFxuXHRcdCfmnLQnLFxuXHRdLFxuXG5cdCfoq64nOiBbXG5cdFx0J+irricsXG5cdFx0J+iwmCcsXG5cdFx0J+WSqCcsXG5cdF0sXG5cblx0J+aSmic6IFtcblx0XHQn5pKaJyxcblx0XHQn5o27Jyxcblx0XSxcblxuXHQn5ZaCJzogW1xuXHRcdCflloInLFxuXHRcdCfppLUnLFxuXHRcdCfppKcnLFxuXHRcdCfwq5etJyxcblx0XSxcblxuXHQn5reoJzogW1xuXHRcdCfmt6gnLFxuXHRcdCflh4gnLFxuXHRcdCflh4AnLFxuXHRdLFxuXG5cdCfmoJcnOiBbXG5cdFx0J+aglycsXG5cdFx0J+aFhCcsXG5cdF0sXG5cblx0J+aMvSc6IFtcblx0XHQn5oy9Jyxcblx0XHQn6LyTJyxcblx0XSxcblxuXHQn54G2JzogW1xuXHRcdCfngbYnLFxuXHRcdCfnq4gnLFxuXHRdLFxuXG5cdCfnt5onOiBbXG5cdFx0J+e3micsXG5cdFx0J+e8kCcsXG5cdFx0J+e2qycsXG5cdFx0J+e6vycsXG5cdF0sXG5cblx0J+eboSc6IFtcblx0XHQn55uhJyxcblx0XHQn5bC9Jyxcblx0XHQn5YSYJyxcblx0XSxcblxuXHQn6bu0JzogW1xuXHRcdCfpu7QnLFxuXHRcdCfpnIknLFxuXHRdLFxuXG5cdCflkagnOiBbXG5cdFx0J+WRqCcsXG5cdFx0J+mAsScsXG5cdF0sXG5cblx0J+S4pic6IFtcblx0XHQn5LimJyxcblx0XHQn5bm2Jyxcblx0XHQn5L21Jyxcblx0XSxcblxuXHQn6K6aJzogW1xuXHRcdCforponLFxuXHRcdCforoMnLFxuXHRdLFxuXG5cdCfoprMnOiBbXG5cdFx0J+imsycsXG5cdFx0J+ingCcsXG5cdFx0J+ingicsXG5cdFx0J+imjCcsXG5cdF0sXG5cblx0J+mBiic6IFtcblx0XHQn6YGKJyxcblx0XHQn5ri4Jyxcblx0XSxcblxuXHQn5ZCvJzogW1xuXHRcdCflkK8nLFxuXHRcdCfllZMnLFxuXHRcdCfllZ8nLFxuXHRcdCfllZQnLFxuXHRdLFxuXG5cdCflu4QnOiBbXG5cdFx0J+W7hCcsXG5cdFx0J+WOqScsXG5cdFx0J+W7kCcsXG5cdFx0J+W7jycsXG5cdF0sXG5cblx0J+awoyc6IFtcblx0XHQn5rCXJyxcblx0XHQn5rCjJyxcblx0XHQn5rCUJyxcblx0XSxcblxuXHQn5qyyJzogW1xuXHRcdCfmhb4nLFxuXHRcdCfmrLInLFxuXHRdLFxuXG5cdCflgpEnOiBbXG5cdFx0J+WCkScsXG5cdFx0J+adsCcsXG5cdF0sXG5cblx0J+mNmyc6IFtcblx0XHQn6Y2bJyxcblx0XHQn6ZS7Jyxcblx0XHQn54WFJyxcblx0XSxcblxuXHQn5b61JzogW1xuXHRcdCflvrUnLFxuXHRcdCflvrQnLFxuXHRdLFxuXG5cdCfplpInOiBbXG5cdFx0J+mWkicsXG5cdFx0J/CrlK4nLFxuXHRcdCfplpEnLFxuXHRcdCfpl7InLFxuXHRdLFxuXG5cdCfotIonOiBbXG5cdFx0J+i0iicsXG5cdFx0J+i1nicsXG5cdFx0J+izmycsXG5cdF0sXG5cblx0J+aruyc6IFtcblx0XHQn5qu7Jyxcblx0XHQn5qGcJyxcblx0XHQn5qixJyxcblx0XSxcblxuXHQn5bCoJzogW1xuXHRcdCflsKgnLFxuXHRcdCfni7UnLFxuXHRdLFxuXG5cdCflnIgnOiBbXG5cdFx0J+WciCcsXG5cdFx0J+WcjycsXG5cdF0sXG5cblx0J+WHtic6IFtcblx0XHQn5Ye2Jyxcblx0XHQn5YWHJyxcblx0XSxcblxuXHQn5rWcJzogW1xuXHRcdCfmtZwnLFxuXHRcdCfmv7EnLFxuXHRcdCfmu6gnLFxuXHRdLFxuXG5cdCfnhZknOiBbXG5cdFx0J+eFmScsXG5cdFx0J+eDnycsXG5cdFx0J+iPuCcsXG5cdF0sXG5cblx0J+m7kic6IFtcblx0XHQn6buSJyxcblx0XHQn6buRJyxcblx0XSxcblxuXHQn5qiCJzogW1xuXHRcdCfmqIInLFxuXHRcdCfkuZAnLFxuXHRcdCfmpb0nLFxuXHRdLFxuXG5cdCfolqwnOiBbXG5cdFx0J+iWrCcsXG5cdFx0J+iXpScsXG5cdFx0J+iNrycsXG5cdFx0J+iRrycsXG5cdFx0J/Cjm5knLFxuXHRdLFxuXG5cdCflirUnOiBbXG5cdFx0J+WKtScsXG5cdFx0J+WIuCcsXG5cdFx0J+WNtycsXG5cdF0sXG5cblx0J+iysyc6IFtcblx0XHQn6LKzJyxcblx0XHQn6LSwJyxcblx0XHQn5byQJyxcblx0XHQn6LKuJyxcblx0XHQn8KKOkCcsXG5cdFx0J+S6jCcsXG5cdF0sXG5cblx0J+matyc6IFtcblx0XHQn6Zq3Jyxcblx0XHQn6Zq4Jyxcblx0XHQn6Zq2Jyxcblx0XSxcblxuXHQn5aerJzogW1xuXHRcdCflp6snLFxuXHRcdCflp6wnLFxuXHRdLFxuXG5cdCfnh7snOiBbXG5cdFx0J+eHuycsXG5cdFx0J+eGjycsXG5cdF0sXG5cblx0J+exsic6IFtcblx0XHQn57GyJyxcblx0XHQn6b6lJyxcblx0XSxcblxuXHQn6b2nJzogW1xuXHRcdCfpvacnLFxuXHRcdCflla4nLFxuXHRcdCfwqpiCJyxcblx0XHQn5ZuTJyxcblx0XHQn5ZmbJyxcblx0XHQn5ZqZJyxcblx0XSxcblxuXHQn6bm8JzogW1xuXHRcdCfpubwnLFxuXHRcdCfnorEnLFxuXHRcdCfnobcnLFxuXHRdLFxuXG5cdCflkrgnOiBbXG5cdFx0J+WSuCcsXG5cdFx0J+m5uScsXG5cdF0sXG5cblx0J+eplyc6IFtcblx0XHQn56mXJyxcblx0XHQn56mCJyxcblx0XSxcblxuXHQn5buiJzogW1xuXHRcdCflu6InLFxuXHRcdCflu4MnLFxuXHRcdCflup8nLFxuXHRdLFxuXG5cdCfouaAnOiBbXG5cdFx0J+i5oCcsXG5cdFx0J+i3licsXG5cdF0sXG5cblx0J+WQkic6IFtcblx0XHQn5ZCSJyxcblx0XHQn5ZKkJyxcblx0XSxcblxuXHQn5Ym3JzogW1xuXHRcdCflibcnLFxuXHRcdCfpj58nLFxuXHRcdCfpk7InLFxuXHRcdCfliKwnLFxuXHRcdCfliZcnLFxuXHRdLFxuXG5cdCfmk5cnOiBbXG5cdFx0J+aTlycsXG5cdFx0J+WKiCcsXG5cdF0sXG5cblx0J+aguCc6IFtcblx0XHQn5qC4Jyxcblx0XHQn6KaIJyxcblx0XSxcblxuXHQn6ISjJzogW1xuXHRcdCfohKMnLFxuXHRcdCfllIcnLFxuXHRcdCfllIcnLFxuXHRdLFxuXG5cdCfljYcnOiBbXG5cdFx0J+WNhycsXG5cdFx0J+aYhycsXG5cdF0sXG5cblx0J+ejkCc6IFtcblx0XHQn56OQJyxcblx0XHQn55ukJyxcblx0XHQn55uYJyxcblx0XSxcblxuXHQn5rqqJzogW1xuXHRcdCfmuqonLFxuXHRcdCfmuJMnLFxuXHRdLFxuXG5cdCfosL8nOiBbXG5cdFx0J+iwvycsXG5cdFx0J+W1oCcsXG5cdF0sXG5cblx0J+aKmCc6IFtcblx0XHQn5oqYJyxcblx0XHQn5pG6Jyxcblx0XSxcblxuXHQn56WQJzogW1xuXHRcdCfnpZAnLFxuXHRcdCfkvZEnLFxuXHRdLFxuXG5cdCfnk64nOiBbXG5cdFx0J+eTricsXG5cdFx0J+e9iycsXG5cdFx0J+eUlScsXG5cdF0sXG5cblx0J+i5pCc6IFtcblx0XHQn6LmkJyxcblx0XHQn6LiqJyxcblx0XHQn6LioJyxcblx0XSxcblxuXHQn5pqXJzogW1xuXHRcdCfpl4cnLFxuXHRcdCfmmpcnLFxuXHRdLFxuXG5cdCfmmLUnOiBbXG5cdFx0J+aYtScsXG5cdFx0J+aasScsXG5cdF0sXG5cblx0J+W4gyc6IFtcblx0XHQn5biDJyxcblx0XHQn5L2IJyxcblx0XSxcblxuXHQn54K6JzogW1xuXHRcdCfngronLFxuXHRcdCfkuLonLFxuXHRcdCfniLInLFxuXHRdLFxuXG5cdCfntrMnOiBbXG5cdFx0J+e2sycsXG5cdFx0J+e5gycsXG5cdFx0J+e7tycsXG5cdF0sXG5cblx0J+eXuic6IFtcblx0XHQn55e6Jyxcblx0XHQn55e5Jyxcblx0XSxcblxuXHQn55eyJzogW1xuXHRcdCfnl7InLFxuXHRcdCfnl7MnLFxuXHRdLFxuXG5cdCfpm4cnOiBbXG5cdFx0J+mbhycsXG5cdFx0J+WDsScsXG5cdF0sXG5cblx0J+aVmCc6IFtcblx0XHQn5pWYJyxcblx0XHQn5Y+ZJyxcblx0XHQn5pWNJyxcblx0XSxcblxuXHQn55uqJzogW1xuXHRcdCfnm6onLFxuXHRcdCfolaknLFxuXHRcdCfojaEnLFxuXHRdLFxuXG5cdCfli5snOiBbXG5cdFx0J+WLmycsXG5cdFx0J+WLsycsXG5cdFx0J+WLiycsXG5cdFx0J+WLsicsXG5cdF0sXG5cblx0J+ellSc6IFtcblx0XHQn56WVJyxcblx0XHQn56eYJyxcblx0XSxcblxuXHQn54mGJzogW1xuXHRcdCfniYYnLFxuXHRcdCflopknLFxuXHRcdCflorsnLFxuXHRdLFxuXG5cdCfniL4nOiBbXG5cdFx0J+eIvicsXG5cdFx0J+WwlCcsXG5cdFx0J+WwkycsXG5cdF0sXG5cblx0J+eEsCc6IFtcblx0XHQn54SwJyxcblx0XHQn54SUJyxcblx0XSxcblxuXHQn6buYJzogW1xuXHRcdCfpu5gnLFxuXHRcdCfpu5knLFxuXHRdLFxuXG5cdCflo5MnOiBbXG5cdFx0J+WjkycsXG5cdFx0J+WOiycsXG5cdFx0J+WcpycsXG5cdF0sXG5cblx0J+W7uCc6IFtcblx0XHQn5bu4Jyxcblx0XHQn6L+qJyxcblx0XSxcblxuXHQn5puJJzogW1xuXHRcdCfmm4knLFxuXHRcdCfmmZMnLFxuXHRcdCfmmoEnLFxuXHRdLFxuXG5cdCfpnLgnOiBbXG5cdFx0J+mcuCcsXG5cdFx0J+imhycsXG5cdF0sXG5cblx0J+mciic6IFtcblx0XHQn6ZyKJyxcblx0XHQn6Z2IJyxcblx0XHQn54G1Jyxcblx0XSxcblxuXHQn5rOqJzogW1xuXHRcdCfms6onLFxuXHRcdCfmtpknLFxuXHRcdCfmt5onLFxuXHRdLFxuXG5cdCfnibonOiBbXG5cdFx0J+eJuicsXG5cdFx0J+eKoCcsXG5cdFx0J+eKpycsXG5cdF0sXG5cblx0J+iXiSc6IFtcblx0XHQn6JeJJyxcblx0XHQn6ICkJyxcblx0XSxcblxuXHQn5Zm4JzogW1xuXHRcdCflmbgnLFxuXHRcdCflkKgnLFxuXHRdLFxuXG5cdCfkv7EnOiBbXG5cdFx0J+S/sScsXG5cdFx0J+WAticsXG5cdF0sXG5cblx0J+eyvSc6IFtcblx0XHQn57K9Jyxcblx0XHQn57OJJyxcblx0XHQn57OtJyxcblx0XSxcblxuXHQn5ZCRJzogW1xuXHRcdCflkJEnLFxuXHRcdCfmm48nLFxuXHRcdCflmq4nLFxuXHRdLFxuXG5cdCfmgr0nOiBbXG5cdFx0J+aCvScsXG5cdFx0J+a3kicsXG5cdFx0J+WHhCcsXG5cdF0sXG5cblx0J+mxtyc6IFtcblx0XHQn6bG3Jyxcblx0XHQn6bCQJyxcblx0XHQn6bOEJyxcblx0XSxcblxuXHQn5ru3JzogW1xuXHRcdCfmu7cnLFxuXHRcdCfpubUnLFxuXHRcdCfljaQnLFxuXHRdLFxuXG5cdCfpopwnOiBbXG5cdFx0J+minCcsXG5cdFx0J+mhjycsXG5cdFx0J+mhlCcsXG5cdF0sXG5cblx0J+ihnSc6IFtcblx0XHQn6KGdJyxcblx0XHQn5rKWJyxcblx0XHQn5YayJyxcblx0XSxcblxuXHQn5qiRJzogW1xuXHRcdCfmqJEnLFxuXHRcdCfmooEnLFxuXHRdLFxuXG5cdCfnoIInOiBbXG5cdFx0J+eggicsXG5cdFx0J+aymScsXG5cdF0sXG5cblx0J+eCrSc6IFtcblx0XHQn54KtJyxcblx0XHQn56KzJyxcblx0XSxcblxuXHQn57O4JzogW1xuXHRcdCfns7gnLFxuXHRcdCfntbInLFxuXHRcdCfkuJ0nLFxuXHRdLFxuXG5cdCfnsLcnOiBbXG5cdFx0J+ewtycsXG5cdFx0J+aqkCcsXG5cdF0sXG5cblx0J+a2jCc6IFtcblx0XHQn5raMJyxcblx0XHQn5rmnJyxcblx0XSxcblxuXHQn57OTJzogW1xuXHRcdCfnqYAnLFxuXHRcdCfns5MnLFxuXHRdLFxuXG5cdCfkuKEnOiBbXG5cdFx0J+S4oScsXG5cdFx0J+S4pCcsXG5cdFx0J+WFqScsXG5cdF0sXG5cblx0J+Wutic6IFtcblx0XHQn5a62Jyxcblx0XHQn5YKiJyxcblx0XSxcblxuXHQn5aazJzogW1xuXHRcdCflprMnLFxuXHRcdCfkvaAnLFxuXHRdLFxuXG5cdCflpbknOiBbXG5cdFx0J+WluScsXG5cdFx0J+S7licsXG5cdF0sXG5cblx0J+iXpCc6IFtcblx0XHQn6JekJyxcblx0XHQn57GQJyxcblx0XHQn57GYJyxcblx0XSxcblxuXHQn5ayJJzogW1xuXHRcdCflrIknLFxuXHRcdCflmLsnLFxuXHRdLFxuXG5cdCfkupgnOiBbXG5cdFx0J+S6mCcsXG5cdFx0J+S6mScsXG5cdF0sXG5cblx0J+aBhic6IFtcblx0XHQn5oGGJyxcblx0XHQn5oGSJyxcblx0XSxcblxuXHQn6baHJzogW1xuXHRcdCfptocnLFxuXHRcdCfptqsnLFxuXHRcdCfpuKsnLFxuXHRdLFxuXG5cdCflp4knOiBbXG5cdFx0J+WniScsXG5cdFx0J+WnkCcsXG5cdFx0J+WniicsXG5cdF0sXG5cblx0J+WJgSc6IFtcblx0XHQn5YmBJyxcblx0XHQn5Yi0Jyxcblx0XSxcblxuXHQn5rOEJzogW1xuXHRcdCfms4QnLFxuXHRcdCfmtKknLFxuXHRdLFxuXG5cdCfoiJYnOiBbXG5cdFx0J+iIlicsXG5cdFx0J+mTuicsXG5cdFx0J+mLqicsXG5cdFx0J+iIlycsXG5cdF0sXG5cblx0J+aViCc6IFtcblx0XHQn5pWIJyxcblx0XHQn5Yq5Jyxcblx0XSxcblxuXHQn5Za7JzogW1xuXHRcdCfllrsnLFxuXHRcdCfllqknLFxuXHRdLFxuXG5cdCfmj5InOiBbXG5cdFx0J+aMvycsXG5cdFx0J+aPkicsXG5cdFx0J+aPtycsXG5cdF0sXG5cblx0J+mKsyc6IFtcblx0XHQn6YqzJyxcblx0XHQn6YutJyxcblx0XHQn6ZSQJyxcblx0XSxcblxuXHQn5qyKJzogW1xuXHRcdCfmrIonLFxuXHRcdCfmqKknLFxuXHRcdCfmnYMnLFxuXHRdLFxuXG5cdCfntYwnOiBbXG5cdFx0J+e1jCcsXG5cdFx0J+e2kycsXG5cdFx0J+e7jycsXG5cdF0sXG5cblx0J+atkyc6IFtcblx0XHQn5q2TJyxcblx0XHQn5q2hJyxcblx0XHQn5qyiJyxcblx0XSxcblxuXHQn5a2DJzogW1xuXHRcdCflrKInLFxuXHRcdCflrYMnLFxuXHRdLFxuXG5cdCfmuIgnOiBbXG5cdFx0J+a4iCcsXG5cdFx0J+a/nycsXG5cdFx0J+a1jicsXG5cdF0sXG5cblx0J+aUtic6IFtcblx0XHQn5Y+OJyxcblx0XHQn5pS2Jyxcblx0XSxcblxuXHQn57agJzogW1xuXHRcdCfntqAnLFxuXHRcdCfnt5EnLFxuXHRcdCfnu78nLFxuXHRdLFxuXG5cdCfllJYnOiBbXG5cdFx0J+WUlicsXG5cdFx0J+WVnicsXG5cdFx0J+WTkScsXG5cdF0sXG5cblx0J+WJvyc6IFtcblx0XHQn5Ym/Jyxcblx0XHQn5YumJyxcblx0XHQn8KCesCcsXG5cdF0sXG5cblx0J+emjSc6IFtcblx0XHQn56aNJyxcblx0XHQn76mSJyxcblx0XHQn56W4Jyxcblx0XSxcblxuXHQuLi5qcExpc3RMYXp5QWxsTWFwKFtcblx0XHQn5Za2Jyxcblx0XHQn55SjJyxcblx0XHQn5p+7Jyxcblx0XHQn57W1Jyxcblx0XHQn5oeQJyxcblx0XHQn6YeIJyxcblx0XHQn6JS1Jyxcblx0XHQn5aivJyxcblx0XHQn54S8Jyxcblx0XHQn5ouhJyxcblx0XHQn6LOOJyxcblx0XHQn6YqtJyxcblx0XHQn6ZuRJyxcblx0XHQn6IG0Jyxcblx0XHQn5bivJyxcblx0XHQn6ZayJyxcblx0XHQn6KanJyxcblx0XHQn5oKqJyxcblx0XHQn5LqcJyxcblx0XHQn5rC3Jyxcblx0XSBhcyBjb25zdCksXG5cblx0J+S+ric6IFtcblx0XHQn5L6uJyxcblx0XHQn76iwJyxcblx0XSxcblxuXHQn5rKJJzogW1xuXHRcdCfmsoknLFxuXHRcdCfmsognLFxuXHRdLFxuXG5cdCflmpAnOiBbXG5cdFx0J+WakCcsXG5cdFx0J+WYlycsXG5cdFx0J+WwnScsXG5cdF0sXG5cblx0J+aQvic6IFtcblx0XHQn5pC+Jyxcblx0XHQn5qaoJyxcblx0XSxcblxuXHQn6I63JzogW1xuXHRcdCfojrcnLFxuXHRcdCfnjbInLFxuXHRcdCfnqasnLFxuXHRdLFxuXG59IGFzIGNvbnN0O1xuXG4vKipcbiAqIOatpOihqOWFp+espuWQiOS7peS4i+S7u+aEj+WAvOaZguacg+inuOeZvFxuICovXG5leHBvcnQgY29uc3QgdGFibGVfcGx1cyA9IF9idWlsZFRhYmxlUGx1cyh0YWJsZV9wbHVzX2NvcmUpO1xuXG4vKipcbiAqIOatpOihqOWFp+WPquacieespuWQiCBLRVkg5YC85pmC5omN5pyD6Ke455m8XG4gKi9cbmV4cG9ydCBjb25zdCB0YWJsZV9qcCA9IF9tZXJnZVRhYmxlKHRhYmxlX2pwX2NvcmUsIHRhYmxlX3BsdXMpO1xuXG5fdW5pcXVlVGFibGUodGFibGVfanApO1xuXG50eXBlIElBcnJheU9yUmVhZG9ubHk8VT4gPSBVW10gfCByZWFkb25seSBVW107XG5cbmV4cG9ydCBmdW5jdGlvbiBfdW5pcXVlVGFibGU8VCBleHRlbmRzIFJlY29yZDxzdHJpbmcsIElBcnJheU9yUmVhZG9ubHk8c3RyaW5nPj4+KHRhYmxlX2pwOiBUKVxue1xuXHRPYmplY3Qua2V5cyh0YWJsZV9qcClcblx0XHQuZm9yRWFjaChmdW5jdGlvbiAoa2V5KVxuXHRcdHtcblx0XHRcdC8vIEB0cy1pZ25vcmVcblx0XHRcdHRhYmxlX2pwW2tleV0gPSBhcnJheV91bmlxdWUodGFibGVfanBba2V5XSk7XG5cdFx0fSlcblx0O1xuXG5cdHJldHVybiB0YWJsZV9qcDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9idWlsZFRhYmxlUGx1czxUIGV4dGVuZHMgc3RyaW5nLCBVIGV4dGVuZHMgc3RyaW5nPih0YWJsZV9wbHVzOiBSZWNvcmQ8VCwgSUFycmF5T3JSZWFkb25seTxVPj4pOiBSZWNvcmQ8VSB8IFQsIHN0cmluZ1tdPlxue1xuXHRPYmplY3Qua2V5cyh0YWJsZV9wbHVzKVxuXHRcdC5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpXG5cdFx0e1xuXHRcdFx0dGFibGVfcGx1c1trZXldID0gYXJyYXlfdW5pcXVlKHRhYmxlX3BsdXNba2V5XSk7XG5cblx0XHRcdHRhYmxlX3BsdXNba2V5XS5mb3JFYWNoKGZ1bmN0aW9uIChzKVxuXHRcdFx0e1xuXHRcdFx0XHR0YWJsZV9wbHVzW3NdID0gdGFibGVfcGx1c1trZXldO1xuXHRcdFx0fSlcblx0XHR9KVxuXHQ7XG5cblx0Ly8gQHRzLWlnbm9yZVxuXHRyZXR1cm4gdGFibGVfcGx1c1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX21lcmdlVGFibGU8VCBleHRlbmRzIHN0cmluZywgVSBleHRlbmRzIHN0cmluZz4odGFibGVfanA6IFJlY29yZDxULCBJQXJyYXlPclJlYWRvbmx5PHN0cmluZz4+LFxuXHR0YWJsZV9wbHVzOiBSZWNvcmQ8VSwgSUFycmF5T3JSZWFkb25seTxzdHJpbmc+Pixcbik6IFJlY29yZDxVIHwgVCwgc3RyaW5nW10+XG57XG5cdC8vIEB0cy1pZ25vcmVcblx0cmV0dXJuIGRlZXBtZXJnZSh0YWJsZV9qcCwgdGFibGVfcGx1cyk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVNpbXBsZVRhYmxlXG57XG5cdFtrZXk6IHN0cmluZ106IHN0cmluZyxcbn1cblxuZXhwb3J0IGxldCBfdGFibGVfY246IElTaW1wbGVUYWJsZSA9IF91cGRhdGUoe30sIF90YWJsZV90dyk7XG5cbmV4cG9ydCBmdW5jdGlvbiBfdXBkYXRlKHRhcmdldDogSVNpbXBsZVRhYmxlLCBzb3VyY2U6IElTaW1wbGVUYWJsZSk6IElTaW1wbGVUYWJsZVxue1xuXHR0YXJnZXQgPSBPYmplY3Qua2V5cyhzb3VyY2UpXG5cdFx0LnJlZHVjZShmdW5jdGlvbiAoYSwgYilcblx0XHR7XG5cdFx0XHRhW3NvdXJjZVtiXV0gPSBiO1xuXG5cdFx0XHRyZXR1cm4gYTtcblx0XHR9LCB7fSlcblx0O1xuXG5cdHJldHVybiB0YXJnZXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfZ2V0KGFycjogc3RyaW5nW10sIHZhbHVlOiBzdHJpbmcgfCBzdHJpbmdbXSwgLi4udmFsdWVzOiBBcnJheTxzdHJpbmcgfCBzdHJpbmdbXT4pOiBzdHJpbmdbXVxue1xuXHRsZXQgcmV0OiBzdHJpbmdbXSA9IFtdXG5cdFx0LmNvbmNhdCh2YWx1ZSlcblx0XHQuY29uY2F0KC4uLnZhbHVlcylcblx0XHQuZmlsdGVyKGZ1bmN0aW9uICh2KVxuXHRcdHtcblx0XHRcdHJldHVybiB2O1xuXHRcdH0pXG5cdDtcblxuXHQvL3JldC5sZW5ndGggJiYgcmV0LnNvcnQoKTtcblxuXHRyZXR1cm4gcmV0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24ganAoY2hhcjogc3RyaW5nLCBvcHRpb25zOiBJT3B0aW9ucyA9IHt9KTogc3RyaW5nW11cbntcblx0bGV0IGE6IHN0cmluZ1tdID0gW107XG5cdGEgPSBfZ2V0KGEsIHRhYmxlX2pwW2NoYXJdKTtcblxuXHRyZXR1cm4gYTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR3KGNoYXI6IHN0cmluZywgb3B0aW9uczogSU9wdGlvbnMgPSB7fSk6IHN0cmluZ1tdXG57XG5cdGxldCBhOiBzdHJpbmdbXSA9IFtdO1xuXG5cdGEgPSBfZ2V0KGEsIF90YWJsZV90d1tjaGFyXSwgY24ydHcoY2hhciwgb3B0aW9ucykpO1xuXG5cdC8vY29uc29sZS5sb2coJ2NuMnR3JywgY2hhciwgYSk7XG5cblx0cmV0dXJuIGE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbihjaGFyOiBzdHJpbmcsIG9wdGlvbnM6IElPcHRpb25zID0ge30pOiBzdHJpbmdbXVxue1xuXHRsZXQgYTogc3RyaW5nW10gPSBbXTtcblxuXHRhID0gX2dldChhLCBfdGFibGVfY25bY2hhcl0sIHR3MmNuKGNoYXIsIG9wdGlvbnMpKTtcblxuXHQvL2NvbnNvbGUubG9nKCd0dzJjbicsIGNoYXIsIGEpO1xuXG5cdHJldHVybiBhO1xufVxuXG50eXBlIElSZWNvcmRNYXA8SyBleHRlbmRzIHN0cmluZz4gPSB7XG5cdFtQIGluIEtdOiAoUCAmIHN0cmluZylbXVxufTtcblxuZnVuY3Rpb24ganBMaXN0TGF6eUFsbE1hcDxUIGV4dGVuZHMgc3RyaW5nPihhcnI6IElUU0FycmF5TGlzdE1heWJlUmVhZG9ubHk8VD4pXG57XG5yZXR1cm4gKGFyciBhcyBUW10pLnJlZHVjZSgoYSwgYikgPT4ge1xuXHRhW2JdID0ganBMaXN0TGF6eUFsbChiKTtcblx0cmV0dXJuIGE7XG59LCB7fSBhcyBJUmVjb3JkTWFwPFQ+KVxufVxuXG5mdW5jdGlvbiBqcExpc3RMYXp5QWxsPFQgZXh0ZW5kcyBzdHJpbmc+KGNoYXI6IFQpOiAoVCAmIHN0cmluZylbXVxue1xuXHRyZXR1cm4gX2pwTGlzdExhenlBbGwoY2hhciwge1xuXHRcdHNhZmU6IGZhbHNlLFxuXHRcdGluY2x1ZGVTZWxmOiB0cnVlLFxuXHR9KSBhcyBhbnlcbn1cblxuZXhwb3J0IGRlZmF1bHQgZXhwb3J0cyBhcyB0eXBlb2YgaW1wb3J0KCcuL3RhYmxlJyk7XG4iXX0=
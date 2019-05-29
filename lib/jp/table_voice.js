"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const array_hyper_unique_1 = require("array-hyper-unique");
const table_voice_core = {
    'か': [
        'か',
        'が',
    ],
    'き': [
        'き',
        'ぎ',
    ],
    'く': [
        'く',
        'ぐ',
    ],
    'け': [
        'け',
        'げ',
    ],
    'こ': [
        'こ',
        'ご',
    ],
    'さ': [
        'さ',
        'ざ',
    ],
    'し': [
        'し',
        'じ',
    ],
    'す': [
        'す',
        'ず',
    ],
    'せ': [
        'せ',
        'ぜ',
    ],
    'そ': [
        'そ',
        'ぞ',
    ],
    'た': [
        'た',
        'だ',
    ],
    'ち': [
        'ち',
        'ぢ',
    ],
    'つ': [
        'つ',
        'づ',
    ],
    'て': [
        'て',
        'で',
    ],
    'と': [
        'と',
        'ど',
    ],
    'は': [
        'は',
        'ば',
        'ぱ',
    ],
    'ひ': [
        'ひ',
        'び',
        'ぴ',
    ],
    'ふ': [
        'ふ',
        'ぶ',
        'ぷ',
    ],
    'へ': [
        'へ',
        'べ',
        'ぺ',
    ],
    'ほ': [
        'ほ',
        'ぼ',
        'ぽ',
    ],
    //------------------
    'カ': [
        'カ',
        'ガ',
    ],
    'キ': [
        'キ',
        'ギ',
    ],
    'ク': [
        'ク',
        'グ',
    ],
    'ケ': [
        'ケ',
        'ゲ',
    ],
    'コ': [
        'コ',
        'ゴ',
    ],
    'サ': [
        'サ',
        'ザ',
    ],
    'シ': [
        'シ',
        'ジ',
    ],
    'ス': [
        'ス',
        'ズ',
    ],
    'セ': [
        'セ',
        'ゼ',
    ],
    'ソ': [
        'ソ',
        'ゾ',
    ],
    'タ': [
        'タ',
        'ダ',
    ],
    'チ': [
        'チ',
        'ヂ',
    ],
    'ツ': [
        'ツ',
        'ヅ',
    ],
    'テ': [
        'テ',
        'デ',
    ],
    'ト': [
        'ト',
        'ド',
    ],
    'ハ': [
        'ハ',
        'バ',
        'パ',
    ],
    'ヒ': [
        'ヒ',
        'ビ',
        'ピ',
    ],
    'フ': [
        'フ',
        'ブ',
        'プ',
    ],
    'ヘ': [
        'ヘ',
        'ベ',
        'ペ',
    ],
    'ホ': [
        'ホ',
        'ボ',
        'ポ',
    ],
};
/**
 * 清濁音
 * 'string' => [清音, 濁音, 半濁音]
 */
exports.table_voice = Object.freeze(_buildTablePlus(table_voice_core));
var EnumTableVoice;
(function (EnumTableVoice) {
    /**
     * 清音
     */
    EnumTableVoice[EnumTableVoice["01"] = 0] = "01";
    /**
     * 濁音
     */
    EnumTableVoice[EnumTableVoice["02"] = 1] = "02";
    /**
     * 半濁音
     */
    EnumTableVoice[EnumTableVoice["03"] = 2] = "03";
})(EnumTableVoice = exports.EnumTableVoice || (exports.EnumTableVoice = {}));
function hasVoiceTable(char) {
    return (exports.table_voice[char] && exports.table_voice[char].length) || 0;
}
exports.hasVoiceTable = hasVoiceTable;
function _get(char, idx) {
    if (!char.length) {
        throw new TypeError(`char: '${char}', not valid`);
    }
    else if (idx !== 0 /* '01' */ && idx !== 1 /* '02' */ && idx !== 2 /* '03' */) {
        throw new TypeError(`char: '${char}', not valid`);
    }
    if (exports.table_voice[char]) {
        return exports.table_voice[char][idx];
    }
}
exports._get = _get;
/**
 * 清濁音
 * [清音, 濁音, 半濁音]
 */
function getVoiceAll(char) {
    return exports.table_voice[char];
}
exports.getVoiceAll = getVoiceAll;
/**
 * 清音
 */
function toVoice01(char) {
    return _get(char, 0 /* '01' */);
}
exports.toVoice01 = toVoice01;
/**
 * 濁音
 */
function toVoice02(char) {
    return _get(char, 1 /* '02' */);
}
exports.toVoice02 = toVoice02;
/**
 * 半濁音
 */
function toVoice03(char) {
    return _get(char, 2 /* '03' */);
}
exports.toVoice03 = toVoice03;
function _buildTablePlus(table_plus) {
    Object.keys(table_plus)
        .forEach(function (key) {
        table_plus[key] = Object.freeze(array_hyper_unique_1.array_unique(table_plus[key]));
        table_plus[key].forEach(function (s) {
            table_plus[s] = table_plus[key];
        });
    });
    // @ts-ignore
    return table_plus;
}
exports._buildTablePlus = _buildTablePlus;
/**
 * 清濁音
 * [清音, 濁音, 半濁音]
 */
exports.default = getVoiceAll;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGVfdm9pY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YWJsZV92b2ljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJEQUFrRDtBQUVsRCxNQUFNLGdCQUFnQixHQUFHO0lBQ3hCLEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUVIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FFSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFDRCxvQkFBb0I7SUFDcEIsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtDQUNRLENBQUM7QUFFWDs7O0dBR0c7QUFDVSxRQUFBLFdBQVcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7QUFFNUUsSUFBa0IsY0FjakI7QUFkRCxXQUFrQixjQUFjO0lBRS9COztPQUVHO0lBQ0gsK0NBQUksQ0FBQTtJQUNKOztPQUVHO0lBQ0gsK0NBQUksQ0FBQTtJQUNKOztPQUVHO0lBQ0gsK0NBQUksQ0FBQTtBQUNMLENBQUMsRUFkaUIsY0FBYyxHQUFkLHNCQUFjLEtBQWQsc0JBQWMsUUFjL0I7QUFZRCxTQUFnQixhQUFhLENBQUMsSUFBcUI7SUFFbEQsT0FBTyxDQUFDLG1CQUFXLENBQUMsSUFBSSxDQUFDLElBQUksbUJBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUE7QUFDNUQsQ0FBQztBQUhELHNDQUdDO0FBRUQsU0FBZ0IsSUFBSSxDQUFDLElBQThCLEVBQUUsR0FBbUI7SUFFdkUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQ2hCO1FBQ0MsTUFBTSxJQUFJLFNBQVMsQ0FBQyxVQUFVLElBQUksY0FBYyxDQUFDLENBQUE7S0FDakQ7U0FDSSxJQUFJLEdBQUcsaUJBQXlCLElBQUksR0FBRyxpQkFBeUIsSUFBSSxHQUFHLGlCQUF5QixFQUNyRztRQUNDLE1BQU0sSUFBSSxTQUFTLENBQUMsVUFBVSxJQUFJLGNBQWMsQ0FBQyxDQUFBO0tBQ2pEO0lBRUQsSUFBSSxtQkFBVyxDQUFDLElBQUksQ0FBQyxFQUNyQjtRQUNDLE9BQU8sbUJBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQTtLQUM3QjtBQUNGLENBQUM7QUFmRCxvQkFlQztBQUdEOzs7R0FHRztBQUNILFNBQWdCLFdBQVcsQ0FBQyxJQUE4QjtJQUV6RCxPQUFPLG1CQUFXLENBQUMsSUFBSSxDQUFDLENBQUE7QUFDekIsQ0FBQztBQUhELGtDQUdDO0FBRUQ7O0dBRUc7QUFDSCxTQUFnQixTQUFTLENBQUMsSUFBOEI7SUFFdkQsT0FBTyxJQUFJLENBQUMsSUFBSSxlQUF1QixDQUFBO0FBQ3hDLENBQUM7QUFIRCw4QkFHQztBQUVEOztHQUVHO0FBQ0gsU0FBZ0IsU0FBUyxDQUFDLElBQThCO0lBRXZELE9BQU8sSUFBSSxDQUFDLElBQUksZUFBdUIsQ0FBQTtBQUN4QyxDQUFDO0FBSEQsOEJBR0M7QUFFRDs7R0FFRztBQUNILFNBQWdCLFNBQVMsQ0FBQyxJQUE4QjtJQUV2RCxPQUFPLElBQUksQ0FBQyxJQUFJLGVBQXVCLENBQUE7QUFDeEMsQ0FBQztBQUhELDhCQUdDO0FBSUQsU0FBZ0IsZUFBZSxDQUFxQyxVQUEwQztJQUU3RyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztTQUNyQixPQUFPLENBQUMsVUFBVSxHQUFHO1FBRXJCLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLGlDQUFZLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUUvRCxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQztZQUVsQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxDQUFBO0lBQ0gsQ0FBQyxDQUFDLENBQ0Y7SUFFRCxhQUFhO0lBQ2IsT0FBTyxVQUFVLENBQUE7QUFDbEIsQ0FBQztBQWhCRCwwQ0FnQkM7QUFFRDs7O0dBR0c7QUFDSCxrQkFBZSxXQUFXLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhcnJheV91bmlxdWUgfSBmcm9tICdhcnJheS1oeXBlci11bmlxdWUnO1xuXG5jb25zdCB0YWJsZV92b2ljZV9jb3JlID0ge1xuXHQn44GLJzogW1xuXHRcdCfjgYsnLFxuXHRcdCfjgYwnLFxuXHRdLFxuXHQn44GNJzogW1xuXHRcdCfjgY0nLFxuXHRcdCfjgY4nLFxuXHRdLFxuXHQn44GPJzogW1xuXHRcdCfjgY8nLFxuXHRcdCfjgZAnLFxuXHRdLFxuXHQn44GRJzogW1xuXHRcdCfjgZEnLFxuXHRcdCfjgZInLFxuXHRdLFxuXHQn44GTJzogW1xuXHRcdCfjgZMnLFxuXHRcdCfjgZQnLFxuXHRdLFxuXHQn44GVJzogW1xuXHRcdCfjgZUnLFxuXHRcdCfjgZYnLFxuXHRdLFxuXHQn44GXJzogW1xuXHRcdCfjgZcnLFxuXHRcdCfjgZgnLFxuXHRdLFxuXHQn44GZJzogW1xuXHRcdCfjgZknLFxuXHRcdCfjgZonLFxuXHRdLFxuXHQn44GbJzogW1xuXHRcdCfjgZsnLFxuXHRcdCfjgZwnLFxuXHRdLFxuXHQn44GdJzogW1xuXHRcdCfjgZ0nLFxuXHRcdCfjgZ4nLFxuXHRdLFxuXHQn44GfJzogW1xuXHRcdCfjgZ8nLFxuXHRcdCfjgaAnLFxuXHRdLFxuXHQn44GhJzogW1xuXHRcdCfjgaEnLFxuXHRcdCfjgaInLFxuXHRdLFxuXHQn44GkJzogW1xuXHRcdCfjgaQnLFxuXHRcdCfjgaUnLFxuXHRdLFxuXHQn44GmJzogW1xuXHRcdCfjgaYnLFxuXHRcdCfjgacnLFxuXG5cdF0sXG5cdCfjgagnOiBbXG5cdFx0J+OBqCcsXG5cdFx0J+OBqScsXG5cblx0XSxcblx0J+OBryc6IFtcblx0XHQn44GvJyxcblx0XHQn44GwJyxcblx0XHQn44GxJyxcblx0XSxcblx0J+OBsic6IFtcblx0XHQn44GyJyxcblx0XHQn44GzJyxcblx0XHQn44G0Jyxcblx0XSxcblx0J+OBtSc6IFtcblx0XHQn44G1Jyxcblx0XHQn44G2Jyxcblx0XHQn44G3Jyxcblx0XSxcblx0J+OBuCc6IFtcblx0XHQn44G4Jyxcblx0XHQn44G5Jyxcblx0XHQn44G6Jyxcblx0XSxcblx0J+OBuyc6IFtcblx0XHQn44G7Jyxcblx0XHQn44G8Jyxcblx0XHQn44G9Jyxcblx0XSxcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS1cblx0J+OCqyc6IFtcblx0XHQn44KrJyxcblx0XHQn44KsJyxcblx0XSxcblx0J+OCrSc6IFtcblx0XHQn44KtJyxcblx0XHQn44KuJyxcblx0XSxcblx0J+OCryc6IFtcblx0XHQn44KvJyxcblx0XHQn44KwJyxcblx0XSxcblx0J+OCsSc6IFtcblx0XHQn44KxJyxcblx0XHQn44KyJyxcblx0XSxcblx0J+OCsyc6IFtcblx0XHQn44KzJyxcblx0XHQn44K0Jyxcblx0XSxcblx0J+OCtSc6IFtcblx0XHQn44K1Jyxcblx0XHQn44K2Jyxcblx0XSxcblx0J+OCtyc6IFtcblx0XHQn44K3Jyxcblx0XHQn44K4Jyxcblx0XSxcblx0J+OCuSc6IFtcblx0XHQn44K5Jyxcblx0XHQn44K6Jyxcblx0XSxcblx0J+OCuyc6IFtcblx0XHQn44K7Jyxcblx0XHQn44K8Jyxcblx0XSxcblx0J+OCvSc6IFtcblx0XHQn44K9Jyxcblx0XHQn44K+Jyxcblx0XSxcblx0J+OCvyc6IFtcblx0XHQn44K/Jyxcblx0XHQn44OAJyxcblx0XSxcblx0J+ODgSc6IFtcblx0XHQn44OBJyxcblx0XHQn44OCJyxcblx0XSxcblx0J+ODhCc6IFtcblx0XHQn44OEJyxcblx0XHQn44OFJyxcblx0XSxcblx0J+ODhic6IFtcblx0XHQn44OGJyxcblx0XHQn44OHJyxcblx0XSxcblx0J+ODiCc6IFtcblx0XHQn44OIJyxcblx0XHQn44OJJyxcblx0XSxcblx0J+ODjyc6IFtcblx0XHQn44OPJyxcblx0XHQn44OQJyxcblx0XHQn44ORJyxcblx0XSxcblx0J+ODkic6IFtcblx0XHQn44OSJyxcblx0XHQn44OTJyxcblx0XHQn44OUJyxcblx0XSxcblx0J+ODlSc6IFtcblx0XHQn44OVJyxcblx0XHQn44OWJyxcblx0XHQn44OXJyxcblx0XSxcblx0J+ODmCc6IFtcblx0XHQn44OYJyxcblx0XHQn44OZJyxcblx0XHQn44OaJyxcblx0XSxcblx0J+ODmyc6IFtcblx0XHQn44ObJyxcblx0XHQn44OcJyxcblx0XHQn44OdJyxcblx0XSxcbn0gYXMgY29uc3Q7XG5cbi8qKlxuICog5riF5r+B6Z+zXG4gKiAnc3RyaW5nJyA9PiBb5riF6Z+zLCDmv4Hpn7MsIOWNiua/gemfs11cbiAqL1xuZXhwb3J0IGNvbnN0IHRhYmxlX3ZvaWNlID0gT2JqZWN0LmZyZWV6ZShfYnVpbGRUYWJsZVBsdXModGFibGVfdm9pY2VfY29yZSkpO1xuXG5leHBvcnQgY29uc3QgZW51bSBFbnVtVGFibGVWb2ljZVxue1xuXHQvKipcblx0ICog5riF6Z+zXG5cdCAqL1xuXHQnMDEnLFxuXHQvKipcblx0ICog5r+B6Z+zXG5cdCAqL1xuXHQnMDInLFxuXHQvKipcblx0ICog5Y2K5r+B6Z+zXG5cdCAqL1xuXHQnMDMnLFxufVxuXG4vKipcbiAqIOaJgOaciea4hea/gemfsyDlrZflhYPliJfooahcbiAqL1xuZXhwb3J0IHR5cGUgSVRhYmxlVm9pY2VLZXlzID0ga2V5b2YgdHlwZW9mIHRhYmxlX3ZvaWNlO1xuXG4vKipcbiAqIFvmuIXpn7MsIOa/gemfsywg5Y2K5r+B6Z+zXVxuICovXG5leHBvcnQgdHlwZSBJVGFibGVWb2ljZVZhbHVlcyA9IHJlYWRvbmx5IFtzdHJpbmcsIHN0cmluZywgc3RyaW5nP107XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNWb2ljZVRhYmxlKGNoYXI6IElUYWJsZVZvaWNlS2V5cyk6IEVudW1UYWJsZVZvaWNlIHwgMFxue1xuXHRyZXR1cm4gKHRhYmxlX3ZvaWNlW2NoYXJdICYmIHRhYmxlX3ZvaWNlW2NoYXJdLmxlbmd0aCkgfHwgMFxufVxuXG5leHBvcnQgZnVuY3Rpb24gX2dldChjaGFyOiBzdHJpbmcgfCBJVGFibGVWb2ljZUtleXMsIGlkeDogRW51bVRhYmxlVm9pY2UpOiBzdHJpbmdcbntcblx0aWYgKCFjaGFyLmxlbmd0aClcblx0e1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoYGNoYXI6ICcke2NoYXJ9Jywgbm90IHZhbGlkYClcblx0fVxuXHRlbHNlIGlmIChpZHggIT09IEVudW1UYWJsZVZvaWNlWycwMSddICYmIGlkeCAhPT0gRW51bVRhYmxlVm9pY2VbJzAyJ10gJiYgaWR4ICE9PSBFbnVtVGFibGVWb2ljZVsnMDMnXSlcblx0e1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoYGNoYXI6ICcke2NoYXJ9Jywgbm90IHZhbGlkYClcblx0fVxuXG5cdGlmICh0YWJsZV92b2ljZVtjaGFyXSlcblx0e1xuXHRcdHJldHVybiB0YWJsZV92b2ljZVtjaGFyXVtpZHhdXG5cdH1cbn1cblxuXG4vKipcbiAqIOa4hea/gemfs1xuICogW+a4hemfsywg5r+B6Z+zLCDljYrmv4Hpn7NdXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRWb2ljZUFsbChjaGFyOiBzdHJpbmcgfCBJVGFibGVWb2ljZUtleXMpOiBJVGFibGVWb2ljZVZhbHVlc1xue1xuXHRyZXR1cm4gdGFibGVfdm9pY2VbY2hhcl1cbn1cblxuLyoqXG4gKiDmuIXpn7NcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvVm9pY2UwMShjaGFyOiBzdHJpbmcgfCBJVGFibGVWb2ljZUtleXMpOiBzdHJpbmdcbntcblx0cmV0dXJuIF9nZXQoY2hhciwgRW51bVRhYmxlVm9pY2VbJzAxJ10pXG59XG5cbi8qKlxuICog5r+B6Z+zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b1ZvaWNlMDIoY2hhcjogc3RyaW5nIHwgSVRhYmxlVm9pY2VLZXlzKTogc3RyaW5nXG57XG5cdHJldHVybiBfZ2V0KGNoYXIsIEVudW1UYWJsZVZvaWNlWycwMiddKVxufVxuXG4vKipcbiAqIOWNiua/gemfs1xuICovXG5leHBvcnQgZnVuY3Rpb24gdG9Wb2ljZTAzKGNoYXI6IHN0cmluZyB8IElUYWJsZVZvaWNlS2V5cyk6IHN0cmluZ1xue1xuXHRyZXR1cm4gX2dldChjaGFyLCBFbnVtVGFibGVWb2ljZVsnMDMnXSlcbn1cblxudHlwZSBJQXJyYXlPclJlYWRvbmx5PFU+ID0gVVtdIHwgcmVhZG9ubHkgVVtdO1xuXG5leHBvcnQgZnVuY3Rpb24gX2J1aWxkVGFibGVQbHVzPFQgZXh0ZW5kcyBzdHJpbmcsIFUgZXh0ZW5kcyBzdHJpbmc+KHRhYmxlX3BsdXM6IFJlY29yZDxULCBJQXJyYXlPclJlYWRvbmx5PFU+Pik6IFJlY29yZDxVIHwgVCwgSVRhYmxlVm9pY2VWYWx1ZXM+XG57XG5cdE9iamVjdC5rZXlzKHRhYmxlX3BsdXMpXG5cdFx0LmZvckVhY2goZnVuY3Rpb24gKGtleSlcblx0XHR7XG5cdFx0XHR0YWJsZV9wbHVzW2tleV0gPSBPYmplY3QuZnJlZXplKGFycmF5X3VuaXF1ZSh0YWJsZV9wbHVzW2tleV0pKTtcblxuXHRcdFx0dGFibGVfcGx1c1trZXldLmZvckVhY2goZnVuY3Rpb24gKHMpXG5cdFx0XHR7XG5cdFx0XHRcdHRhYmxlX3BsdXNbc10gPSB0YWJsZV9wbHVzW2tleV07XG5cdFx0XHR9KVxuXHRcdH0pXG5cdDtcblxuXHQvLyBAdHMtaWdub3JlXG5cdHJldHVybiB0YWJsZV9wbHVzXG59XG5cbi8qKlxuICog5riF5r+B6Z+zXG4gKiBb5riF6Z+zLCDmv4Hpn7MsIOWNiua/gemfs11cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZ2V0Vm9pY2VBbGxcbiJdfQ==
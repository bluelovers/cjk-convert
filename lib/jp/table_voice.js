"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._buildTablePlus = exports.toVoice03 = exports.toVoice02 = exports.toVoice01 = exports.getVoiceAll = exports._get = exports.hasVoiceTable = exports.EnumTableVoice = exports.table_voice = void 0;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGVfdm9pY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YWJsZV92b2ljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyREFBa0Q7QUFFbEQsTUFBTSxnQkFBZ0IsR0FBRztJQUN4QixHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FFSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBRUg7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBQ0Qsb0JBQW9CO0lBQ3BCLEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7SUFDRCxHQUFHLEVBQUU7UUFDSixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7S0FDSDtJQUNELEdBQUcsRUFBRTtRQUNKLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNIO0lBQ0QsR0FBRyxFQUFFO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0g7Q0FDUSxDQUFDO0FBRVg7OztHQUdHO0FBQ1UsUUFBQSxXQUFXLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO0FBRTVFLElBQWtCLGNBY2pCO0FBZEQsV0FBa0IsY0FBYztJQUUvQjs7T0FFRztJQUNILCtDQUFJLENBQUE7SUFDSjs7T0FFRztJQUNILCtDQUFJLENBQUE7SUFDSjs7T0FFRztJQUNILCtDQUFJLENBQUE7QUFDTCxDQUFDLEVBZGlCLGNBQWMsR0FBZCxzQkFBYyxLQUFkLHNCQUFjLFFBYy9CO0FBWUQsU0FBZ0IsYUFBYSxDQUFDLElBQXFCO0lBRWxELE9BQU8sQ0FBQyxtQkFBVyxDQUFDLElBQUksQ0FBQyxJQUFJLG1CQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFBO0FBQzVELENBQUM7QUFIRCxzQ0FHQztBQUVELFNBQWdCLElBQUksQ0FBQyxJQUE4QixFQUFFLEdBQW1CO0lBRXZFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUNoQjtRQUNDLE1BQU0sSUFBSSxTQUFTLENBQUMsVUFBVSxJQUFJLGNBQWMsQ0FBQyxDQUFBO0tBQ2pEO1NBQ0ksSUFBSSxHQUFHLGlCQUF5QixJQUFJLEdBQUcsaUJBQXlCLElBQUksR0FBRyxpQkFBeUIsRUFDckc7UUFDQyxNQUFNLElBQUksU0FBUyxDQUFDLFVBQVUsSUFBSSxjQUFjLENBQUMsQ0FBQTtLQUNqRDtJQUVELElBQUksbUJBQVcsQ0FBQyxJQUFJLENBQUMsRUFDckI7UUFDQyxPQUFPLG1CQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUE7S0FDN0I7QUFDRixDQUFDO0FBZkQsb0JBZUM7QUFHRDs7O0dBR0c7QUFDSCxTQUFnQixXQUFXLENBQUMsSUFBOEI7SUFFekQsT0FBTyxtQkFBVyxDQUFDLElBQUksQ0FBQyxDQUFBO0FBQ3pCLENBQUM7QUFIRCxrQ0FHQztBQUVEOztHQUVHO0FBQ0gsU0FBZ0IsU0FBUyxDQUFDLElBQThCO0lBRXZELE9BQU8sSUFBSSxDQUFDLElBQUksZUFBdUIsQ0FBQTtBQUN4QyxDQUFDO0FBSEQsOEJBR0M7QUFFRDs7R0FFRztBQUNILFNBQWdCLFNBQVMsQ0FBQyxJQUE4QjtJQUV2RCxPQUFPLElBQUksQ0FBQyxJQUFJLGVBQXVCLENBQUE7QUFDeEMsQ0FBQztBQUhELDhCQUdDO0FBRUQ7O0dBRUc7QUFDSCxTQUFnQixTQUFTLENBQUMsSUFBOEI7SUFFdkQsT0FBTyxJQUFJLENBQUMsSUFBSSxlQUF1QixDQUFBO0FBQ3hDLENBQUM7QUFIRCw4QkFHQztBQUlELFNBQWdCLGVBQWUsQ0FBcUMsVUFBMEM7SUFFN0csTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7U0FDckIsT0FBTyxDQUFDLFVBQVUsR0FBRztRQUVyQixVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxpQ0FBWSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFL0QsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7WUFFbEMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLENBQUMsQ0FBQTtJQUNILENBQUMsQ0FBQyxDQUNGO0lBRUQsYUFBYTtJQUNiLE9BQU8sVUFBVSxDQUFBO0FBQ2xCLENBQUM7QUFoQkQsMENBZ0JDO0FBRUQ7OztHQUdHO0FBQ0gsa0JBQWUsV0FBVyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXJyYXlfdW5pcXVlIH0gZnJvbSAnYXJyYXktaHlwZXItdW5pcXVlJztcblxuY29uc3QgdGFibGVfdm9pY2VfY29yZSA9IHtcblx0J+OBiyc6IFtcblx0XHQn44GLJyxcblx0XHQn44GMJyxcblx0XSxcblx0J+OBjSc6IFtcblx0XHQn44GNJyxcblx0XHQn44GOJyxcblx0XSxcblx0J+OBjyc6IFtcblx0XHQn44GPJyxcblx0XHQn44GQJyxcblx0XSxcblx0J+OBkSc6IFtcblx0XHQn44GRJyxcblx0XHQn44GSJyxcblx0XSxcblx0J+OBkyc6IFtcblx0XHQn44GTJyxcblx0XHQn44GUJyxcblx0XSxcblx0J+OBlSc6IFtcblx0XHQn44GVJyxcblx0XHQn44GWJyxcblx0XSxcblx0J+OBlyc6IFtcblx0XHQn44GXJyxcblx0XHQn44GYJyxcblx0XSxcblx0J+OBmSc6IFtcblx0XHQn44GZJyxcblx0XHQn44GaJyxcblx0XSxcblx0J+OBmyc6IFtcblx0XHQn44GbJyxcblx0XHQn44GcJyxcblx0XSxcblx0J+OBnSc6IFtcblx0XHQn44GdJyxcblx0XHQn44GeJyxcblx0XSxcblx0J+OBnyc6IFtcblx0XHQn44GfJyxcblx0XHQn44GgJyxcblx0XSxcblx0J+OBoSc6IFtcblx0XHQn44GhJyxcblx0XHQn44GiJyxcblx0XSxcblx0J+OBpCc6IFtcblx0XHQn44GkJyxcblx0XHQn44GlJyxcblx0XSxcblx0J+OBpic6IFtcblx0XHQn44GmJyxcblx0XHQn44GnJyxcblxuXHRdLFxuXHQn44GoJzogW1xuXHRcdCfjgagnLFxuXHRcdCfjgaknLFxuXG5cdF0sXG5cdCfjga8nOiBbXG5cdFx0J+OBrycsXG5cdFx0J+OBsCcsXG5cdFx0J+OBsScsXG5cdF0sXG5cdCfjgbInOiBbXG5cdFx0J+OBsicsXG5cdFx0J+OBsycsXG5cdFx0J+OBtCcsXG5cdF0sXG5cdCfjgbUnOiBbXG5cdFx0J+OBtScsXG5cdFx0J+OBticsXG5cdFx0J+OBtycsXG5cdF0sXG5cdCfjgbgnOiBbXG5cdFx0J+OBuCcsXG5cdFx0J+OBuScsXG5cdFx0J+OBuicsXG5cdF0sXG5cdCfjgbsnOiBbXG5cdFx0J+OBuycsXG5cdFx0J+OBvCcsXG5cdFx0J+OBvScsXG5cdF0sXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tXG5cdCfjgqsnOiBbXG5cdFx0J+OCqycsXG5cdFx0J+OCrCcsXG5cdF0sXG5cdCfjgq0nOiBbXG5cdFx0J+OCrScsXG5cdFx0J+OCricsXG5cdF0sXG5cdCfjgq8nOiBbXG5cdFx0J+OCrycsXG5cdFx0J+OCsCcsXG5cdF0sXG5cdCfjgrEnOiBbXG5cdFx0J+OCsScsXG5cdFx0J+OCsicsXG5cdF0sXG5cdCfjgrMnOiBbXG5cdFx0J+OCsycsXG5cdFx0J+OCtCcsXG5cdF0sXG5cdCfjgrUnOiBbXG5cdFx0J+OCtScsXG5cdFx0J+OCticsXG5cdF0sXG5cdCfjgrcnOiBbXG5cdFx0J+OCtycsXG5cdFx0J+OCuCcsXG5cdF0sXG5cdCfjgrknOiBbXG5cdFx0J+OCuScsXG5cdFx0J+OCuicsXG5cdF0sXG5cdCfjgrsnOiBbXG5cdFx0J+OCuycsXG5cdFx0J+OCvCcsXG5cdF0sXG5cdCfjgr0nOiBbXG5cdFx0J+OCvScsXG5cdFx0J+OCvicsXG5cdF0sXG5cdCfjgr8nOiBbXG5cdFx0J+OCvycsXG5cdFx0J+ODgCcsXG5cdF0sXG5cdCfjg4EnOiBbXG5cdFx0J+ODgScsXG5cdFx0J+ODgicsXG5cdF0sXG5cdCfjg4QnOiBbXG5cdFx0J+ODhCcsXG5cdFx0J+ODhScsXG5cdF0sXG5cdCfjg4YnOiBbXG5cdFx0J+ODhicsXG5cdFx0J+ODhycsXG5cdF0sXG5cdCfjg4gnOiBbXG5cdFx0J+ODiCcsXG5cdFx0J+ODiScsXG5cdF0sXG5cdCfjg48nOiBbXG5cdFx0J+ODjycsXG5cdFx0J+ODkCcsXG5cdFx0J+ODkScsXG5cdF0sXG5cdCfjg5InOiBbXG5cdFx0J+ODkicsXG5cdFx0J+ODkycsXG5cdFx0J+ODlCcsXG5cdF0sXG5cdCfjg5UnOiBbXG5cdFx0J+ODlScsXG5cdFx0J+ODlicsXG5cdFx0J+ODlycsXG5cdF0sXG5cdCfjg5gnOiBbXG5cdFx0J+ODmCcsXG5cdFx0J+ODmScsXG5cdFx0J+ODmicsXG5cdF0sXG5cdCfjg5snOiBbXG5cdFx0J+ODmycsXG5cdFx0J+ODnCcsXG5cdFx0J+ODnScsXG5cdF0sXG59IGFzIGNvbnN0O1xuXG4vKipcbiAqIOa4hea/gemfs1xuICogJ3N0cmluZycgPT4gW+a4hemfsywg5r+B6Z+zLCDljYrmv4Hpn7NdXG4gKi9cbmV4cG9ydCBjb25zdCB0YWJsZV92b2ljZSA9IE9iamVjdC5mcmVlemUoX2J1aWxkVGFibGVQbHVzKHRhYmxlX3ZvaWNlX2NvcmUpKTtcblxuZXhwb3J0IGNvbnN0IGVudW0gRW51bVRhYmxlVm9pY2Vcbntcblx0LyoqXG5cdCAqIOa4hemfs1xuXHQgKi9cblx0JzAxJyxcblx0LyoqXG5cdCAqIOa/gemfs1xuXHQgKi9cblx0JzAyJyxcblx0LyoqXG5cdCAqIOWNiua/gemfs1xuXHQgKi9cblx0JzAzJyxcbn1cblxuLyoqXG4gKiDmiYDmnInmuIXmv4Hpn7Mg5a2X5YWD5YiX6KGoXG4gKi9cbmV4cG9ydCB0eXBlIElUYWJsZVZvaWNlS2V5cyA9IGtleW9mIHR5cGVvZiB0YWJsZV92b2ljZTtcblxuLyoqXG4gKiBb5riF6Z+zLCDmv4Hpn7MsIOWNiua/gemfs11cbiAqL1xuZXhwb3J0IHR5cGUgSVRhYmxlVm9pY2VWYWx1ZXMgPSByZWFkb25seSBbc3RyaW5nLCBzdHJpbmcsIHN0cmluZz9dO1xuXG5leHBvcnQgZnVuY3Rpb24gaGFzVm9pY2VUYWJsZShjaGFyOiBJVGFibGVWb2ljZUtleXMpOiBFbnVtVGFibGVWb2ljZSB8IDBcbntcblx0cmV0dXJuICh0YWJsZV92b2ljZVtjaGFyXSAmJiB0YWJsZV92b2ljZVtjaGFyXS5sZW5ndGgpIHx8IDBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9nZXQoY2hhcjogc3RyaW5nIHwgSVRhYmxlVm9pY2VLZXlzLCBpZHg6IEVudW1UYWJsZVZvaWNlKTogc3RyaW5nXG57XG5cdGlmICghY2hhci5sZW5ndGgpXG5cdHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKGBjaGFyOiAnJHtjaGFyfScsIG5vdCB2YWxpZGApXG5cdH1cblx0ZWxzZSBpZiAoaWR4ICE9PSBFbnVtVGFibGVWb2ljZVsnMDEnXSAmJiBpZHggIT09IEVudW1UYWJsZVZvaWNlWycwMiddICYmIGlkeCAhPT0gRW51bVRhYmxlVm9pY2VbJzAzJ10pXG5cdHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKGBjaGFyOiAnJHtjaGFyfScsIG5vdCB2YWxpZGApXG5cdH1cblxuXHRpZiAodGFibGVfdm9pY2VbY2hhcl0pXG5cdHtcblx0XHRyZXR1cm4gdGFibGVfdm9pY2VbY2hhcl1baWR4XVxuXHR9XG59XG5cblxuLyoqXG4gKiDmuIXmv4Hpn7NcbiAqIFvmuIXpn7MsIOa/gemfsywg5Y2K5r+B6Z+zXVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Vm9pY2VBbGwoY2hhcjogc3RyaW5nIHwgSVRhYmxlVm9pY2VLZXlzKTogSVRhYmxlVm9pY2VWYWx1ZXNcbntcblx0cmV0dXJuIHRhYmxlX3ZvaWNlW2NoYXJdXG59XG5cbi8qKlxuICog5riF6Z+zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b1ZvaWNlMDEoY2hhcjogc3RyaW5nIHwgSVRhYmxlVm9pY2VLZXlzKTogc3RyaW5nXG57XG5cdHJldHVybiBfZ2V0KGNoYXIsIEVudW1UYWJsZVZvaWNlWycwMSddKVxufVxuXG4vKipcbiAqIOa/gemfs1xuICovXG5leHBvcnQgZnVuY3Rpb24gdG9Wb2ljZTAyKGNoYXI6IHN0cmluZyB8IElUYWJsZVZvaWNlS2V5cyk6IHN0cmluZ1xue1xuXHRyZXR1cm4gX2dldChjaGFyLCBFbnVtVGFibGVWb2ljZVsnMDInXSlcbn1cblxuLyoqXG4gKiDljYrmv4Hpn7NcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvVm9pY2UwMyhjaGFyOiBzdHJpbmcgfCBJVGFibGVWb2ljZUtleXMpOiBzdHJpbmdcbntcblx0cmV0dXJuIF9nZXQoY2hhciwgRW51bVRhYmxlVm9pY2VbJzAzJ10pXG59XG5cbnR5cGUgSUFycmF5T3JSZWFkb25seTxVPiA9IFVbXSB8IHJlYWRvbmx5IFVbXTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9idWlsZFRhYmxlUGx1czxUIGV4dGVuZHMgc3RyaW5nLCBVIGV4dGVuZHMgc3RyaW5nPih0YWJsZV9wbHVzOiBSZWNvcmQ8VCwgSUFycmF5T3JSZWFkb25seTxVPj4pOiBSZWNvcmQ8VSB8IFQsIElUYWJsZVZvaWNlVmFsdWVzPlxue1xuXHRPYmplY3Qua2V5cyh0YWJsZV9wbHVzKVxuXHRcdC5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpXG5cdFx0e1xuXHRcdFx0dGFibGVfcGx1c1trZXldID0gT2JqZWN0LmZyZWV6ZShhcnJheV91bmlxdWUodGFibGVfcGx1c1trZXldKSk7XG5cblx0XHRcdHRhYmxlX3BsdXNba2V5XS5mb3JFYWNoKGZ1bmN0aW9uIChzKVxuXHRcdFx0e1xuXHRcdFx0XHR0YWJsZV9wbHVzW3NdID0gdGFibGVfcGx1c1trZXldO1xuXHRcdFx0fSlcblx0XHR9KVxuXHQ7XG5cblx0Ly8gQHRzLWlnbm9yZVxuXHRyZXR1cm4gdGFibGVfcGx1c1xufVxuXG4vKipcbiAqIOa4hea/gemfs1xuICogW+a4hemfsywg5r+B6Z+zLCDljYrmv4Hpn7NdXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGdldFZvaWNlQWxsXG4iXX0=
"use strict";
/**
 * Created by user on 2017/12/24/024.
 *
 * @see https://www.jcinfo.net/tw/tools/kanji
 * @see http://dict.variants.moe.edu.tw/variants/rbt/japan_chinese_character_tiles.rbt?pageId=2981908
 * @see https://en.wikipedia.org/wiki/List_of_j%C5%8Dy%C5%8D_kanji
 * @see https://hanzi.unihan.com.cn/CJKCompare
 * @see http://www5b.biglobe.ne.jp/%7Eharigaya/variants.html
 */
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../util");
/**
 * 資料來源 https://www.jpmarumaru.com/tw/teachKanjiComparison.asp
 * @see https://www.jpmarumaru.com/tw/teachKanjiComparison.asp
 */
// @ts-ignore
const teachKanjiComparison = require("./teachKanjiComparison.json");
const PLUS_TABLE = util_1.array_unique([
    ['蝕', '蝕', '蚀'],
    ["絲", "絲", "丝"],
    ["異", "異", "异"],
    ["謎", "謎", "谜"],
    ["氷", "冰", "冰"],
    // http://www.kanjipedia.jp/kanji/0003297700
    ["詛", "詛", "诅"],
    //['戻', '戾', null],
    // https://kotobank.jp/word/%E8%B2%AA%E5%A9%AA-564803
    ["貪", "貪", "贪"],
    ["館", "館", "馆"],
    ["画", "劃", "划"],
    ["誰", "誰", "谁"],
    ["鶏", "雞", "鸡"],
    ["宮", "宮", "宫"],
    ["殻", "殻", "壳"],
    ["館", "館", "馆"],
    ["槍", "槍", "枪"],
    //["兎", "兔", "兔"],
    //["兔", "兔", "兔"],
    ['静', '靜', '静'],
    ['髪', '髮', null],
    ['棄', '棄', '弃'],
    ['強', '強', '强'],
    ['罵', '罵', '骂'],
    ['駄', '馱', '驮'],
    ['沢', '澤', '泽'],
    ["歴", "歷", "历"],
    ["暦", "曆", "历"],
    ["刹", "剎", "刹"],
    ["錬", "鍊", "炼"],
    ["蓋", "蓋", "盖"],
    ["決", "決", "决"],
    ["晩", "晚", "晚"],
    ["恒", "恆", "恒"],
    ["准", "準", "准"],
    ["準", "準", "准"],
]);
const PLUS_TABLE_SAFE = util_1.array_unique([
    ["絶", "絕", "绝"],
    ["別", "別", "别"],
    ["魯", "魯", "鲁"],
]);
exports.TABLE = [];
PLUS_TABLE.forEach(function ([jp, zht, zhs]) {
    addNew(exports.TABLE, jp, zht, zhs);
});
// @ts-ignore
exports.TABLE = util_1.array_unique(exports.TABLE.concat(teachKanjiComparison));
exports.TABLE_SAFE = [];
{
    let skip = [
        '系',
        '欠',
        '凶',
        '后',
        '只',
        '隻',
        '无',
        '叶',
    ];
    exports.TABLE = exports.TABLE.filter(function (v) {
        let [jp, zht, zhs] = v;
        if ((jp[0] == zht[0] && jp[0] == zhs[0]) || (skip.includes(jp[0]) || skip.includes(zht[0]) || skip.includes(zhs[0]))) {
            return false;
        }
        return true;
    });
    exports.TABLE_SAFE = [];
    PLUS_TABLE_SAFE.forEach(function ([jp, zht, zhs]) {
        addNew(exports.TABLE, jp, zht, zhs);
        addNew(exports.TABLE_SAFE, jp, zht, zhs);
    });
    let cache = [];
    for (let i in exports.TABLE) {
        if (cache.includes(i)) {
            continue;
        }
        let [jp, zht, zhs] = exports.TABLE[i];
        let _do = true;
        let j;
        for (j in exports.TABLE) {
            if (j == i) {
                continue;
            }
            let [jp2, zht2, zhs2] = exports.TABLE[j];
            if (zht.includes(zht2[0])) {
                _do = false;
                break;
            }
            if (zhs.includes(zhs2[0])) {
                _do = false;
                break;
            }
        }
        if (!_do) {
            cache.push(i);
            cache.push(j);
            //console.log(jp, zht, zhs);
        }
        else {
            exports.TABLE_SAFE.push(exports.TABLE[i]);
        }
    }
}
function addNew(table, jp, zht, zhs) {
    jp = Array.isArray(jp) ? jp : [jp];
    zht = Array.isArray(zht) ? zht : [zht];
    zhs = Array.isArray(zhs) ? zhs : [zhs];
    table.push([
        jp,
        zht,
        zhs,
    ]);
    return table;
}
exports.addNew = addNew;
exports.default = exports.TABLE;
//export default exports;
//if (0)
//{
//	// @ts-ignore
//	import * as fs from 'fs';
//	console.log(TABLE_SAFE);
//	//fs.writeFileSync('./temp.json', JSON.stringify(TABLE_SAFE, null, "\t"));
//}

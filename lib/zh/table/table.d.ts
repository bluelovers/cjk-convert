/**
 * Created by user on 2018/2/17/017.
 */
import { IOptions } from '../convert/core';
export declare let _table_tw: {
    readonly '罗': "羅";
    readonly '恶': "惡";
    readonly '苏': "蘇";
    readonly '馆': "館";
};
/**
 * 此表內符合以下任意值時會觸發
 */
export declare const table_plus: Record<"蘇" | "館" | "暗" | "歴" | "歷" | "暦" | "曆" | "复" | "苏" | "憂" | "咸" | "鹹" | "準" | "儘" | "髮" | "髪" | "慾" | "欲" | "讃" | "讚" | "贊" | "赞" | "賛" | "冲" | "沖" | "衝" | "麵" | "麪" | "麺" | "卷" | "劵" | "券" | "籲" | "炮" | "炼" | "劍" | "剑" | "剣" | "劎" | "劒" | "剱" | "劔" | "砲" | "偽" | "僞" | "內" | "内" | "鬭" | "鬥" | "闘" | "鬪" | "鶏" | "鷄" | "雞" | "鸡" | "兎" | "兔" | "坯" | "坏" | "壊" | "壞" | "殻" | "殼" | "壳" | "像" | "象" | "囌" | "館" | "舘" | "馆" | "鳥" | "鸟" | "𫠓" | "視" | "視" | "视" | "眎" | "険" | "險" | "险" | "嶮" | "崄" | "絶" | "絕" | "绝" | "鉄" | "鐵" | "铁" | "鐡" | "諸" | "諸" | "诸" | "尋" | "寻" | "𡬶" | "裡" | "裏" | "里" | "鑑" | "鉴" | "鑒" | "歲" | "歳" | "岁" | "鐘" | "鍾" | "钟" | "锺" | "會" | "会" | "㑹" | "塗" | "凃" | "涂" | "話" | "话" | "䛡" | "閤" | "阁" | "蔘" | "參" | "参" | "労" | "勞" | "劳" | "国" | "囯" | "國" | "罵" | "骂" | "駡" | "対" | "對" | "对" | "鏽" | "銹" | "锈" | "駄" | "䭾" | "馱" | "驮" | "薩" | "萨" | "蕯" | "単" | "單" | "单" | "継" | "繼" | "继" | "驗" | "验" | "騐" | "験" | "团" | "団" | "團" | "麼" | "麽" | "庅" | "戦" | "戰" | "战" | "郷" | "鄕" | "鄉" | "鄊" | "乡" | "勉" | "勉" | "餘" | "馀" | "余" | "網" | "䋄" | "䋞" | "网" | "託" | "讬" | "侂" | "托" | "纖" | "纤" | "縴" | "繊" | "鍊" | "錬" | "𫔀" | "煉" | "撃" | "擊" | "击" | "實" | "実" | "实" | "寔" | "於" | "扵" | "證" | "証" | "证" | "據" | "据" | "拠" | "處" | "处" | "䖏" | "処" | "瞪" | "瞠" | "眙" | "肢" | "胑" | "肉" | "宍" | "𠕎" | "𢝊" | "𢚧" | "𢟜" | "懮" | "𨗫" | "繫" | "繋" | "廻" | "迴" | "録" | "錄" | "录" | "鎗" | "槍" | "枪" | "悠" | "滺" | "壶" | "壺" | "壷" | "茲" | "兹" | "玆" | "蓋" | "盖" | "葢" | "蹟" | "跡" | "迹" | "癒" | "瘉" | "辺" | "邊" | "边" | "邉" | "凖" | "衛" | "衞" | "卫" | "晚" | "晩" | "裸" | "躶" | "亀" | "龜" | "龟" | "𪚧" | "𪚿" | "𠃾" | "凼" | "氹" | "艸" | "草" | "箚" | "剳" | "復" | "複" | "污" | "汙" | "汚" | "伙" | "夥" | "御" | "禦" | "鬱" | "郁" | "淩" | "凌" | "紮" | "扎" | "痴" | "癡" | "栖" | "棲" | "犇" | "奔" | "範" | "范" | "薑" | "姜" | "葁" | "樸" | "朴" | "諮" | "谘" | "咨" | "撚" | "捻" | "喂" | "餵" | "餧" | "𫗭" | "淨" | "凈" | "净" | "栗" | "慄" | "挽" | "輓" | "灶" | "竈" | "線" | "缐" | "綫" | "线" | "盡" | "尽" | "黴" | "霉" | "周" | "週" | "並" | "并" | "併" | "観" | "觀" | "观" | "覌" | "遊" | "游" | "启" | "啓" | "啟" | "啔" | "廄" | "厩" | "廐" | "廏" | "気" | "氣" | "气" | "傑" | "杰" | "鍛" | "锻" | "煅" | "徵" | "徴" | "閒" | "𫔮" | "閑" | "闲" | "櫻" | "桜" | "樱" | "尨" | "狵" | "圈" | "圏" | "凶" | "兇" | "浜" | "濱" | "滨" | "煙" | "烟" | "菸" | "黒" | "黑" | "樂" | "乐" | "楽" | "薬" | "藥" | "药" | "葯" | "𣛙" | "貳" | "贰" | "弐" | "貮" | "𢎐" | "二" | "隷" | "隸" | "隶" | "姫" | "姬" | "燻" | "熏" | "龥" | "齧" | "啮" | "𪘂" | "囓" | "噛" | "嚙" | "鹼" | "碱" | "硷" | "穗" | "穂" | "廢" | "廃" | "废" | "蹠" | "跖" | "吒" | "咤" | "剷" | "鏟" | "铲" | "刬" | "剗" | "擗" | "劈" | "核" | "覈" | "脣" | "唇" | "升" | "昇" | "磐" | "盤" | "盘" | "溪" | "渓" | "谿" | "嵠" | "折" | "摺" | "祐" | "佑" | "瓮" | "罋" | "甕" | "蹤" | "踪" | "踨" | "闇" | "昵" | "暱" | "布" | "佈" | "為" | "为" | "爲" | "綳" | "繃" | "绷" | "痺" | "痹" | "痲" | "痳" | "雇" | "僱" | "敘" | "叙" | "敍" | "盪" | "蕩" | "荡" | "勛" | "勳" | "勋" | "祕" | "秘" | "牆" | "墙" | "墻" | "爾" | "尔" | "尓" | "焰" | "焔" | "默" | "黙" | "壓" | "压" | "圧" | "廸" | "迪" | "曉" | "晓" | "暁" | "霸" | "覇" | "霊" | "靈" | "灵" | "泪" | "涙" | "淚" | "牺" | "犠" | "犧" | "藉" | "耤" | "噸" | "吨" | "俱" | "倶" | "粽" | "糉" | "糭" | "向" | "曏" | "嚮" | "悽" | "淒" | "凄" | "鱷" | "鰐" | "鳄" | "滷" | "鹵" | "卤" | "颜" | "顏" | "顔" | "樑" | "梁" | "砂" | "沙" | "炭" | "碳" | "糸" | "絲" | "丝" | "簷" | "檐" | "涌" | "湧" | "穀" | "糓" | "両" | "两" | "兩" | "家" | "傢" | "妳" | "你" | "她" | "他" | "札", string[]>;
/**
 * 此表內只有符合 KEY 值時才會觸發
 */
export declare const table_jp: Record<"蘇" | "館" | "の" | "と" | "画" | "暗" | "図" | "当" | "罗" | "囉" | "啰" | "幹" | "乾" | "干" | "亁" | "乹" | "历" | "歴" | "歷" | "暦" | "曆" | "呻" | "覆" | "复" | "甦" | "苏" | "憂" | "咸" | "鹹" | "準" | "准" | "袮" | "儘" | "侭" | "脏" | "髮" | "髪" | "发" | "慾" | "欲" | "讃" | "讚" | "贊" | "赞" | "賛" | "冲" | "沖" | "衝" | "麵" | "麪" | "麺" | "鬚" | "揹" | "捲" | "卷" | "巻" | "劵" | "券" | "瀏" | "浏" | "籲" | "吁" | "修" | "犟" | "嗬" | "唿" | "媮" | "采" | "彩" | "𠩺" | "恶" | "炰" | "炮" | "辟" | "闢" | "避" | "儓" | "檯" | "台" | "炼" | "劍" | "剑" | "剣" | "劎" | "劒" | "剱" | "劔" | "砲" | "偽" | "僞" | "內" | "内" | "鬭" | "鬥" | "闘" | "鬪" | "鶏" | "鷄" | "雞" | "鸡" | "兎" | "兔" | "坯" | "坏" | "壊" | "壞" | "殻" | "殼" | "壳" | "像" | "象" | "囌" | "館" | "舘" | "馆" | "鳥" | "鸟" | "𫠓" | "視" | "視" | "视" | "眎" | "険" | "險" | "险" | "嶮" | "崄" | "絶" | "絕" | "绝" | "鉄" | "鐵" | "铁" | "鐡" | "諸" | "諸" | "诸" | "尋" | "寻" | "𡬶" | "裡" | "裏" | "里" | "鑑" | "鉴" | "鑒" | "歲" | "歳" | "岁" | "鐘" | "鍾" | "钟" | "锺" | "會" | "会" | "㑹" | "塗" | "凃" | "涂" | "話" | "话" | "䛡" | "閤" | "阁" | "蔘" | "參" | "参" | "労" | "勞" | "劳" | "国" | "囯" | "國" | "罵" | "骂" | "駡" | "対" | "對" | "对" | "鏽" | "銹" | "锈" | "駄" | "䭾" | "馱" | "驮" | "薩" | "萨" | "蕯" | "単" | "單" | "单" | "継" | "繼" | "继" | "驗" | "验" | "騐" | "験" | "团" | "団" | "團" | "麼" | "麽" | "庅" | "戦" | "戰" | "战" | "郷" | "鄕" | "鄉" | "鄊" | "乡" | "勉" | "勉" | "餘" | "馀" | "余" | "網" | "䋄" | "䋞" | "网" | "託" | "讬" | "侂" | "托" | "纖" | "纤" | "縴" | "繊" | "鍊" | "錬" | "𫔀" | "煉" | "撃" | "擊" | "击" | "實" | "実" | "实" | "寔" | "於" | "扵" | "證" | "証" | "证" | "據" | "据" | "拠" | "處" | "处" | "䖏" | "処" | "瞪" | "瞠" | "眙" | "肢" | "胑" | "肉" | "宍" | "𠕎" | "𢝊" | "𢚧" | "𢟜" | "懮" | "𨗫" | "繫" | "繋" | "廻" | "迴" | "録" | "錄" | "录" | "鎗" | "槍" | "枪" | "悠" | "滺" | "壶" | "壺" | "壷" | "茲" | "兹" | "玆" | "蓋" | "盖" | "葢" | "蹟" | "跡" | "迹" | "癒" | "瘉" | "辺" | "邊" | "边" | "邉" | "凖" | "衛" | "衞" | "卫" | "晚" | "晩" | "裸" | "躶" | "亀" | "龜" | "龟" | "𪚧" | "𪚿" | "𠃾" | "凼" | "氹" | "艸" | "草" | "箚" | "剳" | "復" | "複" | "污" | "汙" | "汚" | "伙" | "夥" | "御" | "禦" | "鬱" | "郁" | "淩" | "凌" | "紮" | "扎" | "痴" | "癡" | "栖" | "棲" | "犇" | "奔" | "範" | "范" | "薑" | "姜" | "葁" | "樸" | "朴" | "諮" | "谘" | "咨" | "撚" | "捻" | "喂" | "餵" | "餧" | "𫗭" | "淨" | "凈" | "净" | "栗" | "慄" | "挽" | "輓" | "灶" | "竈" | "線" | "缐" | "綫" | "线" | "盡" | "尽" | "黴" | "霉" | "周" | "週" | "並" | "并" | "併" | "観" | "觀" | "观" | "覌" | "遊" | "游" | "启" | "啓" | "啟" | "啔" | "廄" | "厩" | "廐" | "廏" | "気" | "氣" | "气" | "傑" | "杰" | "鍛" | "锻" | "煅" | "徵" | "徴" | "閒" | "𫔮" | "閑" | "闲" | "櫻" | "桜" | "樱" | "尨" | "狵" | "圈" | "圏" | "凶" | "兇" | "浜" | "濱" | "滨" | "煙" | "烟" | "菸" | "黒" | "黑" | "樂" | "乐" | "楽" | "薬" | "藥" | "药" | "葯" | "𣛙" | "貳" | "贰" | "弐" | "貮" | "𢎐" | "二" | "隷" | "隸" | "隶" | "姫" | "姬" | "燻" | "熏" | "龥" | "齧" | "啮" | "𪘂" | "囓" | "噛" | "嚙" | "鹼" | "碱" | "硷" | "穗" | "穂" | "廢" | "廃" | "废" | "蹠" | "跖" | "吒" | "咤" | "剷" | "鏟" | "铲" | "刬" | "剗" | "擗" | "劈" | "核" | "覈" | "脣" | "唇" | "升" | "昇" | "磐" | "盤" | "盘" | "溪" | "渓" | "谿" | "嵠" | "折" | "摺" | "祐" | "佑" | "瓮" | "罋" | "甕" | "蹤" | "踪" | "踨" | "闇" | "昵" | "暱" | "布" | "佈" | "為" | "为" | "爲" | "綳" | "繃" | "绷" | "痺" | "痹" | "痲" | "痳" | "雇" | "僱" | "敘" | "叙" | "敍" | "盪" | "蕩" | "荡" | "勛" | "勳" | "勋" | "祕" | "秘" | "牆" | "墙" | "墻" | "爾" | "尔" | "尓" | "焰" | "焔" | "默" | "黙" | "壓" | "压" | "圧" | "廸" | "迪" | "曉" | "晓" | "暁" | "霸" | "覇" | "霊" | "靈" | "灵" | "泪" | "涙" | "淚" | "牺" | "犠" | "犧" | "藉" | "耤" | "噸" | "吨" | "俱" | "倶" | "粽" | "糉" | "糭" | "向" | "曏" | "嚮" | "悽" | "淒" | "凄" | "鱷" | "鰐" | "鳄" | "滷" | "鹵" | "卤" | "颜" | "顏" | "顔" | "樑" | "梁" | "砂" | "沙" | "炭" | "碳" | "糸" | "絲" | "丝" | "簷" | "檐" | "涌" | "湧" | "穀" | "糓" | "両" | "两" | "兩" | "家" | "傢" | "妳" | "你" | "她" | "他" | "札" | "忧" | "面" | "練" | "练" | "版", string[]>;
declare type IArrayOrReadonly<U> = U[] | readonly U[];
export declare function _uniqueTable<T extends Record<string, IArrayOrReadonly<string>>>(table_jp: T): T;
export declare function _buildTablePlus<T extends string, U extends string>(table_plus: Record<T, IArrayOrReadonly<U>>): Record<U | T, string[]>;
export declare function _mergeTable<T extends string, U extends string>(table_jp: Record<T, IArrayOrReadonly<string>>, table_plus: Record<U, IArrayOrReadonly<string>>): Record<U | T, string[]>;
export interface ISimpleTable {
    [key: string]: string;
}
export declare let _table_cn: ISimpleTable;
export declare function _update(target: ISimpleTable, source: ISimpleTable): ISimpleTable;
export declare function _get(arr: string[], value: string | string[], ...values: Array<string | string[]>): string[];
export declare function jp(char: string, options?: IOptions): string[];
export declare function tw(char: string, options?: IOptions): string[];
export declare function cn(char: string, options?: IOptions): string[];
declare const _default: typeof import("./table");
export default _default;

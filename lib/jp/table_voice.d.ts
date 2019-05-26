/**
 * 清濁音
 * 'string' => [清音, 濁音, 半濁音]
 */
export declare const table_voice: Readonly<Record<"か" | "が" | "き" | "ぎ" | "く" | "ぐ" | "け" | "げ" | "こ" | "ご" | "さ" | "ざ" | "し" | "じ" | "す" | "ず" | "せ" | "ぜ" | "そ" | "ぞ" | "た" | "だ" | "ち" | "ぢ" | "つ" | "づ" | "て" | "で" | "と" | "ど" | "は" | "ば" | "ぱ" | "ひ" | "び" | "ぴ" | "ふ" | "ぶ" | "ぷ" | "へ" | "べ" | "ぺ" | "ほ" | "ぼ" | "ぽ" | "カ" | "ガ" | "キ" | "ギ" | "ク" | "グ" | "ケ" | "ゲ" | "コ" | "ゴ" | "サ" | "ザ" | "シ" | "ジ" | "ス" | "ズ" | "セ" | "ゼ" | "ソ" | "ゾ" | "タ" | "ダ" | "チ" | "ヂ" | "ツ" | "ヅ" | "テ" | "デ" | "ト" | "ド" | "ハ" | "バ" | "パ" | "ヒ" | "ビ" | "ピ" | "フ" | "ブ" | "プ" | "ヘ" | "ベ" | "ペ" | "ホ" | "ボ" | "ポ", readonly [string, string, string?]>>;
export declare const enum EnumTableVoice {
    /**
     * 清音
     */
    '01' = 0,
    /**
     * 濁音
     */
    '02' = 1,
    /**
     * 半濁音
     */
    '03' = 2
}
/**
 * 所有清濁音 字元列表
 */
export declare type ITableVoiceKeys = keyof typeof table_voice;
/**
 * [清音, 濁音, 半濁音]
 */
export declare type ITableVoiceValues = readonly [string, string, string?];
export declare function hasVoiceTable(char: ITableVoiceKeys): EnumTableVoice | 0;
export declare function _get(char: string | ITableVoiceKeys, idx: EnumTableVoice): string;
/**
 * 清濁音
 * [清音, 濁音, 半濁音]
 */
export declare function getVoiceAll(char: string | ITableVoiceKeys): ITableVoiceValues;
/**
 * 清音
 */
export declare function toVoice01(char: string | ITableVoiceKeys): string;
/**
 * 濁音
 */
export declare function toVoice02(char: string | ITableVoiceKeys): string;
/**
 * 半濁音
 */
export declare function toVoice03(char: string | ITableVoiceKeys): string;
declare type IArrayOrReadonly<U> = U[] | readonly U[];
export declare function _buildTablePlus<T extends string, U extends string>(table_plus: Record<T, IArrayOrReadonly<U>>): Record<U | T, ITableVoiceValues>;
export default getVoiceAll;

/**
 * Created by user on 2019/7/26.
 */
export declare const zeroWidthList: readonly ["󠄀", "‌", "‍", "​", "﻿", "‎", "‏"];
export declare const zeroWidthRe: RegExp;
export declare function removeZeroWidth(input: string): string;
export default removeZeroWidth;

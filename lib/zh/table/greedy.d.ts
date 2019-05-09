/**
 * Created by user on 2019/5/9.
 */
export declare const _greedyTableCacheRegexp: readonly (readonly [RegExp, string])[], _greedyTableCacheMap: Map<string, readonly string[]>, _greedyTableCacheTest: RegExp;
export declare function _greedyTableBuild(data: [RegExp, string][]): {
    _greedyTableCacheRegexp: readonly (readonly [RegExp, string])[];
    _greedyTableCacheMap: Map<string, readonly string[]>;
    _greedyTableCacheTest: RegExp;
};
export declare function greedyTableTest(input: string): boolean;
export declare function greedyTableCharArray(char: string): readonly string[];
export declare function greedyTableReplace(input: string): string;
declare const _default: typeof import("./greedy");
export default _default;

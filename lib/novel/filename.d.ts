/**
 * Created by user on 2018/2/17/017.
 */
export interface IOptions {
    skip?: string;
    safe?: boolean;
}
export declare function filename(name: string, options?: IOptions): string;
export declare function word(name: string, options?: IOptions): string;
export declare function jp(txt: string, options?: IOptions): string;
export declare function zh(txt: string, options?: IOptions): string;
declare const _default: typeof import("./filename");
export default _default;

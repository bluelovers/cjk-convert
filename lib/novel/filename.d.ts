export interface IOptions {
    skip?: string;
}
export declare function filename(name: string, options?: IOptions): string;
export declare function word(name: string, options?: IOptions): string;
export declare function jp(txt: string, options?: IOptions): string;
export declare function zh(txt: string, options?: IOptions): string;
import * as novelFilename from './filename';
export default novelFilename;

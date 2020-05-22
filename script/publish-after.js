"use strict";
/**
 * Created by user on 2018/7/24/024.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const package_json_1 = __importDefault(require("../package.json"));
/// <reference types="cross-spawn" />
(async () => {
    const project_root = path_1.default.join(__dirname, '..');
    let crossSpawn;
    // @ts-ignore
    crossSpawn = await Promise.resolve().then(() => __importStar(require('cross-spawn')));
    let gitroot;
    // @ts-ignore
    gitroot = await Promise.resolve().then(() => __importStar(require('git-root2')));
    // @ts-ignore
    gitroot = gitroot(__dirname);
    if (!gitroot || path_1.default.relative(gitroot, project_root)) {
        let __root_ws = path_1.default.join(project_root, '../../..');
        if (!__root_ws || path_1.default.relative(gitroot, __root_ws)) {
            console.warn(`no git exists`);
            console.warn(`__root_ws`, __root_ws);
            console.warn(`gitroot`, gitroot);
            console.warn(`path.relative`, path_1.default.relative(gitroot, project_root));
            return;
        }
    }
    let options = {
        cwd: path_1.default.join(project_root, 'build'),
        stdio: 'inherit',
    };
    let msg = `build(cache): build cache v${package_json_1.default.version}`;
    await crossSpawn('git', [
        'commit',
        '.',
        '-m',
        msg,
    ], options);
    /*
    await new Promise(function (done)
    {
        setTimeout(done, 500);
    });

    await crossSpawn('git', [
        'tag',
        '-a',
        PackageJson.version,
        '-m',
        msg,
    ], options);
     */
})().catch(e => console.error(e));
//# sourceMappingURL=publish-after.js.map
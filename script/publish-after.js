"use strict";
/**
 * Created by user on 2018/7/24/024.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const path_1 = tslib_1.__importDefault(require("path"));
const package_json_1 = tslib_1.__importDefault(require("../package.json"));
const cross_spawn_extra_1 = tslib_1.__importDefault(require("cross-spawn-extra"));
const core_1 = tslib_1.__importDefault(require("git-root2/core"));
exports.default = (async () => {
    const project_root = path_1.default.join(__dirname, '..');
    let gitroot;
    gitroot = (0, core_1.default)(__dirname);
    if (!gitroot || path_1.default.relative(gitroot, project_root)) {
        let __root_ws = await Promise.resolve().then(() => tslib_1.__importStar(require('../../../__root_ws'))).then(m => m.__root_ws)
            .catch(e => null);
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
    await cross_spawn_extra_1.default.async('git', [
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
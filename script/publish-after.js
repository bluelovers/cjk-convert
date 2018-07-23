"use strict";
/**
 * Created by user on 2018/7/24/024.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const PackageJson = require("../package.json");
/// <reference types="cross-spawn" />
(async () => {
    const project_root = path.join(__dirname, '..');
    let crossSpawn;
    // @ts-ignore
    crossSpawn = await Promise.resolve().then(() => require('cross-spawn'));
    let gitroot;
    // @ts-ignore
    gitroot = await Promise.resolve().then(() => require('git-root2'));
    // @ts-ignore
    gitroot = gitroot(__dirname);
    if (!gitroot || path.relative(gitroot, project_root)) {
        console.warn(`no git exists`);
        return;
    }
    let options = {
        cwd: project_root,
        stdio: 'inherit',
    };
    let msg = `npm publish ${PackageJson.version}`;
    await crossSpawn('git', [
        'commit',
        '-a',
        '-m',
        msg,
    ], options);
    await new Promise(function (done) {
        setTimeout(done, 500);
    });
    await crossSpawn('git', [
        'tag',
        '-a',
        PackageJson.version,
        '-m',
        msg,
    ], options);
})().catch(e => console.error(e));

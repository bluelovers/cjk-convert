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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGlzaC1hZnRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInB1Ymxpc2gtYWZ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOztHQUVHOztBQUVILDZCQUE2QjtBQUM3QiwrQ0FBK0M7QUFFL0MscUNBQXFDO0FBRXJDLENBQUMsS0FBSyxJQUFJLEVBQUU7SUFFWCxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUVoRCxJQUFJLFVBQTZCLENBQUM7SUFDbEMsYUFBYTtJQUNiLFVBQVUsR0FBRywyQ0FBYSxhQUFhLEVBQUMsQ0FBQztJQUV6QyxJQUFJLE9BQWUsQ0FBQztJQUVwQixhQUFhO0lBQ2IsT0FBTyxHQUFHLDJDQUFhLFdBQVcsRUFBQyxDQUFDO0lBQ3BDLGFBQWE7SUFDYixPQUFPLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBRTdCLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDLEVBQ3BEO1FBQ0MsT0FBTyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUM5QixPQUFPO0tBQ1A7SUFFRCxJQUFJLE9BQU8sR0FBRztRQUNiLEdBQUcsRUFBRSxZQUFZO1FBQ2pCLEtBQUssRUFBRSxTQUFTO0tBQ2hCLENBQUM7SUFFRixJQUFJLEdBQUcsR0FBRyxlQUFlLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUUvQyxNQUFNLFVBQVUsQ0FBQyxLQUFLLEVBQUU7UUFDdkIsUUFBUTtRQUNSLElBQUk7UUFDSixJQUFJO1FBQ0osR0FBRztLQUNILEVBQUUsT0FBTyxDQUFDLENBQUM7SUFFWixNQUFNLElBQUksT0FBTyxDQUFDLFVBQVUsSUFBSTtRQUUvQixVQUFVLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBRUgsTUFBTSxVQUFVLENBQUMsS0FBSyxFQUFFO1FBQ3ZCLEtBQUs7UUFDTCxJQUFJO1FBQ0osV0FBVyxDQUFDLE9BQU87UUFDbkIsSUFBSTtRQUNKLEdBQUc7S0FDSCxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBRWIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgdXNlciBvbiAyMDE4LzcvMjQvMDI0LlxuICovXG5cbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgKiBhcyBQYWNrYWdlSnNvbiBmcm9tICcuLi9wYWNrYWdlLmpzb24nO1xuaW1wb3J0ICogYXMgQ3Jvc3NTcGF3biBmcm9tICdjcm9zcy1zcGF3bi1leHRyYSc7XG4vLy8gPHJlZmVyZW5jZSB0eXBlcz1cImNyb3NzLXNwYXduXCIgLz5cblxuKGFzeW5jICgpID0+XG57XG5cdGNvbnN0IHByb2plY3Rfcm9vdCA9IHBhdGguam9pbihfX2Rpcm5hbWUsICcuLicpO1xuXG5cdGxldCBjcm9zc1NwYXduOiB0eXBlb2YgQ3Jvc3NTcGF3bjtcblx0Ly8gQHRzLWlnbm9yZVxuXHRjcm9zc1NwYXduID0gYXdhaXQgaW1wb3J0KCdjcm9zcy1zcGF3bicpO1xuXG5cdGxldCBnaXRyb290OiBzdHJpbmc7XG5cblx0Ly8gQHRzLWlnbm9yZVxuXHRnaXRyb290ID0gYXdhaXQgaW1wb3J0KCdnaXQtcm9vdDInKTtcblx0Ly8gQHRzLWlnbm9yZVxuXHRnaXRyb290ID0gZ2l0cm9vdChfX2Rpcm5hbWUpO1xuXG5cdGlmICghZ2l0cm9vdCB8fCBwYXRoLnJlbGF0aXZlKGdpdHJvb3QsIHByb2plY3Rfcm9vdCkpXG5cdHtcblx0XHRjb25zb2xlLndhcm4oYG5vIGdpdCBleGlzdHNgKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRsZXQgb3B0aW9ucyA9IHtcblx0XHRjd2Q6IHByb2plY3Rfcm9vdCxcblx0XHRzdGRpbzogJ2luaGVyaXQnLFxuXHR9O1xuXG5cdGxldCBtc2cgPSBgbnBtIHB1Ymxpc2ggJHtQYWNrYWdlSnNvbi52ZXJzaW9ufWA7XG5cblx0YXdhaXQgY3Jvc3NTcGF3bignZ2l0JywgW1xuXHRcdCdjb21taXQnLFxuXHRcdCctYScsXG5cdFx0Jy1tJyxcblx0XHRtc2csXG5cdF0sIG9wdGlvbnMpO1xuXG5cdGF3YWl0IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChkb25lKVxuXHR7XG5cdFx0c2V0VGltZW91dChkb25lLCA1MDApO1xuXHR9KTtcblxuXHRhd2FpdCBjcm9zc1NwYXduKCdnaXQnLCBbXG5cdFx0J3RhZycsXG5cdFx0Jy1hJyxcblx0XHRQYWNrYWdlSnNvbi52ZXJzaW9uLFxuXHRcdCctbScsXG5cdFx0bXNnLFxuXHRdLCBvcHRpb25zKTtcblxufSkoKS5jYXRjaChlID0+IGNvbnNvbGUuZXJyb3IoZSkpO1xuIl19
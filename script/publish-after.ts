/**
 * Created by user on 2018/7/24/024.
 */

import path from 'path';
import PackageJson from '../package.json';
import CrossSpawn from 'cross-spawn-extra';
/// <reference types="cross-spawn" />

(async () =>
{
	const project_root = path.join(__dirname, '..');

	let crossSpawn: typeof CrossSpawn;
	// @ts-ignore
	crossSpawn = await import('cross-spawn');

	let gitroot: string;

	// @ts-ignore
	gitroot = await import('git-root2');
	// @ts-ignore
	gitroot = gitroot(__dirname);

	if (!gitroot || path.relative(gitroot, project_root))
	{
		let __root_ws = path.join(project_root, '../../..');

		if (!__root_ws || path.relative(gitroot, __root_ws))
		{
			console.warn(`no git exists`);
			console.warn(`__root_ws`, __root_ws);
			console.warn(`gitroot`, gitroot);
			console.warn(`path.relative`, path.relative(gitroot, project_root));
			return;
		}
	}

	let options = {
		cwd: path.join(project_root, 'build'),
		stdio: 'inherit',
	};

	let msg = `build(cache): build cache v${PackageJson.version}`;

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

/**
 * Created by user on 2019/5/26.
 */

/// <reference types="mocha" />
/// <reference types="chai" />
/// <reference types="node" />

import { chai, relative, expect, path, assert, util, mochaAsync } from '../_local-dev';
import { table_voice, ITableVoiceKeys, getVoiceAll, toVoice01, toVoice02, toVoice03, _get, EnumTableVoice, ITableVoiceValues } from '../../lib/jp/table_voice';
import { array_unique } from 'array-hyper-unique';

// @ts-ignore
describe(relative(__filename), () =>
{
	let currentTest: Mocha.Test;

	let table_voice_keys = Object.keys(table_voice) as ITableVoiceKeys[];

	beforeEach(function ()
	{
		currentTest = this.currentTest;

		//console.log('it:before', currentTest.title);
		//console.log('it:before', currentTest.fullTitle());
	});

	// @ts-ignore
	describe(`suite`, () =>
	{
		table_voice_keys
			.forEach((char) => {

				const arr = getVoiceAll(char);
				const len = arr.length;

				// @ts-ignore
				it(`${char}.length 1 ~ 3`, function ()
				{
					expect(arr).is.array.have.length.gt(1).lte(3);

					let actual = arr[EnumTableVoice['01']];
					let expected = toVoice01(char);

					expect(actual).exist.string().equal(expected);

					expect(array_unique(arr))
						.have
						.lengthOf(len)
					;
				});

				it(`${char} 01`, function ()
				{
					let actual;
					let expected;

					expect(toVoice01(char)).deep.equal(getVoiceAll(char)[EnumTableVoice['01']]);
					expect(EnumTableVoice['01']).deep.equal(0)
				});

				it(`${char} 02`, function ()
				{
					let actual;
					let expected;

					expect(toVoice02(char)).deep.equal(getVoiceAll(char)[EnumTableVoice['02']]);
					expect(EnumTableVoice['02']).deep.equal(1)
				});

				it(`${char} 03`, function ()
				{
					let actual;
					let expected;

					expect(toVoice03(char)).deep.equal(getVoiceAll(char)[EnumTableVoice['03']]);
					expect(EnumTableVoice['03']).deep.equal(2)
				});

			})
		;

		it(`か`, function ()
		{
			let actual;
			let expected;

			let char = 'か';

			expect(toVoice01(char)).exist.equal(char);
			expect(toVoice02(char)).exist.equal('が');
			expect(toVoice03(char)).not.exist;
		});

		it(`throw error`, function ()
		{
			let actual;
			let expected;

			let char = '';

			expect(() => toVoice01(null)).to.throw();
			expect(() => toVoice01(undefined)).to.throw();
			expect(() => toVoice01('')).to.throw();
			expect(() => toVoice01('k')).to.not.throw();
		});

	});
});

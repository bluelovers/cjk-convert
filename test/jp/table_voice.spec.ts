import {
	getVoiceAll,
	EnumTableVoice,
	toVoice01,
	toVoice02,
	toVoice03,
	table_voice,
	ITableVoiceKeys,
} from '../../lib/jp/table_voice';
import { array_unique } from 'array-hyper-unique';

describe(`table_voice_keys`, () =>
{
	let table_voice_keys = Object.keys(table_voice) as ITableVoiceKeys[];

	table_voice_keys
		.forEach((char) => {

			const arr = getVoiceAll(char);
			const len = arr.length;

			// @ts-ignore
			it(`${char}.length 1 ~ 3`, function ()
			{
				expect(Array.isArray(arr)).toBeTruthy();
				expect(arr.length).toBeGreaterThan(1);
				expect(arr.length).toBeLessThanOrEqual(3);

				let actual = arr[EnumTableVoice['01']];
				let expected = toVoice01(char);

				expect(actual).toStrictEqual(expected)

				expect(array_unique(arr)).toHaveLength(len)

				expect(actual).toMatchSnapshot();
				expect(arr).toMatchSnapshot();
			});

			it(`${char} 01`, function ()
			{
				expect(toVoice01(char)).toStrictEqual(getVoiceAll(char)[EnumTableVoice['01']]);
				expect(EnumTableVoice['01']).toStrictEqual(0)
			});

			it(`${char} 02`, function ()
			{
				expect(toVoice02(char)).toStrictEqual(getVoiceAll(char)[EnumTableVoice['02']]);
				expect(EnumTableVoice['02']).toStrictEqual(1)
			});

			it(`${char} 03`, function ()
			{
				expect(toVoice03(char)).toStrictEqual(getVoiceAll(char)[EnumTableVoice['03']]);
				expect(EnumTableVoice['03']).toStrictEqual(2)
			});

		})
	;

})

describe(`getVoice`, () =>
{

	test(`か`, () =>
	{
		let char = 'か';

		let actual = getVoiceAll(char);

		expect(toVoice01(char)).toStrictEqual(char);
		expect(toVoice02(char)).toStrictEqual('が');
		expect(toVoice03(char)).toBeUndefined();

		//expect(actual).toBeInstanceOf(Date);
		expect(actual).toMatchSnapshot();

	});

})

describe(`throw error`, () =>
{

	test(`null`, () =>
	{
		expect(() => toVoice01(null)).toThrowError();
	});

	test(`undefined`, () =>
	{
		expect(() => toVoice01(void 0)).toThrowError();
	});

	test(`empty text`, () =>
	{
		expect(() => toVoice01('')).toThrowError();
	});

	test(`k`, () =>
	{
		expect(() => toVoice01('k')).not.toThrowError();
	});

})

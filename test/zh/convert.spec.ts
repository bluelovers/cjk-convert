import { cn2tw, tw2cn } from '../../lib/zh/convert';
import table_same from '@lazy-cjk/zh-convert-table/test/raw/table_same';

describe(`simple check`, () =>
{

	([
		['候', '侯'],
	] as [string, string][]).forEach((ls) =>
	{

		test(ls.join('|'), () =>
		{
			expect(ls[0]).not.toStrictEqual(ls[1]);

			expect(cn2tw(ls[0])).not.toStrictEqual(ls[1]);
			expect(tw2cn(ls[0])).not.toStrictEqual(ls[1]);

			expect(cn2tw(ls[1])).not.toStrictEqual(ls[0]);
			expect(tw2cn(ls[1])).not.toStrictEqual(ls[0]);

			expect(cn2tw(ls[0], {
				safe: false,
			})).not.toStrictEqual(ls[1]);
			expect(tw2cn(ls[0], {
				safe: false,
			})).not.toStrictEqual(ls[1]);

			expect(cn2tw(ls[1], {
				safe: false,
			})).not.toStrictEqual(ls[0]);
			expect(tw2cn(ls[1], {
				safe: false,
			})).not.toStrictEqual(ls[0]);

		});
	});

})

describe(`known bugs of common table`, () =>
{

	describe(`tw <=> cn`, () =>
	{

		Object.entries({
			"瀰": "㳽",
			'氣': '气',
			'淨': '净',
		} as Record<string, string>).forEach((ls) =>
		{

			test(ls.join(' <=> '), () =>
			{

				expect(cn2tw(ls[1])).toStrictEqual(ls[0]);
				expect(tw2cn(ls[0])).toStrictEqual(ls[1]);

				expect(cn2tw(ls[1], {
					safe: false,
				})).toStrictEqual(ls[0]);
				expect(tw2cn(ls[0], {
					safe: false,
				})).toStrictEqual(ls[1]);

			});

		});

	});

	describe(`tw === cn`, () =>
	{

		table_same.forEach((c) =>
		{

			test(c, () =>
			{

				expect(cn2tw(c)).toStrictEqual(c);
				expect(tw2cn(c)).toStrictEqual(c);

				expect(cn2tw(c, {
					safe: false,
				})).toStrictEqual(c);
				expect(tw2cn(c, {
					safe: false,
				})).toStrictEqual(c);

			});

		});

	});

});

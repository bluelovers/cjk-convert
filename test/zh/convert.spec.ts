import { cn2tw, tw2cn } from '../../lib/zh/convert';

describe(`simple check`, () =>
{

	([
		['候', '侯'],
	] as [string, string][]).forEach((ls) => {

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

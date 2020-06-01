import _m0 = require('../version');
import _m1 from '../version';
import { version } from '../package.json';

test(`export version check`, () =>
{

	expect(_m0.version).toStrictEqual(_m1);
	expect(_m0.version).toStrictEqual(version);

});

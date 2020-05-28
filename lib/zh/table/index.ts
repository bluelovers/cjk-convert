/**
 * Created by user on 2018/2/17/017.
 */

import libTable from '@lazy-cjk/zh-table-alias';
import { _get } from '@lazy-cjk/zh-table-list/lib/util';

export * from '@lazy-cjk/zh-table-list/lib/types';

export * from '@lazy-cjk/zh-table-list';

export { libTable }
export { _get }

export default exports as typeof import('./index');

"use strict";
/**
 * Created by user on 2018/7/29/029.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tableTw2CnDebug = require("../../../build/zh/convert/table_tw2cn.debug.json");
exports.tableTw2CnDebug = tableTw2CnDebug;
const tableCn2TwDebug = require("../../../build/zh/convert/table_cn2tw.debug.json");
exports.tableCn2TwDebug = tableCn2TwDebug;
const core_1 = require("./core");
const index_1 = require("./index");
const array_hyper_unique_1 = require("array-hyper-unique");
exports.SAFE_MODE_CHAR_MIN = array_hyper_unique_1.array_unique(core_1.SAFE_MODE_CHAR
    .slice()
    .concat([
    //'忧',
    '脏',
    '划',
    '准',
    '发',
    '処',
    //'处',
    '處',
    //'憂',
    //'優',
    '餵',
    '炮',
    '砲',
    '奸',
    '姦',
]));
exports.SAFE_MODE_CHAR = exports.SAFE_MODE_CHAR_MIN;
/**
 * 以不造成歧異的字典表來取代
 */
function tw2cn_min(text, options = {}, ...argv) {
    options = fixOptions(options, tableTw2CnDebug.safe);
    return index_1.tw2cn(text, options, ...argv);
}
exports.tw2cn_min = tw2cn_min;
/**
 * 以不造成歧異的字典表來取代
 */
function cn2tw_min(text, options = {}, ...argv) {
    options = fixOptions(options, tableCn2TwDebug.safe);
    return index_1.cn2tw(text, options, ...argv);
}
exports.cn2tw_min = cn2tw_min;
function fixOptions(options = {}, table) {
    options = Object.assign({}, options);
    options.table = options.table || Object.create(table);
    options.tableOnly = options.tableOnly !== false;
    options = core_1.getOptions(options, core_1.defaultOptions, exports.SAFE_MODE_CHAR_MIN);
    return options;
}
exports.fixOptions = fixOptions;
/*
let msg = `并且之后在深海変異成亚种的半人鱼。顺便说一句，当时人鱼国的守护神《海之神》特里斯坦，发现在神代时代时被自己封印的宿敌复活了忧。`;

console.log(1, cn2tw(msg, {
    safe: false,
}));

console.log(2, cn2tw_min(msg, {
    //safe: false,
}));
*/
exports.default = exports;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7R0FFRzs7QUFFSCxvRkFBcUY7QUFhNUUsMENBQWU7QUFaeEIsb0ZBQXFGO0FBWTNELDBDQUFlO0FBWHpDLGlDQU9nQjtBQUNoQixtQ0FBdUM7QUFDdkMsMkRBQWtEO0FBSXJDLFFBQUEsa0JBQWtCLEdBQUcsaUNBQVksQ0FBQyxxQkFBZTtLQUM1RCxLQUFLLEVBQUU7S0FDUCxNQUFNLENBQUM7SUFDUCxNQUFNO0lBQ04sR0FBRztJQUNILEdBQUc7SUFDSCxHQUFHO0lBQ0gsR0FBRztJQUNILEdBQUc7SUFDSCxNQUFNO0lBQ04sR0FBRztJQUNILE1BQU07SUFDTixNQUFNO0lBQ04sR0FBRztJQUNILEdBQUc7SUFDSCxHQUFHO0lBQ0gsR0FBRztJQUNILEdBQUc7Q0FDSCxDQUFDLENBQUMsQ0FDSDtBQUU4Qix5QkFyQmxCLDBCQUFrQixDQXFCYztBQUU3Qzs7R0FFRztBQUNILFNBQWdCLFNBQVMsQ0FBQyxJQUFZLEVBQUUsVUFBb0IsRUFBRSxFQUFFLEdBQUcsSUFBSTtJQUV0RSxPQUFPLEdBQUcsVUFBVSxDQUFDLE9BQU8sRUFBRSxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFcEQsT0FBTyxhQUFLLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO0FBQ3RDLENBQUM7QUFMRCw4QkFLQztBQUVEOztHQUVHO0FBQ0gsU0FBZ0IsU0FBUyxDQUFDLElBQVksRUFBRSxVQUFvQixFQUFFLEVBQUUsR0FBRyxJQUFJO0lBRXRFLE9BQU8sR0FBRyxVQUFVLENBQUMsT0FBTyxFQUFFLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUVwRCxPQUFPLGFBQUssQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7QUFDdEMsQ0FBQztBQUxELDhCQUtDO0FBRUQsU0FBZ0IsVUFBVSxDQUFDLFVBQW9CLEVBQUUsRUFBRSxLQUFhO0lBRS9ELE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNyQyxPQUFPLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0RCxPQUFPLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxTQUFTLEtBQUssS0FBSyxDQUFDO0lBRWhELE9BQU8sR0FBRyxpQkFBVSxDQUFDLE9BQU8sRUFBRSxxQkFBYyxFQUFFLDBCQUFrQixDQUFDLENBQUM7SUFFbEUsT0FBTyxPQUFPLENBQUM7QUFDaEIsQ0FBQztBQVRELGdDQVNDO0FBRUQ7Ozs7Ozs7Ozs7RUFVRTtBQUVGLGtCQUFlLE9BQWlDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgdXNlciBvbiAyMDE4LzcvMjkvMDI5LlxuICovXG5cbmltcG9ydCB0YWJsZVR3MkNuRGVidWcgPSByZXF1aXJlKCcuLi8uLi8uLi9idWlsZC96aC9jb252ZXJ0L3RhYmxlX3R3MmNuLmRlYnVnLmpzb24nKTtcbmltcG9ydCB0YWJsZUNuMlR3RGVidWcgPSByZXF1aXJlKCcuLi8uLi8uLi9idWlsZC96aC9jb252ZXJ0L3RhYmxlX2NuMnR3LmRlYnVnLmpzb24nKTtcbmltcG9ydCB7XG5cdGRlZmF1bHRPcHRpb25zLFxuXHRnZXRPcHRpb25zLFxuXHRnZXRPcHRpb25zU2tpcCxcblx0SU9wdGlvbnMsXG5cdElUYWJsZSxcblx0U0FGRV9NT0RFX0NIQVIgYXMgX1NBRkVfTU9ERV9DSEFSLFxufSBmcm9tICcuL2NvcmUnO1xuaW1wb3J0IHsgdHcyY24sIGNuMnR3IH0gZnJvbSAnLi9pbmRleCc7XG5pbXBvcnQgeyBhcnJheV91bmlxdWUgfSBmcm9tICdhcnJheS1oeXBlci11bmlxdWUnO1xuXG5leHBvcnQgeyB0YWJsZVR3MkNuRGVidWcsIHRhYmxlQ24yVHdEZWJ1ZyB9XG5cbmV4cG9ydCBjb25zdCBTQUZFX01PREVfQ0hBUl9NSU4gPSBhcnJheV91bmlxdWUoX1NBRkVfTU9ERV9DSEFSXG5cdC5zbGljZSgpXG5cdC5jb25jYXQoW1xuXHRcdC8vJ+W/pycsXG5cdFx0J+iEjycsXG5cdFx0J+WIkicsXG5cdFx0J+WHhicsXG5cdFx0J+WPkScsXG5cdFx0J+WHpicsXG5cdFx0Ly8n5aSEJyxcblx0XHQn6JmVJyxcblx0XHQvLyfmhoInLFxuXHRcdC8vJ+WEqicsXG5cdFx0J+mktScsXG5cdFx0J+eCricsXG5cdFx0J+egsicsXG5cdFx0J+WluCcsXG5cdFx0J+WnpicsXG5cdF0pKVxuO1xuXG5leHBvcnQgeyBTQUZFX01PREVfQ0hBUl9NSU4gYXMgU0FGRV9NT0RFX0NIQVIgfVxuXG4vKipcbiAqIOS7peS4jemAoOaIkOatp+eVsOeahOWtl+WFuOihqOS+huWPluS7o1xuICovXG5leHBvcnQgZnVuY3Rpb24gdHcyY25fbWluKHRleHQ6IHN0cmluZywgb3B0aW9uczogSU9wdGlvbnMgPSB7fSwgLi4uYXJndilcbntcblx0b3B0aW9ucyA9IGZpeE9wdGlvbnMob3B0aW9ucywgdGFibGVUdzJDbkRlYnVnLnNhZmUpO1xuXG5cdHJldHVybiB0dzJjbih0ZXh0LCBvcHRpb25zLCAuLi5hcmd2KTtcbn1cblxuLyoqXG4gKiDku6XkuI3pgKDmiJDmrafnlbDnmoTlrZflhbjooajkvoblj5bku6NcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNuMnR3X21pbih0ZXh0OiBzdHJpbmcsIG9wdGlvbnM6IElPcHRpb25zID0ge30sIC4uLmFyZ3YpXG57XG5cdG9wdGlvbnMgPSBmaXhPcHRpb25zKG9wdGlvbnMsIHRhYmxlQ24yVHdEZWJ1Zy5zYWZlKTtcblxuXHRyZXR1cm4gY24ydHcodGV4dCwgb3B0aW9ucywgLi4uYXJndik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaXhPcHRpb25zKG9wdGlvbnM6IElPcHRpb25zID0ge30sIHRhYmxlOiBJVGFibGUpXG57XG5cdG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zKTtcblx0b3B0aW9ucy50YWJsZSA9IG9wdGlvbnMudGFibGUgfHwgT2JqZWN0LmNyZWF0ZSh0YWJsZSk7XG5cdG9wdGlvbnMudGFibGVPbmx5ID0gb3B0aW9ucy50YWJsZU9ubHkgIT09IGZhbHNlO1xuXG5cdG9wdGlvbnMgPSBnZXRPcHRpb25zKG9wdGlvbnMsIGRlZmF1bHRPcHRpb25zLCBTQUZFX01PREVfQ0hBUl9NSU4pO1xuXG5cdHJldHVybiBvcHRpb25zO1xufVxuXG4vKlxubGV0IG1zZyA9IGDlubbkuJTkuYvlkI7lnKjmt7HmtbflpInnlbDmiJDkuprnp43nmoTljYrkurrpsbzjgILpobrkvr/or7TkuIDlj6XvvIzlvZPml7bkurrpsbzlm73nmoTlrojmiqTnpZ7jgIrmtbfkuYvnpZ7jgIvnibnph4zmlq/lnabvvIzlj5HnjrDlnKjnpZ7ku6Pml7bku6Pml7booqvoh6rlt7HlsIHljbDnmoTlrr/mlYzlpI3mtLvkuoblv6fjgIJgO1xuXG5jb25zb2xlLmxvZygxLCBjbjJ0dyhtc2csIHtcblx0c2FmZTogZmFsc2UsXG59KSk7XG5cbmNvbnNvbGUubG9nKDIsIGNuMnR3X21pbihtc2csIHtcblx0Ly9zYWZlOiBmYWxzZSxcbn0pKTtcbiovXG5cbmV4cG9ydCBkZWZhdWx0IGV4cG9ydHMgYXMgdHlwZW9mIGltcG9ydCgnLi9taW4nKTtcbiJdfQ==
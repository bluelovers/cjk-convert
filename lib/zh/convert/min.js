"use strict";
/**
 * Created by user on 2018/7/29/029.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.fixOptions = exports.cn2tw_min = exports.tw2cn_min = exports.SAFE_MODE_CHAR = exports.SAFE_MODE_CHAR_MIN = exports.tableCn2TwDebug = exports.tableTw2CnDebug = void 0;
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
    //'脏',
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
    '鱷',
    '滷',
    '鑑',
    '發',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7R0FFRzs7O0FBRUgsb0ZBQXFGO0FBYTVFLDBDQUFlO0FBWnhCLG9GQUFxRjtBQVkzRCwwQ0FBZTtBQVh6QyxpQ0FPZ0I7QUFDaEIsbUNBQXVDO0FBQ3ZDLDJEQUFrRDtBQUlyQyxRQUFBLGtCQUFrQixHQUFHLGlDQUFZLENBQUMscUJBQWU7S0FDNUQsS0FBSyxFQUFFO0tBQ1AsTUFBTSxDQUFDO0lBQ1AsTUFBTTtJQUNOLE1BQU07SUFDTixHQUFHO0lBQ0gsR0FBRztJQUNILEdBQUc7SUFDSCxHQUFHO0lBQ0gsTUFBTTtJQUNOLEdBQUc7SUFDSCxNQUFNO0lBQ04sTUFBTTtJQUNOLEdBQUc7SUFDSCxHQUFHO0lBQ0gsR0FBRztJQUNILEdBQUc7SUFDSCxHQUFHO0lBQ0gsR0FBRztJQUNILEdBQUc7SUFDSCxHQUFHO0lBQ0gsR0FBRztDQUNILENBQUMsQ0FBQyxDQUNIO0FBRThCLHlCQXpCbEIsMEJBQWtCLENBeUJjO0FBRTdDOztHQUVHO0FBQ0gsU0FBZ0IsU0FBUyxDQUFDLElBQVksRUFBRSxVQUFvQixFQUFFLEVBQUUsR0FBRyxJQUFJO0lBRXRFLE9BQU8sR0FBRyxVQUFVLENBQUMsT0FBTyxFQUFFLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUVwRCxPQUFPLGFBQUssQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7QUFDdEMsQ0FBQztBQUxELDhCQUtDO0FBRUQ7O0dBRUc7QUFDSCxTQUFnQixTQUFTLENBQUMsSUFBWSxFQUFFLFVBQW9CLEVBQUUsRUFBRSxHQUFHLElBQUk7SUFFdEUsT0FBTyxHQUFHLFVBQVUsQ0FBQyxPQUFPLEVBQUUsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRXBELE9BQU8sYUFBSyxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztBQUN0QyxDQUFDO0FBTEQsOEJBS0M7QUFFRCxTQUFnQixVQUFVLENBQUMsVUFBb0IsRUFBRSxFQUFFLEtBQWE7SUFFL0QsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3JDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RELE9BQU8sQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLFNBQVMsS0FBSyxLQUFLLENBQUM7SUFFaEQsT0FBTyxHQUFHLGlCQUFVLENBQUMsT0FBTyxFQUFFLHFCQUFjLEVBQUUsMEJBQWtCLENBQUMsQ0FBQztJQUVsRSxPQUFPLE9BQU8sQ0FBQztBQUNoQixDQUFDO0FBVEQsZ0NBU0M7QUFFRDs7Ozs7Ozs7OztFQVVFO0FBRUYsa0JBQWUsT0FBaUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSB1c2VyIG9uIDIwMTgvNy8yOS8wMjkuXG4gKi9cblxuaW1wb3J0IHRhYmxlVHcyQ25EZWJ1ZyA9IHJlcXVpcmUoJy4uLy4uLy4uL2J1aWxkL3poL2NvbnZlcnQvdGFibGVfdHcyY24uZGVidWcuanNvbicpO1xuaW1wb3J0IHRhYmxlQ24yVHdEZWJ1ZyA9IHJlcXVpcmUoJy4uLy4uLy4uL2J1aWxkL3poL2NvbnZlcnQvdGFibGVfY24ydHcuZGVidWcuanNvbicpO1xuaW1wb3J0IHtcblx0ZGVmYXVsdE9wdGlvbnMsXG5cdGdldE9wdGlvbnMsXG5cdGdldE9wdGlvbnNTa2lwLFxuXHRJT3B0aW9ucyxcblx0SVRhYmxlLFxuXHRTQUZFX01PREVfQ0hBUiBhcyBfU0FGRV9NT0RFX0NIQVIsXG59IGZyb20gJy4vY29yZSc7XG5pbXBvcnQgeyB0dzJjbiwgY24ydHcgfSBmcm9tICcuL2luZGV4JztcbmltcG9ydCB7IGFycmF5X3VuaXF1ZSB9IGZyb20gJ2FycmF5LWh5cGVyLXVuaXF1ZSc7XG5cbmV4cG9ydCB7IHRhYmxlVHcyQ25EZWJ1ZywgdGFibGVDbjJUd0RlYnVnIH1cblxuZXhwb3J0IGNvbnN0IFNBRkVfTU9ERV9DSEFSX01JTiA9IGFycmF5X3VuaXF1ZShfU0FGRV9NT0RFX0NIQVJcblx0LnNsaWNlKClcblx0LmNvbmNhdChbXG5cdFx0Ly8n5b+nJyxcblx0XHQvLyfohI8nLFxuXHRcdCfliJInLFxuXHRcdCflh4YnLFxuXHRcdCflj5EnLFxuXHRcdCflh6YnLFxuXHRcdC8vJ+WkhCcsXG5cdFx0J+iZlScsXG5cdFx0Ly8n5oaCJyxcblx0XHQvLyflhKonLFxuXHRcdCfppLUnLFxuXHRcdCfngq4nLFxuXHRcdCfnoLInLFxuXHRcdCflpbgnLFxuXHRcdCflp6YnLFxuXHRcdCfpsbcnLFxuXHRcdCfmu7cnLFxuXHRcdCfpkZEnLFxuXHRcdCfnmbwnLFxuXHRdKSlcbjtcblxuZXhwb3J0IHsgU0FGRV9NT0RFX0NIQVJfTUlOIGFzIFNBRkVfTU9ERV9DSEFSIH1cblxuLyoqXG4gKiDku6XkuI3pgKDmiJDmrafnlbDnmoTlrZflhbjooajkvoblj5bku6NcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHR3MmNuX21pbih0ZXh0OiBzdHJpbmcsIG9wdGlvbnM6IElPcHRpb25zID0ge30sIC4uLmFyZ3YpXG57XG5cdG9wdGlvbnMgPSBmaXhPcHRpb25zKG9wdGlvbnMsIHRhYmxlVHcyQ25EZWJ1Zy5zYWZlKTtcblxuXHRyZXR1cm4gdHcyY24odGV4dCwgb3B0aW9ucywgLi4uYXJndik7XG59XG5cbi8qKlxuICog5Lul5LiN6YCg5oiQ5q2n55Ww55qE5a2X5YW46KGo5L6G5Y+W5LujXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbjJ0d19taW4odGV4dDogc3RyaW5nLCBvcHRpb25zOiBJT3B0aW9ucyA9IHt9LCAuLi5hcmd2KVxue1xuXHRvcHRpb25zID0gZml4T3B0aW9ucyhvcHRpb25zLCB0YWJsZUNuMlR3RGVidWcuc2FmZSk7XG5cblx0cmV0dXJuIGNuMnR3KHRleHQsIG9wdGlvbnMsIC4uLmFyZ3YpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZml4T3B0aW9ucyhvcHRpb25zOiBJT3B0aW9ucyA9IHt9LCB0YWJsZTogSVRhYmxlKVxue1xuXHRvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucyk7XG5cdG9wdGlvbnMudGFibGUgPSBvcHRpb25zLnRhYmxlIHx8IE9iamVjdC5jcmVhdGUodGFibGUpO1xuXHRvcHRpb25zLnRhYmxlT25seSA9IG9wdGlvbnMudGFibGVPbmx5ICE9PSBmYWxzZTtcblxuXHRvcHRpb25zID0gZ2V0T3B0aW9ucyhvcHRpb25zLCBkZWZhdWx0T3B0aW9ucywgU0FGRV9NT0RFX0NIQVJfTUlOKTtcblxuXHRyZXR1cm4gb3B0aW9ucztcbn1cblxuLypcbmxldCBtc2cgPSBg5bm25LiU5LmL5ZCO5Zyo5rex5rW35aSJ55Ww5oiQ5Lqa56eN55qE5Y2K5Lq66bG844CC6aG65L6/6K+05LiA5Y+l77yM5b2T5pe25Lq66bG85Zu955qE5a6I5oqk56We44CK5rW35LmL56We44CL54m56YeM5pav5Z2m77yM5Y+R546w5Zyo56We5Luj5pe25Luj5pe26KKr6Ieq5bex5bCB5Y2w55qE5a6/5pWM5aSN5rS75LqG5b+n44CCYDtcblxuY29uc29sZS5sb2coMSwgY24ydHcobXNnLCB7XG5cdHNhZmU6IGZhbHNlLFxufSkpO1xuXG5jb25zb2xlLmxvZygyLCBjbjJ0d19taW4obXNnLCB7XG5cdC8vc2FmZTogZmFsc2UsXG59KSk7XG4qL1xuXG5leHBvcnQgZGVmYXVsdCBleHBvcnRzIGFzIHR5cGVvZiBpbXBvcnQoJy4vbWluJyk7XG4iXX0=
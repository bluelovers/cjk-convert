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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7R0FFRzs7QUFFSCxvRkFBcUY7QUFNNUUsMENBQWU7QUFMeEIsb0ZBQXFGO0FBSzNELDBDQUFlO0FBSnpDLGlDQUF5SDtBQUN6SCxtQ0FBc0M7QUFDdEMsMkRBQWtEO0FBSXJDLFFBQUEsa0JBQWtCLEdBQUcsaUNBQVksQ0FBQyxxQkFBZTtLQUM1RCxLQUFLLEVBQUU7S0FDUCxNQUFNLENBQUM7SUFDUCxNQUFNO0lBQ04sR0FBRztJQUNILEdBQUc7SUFDSCxHQUFHO0lBQ0gsR0FBRztJQUNILEdBQUc7SUFDSCxNQUFNO0lBQ04sR0FBRztJQUNILE1BQU07SUFDTixNQUFNO0lBQ04sR0FBRztDQUNILENBQUMsQ0FBQyxDQUNIO0FBRThCLHlCQWpCbEIsMEJBQWtCLENBaUJjO0FBRTdDOztHQUVHO0FBQ0gsU0FBZ0IsU0FBUyxDQUFDLElBQVksRUFBRSxVQUFvQixFQUFFLEVBQUUsR0FBRyxJQUFJO0lBRXRFLE9BQU8sR0FBRyxVQUFVLENBQUMsT0FBTyxFQUFFLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUVwRCxPQUFPLGFBQUssQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7QUFDdEMsQ0FBQztBQUxELDhCQUtDO0FBRUQ7O0dBRUc7QUFDSCxTQUFnQixTQUFTLENBQUMsSUFBWSxFQUFFLFVBQW9CLEVBQUUsRUFBRSxHQUFHLElBQUk7SUFFdEUsT0FBTyxHQUFHLFVBQVUsQ0FBQyxPQUFPLEVBQUUsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRXBELE9BQU8sYUFBSyxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztBQUN0QyxDQUFDO0FBTEQsOEJBS0M7QUFFRCxTQUFnQixVQUFVLENBQUMsVUFBb0IsRUFBRSxFQUFFLEtBQWE7SUFFL0QsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3JDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RELE9BQU8sQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLFNBQVMsS0FBSyxLQUFLLENBQUM7SUFFaEQsT0FBTyxHQUFHLGlCQUFVLENBQUMsT0FBTyxFQUFFLHFCQUFjLEVBQUUsMEJBQWtCLENBQUMsQ0FBQztJQUVsRSxPQUFPLE9BQU8sQ0FBQztBQUNoQixDQUFDO0FBVEQsZ0NBU0M7QUFFRDs7Ozs7Ozs7OztFQVVFO0FBRUYsa0JBQWUsT0FBaUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSB1c2VyIG9uIDIwMTgvNy8yOS8wMjkuXG4gKi9cblxuaW1wb3J0IHRhYmxlVHcyQ25EZWJ1ZyA9IHJlcXVpcmUoJy4uLy4uLy4uL2J1aWxkL3poL2NvbnZlcnQvdGFibGVfdHcyY24uZGVidWcuanNvbicpO1xuaW1wb3J0IHRhYmxlQ24yVHdEZWJ1ZyA9IHJlcXVpcmUoJy4uLy4uLy4uL2J1aWxkL3poL2NvbnZlcnQvdGFibGVfY24ydHcuZGVidWcuanNvbicpO1xuaW1wb3J0IHsgZGVmYXVsdE9wdGlvbnMsIGdldE9wdGlvbnMsIGdldE9wdGlvbnNTa2lwLCBJT3B0aW9ucywgSVRhYmxlLCBTQUZFX01PREVfQ0hBUiBhcyBfU0FGRV9NT0RFX0NIQVIgfSBmcm9tICcuL2NvcmUnO1xuaW1wb3J0IHsgdHcyY24sIGNuMnR3fSBmcm9tICcuL2luZGV4JztcbmltcG9ydCB7IGFycmF5X3VuaXF1ZSB9IGZyb20gJ2FycmF5LWh5cGVyLXVuaXF1ZSc7XG5cbmV4cG9ydCB7IHRhYmxlVHcyQ25EZWJ1ZywgdGFibGVDbjJUd0RlYnVnIH1cblxuZXhwb3J0IGNvbnN0IFNBRkVfTU9ERV9DSEFSX01JTiA9IGFycmF5X3VuaXF1ZShfU0FGRV9NT0RFX0NIQVJcblx0LnNsaWNlKClcblx0LmNvbmNhdChbXG5cdFx0Ly8n5b+nJyxcblx0XHQn6ISPJyxcblx0XHQn5YiSJyxcblx0XHQn5YeGJyxcblx0XHQn5Y+RJyxcblx0XHQn5YemJyxcblx0XHQvLyflpIQnLFxuXHRcdCfomZUnLFxuXHRcdC8vJ+aGgicsXG5cdFx0Ly8n5YSqJyxcblx0XHQn6aS1Jyxcblx0XSkpXG47XG5cbmV4cG9ydCB7IFNBRkVfTU9ERV9DSEFSX01JTiBhcyBTQUZFX01PREVfQ0hBUiB9XG5cbi8qKlxuICog5Lul5LiN6YCg5oiQ5q2n55Ww55qE5a2X5YW46KGo5L6G5Y+W5LujXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0dzJjbl9taW4odGV4dDogc3RyaW5nLCBvcHRpb25zOiBJT3B0aW9ucyA9IHt9LCAuLi5hcmd2KVxue1xuXHRvcHRpb25zID0gZml4T3B0aW9ucyhvcHRpb25zLCB0YWJsZVR3MkNuRGVidWcuc2FmZSk7XG5cblx0cmV0dXJuIHR3MmNuKHRleHQsIG9wdGlvbnMsIC4uLmFyZ3YpO1xufVxuXG4vKipcbiAqIOS7peS4jemAoOaIkOatp+eVsOeahOWtl+WFuOihqOS+huWPluS7o1xuICovXG5leHBvcnQgZnVuY3Rpb24gY24ydHdfbWluKHRleHQ6IHN0cmluZywgb3B0aW9uczogSU9wdGlvbnMgPSB7fSwgLi4uYXJndilcbntcblx0b3B0aW9ucyA9IGZpeE9wdGlvbnMob3B0aW9ucywgdGFibGVDbjJUd0RlYnVnLnNhZmUpO1xuXG5cdHJldHVybiBjbjJ0dyh0ZXh0LCBvcHRpb25zLCAuLi5hcmd2KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpeE9wdGlvbnMob3B0aW9uczogSU9wdGlvbnMgPSB7fSwgdGFibGU6IElUYWJsZSlcbntcblx0b3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMpO1xuXHRvcHRpb25zLnRhYmxlID0gb3B0aW9ucy50YWJsZSB8fCBPYmplY3QuY3JlYXRlKHRhYmxlKTtcblx0b3B0aW9ucy50YWJsZU9ubHkgPSBvcHRpb25zLnRhYmxlT25seSAhPT0gZmFsc2U7XG5cblx0b3B0aW9ucyA9IGdldE9wdGlvbnMob3B0aW9ucywgZGVmYXVsdE9wdGlvbnMsIFNBRkVfTU9ERV9DSEFSX01JTik7XG5cblx0cmV0dXJuIG9wdGlvbnM7XG59XG5cbi8qXG5sZXQgbXNnID0gYOW5tuS4lOS5i+WQjuWcqOa3sea1t+WkieeVsOaIkOS6muenjeeahOWNiuS6uumxvOOAgumhuuS+v+ivtOS4gOWPpe+8jOW9k+aXtuS6uumxvOWbveeahOWuiOaKpOelnuOAiua1t+S5i+elnuOAi+eJuemHjOaWr+Wdpu+8jOWPkeeOsOWcqOelnuS7o+aXtuS7o+aXtuiiq+iHquW3seWwgeWNsOeahOWuv+aVjOWkjea0u+S6huW/p+OAgmA7XG5cbmNvbnNvbGUubG9nKDEsIGNuMnR3KG1zZywge1xuXHRzYWZlOiBmYWxzZSxcbn0pKTtcblxuY29uc29sZS5sb2coMiwgY24ydHdfbWluKG1zZywge1xuXHQvL3NhZmU6IGZhbHNlLFxufSkpO1xuKi9cblxuZXhwb3J0IGRlZmF1bHQgZXhwb3J0cyBhcyB0eXBlb2YgaW1wb3J0KCcuL21pbicpO1xuIl19
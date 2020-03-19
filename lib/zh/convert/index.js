"use strict";
/**
 * Created by user on 2018/2/15/015.
 *
 * same as chinese_convert, but a little bug fix
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SAFE_MODE_CHAR = exports.getOptionsSkip = exports.REGEXP_TEST = exports.defaultOptions = exports.getOptions = exports._call = exports._tw2cn = exports._cn2tw = exports.table_tw2cn = exports.table_cn2tw = exports.tw2cn = exports.cn2tw = void 0;
//import { cn2tw as _cn2tw, tw2cn as _tw2cn } from 'chinese_convert';
const table_1 = require("./table");
const core_1 = require("./core");
Object.defineProperty(exports, "_call", { enumerable: true, get: function () { return core_1._call; } });
Object.defineProperty(exports, "defaultOptions", { enumerable: true, get: function () { return core_1.defaultOptions; } });
Object.defineProperty(exports, "getOptions", { enumerable: true, get: function () { return core_1.getOptions; } });
Object.defineProperty(exports, "getOptionsSkip", { enumerable: true, get: function () { return core_1.getOptionsSkip; } });
Object.defineProperty(exports, "REGEXP_TEST", { enumerable: true, get: function () { return core_1.REGEXP_TEST; } });
Object.defineProperty(exports, "SAFE_MODE_CHAR", { enumerable: true, get: function () { return core_1.SAFE_MODE_CHAR; } });
const zhConvert = require("./index");
const table_plus_1 = require("./table_plus");
function cn2tw(text, options = {}, ...argv) {
    return core_1._call(_cn2tw, text, options, ...argv);
}
exports.cn2tw = cn2tw;
function tw2cn(text, options = {}, ...argv) {
    return core_1._call(_tw2cn, text, options, ...argv);
}
exports.tw2cn = tw2cn;
exports.table_cn2tw = Object.assign({}, table_1.table_cn2tw, table_plus_1.table_cn2tw_plus);
exports.table_tw2cn = Object.assign({}, table_1.table_tw2cn, table_plus_1.table_tw2cn_plus);
function _cn2tw(text) {
    // @ts-ignore
    return core_1.textMap(text, exports.table_cn2tw);
}
exports._cn2tw = _cn2tw;
function _tw2cn(text) {
    // @ts-ignore
    return core_1.textMap(text, exports.table_tw2cn);
}
exports._tw2cn = _tw2cn;
exports.default = zhConvert;
//console.log(cn2tw('轉换最里后裡後轉换最后'));
//console.log(tw2cn('轉换最里后裡後轉换最后'));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7R0FJRzs7O0FBRUgscUVBQXFFO0FBRXJFLG1DQUdpQjtBQUVqQixpQ0FVZ0I7QUFnQ2Ysc0ZBekNBLFlBQUssT0F5Q0E7QUFJTCwrRkE1Q0EscUJBQWMsT0E0Q0E7QUFEZCwyRkExQ0EsaUJBQVUsT0EwQ0E7QUFHViwrRkE1Q0EscUJBQWMsT0E0Q0E7QUFEZCw0RkF4Q0Esa0JBQVcsT0F3Q0E7QUFFWCwrRkF6Q0EscUJBQWMsT0F5Q0E7QUF0Q2YscUNBQXNDO0FBQ3RDLDZDQUFrRTtBQUdsRSxTQUFnQixLQUFLLENBQUMsSUFBWSxFQUFFLFVBQW9CLEVBQUUsRUFBRSxHQUFHLElBQUk7SUFFbEUsT0FBTyxZQUFLLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztBQUM5QyxDQUFDO0FBSEQsc0JBR0M7QUFFRCxTQUFnQixLQUFLLENBQUMsSUFBWSxFQUFFLFVBQW9CLEVBQUUsRUFBRSxHQUFHLElBQUk7SUFFbEUsT0FBTyxZQUFLLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztBQUM5QyxDQUFDO0FBSEQsc0JBR0M7QUFFVSxRQUFBLFdBQVcsR0FBVyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxtQkFBWSxFQUFFLDZCQUFnQixDQUFDLENBQUM7QUFFeEUsUUFBQSxXQUFXLEdBQVcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsbUJBQVksRUFBRSw2QkFBZ0IsQ0FBQyxDQUFDO0FBRW5GLFNBQWdCLE1BQU0sQ0FBQyxJQUFZO0lBRWxDLGFBQWE7SUFDYixPQUFPLGNBQU8sQ0FBQyxJQUFJLEVBQUUsbUJBQVcsQ0FBQyxDQUFDO0FBQ25DLENBQUM7QUFKRCx3QkFJQztBQUVELFNBQWdCLE1BQU0sQ0FBQyxJQUFZO0lBRWxDLGFBQWE7SUFDYixPQUFPLGNBQU8sQ0FBQyxJQUFJLEVBQUUsbUJBQVcsQ0FBQyxDQUFDO0FBQ25DLENBQUM7QUFKRCx3QkFJQztBQWFELGtCQUFlLFNBQVMsQ0FBQztBQUV6QixvQ0FBb0M7QUFDcEMsb0NBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IHVzZXIgb24gMjAxOC8yLzE1LzAxNS5cbiAqXG4gKiBzYW1lIGFzIGNoaW5lc2VfY29udmVydCwgYnV0IGEgbGl0dGxlIGJ1ZyBmaXhcbiAqL1xuXG4vL2ltcG9ydCB7IGNuMnR3IGFzIF9jbjJ0dywgdHcyY24gYXMgX3R3MmNuIH0gZnJvbSAnY2hpbmVzZV9jb252ZXJ0JztcblxuaW1wb3J0IHtcblx0dGFibGVfY24ydHcgYXMgX3RhYmxlX2NuMnR3LFxuXHR0YWJsZV90dzJjbiBhcyBfdGFibGVfdHcyY24sXG59IGZyb20gJy4vdGFibGUnO1xuXG5pbXBvcnQge1xuXHRfY2FsbCxcblx0ZGVmYXVsdE9wdGlvbnMsXG5cdGdldE9wdGlvbnMsXG5cdGdldE9wdGlvbnNTa2lwLFxuXHRJT3B0aW9ucyxcblx0SVRhYmxlLFxuXHRSRUdFWFBfVEVTVCxcblx0U0FGRV9NT0RFX0NIQVIsXG5cdHRleHRNYXAsXG59IGZyb20gJy4vY29yZSc7XG5pbXBvcnQgemhDb252ZXJ0ID0gcmVxdWlyZSgnLi9pbmRleCcpO1xuaW1wb3J0IHsgdGFibGVfY24ydHdfcGx1cywgdGFibGVfdHcyY25fcGx1cyB9IGZyb20gJy4vdGFibGVfcGx1cyc7XG5pbXBvcnQgeyB3aWtpX3MydF92Miwgd2lraV90MnNfdjIgfSBmcm9tICcuL3dpa2lwZWRpYSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjbjJ0dyh0ZXh0OiBzdHJpbmcsIG9wdGlvbnM6IElPcHRpb25zID0ge30sIC4uLmFyZ3YpOiBzdHJpbmdcbntcblx0cmV0dXJuIF9jYWxsKF9jbjJ0dywgdGV4dCwgb3B0aW9ucywgLi4uYXJndik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0dzJjbih0ZXh0OiBzdHJpbmcsIG9wdGlvbnM6IElPcHRpb25zID0ge30sIC4uLmFyZ3YpOiBzdHJpbmdcbntcblx0cmV0dXJuIF9jYWxsKF90dzJjbiwgdGV4dCwgb3B0aW9ucywgLi4uYXJndik7XG59XG5cbmV4cG9ydCBsZXQgdGFibGVfY24ydHc6IElUYWJsZSA9IE9iamVjdC5hc3NpZ24oe30sIF90YWJsZV9jbjJ0dywgdGFibGVfY24ydHdfcGx1cyk7XG5cbmV4cG9ydCBsZXQgdGFibGVfdHcyY246IElUYWJsZSA9IE9iamVjdC5hc3NpZ24oe30sIF90YWJsZV90dzJjbiwgdGFibGVfdHcyY25fcGx1cyk7XG5cbmV4cG9ydCBmdW5jdGlvbiBfY24ydHcodGV4dDogc3RyaW5nKTogc3RyaW5nXG57XG5cdC8vIEB0cy1pZ25vcmVcblx0cmV0dXJuIHRleHRNYXAodGV4dCwgdGFibGVfY24ydHcpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX3R3MmNuKHRleHQ6IHN0cmluZyk6IHN0cmluZ1xue1xuXHQvLyBAdHMtaWdub3JlXG5cdHJldHVybiB0ZXh0TWFwKHRleHQsIHRhYmxlX3R3MmNuKTtcbn1cblxuZXhwb3J0IHtcblx0X2NhbGwsXG5cdElPcHRpb25zLFxuXHRJVGFibGUsXG5cdGdldE9wdGlvbnMsXG5cdGRlZmF1bHRPcHRpb25zLFxuXHRSRUdFWFBfVEVTVCxcblx0Z2V0T3B0aW9uc1NraXAsXG5cdFNBRkVfTU9ERV9DSEFSLFxufVxuXG5leHBvcnQgZGVmYXVsdCB6aENvbnZlcnQ7XG5cbi8vY29uc29sZS5sb2coY24ydHcoJ+i9ieaNouacgOmHjOWQjuijoeW+jOi9ieaNouacgOWQjicpKTtcbi8vY29uc29sZS5sb2codHcyY24oJ+i9ieaNouacgOmHjOWQjuijoeW+jOi9ieaNouacgOWQjicpKTtcbiJdfQ==
"use strict";
/**
 * Created by user on 2017/12/9/009.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.charCodeAt = exports.split = void 0;
const uni_string_1 = require("uni-string");
var array_hyper_unique_1 = require("array-hyper-unique");
Object.defineProperty(exports, "array_unique", { enumerable: true, get: function () { return array_hyper_unique_1.array_unique; } });
Object.defineProperty(exports, "lazy_unique", { enumerable: true, get: function () { return array_hyper_unique_1.lazy_unique; } });
/*
export function array_unique<T>(array: T): T
{
    return arrUniq(array);

    return (array).filter(function (el, index, arr)
    {
        return index == arr.indexOf(el);
    });

}
*/
function split(str) {
    return uni_string_1.default.split(str, '');
    //return str.toString().split('');
}
exports.split = split;
function charCodeAt(str, cb) {
    let ret = [];
    if (typeof cb !== 'function') {
        cb = void (0);
    }
    let _str = Array.isArray(str) ? str : str.toString();
    for (let char of _str) {
        let charCode = char.charCodeAt();
        let r;
        if (cb && (r = cb(char, charCode, str), typeof r != 'undefined')) {
            if (!r) {
                continue;
            }
            else if (Array.isArray(r)) {
                ret = ret.concat(r);
                continue;
            }
        }
        ret.push(charCode);
    }
    return ret;
}
exports.charCodeAt = charCodeAt;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOztHQUVHOzs7QUFFSCwyQ0FBaUM7QUFDakMseURBQStEO0FBQXRELGtIQUFBLFlBQVksT0FBQTtBQUFFLGlIQUFBLFdBQVcsT0FBQTtBQU9sQzs7Ozs7Ozs7Ozs7RUFXRTtBQUVGLFNBQWdCLEtBQUssQ0FBQyxHQUFHO0lBRXhCLE9BQU8sb0JBQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzlCLGtDQUFrQztBQUNuQyxDQUFDO0FBSkQsc0JBSUM7QUFFRCxTQUFnQixVQUFVLENBQUMsR0FBRyxFQUFFLEVBQWtCO0lBRWpELElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztJQUViLElBQUksT0FBTyxFQUFFLEtBQUssVUFBVSxFQUM1QjtRQUNDLEVBQUUsR0FBRyxLQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDYjtJQUVELElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBRXJELEtBQUssSUFBSSxJQUFJLElBQUksSUFBSSxFQUNyQjtRQUNDLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNqQyxJQUFJLENBQUMsQ0FBQztRQUVOLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLEdBQUcsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxJQUFJLFdBQVcsQ0FBQyxFQUNoRTtZQUNDLElBQUksQ0FBQyxDQUFDLEVBQ047Z0JBQ0MsU0FBUzthQUNUO2lCQUNJLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFDekI7Z0JBQ0MsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBRXBCLFNBQVM7YUFDVDtTQUNEO1FBRUQsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUNuQjtJQUVELE9BQU8sR0FBRyxDQUFDO0FBQ1osQ0FBQztBQWxDRCxnQ0FrQ0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgdXNlciBvbiAyMDE3LzEyLzkvMDA5LlxuICovXG5cbmltcG9ydCBVU3RyaW5nIGZyb20gJ3VuaS1zdHJpbmcnO1xuZXhwb3J0IHsgYXJyYXlfdW5pcXVlLCBsYXp5X3VuaXF1ZSB9IGZyb20gJ2FycmF5LWh5cGVyLXVuaXF1ZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSWNoYXJDb2RlQXRGblxue1xuXHQoY2hhciwgY2hhckNvZGUsIHN0cilcbn1cblxuLypcbmV4cG9ydCBmdW5jdGlvbiBhcnJheV91bmlxdWU8VD4oYXJyYXk6IFQpOiBUXG57XG5cdHJldHVybiBhcnJVbmlxKGFycmF5KTtcblxuXHRyZXR1cm4gKGFycmF5KS5maWx0ZXIoZnVuY3Rpb24gKGVsLCBpbmRleCwgYXJyKVxuXHR7XG5cdFx0cmV0dXJuIGluZGV4ID09IGFyci5pbmRleE9mKGVsKTtcblx0fSk7XG5cbn1cbiovXG5cbmV4cG9ydCBmdW5jdGlvbiBzcGxpdChzdHIpOiBzdHJpbmdbXVxue1xuXHRyZXR1cm4gVVN0cmluZy5zcGxpdChzdHIsICcnKTtcblx0Ly9yZXR1cm4gc3RyLnRvU3RyaW5nKCkuc3BsaXQoJycpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhckNvZGVBdChzdHIsIGNiPzogSWNoYXJDb2RlQXRGbik6IG51bWJlcltdXG57XG5cdGxldCByZXQgPSBbXTtcblxuXHRpZiAodHlwZW9mIGNiICE9PSAnZnVuY3Rpb24nKVxuXHR7XG5cdFx0Y2IgPSB2b2lkKDApO1xuXHR9XG5cblx0bGV0IF9zdHIgPSBBcnJheS5pc0FycmF5KHN0cikgPyBzdHIgOiBzdHIudG9TdHJpbmcoKTtcblxuXHRmb3IgKGxldCBjaGFyIG9mIF9zdHIpXG5cdHtcblx0XHRsZXQgY2hhckNvZGUgPSBjaGFyLmNoYXJDb2RlQXQoKTtcblx0XHRsZXQgcjtcblxuXHRcdGlmIChjYiAmJiAociA9IGNiKGNoYXIsIGNoYXJDb2RlLCBzdHIpLCB0eXBlb2YgciAhPSAndW5kZWZpbmVkJykpXG5cdFx0e1xuXHRcdFx0aWYgKCFyKVxuXHRcdFx0e1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocikpXG5cdFx0XHR7XG5cdFx0XHRcdHJldCA9IHJldC5jb25jYXQocik7XG5cblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0LnB1c2goY2hhckNvZGUpO1xuXHR9XG5cblx0cmV0dXJuIHJldDtcbn1cbiJdfQ==
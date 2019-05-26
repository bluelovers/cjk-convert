"use strict";
/**
 * Created by user on 2017/12/9/009.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const uni_string_1 = require("uni-string");
var array_hyper_unique_1 = require("array-hyper-unique");
exports.array_unique = array_hyper_unique_1.array_unique;
exports.lazy_unique = array_hyper_unique_1.lazy_unique;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOztHQUVHOztBQUVILDJDQUFpQztBQUNqQyx5REFBK0Q7QUFBdEQsNENBQUEsWUFBWSxDQUFBO0FBQUUsMkNBQUEsV0FBVyxDQUFBO0FBT2xDOzs7Ozs7Ozs7OztFQVdFO0FBRUYsU0FBZ0IsS0FBSyxDQUFDLEdBQUc7SUFFeEIsT0FBTyxvQkFBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDOUIsa0NBQWtDO0FBQ25DLENBQUM7QUFKRCxzQkFJQztBQUVELFNBQWdCLFVBQVUsQ0FBQyxHQUFHLEVBQUUsRUFBa0I7SUFFakQsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDO0lBRWIsSUFBSSxPQUFPLEVBQUUsS0FBSyxVQUFVLEVBQzVCO1FBQ0MsRUFBRSxHQUFHLEtBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNiO0lBRUQsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7SUFFckQsS0FBSyxJQUFJLElBQUksSUFBSSxJQUFJLEVBQ3JCO1FBQ0MsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxDQUFDO1FBRU4sSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsR0FBRyxDQUFDLEVBQUUsT0FBTyxDQUFDLElBQUksV0FBVyxDQUFDLEVBQ2hFO1lBQ0MsSUFBSSxDQUFDLENBQUMsRUFDTjtnQkFDQyxTQUFTO2FBQ1Q7aUJBQ0ksSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUN6QjtnQkFDQyxHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFFcEIsU0FBUzthQUNUO1NBQ0Q7UUFFRCxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQ25CO0lBRUQsT0FBTyxHQUFHLENBQUM7QUFDWixDQUFDO0FBbENELGdDQWtDQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSB1c2VyIG9uIDIwMTcvMTIvOS8wMDkuXG4gKi9cblxuaW1wb3J0IFVTdHJpbmcgZnJvbSAndW5pLXN0cmluZyc7XG5leHBvcnQgeyBhcnJheV91bmlxdWUsIGxhenlfdW5pcXVlIH0gZnJvbSAnYXJyYXktaHlwZXItdW5pcXVlJztcblxuZXhwb3J0IGludGVyZmFjZSBJY2hhckNvZGVBdEZuXG57XG5cdChjaGFyLCBjaGFyQ29kZSwgc3RyKVxufVxuXG4vKlxuZXhwb3J0IGZ1bmN0aW9uIGFycmF5X3VuaXF1ZTxUPihhcnJheTogVCk6IFRcbntcblx0cmV0dXJuIGFyclVuaXEoYXJyYXkpO1xuXG5cdHJldHVybiAoYXJyYXkpLmZpbHRlcihmdW5jdGlvbiAoZWwsIGluZGV4LCBhcnIpXG5cdHtcblx0XHRyZXR1cm4gaW5kZXggPT0gYXJyLmluZGV4T2YoZWwpO1xuXHR9KTtcblxufVxuKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHNwbGl0KHN0cik6IHN0cmluZ1tdXG57XG5cdHJldHVybiBVU3RyaW5nLnNwbGl0KHN0ciwgJycpO1xuXHQvL3JldHVybiBzdHIudG9TdHJpbmcoKS5zcGxpdCgnJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFyQ29kZUF0KHN0ciwgY2I/OiBJY2hhckNvZGVBdEZuKTogbnVtYmVyW11cbntcblx0bGV0IHJldCA9IFtdO1xuXG5cdGlmICh0eXBlb2YgY2IgIT09ICdmdW5jdGlvbicpXG5cdHtcblx0XHRjYiA9IHZvaWQoMCk7XG5cdH1cblxuXHRsZXQgX3N0ciA9IEFycmF5LmlzQXJyYXkoc3RyKSA/IHN0ciA6IHN0ci50b1N0cmluZygpO1xuXG5cdGZvciAobGV0IGNoYXIgb2YgX3N0cilcblx0e1xuXHRcdGxldCBjaGFyQ29kZSA9IGNoYXIuY2hhckNvZGVBdCgpO1xuXHRcdGxldCByO1xuXG5cdFx0aWYgKGNiICYmIChyID0gY2IoY2hhciwgY2hhckNvZGUsIHN0ciksIHR5cGVvZiByICE9ICd1bmRlZmluZWQnKSlcblx0XHR7XG5cdFx0XHRpZiAoIXIpXG5cdFx0XHR7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZiAoQXJyYXkuaXNBcnJheShyKSlcblx0XHRcdHtcblx0XHRcdFx0cmV0ID0gcmV0LmNvbmNhdChyKTtcblxuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXQucHVzaChjaGFyQ29kZSk7XG5cdH1cblxuXHRyZXR1cm4gcmV0O1xufVxuIl19
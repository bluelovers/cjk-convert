"use strict";
/**
 * Created by user on 2018/7/29/029.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.utf8Split = exports.jsSplit = exports.toStrTable = exports.toStrTableArray = void 0;
const uni_string_1 = require("uni-string");
function toStrTableArray(table, options = {}) {
    if (typeof table !== 'object' || Array.isArray(table)) {
        throw new TypeError(`table '${typeof table}' ${table}`);
    }
    let from = [];
    let to = [];
    const ks = Object.keys(table);
    ks.sort();
    let split = options.coreJs ? jsSplit : utf8Split;
    for (let k of ks) {
        let k2 = table[k];
        let s1 = split(k);
        let s2 = split(k2);
        if (s1.length !== 1 || s2.length !== 1) {
            let msg = `'${k}' s1: ${s1.length} ${s1} ; s2: ${s2.length} ${s2}`;
            if (options.ignore) {
                console.error(msg);
                continue;
            }
            else {
                //console.dir(s1);
                //console.dir(s2);
                throw new TypeError(msg);
                break;
            }
        }
        from.push(k);
        to.push(k2);
    }
    return {
        from,
        to,
    };
}
exports.toStrTableArray = toStrTableArray;
function toStrTable(table, options) {
    let { from, to, } = toStrTableArray(table, options);
    return {
        from: from.join(''),
        to: to.join(''),
    };
}
exports.toStrTable = toStrTable;
function jsSplit(s) {
    return s.split('');
}
exports.jsSplit = jsSplit;
function utf8Split(s) {
    return uni_string_1.default.split(s, '');
}
exports.utf8Split = utf8Split;
exports.default = exports;
//console.log(__filename, require.extensions);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydGFibGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdHJ0YWJsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7O0dBRUc7OztBQUdILDJDQUFpQztBQVFqQyxTQUFnQixlQUFlLENBQUMsS0FFL0IsRUFBRSxVQUFvQixFQUFFO0lBRXhCLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQ3JEO1FBQ0MsTUFBTSxJQUFJLFNBQVMsQ0FBQyxVQUFVLE9BQU8sS0FBSyxLQUFLLEtBQUssRUFBRSxDQUFDLENBQUM7S0FDeEQ7SUFFRCxJQUFJLElBQUksR0FBRyxFQUFFLENBQUM7SUFDZCxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFFWixNQUFNLEVBQUUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlCLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUVWLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBRWpELEtBQUssSUFBSSxDQUFDLElBQUksRUFBRSxFQUNoQjtRQUNDLElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVsQixJQUFJLEVBQUUsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEIsSUFBSSxFQUFFLEdBQUcsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRW5CLElBQUksRUFBRSxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQ3RDO1lBQ0MsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLE1BQU0sSUFBSSxFQUFFLFVBQVUsRUFBRSxDQUFDLE1BQU0sSUFBSSxFQUFFLEVBQUUsQ0FBQztZQUVuRSxJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQ2xCO2dCQUNDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ25CLFNBQVM7YUFDVDtpQkFFRDtnQkFDQyxrQkFBa0I7Z0JBQ2xCLGtCQUFrQjtnQkFFbEIsTUFBTSxJQUFJLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDekIsTUFBTTthQUNOO1NBQ0Q7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2IsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUNaO0lBRUQsT0FBTztRQUNOLElBQUk7UUFDSixFQUFFO0tBQ0YsQ0FBQTtBQUNGLENBQUM7QUFuREQsMENBbURDO0FBRUQsU0FBZ0IsVUFBVSxDQUFDLEtBRTFCLEVBQUUsT0FBa0I7SUFFcEIsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFLEdBQUcsR0FBRyxlQUFlLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBRXBELE9BQU87UUFDTixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDbkIsRUFBRSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO0tBQ2YsQ0FBQTtBQUNGLENBQUM7QUFWRCxnQ0FVQztBQUVELFNBQWdCLE9BQU8sQ0FBQyxDQUFTO0lBRWhDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNwQixDQUFDO0FBSEQsMEJBR0M7QUFFRCxTQUFnQixTQUFTLENBQUMsQ0FBUztJQUVsQyxPQUFPLG9CQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUM3QixDQUFDO0FBSEQsOEJBR0M7QUFFRCxrQkFBZSxPQUFzQyxDQUFDO0FBRXRELDhDQUE4QyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSB1c2VyIG9uIDIwMTgvNy8yOS8wMjkuXG4gKi9cblxuaW1wb3J0IHsgdGFibGVfdHcyY24sIHRhYmxlX2NuMnR3IH0gZnJvbSAnLi4vemgvY29udmVydC9pbmRleCc7XG5pbXBvcnQgVVN0cmluZyBmcm9tICd1bmktc3RyaW5nJztcblxuZXhwb3J0IGludGVyZmFjZSBJT3B0aW9uc1xue1xuXHRjb3JlSnM/OiBib29sZWFuLFxuXHRpZ25vcmU/OiBib29sZWFuLFxufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9TdHJUYWJsZUFycmF5KHRhYmxlOiB7XG5cdFtrOiBzdHJpbmddOiBzdHJpbmcsXG59LCBvcHRpb25zOiBJT3B0aW9ucyA9IHt9KVxue1xuXHRpZiAodHlwZW9mIHRhYmxlICE9PSAnb2JqZWN0JyB8fCBBcnJheS5pc0FycmF5KHRhYmxlKSlcblx0e1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoYHRhYmxlICcke3R5cGVvZiB0YWJsZX0nICR7dGFibGV9YCk7XG5cdH1cblxuXHRsZXQgZnJvbSA9IFtdO1xuXHRsZXQgdG8gPSBbXTtcblxuXHRjb25zdCBrcyA9IE9iamVjdC5rZXlzKHRhYmxlKTtcblx0a3Muc29ydCgpO1xuXG5cdGxldCBzcGxpdCA9IG9wdGlvbnMuY29yZUpzID8ganNTcGxpdCA6IHV0ZjhTcGxpdDtcblxuXHRmb3IgKGxldCBrIG9mIGtzKVxuXHR7XG5cdFx0bGV0IGsyID0gdGFibGVba107XG5cblx0XHRsZXQgczEgPSBzcGxpdChrKTtcblx0XHRsZXQgczIgPSBzcGxpdChrMik7XG5cblx0XHRpZiAoczEubGVuZ3RoICE9PSAxIHx8IHMyLmxlbmd0aCAhPT0gMSlcblx0XHR7XG5cdFx0XHRsZXQgbXNnID0gYCcke2t9JyBzMTogJHtzMS5sZW5ndGh9ICR7czF9IDsgczI6ICR7czIubGVuZ3RofSAke3MyfWA7XG5cblx0XHRcdGlmIChvcHRpb25zLmlnbm9yZSlcblx0XHRcdHtcblx0XHRcdFx0Y29uc29sZS5lcnJvcihtc2cpO1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdGVsc2Vcblx0XHRcdHtcblx0XHRcdFx0Ly9jb25zb2xlLmRpcihzMSk7XG5cdFx0XHRcdC8vY29uc29sZS5kaXIoczIpO1xuXHRcdFx0XHRcblx0XHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihtc2cpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cblx0XHRmcm9tLnB1c2goayk7XG5cdFx0dG8ucHVzaChrMik7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdGZyb20sXG5cdFx0dG8sXG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvU3RyVGFibGUodGFibGU6IHtcblx0W2s6IHN0cmluZ106IHN0cmluZyxcbn0sIG9wdGlvbnM/OiBJT3B0aW9ucylcbntcblx0bGV0IHsgZnJvbSwgdG8sIH0gPSB0b1N0clRhYmxlQXJyYXkodGFibGUsIG9wdGlvbnMpO1xuXG5cdHJldHVybiB7XG5cdFx0ZnJvbTogZnJvbS5qb2luKCcnKSxcblx0XHR0bzogdG8uam9pbignJyksXG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGpzU3BsaXQoczogc3RyaW5nKVxue1xuXHRyZXR1cm4gcy5zcGxpdCgnJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1dGY4U3BsaXQoczogc3RyaW5nKVxue1xuXHRyZXR1cm4gVVN0cmluZy5zcGxpdChzLCAnJyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGV4cG9ydHMgYXMgdHlwZW9mIGltcG9ydCgnLi9zdHJ0YWJsZScpO1xuXG4vL2NvbnNvbGUubG9nKF9fZmlsZW5hbWUsIHJlcXVpcmUuZXh0ZW5zaW9ucyk7XG4iXX0=
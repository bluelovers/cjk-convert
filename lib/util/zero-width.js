"use strict";
/**
 * Created by user on 2019/7/26.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.zeroWidthList = [
    '\udb40\udd00',
    '\u200c',
    '\u200d',
    '\u200b',
    '\ufeff',
    '\u200e',
    '\u200f',
];
exports.zeroWidthRe = new RegExp(exports.zeroWidthList.join('|'), 'ug');
function removeZeroWidth(input) {
    return input.replace(exports.zeroWidthRe, '');
}
exports.removeZeroWidth = removeZeroWidth;
exports.default = removeZeroWidth;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiemVyby13aWR0aC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInplcm8td2lkdGgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOztHQUVHOztBQUVVLFFBQUEsYUFBYSxHQUFHO0lBQzVCLGNBQWM7SUFDZCxRQUFRO0lBQ1IsUUFBUTtJQUNSLFFBQVE7SUFDUixRQUFRO0lBQ1IsUUFBUTtJQUNSLFFBQVE7Q0FDQyxDQUFDO0FBRUUsUUFBQSxXQUFXLEdBQUcsSUFBSSxNQUFNLENBQUMscUJBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFFckUsU0FBZ0IsZUFBZSxDQUFDLEtBQWE7SUFFNUMsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLG1CQUFXLEVBQUUsRUFBRSxDQUFDLENBQUE7QUFDdEMsQ0FBQztBQUhELDBDQUdDO0FBRUQsa0JBQWUsZUFBZSxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IHVzZXIgb24gMjAxOS83LzI2LlxuICovXG5cbmV4cG9ydCBjb25zdCB6ZXJvV2lkdGhMaXN0ID0gW1xuXHQnXFx1ZGI0MFxcdWRkMDAnLFxuXHQnXFx1MjAwYycsXG5cdCdcXHUyMDBkJyxcblx0J1xcdTIwMGInLFxuXHQnXFx1ZmVmZicsXG5cdCdcXHUyMDBlJyxcblx0J1xcdTIwMGYnLFxuXSBhcyBjb25zdDtcblxuZXhwb3J0IGNvbnN0IHplcm9XaWR0aFJlID0gbmV3IFJlZ0V4cCh6ZXJvV2lkdGhMaXN0LmpvaW4oJ3wnKSwgJ3VnJyk7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVaZXJvV2lkdGgoaW5wdXQ6IHN0cmluZylcbntcblx0cmV0dXJuIGlucHV0LnJlcGxhY2UoemVyb1dpZHRoUmUsICcnKVxufVxuXG5leHBvcnQgZGVmYXVsdCByZW1vdmVaZXJvV2lkdGgiXX0=
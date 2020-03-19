"use strict";
/**
 * Created by user on 2018/2/17/017.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.zh = exports.jp = exports.word = exports.filename = void 0;
const jp_1 = require("../jp");
const convert_1 = require("../zh/convert");
function filename(name, options = {}) {
    return jp(name, options)
        .replace(/·/g, '・');
}
exports.filename = filename;
function word(name, options = {}) {
    return jp(name, options);
}
exports.word = word;
function jp(txt, options = {}) {
    return zh(jp_1.zh2jp(zh(txt), {
        // @ts-ignore
        skip: '竜龍制征里像拜冰澤涉丑兒娘姐姉志儿從辨勞' + (options.skip || ''),
        safe: typeof options.safe == 'boolean' ? options.safe : true,
    }))
        .replace(/诅/g, '詛')
        .replace(/复仇/g, '復仇')
        .replace(/戦斗/g, '戦闘')
        .replace(/^プロローグ/, '序')
        .replace(/^エピローグ/, '終章')
        .replace(/総/g, '總')
        .replace(/帰|归/g, '歸')
        .replace(/辺/g, '邊')
        .replace(/対/g, '對')
        .replace(/独/g, '獨')
        .replace(/実/g, '實')
        .replace(/決斗/g, '決闘')
        .replace(/仮/g, '假')
        .replace(/戦/g, '戰');
}
exports.jp = jp;
function zh(txt, options = {}) {
    return txt
        .replace(/[\u2000-\u200F]/g, '')
        .replace(/[\u2028-\u202F]/g, '')
        .replace(/[\u205F-\u2060]/g, '')
        //.replace(/儿/g, '兒')
        .replace(/与/g, '與')
        .replace(/[亜亚亞]/g, '亞')
        .replace(/価/, '價')
        .replace(/[觉覚覺]/g, '覺')
        .replace(/亏/g, '虧')
        .replace(/[·‧・···•]/g, '・')
        .replace(/泽/g, '澤')
        .replace(/^(?:后)(記|日)/, '後$1')
        .replace(/(身)(?:后)/, '$1後')
        .replace(/(?:后)(悔)/, '後$1')
        .replace(/回复/g, '回復')
        .replace(/复(仇|讐)/g, '復$1')
        .replace(/里面/g, '裡面')
        .replace(/([今此])后/g, '$1後')
        .replace(/[么预枪丛迈这个尔儿从龙丝风劳弃别驯卢妈称号]+/ug, function (s) {
        return convert_1.cn2tw(s);
    });
}
exports.zh = zh;
exports.default = exports;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZW5hbWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmaWxlbmFtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7O0dBRUc7OztBQUVILDhCQUE4QjtBQUM5QiwyQ0FBc0M7QUFRdEMsU0FBZ0IsUUFBUSxDQUFDLElBQVksRUFBRSxVQUFvQixFQUFFO0lBRTVELE9BQU8sRUFBRSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUM7U0FDdEIsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FDbEI7QUFDSCxDQUFDO0FBTEQsNEJBS0M7QUFFRCxTQUFnQixJQUFJLENBQUMsSUFBWSxFQUFFLFVBQW9CLEVBQUU7SUFFeEQsT0FBTyxFQUFFLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQzFCLENBQUM7QUFIRCxvQkFHQztBQUVELFNBQWdCLEVBQUUsQ0FBQyxHQUFXLEVBQUUsVUFBb0IsRUFBRTtJQUVyRCxPQUFPLEVBQUUsQ0FBQyxVQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQ3hCLGFBQWE7UUFDYixJQUFJLEVBQUUsc0JBQXNCLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUNuRCxJQUFJLEVBQUUsT0FBTyxPQUFPLENBQUMsSUFBSSxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSTtLQUM1RCxDQUFDLENBQUM7U0FDRCxPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQztTQUNsQixPQUFPLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQztTQUNwQixPQUFPLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQztTQUNwQixPQUFPLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQztTQUN0QixPQUFPLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQztTQUN2QixPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQztTQUNsQixPQUFPLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQztTQUNwQixPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQztTQUNsQixPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQztTQUNsQixPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQztTQUNsQixPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQztTQUNsQixPQUFPLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQztTQUNwQixPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQztTQUNsQixPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUNsQjtBQUNILENBQUM7QUF0QkQsZ0JBc0JDO0FBRUQsU0FBZ0IsRUFBRSxDQUFDLEdBQVcsRUFBRSxVQUFvQixFQUFFO0lBRXJELE9BQU8sR0FBRztTQUVSLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxFQUFFLENBQUM7U0FDL0IsT0FBTyxDQUFDLGtCQUFrQixFQUFFLEVBQUUsQ0FBQztTQUMvQixPQUFPLENBQUMsa0JBQWtCLEVBQUUsRUFBRSxDQUFDO1FBRWhDLHFCQUFxQjtTQUVwQixPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQztTQUNsQixPQUFPLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQztTQUN0QixPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztTQUNqQixPQUFPLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQztTQUN0QixPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQztTQUNsQixPQUFPLENBQUMsWUFBWSxFQUFFLEdBQUcsQ0FBQztTQUMxQixPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQztTQUNsQixPQUFPLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQztTQUM3QixPQUFPLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQztTQUMxQixPQUFPLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQztTQUMxQixPQUFPLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQztTQUNwQixPQUFPLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQztTQUV6QixPQUFPLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQztTQUNwQixPQUFPLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQztTQUUxQixPQUFPLENBQUMsNEJBQTRCLEVBQUUsVUFBVSxDQUFDO1FBRWpELE9BQU8sZUFBSyxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ2hCLENBQUMsQ0FBQyxDQUtEO0FBQ0gsQ0FBQztBQW5DRCxnQkFtQ0M7QUFFRCxrQkFBZSxPQUFzQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IHVzZXIgb24gMjAxOC8yLzE3LzAxNy5cbiAqL1xuXG5pbXBvcnQgeyB6aDJqcCB9IGZyb20gJy4uL2pwJztcbmltcG9ydCB7IGNuMnR3IH0gZnJvbSAnLi4vemgvY29udmVydCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU9wdGlvbnNcbntcblx0c2tpcD86IHN0cmluZyxcblx0c2FmZT86IGJvb2xlYW4sXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWxlbmFtZShuYW1lOiBzdHJpbmcsIG9wdGlvbnM6IElPcHRpb25zID0ge30pOiBzdHJpbmdcbntcblx0cmV0dXJuIGpwKG5hbWUsIG9wdGlvbnMpXG5cdFx0LnJlcGxhY2UoL8K3L2csICfjg7snKVxuXHRcdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdvcmQobmFtZTogc3RyaW5nLCBvcHRpb25zOiBJT3B0aW9ucyA9IHt9KTogc3RyaW5nXG57XG5cdHJldHVybiBqcChuYW1lLCBvcHRpb25zKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGpwKHR4dDogc3RyaW5nLCBvcHRpb25zOiBJT3B0aW9ucyA9IHt9KTogc3RyaW5nXG57XG5cdHJldHVybiB6aCh6aDJqcCh6aCh0eHQpLCB7XG5cdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdHNraXA6ICfnq5zpvo3liLblvoHph4zlg4/mi5zlhrDmvqTmtonkuJHlhZLlqJjlp5Dlp4nlv5flhL/lvp7ovqjli54nICsgKG9wdGlvbnMuc2tpcCB8fCAnJyksXG5cdFx0c2FmZTogdHlwZW9mIG9wdGlvbnMuc2FmZSA9PSAnYm9vbGVhbicgPyBvcHRpb25zLnNhZmUgOiB0cnVlLFxuXHR9KSlcblx0XHQucmVwbGFjZSgv6K+FL2csICfoqZsnKVxuXHRcdC5yZXBsYWNlKC/lpI3ku4cvZywgJ+W+qeS7hycpXG5cdFx0LnJlcGxhY2UoL+aIpuaWly9nLCAn5oim6ZeYJylcblx0XHQucmVwbGFjZSgvXuODl+ODreODreODvOOCsC8sICfluo8nKVxuXHRcdC5yZXBsYWNlKC9e44Ko44OU44Ot44O844KwLywgJ+e1gueroCcpXG5cdFx0LnJlcGxhY2UoL+e3jy9nLCAn57i9Jylcblx0XHQucmVwbGFjZSgv5biwfOW9ki9nLCAn5q24Jylcblx0XHQucmVwbGFjZSgv6L66L2csICfpgoonKVxuXHRcdC5yZXBsYWNlKC/lr74vZywgJ+WwjScpXG5cdFx0LnJlcGxhY2UoL+eLrC9nLCAn542oJylcblx0XHQucmVwbGFjZSgv5a6fL2csICflr6YnKVxuXHRcdC5yZXBsYWNlKC/msbrmlpcvZywgJ+axuumXmCcpXG5cdFx0LnJlcGxhY2UoL+S7ri9nLCAn5YGHJylcblx0XHQucmVwbGFjZSgv5oimL2csICfmiLAnKVxuXHRcdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHpoKHR4dDogc3RyaW5nLCBvcHRpb25zOiBJT3B0aW9ucyA9IHt9KTogc3RyaW5nXG57XG5cdHJldHVybiB0eHRcblxuXHRcdC5yZXBsYWNlKC9bXFx1MjAwMC1cXHUyMDBGXS9nLCAnJylcblx0XHQucmVwbGFjZSgvW1xcdTIwMjgtXFx1MjAyRl0vZywgJycpXG5cdFx0LnJlcGxhY2UoL1tcXHUyMDVGLVxcdTIwNjBdL2csICcnKVxuXG5cdFx0Ly8ucmVwbGFjZSgv5YS/L2csICflhZInKVxuXG5cdFx0LnJlcGxhY2UoL+S4ji9nLCAn6IiHJylcblx0XHQucmVwbGFjZSgvW+S6nOS6muS6nl0vZywgJ+S6nicpXG5cdFx0LnJlcGxhY2UoL+S+oS8sICflg7knKVxuXHRcdC5yZXBsYWNlKC9b6KeJ6Kaa6Ka6XS9nLCAn6Ka6Jylcblx0XHQucmVwbGFjZSgv5LqPL2csICfomacnKVxuXHRcdC5yZXBsYWNlKC9bwrfigKfjg7vCt8K3wrfigKJdL2csICfjg7snKVxuXHRcdC5yZXBsYWNlKC/ms70vZywgJ+a+pCcpXG5cdFx0LnJlcGxhY2UoL14oPzrlkI4pKOiomHzml6UpLywgJ+W+jCQxJylcblx0XHQucmVwbGFjZSgvKOi6qykoPzrlkI4pLywgJyQx5b6MJylcblx0XHQucmVwbGFjZSgvKD865ZCOKSjmgpQpLywgJ+W+jCQxJylcblx0XHQucmVwbGFjZSgv5Zue5aSNL2csICflm57lvqknKVxuXHRcdC5yZXBsYWNlKC/lpI0o5LuHfOiukCkvZywgJ+W+qSQxJylcblxuXHRcdC5yZXBsYWNlKC/ph4zpnaIvZywgJ+ijoemdoicpXG5cdFx0LnJlcGxhY2UoLyhb5LuK5q2kXSnlkI4vZywgJyQx5b6MJylcblxuXHRcdC5yZXBsYWNlKC9b5LmI6aKE5p6q5Lib6L+I6L+Z5Liq5bCU5YS/5LuO6b6Z5Lid6aOO5Yqz5byD5Yir6amv5Y2i5aaI56ew5Y+3XSsvdWcsIGZ1bmN0aW9uIChzKVxuXHRcdHtcblx0XHRcdHJldHVybiBjbjJ0dyhzKVxuXHRcdH0pXG5cblx0XHQvLy5yZXBsYWNlKC/mrbvlkI4vZywgJ+atu+W+jCcpXG5cdFx0Ly8ucmVwbGFjZSgv5b2TL2csICfnlbYnKVxuXG5cdFx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBleHBvcnRzIGFzIHR5cGVvZiBpbXBvcnQoJy4vZmlsZW5hbWUnKTtcbiJdfQ==
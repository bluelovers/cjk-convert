"use strict";
/**
 * Created by user on 2018/2/17/017.
 */
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZW5hbWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmaWxlbmFtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7O0dBRUc7O0FBRUgsOEJBQThCO0FBQzlCLDJDQUFzQztBQVF0QyxTQUFnQixRQUFRLENBQUMsSUFBWSxFQUFFLFVBQW9CLEVBQUU7SUFFNUQsT0FBTyxFQUFFLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQztTQUN0QixPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUNsQjtBQUNILENBQUM7QUFMRCw0QkFLQztBQUVELFNBQWdCLElBQUksQ0FBQyxJQUFZLEVBQUUsVUFBb0IsRUFBRTtJQUV4RCxPQUFPLEVBQUUsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDMUIsQ0FBQztBQUhELG9CQUdDO0FBRUQsU0FBZ0IsRUFBRSxDQUFDLEdBQVcsRUFBRSxVQUFvQixFQUFFO0lBRXJELE9BQU8sRUFBRSxDQUFDLFVBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFDeEIsYUFBYTtRQUNiLElBQUksRUFBRSxzQkFBc0IsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ25ELElBQUksRUFBRSxPQUFPLE9BQU8sQ0FBQyxJQUFJLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJO0tBQzVELENBQUMsQ0FBQztTQUNELE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDO1NBQ2xCLE9BQU8sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDO1NBQ3BCLE9BQU8sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDO1NBQ3BCLE9BQU8sQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDO1NBQ3RCLE9BQU8sQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDO1NBQ3ZCLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDO1NBQ2xCLE9BQU8sQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDO1NBQ3BCLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDO1NBQ2xCLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDO1NBQ2xCLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDO1NBQ2xCLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDO1NBQ2xCLE9BQU8sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDO1NBQ3BCLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDO1NBQ2xCLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQ2xCO0FBQ0gsQ0FBQztBQXRCRCxnQkFzQkM7QUFFRCxTQUFnQixFQUFFLENBQUMsR0FBVyxFQUFFLFVBQW9CLEVBQUU7SUFFckQsT0FBTyxHQUFHO1NBRVIsT0FBTyxDQUFDLGtCQUFrQixFQUFFLEVBQUUsQ0FBQztTQUMvQixPQUFPLENBQUMsa0JBQWtCLEVBQUUsRUFBRSxDQUFDO1NBQy9CLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxFQUFFLENBQUM7UUFFaEMscUJBQXFCO1NBRXBCLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDO1NBQ2xCLE9BQU8sQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDO1NBQ3RCLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO1NBQ2pCLE9BQU8sQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDO1NBQ3RCLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDO1NBQ2xCLE9BQU8sQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDO1NBQzFCLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDO1NBQ2xCLE9BQU8sQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDO1NBQzdCLE9BQU8sQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDO1NBQzFCLE9BQU8sQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDO1NBQzFCLE9BQU8sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDO1NBQ3BCLE9BQU8sQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDO1NBRXpCLE9BQU8sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDO1NBQ3BCLE9BQU8sQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDO1NBRTFCLE9BQU8sQ0FBQyw0QkFBNEIsRUFBRSxVQUFVLENBQUM7UUFFakQsT0FBTyxlQUFLLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDaEIsQ0FBQyxDQUFDLENBS0Q7QUFDSCxDQUFDO0FBbkNELGdCQW1DQztBQUVELGtCQUFlLE9BQXNDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgdXNlciBvbiAyMDE4LzIvMTcvMDE3LlxuICovXG5cbmltcG9ydCB7IHpoMmpwIH0gZnJvbSAnLi4vanAnO1xuaW1wb3J0IHsgY24ydHcgfSBmcm9tICcuLi96aC9jb252ZXJ0JztcblxuZXhwb3J0IGludGVyZmFjZSBJT3B0aW9uc1xue1xuXHRza2lwPzogc3RyaW5nLFxuXHRzYWZlPzogYm9vbGVhbixcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbGVuYW1lKG5hbWU6IHN0cmluZywgb3B0aW9uczogSU9wdGlvbnMgPSB7fSk6IHN0cmluZ1xue1xuXHRyZXR1cm4ganAobmFtZSwgb3B0aW9ucylcblx0XHQucmVwbGFjZSgvwrcvZywgJ+ODuycpXG5cdFx0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd29yZChuYW1lOiBzdHJpbmcsIG9wdGlvbnM6IElPcHRpb25zID0ge30pOiBzdHJpbmdcbntcblx0cmV0dXJuIGpwKG5hbWUsIG9wdGlvbnMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24ganAodHh0OiBzdHJpbmcsIG9wdGlvbnM6IElPcHRpb25zID0ge30pOiBzdHJpbmdcbntcblx0cmV0dXJuIHpoKHpoMmpwKHpoKHR4dCksIHtcblx0XHQvLyBAdHMtaWdub3JlXG5cdFx0c2tpcDogJ+ernOm+jeWItuW+gemHjOWDj+aLnOWGsOa+pOa2ieS4keWFkuWomOWnkOWnieW/l+WEv+W+nui+qOWLnicgKyAob3B0aW9ucy5za2lwIHx8ICcnKSxcblx0XHRzYWZlOiB0eXBlb2Ygb3B0aW9ucy5zYWZlID09ICdib29sZWFuJyA/IG9wdGlvbnMuc2FmZSA6IHRydWUsXG5cdH0pKVxuXHRcdC5yZXBsYWNlKC/or4UvZywgJ+ipmycpXG5cdFx0LnJlcGxhY2UoL+WkjeS7hy9nLCAn5b6p5LuHJylcblx0XHQucmVwbGFjZSgv5oim5paXL2csICfmiKbpl5gnKVxuXHRcdC5yZXBsYWNlKC9e44OX44Ot44Ot44O844KwLywgJ+W6jycpXG5cdFx0LnJlcGxhY2UoL17jgqjjg5Tjg63jg7zjgrAvLCAn57WC56ugJylcblx0XHQucmVwbGFjZSgv57ePL2csICfnuL0nKVxuXHRcdC5yZXBsYWNlKC/luLB85b2SL2csICfmrbgnKVxuXHRcdC5yZXBsYWNlKC/ovrovZywgJ+mCiicpXG5cdFx0LnJlcGxhY2UoL+Wvvi9nLCAn5bCNJylcblx0XHQucmVwbGFjZSgv54usL2csICfnjagnKVxuXHRcdC5yZXBsYWNlKC/lrp8vZywgJ+WvpicpXG5cdFx0LnJlcGxhY2UoL+axuuaWly9nLCAn5rG66ZeYJylcblx0XHQucmVwbGFjZSgv5LuuL2csICflgYcnKVxuXHRcdC5yZXBsYWNlKC/miKYvZywgJ+aIsCcpXG5cdFx0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gemgodHh0OiBzdHJpbmcsIG9wdGlvbnM6IElPcHRpb25zID0ge30pOiBzdHJpbmdcbntcblx0cmV0dXJuIHR4dFxuXG5cdFx0LnJlcGxhY2UoL1tcXHUyMDAwLVxcdTIwMEZdL2csICcnKVxuXHRcdC5yZXBsYWNlKC9bXFx1MjAyOC1cXHUyMDJGXS9nLCAnJylcblx0XHQucmVwbGFjZSgvW1xcdTIwNUYtXFx1MjA2MF0vZywgJycpXG5cblx0XHQvLy5yZXBsYWNlKC/lhL8vZywgJ+WFkicpXG5cblx0XHQucmVwbGFjZSgv5LiOL2csICfoiIcnKVxuXHRcdC5yZXBsYWNlKC9b5Lqc5Lqa5LqeXS9nLCAn5LqeJylcblx0XHQucmVwbGFjZSgv5L6hLywgJ+WDuScpXG5cdFx0LnJlcGxhY2UoL1vop4nopproprpdL2csICfopronKVxuXHRcdC5yZXBsYWNlKC/kuo8vZywgJ+iZpycpXG5cdFx0LnJlcGxhY2UoL1vCt+KAp+ODu8K3wrfCt+KAol0vZywgJ+ODuycpXG5cdFx0LnJlcGxhY2UoL+azvS9nLCAn5r6kJylcblx0XHQucmVwbGFjZSgvXig/OuWQjiko6KiYfOaXpSkvLCAn5b6MJDEnKVxuXHRcdC5yZXBsYWNlKC8o6LqrKSg/OuWQjikvLCAnJDHlvownKVxuXHRcdC5yZXBsYWNlKC8oPzrlkI4pKOaClCkvLCAn5b6MJDEnKVxuXHRcdC5yZXBsYWNlKC/lm57lpI0vZywgJ+WbnuW+qScpXG5cdFx0LnJlcGxhY2UoL+WkjSjku4d86K6QKS9nLCAn5b6pJDEnKVxuXG5cdFx0LnJlcGxhY2UoL+mHjOmdoi9nLCAn6KOh6Z2iJylcblx0XHQucmVwbGFjZSgvKFvku4rmraRdKeWQji9nLCAnJDHlvownKVxuXG5cdFx0LnJlcGxhY2UoL1vkuYjpooTmnqrkuJvov4jov5nkuKrlsJTlhL/ku47pvpnkuJ3po47lirPlvIPliKvpqa/ljaLlpojnp7Dlj7ddKy91ZywgZnVuY3Rpb24gKHMpXG5cdFx0e1xuXHRcdFx0cmV0dXJuIGNuMnR3KHMpXG5cdFx0fSlcblxuXHRcdC8vLnJlcGxhY2UoL+atu+WQji9nLCAn5q275b6MJylcblx0XHQvLy5yZXBsYWNlKC/lvZMvZywgJ+eVticpXG5cblx0XHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGV4cG9ydHMgYXMgdHlwZW9mIGltcG9ydCgnLi9maWxlbmFtZScpO1xuIl19
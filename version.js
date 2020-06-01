"use strict";
/**
 * Created by user on 2020/6/2.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.version = void 0;
exports.default = exports.version;
Object.defineProperty(exports, "version", {
    get() {
        return require('./package.json').version;
    }
});
Object.defineProperty(exports, "default", {
    get() {
        return exports.version;
    }
});
//# sourceMappingURL=version.js.map
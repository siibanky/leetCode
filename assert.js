"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertEqual = void 0;
function assertEqual(a, b) {
    if (typeof a === "object") {
        if (JSON.stringify(a) !== JSON.stringify(b)) {
            throw new Error("objects not equal");
        }
    }
    else if (a !== b) {
        throw new Error("primitives ".concat(a, " and ").concat(b, " are not equal"));
    }
}
exports.assertEqual = assertEqual;

export function assertEqual(a: any, b: any) {
    if (typeof a === "object") {
        if (JSON.stringify(a) !== JSON.stringify(b)) {
            throw new Error("objects not equal");
        }
    } else if (a !== b) {
        throw new Error(`primitives ${a} and ${b} are not equal`);
    }
}
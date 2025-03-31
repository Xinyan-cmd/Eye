// Retail-safe heap spray
export function sprayHeap() {
    const spray = [];
    for (let i = 0; i < 100; i++) {
        const buf = new ArrayBuffer(0x1000);
        const view = new Uint32Array(buf);
        view.fill(0x41414141);
        spray.push(view);
    }
    return spray;
}

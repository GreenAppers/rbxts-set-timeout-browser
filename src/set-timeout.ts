/**
 * Schedule a callback to be called once after `timeout` seconds. Returns a
 * function that can be called to stop the timer.
 * @param callback The callback to call after `timeout` seconds.
 * @param timeout The timeout in seconds.
 * @returns A cleanup function.
 */
export function setTimeout(callback: () => void, timeout: number) {
  const handle = globalThis.setTimeout(callback, timeout);
  return () => globalThis.clearTimeout(handle);
}

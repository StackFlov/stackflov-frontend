export async function promisePool(taskFns, concurrency = 6) {
  const results = new Array(taskFns.length);
  let idx = 0;

  async function worker() {
    while (idx < taskFns.length) {
      const cur = idx++;
      try {
        results[cur] = await taskFns[cur]();
      } catch {
        results[cur] = null;
      }
    }
  }

  const workers = Array.from(
    { length: Math.min(concurrency, taskFns.length) },
    () => worker()
  );

  await Promise.all(workers);
  return results;
}
const WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS = 5;

const requests = new Map<string, number[]>();

// Clean up old entries every 5 minutes
setInterval(() => {
  const now = Date.now();
  for (const [key, timestamps] of requests) {
    const valid = timestamps.filter((t) => now - t < WINDOW_MS);
    if (valid.length === 0) {
      requests.delete(key);
    } else {
      requests.set(key, valid);
    }
  }
}, 5 * 60 * 1000);

export function checkRateLimit(identifier: string): { allowed: boolean } {
  const now = Date.now();
  const timestamps = requests.get(identifier) || [];
  const valid = timestamps.filter((t) => now - t < WINDOW_MS);

  if (valid.length >= MAX_REQUESTS) {
    return { allowed: false };
  }

  valid.push(now);
  requests.set(identifier, valid);
  return { allowed: true };
}

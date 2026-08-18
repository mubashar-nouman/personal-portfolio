import posthog from 'posthog-js';

/**
 * Records a CTA click. Safe to call before PostHog has initialised or when no
 * key is configured — it simply does nothing rather than throwing.
 */
export function trackClick(name: string, properties?: Record<string, string>) {
  if (typeof window === 'undefined') return;
  if (!process.env.NEXT_PUBLIC_POSTHOG_KEY) return;

  try {
    posthog.capture(name, properties);
  } catch {
    // Analytics must never break a user action.
  }
}

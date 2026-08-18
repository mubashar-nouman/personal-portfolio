'use client';

import { useEffect } from 'react';
import posthog from 'posthog-js';

/**
 * Cookieless by default, with cookies only after explicit consent.
 *
 * `cookieless_mode: 'on_reject'` means PostHog stores nothing in the browser
 * until someone accepts, so the site is compliant without a banner having been
 * answered. Accepting upgrades to full tracking (accurate time on page,
 * returning visitors); ignoring or rejecting leaves it in cookieless mode,
 * where visitors are identified by a daily-rotating server-side hash.
 */
export default function PostHogProvider() {
  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    if (!key) return;

    posthog.init(key, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com',
      cookieless_mode: 'on_reject',
      defaults: '2026-05-30',
      capture_pageview: true,
      // Time on page: PostHog derives it from the gap between $pageview and
      // $pageleave, so this is the setting that answers "how long did they stay".
      capture_pageleave: true,
    });
  }, []);

  return null;
}

import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import PostHogProvider from '@/components/analytics/PostHogProvider';

import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-inter',
});

const SITE_URL = 'https://mubasharnouman.com';
const TITLE = 'Mubashar Nouman | Senior Full Stack Engineer — AI SaaS Development';
const DESCRIPTION =
  'Senior Full Stack Engineer with 4+ years building AI-powered SaaS products. React, Next.js, Node.js, Python and React Native. Available for new client projects — free discovery call.';
const SHARE_DESCRIPTION =
  'I build AI-powered SaaS products that ship. 4+ years across React, Next.js, Node.js and Python. Available for new client projects.';
const SHARE_IMAGE = `${SITE_URL}/projects/zygenai.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  authors: [{ name: 'Mubashar Nouman' }],
  keywords: [
    'Mubashar Nouman',
    'mubasharnouman',
    'full stack engineer Pakistan',
    'AI SaaS developer',
    'React developer Lahore',
    'Next.js developer',
    'hire full stack engineer',
  ],
  alternates: { canonical: '/' },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-48.png', type: 'image/png', sizes: '48x48' },
      { url: '/favicon-96.png', type: 'image/png', sizes: '96x96' },
      { url: '/favicon-192.png', type: 'image/png', sizes: '192x192' },
    ],
    shortcut: '/favicon.ico',
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  openGraph: {
    type: 'website',
    siteName: 'Mubashar Nouman',
    title: TITLE,
    description: SHARE_DESCRIPTION,
    url: SITE_URL,
    locale: 'en_US',
    images: [
      {
        url: SHARE_IMAGE,
        width: 2100,
        height: 1120,
        alt: 'ZygenAI — AI support agents for marketplace sellers, built by Mubashar Nouman',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: SHARE_DESCRIPTION,
    images: [SHARE_IMAGE],
  },
};

export const viewport: Viewport = {
  themeColor: '#ea580c',
  width: 'device-width',
  initialScale: 1,
};

/**
 * Same @graph as the Vite build served: Person nested inside ProfilePage's
 * mainEntity, which is the field Google's ProfilePage spec requires.
 */
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: 'Mubashar Nouman — Senior Full Stack Engineer',
      publisher: { '@id': `${SITE_URL}/#person` },
      inLanguage: 'en',
    },
    {
      '@type': 'ProfilePage',
      '@id': `${SITE_URL}/#webpage`,
      url: `${SITE_URL}/`,
      name: TITLE,
      isPartOf: { '@id': `${SITE_URL}/#website` },
      dateCreated: '2025-08-05T00:00:00+05:00',
      dateModified: '2026-08-18T00:00:00+05:00',
      mainEntity: {
        '@type': 'Person',
        '@id': `${SITE_URL}/#person`,
        name: 'Mubashar Nouman',
        alternateName: ['mubasharnouman', 'Mubashar'],
        jobTitle: 'Senior Full Stack Engineer',
        description:
          'Full stack engineer building AI-powered SaaS products end to end with React, Next.js, Node.js and Python.',
        image: `${SITE_URL}/mine.jpg`,
        url: `${SITE_URL}/`,
        email: 'mailto:mubashirrnouman@gmail.com',
        telephone: '+92-308-7031050',
        address: { '@type': 'PostalAddress', addressLocality: 'Lahore', addressCountry: 'PK' },
        sameAs: [
          'https://github.com/mubashar-nouman',
          'https://linkedin.com/in/mubashar-nouman',
          'https://instagram.com/mubashar_dev',
        ],
        knowsAbout: [
          'AI SaaS Development',
          'Retrieval Augmented Generation',
          'React',
          'Next.js',
          'Node.js',
          'Python',
          'FastAPI',
          'React Native',
          'PostgreSQL',
          'MongoDB',
        ],
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
        <PostHogProvider />
      </body>
    </html>
  );
}

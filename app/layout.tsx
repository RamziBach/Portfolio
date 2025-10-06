import type { Metadata } from 'next';
import NextTopLoader from 'nextjs-toploader';
import { Geist, Geist_Mono } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';

import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Ramzi Bach - Front-End Web Developer',
  description:
    'Front-End Web Developer and JavaScript educator based in Montreal, Canada. Creator of Slaying The Dragon educational platform. Specializing in Next.js, TypeScript, React, and modern web development. Offering comprehensive CSS and JavaScript courses, YouTube tutorials, and professional web development services.',
  keywords: [
    'Ramzi Bach',
    'Ramzi',
    'Bach',
    'Personal Website',
    'Portfolio',
    'Developer',
    'Web Developer',
    'Software Engineer',
    'Full-Stack Developer',
    'Frontend Developer',
    'Backend Developer',
    'Programming',
    'Coding',
    'Slaying The Dragon',
    'Courses',
    'Web Development',
    'CSS Course',
    'JavaScript Course',
    'ReactJS Course',
    'NextJS Course',
    'YouTuber',
    'Front-end web development courses',
    'Web development tutorials',
    'Learn CSS',
    'CSS courses online',
    'JavaScript programming classes',
    'Responsive web design',
    'UI/UX design courses',
    'Web development for beginners',
    'Online coding courses',
    'Mobile-first web development',
    'Web development skills',
    'Front-end coding projects',
    'Learn web development online',
    'HTML, CSS, and JavaScript training',
    'Web design and development',
  ],
  authors: [{ name: 'Ramzi Bach', url: 'https://ramzibach.dev' }],
  creator: 'Ramzi Bach',
  metadataBase: new URL('https://ramzibach.dev'),
  openGraph: {
    title: 'Ramzi Bach',
    description:
      'Personal website of Ramzi Bach, a web developer based in Montreal, Canada.',
    url: 'https://ramzibach.dev',
    siteName: 'Ramzi Bach',
    images: [
      {
        url: 'https://ramzibach.dev/og.png',
        width: 1200,
        height: 630,
        alt: 'Ramzi Bach',
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ramzi Bach',
    description:
      'Personal website of Ramzi Bach, a web developer based in Montreal, Canada.',
    images: ['https://ramzibach.dev/og.png'],
    creator: '@ramzibach',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextTopLoader color="var(--primary)" />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider>{children}</NextIntlClientProvider>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}

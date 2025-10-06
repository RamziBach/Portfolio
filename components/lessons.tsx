import { useTranslations } from 'next-intl';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { Link } from 'lucide-react';

const lessons = [
  {
    id: 1,
    title: 'Learn Flexbox CSS in 8 minutes',
    href: 'https://youtu.be/phWxA89Dy94',
  },
  {
    id: 2,
    title: 'Learn CSS Grid - A 13 Minute Deep Dive',
    href: 'https://youtu.be/EiNiSFIPIQE',
  },
  {
    id: 3,
    title: 'Learn CSS Animations In 20 Minutes',
    href: 'https://youtu.be/SgmNxE9lWcY',
  },
  {
    id: 4,
    title: 'Learn CSS Positions Quickly',
    href: 'https://youtu.be/MxEtxo_AaZ4',
  },
  {
    id: 5,
    title: 'A CSS Units Deep Dive',
    href: 'https://youtu.be/fzZTvLmmTzM',
  },
  {
    id: 6,
    title: 'Build Your Portfolio Website',
    href: 'https://youtu.be/dLDn_k8GmaU',
  },
  {
    id: 7,
    title: 'Master Media Queries',
    href: 'https://youtu.be/K24lUqcT0Ms',
  },
  {
    id: 8,
    title: 'Build An Easy Light/Dark Mode',
    href: 'https://youtu.be/Kxv7GIDK9tg',
  },
  {
    id: 9,
    title: 'CSS Full Course - Announcement Video',
    href: 'https://youtu.be/8COXmw996VU',
  },
  {
    id: 10,
    title: 'Learn CSS Box Model',
    href: 'https://youtu.be/nSst4-WbEZk',
  },
  {
    id: 11,
    title: 'Learn CSS Variables In 7 Minutes',
    href: 'https://youtu.be/5wLrz_zUwoU',
  },
  {
    id: 12,
    title: 'Learn CSS Subgrid in 14 minutes',
    href: 'https://youtu.be/Yl8hg2FG20Q',
  },
  {
    id: 13,
    title: 'CSS Only Infinite Scroll',
    href: 'https://youtu.be/Reu0hHbis5w',
  },
  {
    id: 14,
    title: '100 CSS Selectors Explained',
    href: 'https://youtu.be/CsfHrv73sPc',
  },
  {
    id: 15,
    title: 'Modals Made Easy In 15 Minutes',
    href: 'https://youtu.be/W9K9r0Z-8_c',
  },
  {
    id: 16,
    title: 'JavaScript Full Course Announcement',
    href: 'https://youtu.be/Dja2WGfdgWo',
  },
  {
    id: 17,
    title: 'Your CSS Journey Starts Here',
    href: 'https://youtu.be/kz-Mef-gf8o',
  },
  {
    id: 18,
    title: 'CSS Syntax Overview',
    href: 'https://youtu.be/5DnlQi8Dr5c',
  },
  {
    id: 19,
    title: 'Learn CSS Selectors In 5 Minutes',
    href: 'https://youtu.be/2rXVTnji5NA',
  },
  {
    id: 20,
    title: 'Combinator Selectors Explained',
    href: 'https://youtu.be/MxqAEiFXUrM',
  },
  {
    id: 21,
    title: 'WTF Is CSS Specificity',
    href: 'https://youtu.be/MISLJJjkSQ0',
  },
  {
    id: 22,
    title: 'CSS Inheritence Explained In 3 Minutes',
    href: 'https://youtu.be/HvwEWaBnor0',
  },
  {
    id: 23,
    title: 'Learn CSS Colors In 2 Minutes',
    href: 'https://youtu.be/LpImsI2pf2k',
  },
  {
    id: 24,
    title: 'Learn CSS Background Colors',
    href: 'https://youtu.be/VxGgwrUTI5s',
  },
  {
    id: 25,
    title: 'How To Add Custom Fonts In HTML',
    href: 'https://youtu.be/mtn0DkRaoHI',
  },
  {
    id: 26,
    title: 'Learn CSS Typography In 12 Minutes',
    href: 'https://youtu.be/Yi_xWwind1s',
  },
  {
    id: 27,
    title: 'Stop using Margins wrong!',
    href: 'https://youtu.be/yebtps3FLw0',
  },
  {
    id: 28,
    title: 'Learn CSS Padding In 5 Minutes',
    href: 'https://youtu.be/9kwJaYJEvAI',
  },
];

export default function Lessons() {
  const t = useTranslations('HomePage.lessons');

  return (
    <section className="mt-18 max-w-xl m-auto px-4">
      <Table>
        <TableCaption>{t('caption')}</TableCaption>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead>{t('heading1')}</TableHead>
            <TableHead className="text-right">{t('heading2')}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {lessons
            .slice()
            .reverse()
            .map(lesson => (
              <TableRow key={lesson.id} className="hover:bg-transparent">
                <TableCell className="font-medium">{lesson.title}</TableCell>
                <TableCell className="text-right">
                  <a
                    href={lesson.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center"
                  >
                    <Link size="1.25em" />
                  </a>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </section>
  );
}

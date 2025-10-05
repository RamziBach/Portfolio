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
    title: 'HTML Crash Course',
    href: 'https://youtu.be/j5Oh3EawGkM',
  },
  {
    id: 2,
    title: '5 Exciting New CSS Features',
    href: 'https://youtu.be/zNXMkjp2Sv8',
  },
  {
    id: 3,
    title: 'Learn Flexbox CSS in 8 minutes',
    href: 'https://youtu.be/phWxA89Dy94',
  },
  {
    id: 4,
    title: 'Learn CSS Grid - A 13 Minute Deep Dive',
    href: 'https://youtu.be/EiNiSFIPIQE',
  },
  {
    id: 5,
    title: 'Learn CSS Animations In 20 Minutes',
    href: 'https://youtu.be/SgmNxE9lWcY',
  },
  {
    id: 6,
    title: 'Learn CSS Positions Quickly',
    href: 'https://youtu.be/MxEtxo_AaZ4',
  },
  {
    id: 7,
    title: 'A CSS Units Deep Dive',
    href: 'https://youtu.be/fzZTvLmmTzM',
  },
  {
    id: 8,
    title: 'Build Your Portfolio Website',
    href: 'https://youtu.be/dLDn_k8GmaU',
  },
  {
    id: 9,
    title: 'Master Media Queries',
    href: 'https://youtu.be/K24lUqcT0Ms',
  },
  {
    id: 10,
    title: 'Build An Easy Light/Dark Mode',
    href: 'https://youtu.be/Kxv7GIDK9tg',
  },
  {
    id: 11,
    title: 'CSS Full Course - Announcement Video',
    href: 'https://youtu.be/8COXmw996VU',
  },
  {
    id: 12,
    title: 'Learn CSS Box Model',
    href: 'https://youtu.be/nSst4-WbEZk',
  },
  {
    id: 13,
    title: 'Learn CSS Variables In 7 Minutes',
    href: 'https://youtu.be/5wLrz_zUwoU',
  },
  {
    id: 14,
    title: 'Learn CSS Subgrid in 14 minutes',
    href: 'https://youtu.be/Yl8hg2FG20Q',
  },
  {
    id: 15,
    title: 'CSS Only Infinite Scroll',
    href: 'https://youtu.be/Reu0hHbis5w',
  },
  {
    id: 16,
    title: '100 CSS Selectors Explained',
    href: 'https://youtu.be/CsfHrv73sPc',
  },
  {
    id: 17,
    title: 'Modals Made Easy In 15 Minutes',
    href: 'https://youtu.be/W9K9r0Z-8_c',
  },
  {
    id: 18,
    title: 'JavaScript Full Course Announcement',
    href: 'https://youtu.be/Dja2WGfdgWo',
  },
  {
    id: 19,
    title: 'Your CSS Journey Starts Here',
    href: 'https://youtu.be/kz-Mef-gf8o',
  },
  {
    id: 20,
    title: 'CSS Syntax Overview',
    href: 'https://youtu.be/5DnlQi8Dr5c',
  },
  {
    id: 21,
    title: 'Learn CSS Selectors In 5 Minutes',
    href: 'https://youtu.be/2rXVTnji5NA',
  },
  {
    id: 22,
    title: 'Combinator Selectors Explained',
    href: 'https://youtu.be/MxqAEiFXUrM',
  },
  {
    id: 23,
    title: 'WTF Is CSS Specificity',
    href: 'https://youtu.be/MISLJJjkSQ0',
  },
  {
    id: 24,
    title: 'CSS Inheritence Explained In 3 Minutes',
    href: 'https://youtu.be/HvwEWaBnor0',
  },
  {
    id: 25,
    title: 'Learn CSS Colors In 2 Minutes',
    href: 'https://youtu.be/LpImsI2pf2k',
  },
  {
    id: 26,
    title: 'Learn CSS Background Colors',
    href: 'https://youtu.be/VxGgwrUTI5s',
  },
  {
    id: 27,
    title: 'How To Add Custom Fonts In HTML',
    href: 'https://youtu.be/mtn0DkRaoHI',
  },
  {
    id: 28,
    title: 'Learn CSS Typography In 12 Minutes',
    href: 'https://youtu.be/Yi_xWwind1s',
  },
  {
    id: 29,
    title: 'Stop using Margins wrong!',
    href: 'https://youtu.be/yebtps3FLw0',
  },
  {
    id: 30,
    title: 'Learn CSS Padding In 5 Minutes',
    href: 'https://youtu.be/9kwJaYJEvAI',
  },
];

export default function Lessons() {
  return (
    <section className="mt-18 max-w-xl m-auto px-4">
      <Table>
        <TableCaption>My latest YouTube videos</TableCaption>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead>YouTube Videos</TableHead>
            <TableHead className="text-right">Link</TableHead>
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

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

const courses = [
  {
    id: 1,
    name: 'The CSS Full Course',
    href: 'https://www.slayingthedragon.io/dashboard/css/introduction',
  },
  {
    id: 2,
    name: 'The JavaScript Full Course',
    href: 'https://www.slayingthedragon.io/dashboard/js/javascript-is-everywhere',
  },
];

export default function Courses() {
  return (
    <section className="mt-18 max-w-xl m-auto px-4">
      <Table>
        <TableCaption>Courses I've created</TableCaption>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead>Courses</TableHead>
            <TableHead className="text-right">Link</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {courses.map(course => (
            <TableRow key={course.id} className="hover:bg-transparent">
              <TableCell className="font-medium">{course.name}</TableCell>
              <TableCell className="text-right">
                <a
                  href={course.href}
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

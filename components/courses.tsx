import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export default function Courses() {
  return (
    <section className="mt-18 max-w-xl m-auto px-4">
      <Table>
        <TableCaption>Courses I've created</TableCaption>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className="w-[100px]">Courses</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="cursor-pointer hover:bg-muted/50 transition-colors">
            <a
              href="https://www.slayingthedragon.io/dashboard/css/introduction"
              target="_blank"
              rel="noopener noreferrer"
              className="contents"
            >
              <TableCell className="font-medium">The CSS Full Course</TableCell>
              <TableCell className="text-right font-mono text-muted-foreground">
                Completed
              </TableCell>
            </a>
          </TableRow>
          <TableRow className="cursor-pointer hover:bg-muted/50 transition-colors">
            <a
              href="https://www.slayingthedragon.io/dashboard/js/javascript-is-everywhere"
              target="_blank"
              rel="noopener noreferrer"
              className="contents"
            >
              <TableCell className="font-medium">
                The JavaScript Full Course
              </TableCell>
              <TableCell className="text-right font-mono text-muted-foreground">
                Early access
              </TableCell>
            </a>
          </TableRow>
        </TableBody>
      </Table>
    </section>
  );
}

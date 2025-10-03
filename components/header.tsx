import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

import ModeToggle from '@/components/mode-toggle';

import { SiGithub } from '@icons-pack/react-simple-icons';
import { SiYoutube } from '@icons-pack/react-simple-icons';

export default function Header() {
  return (
    <header className="max-w-xl m-auto px-4">
      <nav className="flex justify-end items-center gap-1 mt-1">
        <Button variant="ghost" size="icon" asChild>
          <a
            href="https://github.com/RamziBach"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <SiGithub />
          </a>
        </Button>
        <div className="h-5">
          <Separator orientation="vertical" />
        </div>
        <Button variant="ghost" size="icon" asChild>
          <a
            href="https://youtube.com/@slayingthedragon"
            target="_blank"
            rel="noopener noreferrer"
            title="YouTube"
          >
            <SiYoutube />
          </a>
        </Button>
        <div className="h-5">
          <Separator orientation="vertical" />
        </div>
        <ModeToggle />
      </nav>
    </header>
  );
}

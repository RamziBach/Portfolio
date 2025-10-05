import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

import ModeToggle from '@/components/mode-toggle';

import { SiGithub, SiYoutube, SiCodepen } from '@icons-pack/react-simple-icons';

const socialLinks = [
  {
    id: 'github',
    href: 'https://github.com/RamziBach',
    title: 'GitHub',
    icon: SiGithub,
  },
  {
    id: 'codepen',
    href: 'https://codepen.io/ramzibach-the-styleful',
    title: 'CodePen',
    icon: SiCodepen,
  },
  {
    id: 'youtube',
    href: 'https://youtube.com/@slayingthedragon',
    title: 'YouTube',
    icon: SiYoutube,
  },
];

export default function Header() {
  return (
    <header className="max-w-xl m-auto px-4">
      <nav className="flex justify-end items-center gap-1 mt-1">
        {socialLinks.map((link, index) => (
          <div key={link.id} className="contents">
            <Button variant="ghost" size="icon" asChild>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                title={link.title}
              >
                <link.icon />
              </a>
            </Button>
            {index < socialLinks.length - 1 && (
              <div className="h-5">
                <Separator orientation="vertical" />
              </div>
            )}
          </div>
        ))}
        <div className="h-5">
          <Separator orientation="vertical" />
        </div>
        <ModeToggle />
      </nav>
    </header>
  );
}

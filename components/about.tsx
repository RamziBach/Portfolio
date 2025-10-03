import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function About() {
  return (
    <section className="mt-12 max-w-xl m-auto px-4 font-mono">
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Hi! I'm Ramzi, and I like to make software, videos, and courses.
      </p>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        I'm the creator of{' '}
        <HoverCard>
          <HoverCardTrigger className="underline decoration-wavy cursor-help">
            Slaying The Dragon
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="flex justify-between gap-4">
              <Avatar>
                <AvatarImage src="/std-small.png" />
                <AvatarFallback>STD</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <a
                  href="https://slayingthedragon.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold underline"
                >
                  slayingthedragon.io
                </a>
                <p className="text-sm">
                  A course platform built with NextJS, maintained by yours
                  truly.
                </p>
                <div className="text-muted-foreground text-xs">
                  Created May 2023
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
        ! Outside of that, I am a web developer, JavaScript evangelist, content
        creator, and youtuber. I enjoy video editing, sucking at blender,
        hanging out with my friends and family, and reading in my free time.
      </p>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        You should subscribe to my{' '}
        <a
          href="https://youtube.com/@slayingthedragon"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          YouTube channel
        </a>
        !
      </p>
    </section>
  );
}

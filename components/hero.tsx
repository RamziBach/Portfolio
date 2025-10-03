import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

import LiveClock from '@/components/live-clock';
import ClipboardBtn from '@/components/clipboard-btn';
import Pulse from '@/components/pulse';

import { Copy, Mail } from 'lucide-react';

export default function Hero() {
  const email = 'ramzibach.dev@gmail.com';

  return (
    <section className="max-w-xl m-auto px-4">
      <LiveClock className="text-muted-foreground text-xs leading-none font-mono text-center block mt-9 mb-9 xs:mb-10 xs:mt-5" />
      <div className="space-y-4 xs:space-y-5">
        <div>
          <Image
            src="/ramzi.jpg"
            alt="Ramzi Bach Profile Picture"
            className="rounded-full m-auto"
            width={110}
            height={110}
            quality={100}
            priority
          />
        </div>
        <div>
          <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight mb-1">
            Ramzi Bach 🐉
          </h1>
          <h2 className="scroll-m-20 text-center text-3xl font-semibold tracking-tight font-mono">
            Front-End Web Developer
          </h2>
        </div>
        <div>
          <div className="flex items-center justify-center gap-4">
            <Pulse />
            <p className="text-muted-foreground leading-none">
              Available for new opportunities
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-2 flex-wrap">
          <Badge>NextJS</Badge>
          <Badge>TypeScript</Badge>
          <Badge>TailwindCSS</Badge>
          <Badge>Neon Postgres</Badge>
          <Badge>Prisma</Badge>
          <Badge>ES6+</Badge>
        </div>
        <div className="flex justify-center items-center gap-4 xs:gap-5">
          <Button variant="outline" size="lg" asChild>
            <a
              href={`mailto:${email}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact me <Mail />
            </a>
          </Button>
          <p className="text-muted-foreground leading-none">or</p>
          <ClipboardBtn
            stringToCopy={email}
            message="Email copied!"
            label="Close"
            size="lg"
          >
            Copy email <Copy />
          </ClipboardBtn>
        </div>
        <p className="text-muted-foreground text-center text-xs leading-none font-mono">
          in Montreal, Canada 🍁
        </p>
      </div>
    </section>
  );
}

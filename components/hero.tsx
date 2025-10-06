import Image from 'next/image';

import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

import LiveClock from '@/components/live-clock';
import ClipboardBtn from '@/components/clipboard-btn';
import Pulse from '@/components/pulse';

import { Copy, Mail } from 'lucide-react';

export default function Hero() {
  const t = useTranslations('HomePage.hero');
  const email = 'hello@ramzibach.dev';

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
            priority
          />
        </div>
        <div>
          <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight mb-1">
            {t('title')}
          </h1>
          <h2 className="scroll-m-20 text-center text-3xl font-semibold tracking-tight font-mono">
            {t('subtitle')}
          </h2>
        </div>
        <div>
          <div className="flex items-center justify-center gap-3 xs:gap-4">
            <Pulse />
            <p className="text-muted-foreground leading-none text-sm xs:text-base">
              {t('availability')}
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-2 flex-wrap">
          <Badge>NextJS</Badge>
          <Badge>TypeScript</Badge>
          <Badge>TailwindCSS</Badge>
          <Badge>Neon Postgres</Badge>
          <Badge>Prisma</Badge>
          <Badge>ES2015+</Badge>
        </div>
        <div className="flex justify-center items-center gap-4 xs:gap-5">
          <Button variant="outline" size="lg" asChild>
            <a
              href={`mailto:${email}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('contactButton')} <Mail />
            </a>
          </Button>
          <p className="text-muted-foreground leading-none">{t('or')}</p>
          <ClipboardBtn
            stringToCopy={email}
            message={t('copyMessage')}
            label={t('closeLabel')}
            size="lg"
          >
            {t('copyButton')} <Copy />
          </ClipboardBtn>
        </div>
        <p className="text-muted-foreground text-center text-xs leading-none font-mono">
          {t('location')}
        </p>
      </div>
    </section>
  );
}

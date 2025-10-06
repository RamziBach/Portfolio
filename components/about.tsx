import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('HomePage.about');

  return (
    <section className="mt-12 max-w-xl m-auto px-4 font-mono">
      <p className="leading-7 [&:not(:first-child)]:mt-6">{t('paragraph1')}</p>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {t.rich('paragraph2', {
          slayingTheDragon: chunks => (
            <HoverCard>
              <HoverCardTrigger className="underline decoration-wavy cursor-help">
                {chunks}
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
                    <p className="text-sm">{t('hoverCard.description')}</p>
                    <div className="text-muted-foreground text-xs">
                      {t('hoverCard.created')}
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          ),
        })}
      </p>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {t.rich('paragraph3', {
          youtubeChannel: chunks => (
            <a
              href="https://youtube.com/@slayingthedragon"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              {chunks}
            </a>
          ),
        })}
      </p>
    </section>
  );
}

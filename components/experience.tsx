import { Badge } from '@/components/ui/badge';

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { ArrowUpRight } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';

const workExperiences = [
  {
    id: 1,
    company: 'Slaying The Dragon',
    link: 'https://slayingthedragon.io',
    technologies: [
      'NextJS',
      'Next-Auth',
      'ReactJS',
      'TypeScript',
      'CSS Modules',
      'Neon Postgres',
      'Mux',
      'Stripe',
      'Vercel',
      'React-hook-form',
      'React-email',
      'Zustand',
      'Yup',
      'Postmark',
      'AWS S3',
    ],
  },
  {
    id: 2,
    company: 'Rally',
    link: 'https://wiki.rally.io/rally-io',
    technologies: [
      'Rally.io API',
      'NextJS',
      'ReactJS',
      'JavaScript',
      'Axios',
      'CSS Modules',
    ],
  },
  {
    id: 3,
    company: 'PlatformPro',
    link: '',
    technologies: ['ReactJS', 'JavaScript', 'CSS Modules'],
  },
];

export default function Experience() {
  const t = useTranslations('HomePage.experience');
  const locale = useLocale();

  const getResumeUrl = () => {
    return locale === 'fr'
      ? '/Ramzi_Bach_fr_publique.pdf'
      : '/Ramzi_Bach_en_public.pdf';
  };

  const getExperienceKey = (id: number) => {
    switch (id) {
      case 1:
        return 'slayingTheDragon';
      case 2:
        return 'rally';
      case 3:
        return 'platformPro';
      default:
        return 'slayingTheDragon';
    }
  };

  return (
    <section className="mt-18 max-w-xl m-auto px-4 space-y-12">
      {workExperiences.map(experience => {
        const experienceKey = getExperienceKey(experience.id);
        return (
          <Tabs defaultValue="details" key={experience.id}>
            <TabsList>
              <TabsTrigger value="details">{t('tab1')}</TabsTrigger>
              <TabsTrigger value="testimonial">{t('tab2')}</TabsTrigger>
            </TabsList>
            <TabsContent value="details">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    {experience.link ? (
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <CardTitle className="text-base xs:text-lg font-medium tracking-tight">
                            <a
                              href={experience.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline inline-flex items-center gap-1"
                            >
                              {experience.company}{' '}
                              <ArrowUpRight size="1.25em" />
                            </a>
                          </CardTitle>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{experience.link}</p>
                        </TooltipContent>
                      </Tooltip>
                    ) : (
                      <CardTitle className="text-base xs:text-lg font-medium tracking-tight cursor-default">
                        {experience.company}
                      </CardTitle>
                    )}
                    <p className="font-mono tracking-tighter xs:tracking-normal text-xs xs:text-sm text-muted-foreground">
                      {t(`${experienceKey}.details.period`)}
                    </p>
                  </div>
                  <CardDescription className="text-xs xs:text-sm font-mono text-muted-foreground font-medium">
                    {t(`${experienceKey}.details.position`)}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="leading-7 font-mono text-sm">
                    {experienceKey === 'rally'
                      ? t.rich(`${experienceKey}.details.description`, {
                          waxMotif: chunks => (
                            <a
                              href="https://wax-motif.vercel.app/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="underline"
                            >
                              {chunks}
                            </a>
                          ),
                          drazeForce: chunks => (
                            <a
                              href="https://drazeforce-next11.vercel.app/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="underline"
                            >
                              {chunks}
                            </a>
                          ),
                        })
                      : t(`${experienceKey}.details.description`)}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map(
                      (tech: string, index: number) => (
                        <Badge key={index}>{tech}</Badge>
                      )
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="testimonial">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    {experience.link ? (
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <CardTitle className="text-base xs:text-lg font-medium tracking-tight">
                            <a
                              href={experience.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline inline-flex items-center gap-1"
                            >
                              {experience.company}{' '}
                              <ArrowUpRight size="1.25em" />
                            </a>
                          </CardTitle>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{experience.link}</p>
                        </TooltipContent>
                      </Tooltip>
                    ) : (
                      <CardTitle className="text-base xs:text-lg font-medium tracking-tight cursor-default">
                        {experience.company}
                      </CardTitle>
                    )}
                    <p className="font-mono tracking-tighter xs:tracking-normal text-xs xs:text-sm text-muted-foreground">
                      {t(`${experienceKey}.details.period`)}
                    </p>
                  </div>
                  <CardDescription className="text-xs xs:text-sm font-mono text-muted-foreground font-medium">
                    {t(`${experienceKey}.details.position`)}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <blockquote className="text-sm italic leading-7 font-mono border-l-2 pl-6">
                    "{t(`${experienceKey}.testimonial.quote`)}"
                  </blockquote>
                  <p className="text-sm text-muted-foreground mt-4">
                    - {t(`${experienceKey}.testimonial.author`)}
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        );
      })}
      <div className="text-center">
        <a
          href={getResumeUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium hover:underline inline-flex items-center gap-1"
        >
          {t('resumeCTA')} <ArrowUpRight size="1.25em" />
        </a>
      </div>
    </section>
  );
}

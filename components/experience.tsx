import { Badge } from '@/components/ui/badge';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import { ArrowUpRight } from 'lucide-react';

const workExpereriences = [
  {
    id: 1,
    company: 'Slaying The Dragon',
    link: 'https://slayingthedragon.io',
    period: 'May 2023 - Present',
    position: 'Lead Developer',
    description:
      'Build, style, and maintain a production-grade educational platform. Designed and architected both the frontend and backend, implemented secure authentication, integrated streaming video, and handled payments. Developed modular components for a responsive and performant user experience.',
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
      'CSS Modules',
    ],
  },
  {
    id: 2,
    company: 'Rally',
    link: 'https://wiki.rally.io/rally-io',
    period: 'Apr 2021 - Feb 2022',
    position: 'Frontend Developer',
    description: (
      <>
        Designed and deployed high-quality websites for Rally platform users,
        including content creators{' '}
        <a
          href="https://wax-motif.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Wax Motif
        </a>{' '}
        and{' '}
        <a
          href="https://drazeforce-next11.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Draze Force
        </a>
        . Delivered responsive, accessible web experiences that elevated their
        brand presence while integrating Rally's social token API.
      </>
    ),
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
    period: 'Jul 2020 - Apr 2021',
    position: 'Frontend Developer',
    description:
      "Developed high-converting marketing landing pages to support product launches and user acquisition campaigns. Translated marketing requirements into responsive, conversion-optimized pages that effectively communicated the platform's value proposition.",
    technologies: ['ReactJS', 'JavaScript', 'CSS Modules'],
  },
];

export default function Experience() {
  return (
    <section className="mt-18 max-w-xl m-auto px-4 space-y-12">
      {workExpereriences.map(experience => (
        <div key={experience.id}>
          <div className="flex justify-between items-center">
            {experience.link ? (
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={experience.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base xs:text-lg font-medium tracking-tight"
                  >
                    {experience.company} <ArrowUpRight className="inline" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{experience.link}</p>
                </TooltipContent>
              </Tooltip>
            ) : (
              <h3 className="text-base xs:text-lg font-medium tracking-tight cursor-default">
                {experience.company}
              </h3>
            )}
            <p className="font-mono tracking-tighter xs:tracking-normal text-xs xs:text-sm text-muted-foreground">
              {experience.period}
            </p>
          </div>
          <h3 className="text-sm font-mono text-muted-foreground font-medium">
            {experience.position}
          </h3>
          <p className="leading-7 font-mono mt-6">{experience.description}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {experience.technologies.map((tech, index) => (
              <Badge key={index}>{tech}</Badge>
            ))}
          </div>
        </div>
      ))}
      <a href="#" className="font-medium">
        View public résumé <ArrowUpRight className="inline" />
      </a>
    </section>
  );
}

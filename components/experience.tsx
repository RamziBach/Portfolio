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

const workExperiences = [
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
    ],
    testimonial:
      'SlayingTheDragon is an amazing teacher and a great person. His style is clear and direct, without any fluff, making lessons easy to follow. He uses solid explanations and code examples that really fit the concepts. Even the basics are presented with a depth I have not seen in other JavaScript courses. I honestly think even experienced developers can pick up valuable insights from his course.',
    testimonialAuthor: 'Rexate, Student',
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
    testimonial:
      "The care, dedication, and attention to detail is greatly appreciated. I was blown away with Ramzi's work.",
    testimonialAuthor: 'Draze Force, Client',
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
    testimonial:
      "Ramzi is a LEGEND. I am grateful for the opportunities I've had to collaborate with him on various projects. His communication is excellent. He was passionate about the work being done, and was never afraid to tackle a new idea or challenge. You wont be disappointed if you choose to work with Ramzi.",
    testimonialAuthor: 'Alex Phelps, Founder',
  },
];

export default function Experience() {
  return (
    <section className="mt-18 max-w-xl m-auto px-4 space-y-12">
      {workExperiences.map(experience => (
        <Tabs defaultValue="details" key={experience.id}>
          <TabsList>
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="testimonial">Testimonial</TabsTrigger>
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
                            {experience.company} <ArrowUpRight />
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
                    {experience.period}
                  </p>
                </div>
                <CardDescription className="text-sm font-mono text-muted-foreground font-medium">
                  {experience.position}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="leading-7 font-mono text-sm">
                  {experience.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map(
                    (tech: string, index: number) => (
                      <Badge key={index} variant="secondary">
                        {tech}
                      </Badge>
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
                            {experience.company} <ArrowUpRight />
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
                    {experience.period}
                  </p>
                </div>
                <CardDescription className="text-sm font-mono text-muted-foreground font-medium">
                  {experience.position}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <blockquote className="text-sm italic leading-7 font-mono border-l-2 pl-6">
                  "{experience.testimonial}"
                </blockquote>
                <p className="text-sm text-muted-foreground mt-4">
                  - {experience.testimonialAuthor}
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      ))}
      <div className="text-center">
        <a
          href="#"
          className="font-medium hover:underline inline-flex items-center gap-1"
        >
          View public résumé <ArrowUpRight />
        </a>
      </div>
    </section>
  );
}

'use client';

import { useTransition, useEffect } from 'react';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useTopLoader } from 'nextjs-toploader';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
];

export default function LanguageSwitcher() {
  const [isPending, startTransition] = useTransition();
  const currentLocale = useLocale();
  const router = useRouter();
  const topLoader = useTopLoader();

  useEffect(() => {
    if (!isPending) {
      topLoader.done();
    }
  }, [isPending, topLoader]);

  const handleLanguageChange = (locale: string) => {
    topLoader.start();

    startTransition(() => {
      document.cookie = `locale=${locale}; path=/; max-age=${
        365 * 24 * 60 * 60
      }`;

      router.refresh();
    });
  };
  const currentLanguage =
    languages.find(lang => lang.code === currentLocale) || languages[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" disabled={isPending}>
          <span className="text-sm">{currentLanguage.flag}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map(language => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => {
              if (language.code !== currentLocale) {
                handleLanguageChange(language.code);
              }
            }}
            disabled={language.code === currentLocale}
            className={`${
              language.code === currentLocale
                ? 'bg-accent cursor-default opacity-50'
                : 'cursor-pointer'
            }`}
          >
            <span className="mr-2">{language.flag}</span>
            {language.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

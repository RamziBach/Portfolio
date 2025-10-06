import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('HomePage.footer');

  return (
    <footer className="mt-18 max-w-xl m-auto px-4">
      <p className="leading-5 font-mono text-xs text-muted-foreground">
        {t.rich('description', {
          year: new Date().getFullYear(),
          vscode: chunks => (
            <a
              href="https://code.visualstudio.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-foreground"
            >
              {chunks}
            </a>
          ),
          nextjs: chunks => (
            <a
              href="https://nextjs.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-foreground"
            >
              {chunks}
            </a>
          ),
          tailwind: chunks => (
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-foreground"
            >
              {chunks}
            </a>
          ),
          shadcn: chunks => (
            <a
              href="https://ui.shadcn.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-foreground"
            >
              {chunks}
            </a>
          ),
          vercel: chunks => (
            <a
              href="https://vercel.com/home"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-foreground"
            >
              {chunks}
            </a>
          ),
          geist: chunks => (
            <a
              href="https://vercel.com/font"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-foreground"
            >
              {chunks}
            </a>
          ),
        })}
      </p>
    </footer>
  );
}

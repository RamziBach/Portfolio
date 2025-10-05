export default function Footer() {
  return (
    <footer className="mt-18 max-w-xl m-auto px-4">
      <p className="leading-5 font-mono text-xs text-muted-foreground">
        Loosely designed in my imagination and coded in{' '}
        <a
          href="https://code.visualstudio.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-foreground"
        >
          Visual Studio Code
        </a>{' '}
        by yours truly. Built with{' '}
        <a
          href="https://nextjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-foreground"
        >
          NextJS
        </a>
        ,{' '}
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-foreground"
        >
          TailwindCSS
        </a>{' '}
        and{' '}
        <a
          href="https://ui.shadcn.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-foreground"
        >
          shadcn
        </a>
        , deployed with{' '}
        <a
          href="https://vercel.com/home"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-foreground"
        >
          Vercel
        </a>
        . All text is set in the{' '}
        <a
          href="https://vercel.com/font"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-foreground"
        >
          Geist
        </a>{' '}
        typeface. Copyrights © {new Date().getFullYear()} Ramzi Bach.{' '}
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-foreground"
        >
          This site is open source
        </a>
        ! {'<3'}
      </p>
    </footer>
  );
}

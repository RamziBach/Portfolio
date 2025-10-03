import ModeToggle from '@/components/mode-toggle';

export default function Header() {
  return (
    <header className="max-w-xl m-auto px-4">
      <div className="flex justify-end mt-1">
        <ModeToggle />
      </div>
    </header>
  );
}

'use client';

import { toast } from 'sonner';
import { Button } from '@/components/ui/button';

type Props = {
  stringToCopy: string;
  message: string;
  label: string;
  variant?: 'default' | 'outline' | 'ghost' | 'link' | 'destructive';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  children: React.ReactNode;
};

export default function ClipboardBtn({
  stringToCopy,
  message,
  label,
  variant,
  size,
  children,
}: Props) {
  async function copyToClipboard() {
    try {
      await navigator.clipboard.writeText(stringToCopy);
      toast(message, {
        description: stringToCopy,
        descriptionClassName: '!text-secondary-foreground',
        action: {
          label,
          onClick: () => console.log(label),
        },
      });
    } catch (err) {
      console.error('Action failed:', err);
      toast.error('Action failed.', {
        description: 'Please try again.',
      });
    }
  }

  return (
    <Button variant={variant} size={size} onClick={copyToClipboard}>
      {children}
    </Button>
  );
}

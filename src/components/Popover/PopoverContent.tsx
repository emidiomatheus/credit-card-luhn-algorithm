import * as PopoverRadix from '@radix-ui/react-popover';
import { PopoverContentProps } from '@radix-ui/react-popover';
import { PopoverArrow } from './PopoverArrow';

interface PopoverContent extends PopoverContentProps {
  children: React.ReactNode;
}

export function PopoverContent({ children, ...props }: PopoverContent) {
  return (
    <PopoverRadix.Portal>
      <PopoverRadix.Content {...props} className="bg-zinc-800 p-4 rounded border border-zinc-700 text-sm leading-tighter max-w-xs outline-none">
        {children}
        <PopoverArrow />
      </PopoverRadix.Content>
    </PopoverRadix.Portal>
  )
}

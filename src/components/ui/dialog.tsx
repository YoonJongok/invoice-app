import React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';

export interface DialogProps extends React.ComponentProps<typeof DialogPrimitive.Root> {
  children: React.ReactNode;
}

export const DialogContent = React.forwardRef<HTMLDivElement, DialogProps>(
  ({ children, ...props }, forwardedRef) => (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay />
      <DialogPrimitive.Content {...props} ref={forwardedRef}>
        {children}
        <DialogPrimitive.Close aria-label='Close'>{/* <Cross1Icon /> */}</DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  )
);

DialogContent.displayName = 'DialogContent';

export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;


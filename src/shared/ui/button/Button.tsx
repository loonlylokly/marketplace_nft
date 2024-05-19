import { Slot, Slottable } from '@radix-ui/react-slot';
import { forwardRef } from 'react';

import { TButton } from '@/shared/types/ui';

import style from './Button.module.css';

export const Button = forwardRef<HTMLButtonElement, TButton>(
  (
    {
      asChild = false,
      appearance = 'primary',
      size = 'lg',
      leftElement = '',
      rightElement = '',
      className = '',
      children,
      ...rest
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        {...rest}
        ref={ref}
        className={`${style.button} ${style[appearance]} ${style[size]} ${className}`}
      >
        {leftElement}
        <Slottable>{children}</Slottable>
        {rightElement}
      </Comp>
    );
  }
);

Button.displayName = 'Button';

import { Slot, Slottable } from '@radix-ui/react-slot';
import { HTMLAttributes } from 'react';

import style from './Typography.module.css';

type TProps = {
  asChild?: boolean;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'base' | 'caption' | 'body';
  font?: 'work_sans' | 'space_mono';
  children?: React.ReactNode;
} & HTMLAttributes<HTMLElement>;

export const Typography = ({
  asChild = false,
  variant = 'base',
  font = 'work_sans',
  className = '',
  children,
  ...rest
}: TProps) => {
  const Comp = asChild ? Slot : 'p';
  return (
    <Comp
      {...rest}
      className={`${style.text} ${style[variant]} ${style[font]} ${className}`}
    >
      <Slottable>{children}</Slottable>
    </Comp>
  );
};

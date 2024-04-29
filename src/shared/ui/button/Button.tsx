import { Slot, Slottable } from '@radix-ui/react-slot';

type TProps = {
  asChild?: boolean;
  leftElement?: React.ReactNode;
  rightElement?: React.ReactNode;
  children: React.ReactNode;
};

export const Button = ({
  asChild,
  leftElement,
  rightElement,
  children,
  ...props
}: TProps) => {
  const Comp = asChild ? Slot : 'button';
  return (
    <Comp {...props}>
      {leftElement}
      <Slottable>{children}</Slottable>
      {rightElement}
    </Comp>
  );
};

Button.defaultProps = {
  asChild: false,
  leftElement: '',
  rightElement: '',
};

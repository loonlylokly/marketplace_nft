export type TInputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export type TButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export type TInput = {
  label?: string;
  message?: string;
  styleField?: string;
  children?: React.ReactNode;
} & TInputProps;

export type TInputText = {
  label?: string;
  message?: string;
  styleField?: string;
} & TInputProps;

export type TTextAreaProps = {
  label?: string;
  message?: string;
} & React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

export type TButton = {
  asChild?: boolean;
  appearance?: 'primary' | 'secondary' | 'tertiary' | 'text';
  size?: 'sm' | 'md' | 'lg';
  leftElement?: React.ReactNode;
  rightElement?: React.ReactNode;
  children?: React.ReactNode;
} & TButtonProps;

import { Control, Field, Label, Message } from '@radix-ui/react-form';
import { forwardRef } from 'react';

import { TInput, TInputText, TTextAreaProps } from '@/shared/types/ui';

import style from './InputText.module.css';

export const Input = ({
  label = '',
  message = '',
  styleField = '',
  children = <input type="text" />,
  ...rest
}: TInput) => (
  <Field className={`${style.field} ${styleField}`} name={rest.name || ''}>
    {label && <Label className={style.label}>{label}</Label>}
    <Control asChild>{children}</Control>
    {message && <Message className={style.message}>{message}</Message>}
  </Field>
);

export const InputText = forwardRef<HTMLInputElement, TInputText>(
  ({ label = '', message = '', styleField = '', ...rest }, ref) => (
    <Input label={label} message={message} styleField={styleField}>
      <input
        type="text"
        {...rest}
        className={`${style.input} ${message && style.error} ${rest.className}`}
        ref={ref}
      />
    </Input>
  )
);

InputText.displayName = 'InputText';

export const TextArea = forwardRef<HTMLTextAreaElement, TTextAreaProps>(
  ({ label = '', message = '', ...rest }, ref) => (
    <Input label={label} message={message}>
      <textarea
        {...rest}
        className={`${style.input} ${message && style.error} ${rest.className}`}
        ref={ref}
      />
    </Input>
  )
);

TextArea.displayName = 'TextArea';

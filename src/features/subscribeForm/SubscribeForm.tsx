'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '@radix-ui/react-form';
import { SubmitHandler, useForm } from 'react-hook-form';

import { TEmail } from '@/shared/types/common';
import { SEmail } from '@/shared/types/schemas/common';
import { Button } from '@/shared/ui/button/Button';
import { EmailIcon } from '@/shared/ui/icons/EmailIcon';
import { InputText } from '@/shared/ui/input/InputText';

import style from './SubscribeForm.module.css';

type TProps = {
  submitLabel: string;
};

export const SubscribeForm = ({ submitLabel }: TProps) => {
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm<TEmail>({
    mode: 'onSubmit',
    resolver: zodResolver(SEmail),
  });

  const onSubmit: SubmitHandler<TEmail> = async (data) => {
    try {
      // await updateDealFields(dealId, userId, companyId, data);
      console.log(data);
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form className={style.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={style.wrapper}>
        <InputText
          styleField={style.email}
          type="email"
          placeholder="Enter your email here"
          {...register('email')}
        />
        <Button className={style.btn} size="sm" leftElement={<EmailIcon />}>
          {submitLabel}
        </Button>
      </div>
    </Form>
  );
};

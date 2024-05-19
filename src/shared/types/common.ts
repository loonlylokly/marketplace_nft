import { z } from 'zod';

import { locales } from '@/shared/lib/constants/common';

import { SAuthor, SEmail, SImg } from './schemas/common';

export type TLocales = (typeof locales)[number];

export type TImg = z.infer<typeof SImg>;
export type TAuthor = z.infer<typeof SAuthor>;
export type TEmail = z.infer<typeof SEmail>;

export type TCategoryName = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8';

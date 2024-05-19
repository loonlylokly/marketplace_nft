import { z } from 'zod';

export const SImg = z.object({
  src: z.string(),
  alt: z.string().optional(),
});

export const SAuthor = z.object({
  name: z.string(),
  linkProfile: z.string(),
  img: SImg,
});

export const SEmail = z.object({
  email: z.string().email(),
});

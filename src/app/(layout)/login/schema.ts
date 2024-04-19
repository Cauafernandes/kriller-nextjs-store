import * as zod from 'zod';

export const schema = zod.object({
  email: zod
    .string()
    .min(1, 'Por favor, informe um e-mail válido.')
    .refine((data) => {
      return !data.includes(' ');
    }, 'Por favor, informe um e-mail válido.'),
  password: zod.string().min(1, 'Por favor, informe a senha.'),
});

export type schemaData = zod.infer<typeof schema>;

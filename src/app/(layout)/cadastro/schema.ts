import { format, subYears } from 'date-fns';
import * as zod from 'zod';

const today = new Date();
const eighteenYearsAgo = subYears(today, 18);

export const schema = zod.object({
  firstName: zod.string().min(3, 'Minimo de 3 caracteres.'),
  lastName: zod.string().min(3, 'Minimo de 3 caracteres.'),
  document: zod
    .string()
    .min(1, 'Esse campo é obrigatório o preenchimento')
    .max(18, 'CPF ou CNPJ inválido')
    .refine((val) => ({
      message: `${val} não é um CPF ou CNPJ válido.`,
    })),
  phone: zod
    .string()
    .min(13, 'Por favor, informe um número válido.')
    .max(15, 'Por favor, informe ao máximo 11 caracteres.'),
  birthDate: zod.date()
    .max(eighteenYearsAgo, `You must be at least 18 years old to register.`),
  email: zod
    .string()
    .email('Por favor, informe um e-mail válido.')
    .refine((data) => {
      return !data.includes(' ');
    }, 'Por favor, informe um e-mail válido.'),
  password: zod.string().min(6, 'Por favor, informe a senha.'),
});

export type schemaData = zod.infer<typeof schema>;

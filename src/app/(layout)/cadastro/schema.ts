import * as zod from 'zod';

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
  birthDate: zod
    .string()
    .refine((data) => {
      const [day, month, year] = data.split('/');
      const formattedDate = `${year}-${month}-${day}`;
      const birthDate = new Date(formattedDate);
      const idade = new Date().getFullYear() - birthDate.getFullYear();

      return idade >= 19;
    }, 'O usuário deve ter mais que 18 anos')
    .refine((data) => {
      const [day, month, year] = data.split('/');
      const formattedDate = `${year}-${month}-${day}`;
      const birthDate = new Date(formattedDate);
      const idade = new Date().getFullYear() - birthDate.getFullYear();

      return idade <= 120;
    }, 'O usuário deve ter menos que 120 anos'),
  email: zod
    .string()
    .email('Por favor, informe um e-mail válido.')
    .refine((data) => {
      return !data.includes(' ');
    }, 'Por favor, informe um e-mail válido.'),
  password: zod.string().min(6, 'Por favor, informe a senha.'),
});

export type schemaData = zod.infer<typeof schema>;

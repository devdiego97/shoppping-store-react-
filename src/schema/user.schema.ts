import j from "joi";

export const userSchema = j.object({
  name: j.string().min(3).max(30).required().messages({
    "string.empty": "O nome é obrigatório",
    "string.min": "O nome deve ter pelo menos 3 caracteres",
    "string.max": "O nome não pode ter mais de 30 caracteres",
  }),
  email: j.string().email({ tlds: { allow: false } }).required().messages({
    "string.empty": "O e-mail é obrigatório",
    "string.email": "E-mail inválido",
  }),
  tel: j.string()
    .pattern(/^\d{10,11}$/)
    .required()
    .messages({
      "string.empty": "O telefone é obrigatório",
      "string.pattern.base": "O telefone deve conter 10 ou 11 dígitos",
    }),
  password: j.string().min(6).required().messages({
    "string.empty": "A senha é obrigatória",
    "string.min": "A senha deve ter pelo menos 6 caracteres",
  }),
});


export const userSchemaLogin = j.object({
  email: j.string().email({ tlds: { allow: false } }).required().messages({
    "string.empty": "O e-mail é obrigatório",
    "string.email": "E-mail inválido",
  }),
  password: j.string().min(6).required().messages({
    "string.empty": "A senha é obrigatória",
    "string.min": "A senha deve ter pelo menos 6 caracteres",
  }),
});

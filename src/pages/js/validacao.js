export function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

export function formatarCPF(cpf) {
  // 1. Remove tudo que não for dígito
  const digitos = cpf.replace(/\D/g, "");

  // 2. Limita a 11 dígitos (tamanho máximo do CPF)
  const digitosLimitados = digitos.slice(0, 11);

  // 3. Aplica a máscara progressivamente
  let valorFormatado = digitosLimitados;

  // Adiciona o primeiro ponto (após 3 dígitos)
  valorFormatado = valorFormatado.replace(/(\d{3})(\d)/, "$1.$2");
  // Adiciona o segundo ponto (após 6 dígitos)
  valorFormatado = valorFormatado.replace(/(\d{3})\.(\d{3})(\d)/, "$1.$2.$3");
  // Adiciona o traço (após 9 dígitos)
  valorFormatado = valorFormatado.replace(
    /(\d{3})\.(\d{3})\.(\d{3})(\d{1,2})/,
    "$1.$2.$3-$4"
  );

  return valorFormatado;
}

export function validarCPF(cpf) {
  const cpfLimpo = cpf.replace(/\D/g, "");

  if (cpfLimpo.length !== 11 || /^(\d)\1+$/.test(cpfLimpo)) {
    return false;
  }

  let soma = 0;
  let resto;

  for (let i = 1; i <= 9; i++) {
    soma += parseInt(cpfLimpo.substring(i - 1, i)) * (11 - i);
  }
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpfLimpo.substring(9, 10))) return false;

  soma = 0;
  for (let i = 1; i <= 10; i++) {
    soma += parseInt(cpfLimpo.substring(i - 1, i)) * (12 - i);
  }
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpfLimpo.substring(10, 11))) return false;

  return true;
}

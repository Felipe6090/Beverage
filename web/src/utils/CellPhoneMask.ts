export default function CellphoneMask(value: String) {
  return value
    .replace(/\D/g, "") // substitui qualquer caracter que nao seja numero por nada
    .replace(/(\d{2})/, "(" + "$1" + ") ") // captura o dd
    .replace(/(\d{5})(\d)/, "$1 - $2"); // formata o resto do número
}

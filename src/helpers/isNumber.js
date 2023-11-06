export function isNumber(valor) {
  return !isNaN(parseFloat(valor)) && isFinite(valor)
}
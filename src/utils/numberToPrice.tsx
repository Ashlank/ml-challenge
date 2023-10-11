export default function numberToPrice(number: number, currency: string) {
  return number.toLocaleString('es-ES', { style: 'currency', currency: currency});
}

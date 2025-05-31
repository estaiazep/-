export type Currency = "USD" | "UZS"

// Примерный курс: 1 USD = 12,000 UZS
export const USD_TO_UZS_RATE = 12000

export function convertCurrency(amount: number, fromCurrency: Currency, toCurrency: Currency): number {
  if (fromCurrency === toCurrency) return amount

  if (fromCurrency === "USD" && toCurrency === "UZS") {
    return amount * USD_TO_UZS_RATE
  }

  if (fromCurrency === "UZS" && toCurrency === "USD") {
    return amount / USD_TO_UZS_RATE
  }

  return amount
}

export function formatCurrency(amount: number, currency: Currency): string {
  if (currency === "USD") {
    return `$${amount.toLocaleString()}`
  } else {
    return `${Math.round(amount).toLocaleString()} сум`
  }
}

export function getCurrencySymbol(currency: Currency): string {
  return currency === "USD" ? "$" : "сум"
}

export function getMinimumInvestment(currency: Currency): number {
  return currency === "USD" ? 60 : convertCurrency(60, "USD", "UZS")
}

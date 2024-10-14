export const formatCurrency = (value) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value)
}

export const formatToBRL = (value) => {
  let numericValue = value.replace(/\D/g, "")

  if (!numericValue) return ""

  numericValue = (numericValue / 100).toFixed(2).replace(".", ",")

  return numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}

export function formatPhoneNumber(value) {
  if (!value) return ""

  const cleaned = value.replace(/\D/g, "")

  if (cleaned.length <= 2) {
    return `(${cleaned}`
  } else if (cleaned.length <= 7) {
    return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2)}`
  } else if (cleaned.length <= 11) {
    return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(7)}`
  } else {
    return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(
      7,
      11
    )}`
  }
}

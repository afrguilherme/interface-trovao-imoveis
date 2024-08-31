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

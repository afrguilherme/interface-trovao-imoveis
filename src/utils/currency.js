export const formatCurrency = (value) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value)
}

export const formatInputCurrency = (value) => {
  value = value.replace(/\D/g, "")

  value = (value / 100).toFixed(2)

  value = value.replace(".", ",")

  value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ".")

  return "R$ " + value
}

export const formatDate = (dateString) => {
  const options = { day: "2-digit", month: "2-digit", year: "2-digit" }
  return new Intl.DateTimeFormat("pt-BR", options).format(new Date(dateString))
}

export const formatTime = (dateString) => {
  const options = { hour: "2-digit", minute: "2-digit" }
  return new Intl.DateTimeFormat("pt-BR", options).format(new Date(dateString))
}

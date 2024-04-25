export const getFormattedDate = (date: number) => {
  const options: Intl.DateTimeFormatOptions = {
    month: 'long',
    day: 'numeric',
    weekday: 'long',
  }
  return new Date(date).toLocaleDateString(undefined, options)
}

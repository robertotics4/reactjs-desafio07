export const formatDate = (date: Date): string =>
  Intl.DateTimeFormat('pt-br').format(new Date(date));

export default formatDate;

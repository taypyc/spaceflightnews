const getTime = (publishedAt: string): string => {
  let date = new Date(publishedAt);

  let hours = date.getHours();
  let minutes = date.getMinutes();

  let month = date.toLocaleString('en-US', { month: '2-digit' });
  let day = date.getDate();
  let year = date.getFullYear();

  return `${hours}:${minutes} ${day}.${month}.${year}`;
};

export default getTime;

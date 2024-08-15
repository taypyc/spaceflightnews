const getPublishedDate = (published: string): string => {
  let date = new Date(published);
  let month = date.toLocaleString('en-US', { month: 'long' });
  let day = date.getDate();
  let year = date.getFullYear();

  const nth = function (day: number): string {
    if (day > 3 && day < 21) return 'th';
    switch (day % 10) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  };

  let publishedDate: string =
    `${month}` + ' ' + day + nth(day) + ' ' + `${year}`;

  return publishedDate;
};

export default getPublishedDate;

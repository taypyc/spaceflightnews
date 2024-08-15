export interface iArticleProps {
  id: 0;
  featured: false;
  title: 'string';
  url: 'string';
  imageUrl: 'string';
  newsSite: 'string';
  summary: 'string';
  publishedAt: 'string';
  launches: [
    {
      id: 'string';
      provider: 'string';
    },
  ];
  events: [
    {
      id: 'string';
      provider: 'string';
    },
  ];
}

export interface useAxiosGetProps {
  state: iArticleProps[];
  isLoading: boolean;
  error?: boolean;
  setLimit: any;
  limit: number;
}

export interface iPublishedDate {
  publishedDate: string;
  published: string;
}

export interface iCardProps {
  id: number;
  body: string;
  title: string;
  image: string;
  publishedAt: string;
}

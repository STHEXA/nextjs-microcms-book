export type Category = {
  name: string;
};

export type News = {
  id: string;
  title: string;
  category: {
    name: string;
  };
  published: string;
  createdAt: string;
};

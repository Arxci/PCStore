export type SiteHeaderType = {
  id: number;
  label: string;
  description?: string;
  href: string;
  icon?: JSX.Element;
  subLinks?: SiteHeaderType[];
};

export type ProductCardInterface = {
  id: number;
  title: string;
  image: string;
  description: string;
  price: number;
  rating: number;
  totalReviews: number;
};

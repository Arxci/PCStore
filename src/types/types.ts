export type SiteHeaderType = {
  id: number;
  label: string;
  description?: string;
  href: string;
  icon?: JSX.Element;
  subLinks?: SiteHeaderType[];
};

export type ProductCardType = {
  id: number;
  title: string;
  image: string;
  description: string;
  price: number;
  rating: number;
  totalReviews: number;
};

export type BundleCardType = {
  image: string;
  heading: string;
  subHeading: string;
  href: string;
  ctaLabel: string;
};

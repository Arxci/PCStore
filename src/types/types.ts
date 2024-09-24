export type SiteHeaderType = {
  id: number;
  label: string;
  description?: string;
  href: string;
  icon?: JSX.Element;
  subLinks?: SiteHeaderType[];
};

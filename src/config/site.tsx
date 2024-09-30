import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import HomePage from "../components/pages/root/home";
import { Icons } from "../components/icons";

import { SiteHeaderType } from "../types/types";

const siteNavigation: SiteHeaderType[] = [
  {
    id: 0,
    label: "Home",
    href: "/",
  },
  {
    id: 1,
    label: "Shop",
    href: "/Shop",
  },
  {
    id: 2,
    label: "Components",
    href: "#",
    subLinks: [
      {
        id: 0,
        label: "Cases",
        href: "#",
        icon: <Icons.pcCase className="h-4 w-4 " />,
        subLinks: [
          {
            id: 1,
            label: "H9",
            href: "#",
            description: "Dual-Chamber Mid-Tower Cases",
          },
          {
            id: 2,
            label: "H7",
            href: "#",
            description: "ATX Mid-Tower Cases",
          },
          {
            id: 3,
            label: "H6",
            href: "#",
            description: "Compact Dual-Chamber ATX Mid-Tower",
          },
          {
            id: 4,
            label: "H5",
            href: "#",
            description: "Compact ATX Mid-Tower Cases",
          },
          {
            id: 5,
            label: "H1",
            href: "#",
            description: "Mini-ITX Small Form Factor",
          },
        ],
      },
      {
        id: 6,
        label: "Fans",
        href: "#",
        icon: <Icons.fan className="h-4 w-4 " />,
        subLinks: [
          {
            id: 7,
            label: "RGB",
            href: "#",
            description: "RGB Fans",
          },
          {
            id: 8,
            label: "Quiet Airflow",
            href: "#",
            description: "Case Fans",
          },
          {
            id: 9,
            label: "Static Pressure",
            href: "#",
            description: "Radiator Fans",
          },
        ],
      },
      {
        id: 10,
        label: "Power Supplies",
        href: "#",
        icon: <Icons.power className="h-4 w-4 " />,
        subLinks: [
          {
            id: 11,
            label: "Platinum",
            href: "#",
            description: "80 Plus Platinum ATX 3.1 PSUs",
          },
          {
            id: 12,
            label: "Gold",
            href: "#",
            description: "80 Plus Gold ATX PSUs",
          },
          {
            id: 13,
            label: "Bronze",
            href: "#",
            description: "80 Plus Bronze ATX PSUs",
          },
        ],
      },
      {
        id: 14,
        label: "CPU Coolers",
        href: "#",
        icon: <Icons.snowflake className="h-4 w-4 " />,
        subLinks: [
          {
            id: 15,
            label: "Kraken & Kraken Elite",
            href: "#",
            description: "AIO Liquid Coolers with LCD",
          },
          {
            id: 16,
            label: "Kraken 120",
            href: "#",
            description: "Liquid Cooler with RGB Cap",
          },
          {
            id: 17,
            label: "T120",
            href: "#",
            description: "Air Coolers",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    label: "Contact",
    href: "/Contact",
  },
  {
    id: 4,
    label: "FAQ",
    href: "/FAQ",
  },
];

type SiteConfigType = {
  name: string;
  description: string;
  navigation: SiteHeaderType[];
};

export const siteConfig: SiteConfigType = {
  name: "NZXT",
  description: "Site description",
  navigation: siteNavigation,
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/shop",
        element: <div>Shop</div>,
      },
    ],
  },
]);

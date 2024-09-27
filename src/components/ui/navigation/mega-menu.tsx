import { useState } from "react";

import { Divider, Link, Popover, PopoverContent } from "@nextui-org/react";

import { Icons } from "../../icons";

import useWindowDimensions from "../../../lib/hooks/useWindowDimensions";

import { SiteHeaderType } from "../../../types/types";

const MegaMenu = ({
  categories,
  children,
}: {
  categories: SiteHeaderType[];
  children?: React.ReactNode;
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useWindowDimensions(() => {
    setIsMenuOpen(false);
  });

  return (
    <Popover
      backdrop="opaque"
      placement="bottom-start"
      onOpenChange={setIsMenuOpen}
      isOpen={isMenuOpen}
    >
      {children}
      <PopoverContent aria-label="Categories" className="w-auto px-6 py-4">
        <ul className="flex flex-row gap-4">
          {categories?.map((category) => (
            <MegaMenuSection key={`mega-menu-${category.label}-${category.id}`}>
              <Link
                href={category.href}
                className="flex items-center group hover:bg-default-100 p-1.5 rounded-md hover:border-default-200 border-medium border-transparent transition-colors hover:text-success "
                color="foreground"
              >
                {category.icon}
                <span className="ml-2 group-hover:text-success uppercase ">
                  {category.label}
                </span>
                <Icons.chevronRight className="ml-auto group-hover:translate-x-[2px] transition-transform" />
              </Link>
              <Divider className="my-1.5" />
              <ul className="flex flex-col">
                {category?.subLinks?.map((link) => (
                  <MegaMenuLink
                    key={`mega-menu-${category.label}-${category.id}-${link.id}`}
                    href={link.href}
                    label={link.label}
                    description={link.description || ""}
                  />
                ))}
              </ul>
            </MegaMenuSection>
          ))}
        </ul>
      </PopoverContent>
    </Popover>
  );
};

const MegaMenuSection = ({ children }: { children: React.ReactNode }) => {
  return <li className="text-nowrap w-[200px]">{children}</li>;
};

const MegaMenuLink = ({
  href,
  label,
  description,
}: {
  href: string;
  label: string;
  description: string;
}) => {
  return (
    <li>
      <Link
        color="foreground"
        href={href}
        className={
          "flex flex-col space-y-1 items-start group hover:bg-default-100 p-1.5 rounded-md transition-colors hover:border-default-200 border-medium border-transparent"
        }
      >
        <span className="group-hover:text-success">{label}</span>
        <span className="text-tiny text-foreground-500 text-wrap">
          {description}
        </span>
      </Link>
    </li>
  );
};

export { MegaMenu };

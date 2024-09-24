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
            <li
              className="text-nowrap w-[200px]"
              key={`mega-menu-${category.label}-${category.id}`}
            >
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
                  <li
                    key={`mega-menu-${category.label}-${category.id}-${link.id}`}
                  >
                    <Link
                      color="foreground"
                      href={link.href}
                      className={
                        "flex flex-col space-y-1 items-start group hover:bg-default-100 p-1.5 rounded-md transition-colors hover:border-default-200 border-medium border-transparent"
                      }
                    >
                      <span className="group-hover:text-success">
                        {link.label}
                      </span>
                      <span className="text-tiny text-foreground-500 text-wrap">
                        {link.description}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </PopoverContent>
    </Popover>
  );
};

export { MegaMenu };

import { ChangeEvent, useState } from "react";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Input,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Accordion,
  AccordionItem,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Divider,
} from "@nextui-org/react";
import { useLocation } from "react-router-dom";

import { Icons } from "../../icons";
import { CartButton } from "../../ui/cart-button";

import useWindowDimensions from "../../../lib/hooks/useWindowDimensions";

import { siteConfig } from "../../../config/site";
import { cn } from "../../../lib/utils";
import { SearchInput } from "../../ui/search-input";
import { MegaMenu } from "../../ui/navigation/mega-menu";

const SiteHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <Navbar
      isBordered
      isBlurred={false}
      classNames={{
        wrapper: "max-w-[1200px]",
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
      }}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="lg:hidden"
      />
      <NavbarBrand className="flex-grow-0 mr-2 text-2xl">
        <p className="font-medium text-inherit">{siteConfig.name}</p>
      </NavbarBrand>

      <NavbarContent className="hidden lg:flex gap-4" justify="center">
        {siteConfig.navigation.map((link) =>
          link.subLinks ? (
            <MegaMenu key={`mega-menu-${link.id}`} categories={link.subLinks}>
              <NavbarItem>
                <PopoverTrigger>
                  <Button
                    disableRipple
                    className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                    radius="sm"
                    variant="light"
                    endContent={<Icons.chevronDown />}
                  >
                    {link.label}
                  </Button>
                </PopoverTrigger>
              </NavbarItem>
            </MegaMenu>
          ) : (
            <NavbarItem
              key={`nav-link-${link.id}`}
              isActive={location.pathname === link.href}
            >
              <Link
                href={link.href}
                aria-current="page"
                color={
                  location.pathname === link.href ? "success" : "foreground"
                }
                className="rounded-small"
              >
                {link.label}
              </Link>
            </NavbarItem>
          )
        )}
      </NavbarContent>
      <NavbarContent justify="end" className=" ">
        <SearchInput className="hidden lg:flex" />
        <CartButton />
        <NavbarItem className="hidden lg:flex">
          <Link href="#" className="rounded-small">
            Login
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Button as={Link} color="success" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMobileMenu />
    </Navbar>
  );
};

export { SiteHeader };

const NavbarMobileMenu = () => {
  return (
    <NavbarMenu>
      {siteConfig.navigation.map((link) =>
        link.subLinks ? (
          <NavbarMenuItem
            key={`mobile-menu-${link.label}-${link.id}`}
            className="[&>*]:px-0"
          >
            <Accordion
              showDivider={false}
              className="!p-0"
              itemClasses={{ trigger: "py-0" }}
            >
              <AccordionItem aria-label={link.label} title={link.label}>
                {link.subLinks.map((accordionLink) => (
                  <Link
                    key={`mobile-menu-${link.label}-${link.id}-${accordionLink.id}`}
                    color="foreground"
                    className="w-full py-1.5 flex justify-between items-center gap-4 group"
                    href={accordionLink.href}
                    size="lg"
                  >
                    {accordionLink.icon}
                    <div className="w-full flex flex-col items-start justify-center ">
                      <span className="flex-1 text-medium group-hover:text-success transition-colors">
                        {accordionLink.label}
                      </span>
                    </div>
                  </Link>
                ))}
              </AccordionItem>
            </Accordion>
          </NavbarMenuItem>
        ) : (
          <NavbarMenuItem
            isActive={location.pathname === link.href}
            key={`mobile-menu-${link.label}-${link.id}`}
          >
            <Link
              color={location.pathname === link.href ? "success" : "foreground"}
              className="w-full"
              href={link.href}
              size="lg"
            >
              {link.label}
            </Link>
          </NavbarMenuItem>
        )
      )}
      <NavbarMenuItem>
        <Link href="#" size="lg" className="w-full">
          Login
        </Link>
      </NavbarMenuItem>
      <NavbarMenuItem>
        <Button as={Link} color="success" fullWidth href="#" variant="flat">
          Sign Up
        </Button>
      </NavbarMenuItem>
    </NavbarMenu>
  );
};

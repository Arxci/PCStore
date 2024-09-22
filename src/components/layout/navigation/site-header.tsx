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

import useWindowDimensions from "../../../hooks/useWindowDimensions";

import { siteConfig } from "../../../config/site";
import { cn } from "../../../lib/utils";

const SiteHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <Navbar
      isBordered
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
        {siteConfig.navigation.primaryNavigationLinks.map((link) =>
          link.subLinks ? (
            <NavbarMegaMenu key={`nav-menu-${link.id}`} link={link} />
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
          <Link href="#">Login</Link>
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

const SearchInput = ({ className }: { className?: string }) => {
  const [hasFocus, setHasFocus] = useState(false);
  const [input, setInput] = useState("");

  const handleBlur = () => {
    setHasFocus(false);
  };

  const handleFocus = () => {
    setHasFocus(true);
  };

  const handleInputChanged = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleClearInput = () => {
    setInput("");
  };

  return (
    <form className="w-full sm:max-w-[20rem] ">
      <label htmlFor="search" className="sr-only">
        Search for a course
      </label>
      <Input
        classNames={{
          base: "w-full h-10",
          mainWrapper: "h-full",
          input: "text-small",
          inputWrapper:
            "h-full font-normal text-default-500 bg-default-100/80 dark:bg-default-100/80 border-default-200 border-medium ",
        }}
        placeholder="Type to search..."
        size="sm"
        startContent={
          <Button
            isIconOnly
            variant="light"
            size="sm"
            className={cn(input ? "flex" : "hidden")}
            onClick={handleClearInput}
            isDisabled={!input}
          >
            <span className="sr-only">Clear search</span>
            <Icons.close />
          </Button>
        }
        endContent={
          <div className="w-8 h-8 flex justify-center items-center">
            <Icons.search />
          </div>
        }
        type="text"
        name="search"
        autoComplete="off"
        id="search"
        className={className}
        value={input}
        onChange={handleInputChanged}
        onBlur={handleBlur}
        onFocus={handleFocus}
      />
    </form>
  );
};

const NavbarMegaMenu = ({
  link,
}: {
  link: (typeof siteConfig.navigation.primaryNavigationLinks)[0];
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useWindowDimensions((newSize) => {
    if (newSize.width <= 1024) {
      setIsMenuOpen(false);
    }
  });

  if (!link.subLinks) return null;

  return (
    <Popover
      backdrop="opaque"
      placement="bottom-start"
      onOpenChange={setIsMenuOpen}
      isOpen={isMenuOpen}
    >
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
      <PopoverContent aria-label="Categories" className="w-auto px-6 py-4">
        <ul className="flex flex-row gap-4">
          {link.subLinks.map((menu) => (
            <MegaMenuSection key={`nav-menu-content-${menu.id}`}>
              <MegaMenuLabel
                href={menu.href}
                label={menu.label}
                icon={menu.icon}
              />
              <Divider className="my-1.5" />
              <ul className="flex flex-col">
                {menu.sublinks.map((menuLink) => (
                  <MegaMenuLink
                    key={`nav-menu-link-${menu.label}-${menuLink.id}`}
                    href={menuLink.href}
                  >
                    <>
                      <span className="group-hover:text-success">
                        {menuLink.label}
                      </span>
                      <span className="text-tiny text-foreground-500 text-wrap">
                        {menuLink.description}
                      </span>
                    </>
                  </MegaMenuLink>
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

const MegaMenuLabel = ({
  href,
  icon,
  label,
}: {
  href: string;
  icon: JSX.Element;
  label: string;
}) => {
  return (
    <Link
      href={href}
      className="flex items-center group hover:bg-default-100 p-1.5 rounded-md hover:border-default-200 border-medium border-transparent transition-colors hover:text-success "
      color="foreground"
    >
      {icon}
      <span className="ml-2 group-hover:text-success uppercase ">{label}</span>
      <Icons.chevronRight className="ml-auto group-hover:translate-x-[2px] transition-transform" />
    </Link>
  );
};

const MegaMenuLink = ({
  href,
  children,
}: {
  href: string;
  children?: React.ReactNode;
}) => {
  return (
    <li>
      <Link
        href={href}
        className="flex flex-col space-y-1 items-start group hover:bg-default-100 p-1.5 rounded-md hover:border-default-200 border-medium border-transparent transition-colors"
        color="foreground"
      >
        {children}
      </Link>
    </li>
  );
};

const NavbarMobileMenu = () => {
  return (
    <NavbarMenu>
      {siteConfig.navigation.primaryNavigationLinks.map((link) =>
        link.subLinks ? (
          <NavbarMenuItem key={`nav-mobile-${link.id}`} className="[&>*]:px-0">
            <Accordion
              showDivider={false}
              className="!p-0"
              itemClasses={{ trigger: "py-0" }}
            >
              <AccordionItem aria-label={link.label} title={link.label}>
                {link.subLinks.map((accordionLink) => (
                  <Link
                    key={`nav-mobile-link-${accordionLink.id}`}
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
            key={`nav-mobile-${link.label}-${link.id}`}
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

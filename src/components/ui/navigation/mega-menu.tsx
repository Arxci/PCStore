import { MouseEvent, useRef, useState, useMemo, useCallback } from "react";

import { Divider, Link, Popover, PopoverContent } from "@nextui-org/react";
import { motion } from "framer-motion";

import { Icons } from "../../icons";

import useWindowDimensions, {
  WindowSize,
} from "../../../lib/hooks/useWindowDimensions";

import { SiteHeaderType } from "../../../types/types";
import { cn } from "../../../lib/utils";

interface MegaMenuProps {
  categories: SiteHeaderType[];
  children?: React.ReactNode;
}

interface MenuItemProps {
  href: string;
  label: string;
  description?: string;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  classNames?: { link?: string; label?: string; description?: string };
  onHover: (position: {
    top: number;
    left: number;
    width: number;
    height: number;
  }) => void;
}

const MegaMenu = ({ categories, children }: MegaMenuProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoverPosition, setHoverPosition] = useState<{
    top: number;
    left: number;
    width: number;
    height: number;
  } | null>(null);
  const parentElement = useRef<HTMLDivElement | null>(null);

  const memoizedCategories = useMemo(() => categories, [categories]);

  useWindowDimensions(
    useCallback((size: WindowSize) => {
      setIsMenuOpen(false);
    }, []),
    100
  );

  const calculateHoverPosition = (position: {
    top: number;
    left: number;
    width: number;
    height: number;
  }) => {
    const parentRect = parentElement.current?.getBoundingClientRect();
    return parentRect
      ? {
          ...position,
          top: position.top - parentRect.top,
          left: position.left - parentRect.left,
        }
      : { ...position, top: 0, left: 0 };
  };

  const handleHover = useCallback(
    (position: {
      top: number;
      left: number;
      width: number;
      height: number;
    }) => {
      setHoverPosition(calculateHoverPosition(position));
    },
    []
  );

  const openHandle = (isOpen: boolean) => {
    if (!isOpen) {
      setHoverPosition(null);
    }
    setIsMenuOpen(isOpen);
  };

  return (
    <Popover
      backdrop="opaque"
      placement="bottom-start"
      onOpenChange={openHandle}
      isOpen={isMenuOpen}
    >
      {children}
      <PopoverContent aria-label="Categories" className="w-auto px-6 py-4">
        <div ref={parentElement} className="relative">
          <ul className="flex flex-row gap-4">
            {memoizedCategories?.map((category) => (
              <li className="text-nowrap w-[200px]" key={category.id}>
                <MenuItem
                  href={category.href}
                  label={category.label}
                  startContent={category.icon}
                  endContent={
                    <Icons.chevronRight className="group-hover:translate-x-[2px] transition-transform" />
                  }
                  classNames={{ label: "ml-2 uppercase" }}
                  onHover={handleHover}
                />
                <Divider className="my-1.5" />
                <ul className="flex flex-col">
                  {category?.subLinks?.map((link) => (
                    <li key={link.id} className="relative">
                      <MenuItem
                        href={link.href}
                        label={link.label}
                        description={link.description}
                        onHover={handleHover}
                      />
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          {hoverPosition && (
            <motion.div
              layoutId="hovered-link"
              className="absolute rounded-md border-medium border-default-200 bg-default-100"
              style={{
                top: hoverPosition.top,
                left: hoverPosition.left,
                width: hoverPosition.width,
                height: hoverPosition.height,
                zIndex: 0,
              }}
              transition={{ duration: 0.3 }}
            />
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
};

const MenuItem = ({
  href,
  label,
  description,
  startContent,
  endContent,
  classNames,
  onHover,
}: MenuItemProps) => {
  const debounceTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = (e: MouseEvent) => {
    e.persist();

    const rect = e.currentTarget.getBoundingClientRect();
    const position = {
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height,
    };

    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }

    debounceTimeoutRef.current = setTimeout(() => {
      onHover(position);
    }, 100);
  };

  const handleMouseLeave = (e: MouseEvent) => {
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }
  };

  return (
    <Link
      color="foreground"
      href={href}
      className={
        "relative flex flex-col items-start group p-1.5 z-20 bg-transparent rounded-md"
      }
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative z-10 flex flex-col space-y-1 items-start w-full">
        <div className="flex items-center w-full">
          <span>{startContent}</span>
          <p
            className={cn(
              "group-hover:text-success transition-colors",
              classNames?.label
            )}
          >
            {label}
          </p>
          <span className="ml-auto">{endContent}</span>
        </div>
        {description && (
          <p
            className={cn(
              "text-sm text-foreground-500 text-wrap",
              classNames?.description
            )}
          >
            {description}
          </p>
        )}
      </div>
    </Link>
  );
};

export { MegaMenu };

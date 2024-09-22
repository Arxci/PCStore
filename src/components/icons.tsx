import {
  Component,
  Moon,
  Search,
  Sun,
  X,
  ChevronDown,
  ChevronRight,
  Fan,
  Power,
  Snowflake,
  PcCase,
  ShoppingCart,
  CirclePlus,
  TrendingUp,
  Award,
} from "lucide-react";

import { cn } from "../lib/utils";

export interface IconProps {
  className?: string;
}

const defaultStyle = "text-foreground w-4 h-4";

export const Icons = {
  sun: (props: IconProps) => (
    <Sun {...props} className={cn(defaultStyle, props.className)} />
  ),
  logo: (props: IconProps) => (
    <Component {...props} className={cn(defaultStyle, props.className)} />
  ),
  moon: (props: IconProps) => (
    <Moon {...props} className={cn(defaultStyle, props.className)} />
  ),
  close: (props: IconProps) => (
    <X {...props} className={cn(defaultStyle, props.className)} />
  ),
  search: (props: IconProps) => (
    <Search {...props} className={cn(defaultStyle, props.className)} />
  ),
  chevronDown: (props: IconProps) => (
    <ChevronDown {...props} className={cn(defaultStyle, props.className)} />
  ),
  chevronRight: (props: IconProps) => (
    <ChevronRight {...props} className={cn(defaultStyle, props.className)} />
  ),
  fan: (props: IconProps) => (
    <Fan {...props} className={cn(defaultStyle, props.className)} />
  ),
  power: (props: IconProps) => (
    <Power {...props} className={cn(defaultStyle, props.className)} />
  ),
  snowflake: (props: IconProps) => (
    <Snowflake {...props} className={cn(defaultStyle, props.className)} />
  ),
  pcCase: (props: IconProps) => (
    <PcCase {...props} className={cn(defaultStyle, props.className)} />
  ),
  cart: (props: IconProps) => (
    <ShoppingCart {...props} className={cn(defaultStyle, props.className)} />
  ),
  plus: (props: IconProps) => (
    <CirclePlus {...props} className={cn(defaultStyle, props.className)} />
  ),
  trending: (props: IconProps) => (
    <TrendingUp {...props} className={cn(defaultStyle, props.className)} />
  ),
  award: (props: IconProps) => (
    <Award {...props} className={cn(defaultStyle, props.className)} />
  ),
};
